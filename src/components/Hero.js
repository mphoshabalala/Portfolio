import { useState } from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";
import MenuItems from "./MenuItems";

const Hero = () => {
    const [shrinkHero, setShrinkHero] = useState(null);
    const  [showMenu, setShowMenu] = useState(false);
    return ( <>
        <div className="Hero" style={shrinkHero} id="hero-id" >
            
            <Header setShrinkHero={setShrinkHero} shrinkHero={shrinkHero} showMenu = {showMenu} setShowMenu = {setShowMenu} />
            <HeroContent/>
        </div>
        {showMenu &&  <MenuItems setShrinkHero={setShrinkHero}/>}
      
    </>
        
     );
}
 
export default Hero;