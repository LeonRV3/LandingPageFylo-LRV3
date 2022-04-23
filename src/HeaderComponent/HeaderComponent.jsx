import './HeaderComponent.css'
import { Fragment } from "react";
import {ReactComponent as LogoSvg} from '../images/logo.svg'; 


const HeaderComponent = () => {
    return (
        <Fragment>
            <header>
                <nav>
                    <div>
                        <LogoSvg></LogoSvg>
                    </div>
                    <ul className="menu-options">
                        <li>Features</li>
                        <li>Team</li>
                        <li>Sign in</li>
                    </ul>
                </nav>
                <div className="img-header">
                    <img src={require("../images/illustration-intro.png")} alt="" />
                    <div>
                        <h1>All your files in one secure location, accesisble anywhere</h1>
                        <p>
                            Fylo stores all your most important files in one secure location.
                            Access them wherever you need, share and collaborate with friends
                            family, and co-workers.
                        </p>
                        <button>Get Started</button>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderComponent;