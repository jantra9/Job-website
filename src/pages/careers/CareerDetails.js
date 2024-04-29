import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails(){
    const {id}= useParams()
    const career= useLoaderData()
  return (
    <div className='career-details'>
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className='details'>
        BPA Analytics (BPA) are established social researchers that specialise in measuring and analysing Organisational Culture.

Based in Brisbane, BPA has an extensive client-base in the Health and Community Services Sector throughout Australia and New Zealand, with an emerging presence in the UK.

BPA's office is located in the Brisbane CBD and is close to many public transport options.
        </div>
    </div>
  )
}
export const careerDetailsLoader=async({params})=>{
    const {id}=params;
    const res= await fetch("http://localhost:4000/careers/"+id)
    return res.json()
};
