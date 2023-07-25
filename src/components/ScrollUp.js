import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';



const ScrollUp = () => {
    const [showIcon, setShowIcon] = useState({display: 'none',});
    const handleScroll = () => {
        if(window.scrollY >= 10){
            setShowIcon({display: 'block',});
        }else {
            setShowIcon({display: 'none',});
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])

    return ( 
        <a className="arrow-up" href="#hero-id" style={showIcon}><i  class="fa-sharp fa-solid fa-circle-arrow-up" ></i></a>
     );
}
 
export default ScrollUp;