import React,{Component} from 'react';

export default class navi extends Component{
    render(){
        return(
                <nav className="l-side-nav">
					<ul className="side-nav">
					  <li className="is-active"><span>Home</span></li>
					  <li><span>Works</span></li>
					  <li><span>About</span></li>
					  <li><span>Contact</span></li>
					  <li><span>Contact me</span></li>
					</ul>
			    </nav>
        );
    }
}