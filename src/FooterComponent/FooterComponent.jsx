import { Fragment } from "react";
import "./FooterComponent.css";
import { ReactComponent as IconLogoSvg } from '../images/logo.svg';
import { ReactComponent as IconLocationSvg } from '../images/icon-location.svg';
import { ReactComponent as IconPhoneSvg } from '../images/icon-phone.svg';
import { ReactComponent as IconEmailSvg } from '../images/icon-email.svg';

// Icons
import { Icon } from "@iconify/react";


const FooterComponent = () => {
    return (

        <Fragment>
            <footer>
                <div class="container-footer">
                    <div class="logo-footer">
                        <IconLogoSvg></IconLogoSvg>

                    </div>

                    <div className="footer-options">
                        <div>
                            <div>
                                <IconLocationSvg></IconLocationSvg>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
                                aspernatur distinctio harum nam et consequatur beatae veniam mollitia
                                enim repudiandae!
                            </p>
                        </div>
                        <div className="footer-cards">
                            <div class="footer-card">
                                <div class="footer-icon">
                                    <IconPhoneSvg></IconPhoneSvg>
                                </div>
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>
                            <div class="footer-card">
                                <div class="footer-icon">
                                    <IconEmailSvg></IconEmailSvg>
                                </div>
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>
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
                        <div className="footer-socialnet">
                            <Icon icon="bxl:facebook"></Icon>
                            <Icon icon="bxl:twitter"></Icon>
                            <Icon icon="bxl:instagram"></Icon>
                        </div>
                    </div>

                </div>
            </footer>
        </Fragment>

    );
}

export default FooterComponent;