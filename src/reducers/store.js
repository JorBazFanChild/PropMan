import { combineReducers } from 'redux';
import { userData, tenantData, messages, notifications, docs, properties, isLoggedIn} from './reducers'
import { selectedTenantMedia } from './tenantReducer';
import { tenantPaidRent } from './paymentReducer'

const rootReducer = combineReducers({
  selectedTenantMedia: selectedTenantMedia,
  user: userData,
  tenantData: tenantData,
  messages: messages,
  notifications: notifications,
  docs: docs,
  properties: properties,
  loggedIn: isLoggedIn
});

export default rootReducer;