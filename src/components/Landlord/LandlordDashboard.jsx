import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LandlordNavBar  from './LandlordNavBar.jsx';
import Properties  from './LandlordProperties.jsx';
import Tenants  from './LandlordTenants.jsx';

import './LandlordStyle.css'

class LandlordDashboard extends React.Component {

  render() {
    return (
      <div>
        <LandlordNavBar />
        <main>
          <Switch>
            <Route path='/proprietor/properties' component={Properties} />
            <Route path='/proprietor/tenants' component={Tenants} />
          </Switch>
        </main>
        <h3> LandLordz </h3>
        <p> {this.props.media} </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    media: state.selectedLandlordMedia
  }
}

export default connect(mapStateToProps)(LandlordDashboard)
