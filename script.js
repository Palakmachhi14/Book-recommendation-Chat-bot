document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-message').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessageInput = document.getElementById('user-message');
    const userMessage = userMessageInput.value.trim();

    if (!userMessage) return;

    displayMessage(userMessage, 'user-message');
    userMessageInput.value = '';

    fetch('http://your-backend-endpoint/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data.response, 'bot-message');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayMessage(message, className) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
