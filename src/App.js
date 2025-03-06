import React from 'react';

function App() {
	const obj = {name: 'john', surname: 'smit'};

  return <div>
    <p>
      name:<span>{obj.name}</span>,
	    surname:<span>{obj.surname}</span>,
    </p>
  </div>
}

export default App;