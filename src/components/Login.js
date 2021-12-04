import { useContext  } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext.js';
import * as authService from '../services/authService.js'

function Login () {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    if (username == '' || password == '') {
      throw new console.error('Всички полета са задължителни.');
    }

    authService.login(username, password)
      .then((authData) => {
        login(authData);

        navigate('/');
      })
      .catch(err => {
        //TO DO notification
        console.log(err);
      }) 

  }

    return (
        <div id="reservation" className="reservations-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="form-reservations-box">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <h2 className="block-title text-center">
                     ВХОД
                  </h2>
                </div>

                <form onSubmit={loginSubmitHandler} id="contact-form" method="post" className="reservations-box" name="contactform">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="username" id="form_name" placeholder="ПОТРЕБИТЕЛСКО ИМЕ" required="required" data-error="Firstname is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="password" id="phone" placeholder="ПАРОЛА" required="required"/>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="no_of_persons" id="no_of_persons" className="selectpicker">
                        <option value="0" disabled>No. Of persons</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="time-picker" id="time-picker" placeholder="Time" required="required" data-error="Time is required." />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="preferred_food" id="preferred_food" className="selectpicker">
                        <option value="1" disabled>preferred food</option>
                        <option value="2">Indian</option>
                        <option value="3">Continental</option>
                        <option value="4">Mexican</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="occasion" id="occasion" className="selectpicker">
                        <option value="1" disabled>Occasion</option>
                        <option value="2">Wedding</option>
                        <option value="3">Birthday</option>
                        <option value="4">Anniversary</option>
                      </select>
                    </div>
                  </div> */}

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="reserve-book-btn text-center">
                      <button className="hvr-underline-from-center" id="submit">ВЛЕЗ</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Login;
