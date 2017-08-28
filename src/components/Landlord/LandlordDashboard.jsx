import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import LandlordNavBar  from './LandlordNavBar';

import './LandlordStyle.css'

class LandlordDashboard extends React.Component {

  render() {
    return (
      <div>
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
