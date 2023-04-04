import React from 'react';
import { Link } from 'react-router-dom';
import ImageGrid from '../decorative/ImageGrid';
import WikiPageDBList from './WikiPageDBList';

export const wikiPagesDict = {
  'part time jobs': '/WikiPage',
  'health insurance': '/WikiPage2',
  'work permit': '/WikiPage3',
  'study permit': '/WikiPage4',
};

const WikiIndex = () => {
  return (
    <>
      <div className='relative overflow-hidden bg-white'>
        <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
          <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
            <div className='sm:max-w-lg'>
              <h1 className='font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Welcome to the wiki page!
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                Here you will find articles you may find helpful as you start
                college terms!
              </p>
            </div>
            <div>
              <div className='mt-10'>
                {/* Decorative image grid */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
                >
                  <ImageGrid />
                </div>
                <div className='inline-block'>
                  <WikiPageDBList />
                  <Link to={wikiPagesDict['part time jobs']}>
                    <li>How to find part-time jobs</li>
                  </Link>
                  <Link to={wikiPagesDict['work permit']}>
                    <li>How to apply for work permit</li>
                  </Link>
                  <Link to={wikiPagesDict['health insurance']}>
                    <li>Health Insurance</li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WikiIndex;
