import InspiringStory from './InspiringStory'
import { InspStories } from '../types '

const inspStories: InspStories[] = [
  {
    image: {
      img: 'https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif',
      alt: 'Display Picture of Andres Berlin',
    },
    name: 'Andres Berlin',
    job: 'Chief Executive Officer',
    jobDisc: `The CEO's role in raising a company's corporate IQ is to
    establish an atmosphere that promotes knowledge sharing and
    collaboration.`,
    contact: [
      {
        name: 'Github',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Twitter',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Instagram',
        url: 'http://www.w3.org/2000/svg',
      },
    ],
  },
  {
    image: {
      img: 'https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif',
      alt: 'Display Picture of Silene Tokyo',
    },
    name: 'Silene Tokyo',
    job: 'Product Design Head',
    jobDisc: `The emphasis on innovation and technology in our companies
    has resulted in a few of them establishing global benchmarks
    in product design and development.`,
    contact: [
      {
        name: 'Github',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Twitter',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Instagram',
        url: 'http://www.w3.org/2000/svg',
      },
    ],
  },
  {
    image: {
      img: 'https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif',
      alt: 'Display Picture of Johnson Stone',
    },
    name: 'Johnson Stone',
    job: 'Manager Development',
    jobDisc: `Our services encompass the assessment and repair of property
    damage caused by water, fire, smoke, or mold. We can also be
    a part of the restoration.`,
    contact: [
      {
        name: 'Github',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Twitter',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Instagram',
        url: 'http://www.w3.org/2000/svg',
      },
    ],
  },
  {
    image: {
      img: 'https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg',
      alt: 'Display Picture of Dean Jones',
    },
    name: 'Dean Jones',
    job: 'Principal Software Engineer',
    jobDisc: `An avid open-source developer who loves to be creative and
    inventive. I have 20 years of experience in the field.`,
    contact: [
      {
        name: 'Github',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Twitter',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Instagram',
        url: 'http://www.w3.org/2000/svg',
      },
    ],
  },
  {
    image: {
      img: 'https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg',
      alt: 'Display Picture of Rachel Adams',
    },
    name: 'Rachel Adams',
    job: 'Product Design Head',
    jobDisc: `Product designer with interests in immersive computing and
    XR, political ventures, and emerging technologies. Able to
    take ideas and give them a life.`,
    contact: [
      {
        name: 'Github',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Twitter',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Instagram',
        url: 'http://www.w3.org/2000/svg',
      },
    ],
  },
  {
    image: {
      img: 'https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif',
      alt: 'Display Picture of Charles Keith',
    },
    name: 'Charles Keith',
    job: 'UX Designer',
    jobDisc: `A UX designer is the voice of the customer. Our job is to
    look beyond the business goals. We don't just experience
    user interface but also questions it.`,
    contact: [
      {
        name: 'Github',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Twitter',
        url: 'http://www.w3.org/2000/svg',
      },
      {
        name: 'Instagram',
        url: 'http://www.w3.org/2000/svg',
      },
    ],
  },
]

const InspiringStories = () => {
  return (
    <div className="mb-16">
      <div className="container mx-auto flex justify-center pt-16">
        <div>
          <p className="pb-3 text-center text-lg font-normal text-gray-500">
            BUILDING TEAM
          </p>
          <h1 className="mx-auto w-5/6 pb-6 text-center text-3xl font-extrabold text-gray-800 sm:w-4/6 xl:text-4xl">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between"
          >
            {inspStories.map((inspStory,idx) => (
              <InspiringStory key={idx} inspStory={inspStory} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspiringStories
