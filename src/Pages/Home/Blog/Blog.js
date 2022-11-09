import React from "react";

const Blog = () => {
  return (
    <div className="py-24">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.SQL restricts
            the user to working within a predefined tabular schema, and more
            care must be taken to organize and understand the data before it is
            used.The dynamic schemata of NoSQL databases allow representation of
            alternative structures, often alongside each other, encouraging
            greater flexibility.{" "}
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a client-side scripting language that is lightweight,
            cross-platform, and interpreted. Both Java and HTML include it.
            Node.js, on the other hand, is a V8-based server-side programming
            language.
            <br />
            javaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful. <br />A specific non-blocking operation is required to
            access any operating system. There are a few essential objects in
            JavaScript, but they are entirely OS-specific. Node.js, on the other
            hand, can now operate non-blocking software tasks out of any
            JavaScript programming. It contains no OS-specific constants.
            Node.js establishes a strong relationship with the system files,
            allowing companies to read and write to the hard drive.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS Web Server maintains a limited Thread Pool to provide
            services to client requests. Multiple clients make multiple requests
            to the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded. In
            other words, EventLoop is the listener for the EventQueue. So, we
            have an event queue where the requests are being placed and we have
            an event loop listening to these requests in the event queue. The
            listener(the event loop) processes the request and if it is able to
            process the request without needing any blocking IO operations, then
            the event loop would itself process the request and sends the
            response back to the client by itself. If the current request uses
            blocking IO operations, the event loop sees whether there are
            threads available in the thread pool, picks up one thread from the
            thread pool and assigns the particular request to the picked thread.
            That thread does the blocking IO operations and sends the response
            back to the event loop and once the response gets to the event loop,
            the event loop sends the response back to the client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
