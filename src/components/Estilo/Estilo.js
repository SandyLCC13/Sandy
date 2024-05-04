import css from './Estilo.module.css'

import imagenE from '../../Asset/Estilo2.jpg'

const Estilo = props => {
    return( 
        <section className={css.Estilo}>

            <div className={css.Estilo_foto7}>   
                  <img src={imagenE} alt='Estilo' className={css.Estilo_I7}/>
                
            </div>
            <div className={css.Estilo_cont}>    
                <div className={css.Estilo_title}><h1>ESTILO PERSONAL</h1></div>    
                
                <p className={css.Estilotext}>Identifica tu estilo personal, refleja tu personalidad através de la moda.
                
                
                        <h2>Natural</h2>
                        <p>Es la comodida y la simplicidad de las prendas suelen ser de telas suaves y fluidas como algodón, lino o denim. Se prefieren colores neutros y tonos terrosos. Las siluetas son relajadas y sin complicaciones.
                        La clave son  el uso de camisetas básicas, jeans holgados, vestidos casuales, suéteres oversize, sandalias cómodas, accesorios de materiales naturales como mimbre o madera
                        </p>

                        <h2>Clásico</h2>
                        <p>Atemporal, con prendas bien estructuradas y cortes pulidos. Se prefiere una paleta de colores neutros y tonos sólidos. Las telas suelen ser de calidad y duraderas.
                        Lo importante son los  blazers entallados, camisas de botones, faldas lápiz, pantalones de vestir, bailarinas o mocasines, perlas o joyería discreta.
                        </p>

                        <h2>Elegante</h2>
                        <p>Sofisticado son prendas y accesorios de alta calidad. Se destacan los cortes, telas lujosas y detalles sutiles pero elegantes. Los colores puede ser neutra o incluir tonos clásicos como negro, blanco, azul marino y gris.
                        Son todos los vestidos de cóctel, trajes de sastre, blusas de seda, tacones de calidad, joyería fina y bolsos estructurados.
                        </p>

                        <h2>Romántico</h2>
                        <p>Es todo lo femenino y delicado, con detalles suaves y adornos como encajes, volantes, estampados florales y telas vaporosas, incluye tonos pastel y suaves  .
                        Solemos ver vestidos románticos, blusas con detalles de encaje, faldas con vuelo, zapatos con lazo, joyería delicada y bolsos vintage.
                        </p>

                        <h2>Seductor o Magnético</h2>
                        <p>Se caaracteriza por que resalta la figura femenina. Se utilizan telas como satén, cuero o tejidos elásticos. Usa coloresr intensos como rojo, negro o tonos metálicos
                        Lo que caracterisa es el uso de estidos ceñidos, tops escotados, faldas lápiz, tacones altos, joyería llamativa y labios rojos.                 
                        </p>

                        <h2>Creativo</h2>
                        <p>Es único y original, con combinaciones inesperadas de prendas y accesorios. Se experimenta con colores, estampados y texturas para lograr un look artístico y expresivo.             
                        Podemos precensiar piezas vintage o de diseñadores independientes, mezclas de estampados, accesorios únicos y excéntricos, calzado creativo junto con detalles inesperados. 
                        </p>

                        <h2>Dramático</h2>
                        <p>Es audaz con prendas impactantes y contrastes llamativos. Se destacan los cortes arquitectónicos, estampados gráficos y colores intensos.                
                        Abrigos estructurados, pantalones de cuero, botas altas, accesorios statement como maxi aretes o collares grandes, maquillaje y peinados dramáticos
                   </p>
                </p>    
            </div>        
        </section>
    )  
}

export default Estilo