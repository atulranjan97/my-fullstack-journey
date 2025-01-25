import { User } from 'lucide-react';
import Section from './Section';

const AboutMe = () => {
  return (
    <div className="mt-6">
        <Section icon={<User />} sectionTitle="About Me">
          <p className=''>
              I'm a passionate full stack developer, aiming to leave a lasting impression and drive innovation in the ever-evolving world of software development. I love creating efficient, scalable, and user-friendly solutions to complex problems.
          </p>
        </Section>
    </div>
  );
}

export default AboutMe