import './App.css';
import { Fragment } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import MainComponent from './MainComponent/MainComponent';


const App = () => {
  return(
    <Fragment>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </Fragment>
  )
}
export default App;
