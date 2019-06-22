// Next.js
import Link from 'next/link'

// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, Moto,
  ImageTransition,
} from '../components';

const About = () => {
  return (
    <Page
      title="About me"
      headProps={{
        title: "About | Philip Fabianek - Web Developer",
        description: "Learn more about me, my interest and life & work philosophy.",
      }}
      className="about-page"
    >
      <Wrapper maxWidth={700} fullHeight atTop>
        <PageSpace base={1} atMedium={2} />

        <Reveal type='slide' delay={4000}>
          <Paragraph light center>
            Hello there!
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light center>
            My name is Philip, I&nbsp;am 16 (soon to be 17) years&nbsp;old and I&nbsp;am from Czechia. I&nbsp;currently live in&nbsp;Brno, which is the 2nd largest city in&nbsp;my&nbsp;country. I&nbsp;go to&nbsp;the&nbsp;high school but that is only a small part of&nbsp;my&nbsp;life.
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light center>
            When I'm at&nbsp;home, I&nbsp;always wonder what to do with my&nbsp;time. Even though I&nbsp;watch many movies and some TV shows, eventually time I&nbsp;always get bored and want to&nbsp;do something that feels productive.
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light center>
            Throughout the years, I've&nbsp;discovered there are 3&nbsp;things that always feel good to&nbsp;do:
          </Paragraph>

          <PageSpace base={2.5} />

          <Moto light>
            Learning, working and doing sports
          </Moto>

          <PageSpace base={2} atSmall={2} atMedium={4} />
        </Reveal>
      </Wrapper>

      <ImageTransition type="waves" reversed />

      <Wrapper maxWidth={700} light>
        <PageSpace base={1} atSmall={1} atMedium={1} />

        <RevealOnScroll type='slide' offset={300}>
          <Paragraph>
            If you do too much of one of them or don't do any relaxing activities between them, you always get burned&nbsp;out (physically or mentally).
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            Therefore <b>I&nbsp;learn, I work and I do sports</b> - I've&nbsp;tried many different sports and running ended up as&nbsp;the&nbsp;best match for&nbsp;me, but I'm&nbsp;planning to&nbsp;focus more on cycling and swimming.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            In terms of my&nbsp;'work', you can learn more about that in&nbsp;the&nbsp;portfolio section, but I've&nbsp;started working as&nbsp;a&nbsp;freelancer in the beginning of 2018 and have been employed for almost a year now. (part-time job since september&nbsp;2018)
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            Despite the fact that I&nbsp;do a&nbsp;reasonable amount of physical activities and I&nbsp;also&nbsp;work, I&nbsp;find the&nbsp;learning part most important to&nbsp;me, but suprisingly not because I&nbsp;go to&nbsp;school. We&nbsp;live in&nbsp;an&nbsp;age where you&nbsp;can actually learn almost anything from&nbsp;the&nbsp;comfort of&nbsp;your&nbsp;home. And I&nbsp;made a&nbsp;heavy&nbsp;use of&nbsp;that.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            I basically learned to code by myself. I've&nbsp;had some introduction to&nbsp;programming at&nbsp;school, but looking back it&nbsp;didn't make any difference. My huge advantage has been my logical thinking and that&nbsp;is also the reason why I&nbsp;love math.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            Even though learning more about programming helps me at&nbsp;work a&nbsp;lot (and is sometimes necessary), I&nbsp;do it mostly for myself. Beside programming, which plays a huge part in&nbsp;my&nbsp;life right now, I&nbsp;am into a&nbsp;lot&nbsp;of&nbsp;things (fields). The things I've&nbsp;lately been interested&nbsp;in include physics, literature ('artistic' as&nbsp;well as&nbsp;'educational'), films or&nbsp;music - I'm&nbsp;learning to&nbsp;play the&nbsp;piano by&nbsp;myself but I&nbsp;love many genres.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            I&nbsp;could write way more than&nbsp;that, but I&nbsp;hope that I&nbsp;gave you an acceptable overview of who I&nbsp;am. If you&nbsp;want to&nbsp;get to&nbsp;know me better or have something in mind, don't hesitate and contact&nbsp;me on&nbsp;any of&nbsp;the&nbsp;platforms from&nbsp;the&nbsp;<Link href="/contact">[Contact]</Link> section of&nbsp;this&nbsp;website. I&nbsp;am always looking forward to&nbsp;having a&nbsp;good chat or meeting a&nbsp;new person.
          </Paragraph>
        </RevealOnScroll>

        <PageSpace base={1} atSmall={1} atMedium={1} />
      </Wrapper>

      <ImageTransition type="waves" />
    </Page>
  );
};

export default About;
