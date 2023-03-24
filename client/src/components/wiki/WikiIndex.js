import React from 'react';
import { Link, Navigate } from 'react-router-dom';

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
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/banners/visit-us-banner.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/banners/admissions.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/banners/open-programs.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/banners/trades-and-apprenticeship.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/banners/fulltime.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/banners/programs-courses.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://www-assets.conestogac.on.ca/images/corporate-website-2019/images/home-page/open-house01.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='inline-block'>
                  <Link to={wikiPagesDict['part time jobs']}>
                    <li>How to find part-time jobs</li>
                  </Link>
                  <li>How to apply for study permit (and extension)</li>
                  <Link to={wikiPagesDict['work permit']}>
                    <li>How to apply for work permit</li>
                  </Link>
                  <Link to={wikiPagesDict['health insurance']}>
                    <li>Health Insurance</li>
                  </Link>
                  <li>How to find your timetable</li>
                  <li>How to find room for rent</li>
                  <li>How to apply for G1 license</li>
                  <li>Immigration Information for students</li>
                  <li>Immigration information for family members</li>
                  <li>Social insurance number for international students</li>
                  <li>Introduction to conestoga college learning</li>
                  <li>Familiarize new students with banking services</li>
                  <li>Local and regional transportation</li>
                  <li>Familiarize new students with mobile services</li>
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
