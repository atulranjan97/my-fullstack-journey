const Section = ({icon, sectionTitle, children}) => {
  return (
    <div className="mb-12 mx-5">
        <div className="flex items-center mb-4">
            {icon}
            <h1 className='font-bold text-2xl ml-2'>{sectionTitle}</h1>
        </div>
        {children}
    </div>
  )
}

export default Section