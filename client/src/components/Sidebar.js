import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLightbulb, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="card bg-dark-blue">
      <div className="card-body">
        <div className="sidebar">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <div className="sidebar-icon bg-dark-blue-hover mb-4">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="sidebar-icon bg-dark-blue-hover mb-4">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div className="sidebar-icon bg-dark-blue-hover mb-4">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="sidebar-icon bg-dark-blue-hover">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;