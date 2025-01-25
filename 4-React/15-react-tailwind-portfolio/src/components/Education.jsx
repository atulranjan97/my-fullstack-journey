import { BookOpen } from 'lucide-react';
import Section from "./Section";
import Graduation from './Graduation';

const Education = () => {
  return (
    <Section icon={<BookOpen />} sectionTitle="Education">
        <Graduation degree="Bachelor of Technology in Computer Science" institute="Bharati Vidyapeeth College of Engineering" year="2022" />
        <Graduation degree="Intermediate (Science)" institute="Kendriya Vidyalaya Vikas Puri" year="2016" />
        <Graduation degree="Matriculation" institute="Kendriya Vidyalaya Vikas Puri" year="2014" />
    </Section>
  )
}

export default Education;