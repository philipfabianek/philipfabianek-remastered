// Next.js
import Link from 'next/link'

// Head
import { Head } from "../components/reusable";

// Styles
import "../styles";

const FeaturesPage = () => {
  return (
    <div>
      <Head
        title="Features | Philip Fabianek - Web Developer"
        description="Learn more about the features of my projects."
      />

      <div className="features-page">
        <h1>Features</h1>
      </div>
    </div>
  );
};

export default FeaturesPage;
