import React, { Component } from 'react'

export default (props) => {
	return(
		<div>
			<div className="menu-trigger z-depth-2"> 
	      <div id="menu-icon">
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
	      </div>
	    </div>
	    <nav id="menu" className="menu">
	      <div className="menu-navigation">
	        <ul className="full-menu collapsible">
	          <li className="menu-title">Menu</li>
	          <li><a href="shop.html" className="no-child">Shop</a></li>
	          <li><a href="news.html" className="no-child">News</a></li>
	        </ul>
	      </div>
	    </nav>
    </div>
	)
}