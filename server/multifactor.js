let speakeasy = require('speakeasy')
let Bluebird = require('bluebird')
// let qrcode = Promise.promisifyAll('qrcode')
let qrcode = require('qrcode')

const genSecretKey = async (ctx, next) => {
	console.log(await speakeasy.generateSecret({length: 32, name: 'Rentopia'}))
	return await speakeasy.generateSecret({length: 32, name: 'Rentopia'})
}
exports.genSecretKey = genSecretKey

const genTimeToken = async (ctx, key, next) => {
	//let secret = /////retrieve secret here
	let secret
	if(key) secret = key
	if(secret.base32) secret = secret.base32
	let token = speakeasy.totp({
		secret: secret,
		encoding: 'base32',
		// algorithm: 'sha256' //This is not controlled by us with Google
	})
	return token
}
exports.genTimeToken = genTimeToken

const validateToken = async (ctx, token, secret, next) => {
	let validates
	//secret = /////retrieve secret here
	validates = await speakeasy.totp.verify({
		secret: secret,
		encoding: 'base32',
		token: token,
		window: 10,
		// algorithm: 'sha256'  //This is not controlled by us with Google
	})
	return validates
}
exports.validateToken = validateToken

const updateUserMulti = async (ctx, user) => {
	let out
	out = await ctx.db.query(`UPDATE users SET (use_twofactor) = (true) WHERE user_id = ${user.user_id} RETURNING *;`)
	out = out.rows[0]
	return out
}
exports.updateUserMulti = updateUserMulti

const genUserMulti = async (ctx, user_id) => {
	let secret, qrUrl, user
	secret = await genSecretKey()
	let qrUrlPromisified = Bluebird.promisify(qrcode.toDataURL)
	qrUrl = await qrUrlPromisified(secret.otpauth_url)
	if(secret && qrUrl) {
		user = await ctx.db.query(`UPDATE users SET (twofactor_auth, secret_url) = ('${secret.base32}', '${qrUrl}') WHERE user_id = ${user_id} RETURNING *;`)
		return user.rows[0]
	} else {
		return
	}
}
exports.genUserMulti = genUserMulti

const removeUserMulti = async (ctx, user_id) => {
	let secret, qrUrl, user
	user = await ctx.db.query(`UPDATE users SET (twofactor_auth, secret_url, use_twofactor) = ('', '', false) WHERE user_id = ${user_id} RETURNING *;`)
	return user.rows[0]
}
exports.removeUserMulti = removeUserMulti