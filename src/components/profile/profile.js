import React from 'react';

const Profile = () => {
  return(
    <section id="profile" className="main-block">
      <div className="container text-center">
        <div className="main-title text-left wow fadeIn">
          <div className="main-title__inner">
            <div className="text-right main-title__left">
              <i className="fa fa-user mega"></i>
              <h1 className="text-uppercase heavy lh padder">profile</h1>
              <em className="h5 serif em text-capitalize regular">my personal info</em>
            </div>
            <div className="main-title__right">
              <p className="serif em regular h6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
        </div>
        <div className="row main-block__padder text-left">
          <div className="col-lg-4 col-md-6 col-lg-push-4 text-center wow fadeInUp">
            <div className="inline-block photo-column-inner">
              <div className="xlg-rounded-box profile-image-holder center-block">
                <img src={process.env.PUBLIC_URL + '/assets/photo-4.jpg'} className="img-responsive"  style={{'margin-top': '0'}} alt="Profile" />
              </div>
              <div className="md-padder">
                <a href="#" className="btn btn-block btn--main-color">download resume</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-lg-push-4 info-column wow fadeInUp">
            <div>
              <h5 className="text-capitalize">personal info</h5>
              <ul className="padder list-unstyled info-list">
                <li>Name : Jazib Bashir</li>
                <li>Age : 27 Years Old</li>
                <li>Phone : +123-456-7890</li>
                <li>Email : <a href="mailto:jazibbashir@gmail.com">jazibbashir@gmail.com</a></li>
                <li>Adress : Lahore, Pakistan, 54000</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-lg-pull-8 col-xs-12 text-left story-column wow fadeInUp">
            <div>
              <h5 className="text-capitalize">my story</h5>
              <p className="padder">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
              </p>
              <p className="padder">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
