// Minimal Chat System — Clean, No Animations

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("chat-toggle");
    const panel = document.getElementById("chat-panel");

    // Build chat structure
    panel.innerHTML = `
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-input">
            <input id="chat-text" type="text" placeholder="Type a message...">
            <button id="chat-send">Send</button>
        </div>
    `;

    const messages = document.getElementById("chat-messages");
    const input = document.getElementById("chat-text");
    const send = document.getElementById("chat-send");

    // Toggle chat panel
    toggle.addEventListener("click", () => {
        panel.style.display = panel.style.display === "flex" ? "none" : "flex";
    });

    // Send message
    send.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;

        // User message
        messages.innerHTML += `<p><strong>You:</strong> ${text}</p>`;
        input.value = "";

        // Simple bot reply
        messages.innerHTML += `<p><strong>Northwild:</strong> I hear you — what else is on your mind?</p>`;

        messages.scrollTop = messages.scrollHeight;
    });
});
