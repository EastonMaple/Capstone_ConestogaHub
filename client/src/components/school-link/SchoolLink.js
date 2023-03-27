
const posts = [
  {
    id: 1,
    title: 'eConestoga',
    href: 'https://conestoga.desire2learn.com/d2l/home',
    description:
      'Learning Management System used at College. This is where you will find your courses and assignments. You will also be able to communicate with your professors and classmates. You will need to login with your Conestoga email address and password.',
    date: 'Mar 27, 2023',
    datetime: '2023-03-27',
    category: { title: 'Learn', href: '#' },
  },
  {
    id: 2,
    title: 'Student Portal',
    href: 'https://studentportal.conestogac.on.ca/StudentPortal/Default.aspx',
    description:
      'This is where you will find your grades, financial aid, and other important information. You will need to login with your Conestoga email address and password. If you are having trouble logging in, please contact the IT Help Desk at 519-748-5220 ext. 4357.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Account', href: '#' },
  },
  {
    id: 3,
    title: 'Library Services',
    href: 'https://library.conestogac.on.ca/',
    description:
      'This is where you will find the library services. You will be able to book an appointment with a librarian, access the library catalogue, and find information on how to use the library. You can also book a study room through the website. Also get help for writing and citing.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Learn', href: '#' },
  },
  {
    id: 4,
    title: 'School Directory',
    href: 'https://www.conestogac.on.ca/directory',
    description:
      'This directory provides contact information for full-time permanent employees. If you are looking for a specific person, you can use the search function. If you are looking for a specific department, please use the drop-down menu.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Info', href: '#' },
  },
  {
    id: 5,
    title: 'Program Handbook',
    href: 'https://www.conestogac.on.ca/handbook/0066',
    description:
      'This is where you will find the program handbook. This handbook contains information about the program, including the program description, program outcomes, program requirements, and program policies.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Rules', href: '#' },
  },
  {
    id: 6,
    title: 'IT Services',
    href: 'https://it.conestogac.on.ca/',
    description:
      'You will be able to access the IT Knowledge Base, and the IT Service Catalogue. You can also find information on how to access your Conestoga email, how to access your Conestoga files, and how to access your Conestoga computer.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Learn', href: '#' },
  },
  {
    id: 6,
    title: 'ONE Card',
    href: 'https://www.conestogac.on.ca/onecard/get-your-card',
    description:
      'Everyone needs a ONE Card. And remember to use your up to date photo, otherwise you will end up embarrassed while school officials refuse to believe its you and ask you to leave the building.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Account', href: '#' },
  },
  {
    id: 7,
    title: 'CSI',
    href: 'https://conestogastudents.com/',
    description:
      'Just like the famous show, this official student association is here to support all your school related needs. Shout out to the CSI team for lending Yunxiang table tennis brackets all the time.',
    date: 'Mar 27, 2023',
    datetime: '2020-03-27',
    category: { title: 'Account', href: '#' },
  },
]

const SchoolLink = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Useful Links</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            These are some editor's choice (keep in mind it is very hard to impress Khaled bro) that we think are useful for students.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchoolLink;