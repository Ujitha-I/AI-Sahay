const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

function addMessage(text, className) {
  const div = document.createElement('div');
  div.className = `message ${className}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; 
}

function addTyping() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typing';
  typingDiv.className = 'message bot-msg';
  typingDiv.textContent = 'AI-Sahay is typing...';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typingDiv = document.getElementById('typing');
  if (typingDiv) typingDiv.remove();
}

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user-msg');
  userInput.value = '';

  addTyping();

  fetch('http://127.0.0.1:5000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  })
  .then(res => res.json())
  .then(data => {
    removeTyping();
    addMessage(data.reply, 'bot-msg');
  })
  .catch(() => {
    removeTyping();
    addMessage("AI-Sahay: Error connecting to server.", 'bot-msg');
  });
});
window.addEventListener('DOMContentLoaded', () => {
    addMessage("AI-Sahay: Hello! I am AI-Sahay. Ask me anything about social good projects!", 'bot-msg');
});
