// connecting to the server
const socket = io();
console.log('Socket.IO initialized');

// Get the elements
const btn = document.querySelector(".btn");
const usernameInput = document.getElementById('usernameInput');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatBox = document.getElementById('chat-box');

btn.addEventListener("click", function(){
  document.body.classList.toggle("dark-mode");
  // document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("dark-mode")){
      btn.textContent ="Light Mood";
  
  }else {
      btn.textContent ="Dark Mood";
  }
});

// Write a log if any elements weren't found
if (!usernameInput) console.error('usernameInput not found');
if (!messageInput) console.error('messageInput not found');
if (!sendButton) console.error('sendButton not found');
if (!chatBox) console.error('chat-box not found');

// Listen for incoming chat messages and display them in the chat-box
socket.on('connect', () => {
  console.log('Connected to server with ID:', socket.id);
});

socket.on('chat message', (msg) => {
  console.log('Received message:', msg);
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.textContent = `${msg.username}: ${msg.message}`;
  chatBox.appendChild(messageElement);
  
  
  chatBox.scrollTop = chatBox.scrollHeight;
});

// Send message when the button is clicked
sendButton.addEventListener('click', () => {
  console.log('Send button clicked');
  sendMessage();
});

// Listen for 'Enter' key to send messages
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // Prevent newline in textarea
    console.log('Enter key pressed');
    sendMessage();
  }
});

// Function to send message
function sendMessage() {
  const message = messageInput.value.trim();
  const username = usernameInput.value.trim();

  console.log('send message. Username:', username, 'Message:', message);

  // Check if both fields are filled out
  if (!username || !message) {
    alert('Please fill out both your name and message!');
    return;
  }

  // Send message and username to the server
  console.log('Emitting chat message event');
  socket.emit('chat message', { username, message });

  // Clear only the message input after sending
  messageInput.value = '';
  // Keep the username for convenience
}