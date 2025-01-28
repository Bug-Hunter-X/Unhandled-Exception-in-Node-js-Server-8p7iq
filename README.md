# Node.js Unhandled Exception

This repository demonstrates a common error in Node.js applications: unhandled exceptions.  The `bug.js` file shows a server that lacks proper error handling, making it vulnerable to crashes.  The `bugSolution.js` file provides a corrected version with robust error handling. 

## Bug

The `bug.js` file creates an HTTP server. However, it fails to handle potential errors during the `server.listen()` call.  If an error occurs (e.g., port already in use), the server crashes without any indication of the problem.

## Solution

The `bugSolution.js` file addresses this issue by adding an error handler to the `server.listen()` method. This ensures that any errors are gracefully handled, preventing unexpected crashes and providing more informative feedback.

This example highlights the importance of comprehensive error handling in Node.js to create robust and reliable applications.