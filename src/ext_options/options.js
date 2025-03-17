/**
 * WhatsApp Sidebar Extension - Options page that manages hotkey configuration
 */

const SIDEBAR_TOGGLE_COMMAND = "_toggleSidebar";
const HOTKEY_INPUT_SELECTOR = "#hotkey";
const UPDATE_BUTTON_SELECTOR = "#btnUpdateHotkey";
const RESET_BUTTON_SELECTOR = "#btnResetHotkey";

/**
 * Loads the current hotkey from browser settings and displays it in the input field
 */
async function loadHotkey() {
  try {
    const commands = await browser.commands.getAll();
    const toggleCommand = commands.find(cmd => cmd.name === SIDEBAR_TOGGLE_COMMAND);
    
    if (toggleCommand) {
      document.querySelector(HOTKEY_INPUT_SELECTOR).value = toggleCommand.shortcut || '';
    }
  } catch (error) {
    console.error('Failed to load hotkey:', error);
  }
}

/**
 * Resets the hotkey to browser default
 */
async function resetHotkey() {
  try {
    await browser.commands.reset(SIDEBAR_TOGGLE_COMMAND);
    await loadHotkey();
  } catch (error) {
    console.error('Failed to reset hotkey:', error);
  }
}

/**
 * Updates the hotkey with user input
 */
async function updateHotkey() {
  try {
    const newHotkey = document.querySelector(HOTKEY_INPUT_SELECTOR).value;
    await browser.commands.update({
      name: SIDEBAR_TOGGLE_COMMAND,
      shortcut: newHotkey,
    });
  } catch (error) {
    console.error('Failed to update hotkey:', error);
  }
}

document.addEventListener("DOMContentLoaded", loadHotkey);
document.querySelector(UPDATE_BUTTON_SELECTOR).addEventListener("click", updateHotkey);
document.querySelector(RESET_BUTTON_SELECTOR).addEventListener("click", resetHotkey);
