import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold mb-10 mt-20'>Welcome to Our Daily Web dev blog</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box mt-10">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>In React apps, there are at least seven ways to handle the state. Let us explore a few of them in this part. <br />
                        1. We can use URL to store some data e.g.

                        The id of the current item, being viewed
                        Filter parameters
                        Pagination offset and limit
                        Sorting data
                        Keeping such data in the URL allows users to share deep links with others.
                        <br />
                        2. Web Storage
                        The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.

                        Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.
                        <br />
                        3. Local State
                        The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc
                        <br />
                        4. Lifted State
                        The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.
                        <br />

                        JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box mb-40">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>We are know that Node.js only processes one request at a time using a single thread and an event loop (which is non-blocking). However, how does that operate, let's say there are 10,000 simultaneous queries. Will the event loop complete all of the requests? That might take too much time.

                        How it can be quicker than a multi-threaded web server is something I do not fully understand (yet). I understand that a web server with several threads will cost more to run in terms of memory and CPU, but wouldn't it still be faster? Please clarify why this single-thread is faster in handling many requests and what it generally does (high level) when handling many queries, such as 10,000. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;