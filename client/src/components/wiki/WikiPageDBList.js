import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from '../../utils/api';

// get all wikis
const getWikis = async () => {
  try {
    const res = await api.get("/wiki");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// this component is used to display all wikis in the database
const WikiPageDBList = () => {
  const [wikis, setWikis] = useState([]); 

  useEffect(() => {
    getWikis().then((data) => {
      setWikis(data);
    });
  }, []);

  let wikisList = null;
  const hasWikis = wikis.length !== 0;
  if (hasWikis) {
    wikisList = wikis.map((wikiObj) => (
      <div>
        <li><Link to={`/wiki/${wikiObj._id}`}>{wikiObj.title}</Link></li>
      </div>
    ));
  } else {
    wikisList = <div>No wiki!</div>;
  }
  return (
    <>
      {wikisList}
    </>
  );
}

export default WikiPageDBList;