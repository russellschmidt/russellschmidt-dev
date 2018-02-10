import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Media from 'react-media';

import Header from '../components/Header';
import './index.css';
import "../styles/layout-override.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Russell Schmidt"
      meta={[
        { name: 'description', content: 'All about Russell Schmidt, developer: portfolio and blog' },
        { name: 'keywords', content: 'Russell Schmidt, developer, blog, portfolio, dev, web developer, webmaster' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"      }}
    >
      <Media query={{ maxWidth: 848 }}>
        { matches=>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                { children() }
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Articles"
                  description="Thoughts on Development, all written by me"
                />
                <Sidebar
                  title="Portfolio"
                  description="Projects blessed with my code"
                />
                <Sidebar
                  title="About Me"
                  description="Biography of Yours Truly"
                />
              </div>
            </div>
          )}
      </Media>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
