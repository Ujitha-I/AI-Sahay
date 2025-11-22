function sendMessage() {
    let input = document.getElementById("input").value.trim();
    let output = document.getElementById("output");

    if (!input) return;

    let userMsg = `<p><strong>You:</strong> ${input}</p>`;
    output.innerHTML += userMsg;

    // Dummy AI response (for hackathon demo)
    let botReply = `<p><strong>AI-Sahay:</strong> This is a demo response. The backend AI will be connected later.</p>`;
    output.innerHTML += botReply;

    document.getElementById("input").value = "";
    output.scrollTop = output.scrollHeight;
}

