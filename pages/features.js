// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, ImageTransition,
} from '../components';

const Features = () => {
  return (
    <Page
      title="Features"
      headProps={{
        title: "Features | Philip Fabianek - Web Developer",
        description: "Learn more about the features of my projects.",
      }}
      className="features-page"
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

export default Features;
