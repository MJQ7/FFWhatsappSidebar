# WhatsApp Sidebar Extension for Firefox

A Firefox browser extension that opens WhatsApp Web in the sidebar.

## Features

- Opens WhatsApp Web in a Firefox sidebar
- Adds a WhatsApp icon to the sidebar

## Instructions

### 1. Load the Extension in Firefox
1. Open Firefox
2. Type `about:debugging` in the address bar and press Enter
3. Click on "This Firefox" in the left sidebar
4. Click on "Load Temporary Add-on..."
5. Navigate to the directory containing this extension
6. Select any file in the extension directory (e.g., `manifest.json`)
7. The extension will be loaded temporarily

### 2. Manually Install the Extension
For permanent installation:
1. Use `web-ext` to build the extension
2. Rename the file to have a `.xpi` extension
3. Go to `about:addons` in Firefox
4. Click the gear icon and select "Install Add-on From File..."
5. Select your `.xpi` file

### 3. Using the Extension
Once installed:
1. Click on the WhatsApp icon in the Firefox sidebar
2. The sidebar will open with WhatsApp Web
3. Log in to WhatsApp Web by scanning the QR code with your phone
4. You can now use WhatsApp directly from the Firefox sidebar

## Note
- This extension requires Firefox 57 or later


