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
        <h2>Bienvenue sur Quiz By Djibril SAMASSA</h2>
        <h3>Ce projet réalisé en React JS est un quiz de 10 questions portant majoritairement sur la culture générale. <br />Enjoy !</h3>
        {!isRunning ? <h2 className='button1' onClick={() => { setIsRunning(true) }}>Commencer</h2> : null}
        {isRunning ?
          <div className='questions'>
            <h2>{`${counter + 1}/${Quiz.questions.length}`}</h2>
            <h3 className='question'>{Quiz.questions[counter].question}</h3>
            <div className='reponses'>
              {currentReponse === Quiz.questions[counter].reponse1 && isOkay === null ? <h3 className='selected'>{Quiz.questions[counter].reponse1}</h3> : isOkay !== null ? <h3 className={isOkay && goodResponse === Quiz.questions[counter].reponse1 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse1 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse1 ? null : "not"}>{Quiz.questions[counter].reponse1}</h3> : <h3 className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse1) }}>{Quiz.questions[counter].reponse1}</h3>}
              {currentReponse === Quiz.questions[counter].reponse2 && isOkay === null ? <h3 className='selected'>{Quiz.questions[counter].reponse2}</h3> : isOkay !== null ? <h3 className={isOkay && goodResponse === Quiz.questions[counter].reponse2 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse2 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse2 ? null : "not"}>{Quiz.questions[counter].reponse2}</h3> : <h3 className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse2) }}>{Quiz.questions[counter].reponse2}</h3>}
              {currentReponse === Quiz.questions[counter].reponse3 && isOkay === null ? <h3 className='selected'>{Quiz.questions[counter].reponse3}</h3> : isOkay !== null ? <h3 className={isOkay && goodResponse === Quiz.questions[counter].reponse3 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse3 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse3 ? null : "not"}>{Quiz.questions[counter].reponse3}</h3> : <h3 className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse3) }}>{Quiz.questions[counter].reponse3}</h3>}
              {currentReponse === Quiz.questions[counter].reponse4 && isOkay === null ? <h3 className='selected'>{Quiz.questions[counter].reponse4}</h3> : isOkay !== null ? <h3 className={isOkay && goodResponse === Quiz.questions[counter].reponse4 ? "okay" : isOkay && currentReponse !== Quiz.questions[counter].reponse4 ? null : !isOkay && currentReponse !== Quiz.questions[counter].reponse4 ? null : "not"}>{Quiz.questions[counter].reponse4}</h3> : <h3 className='hovering' onClick={() => { setCurrentReponse(Quiz.questions[counter].reponse4) }}>{Quiz.questions[counter].reponse4}</h3>}
            </div>
            {isOkay === false ? <h3>La bonne réponse est : {Quiz.questions[counter].bonneReponse}</h3> : null}
            {!currentReponse ? null : isOkay === null ? <h3 className='button1' onClick={() => { checkResponse() }}>Valider</h3> : <h3 className='button1' onClick={() => { increase() }}>Suivant</h3>}
          </div>
          : null}
      </div> :
        <div className='recommencer'>
          <h2>Félicitation, vous avez terminé le quiz</h2>
          <h3>Vous obtenez le score de {score} sur {Quiz.questions.length}</h3>
          <p onClick={() => {
            setFinished(false), setCounter(0),
              setIsOKay(null),
              setCurrentReponse(null),
              setScore(0)
          }} className='button1'>Recommencer</p>
          <h3>Une version 2.0 arrive avec plus de Quiz, portant sur différents thème, avec la possibilité de réaliser le votre 🚀</h3>
        </div>}
      <div className='liens'>
        <h3>Mes liens</h3>
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
