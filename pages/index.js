// Next.js
import Head from "next/head";

// Styles
import "../styles"

const IndexPage = () => {
  return (
    <div>
      <Head>
        <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <link key="icon-32x32" rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link key="icon-16x16" rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link key="manifest" rel="manifest" href="/static/favicon/site.webmanifest" />
        <link key="mask-icon" rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#3d3d3d" />
        <link key="shortcut-icon" rel="shortcut icon" href="/static/favicon/favicon.ico" />
        <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#da532c" />
        <meta key="theme-color" name="theme-color" content="#ffffff" />

        <meta key="charset" charset="UTF-8" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta key="http-equiv" http-equiv="X-UA-Compatible" content="ie=edge" />

        <meta key="description" name="description" content="Full-Stack Web Developer that produces high-end websites and applications that focus on simplicity and the best possible user experience." />
        <title>Welcome | Philip Fabianek - Web Developer</title>
      </Head>
      <div className="welcome-page">
        <h2 className="welcome-page__title">
          Welcome to Next.js!
        </h2>
      </div>
    </div>
  );
};

export default IndexPage
