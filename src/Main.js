import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blogpage";
import App from "./App.js";
import Contact from "./consulting";
import Designs from "./Design";
import Develop from "./Development";
import WebApp from "./WebApps";
import Mobile from "./Mobile";
import Psych from "./Colors"
import logo from "./PenchantLogo1.png";
import socialMedia from "./SocialMedia.png";
 
class Main extends Component {
    render() {
        return (
          <HashRouter>
            <div className="grid-container">
              <div className="Header">
              <img src={logo} alt="Logo"/>
              <h1 className="Company">Penchant Enterprises</h1>
              </div>
              <div className="Widgets">
              <img className="socialImg" src={socialMedia} alt="Widgets"/>
              </div>
              <div className="Menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <hr/>
                <li><NavLink to="/Blogpage">Blog</NavLink></li>
                <hr/>
                <li><NavLink to="/App">Tech News</NavLink></li>
                <hr/>
                <li><NavLink to="/consulting">Contact</NavLink></li>
                <hr/>
                <li><NavLink to="/Design">Front-End Design</NavLink></li>
                <hr/>
                <li><NavLink to="/Development">Front-End Development</NavLink></li>
                <hr/>
                <li><NavLink to="/WebApps">Web Applications</NavLink></li>
                <hr/>
                <li><NavLink to="/Mobile">Mobile Development</NavLink></li>
                <hr/>
                <li><NavLink to="/Colors">Colors and Psychology</NavLink></li>
                <hr/>
              </ul>
              </div>
              <div className="Content">
                <Route exact path="/" component={Home}/>
                <Route path="/Blogpage" component={Blog}/>
                <Route path="/App" component={App}/>
                <Route path="/consulting" component={Contact}/>
                <Route exact path="/Design" component={Designs}/>
                <Route path="/Development" component={Develop}/>
                <Route path="/WebApps" component={WebApp}/>
                <Route path="/Mobile" component={Mobile}/>
                <Route path="/Colors" component={Psych}/>
              </div>
            </div>
          </HashRouter>
        );
      }
}
 
export default Main;