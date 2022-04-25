import './App.css';
import { Fragment } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import FooterComponent from './FooterComponent/FooterComponent';


const App = () => {
  return(
    <Fragment>
      <HeaderComponent></HeaderComponent>
      <FooterComponent></FooterComponent>
    </Fragment>
  )
}
export default App;
