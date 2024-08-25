import React from "react";
import "./Card.css";
import { CardsData } from "../../Data/Data";
const Card = () => {
  return (
    <div>
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
              image={card.image}
              certificate={card.certificate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
