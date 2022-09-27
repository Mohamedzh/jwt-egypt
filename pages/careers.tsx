import React, { useState } from 'react'
import NavigationBar from '../components/NavigatoinBar';
import { VacancyType } from '../types ';

const vacancies = [
    { title: "web developer", department: "it", description: "Junior web developer required with experience in react and nextjs" },
    { title: "business development specialist", department: "marketing", description: "BD specialist needed with 5-7 years experience in the same position" },
    { title: "HR specialist", department: "hr", description: "HR specialist needed with past experience in a multinational company" },
    { title: "account manager", department: "accounting", description: "account manager needed to perform accounting operations in the accounting deraptment" }
]



function Careers() {
    const [filteredJobs, setFiltered] = useState<VacancyType[]>(vacancies)
    const filter = (department: string) => {
        if (department === 'Department') {
            setFiltered(vacancies)
        } else
            setFiltered(vacancies.filter(job => job.department === department))
    }

    return (
        <div>
            <NavigationBar />
            <div className="mt-20 mx-20 flex ">
                <label className='min-w-max pt-2 font-bold' htmlFor="jobs">Choose the department</label>
                <select
                    className="w-full px-5 mx-5"
                    placeholder="Department"
                    name="jobs"
                    id="jobs"
                    onChange={(e) => {
                        filter(e.currentTarget.value);
                    }}
                >
                    <option value="Department">Department...</option>
                    <option value="accounting">Accounting</option>
                    <option value="hr">HR</option>
                    <option value="marketing">Marketing</option>
                    <option value="it">IT</option>
                </select>
            </div>


            <div >{filteredJobs.length === 0 &&
                <p className='mt-5 text-center text-lg font-bold'>No jobs match your selected criteria</p>
            }
                {filteredJobs.map((vacancy, idx) =>
                    <div key={idx} tabIndex={0} className="bg-wtCyan collapse collapse-plus border border-base-300 rounded-box m-3">
                        <div className="collapse-title text-xl font-medium">
                            {vacancy.title}
                        </div>
                        <div className="collapse-content">
                            <p>
                                {vacancy.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Careers