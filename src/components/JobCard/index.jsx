import React, { useState } from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-40 mb-4'> {/* Adjusted margins for responsiveness */}
    <div className='flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'> {/* Adjusted layout for responsiveness */}
        <div className='flex flex-col items-start gap-3'>
            <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
            <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
            <div className='flex items-center gap-2'>
                {props.skills.map((skill, i) => (
                    <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                ))}
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4'> {/* Adjusted layout for responsiveness */}
            <p className='text-gray-500'>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
            <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
            </a>
        </div>
    </div>
</div>

  )
}

export default JobCard                               