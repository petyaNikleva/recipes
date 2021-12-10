function Footer () {
    return (
        <div id="footer" className="footer-main">
        <div className="footer-box pad-top-70">
          <div className="container">
            <div className="row">
              <div className="footer-in-main">
                <div className="footer-logo">
                  <div className="text-center">
                    <img src="images/logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-a">
                    <h3>About Us</h3>
                    <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes.</p>
                    <ul className="socials-box footer-socials pull-left">
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa  fa-facebook"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-twitter"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-google-plus"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-pinterest"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-linkedin"></i></div>
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-b">
                    <h3>New Menu</h3>
                    <ul>
                      <li><a href="#">Italian Bomba Sandwich</a></li>
                      <li><a href="#">Double Dose of Pork Belly</a></li>
                      <li><a href="#">Spicy Thai Noodles</a></li>
                      <li><a href="#">Triple Truffle Trotters</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-c">
                    <h3>Contact Us</h3>
                    <p>
                      <i className="fa fa-map-signs" aria-hidden="true"></i>
                      <span>6 E Esplanade, St Albans VIC 3021, Australia</span>
                    </p>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                      <span>
                        +91 80005 89080
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span><a href="#">support@foodfunday.com</a></span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-d">
                    <h3>Opening Hours</h3>

                    <ul>
                      <li>
                        <p>Monday - Thursday </p>
                        <span> 11:00 AM - 9:00 PM</span>
                      </li>
                      <li>
                        <p>Friday - Saturday </p>
                        <span>  11:00 AM - 5:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="copyright" className="copyright-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h6 className="copy-title"> Copyright &copy; 2017 Food Funday is powered by <a href="#" target="_blank"></a> </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Footer;