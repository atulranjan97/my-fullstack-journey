import { Globe} from 'lucide-react';
import Section from "./Section";
import SocialMedia from './SocialMedia';
import { Linkedin, Github, Twitter} from 'lucide-react';

const Contacts = () => {
  const socialLinks = [
    {icon: <Linkedin />, title: "Linkedin", url: "https://www.linkedin.com/in/atulranjan97/"},
    {icon: <Github />, title: "GitHub", url: "https://github.com/atulranjan97"},
    {icon: <Twitter />, title: "X", url: "https://x.com/"},
  ];
  return (
    <div className="pb-6">
      <Section icon={<Globe />} sectionTitle="Contacts & Social Media">
          <p className="text-gray-700 text-sm ml-2">
            Email: atul.ranjan098@gmail.com <br />
            Phone: +91-9971330741
          </p>

          {socialLinks.map(social => <SocialMedia key={social.title} icon={social.icon} title={social.title} url={social.url}/>)}

      </Section>
    </div>
  )
}

export default Contacts;