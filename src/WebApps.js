import React, { Component } from "react";
 
class WebApp extends Component {
  render() {
    return (
        <div className="container">
          <h2>Web Applications</h2>
          <p>
          Web applications are usually coded in browser-supported language such as JavaScript and HTML as these languages rely on the browser to render the program executable. Some of the applications are dynamic, requiring server-side processing. Others are completely static with no processing required at the server.

The web application requires a web server to manage requests from the client, an application server to perform the tasks requested, and, sometimes, a database to store the information. Application server technology ranges from ASP.NET, ASP and ColdFusion, to PHP and JSP.
<p>
Here's what a typical web application flow looks like:

First, a user triggers a request to the web server over the Internet, either through a web browser or the application’s user interface
Secondly, a web server forwards this request to the appropriate web application server
Thirdly, the web application server performs the requested task – such as querying the database or processing the data – then generates the results of the requested data
Fourth, the web application server sends results to the web server with the requested information or processed data
Lastly, a web server responds back to the client with the requested information that then appears on the user’s display
          </p>
          </p>
        </div>
    );
  }
}
 
export default WebApp;