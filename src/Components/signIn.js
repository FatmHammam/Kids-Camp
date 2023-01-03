import styles from "../Assets/Styles/SignUp.module.scss";
import React from 'react'

function SignIn() {
    return (
        <div className={styles.body}>
            <div className="padding">
                <div className="row">
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="col-sm-8 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <p className={styles.welcom}>Welcome!</p>
                                    <p> We're glad you're here ♥</p>
                                </div>
                                <div className="card-body" >
                                    <div className="form-group">
                                        <label className="control-label">Email</label>
                                        <input type="tel" className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="Username or Email" required />
                                    </div>
                                    <div className="form-group">
                                        <label  >Password</label>
                                        <input type="tel" className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;" required />
                                    </div>
                                    <div className={styles.login}>
                                        <div className="form-group">
                                            <input value="SIGN IN" type="button" className="btn btn-success btn-lg form-control" />
                                        </div>
                                    </div>
                                    <div className={styles.register}>
                                        <p>New Customer?</p>
                                        <a href="/register">REGESTER NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;