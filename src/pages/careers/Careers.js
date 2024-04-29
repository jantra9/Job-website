import { useLoaderData, Link } from "react-router-dom"

export default function Careers(){
    const careers= useLoaderData()
  return (
    <div className='careers'>
        {careers.map(career=>(
            <div className="eachCareer">
            <Link to={career.id.toString()} key={career.id}>
                <p className="title">{career.title}</p>
                <p className="location">Based in {career.location}</p>
            </Link>
            </div>
        ))}
    </div>
  )
};
export const careersLoader= async ()=>{
    const res= await fetch("http://localhost:4000/careers")
    return res.json()
}