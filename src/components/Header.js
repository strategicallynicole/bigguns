import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    render() {
        return (
          <header class="section rd-navbar-wrap">
          <nav class="rd-navbar">
            <div class="navbar-container">
              <div class="navbar-cell">
                <div class="navbar-panel">
                  <button class="navbar-switch" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'></button>
                  <div class="navbar-logo"><a class="navbar-logo-link" href="index.html"><img class="navbar-logo-default" src="media/logo-default-113x30.svg" alt="Neon" width="113" height="30"/></a></div>
                </div>
              </div>
              <div class="navbar-spacer"></div>
              <div class="navbar-cell navbar-sidebar">
                <ul class="navbar-navigation rd-navbar-nav fullpage-navigation">
                  <li class="navbar-navigation-root-item" data-menuanchor="ndex.html"><a class="navbar-navigation-root-link" href="index.html">Home</a>
                    <ul class="navbar-navigation-dropdown rd-navbar-dropdown">
                      <li class="navbar-navigation-back">
                        <button class="navbar-navigation-back-btn">Back</button>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="index.html">Home</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="index-2.html">Home #2</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="index-3.html">Home #3</a>
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-navigation-root-item" data-menuanchor="estimonials.html"><a class="navbar-navigation-root-link" href="testimonials.html">Testimonials</a>
                  </li>
                  <li class="navbar-navigation-root-item active" data-menuanchor="lements.html"><a class="navbar-navigation-root-link" href="elements.html">Elements</a>
                  </li>
                  <li class="navbar-navigation-root-item" data-menuanchor="pages"><a class="navbar-navigation-root-link" href="#pages">Pages</a>
                    <ul class="navbar-navigation-dropdown rd-navbar-dropdown">
                      <li class="navbar-navigation-back">
                        <button class="navbar-navigation-back-btn">Back</button>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="404-page.html">404 page</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="coming-soon.html">Coming soon</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="faq.html">FAQ</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="testimonials-2.html">Testimonials 2</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-career.html">Single career</a>
                      </li>
                      <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-post.html">Single post</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="navbar-cell">
                <div class="navbar-subpanel">
                  <div class="navbar-subpanel-item">
                    <button class="navbar-button navbar-info-button mdi-dots-vertical" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-info-active","isolate":"[data-multi-switch]"}'></button>
                    <div class="navbar-info">
                      <button class="btn btn-sm" data-modal-trigger='{"target":"#modal-login"}'>Get App</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        
            <header className="site-header">
              <div className="container container--lg">
                <nav className="navbar" aria-label="Main Navigation">
                  <Link className="sr-only" to="#content">Skip to main content</Link>
                  {_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null) ? (
                  <Link className="navbar__logo" to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)} /></Link>
                  ) : 
                  <Link className="h4 navbar__title" to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                  }
                  {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (<React.Fragment>
                  <button aria-label="Menu" className="btn btn--icon btn--clear navbar__menu-btn js-nav-toggle">
                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" /></svg>
                  </button>
                  <div className="navbar__menu">
                    <div className="navbar__scroller">
                      <div className="navbar__inner">
                        <button aria-label="Close" className="btn btn--icon btn--clear navbar__close-btn js-nav-toggle">
                          <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" /></svg>
                        </button>
                        <ul className="navbar__list menu">
                          {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action, action_idx) => {
                              let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                              let actionUrl = _.trim(_.get(action, 'url', null), '/');
                              return (
                                <li key={action_idx} className={classNames('navbar__item', {'navbar__item--btn': _.get(action, 'style', null) !== 'link', 'is-active': pageUrl === actionUrl})}>
                                  <Action {...this.props} action={action} />
                                </li>
                              )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  </React.Fragment>)}
                </nav>
              </div>
            </header>
        );
    }
}
