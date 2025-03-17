/**
 * Listens for the hotkey command and toggles the sidebar
*/

browser.commands.onCommand.addListener((command) => {
  if (command === "_toggleSidebar") {
    browser.sidebarAction.toggle();
  }
});
