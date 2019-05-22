// Reusable components
import { Page, Reveal } from "../components/reusable";

export default () => {
  return (
    <Page
      title="About me"
      headProps={{
        title: "About | Philip Fabianek - Web Developer",
        description: "Learn more about me, my interest and life & work philosophy.",
      }}
      className="about-page"
    >
      <Reveal type='slide' delay={4000}>
        <p className="page__paragraph">
          Hello there!
        </p>
      </Reveal>

      <br />

      <Reveal type='slide' delay={6500}>
        <p className="page__paragraph">
          My name is Philip, I am 16 (soon to be 17) years old and I am from Czechia. I currently live in Brno, which is the 2nd largest city in my country. I go to the high school but that is only a small part of my life.
        </p>

        <br />

        <p className="page__paragraph">
          When I'm at home, I always wonder what to do with my time. There is a lot of it and if I just spend the evening doing nothing I am not happy with myself.
        </p>
      </Reveal>
    </Page>
  );
};
