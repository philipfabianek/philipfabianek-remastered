// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Next.js
import Link from 'next/link'

// Reusable components
import { Head, LanguageSwitch, Reveal } from "./";

// Styles
import "../../styles";

// Constants
const TRANSITION_TITLE_CN = 'page__title--transition';

const Page = props => {
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

      {
        !hideLanguageSwitch &&
        <Reveal type='slow' delay={4000}>
          <LanguageSwitch visible={true} />
        </Reveal>
      }

      <div className={`page ${pageClassName}`}>
        <h1 className={`page__title ${titleCN}`}>{pageTitle}</h1>

        <div className="page__content">
          {children}
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
