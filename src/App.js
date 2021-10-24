import logo from './logo.svg';
import './App.css';
import uniqid from 'uniqid';
import usflag from './images/usflag.png'
import canflag from './images/canada.png'
import taiwan from './images/taiwan.png';
import ukflag from './images/ukflag.png';
import japan from './images/japan.png';
import china from './images/china.png';
import france from './images/france.png';
import ireland from './images/ireland.png';
import italy from './images/italy.png';
import malaysia from './images/malaysia.png';
import netherlands from './images/netherlands.png';
import russia from './images/russia.png';
import singapore from './images/singapore.png';
import vietnam from './images/vietnam.png';
import { FlagCard } from './components/FlagCard';
import { useEffect, useState } from 'react';
import { GameBoard } from './components/gameBoard';

//this app will be a memory game, where the player has to click on different flags. Their score will increase
//with each unique flag clicked. If the player clicks the same flag twice, they lose.
//Their highest score will be saved. When the player plays again, they can try to beat their high score.

//This game will need a "flag" component. This will include an image and a country name. These will be passed as props.
// App.js will hold a state with an array of objects with links to the country flag images, names, a unqiue key, and a bool of if it has been clicked or not.
// when App.js generates the gameboard, it will create new flag components, passing the country names and pictures as props.

//everytime a flag component is clicked it wil check the App.js state to see if it has been clicked before.
//if false it will increase player score by 1 and reload the board. If true the game will end.

//Stretch goals: different levels. Start with only 5 flags. After the players score if 5, go to 10. Then 20. Then 40.

//Stretchier goal: use firebase as a backend. Use a database to keep track of high scores. The leaderboard should be a pop up as a modal,
// and only check when the player clicks it to reduce reads. New scores will be submitted to the leaderboard DB after a player loses.





function App() {
  
  let gameInit = false;
  let [cardsClicked, setCardsClicked] = useState(0);
  let [cardClickEvent, setCardClickEvent] = useState(false);
  let [highScore, setHighScore] = useState(0);
  let [gameover, setGameOver] = useState(false);
  
  useEffect(()=>{

    if (cardClickEvent == true){

      if(gameover == false){

      let clicknum = cardsClicked + 1;
      setCardsClicked(clicknum);
      generateCardSet();
      setCardClickEvent(false)
      }
      else
      {
        setHighScore(cardsClicked);
        
        setGameOver(false);
        setCardClickEvent(false)
      
        resetGame();
        setCardsClicked(0);
      }
    }

  },
    [cardsClicked, cardClickEvent, highScore, gameover]);
 
 
  const reportClick = (gameover) =>{

    if (gameover == false){
      setCardClickEvent(true);

    }
    else{

      setGameOver(true);
      setCardClickEvent(true);
    }

  }
  let cardArray = [<FlagCard countryname="United States" countryflag={usflag} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Canada" countryflag={canflag} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Taiwan" countryflag={taiwan} key={uniqid()} click ={reportClick} />, <FlagCard countryname="United Kingdom" countryflag={ukflag} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Japan" countryflag={japan} key={uniqid()} click ={reportClick} />, <FlagCard countryname="France" countryflag={france} key={uniqid()} click ={reportClick} />, 
  <FlagCard countryname="Russia" countryflag={russia} key={uniqid()} click ={reportClick} />, <FlagCard countryname="China" countryflag={china} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Vietnam" countryflag={vietnam} key={uniqid()} click ={reportClick} />,<FlagCard countryname="Malaysia" countryflag={malaysia} key={uniqid()} click ={reportClick} />,
<FlagCard countryname="Singapore" countryflag={singapore} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Netherlands" countryflag={netherlands} key={uniqid()} click ={reportClick} />,
<FlagCard countryname="Italy" countryflag={italy} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Ireland" countryflag={ireland} key={uniqid()} click ={reportClick} />]
  let [stateCardArray, setStateCardArray] = useState(cardArray);
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


  let cardDisplay = []
  const generateCardSet = () =>{

    cardDisplay = [];
    cardDisplay = cardDisplay.concat(stateCardArray);
    shuffleArray(cardDisplay);
   
  }

  const resetGame = () =>{
    let newcardArray = [<FlagCard countryname="United States" countryflag={usflag} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Canada" countryflag={canflag} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Taiwan" countryflag={taiwan} key={uniqid()} click ={reportClick} />, <FlagCard countryname="United Kingdom" countryflag={ukflag} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Japan" countryflag={japan} key={uniqid()} click ={reportClick} />, <FlagCard countryname="France" countryflag={france} key={uniqid()} click ={reportClick} />, 
    <FlagCard countryname="Russia" countryflag={russia} key={uniqid()} click ={reportClick} />, <FlagCard countryname="China" countryflag={china} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Vietnam" countryflag={vietnam} key={uniqid()} click ={reportClick} />,<FlagCard countryname="Malaysia" countryflag={malaysia} key={uniqid()} click ={reportClick} />,
  <FlagCard countryname="Singapore" countryflag={singapore} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Netherlands" countryflag={netherlands} key={uniqid()} click ={reportClick} />,
  <FlagCard countryname="Italy" countryflag={italy} key={uniqid()} click ={reportClick} />, <FlagCard countryname="Ireland" countryflag={ireland} key={uniqid()} click ={reportClick} />]
    cardArray = newcardArray;
    setStateCardArray(cardArray);
  }

  if (gameInit == false){
      generateCardSet();
      gameInit = true;
      }

  return (
    <div className="App">
     <p>Score {cardsClicked} High Score {highScore}</p>
     
      
      <GameBoard cardList={cardDisplay}/>

     
    </div>
  );
}

export default App;
