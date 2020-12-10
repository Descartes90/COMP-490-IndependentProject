import React, { Component } from "react";
import ReactPlayer from "react-player";

class Home extends Component {
    render() {
      return (
        <div className="container">
          <h2>Welcome to Penchant Enterprises</h2>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Y5KCDWi7h9o"
          />
          <p>This website is intended to coallate important data from all over the internet to better describe technically related concepts pertaining to front-end design and development.</p>
          <p>Information is taken from:</p>
          <p>https://www.verywellmind.com/color-psychology-2795824</p>
          <p>https://blog.prototypr.io/what-is-frontend-design-is-that-even-a-thing-3bafbf6c716e</p>
          <p>https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html</p>
          <p>https://blog.stackpath.com/web-application/</p>
          <p>https://dzone.com/articles/what-is-mobile-development</p>
        </div>
      );
    }
  }
   
  export default Home;