import React, { Component } from 'react'
import { Search } from '../presentation'

class Player extends Component {
	render(){
		return(
			<div>
				<div className="hero-header bg-shop animated fadeindown">
	        <h1 className="hero-title">Player</h1>
	      </div>
	      <Search />
	    </div>
		)
	}
}

export default Player