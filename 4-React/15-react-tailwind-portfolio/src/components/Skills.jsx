import { Code } from 'lucide-react';  
import Section from "./Section";
import Pill from './Pill';

const Skills = () => {
    const skillTitles = ["JavaScript", "React", "Node.js", "Git", "Bootstrap", "Tailwind", "C", "C++"];

  return (
    <Section icon={<Code />} sectionTitle="Skills">  
        {skillTitles.map(title => <Pill key={title} title={title} />)}
    </Section>
  )
}

export default Skills;