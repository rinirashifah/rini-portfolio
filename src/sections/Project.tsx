import { CardItem } from '../types';
import CardGrid from '../components/CardGrid';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS } from '../data/data';

interface ProjectProps {
  onOpen: (item: CardItem) => void;
}

export default function Project({ onOpen }: ProjectProps) {
  return (
    <section className="mt-14 sm:mt-16" id="projects">
      <SectionHeading kicker="Proyek" title="Latest Projects" />
      <CardGrid items={PROJECTS} onOpen={onOpen} />
    </section>
  );
}
