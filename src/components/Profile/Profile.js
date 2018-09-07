import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Profile = props => (
  <div>
    <div className="container">
        <img className="avatar-img" src={props.user.avatar} alt={props.user.first_name} />
        <p className="userName">{props.user.first_name} {props.user.last_name}</p>
        <button className="delete" onClick={() => props.onDelete(props.user.id)}>Delete</button>
    </div>

    
  </div>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Profile;
