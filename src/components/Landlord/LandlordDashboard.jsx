import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LandlordHeader  from './LandlordHeader.jsx';
import Properties  from './LandlordProperties.jsx';
import Tenants  from './LandlordTenants.jsx';

import './LandlordStyle.css'

class LandlordDashboard extends React.Component {

  render() {
    return (
      <div>
        <LandlordHeader />
        <h3 className="pageTitle"> Manage your Estate </h3>
        <main>
          <Switch>
            <Route path='/proprietor/properties' component={Properties} />
            <Route path='/proprietor/tenants' component={Tenants} />
          </Switch>
        </main>
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
