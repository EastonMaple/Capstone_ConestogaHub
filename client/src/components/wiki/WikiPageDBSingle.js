import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api';
import BackgroundGrid from '../decorative/BackgroundGrid';

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

  const commentList = wikis.comments?.map((comment) => {
    return <div>{comment.name}</div>;
  });

  return (
    <>
      <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
        <BackgroundGrid />
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4'>
              <div className='lg:max-w-prose'>
                <p className='text-base font-semibold leading-7 text-indigo-600'>
                  Test Tag {/*wikis.tag*/}
                </p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  {wikis.title}
                </h1>
                <p className='mt-6 text-xl leading-8 text-gray-700'>
                  {wikis.text}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 ml-96 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
            <ul>
              <li>
                <a href=''>School website</a>
              </li>
              <li>
                <a href=''>School website</a>
              </li>
              <li>
                <a href=''>School website</a>
              </li>
              <li>
                <a href=''>School website</a>
              </li>
              <li>
                <a href=''>School website</a>
              </li>
              <li>
                <a href=''>School website</a>
              </li>
              <li>
                <a href=''>School website</a>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4'>
              <div className='text-base leading-7 text-gray-700'>
                <p>{wikis.text}</p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <br />
                <Link to='/wiki'>Back to Wiki Page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WikiPageDBSingle;
