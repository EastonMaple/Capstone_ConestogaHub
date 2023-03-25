
const ImageGrid = () => {
  return (
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
  );
};

export default ImageGrid;