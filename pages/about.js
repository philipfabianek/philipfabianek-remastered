// React
import { useEffect, useState } from 'react';

// Next.js
import Link from 'next/link'

// Head
import { Head, LanguageSwitch } from "../components/reusable";

// Custom components
import { Reveal } from '../utils/reveal';

// Styles
import "../styles";

const elementsToBeRevealed = [
  {
    transitionClassName: 'about-page__title--transition',
    delay: 1500,
  },
  {
    transitionClassName: 'about-page__paragraph--revealed',
    delay: 3000,
  },
  {
    transitionClassName: 'about-page__paragraph--revealed',
    delay: 5000,
  },
];

// Constants
const TRANSITION_TITLE_CN = 'about-page__title--transition';

const AboutPage = (props) => {
  const [titleCN, setTitleCN] = useState('');

  useEffect(() => {
    if (titleCN.indexOf(TRANSITION_TITLE_CN) === -1) {
      setTimeout(() => {
        setTitleCN(TRANSITION_TITLE_CN);
      }, 1800);
    }
  });

  return (
    <div>
      <Head
        title="About | Philip Fabianek - Web Developer"
        description="Learn more about me, my interest and life & work philosophy."
      />

      <div className="page about-page">
        <h1 className={`about-page__title ${titleCN}`}>About me</h1>

        <Reveal type='slow' delay={4000}>
          <LanguageSwitch visible={true} />
        </Reveal>

        <div className="about-page__content">
          <Reveal type='slide' delay={4000}>
            <p className="about-page__paragraph">
              Hello there!
            </p>
          </Reveal>

          <br />

          <Reveal type='slide' delay={6500}>
            <p className="about-page__paragraph">
              My name is Philip, I am 16 (soon to be 17) years old and I am from Czechia. I currently live in Brno, which is the 2nd largest city in my country. I go to the high school but that is only a small part of my life.
            </p>

            <br />

            <p className="about-page__paragraph">
              When I'm at home, I always wonder what to do with my time. There is a lot of it and if I just spend the evening doing nothing I am not happy with myself.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
