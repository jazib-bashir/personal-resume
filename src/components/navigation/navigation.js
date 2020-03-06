import React from 'react';

const Navigation = () => {
  return (
    <section id="navigation">
    <nav className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-table">

          <div className="navbar-cell tight">
            <div className="navbar-header">
              <div>

                <a href="#contact" className="btn btn-hire btn--main-inverted">
                  <i className="fa fa-briefcase"></i>
                  <span>hire me</span>
                </a>

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
                  <a href="#home">
                    <i className="fa fa-home fa-fw"></i>
                    <span>home</span>
                  </a>
                </li>
                <li>
                  <a href="#profile">
                    <i className="fa fa-female fa-fw"></i>
                    <span>profile</span>
                  </a>
                </li>
                <li>
                  <a href="#resume">
                    <i className="fa fa-book fa-fw"></i>
                    <span>resume</span>
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <i className="fa fa-pie-chart fa-fw"></i>
                    <span>skills</span>
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="fa fa-cog fa-fw"></i>
                    <span>services</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <i className="fa fa-briefcase fa-fw"></i>
                    <span>work</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fa fa-envelope fa-fw"></i>
                    <span>contact</span>
                  </a>
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

