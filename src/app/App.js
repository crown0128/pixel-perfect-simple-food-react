import './App.scss';
import Header from "./components/header/header";
import Delivery from "./components/page-catalog/delivery/delivery";
import MobileMenu from "./components/header/mobile-menu/mobile-menu";

function App() {
  return<>
    <Header/>
    <MobileMenu/>
    <Delivery/>
  </>;
}

export default App;
