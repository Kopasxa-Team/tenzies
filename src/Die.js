import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  
  // Generate dots based on the die value
  const generateDots = () => {
    const dots = [];
    // Different patterns for different values
    switch(props.value) {
      case 1:
        dots.push(<div key="center" className="dot center"></div>);
        break;
      case 2:
        dots.push(<div key="top-right" className="dot top-right"></div>);
        dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
        break;
      case 3:
        dots.push(<div key="top-right" className="dot top-right"></div>);
        dots.push(<div key="center" className="dot center"></div>);
        dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
        break;
      case 4:
        dots.push(<div key="top-left" className="dot top-left"></div>);
        dots.push(<div key="top-right" className="dot top-right"></div>);
        dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
        dots.push(<div key="bottom-right" className="dot bottom-right"></div>);
        break;
      case 5:
        dots.push(<div key="top-left" className="dot top-left"></div>);
        dots.push(<div key="top-right" className="dot top-right"></div>);
        dots.push(<div key="center" className="dot center"></div>);
        dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
        dots.push(<div key="bottom-right" className="dot bottom-right"></div>);
        break;
      case 6:
        dots.push(<div key="top-left" className="dot top-left"></div>);
        dots.push(<div key="top-right" className="dot top-right"></div>);
        dots.push(<div key="middle-left" className="dot middle-left"></div>);
        dots.push(<div key="middle-right" className="dot middle-right"></div>);
        dots.push(<div key="bottom-left" className="dot bottom-left"></div>);
        dots.push(<div key="bottom-right" className="dot bottom-right"></div>);
        break;
      default:
        break;
    }
    return dots;
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      {generateDots()}
    </div>
  );
}
