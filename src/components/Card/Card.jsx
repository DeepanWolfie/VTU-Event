import React, { useState } from "react";
import "./Card.css";
import pythonlogo from "../../assets/python.png";

import { motion, AnimateSharedLayout } from "framer-motion";
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    //     <AnimateSharedLayout>
    //         {

    //         }
    //   </AnimateSharedLayout>
    expanded ? "hello" : <CompactCard param={props} />
  );
};
function CompactCard({ param }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard "
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <img src={pythonlogo} alt="" className="pythonLogo" />
      </div>
      <div className="detail">
        <span className="title">{param.title}</span>
        <span className="date">{param.date}</span>
        <span className="time">{param.days} Days 10:00AM to 4:00PM</span>
        <span className="venue">Venue: {param.venue}</span>
        <span className="resourcePerson">
          Resource Person: {param.resourcePreson}
        </span>
        <span className="registered">Registered: {param.registered}</span>
      </div>
      <div className="register-button" onClick={console.log("first")} >Register</div>
    </div>
  );
}
export default Card;
