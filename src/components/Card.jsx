import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import imga from '../images/food.png'

const Card = ({i, title, description, src, url , link, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * -10}px)`}} 
        className={styles.card}
      >
        <h2 className=' text-center text-3xl font-bold -mt-2'>{title}</h2>
        <div className={styles.body}>
          <div className=' mr-[550px]  mt-5'>
            <p className=' text-lg font-normal '>{description}</p>
                        
               <button className=' bg-gray-800   h-12 w-32 text-center rounded-2xl text-white mt-6'>
              
              <a href={link} target="_blank">Visit Website</a>
            </button> 

          

         
              
              

              
            
          </div>


             <img className=' ml-auto  -mt-[230px] h-[240px] w-[500px] rounded-xl' src={src} alt={i} />
    

        </div>
      </motion.div>
    </div>
  )
}

export default Card
