import passportPhoto from '../assets/atul2.png'

const Header = () => {
  return (
    <header className="bg-red-600 text-white p-5 rounded-t-xl flex justify-between items-center">
        <div className="">
            <div className="text-3xl font-bold">Atul Ranjan</div>
            <div className="text-xl">Web Developer</div>
        </div>
        <img className='rounded-full size-24' src={passportPhoto} alt="passport-photo" />
    </header>
  )
}

export default Header