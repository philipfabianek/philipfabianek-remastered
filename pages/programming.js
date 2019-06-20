// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, ImageTransition,
} from '../components';

const Programming = () => {
  return (
    <Page
      title="Programming"
      headProps={{
        title: "Programming | Philip Fabianek - Web Developer",
        description: "Learn more about my programming philosophy.",
      }}
      className="programming-page"
    >
      <Wrapper maxWidth={700} fullHeight atTop>
        <PageSpace base={1} atMedium={2} />

        <Reveal type='slide' delay={4000}>
          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light>
            Coming soon (this section is going to describe my thinking process, code philosophy,&nbsp;...)
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

export default Programming;
