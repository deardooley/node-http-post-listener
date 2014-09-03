Node.js HTTP Listener
===================

A simple http server that listens for POST events on port 9000 and prints the contents to the console. Don't use this in production. It is not production grade or useful for anything except easily inspecting web hooks.

This was largely derived from a gist by [Kyle Tolle](https://gist.github.com/kyletolle/6530914).

## Installation

You can run this about anywhere you have node installed and a publicly accessible IP address. If you use the default port, your machine will need to make that port available through its firewall.

### Requirements

The only requirement to run this server is node.js and npm. Install node.js and npm via whatever install process is available.

[http://nodejs.org/download/](http://nodejs.org/download/)
 
### Project setup

Check out the project and cd into the project directory. Run the server directly using the `node` command.

    git clone https://bitbucket.org/taccaci/node-http-post-listener.git
    cd node-http-post-listener

## Usage

### Running the server

To start a node server on localhost:9000, run the following command from within the project directory.

    node node-http-post-listener.js
    
You can test that the server is receiving requests by running the following curl statement in another tab.

	curl -XPOST -d "foo=bar" http://localhost:9000/listener?alpha=beta
	
### Stopping the server

To stop the server, type CTRL+C in the windows you started the server


