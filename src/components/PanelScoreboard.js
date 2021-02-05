import React from "react";
import styled from "styled-components";
import Score from "./Score";

const Container = styled.div`
  width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function PanelScoreboard(props) {
   
  const handleSave = (e) => {

    // props.setPoint(
    //     props.point(e.target.value)

    // )
  };

  const { teams } = props;
  console.log(props);
  return (
    <Container>
      <Panel>
        {teams.map((team) => {
          return <Score team={team} />;
        })}
      </Panel>
      <div>
        <button type="submit" className="btn btn-secondary"  onClick={handleSave}>
          Save
        </button>
      </div>
    </Container>
  );
}

export default PanelScoreboard;
