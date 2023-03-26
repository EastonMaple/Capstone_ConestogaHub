import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api';
import BackgroundGrid from '../decorative/BackgroundGrid';
import './WikiPageDBSingle.css';

// get a single wiki
const getSingleWiki = async (id) => {
  try {
    const res = await api.get(`/wiki/${id}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// this component is used to display a single wiki in the database
const WikiPageDBSingle = () => {
  const [wikis, setWikis] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getSingleWiki(id).then((data) => {
      setWikis(data);
    });
  }, []);

  // const commentList = wikis.comments?.map((comment) => {
  //   return <div>{comment.name}</div>;
  // });

  return (
    <>
      <div className='relative overflow-hidden bg-white py-16'>
        <BackgroundGrid />
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-screen-lg text-lg'>
            <h1>
              <span className='block text-center text-lg font-semibold text-indigo-600 mt-4'>
                Test Tag {/*wikis.tag*/}
              </span>
              <span className='mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                {wikis.title}
              </span>
            </h1>
            <div className='contentContainer p-4'>
              <div dangerouslySetInnerHTML={{ __html: wikis.text }}></div>
            </div>
          </div>

          <div className='lg:pr-4'>
            <div className='text-base leading-7 text-gray-700'>
              <br />
              <Link to='/wiki'>Back to Wiki Page</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WikiPageDBSingle;
