import '../../App.css';
export function Register() {
    return (
        <>
        <div className="register">
            <div className="register-content">
                <h2>SIGN UP ! </h2>
                <div className="register-form">
                <input type="text" name="username" className="username-field register-form-field" placeholder='Log in with Google'/><br/>
                <span> - OR - </span><br/>
                <label></label>
                    <input type="text" name="username" className="username-field register-form-field" placeholder='Email adress' /><br/>
                    <input type="submit" value="Register" className="register-form-submit" />
                </div>

            </div>
        </div>

        </>
    );
}


