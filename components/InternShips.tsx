import story from '../studio/schemas/story'
import { InternShip } from '../types '

const InternShips = ({ data }) => {
  const { internShips } = data
  return (
    <div
      id="intern"
      style={{
        backgroundColor: `${data.themeColors[0].internSectionColor.color_code}`,
      }}
    >
      <div className="container mx-auto w-full p-4 lg:p-12">
        <h1
          // id={`slide ${idx}`}
          style={{
            marginBottom: '20px',
            // color: 'black',
          }}
          className=" font-bold text-center text-3xl text-wtTango"
        >
          Meet our Internship
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {internShips.map((internShip: InternShip, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12"
            >
              <div className="flex items-center text-blue-500">
                {/* <p className="text-sm font-bold uppercase">
                  Feature 1 & Feature 2
                </p> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-slate-800">
                {internShip.name.name}
              </h2>

              <p className="mt-4 text-lg text-slate-600">{internShip.story}</p>

              <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110">
                <div
                // className=""
                // style={{
                //   width: '500px',
                //   height: '300px',
                //   backgroundImage: `url(${internShip.name.image})`,
                //   backgroundPosition: 'center',
                //   backgroundRepeat: 'no-repeat',
                //   backgroundSize: 'cover',
                // }}
                >
                  <img
                    className="aspect-auto h-80"
                    src={internShip.name.image}
                    alt="photo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InternShips
