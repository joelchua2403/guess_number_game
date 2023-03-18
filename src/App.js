import { useState } from 'react';
import './App.css';


const getRandomNumber = () => {
  const randomNumber = (Math.floor(Math.random() * 10));
  console.log(randomNumber)
  return randomNumber;
};

const getMessage = (guess, randomNumber) => {
  if (guess === randomNumber) {
   return ("You guessed the number!");
 } else if (guess > randomNumber) {
   return ("Your guess is too high!");
 } else if (guess < randomNumber) {
   return ("Your guess is too low!");
 }
 
 }

function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(()=> getRandomNumber());
  const [message, setMessage] = useState('');
  const [guesses, setGuesses] = useState([]);

  


  const checkGuess = () => {
    setMessage(getMessage(guess, randomNumber));
    handleGuesses();
  }



  const reset = () => {
    setRandomNumber(getRandomNumber());
    setMessage('');
  }


  const handleGuesses = () => {
    setGuesses([...guesses, guess]);
  }

 

  return (
    <div className="App">
    <h1>Guess the number!</h1>
    <p>Guess a number between 1 and 10</p>
    <input type='number' value={guess} onChange={(e) => setGuess(+e.target.value)}/>
    
    { message !== 'You guessed the number!' ? (<button onClick={checkGuess}>Guess</button>) : (<button onClick={reset}>Reset</button>) }
    <p>{message}</p>
    <h2>Guesses:</h2>
    {guesses.map((guess)=> {
      return (
      <li>
        {guess}
      </li>
    )})}

    </div>
  );
}

export default App;
