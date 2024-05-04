import css from './Galeria.module.css'

import imageG1 from '../../Asset/Imagen (3).jpg'
import imageG2 from '../../Asset/Imagen (6).jpg'
import imageG3 from '../../Asset/Imagen (4).jpg'
import imageG4 from '../../Asset/Imagen (7).jpg'


const Galeria = props => {
    return( 
        <section className={css.Galeria}>
            <div className={css.Galeria_fotos}>   
                  <img src={imageG1} alt='Blusa tirantes' className={css.Galeria_I}/>
                 
                  <img src={imageG2} alt='Vestido de puntos' className={css.Galeria_I}/>
  
                  <img src={imageG3} alt='Vestido blanco' className={css.Galeria_I}/>
              
                  <img src={imageG4} alt='Blusa blanca halter y falda campesina corta' className={css.Galeria_I}/>
            </div>
        </section>
        
    )  
}

export default Galeria