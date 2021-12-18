import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext.js';
import { useNotificationContext, types } from '../../context/NotificationContext.js';

import * as authService from '../../services/authService.js'

function Login() {
  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    authService.login(username, password)
      .then((authData) => {
        login(authData);
        navigate('/');
      })
      .catch(err => {
        err.message === 'Failed to fetch'
          ? addNotification('Възникна грешка. Опитайте по-късно.', types.danger)
          : addNotification('Грешно потребителско име или парола.', types.danger);
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
                    <input type="text" name="username" id="form_name" placeholder="ПОТРЕБИТЕЛСКО ИМЕ" required data-error="Firstname is required." />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-box">
                    <input type="password" name="password" id="phone" placeholder="ПАРОЛА" required />
                  </div>
                </div>
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
