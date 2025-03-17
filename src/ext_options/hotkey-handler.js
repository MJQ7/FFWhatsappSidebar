/**
 * Captures key presses when the hotkey input field has focus
 */

document.addEventListener("DOMContentLoaded", () => {
  const hotkeyInput = document.getElementById("hotkey");
  
  if (!hotkeyInput) {
    console.error("Hotkey input element not found");
    return;
  }

  // Map of special key codes to their display names
  const specialKeyMap = {
    "Escape": "Esc",
    "ArrowUp": "Up",
    "ArrowDown": "Down",
    "ArrowLeft": "Left",
    "ArrowRight": "Right",
    "Space": "Space",
    "Enter": "Enter",
    "Backspace": "Backspace",
    "Delete": "Delete",
    "Tab": "Tab",
    "Home": "Home",
    "End": "End",
    "PageUp": "Page Up",
    "PageDown": "Page Down",
    "Insert": "Insert"
  };

  // Function to format key for display
  const formatKeyForDisplay = (key) => {
    // Handle function keys
    if (/^F\d+$/.test(key)) {
      return key;
    }
    
    if (specialKeyMap[key]) {
      return specialKeyMap[key];
    }
    
    if (key.length === 1 && key.match(/[a-z]/i)) {
      return key.toUpperCase();
    }
    
    return key;
  };

  hotkeyInput.addEventListener("keydown", (event) => {
    event.preventDefault();
    
    const keys = [];
    
    if (event.ctrlKey) keys.push("Ctrl");
    if (event.metaKey) keys.push("Command"); // For Mac
    if (event.altKey) keys.push("Alt");
    if (event.shiftKey) keys.push("Shift");
    
    // Skip if only modifier keys are pressed
    if (["Control", "Alt", "Shift", "Meta"].includes(event.key)) {
      return;
    }
    
    keys.push(formatKeyForDisplay(event.key));
    
    // Set the hotkey value to the key combination
    if (keys.length > 0) {
      hotkeyInput.value = keys.join("+");
      
      // Dispatch an input event to ensure other listeners know the value changed
      hotkeyInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
  
  // Clear the input when it receives focus
  hotkeyInput.addEventListener("focus", () => {
    hotkeyInput.value = "";
  });
  
  // Prevent pasting into the input field
  hotkeyInput.addEventListener("paste", (event) => {
    event.preventDefault();
  });
  
  // Make the input readonly to prevent normal typing
  hotkeyInput.setAttribute("readonly", "readonly");
  
  // Allow clicking on the input to focus it
  hotkeyInput.addEventListener("click", () => {
    hotkeyInput.focus();
  });
});
