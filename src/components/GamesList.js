import React from "react";
import { Route,Routes,Link } from "react-router-dom";

import { convertName } from "./utils";

function GamesList() {
  const gamesList = ["Rock paper scissors", "Tic tac toe", "Pong"];
  const renderList = gamesList.map((game)=>{
    const name = convertName(game)
    return <Route exact path={`/${name}`}/>
  })

  return (

  )
}

export default GamesList;
