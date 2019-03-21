// Next.js
import Link from 'next/link'

// Head
import { Head } from "../components/reusable";

// Styles
import "../styles"

const IndexPage = () => {
  return (
    <div>
      <Head
        title="Welcome | Philip Fabianek - Web Developer"
        description="Full-Stack Web Developer that produces high-end websites and applications that focus on simplicity and the best possible user experience."
      />

      <div className="landing-page">
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

          <button className="landing-page__button">
            Explore
          </button>
        </div>

        <div className="landing-page__selection">

        </div>
      </div>
    </div>
  );
};

export default IndexPage
