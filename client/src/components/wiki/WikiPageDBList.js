import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

// get all wikis
const getWikis = async () => {
  try {
    const res = await api.get('/wiki');
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// load user
const loadUser = async () => {
  try {
    const res = await api.get('/auth');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// this component is used to display all wikis in the database
const WikiPageDBList = () => {
  const [wikis, setWikis] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getWikis().then((data) => {
      setWikis(data);
    });
    loadUser().then((data) => {
      setUser(data);
    });
  }, []);

  let wikisList = null;
  const hasWikis = wikis.length !== 0;
  if (hasWikis) {
    wikisList = wikis.map((wikiObj) => (
      <div className='sm:max-w-lg'>
        <li>
          <Link to={`/wiki/${wikiObj._id}`}>{wikiObj.title}</Link>
        </li>
      </div>
    ));
  } else {
    wikisList = <div>No wiki!</div>;
  }

  // get the user type
  console.log(user.type);

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

export default WikiPageDBList;
