// Next.js
import Link from 'next/link'

// Head
import { Head } from "../components/reusable";

// Styles
import "../styles";

const PortfolioPage = () => {
  return (
    <div>
      <Head
        title="Portfolio | Philip Fabianek - Web Developer"
        description="View my portfolio."
      />

      <div className="portfolio-page">
        <h1>Portfolio</h1>
      </div>
    </div>
  );
};

export default PortfolioPage;
