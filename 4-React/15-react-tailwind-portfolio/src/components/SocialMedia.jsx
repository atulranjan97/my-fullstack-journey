import { Linkedin } from 'lucide-react';

const SocialMedia = ({icon, title, url}) => {
  return (
    // <a href={url} className=''> {icon} {title} </a>
    // <a href={url} className='block mt-2 text-blue-600 border'> 
    //     <span className='inline-block border'>{icon}</span>  {title} 
    // </a>

    <a href={url} className='flex gap-x-2 mt-2 ml-2 text-blue-600 hover:text-blue-800 '> 
        {icon} {title} 
    </a>
  )
}

export default SocialMedia