// Next.js
import Link from 'next/link'

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
        <PageSpace />

        <Reveal type='slide' delay={4000}>
          <Paragraph light>
            There sadly aren't many remaining deployed projects from my freelancing period of life, because – let's be honest – the people that really knew what they were doing wouldn't pay some individual on Fiverr a few bucks for their project of dreams.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            There is however one project still alive and that's the <Link href="http://www.thinkingmansgroup.com/"><a target="_blank">[Thinking Mans Group]</a></Link>. You can clearly see that this was one of my very first projects. Even though there are many mistakes and there isn't in fact any reason to program this in React, the client was satisfied and the site is doing somewhat ok.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            When I wanted to come back to freelancing, I created a few templates that I could reuse for different projects. You can check one of them out <Link href="http://philipfabianek-template1.surge.sh/"><a target="_blank">[here]</a></Link>. Once again if I had to work on this again, there is absolutely no reason to use React (but it's a little more meaningful here than in the previous project) and I would still adjust number of things.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            I made use of this template only in one project that doesn't exist anymore. This was also the first time I used server-side Node rendering and the site ended up quite high in Google search. The site has some problems but even today I think it looks quite good. The style is light and simple, the page is divided into reusable blocks (which is the single React advantage) and it does it's job.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            Since I started to work as a part-time React developer, my programming has improved significantly (and I sort of started to make a meaningful use of React for the first time) but there isn't anything for me to share here because all I have worked on are custom administration and data processing sites made for other companies. The style of those projects doesn't matter all that much and no one from public can even access them.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            I've worked on 3 of these projects so far, every one of which being multi-month matter.
          </Paragraph>

          <PageSpace base={2} atSmall={2} atMedium={2} />
        </Reveal>
      </Wrapper>

      <ImageTransition type="waves" reversed />

      <Wrapper maxWidth={700} fullHeight light>
        <PageSpace base={1} atSmall={1} atMedium={1} />

        <RevealOnScroll type='slide' offset={300}>
          <Paragraph>
            There are 2 more projects that I basically created for myself. Those are <Link href="https://github.com/philipfabianek/django-react-boilerplate"><a target="_blank">[django-react-boilerplate]</a></Link> and <Link href="https://github.com/philipfabianek/philipfabianek-remastered"><a target="_blank">[philipfabianek-remastered]</a></Link> (this site). The first one is a simple Django application, that allows public users to sign up, confirm email and log in. After that they can browse posts created in Django admin, make them favorite or even comment on them.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            The project should be reasonably secure and could even function as a serious blog. It can obviously serve as a good Django-React boilerplate and I even made use of it in one of my current custom projects. There are obviously many things that I skipped (even the search bar at the top isn't working!), because it's just a boilerplate but if you added reasonable amount of code lines, it could turn into a good blog. The disadvantage is obviously the use of React and lack of SSR – for a site like that you should seriously think of implementing something of that sort.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            The second site is obviously this one and as you can see it is currently being used. After reading all this text, you might ask why did I use React for this one. Although React isn't all that useful for this kind of project, I wanted to make use of it for my portfolio website since I am afterall a React developer. I also tried to make a very meaningful use of React showing the flexibility, reusability and "cooperation" of the components.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            All things considered I made use of serverless Next.js which makes atleast some sense this time around, I can make a good use of React without having to worry about SSR myself.
          </Paragraph>
        </RevealOnScroll>

        <PageSpace base={1} atSmall={1} atMedium={1} />
      </Wrapper>

      <ImageTransition type="waves" />
    </Page>
  );
};

export default Portfolio;
