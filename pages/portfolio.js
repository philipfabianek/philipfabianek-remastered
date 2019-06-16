// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, Moto,
  ImageTransition,
} from '../components';

const Portfolio = () => {
  return (
    <Page
      title="Portfolio"
      headProps={{
        title: "Portfolio | Philip Fabianek - Web Developer",
        description: "View my portfolio.",
      }}
      className="portfolio-page"
    >
      <Wrapper maxWidth={700} fullHeight atTop>
        <PageSpace base={1} atMedium={2} />

        <Reveal type='slide' delay={4000}>
          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light>
            Coming soon
          </Paragraph>

          <PageSpace base={2} atSmall={2} atMedium={4} />
        </Reveal>
      </Wrapper>

      <ImageTransition type="waves" reversed />

      <Wrapper maxWidth={700} fullHeight light>
        <PageSpace base={1} atSmall={1} atMedium={1} />

        <RevealOnScroll type='slide' offset={300}>
          <Paragraph>
            Coming soon
          </Paragraph>
        </RevealOnScroll>

        <PageSpace base={1} atSmall={1} atMedium={1} />
      </Wrapper>

      <ImageTransition type="waves" />
    </Page>
  );
};

export default Portfolio;
