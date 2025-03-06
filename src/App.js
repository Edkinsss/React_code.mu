import React from 'react';

function App() {
	const items = (
    <ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </ul>
  )
	
	return <ul>
		{items}
	</ul>
}


export default App;