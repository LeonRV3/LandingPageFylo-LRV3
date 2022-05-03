import { Fragment } from "react";
import { ReactComponent as AccessAnywhereSvg } from '../images/icon-access-anywhere.svg';
import { ReactComponent as ArrowSvg } from '../images/icon-arrow.svg';
import './MainComponent.css';

const MainComponent = () => {
    return (


        <Fragment>

            <main>

                <div className="main-icons">
                    <div>
                        <AccessAnywhereSvg></AccessAnywhereSvg>
                        <h2>
                            Access your files, anywhere
                        </h2>
                        <p>
                            The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </p>
                    </div>
                    <div>
                        <AccessAnywhereSvg></AccessAnywhereSvg>
                        <h2>
                            Access your files, anywhere
                        </h2>
                        <p>
                            The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </p>
                    </div>
                    <div>
                        <AccessAnywhereSvg></AccessAnywhereSvg>
                        <h2>
                            Access your files, anywhere
                        </h2>
                        <p>
                            The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </p>
                    </div>
                    <div>
                        <AccessAnywhereSvg></AccessAnywhereSvg>
                        <h2>
                            Access your files, anywhere
                        </h2>
                        <p>
                            The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </p>
                    </div>
                </div>

                <div className="main-advice">
                    <div>
                        <img src={require("../images/illustration-stay-productive.png")} alt="logo Fylo" />
                    </div>
                    <div className="main-advice-text">
                        <h2>
                            Stay productive, wherever you are
                        </h2>
                        <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                            storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                            attachments required.</p>
                        <div>
                            <a href="/">See how Fylo works</a>
                            <ArrowSvg></ArrowSvg>
                        </div>
                    </div>

                </div>

                <div className="main-opinions">
                    <div className="card-opinion">
                <img className="quotes-img" alt="profile" src={require("../images/bg-quotes.png")}></img>

                        <p>Fylo has improved our team productivity by
                            an order of magnitude. Since making the
                            switch our team has become a well-oiled
                            collaboration machine</p>
                        <div className="card-opinion-img">
                            <img alt="profile" src={require("../images/profile-1.jpg")}></img>
                            <p>Satish Patel <span>Founder & CEO, Huddle</span></p>
                        </div>
                    </div>
                    <div className="card-opinion">
                        <p>Fylo has improved our team productivity by
                            an order of magnitude. Since making the
                            switch our team has become a well-oiled
                            collaboration machine</p>
                        <div className="card-opinion-img">
                            <img alt="profile" src={require("../images/profile-1.jpg")}></img>
                            <p>Satish Patel <span>Founder & CEO, Huddle</span></p>
                        </div>
                    </div>
                    <div className="card-opinion">
                        <p>Fylo has improved our team productivity by
                            an order of magnitude. Since making the
                            switch our team has become a well-oiled
                            collaboration machine</p>
                        <div className="card-opinion-img">
                            <img alt="profile" src={require("../images/profile-1.jpg")}></img>
                            <p>Satish Patel <span>Founder & CEO, Huddle</span></p>
                        </div>
                    </div>
                    
                </div>

                <div className="main-started">
                    <div>
                        <h2>Get early access today</h2>
                        <p>In only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                            questions, our support team would be happy to help you
                        </p>
                        <div>
                            <input placeholder="email@example.com"></input>
                            <button>Get Started For Free</button>
                        </div>
                    </div>
                </div>

            </main>

        </Fragment>


    );
}

export default MainComponent;