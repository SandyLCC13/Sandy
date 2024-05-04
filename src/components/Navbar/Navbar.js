import css from './Navbar.module.css'

import imageL from '../../Asset/LogoB.png'

const Navbar = props => {

    
    return( 
        <nav className={css.Navbar}>
            <img src={imageL} alt='logo' className={css.Navbar_Logo}/>

            <div className={css.NavbarLinks}>
                <a className= {css.Navbar_links_link} href='#form'><span>Contacto</span></a>
            </div>
        </nav>
    )  
}

export default Navbar