import React, { Component } from "react";
 
class Mobile extends Component {
  render() {
    return (
        <div className="container">
          <h2>Mobile Development</h2>
          <p>Let’s start out by defining exactly what mobile development is—it’s not as obvious as it seems.

Mobile development isn’t just about building phone apps, although that is certainly a large part of it.

Mobile development is doing any kind of development for any kind of mobile device.

Somewhat of a rhetorical definition, but stay with me here.

What I mean by this statement is that mobile development encompases developing apps for phones, tablets, smart watches, and all other kinds of wearable devices which run some kind of mobile operating system.

It also doesn’t necessarily mean developing purely mobile applications, since even web developers today have to think about how their applications are going to be used and accessed on a mobile device.

In fact, as we’ll discuss a little later in this chapter, mobile applications can even be developed exclusively for mobile devices but entirely as web applications. This may even be the trend of the future as mobile devices become more and more powerful, and the browser takes an even more dominant role as the operating system of the future.
          </p>
          <p>
          iOS is quite arguably the “big dog” when it comes to major mobile development platforms, partially because it was the platform that finally brought mobile development into the modern day and age by completely transforming the idea of a mobile device and mobile software.

iOS is, of course, developed by Apple, and it runs exclusively on Apple products.

At the time of this writing, iOS runs on iPhones, iPods, iPads, Apple Watches, and Apple TV, but I expect there will be more devices which will run iOS in the future.

iOS at its core is very Unix-like; it is based on Darwin (BSD) and OS X.

It shares some important frameworks with OS X, and its user interface is based on Apple’s Cocoa UI, which is used in OS X applications, but has been modified and redesigned for touch devices and called Cocoa Touch.

Apple provides iOS developers with several native tools and libraries to develop iOS applications, and, although you don’t need to use Apple’s development tools to build your apps, you do have to have a Mac running OS X to build your application.

iOS applications are typically built utilizing either Objective-C or the now more popular development language for the platform, Swift.
          </p>
        </div>
    );
  }
}
 
export default Mobile;