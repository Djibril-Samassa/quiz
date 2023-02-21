/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.json'
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [currentReponse, setCurrentReponse] = useState(null)
  const [goodResponse, setGoodResponse] = useState(Quiz.questions[counter].bonneReponse)
  const [isOkay, setIsOKay] = useState(null)
  const [finished, setFinished] = useState(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setGoodResponse(Quiz.questions[counter].bonneReponse)
  }, [counter])

  const checkResponse = () => {
    currentReponse === goodResponse ? (setIsOKay(true), setScore(score + 1)) : setIsOKay(false)
  }

  const increase = () => {
    counter < 9 ? (setCounter(counter + 1),
      setIsOKay(null),
      setCurrentReponse(null)) : setFinished(true)
  }


  return (
    <div className="App">
      {!finished ? <div className='jeu'>
        <h3>Bienvenue sur Quiz By Djibril SAMASSA</h3>
        <p>Ce projet réalisé en React JS est un quiz de 10 questions portant majoritairement sur la culture générale. <br />Enjoy !</p>
        {!isRunning ? <p className='button1' onClick={() => { setIsRunning(true) }}>Commencer</p> : null}
        {isRunning ?
          <div className='questions'>
            <h2>{`${counter + 1}/${Quiz.questions.length}`}</h2>
            <h3 className='question'>{Quiz.questions[counter].question}</h3>
            <div className='reponses'>
              {currentReponse === Quiz.questions[counter].reponse1 && isOkay === null ? <p className='selected'>{Quiz.questions[counter].reponse1}</p> : isOkay !== null ? <p className={isOkay && goodResponse === Quiz.questions[counter].reponse1 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse1 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse1 ? null : "not"}>{Quiz.questions[counter].reponse1}</p> : <p className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse1) }}>{Quiz.questions[counter].reponse1}</p>}
              {currentReponse === Quiz.questions[counter].reponse2 && isOkay === null ? <p className='selected'>{Quiz.questions[counter].reponse2}</p> : isOkay !== null ? <p className={isOkay && goodResponse === Quiz.questions[counter].reponse2 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse2 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse2 ? null : "not"}>{Quiz.questions[counter].reponse2}</p> : <p className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse2) }}>{Quiz.questions[counter].reponse2}</p>}
              {currentReponse === Quiz.questions[counter].reponse3 && isOkay === null ? <p className='selected'>{Quiz.questions[counter].reponse3}</p> : isOkay !== null ? <p className={isOkay && goodResponse === Quiz.questions[counter].reponse3 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse3 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse3 ? null : "not"}>{Quiz.questions[counter].reponse3}</p> : <p className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse3) }}>{Quiz.questions[counter].reponse3}</p>}
              {currentReponse === Quiz.questions[counter].reponse4 && isOkay === null ? <p className='selected'>{Quiz.questions[counter].reponse4}</p> : isOkay !== null ? <p className={isOkay && goodResponse === Quiz.questions[counter].reponse4 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse4 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse4 ? null : "not"}>{Quiz.questions[counter].reponse4}</p> : <p className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse4) }}>{Quiz.questions[counter].reponse4}</p>}
            </div>
            {isOkay === false ? <h3>La bonne réponse est : {Quiz.questions[counter].bonneReponse}</h3> : null}
            {!currentReponse ? null : isOkay === null ? <p className='button1' onClick={() => { checkResponse() }}>Valider</p> : <p className='button1' onClick={() => { increase() }}>Suivant</p>}
          </div>
          : null}
      </div> :
        <div className='recommencer'>
          <h3>Félicitation, vous avez terminé le quiz</h3>
          <p>Vous obtenez le score de {score} sur {Quiz.questions.length}</p>
          <p onClick={() => {
            setFinished(false), setCounter(0),
              setIsOKay(null),
              setCurrentReponse(null),
              setScore(0)
          }} className='button1'>Recommencer</p>
          <p>Une version 2.0 arrive avec plus de Quiz, portant sur différents thème, avec la possibilité de réaliser le votre 🚀</p>
        </div>}
      <div className='liens'>
        <h4>Mes liens</h4>
        <nav>
          <li><a href='https://github.com/Djibril-Samassa?tab=repositories' target="_blank">Github</a></li>
          <li><a href='https://www.linkedin.com/in/djibril-samassa/' target="_blank">Linkedin</a></li>
          <li><a href='https://djibrilsamassa.netlify.app/' target="_blank">Mon portfolio</a></li>
        </nav>
      </div>
    </div >
  );
}

export default App;
