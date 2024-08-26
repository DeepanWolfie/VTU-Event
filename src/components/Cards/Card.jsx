import React from "react";
import "./Card.css";
import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";
import { EventData } from "../../Data/Data";
const Cards = () => {
  return (
    <div className="Cards">
      {EventData.map((card, index) => {
        return (
          <div className="parentContainer" key={index}>
          <Card
            title={card.title}
            logoImage={card.logoImage}
            bannerImage={card.bannerImage}
            startDate={card.eventDetails.startDate}
            endDate={card.eventDetails.endDate}
            startTime={card.eventDetails.startTime}
            endTime={card.eventDetails.endTime}
            venue={card.eventDetails.venue}
            noOfDays={card.eventDetails.noOfDays}
            noOfStudentRegistered={card.eventDetails.noOfStudentRegistered}
            studentSlot={card.eventDetails.studentSlot}
            resourcePerson={card.resourcePerson}
            resourcePersonDesignation={card.resourcePersonDesignation}
            resourcePersons={card.resourcePersons}
            eventCoordinator={card.eventCoordinator}
            eventCoordinatorDesignation={card.eventCoordinatorDesignation}
            eventCoordinators={card.eventCoordinators}
          />
        </div>
        );
      })}
    </div>
  );
};

export default Cards;
