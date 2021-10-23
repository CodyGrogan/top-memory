import logo from './logo.svg';
import './App.css';
import uniqid from 'uniqid';
import usflag from './images/usflag.png'
import canflag from './images/canada.png'
import { FlagCard } from './components/FlagCard';
import { useEffect, useState } from 'react';

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
  
  let [cardsClicked, setCardsClicked] = useState(0);
  let [cardClickEvent, setCardClickEvent] = useState(false);
  
  useEffect(()=>{

    if (cardClickEvent == true){
      let clicknum = cardsClicked + 1;
      setCardsClicked(clicknum);
      setCardClickEvent(false)
    }

  },
    [cardsClicked, cardClickEvent])
  const reportClick = () =>{
    setCardClickEvent(true);

  }
  const cardArray = [{cardjsx : <FlagCard countryname="United States" countryflag={usflag} key={uniqid()} click ={reportClick} />}, {cardjsx : <FlagCard countryname="Canada" countryflag={canflag} key={uniqid()} click ={reportClick} />}]
  let [stateCardArray, setStateCardArray] = useState(cardArray);
  const generateCardSet = () =>{


  }

  

  return (
    <div className="App">
     <p>cardsClicked {cardsClicked}</p>
      
      <div className="cardContainer">
      {stateCardArray[0].cardjsx}{stateCardArray[1].cardjsx}
      
      </div>

     
    </div>
  );
}

export default App;
