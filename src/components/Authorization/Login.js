import '../../App.css';
import { LanguageBar } from '../Header/LanguageBar'
import { ForgotPasswordPopup } from '../../pages/ForgotPasswordPopup'
import { Register } from './Register';
export function Login() {
    return (
        <>
            <div className="authorization">
            <div className="authorization-content">
            <div className="login">
                    <div className="login-content">
                        <h2>LOG IN !</h2>
                        {/* <div className="login-error-msg-holder">
      <p className="login-error-msg">InvalclassName username <span className="error-msg-second-line">and/or password</span></p>
    </div> */}
                        <div className="login-form">
                            <input type="text" name="username" className="username-field login-form-field" placeholder="Username" /><br />
                            <input type="password" name="password" className="password-field login-form-field" placeholder="Password" /><br />
                            <input type="submit" value="Login" className="login-form-submit" />
                            <a className='forgot' href={<ForgotPasswordPopup />}>Forgot Password?</a>
                        </div>
                    </div>
            </div>
            <Register />
            </div>
            <div className="footer">
                <LanguageBar />
                <div className="copyright"><p>Copyright © 2023 | All rights reserved</p></div>
            </div>
            </div>

        </>
    );
}


