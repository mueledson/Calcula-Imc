import { useState } from 'react'
import styles from './App.module.css'
import PoweredBy from "./assets/powered.png"
import Arrow from "./assets/leftarrow.png"
import { levels,   calculateImc, Level } from './helpers/imc'
import GridItem from './components/GridItem'

function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow]  = useState<Level | null>(null)

  function handleCalculateButton() {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert("Preencha todos os campos")
    }
  }

  function handleBackButton() {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={PoweredBy} alt="PoweredBy" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea(Corporal), parâmetro adotado pela Organização Mundial de Saúde(O.M.S) para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura em Metros. Ex: 1.70"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false }
          
          />

          <input
            type="number"
            placeholder="Digite o seu peso em Kg. Ex: 70"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false }
          />

          <button
          onClick={handleCalculateButton}
          disabled={toShow ? true : false }
          >
            Calcule o IMC
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }

          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={Arrow} width={25}/>
              </div>
              <GridItem item={toShow} />
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default App
