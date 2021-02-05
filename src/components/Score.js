import React from "react";
import styled from "styled-components";

const ObjScore = styled.div`
  text-align: center;
`;

const NameTeam = styled.div`
  font-size: 18pt;
`;

const PointScore = styled.div`
  font-size: 42pt;
  font-weight: 600;
`;

function Score(props) {
  const [team, setTeam] = React.useState(props.team);
  const [point, setPoint] = React.useState(0);

  const handleIncrement = (props) => {
    //   console.log(props)
    setPoint(point + 1);
  };

  const handleDecrement = (props) => {
    // console.log(props)
    if (point > 0) {
      setPoint(point - 1);
    }
  };

  return (
    <ObjScore>
      <NameTeam>{team}</NameTeam>
      <PointScore>{point}</PointScore>
      <div>
        <button className="btn btn-secondary mr-2" onClick={handleIncrement}>
          +
        </button>
        <button className="btn btn-secondary" onClick={handleDecrement}>
          -
        </button>
      </div>
    </ObjScore>
  );
}

export default Score;
