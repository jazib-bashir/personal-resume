import React from 'react';
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;

const Navigation = () => {
  return (
    <section id="navigation">
    <nav className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-table">

          <div className="navbar-cell tight">
            <div className="navbar-header">
              <div>

                <Link className="btn btn-hire btn--main-inverted" to="contact" spy={true} smooth={true}>
                  <i className="fa fa-briefcase"></i>
                  <span>hire me</span>
                </Link>

                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="fa fa-bars normal"></span>
                </button>

              </div>
            </div>
          </div>

          <div className="navbar-cell stretch">
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <div className="navbar-cell">
              <ul className="nav navbar-nav navbar-right text-uppercase bold small">
                <li>
                  <Link activeClass="mPS2id-highlight" to="home" spy={true} smooth={true}>
                    <i className="fa fa-home fa-fw"></i>
                    <span>home</span>
                  </Link>
                </li>
                <li>
                  <Link activeClass="mPS2id-highlight" to="profile" spy={true} smooth={true}>
                    <i className="fa fa-female fa-fw"></i>
                    <span>profile</span>
                  </Link>
                </li>
                <li>
                  <Link activeClass="mPS2id-highlight" to="resume" spy={true} smooth={true}>
                    <i className="fa fa-book fa-fw"></i>
                    <span>resume</span>
                  </Link>
                </li>
                <li>
                  <Link activeClass="mPS2id-highlight" to="skills" spy={true} smooth={true}>
                    <i className="fa fa-pie-chart fa-fw"></i>
                    <span>skills</span>
                  </Link>
                </li>
                <li>
                  <Link activeClass="mPS2id-highlight" to="services" spy={true} smooth={true}>
                    <i className="fa fa-cog fa-fw"></i>
                    <span>services</span>
                  </Link>
                </li>
                <li>
                  <Link activeClass="mPS2id-highlight" to="work" spy={true} smooth={true}>
                  <i className="fa fa-briefcase fa-fw"></i>
                    <span>work</span>
                  </Link>
                </li>
                <li>
                  <Link activeClass="mPS2id-highlight" to="contact" spy={true} smooth={true}>
                    <i className="fa fa-envelope fa-fw"></i>
                    <span>contact</span>
                  </Link>
                </li>
              </ul>
              </div>
            </div>      
          </div>

        </div>
      </div>
    </nav>
  </section>
  );
}

export default Navigation;

