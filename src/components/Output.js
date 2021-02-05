import React from "react";

function Output(props) {
  const { point } = props;
  console.log(props);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Klub</th>
          <th scope="col">Ma</th>
          <th scope="col">Me</th>
          <th scope="col">S</th>
          <th scope="col">K</th>
          <th scope="col">6M</th>
          <th scope="col">6K</th>
          <th scope="col">Poin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Nama Klub</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Nama Klub</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Nama Klub</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Output;
