import React from "react";
import { Link } from "react-router-dom";

import GameCard from "./GameCard";


function GamesList(props) {
  const renderList = props.list.map((game)=>{
    return (
      <GameCard key = {game} game = {game}/>
    );
  })

  return (
    <div>
      {renderList}
    </div>
  )
}

export default GamesList;
