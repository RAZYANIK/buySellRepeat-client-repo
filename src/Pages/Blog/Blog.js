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
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.
                        <br />

                        So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                        <br />
                        Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".
                        <br />
                        Regardless of when and where unit testing began, one thing is for sure. Unit testing is here to stay. Let's look at some more practical aspects of unit testing.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box mb-40">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Angular vs. React vs. Vue is one of primary choices in every web development process. The frontend framework you select influences almost everything: speed, and, therefore, cost of development, compatibility with other technologies, app speed and performance, and so on.The variety of technology available is enormous. That’s why we’ve decided to prepare a series of articles comparing the most popular technologies for different purposes. We’re starting with frontend frameworks because they are responsible for what users see in their browser. <br />
                        The family of JavaScript frameworks is huge. Each has been built to solve different tasks, but their functionality can be extended by using various third-party solutions, which require different levels of expertise. They are all different.
                        Angular, React and Vue are the top players among JavaScript frameworks for frontend development. They can all be used for any requirement. However, each framework offers something it is extremely good at.
                        <br />
                        You don’t need React to build a static blog, but this technology will make a dynamic website work flawlessly. Its sibling, React Native, enables native mobile apps to be built using JavaScript!
                        <br />
                        Angular is helpful for building apps with extensive structures. This framework will  impress mobile users with first-class progressive web apps and hybrid mobile apps.
                        <br />
                        Vue combines the best features of Angular and React, and is continually expanding its position in the world of web development. With its performance benefits, Vue is already beating its competitors.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;