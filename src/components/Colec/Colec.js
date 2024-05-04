import css from './Colec.module.css'

import imageC from '../../Asset/Colección.jpg'

const Colec = props => {
    return( 
        <section className={css.Colec}>
            <div className={css.Colec_cont}>
               <div className={css.Colec_title}>
                    <h1>Colección Primavera/Verano </h1>
               </div>

               <div className={css.Colec_subtitle}>
                    <h3>Vestidos Cortos de Elegancia Moderna</h3>
               </div>
               <div className={css.Colec_text}>
                    <p>Última colección de vestidos cortos, diseñada para realzar tu estilo con sofisticación y frescura. Cada pieza ha sido creada para reflejar la belleza y la confianza ha tú estilo. ¡Encuentra tu favorito y destaca está la temporada!</p>
               </div>

            </div>
           
            <div className={css.Colec_wrapper}>   
               <img src={imageC} alt='Diseñadora de modas' className={css.Colec_iwrapper}/>
            </div> 
        </section>
    )  
}

export default Colec