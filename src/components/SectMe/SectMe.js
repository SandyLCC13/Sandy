import css from './SectMe.module.css'
import imageD from '../../Asset/Diseñadora.jpg'

const SectMe = props => {
    return( 
        <section className={css.SectMe}>
            <div className={css.SectMe_inf}>
                <div className={css.SectMe_cont}>
                <div className={css.SectMe_title}><h1>DISEÑADORA DE MODAS</h1></div>
                <div className={css.SectMe_subtitle}><h3>Sandra Lorena Castillo Chay</h3></div>    
               
                <p className={css.SectMe_text}>Pasión por la moda con una visión creativa que fusiona el estilo con la funcionalidad, creando piezas únicas. Con una formación en diseño, tendencias y producción, ha colaborado en diversas colecciones y proyectos, desde la conceptualización hasta la pasarela. Mi estilo se caracteriza por la innovación, personalización y adaptación de la ropa al cliente. Siempre estoy dispuesto a aprender y a enfrentar nuevos desafíos en el mundo de la moda.</p>
                </div>
            </div>

            <div className={css.SectMe_wrapper}>   
               <img src={imageD} alt='Diseñadora de modas' className={css.SectMe_iwrapper}/>
            </div>   
        </section>
    )  
}

export default SectMe