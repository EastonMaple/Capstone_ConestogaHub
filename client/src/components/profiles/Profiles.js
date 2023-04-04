import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, setTitle, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
    setTitle('Student Profiles'); // update the title when the component is mounted
  }, [getProfiles]);
  //Usestate to store the User search
  const [searchUser, setSearchUser] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted with value: ${profiles[0].user.name}`);
    // Do something with the form data, such as send it to a server
  };
  //handle changes
  const handleChange = (event) => {
    setSearchUser(event.target.value);
  };
  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Students</h1>
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Search by name" value={searchUser} onChange={handleChange}/>
                <button type="submit"><i style={{margin:"10px"}} className="fa fa-search"></i></button>
            </form>
          </div>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            students
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.filter((profile)=> searchUser ? profile.user.name.toLowerCase().includes(searchUser.toLowerCase()):true)
              .map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
