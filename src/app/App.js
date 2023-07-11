import './App.scss';
import Header from "./components/header/header";
import Delivery from "./components/page-catalog/delivery/delivery";
import MobileMenu from "./components/header/mobile-menu/mobile-menu";
import PopularCategories from "./components/page-catalog/popular-categories/popular-categories";

function App() {
  return<>
    <Header/>
    <MobileMenu/>
    <Delivery/>
    <PopularCategories/>
  </>;
}

export default App;
