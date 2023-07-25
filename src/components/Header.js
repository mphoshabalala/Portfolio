import '@fortawesome/fontawesome-free/css/all.min.css';



const Header = ({shrinkHero,setShrinkHero, showMenu, setShowMenu}) => {
    
const handleMenuClick = () => {
    
    if( shrinkHero === null)
     { 
        shrinkHero = {
                width: '70%',
                height: '90%',
                top: '2rem',
                transition: 'all 0.3s ease',
              };
              showMenu = true;
              document.body.style.overflowY = 'hidden';
      } else {
        shrinkHero = null;
        showMenu = false;
        document.body.style.overflowY = 'auto';
      }
   
  setShrinkHero(shrinkHero);
  setShowMenu(showMenu);
  
    
}

    return ( 
        <div className="header-content">
            <a href="#">
                <h2>M. Shabalala</h2>
            </a>
            <a className='menubar icon' onClick={handleMenuClick} href="#">
                <i class="fa-solid fa-bars" ></i>
            </a>
        </div>
     );
}
 
export default Header;