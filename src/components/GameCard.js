import React from "react";
import { Link } from "react-router-dom";

import { convertName } from "./utils";

function GameCard({game}) {
  return (
    <div>
      <Link to={convertName(game)}>
        <iframe src={`./${convertName(game)}`} frameBorder="0" title={game}></iframe>
        <div className="info">
          <h2>{game}</h2>
        </div>
      </Link>
    </div>
  );
}

export default GameCard;
