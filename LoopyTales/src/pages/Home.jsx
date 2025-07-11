import Heading from "../components/header/Heading";
import HeroSection from "../components/hero";
import './home.css';
import Section1  from "../components/section1";
import Section2 from "../components/section2";
import Shop from "./Shop"; // Assuming you have a Shop component in the same directory

function Home() {
  return (
      <div className="homewrapper">
        {/* <Heading/> */}
        <HeroSection /> 
        <Section1 />
        <Section2/>
        {/* <Shop/> */}
      </div>
  );
}
export default Home; 