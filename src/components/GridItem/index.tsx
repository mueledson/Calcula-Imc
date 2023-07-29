import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import UP from "../../assets/up.png"
import DOWN from "../../assets/down.png"

type Props = {
    item: Level
}

function GridItem({item} : Props) {
  return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                                            {/* Forma 1 */}

                <img src={item.icon === 'up' ? UP : DOWN} width={30}/>

                                            {/* Forma 2 */}

                    {/*  {item.icon === 'up' && <img src={UP}     width={30} />} */}
                    {/*  {item.icon === 'down' && <img src={DOWN} width={30} />} */} 

            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && 
                <div className={styles.yourImc}>Seu IMC é de: {item.yourImc} kg / m²</div>
            }

            <div className={styles.gridInfo}>O Imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong> </div>
        </div>
    )
}

export default GridItem
