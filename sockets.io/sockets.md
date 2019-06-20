## Socket, what is it and what can you do with it?
Socket is a Javascript library for realtime web applications. It allows communication between web clients and servers. Socket has a client-side library and a server-side library. 

### How to use Socket?
Socket 
To start with Socket you first need to install a npm package by typing in: `npm install socket.io`. The next step is to make two files: <br>

• Server file (`app.js`), this one manages the connections between the different clients who are connected to the website.
• Client file (`client.js`), this file connects to the server and displays the results in the browser.

*Server file*
In the server file (`app.js`), you load in the socket library with the following code: <br>

```javascript
const express = require('express');
const app = express()
    .use(express.static('./src/css'))
    .use(express.static('./src/images'))
    .use(express.static('./src/js'))

const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 2000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/pages/index.html');
});

io.on('connection', function(socket) {
	
}

http.listen(2000, () => console.log(`Example app listening on port ${port}!`))
```

##### *Client file*
The other files we are going to make is an `index.html` file and a `css` stylesheet. After you made this file your map structure looks like this:

<img width="1280" alt="Screenshot 2019-06-19 21 48 42" src="https://user-images.githubusercontent.com/32538678/59795732-2bfd6d00-92dc-11e9-96d6-082784ae2a3b.png">

Now when you made these files, you can start by making interaction in your application with the server and client. For example: you can make a input field with a submit button that generate text. 

So your client.js looks like this: <br>

``` javascript
const form = document.querySelector('.message');
const inputValue = document.querySelector('#m');

form.addEventListener("submit", function(e) {
        e.preventDefault();

        socket.emit('chat message', inputValue.value);
        inputValue.value = "";
        return false;
    });
```

With `socket.emit` you can emit the input value to the server side. 

``` javascript
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
	    io.emit('chat message', {msg: msg);
    });
});
```

When the data from the client is sended to the server, you can send the data back to the other clients who are interacting with your application with the following code: <br>

```javascript
    socket.on('chat message', function(msg) {
        console.log(msg);
        const li = document.createElement("li")
        const msgtext = document.createTextNode(msg);
        li.appendChild(msgtext);
        document.querySelector('#messages').appendChild(li);
    });
```

##### *Remember to do*
What you always have to do by creating an real time web application: <br>
• Send data from client back to server. <br>
• The data from server send it back to other clients. <br>
• Do not send the data from server back to the client when he/she already has this data. <br>

## What can you make with Socket?
Socket.io library you can make many different kind of applications with it.

##### My experience with Socket
What I made with Socket, was an application that let a user search for a hashtag and to submit his own username. When they submit their hashtag and username the user will get an image. After the user got his/her own image, they come on a page with all other users with their own images.

Every user can interact with each other by inviting each other to a room. When both users wants to join together, they both going to a private room. After joining the room, both their images willed be merged together. After the images are merged, both users can edit together the merged images and download it to their own computer.

##### API
By doing that, I used the [Tumblr](https://www.tumblr.com/docs/en/api/v2) API. The API gave me an OAuth authentication. The autentication give the users who are interating with the application the possibilty for fetching data from the Tumblr Api.

##### My application 
The first screen what the user will see is to fill in his/her username and hashtag.
<img width="1280" alt="Screenshot 2019-05-24 01 26 59" src="https://user-images.githubusercontent.com/32538678/58292834-428ad400-7dc3-11e9-9649-47f4984be072.png">

By filling in their hashtag and username, the data is emit from my `client.js` to my `server.js`. After the data from the client is received from the api, the data will be sended back to the front page of the client.

When the user submitted their hashtag and username, they can interact with each other by joining a room together. To work out this step of the application, you already can see that there are a lot of actions happen between the client and server.

For example: <br>
Step 1. Client can click on user for interacting. <br>
Step 2. When client clicked on other user, it HAS to send it back to the server. <br>
Step 3. Server received the invite and send it back to the user. <br>

Step 4. User accept/denied the invite<br>
Step 5. Invite that is accepted/denied is sended back to the server. <br>
Step 6. Server creates a room that both users can join. <br>
Step 7. Both users are in new room (new pagescreen).

As you can see, there are many actions that are done between server and client. To perform all these actions, a lot of socket.emit and socket.on takes place between client and server that sends data back and forth.

##### Not finished yet
Once this step has been completed, the interaction between users now really begins! After both users joined the room together. They can do the following things: <br>
• They can chat with each other. <br>
• Adding an filter over the images. <br>
• When the filter is added, the other user will also see the changes. <br>

As you can see in the interaction that can be done, there are also a number of data transmissions in between (socket.emit, socket.on).

##### Important to know!
What is important to remember when using sockets and building real time applications. Is that when you get started with building this kind of applications, you always have to look carefully which data belongs to the server and which data belongs to the client. Also you must send the right data to the right user.

### See my prototype?
If you want to check out my prototype with the Tumblr API, you can click on the following link: [Prototype](https://github.com/Karinliu/real-time-web-1819).