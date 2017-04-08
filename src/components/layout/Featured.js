import React, { Component } from 'react'
import { Nav, Footer } from '../presentation'
import { Podcasts, Player } from '../containers'

class Featured extends Component {
	render(){
		return(
			<div>
				<div id="main">
      		<div id="content" className="main animated fadein">
        		<Player />
        		<div className="animated fadeinup delay-1">
        			<Podcasts />
              <div className="clr"></div>
        		</div>
        	</div>
      	 <Footer />
      	</div>
      	<Nav />
   		</div>
		)
	}
}

export default Featured