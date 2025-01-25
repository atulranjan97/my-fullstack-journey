import TechPill from "./techPill"

const Project = ({title, desc, techUsed}) => {
  return (
    <div className=" mx-2 mb-3 bg-slate-100 p-6 shadow-md rounded-lg">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-gray-600 mt-3">{desc}</p>

        {techUsed.map(tech => <TechPill title={tech} />)}
    </div>
  )
}

export default Project