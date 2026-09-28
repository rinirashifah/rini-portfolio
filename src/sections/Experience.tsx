import { CardItem } from '../types';
import CardGrid from '../components/CardGrid';
import SectionHeading from '../components/SectionHeading';
import { EXPERIENCE } from '../data/data';

interface ExperienceProps {
  onOpen: (item: CardItem) => void;
}

export default function Experience({ onOpen }: ExperienceProps) {
  return (
    <section className="mt-14 sm:mt-16" id="experience">
      <SectionHeading kicker="Pengalaman" title="Pengalaman Profesional" />
      <CardGrid items={EXPERIENCE} onOpen={onOpen} />
    </section>
  );
}
