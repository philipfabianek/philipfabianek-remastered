// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, Moto,
  ImageTransition,
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
      <Wrapper maxWidth={700} fullHeight atTop>
        <PageSpace base={1} atMedium={2} />

        <Reveal type='slide' delay={4000}>
          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light>
            Something in here
          </Paragraph>

          <PageSpace base={2} atSmall={2} atMedium={4} />
        </Reveal>
      </Wrapper>

      <ImageTransition type="waves" reversed />

      <Wrapper maxWidth={700} fullHeight light>
        <PageSpace base={1} atSmall={1} atMedium={1} />

        <RevealOnScroll type='slide' offset={300}>
          <Paragraph>
            Something in here
          </Paragraph>
        </RevealOnScroll>

        <PageSpace base={1} atSmall={1} atMedium={1} />
      </Wrapper>

      <ImageTransition type="waves" />
    </Page>
  );
};

export default Contact;
