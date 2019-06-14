// Custom components
import {
  Page, Wrapper,
  PageSpace, Reveal,
  Paragraph,
} from '../components';

const Contact = () => {
  return (
    <Page
      title="Contact"
      headProps={{
        title: "Contact | Philip Fabianek - Web Developer",
        description: "View all the options to get in touch with me.",
      }}
      className="contact-page"
    >
      <Wrapper maxWidth={700}>
        <PageSpace base={1} atMedium={2} />

        <Reveal type='slide' delay={4000}>
          <Paragraph light>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Reveal>
      </Wrapper>
    </Page>
  );
};

export default Contact;
