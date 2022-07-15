import './HeaderComponent.css'
import { Fragment, useState } from "react";
import {ReactComponent as LogoSvg} from '../images/logo.svg'; 
import { Icon } from "@iconify/react";

const HeaderComponent = () => {

    const [menuHam, setMenuHam] = useState(false);

    const showMenu = () => {
        setMenuHam(true);
    }

    function HideScrollbar() {
        var style = document.createElement("style");
        style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
        document.head.appendChild(style);

        return <p>Opcion Menu</p>
        
      }

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
                        <Icon className='iconMenuDesktop' onClick={showMenu} icon="dashicons:menu"></Icon>
                    </ul>
                </nav>
                {!menuHam ? 
                <div className="img-header">
                <img src={require("../images/illustration-intro.png")} alt="logo Fylo" />
                <div>
                    <h1>All your files in one secure location, accesisble anywhere</h1>
                    <p>
                        Fylo stores all your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends
                        family, and co-workers.
                    </p>
                    <button>Get Started</button>
                </div>
            </div> :
            HideScrollbar()
                }
            </header>
        </Fragment>
    )
}

export default HeaderComponent;