import React from "react";
import styled from "styled-components";

const PanelInputTeam = styled.div`
  width: 400px;
  margin: auto;
  display: ${(props) => (props.ready ? "none" : "flex")}
  flex-direction: column;
  justify-content: space-around;
`;

function InputTeam(props) {
  console.log(props);
  const teamA = React.useRef();
  const teamB = React.useRef();

  const onSubmit = () => {
    props.setTeams(
      props.teams.concat(teamA.current.value, teamB.current.value)
    );
    // if(teamA.current.value == 0 || teamB.current.value == 0 ){
    //   props.setReady(false)
    // }else{
    props.setReady(true);
    // }
  };

  return (
    <PanelInputTeam ready={props.ready}>
      <h3 className="m-5">Masukkan Nama Klub</h3>
      <input
        required={true}
        className="form-control m-3"
        ref={teamA}
        type="text"
        placeholder="Klub A"
      />
      <input
        required={true}
        className="form-control m-3"
        ref={teamB}
        type="text"
        placeholder="Klub B"
      />
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </PanelInputTeam>
  );
}

export default InputTeam;
