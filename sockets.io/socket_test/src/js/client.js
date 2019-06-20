(function() {
    const socket = io();
    const form = document.querySelector('.message');
    const inputValue = document.querySelector('#m');

    //Chat form
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        messageLength += inputValue.value.length;

        socket.emit('chat message', inputValue.value);
        inputValue.value = "";
        return false;
    });

    socket.on('chat message', function(msg) {
        console.log(msg);
        const li = document.createElement("li")
        const msgtext = document.createTextNode(msg);
        li.appendChild(msgtext);
        document.querySelector('#messages').appendChild(li);
    });
}());