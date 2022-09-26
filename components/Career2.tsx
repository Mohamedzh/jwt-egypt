const Career2 = () => {
  return (
    <>
      <div className="collapse mx-20 my-10">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>Accountant</p>
          <p>HR</p>
          <p>Production</p>
          <p>Media</p>
        </div>
      </div>

      <div className="my-30 mx-20 flex ">
        <label htmlFor="jobs">Chose Opportunity</label>

        <select
          className="w-full px-5"
          placeholder="chose Opportunity"
          name="jobs"
          id="jobs"
        >
          <option value="accountant">Chose Opportunity</option>
          <option value="accountant">Accountant</option>
          <option value="hr">HR</option>
          <option value="production">Production</option>
          <option value="programming">Programming</option>
        </select>
      </div>
    </>
  )
}

export default Career2
