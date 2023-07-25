import '@fortawesome/fontawesome-free/css/all.min.css';

const MenuItems = ({setShrinkHero}) => {

    const handleMenuItemClick = () => {
      setShrinkHero(null);
      document.body.style.overflowY = 'auto';
    }

    return ( 
        <>  
            <a className='cancel' onClick={handleMenuItemClick} href="#"><i class="fa-sharp fa-solid fa-circle-xmark"></i></a>
            <div className="menu-items">
            <a onClick={handleMenuItemClick} className="current" href="#">Home</a>
            <a onClick={handleMenuItemClick} href="#about-me-id">About Me</a>
            <a onClick={handleMenuItemClick} href="#projects-id">Projects</a>
            <a onClick={handleMenuItemClick} href="#skills-container-id">Skills</a>
            <a onClick={handleMenuItemClick} href="#education-id">Education</a>
            <a onClick={handleMenuItemClick} href="#contacts-id">Contacts</a>
        </div>
        </>
        
     );
}
 
export default MenuItems;