import React from 'react';

import './header.styles.css';

import { NavLink } from 'react-router-dom';


export const Header = props => {
	  return(
	  	  <div className="Blog">
		  <nav>
            <ul>
                <li><NavLink
                    to="/"
                    exact
                    activeStyle={{
                        color: '#fff',
                        textDecoration: 'underline'
                    }}>Home</NavLink></li>
                <li><NavLink to={{
                    pathname: '/new-post',
                    }}
                    activeStyle={{
                        color: '#fff',
                        textDecoration: 'underline'}}>New Post</NavLink></li>
            </ul>
        </nav>
        </div>
	  )
};