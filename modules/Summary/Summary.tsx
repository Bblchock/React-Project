import { SummaryTitle } from './styles.ts';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { About } from './About';
import { Education } from './Education';

export const Summary = () => {
  return (
    <>
      <SummaryTitle>РЕЗЮМЕ</SummaryTitle>
      <section>
        <About />
        <Skills />
        <Education />
        <Experience />
      </section>
    </>
  );
};
