import { Heart } from 'lucide-react';
import Section from "./Section";
import List from './List';

const Hobbies = () => {
  const hobbies = ["Gaming", "Listening music", "Watching anime", "Reading manga", "Watching sci-fi movies" ];
  return (
    <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
        <List items={hobbies} />
    </Section>
  )
}

export default Hobbies;