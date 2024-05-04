import css from './Registro.module.css'

import logc from '../../Asset/Logo.png'
import imaface from '../../Asset/facebook.png'
import imaig from '../../Asset/instagram.png'

const Registro = props => {
    return( 
        <section className={css.Registro}id='form'>

            <div className={css.Registro_title}><h1>Contacto</h1>

            <form action="/my-handling-form-page" method="post">
                <ul>    
                    <li>    
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="user_name" />    
                    </li>
                    <li>           
                        <label for="mail">Correo electrónico:</label>
                        <input type="email" id="mail" name="user_mail" />
                    </li>
                    <li>
                        <label for="Tel">Teléfono:</label>
                        <input type="text"id="num" name="user_cel"></input>
                    </li>
                        <input type="submit" value="Submit"></input>
                </ul>
            </form>
        </div>  

            <div className={css.Registro_rd}>
                <img src={logc} alt='Marca' className={css.Registro_logo}/>
            

            <div className={css.Registro_rdlink}>
                 <div>
                <a  href='https://www.instagram.com/sandya01363/?next=%2F'><img src={imaig} alt='instagram' className={css.Registro_rding}/></a>
                <a  href='https://www.facebook.com/profile.php?id=100009173001061'><img src={imaface} alt='facebook' className={css.Registro_rdface}/></a>
                </div>
            </div>

            </div>
        </section>
    )  
}

export default Registro