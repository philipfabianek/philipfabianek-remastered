// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Next.js
import Link from 'next/link'

// Page components
import { Head, LanguageSwitch } from './';

// Custom components
import { Reveal } from '../transitions';

// Styles
import '../../styles';

// Constants
const TRANSITION_TITLE_CN = 'page__title--transition';
const BOTTOM_NAVIGATION_LINKS = [
  { href: '/about', text: 'ABOUT', linkTitle: 'Learn more about me and my life philosophy' },
  { href: '/programming', text: 'PROGRAMMING', linkTitle: 'Explore the specific features of my projects, my practises and approach' },
  { href: '/portfolio', text: 'PORTFOLIO', linkTitle: 'Learn more about my past work and see some of the finished projects' },
  { href: '/contact', text: 'CONTACT', linkTitle: 'Contact me' },
];

// Utils
import removePreload from '../../utils/removePreload';

const Page = props => {
  removePreload();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [titleCN, setTitleCN] = useState('');

  useEffect(() => {
    if (titleCN.indexOf(TRANSITION_TITLE_CN) === -1) {
      setTimeout(() => {
        setTitleCN(TRANSITION_TITLE_CN);
      }, 1800);
    }
  });

  const {
    title: pageTitle,
    headProps: { title: headTitle, description: headDescription },
    children,
    className: pageClassName = '',
    hideLanguageSwitch = false,
  } = props;

  return (
    <div>
      <Head
        title={headTitle}
        description={headDescription}
      />

      <div className={`preload page ${pageClassName}`}>
        <h1 className={`page__title ${titleCN}`}>{pageTitle}</h1>

        {/* {
          !hideLanguageSwitch &&
          <Reveal type='slow' delay={0}>
            <LanguageSwitch visible={true} />
          </Reveal>
        } */}

        <div className="page__content">
          {children}
        </div>

        <div className="page__bottom-navigation">
          {
            BOTTOM_NAVIGATION_LINKS.map(({ href, text, linkTitle = '' }) => (
              <Link href={href} key={href}><a title={linkTitle}>{text}</a></Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
  // Mandatory
  title: PropTypes.string.isRequired,
  headProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  // Optional
  hideLanguageSwitch: PropTypes.bool,
  className: PropTypes.string,
}

export default Page;
