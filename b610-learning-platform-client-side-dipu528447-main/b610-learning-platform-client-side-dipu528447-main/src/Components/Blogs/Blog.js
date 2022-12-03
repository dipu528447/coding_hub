import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-3/4 bg-primary text-primary-content mx-auto my-10">
                <div className="card-body text-start">
                    <h2 className="card-title">What is Cors</h2>
                    <p>What is meant by the CORS policy?
CORS is a mechanism that uses additional HTTP header to inform a browser to allow a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.</p>
                </div>
            </div>
            <div className="card w-3/4 bg-primary text-primary-content mx-auto my-10">
                <div className="card-body text-start">
                    <h2 className="card-title"> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>We can use firebase to verify a user. we can verify a unknown person by using google, facebook,github using firebase authentication. with this we can store data in firebase store.</p>
                    <p>we can use okta, pubnub, parse etc</p>
                    
                </div>
            </div>
            <div className="card w-3/4 bg-primary text-primary-content mx-auto my-10">
                <div className="card-body text-start">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
                    
                </div>
            </div>
            <div className="card w-3/4 bg-primary text-primary-content mx-auto my-10">
                <div className="card-body text-start">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</p>
                    <p>
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;