import React from 'react';

import ScoreBoard from './components/ScoreBoard'
import Output from './components/Output'

function App() {
  return (
    <div>
      <ScoreBoard />
      <div className='p-5 m-5'>
      <Output/>
      </div>
    </div>
  );
}

export default App;