// Next.js
import Link from 'next/link'

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
        <PageSpace />

        <Reveal type='slide' delay={4000}>
          <Paragraph light>
            Writting something here is honestly quite hard, because even I have already noticed that my style of programming changes almost every 4 months.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            I'd simply suggest you to take a look at my <Link href="https://github.com/philipfabianek"><a target="_blank">[Github]</a></Link>. There are a few things for you to see.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            One of them is how my coding style has changed throughout the years. This has also something to do with the fact that I watched many different tutorials released by many different people and I usually always followed their file structure, coding style, etc.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            There are also 2 main breakpoints. In the beginning of 2018, I started to work as a freelancer and therefore I acquired numerous real-world skills. Even though none of my freelance work is on this GitHub, you can still take a look at a few repositories last updated from January to August 2018.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            The second breakpoint is obviously me getting a part-time job at a real software company. That happened on August 2018 and you can see there are only 2 repositories released past that - the <Link href="https://github.com/philipfabianek/django-react-boilerplate"><a target="_blank">[django-react-boilerplate]</a></Link> and <Link href="https://github.com/philipfabianek/philipfabianek-remastered"><a target="_blank">[philipfabianek-remastered]</a></Link>, which is the repository for this site.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            I wouldn't take anything beside the two of these repositories seriously, because I've learned so much throughout the years and there are obviously hundreds of things I would change on the old projects if I had to work on them again.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            You can also see the clear difference between the Django project and this one - since the Django one is a full-stack project, the file structure is very different.
          </Paragraph>

          <PageSpace />

          <Paragraph light>
            Now to the programming itself.
          </Paragraph>

          <PageSpace base={2} atSmall={2} atMedium={2} />
        </Reveal>
      </Wrapper>

      <ImageTransition type="waves" reversed />

      <Wrapper maxWidth={700} fullHeight light>
        <PageSpace base={1} atSmall={1} atMedium={1} />

        <RevealOnScroll type='slide' offset={300}>
          <Paragraph>
            I started to code by learning HTML and CSS (not counting the few hours I had at school). I took a course that even included a little bit of javascript, so the path was clear. When I completed the course, it suggested me to learn some of the rising JavaScript frameworks. It suggested React, Angular and Vue.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            I chose React and took another course. I got a little bit more into JavaScript and decided to learn a server language. Since I already 'somewhat' knew JavaScript (reflecting on that I really didn't know too much at all) I discovered Node. This was the first time I sort of struggled but I was able to develop a simple Node CRUD application, eventually even with authentication and more features. As a database I chose MongoDB because it was what most people creating Node tutorials were using.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            If I had to choose again, I would probably take a different path but it was what it was. In the end I made use of Node (and server-side rendering) for some of my freelance projects.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            At that time I obviously knew things like Babel, Sass, Gulp, Webpack, Express and I even learned some side technologies like Meteor, Firebase or Google Cloud. I also had some experience with backend & frontend testing.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            In the summer of 2018, I took a break from freelancing and when I came back later, it wasn't interesting to me anymore. I also lacked clients for some reason so I decided to find myself a part-time job (not full-time because I am still going to a high-school). In case you are interested, you can find my legacy Fiverr profile <Link href="https://www.fiverr.com/philipfabianek"><a target="_blank">[here]</a></Link>.
          </Paragraph>

          <PageSpace />

          <Paragraph>
            My initial intention was to simply work as a React developer. I started to work on some projects that involved Django backend and I eventually learned Python and Django. Even though I feel way more confident in my JavaScript, there are things about Python that I enjoy and it wasn't really hard for me to learn since I already had a reasonable amount of experience.
          </Paragraph>
        </RevealOnScroll>

        <PageSpace base={1} atSmall={1} atMedium={1} />
      </Wrapper>

      <ImageTransition type="waves" />
    </Page>
  );
};

export default Programming;
