import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => (
      <div>
        <div className="container">
          <div className="avatarContainer">
            <img className="avatar" src={props.user.avatar} alt=""/>
            <div><p className='userName' >{props.user.first_name} {props.user.last_name}</p></div>
          </div>
          <button className="delete" onClick={() => props.onDelete(props.user.id)}>Delete</button>
         </div>
      </div>
); 

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Profile;