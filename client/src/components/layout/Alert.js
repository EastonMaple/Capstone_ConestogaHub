import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// The Alert component takes the alerts array from the props object and maps over it.
// For each alert, the component returns a div with the alert message and the alert type.
// The alert type is used to set the class name of the div.
const Alert = ({ alerts }) => (
  <div className="alert-wrapper">
    {alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))}
  </div>
);

// The component uses the PropTypes library to define the type of the alerts property.
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// The mapStateToProps function takes the state as a parameter and returns an object with the alerts array.
const mapStateToProps = (state) => ({
  alerts: state.alert
});

// The component uses the connect function to connect to the Redux store.
export default connect(mapStateToProps)(Alert);
