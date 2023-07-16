import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faUserTie,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import './PrimoComponente.css';

const PrimoComponente = () => {
  return (
    <React.Fragment>
      
      <div className="name">
        <FontAwesomeIcon
          icon={faAddressCard}
          style={{ color: "#4a90e2", fontSize: "100px" }}
        />
        
        <h1> Mario Rossi</h1>
      </div>
      <div className="esperienza">
        
          <FontAwesomeIcon icon={faBriefcase} style={{ color: "#f44336",
        fontSize: "50px" }} />
        
        <h1>Esperienza</h1>
      </div>
      <h3>Sviluppatore Frontend</h3>
      <p>ABC Corporation</p>
      <p>2019 - Presente</p>
      <h3>Web Designer</h3>
      <p>XYZ Studio</p>
      <p>2017 - 2019</p>

      <div className="competenza">
        
          <FontAwesomeIcon icon={faUserTie} style={{ color: "#4caf50",
        fontSize: "50px" }} />
        
        <h1>Competenze</h1>
      </div>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>React</p>
      <div className="istruzione">
        
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "#ff9700",
            fontSize: "50px" }}
          />
        
        <h1>Istruzione</h1>
      </div>
      <h2>Laurea in Informatica</h2>
      <p>Università di Pisa</p>
      <p>2014 - 2017</p>
    </React.Fragment>
  );
};

export default PrimoComponente;
