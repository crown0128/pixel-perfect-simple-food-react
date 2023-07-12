import './App.scss';
import Header from "./components/header/header";
import Delivery from "./components/page-catalog/delivery/delivery";
import MobileMenu from "./components/header/mobile-menu/mobile-menu";
import PopularCategories from "./components/page-catalog/popular-categories/popular-categories";
import StayHome from "./components/page-catalog/stay-home/stay-home";
import BestRestaurants from "./components/page-catalog/best-restaurants/best-restaurants";
import CustomerFeedback from "./components/page-catalog/customer-feedback/customer-feedback";
import MobileApplication from "./components/page-catalog/mobile-application/mobile-application";
import Footer from "./components/footer/footer";

function App() {
  return <>
    <Header/>
    <MobileMenu/>
    <Delivery/>
    <PopularCategories/>
    <StayHome/>
    <BestRestaurants/>
    <CustomerFeedback/>
    <MobileApplication/>
    <Footer/>
  </>;
}

export default App;
