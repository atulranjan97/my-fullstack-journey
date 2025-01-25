const Graduation = ({degree, institute, year}) => {
  return (
    <div className="mb-3 ml-2">
        <h1 className="font-semibold text-lg">{degree}</h1>
        <p className="text-gray-700 text-sm">{institute}, {year}</p>
    </div>
  )
}

export default Graduation