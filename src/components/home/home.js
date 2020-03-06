import React from 'react';
import useWindowDimensions from '../../helpers/getWindowDimensions';

const Home = () => {
    return (
      <section id="home" className="text-center bg-image no-overflow">
				<div className="overlay pattern-overlay"></div>
				<div className="container text-center">
					<div id="parallax-home" className="fullscreen inline-block" style={{height: useWindowDimensions().height}}>
						<div className="table" style={{height: '100%'}}>
							<div className="table-cell v-middle wow fadeIn">
								<h1 className="huge text-uppercase title-box">Jazib Bashir</h1>
								<div className="table xs-padder profession-box">
									<div className="table-cell">
										<h5 className="text-capitalize semi-bold lh">JS Web Developer</h5>
									</div>
								</div>
								<ul className="list-inline hollow-social-menu h5 list-gutter-xs lg-padder">
									<li>
										<a href="#" className="sm-rounded-box twitter-bg">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#" className="sm-rounded-box google-plus-bg">
											<i className="fa fa-google-plus"></i>
										</a>
									</li>
									<li>
										<a href="#" className="sm-rounded-box linkedin-bg">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="#" class="sm-rounded-box github-bg">
											<i class="fa fa-github"></i>
										</a>
									</li>
								</ul>
								<div class="rings">
									<span>scroll</span>
									<div class="ring ring-1"></div>
									<div class="ring ring-2"></div>
									<div class="ring ring-3"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    );
}

export default Home;

