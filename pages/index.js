// React
import { useState } from 'react';

// Next.js
import Link from 'next/link'

// Head
import { Head } from "../components/reusable";

// utils
import { isIEorEdge } from "../utils/detectBrowser";

// Styles
import "../styles";

// Constants
const HOVERED_CLASSNAME = isIEorEdge() ? 'landing-page--button-ie-hovered' : 'landing-page--button-hovered';
const CLICKED_CLASSNAME = isIEorEdge() ? 'landing-page--button-ie-clicked' : 'landing-page--button-clicked';
const SELECTION_OPENED_CLASSNAME = 'landing-page__selection--opened';

// Selection config
const selectionOptions = [
  { text: "About me", href: "/about" },
  { text: "Features", href: "/features" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];

const IndexPage = () => {
  const onButtonMouseOver = () => {
    if (isButtonClicked) {
      return;
    }

    setLandingPageClassName(`${HOVERED_CLASSNAME}`);
  };

  const onButtonMouseOut = () => {
    if (isButtonClicked) {
      return;
    }

    setLandingPageClassName('');
  };

  const onButtonClick = () => {
    if (isButtonClicked) {
      return;
    }

    setIsButtonClicked(true);
    setLandingPageClassName(`${HOVERED_CLASSNAME} ${CLICKED_CLASSNAME}`);
    setTimeout(() => setSelectionClassName(SELECTION_OPENED_CLASSNAME), isIEorEdge() ? 2200 : 3000);
  };

  const [landingPageClassName, setLandingPageClassName] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectionClassName, setSelectionClassName] = useState('');

  return (
    <div>
      <Head
        title="Welcome | Philip Fabianek - Web Developer"
        description="Full-Stack Web Developer that produces high-end websites and applications that focus on simplicity and the best possible user experience."
      />

      <div className={`landing-page ${landingPageClassName}`}>
        <div className="landing-page__initial-content">
          <div className="landing-page__rectangle"></div>

          <div className="landing-page__circles"></div>

          <div className="landing-page__text">
            <h1 className="landing-page__title">
              Philip&nbsp;Fabianek
            </h1>

            <h2 className="landing-page__subtitle">
              is&nbsp;a&nbsp;Web&nbsp;Developer
            </h2>
          </div>

          <button
            className="landing-page__button"
            onMouseOver={onButtonMouseOver}
            onMouseOut={onButtonMouseOut}
            onClick={onButtonClick}
          >
            Explore
          </button>
        </div>

        <div className={`landing-page__selection ${selectionClassName}`}>
          {
            selectionOptions.map(({ href, text }, i) => (
              <Link href={href} key={href}>
                <div className={`landing-page__selection__option landing-page__selection__option--${i + 1}`}>
                  {text}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
