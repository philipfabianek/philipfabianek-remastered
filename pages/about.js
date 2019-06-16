// Custom components
import {
  Page, Wrapper, PageSpace,
  Reveal, RevealOnScroll,
  Paragraph, Moto,
  SquareTransition,
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
      <Wrapper maxWidth={700}>
        <PageSpace base={1} atMedium={2} />

        <Reveal type='slide' delay={4000}>
          <Paragraph light center>
            Hello there!
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light center>
            My name is Philip, I am 16 (soon to be 17) years old and I am from Czechia. I currently live in Brno, which is the 2nd largest city in my country. I go to the high school but that is only a small part of my life.
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light center>
            When I'm at home, I always wonder what to do with my time. Even though I watch many movies and some TV shows, eventually time I always get bored and want to do something that feels productive.
          </Paragraph>

          <PageSpace base={1} atSmall={1} atMedium={1} />

          <Paragraph light center>
            Throughout the years, I've discovered there are 3 things that always feel good to do:
          </Paragraph>

          <PageSpace base={2.5} />

          <Moto light>
            Learning, working and doing sports
          </Moto>

          <PageSpace base={5} atSmall={1} atMedium={2} />
        </Reveal>
      </Wrapper>

      <SquareTransition />

      <Wrapper light maxWidth={700}>
        <PageSpace base={3} atSmall={1} atMedium={2} />

        <RevealOnScroll type='slide' offset={300}>
          <Paragraph>
            If you do too much of one of them or don't do any relaxing activities between them, you always get burned out (physically or mentally).
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            Therefore <b>I learn, I work and I do sports</b> - I've tried many different sports and running ended up as the best match for me, but I'm planning to focus more on cycling and swimming.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            In terms of my 'work', you can learn more about that in the portfolio section, but I've started working as a freelancer in the beginning of 2018 and have been employed for almost a year now. (part-time job since september 2018)
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            Despite the fact that I do a reasonable amount of physical activities and I also work, I find the learning part most important to me, but suprisingly not because I go to school. We live in an age where you can actually learn almost anything from the comfort of your home. And I made a heavy use of that.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            I basically learned to code by myself. I've had some introduction to programming at school, but looking back it didn't make any difference. My huge advantage has been my logical thinking and that is also the reason why I love math.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            Even though learning more about programming helps me at work a lot (and is sometimes necessary), I do it mostly for myself. Beside programming, which plays a huge part in my life right now, I am into a lot of things (fields). The things I've lately been interested in include physics, literature ('artistic' as well as 'educational'), films or music - I'm learning to play the piano by myself but I love many genres.
          </Paragraph>

          <PageSpace base={1} />

          <Paragraph>
            I could write way more than that, but I hope that I gave you an acceptable overview of who I am. If you want to get to know me better or have something in mind, don't hesitate and contact me on any of the platforms from the 'Contact' section of this website. I am always looking forward to having a good chat or meeting a new person.
          </Paragraph>
        </RevealOnScroll>

        <PageSpace base={3} atSmall={1} atMedium={3} />
      </Wrapper>

      <SquareTransition  reversed/>

      <PageSpace base={2} />
    </Page>
  );
};

export default About;
