import { Fragment } from "react";


const FooterComponent = () => {
    return (

        <Fragment>
            <footer>
                <div class="container-footer">
                    <div class="logo-footer">
                        <img class="menu-logo" src="./images/logo.svg" alt="" />

                    </div>

                    <div>
                        <div class="footer-card">
                            <div class="footer-icon">
                                {/* <img src="./images/icon-location.svg" alt=""> */}
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
                                aspernatur distinctio harum nam et consequatur beatae veniam mollitia
                                enim repudiandae!
                            </p>
                        </div>
                        <div class="footer-card">
                            <div class="footer-icon">
                                {/* <img src="./images/icon-location.svg" alt=""> */}
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
                                aspernatur distinctio harum nam et consequatur beatae veniam mollitia
                                enim repudiandae!
                            </p>
                        </div>
                        <div class="footer-card">
                            <div class="footer-icon">
                                {/* <img src="./images/icon-location.svg" alt=""> */}
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
                                aspernatur distinctio harum nam et consequatur beatae veniam mollitia
                                enim repudiandae!
                            </p>
                        </div>
                        <div>
                            <p>About Us</p>
                            <p>Jobs</p>
                            <p>Press</p>
                            <p>Blog</p>
                        </div>
                        <div>
                            <p>Contact Us</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                        </div>
                    </div>

                </div>
            </footer>
        </Fragment>

    );
}

export default FooterComponent;