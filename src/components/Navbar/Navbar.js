import css from './Navbar.module.css'

const Navbar = props => {
    return( 
        <nav className={css.Navbar}>
            <img src='/Img/LogoB.png' alt='logo' className={css.Navbar_Logo}/>

            <div className={css.NavbarLinks}>
                <a className= {css.Navbar_links_link} href='/'><span>Contacto</span></a>
            </div>
        </nav>
    )  
}

export default Navbar