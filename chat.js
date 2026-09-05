// ---------------------------------------------------------
// NORTHWILD MOONCREST — CHAT.JS
// Orb + panel + messaging + AI hook
// ---------------------------------------------------------

// Open panel when orb is clicked
const orb = document.querySelector(".ai-chat-orb");
const panel = document.getElementById("aiChatPanel");
const closeBtn = document.getElementById("aiChatClose");
const input = document.getElementById("aiChatInput");
const sendBtn = document.getElementById("aiChatSend");
const body = document.querySelector(".ai-chat-body");

if (orb && panel) {
    orb.addEventListener("click", () => {
        panel.style.display = "flex";
    });
}

if (closeBtn && panel) {
    closeBtn.addEventListener("click", () => {
        panel.style.display = "none";
    });
}

// Add message bubble
function addMessage(role, text) {
    if (!body) return;

    const bubble = document.createElement("div");
    bubble.className = role === "user" ? "user-bubble" : "ai-bubble";
    bubble.textContent = text;

    body.appendChild(bubble);
    body.scrollTop = body.scrollHeight;
}

// Send message handler
async function handleSend() {
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    addMessage("user", message);
    input.value = "";

    // Show a temporary "thinking" message
    const thinking = document.createElement("div");
    thinking.className = "ai-bubble";
    thinking.textContent = "Thinking...";
    body.appendChild(thinking);
    body.scrollTop = body.scrollHeight;

    try {
        const reply = await sendToAI(message);
        thinking.remove();
        addMessage("ai", reply);
    } catch (e) {
        thinking.remove();
        addMessage("ai", "Sorry, something went wrong. Please try again later.");
    }
}

// Attach send button + Enter key
if (sendBtn) {
    sendBtn.addEventListener("click", handleSend);
}

if (input) {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    });
}

// ---------------------------------------------------------
// AI CALL — replace this with your real backend/API
// ---------------------------------------------------------

async function sendToAI(message) {
    // TODO: point this to your backend or AI API.
    // For now, this is a placeholder that echoes back.
    return `You said: "${message}". Northwild AI will be wired to a real model next.`;
}
