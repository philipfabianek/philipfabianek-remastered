import Head from "next/head";
import PropTypes from 'prop-types';

const HeadComponent = (props) => (
  <Head>
    <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
    <link key="icon-32x32" rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link key="icon-16x16" rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link key="manifest" rel="manifest" href="/static/favicon/site.webmanifest" />
    <link key="mask-icon" rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#3d3d3d" />
    <link key="shortcut-icon" rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#da532c" />
    <meta key="theme-color" name="theme-color" content="#ffffff" />

    <meta key="charset" charSet="UTF-8" />
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta key="http-equiv" httpEquiv="X-UA-Compatible" content="IE=edge" />

    {/* Raleway */}<link href="//fonts.googleapis.com/css?family=Raleway:300,400,600&subset=latin,latin-ext" rel="stylesheet" />
    {/* Roboto */}<link href="//fonts.googleapis.com/css?family=Roboto:300,400,500,600&subset=latin,latin-ext" rel="stylesheet" />
    {/* Passion One */}<link href="//fonts.googleapis.com/css?family=Passion+One:400,700,900&subset=latin,latin-ext" rel="stylesheet" />
    {/* Lato */}<link href="//fonts.googleapis.com/css?family=Lato:300,400,700,900&subset=latin,latin-ext" rel="stylesheet" />

    <meta key="description" name="description" content={props.description} />
    <title>{props.title}</title>

    {props.children}
  </Head>
);

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default HeadComponent;
