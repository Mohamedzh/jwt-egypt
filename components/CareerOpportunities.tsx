import Link from 'next/link'

const CareerOpportunities = () => {
  return (
    <div
      className="border-t border-b bg-opacity-10 px-3 py-20 md:lg:xl:px-40"
      style={
        {
          // backgroundImage: `{url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')}`,
        }
      }
    >
      <div className="shadow-neutral-100 group grid grid-cols-1 border bg-white shadow-xl md:lg:xl:grid-cols-3 ">
        <Link href="/applicationinfo">
          <div className="group flex cursor-pointer flex-col items-center p-10 text-center hover:bg-slate-50 md:lg:xl:border-r md:lg:xl:border-b">
            <span className="rounded-full bg-red-500 p-5 text-white shadow-lg shadow-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <p className="mt-3 text-xl font-medium text-slate-700">
              Most Experienced Team
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Team BrainEdge education is a bunch of highly focused, energetic
              set of people.
            </p>
          </div>
        </Link>

        <div className="group flex cursor-pointer flex-col items-center p-10 text-center hover:bg-slate-50 md:lg:xl:border-r md:lg:xl:border-b">
          <span className="rounded-full bg-orange-500 p-5 text-white shadow-lg shadow-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </span>
          <p className="mt-3 text-xl font-medium text-slate-700">
            Best Test preparation
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Know where you stand and what next to do to succeed .
          </p>
        </div>

        <div className="group flex cursor-pointer flex-col items-center p-10   text-center hover:bg-slate-50 md:lg:xl:border-b">
          <span className="rounded-full bg-yellow-500 p-5 text-white shadow-lg shadow-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </span>
          <p className="mt-3 text-xl font-medium text-slate-700">
            Admission process Guidance
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Professional Advice for higher education abroad and select the top
            institutions worldwide.
          </p>
        </div>

        <div className="group flex cursor-pointer flex-col items-center p-10   text-center hover:bg-slate-50 md:lg:xl:border-r">
          <span className="rounded-full bg-lime-500 p-5 text-white shadow-lg shadow-lime-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </span>
          <p className="mt-3 text-xl font-medium text-slate-700">
            Best Track Record
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Yet another year ! Yet another jewel in our crown!
          </p>
        </div>

        <div className="group flex cursor-pointer flex-col items-center p-10    text-center hover:bg-slate-50 md:lg:xl:border-r">
          <span className="rounded-full bg-teal-500 p-5 text-white shadow-lg shadow-teal-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <p className="mt-3 text-xl font-medium text-slate-700">
            Free Mock Exams
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Get Topic-Wise Tests, Section- Wise and mock tests for your
            preparation.
          </p>
        </div>

        <div className="group flex cursor-pointer flex-col items-center p-10     text-center hover:bg-slate-50">
          <span className="rounded-full bg-indigo-500 p-5 text-white shadow-lg shadow-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </span>
          <p className="mt-3 text-xl font-medium text-slate-700">
            Genuine Visa Advice
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Visa process by helping you create the necessary documentation
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareerOpportunities
