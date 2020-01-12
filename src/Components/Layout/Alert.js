import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        <FontAwesomeIcon icon="info-circle" />
        {alert.msg}
      </div>
    )
  );
};
