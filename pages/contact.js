// Reusable components
import { Page, Reveal } from "../components/reusable";

export default () => {
  return (
    <Page
      title="Contact"
      headProps={{
        title: "Contact | Philip Fabianek - Web Developer",
        description: "View all the options to get in touch with me.",
      }}
      className="contact-page"
    >
      <Reveal type='slide' delay={4000}>
        <p className="page__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <br />

        <p className="page__paragraph">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Reveal>
    </Page>
  );
};
