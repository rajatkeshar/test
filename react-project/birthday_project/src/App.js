import React, { useState } from 'react'
import data from './data'
import List from './List'
import Greet from './components/Greet';

function App() {
	// create a state variable here
    const [people, setPeopleCount] = useState(data.length)
	console.log({people, setPeopleCount});
	// this should clear all records
	function clearAllRecords() {
        setPeopleCount(0)
    }
	return (
		<main>
			<section className="container">
				{/* change this to state variable data */}
				<div>
					<Greet name="luv Kesharwani"> 
						<p>YoYo</p>
						<p>YoYo2</p>	
					</Greet>
					<Greet name="Kush Kesharwani"/>
					<Greet name="Rajat Kesharwani"/>
				</div>
				<h3>{people} birthdays today</h3>
				{people? <List people={data} />: null}
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	)
}

export default App
