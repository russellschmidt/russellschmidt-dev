import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Media from 'react-media';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import './index.css';
import "../styles/layout-override.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Russell Schmidt"
      meta={[
        { name: "description", content: "Russell Schmidt's Developer Portfolio and Engineering Blog " },
        { name: "keywords", content: "Russell Schmidt, developer, dev, react, rails, portfolio, blog, javascript, html, css, sass, Los Angeles, California, front end, back end, full stack, engineer, bulldog, engineering" }
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
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
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
                {children()}
              </div>
<div style={{ flex: 1 }}>
                <Sidebar
                  title="Codestack"
                  description="Blog posts written by me."
                />
                <Sidebar
                  title="About author"
                  description="I am a Full-stack Web Developer specializing in React and Node.js (with some love for Ruby on Rails) based in Los Angeles, California."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
