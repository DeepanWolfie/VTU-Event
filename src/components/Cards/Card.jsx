import React from "react";
import "./Card.css";
import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";
const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, index) => {
        return (
          <div className="parentContainer">
         
         
            <Card
              title={card.title}
              color={card.color}
              date={card.date}
              days={card.days}
              registered={card.registered}
              faculty={card.faculty}
              png={card.png}
              certificate={card.certificate}
              venue={card.venue}
              resourcePreson={card.resourcePreson}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
