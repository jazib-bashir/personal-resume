import React from 'react';

const Hobies = () => {
  return(
    <section id="hobbies" className="secondary-block secondary-block-spacer bg-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/hobies-bg.jpg'})`}}>
      <div className="overlay pattern-overlay"></div>
      <div className="container">
        <div className="text-center widget-title widget-title--inverted wow fadeIn">
          <h5 className="text-uppercase semi-bold lh md-padder">my hobbies</h5>
          <em className="xs-padder inline-block">work hard, party harder</em>
        </div>
        <div className="secondary-block__padder text-center">
          <ul className="list-inline inline-block text-uppercase list-gutter-md text-center text-uppercase hobbies-list">
            <li className="lg-rounded-box">
              <div className="inline-block">
                <span className="h3 lh">
                <i className="fa fa-shopping-cart"></i>
                </span>
                <h6 className="padder normal lh">shopping</h6>
              </div>
            </li>
            <li className="lg-rounded-box">
              <div className="inline-block">
                <span className="h3 lh">
                <i className="fa fa-plane"></i>
                </span>
                <h6 className="padder normal lh">travel</h6>
              </div>
            </li>
            <li className="lg-rounded-box">
              <div className="inline-block">
                <span className="h3 lh">
                <i className="fa fa-book"></i>
                </span>
                <h6 className="padder normal lh">reading</h6>
              </div>
            </li>
            <li className="lg-rounded-box">
              <div className="inline-block">
                <span className="h3 lh">
                <i className="fa fa-gamepad"></i>
                </span>
                <h6 className="padder normal lh">gaming</h6>
              </div>
            </li>
            <li className="lg-rounded-box">
              <div className="inline-block">
                <span className="h3 lh">
                <i className="fa fa-puzzle-piece"></i>
                </span>
                <h6 className="padder normal lh">puzzles</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hobies;
