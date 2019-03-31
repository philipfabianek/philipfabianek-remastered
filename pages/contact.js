// Next.js
import Link from 'next/link'

// Head
import { Head } from "../components/reusable";

// Styles
import "../styles";

const ContactPage = () => {
  return (
    <div>
      <Head
        title="Contact | Philip Fabianek - Web Developer"
        description="View all the options to get in touch with me."
      />

      <div className="contact-page">
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default ContactPage;
