var socket = io();

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        // Emit a 'chat message' event with the message content
        socket.emit('chat message', message);
        messageInput.value = "";
    }
}

// Listen for 'chat message' events from the server
socket.on('chat message', function(message) {
    var chatWindow = document.getElementById("chat-window");
    chatWindow.innerHTML += "<p>Someone: " + message + "</p>";
    chatWindow.scrollTop = chatWindow.scrollHeight;
});
