import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getWikis } from '../../actions/wiki';

// this component is used to display all wikis in the database
const WikiPageDBList = ({user, getWikis, wikis}) => {
  useEffect(() => {
    getWikis();
  }, [getWikis]);

  let wikisList = null;
  const hasWikis = wikis.length !== 0;
  if (hasWikis) {
    wikisList = wikis.map((wikiObj, index) => (
      <div className='sm:max-w-lg' key={index}>
        <li>
          <Link to={`/wiki/${wikiObj._id}`}>{wikiObj.title}</Link>
        </li>
      </div>
    ));
  } else {
    wikisList = <div>No wiki!</div>;
  }

  // get the user type
  // console.log('user type is: ' + user.type);

  // if the user type is admin, show the create wiki link
  return (
    <>
      {user.type === 'admin' ? (
        <Link to='/create-wiki'>Create a new wiki</Link>
      ) : null}
      {wikisList}
    </>
  );
};

WikiPageDBList.propTypes = {
  user: propTypes.object.isRequired,
  wikis: propTypes.array.isRequired,
  getWikis: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  wikis: state.wiki.wikis,
});

export default connect(mapStateToProps,{getWikis})(WikiPageDBList) ;
