import React, { Component } from 'react'

export default (props) => {
	return(
	  <footer className="page-footer primary-color">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <a href="https://github.com/robungar/podcast"><i className="ion-social-github m-10 white-text"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="line white"></div>
      <div className="footer-copyright primary-color">
        <div className="container center-align">
        <p>2017 &copy; Rob Ungar</p>
        </div>
      </div>
    </footer>
	)
}