// Next.js
import Link from 'next/link'

// Head
import { Head } from "../components/reusable";

// Styles
import "../styles";

const AboutPage = () => {
  return (
    <div>
      <Head
        title="About | Philip Fabianek - Web Developer"
        description="Learn more about me, my interest and life & work philosophy."
      />

      <div className="about-page">
        <h1>About</h1>
      </div>
    </div>
  );
};

export default AboutPage;
