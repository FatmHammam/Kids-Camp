import styles from '../Assets/Styles/SignUp.module.scss';

function SignUp() {
    return (
        <div className={styles.body}>
            <div className="padding">
                <div className="row">
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="col-sm-8 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <p style={{ color: "#07b8c9" }}> Create your account ♥</p>
                                </div>
                                <div className="card-body" >
                                    <div className="form-group">
                                        <label className="control-label">First Name *</label>
                                        <input className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="First Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label  >Last Name *</label>
                                        <input className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="Last Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Phone *</label>
                                        <input className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="Phone" required />
                                    </div>
                                    <div className="form-group">
                                        <label  >Email*</label>
                                        <input className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="Enail Address" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Password *</label>
                                        <input className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;" required />
                                    </div>
                                    <div className="form-group">
                                        <label  >Confirm Password *</label>
                                        <input className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;" required />
                                    </div>
                                    <div className={styles.login}>
                                        <div className="form-group">
                                            <input value="Register" type="button" className="btn btn-success btn-lg form-control" />
                                        </div>
                                    </div>
                                    <div className={styles.register}>
                                        <p>Already have an account</p>
                                        <a href="/login">Login</a>
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

export default SignUp;