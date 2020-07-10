import React, { useState, useEffect } from 'react';

const mockJobs = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: "Shiftling"
    },
    {
        id: 2,
        title: "PHP Developer",
        company: "HBLAB"
    }
]

const fetchJobs = () => {
    
}

const Jobs = (props) => {
    const [jobs, updateJobs] = useState([]);

    useEffect(() => {
        updateJobs(mockJobs);
    }, []);
    return (
        <div>
            <h2>All Jobs</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => 
                    <tr key={job.id}>
                        <td>{job.title}</td>
                        <td>{job.company}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Jobs;