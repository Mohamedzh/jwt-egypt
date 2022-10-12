import InspiringStory from './InspiringStory'

const InspiringStories = ({ data }) => {
  const { stories } = data
  return (
    <div
      id="story"
      style={{
        backgroundColor: `${data.themeColors[0].storiesSectionColor.color_code}`,
      }}
      className="mb-16 scroll-mt-16"
    >
      <div className="container mx-auto flex justify-center pt-16">
        <div>
          <h1
            style={{
              color: `${data.themeColors[0].sectionTitleColor.color_code}`,
            }}
            className="mx-auto w-5/6 pb-6 text-center text-3xl font-bold sm:w-4/6 xl:text-3xl"
          >
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div
        style={{
          backgroundColor: `${data.themeColors[0].storiesSectionColor.color_code}`,
        }}
        className="w-full px-10 pt-10"
      >
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between"
          >
            {stories.map((story, idx) => (
              <InspiringStory key={idx} story={story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspiringStories
