// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, Moto, List,
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

        <Reveal type='slide' delay={4000}>
          <PageSpace />

          <Paragraph light>
            I'm planning to adjust this section, but to give you some ways to contact me, you can make use of:
          </Paragraph>

          <PageSpace />

          <List light>
            <li><b>Email:</b> <Paragraph light inline text>fabianekphilip@gmail.com</Paragraph></li>
            <li><b>LinkedIn:</b> <Paragraph light inline text>https://www.linkedin.com/in/philip-fabianek</Paragraph></li>
            <li><b>GitHub:</b> <Paragraph light inline text>https://github.com/philipfabianek</Paragraph></li>
            <li><b>Facebook:</b> <Paragraph light inline text>https://www.facebook.com/philip.fabianek.5</Paragraph></li>
            <li><b>Twitter:</b> <Paragraph light inline text>https://twitter.com/philip_fabianek</Paragraph></li>
          </List>

          <PageSpace base={2} atSmall={2} atMedium={4} />
        </Reveal>
      </Wrapper>
    </Page>
  );
};

export default Contact;
