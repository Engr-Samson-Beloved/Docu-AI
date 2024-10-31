// scripts.js

// Function to format text in the editable area
function formatText(command) {
    document.execCommand(command, false, null);
}

// Function to change text color
function changeTextColor() {
    const color = document.getElementById('textColor').value;
    document.execCommand('foreColor', false, color);
}

// Function to change background color
function changeBgColor() {
    const color = document.getElementById('bgColor').value;
    document.execCommand('hiliteColor', false, color);
}

// Function to insert an image
function insertImage() {
    const url = document.getElementById('imageUrl').value;
    if (url) {
        document.execCommand('insertImage', false, url);
    }
}

// Function to save the content
function saveContent() {
    const content = document.getElementById('editor').innerHTML;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Function to change font
function changeFont() {
    const font = document.getElementById('fontSelect').value;
    document.execCommand('fontName', false, font);
}
// Add to scripts.js

// Function to toggle sidebar visibility on mobile
function toggleSidebar() {
    const toolbar = document.getElementById('toolbar');
    toolbar.classList.toggle('open');
}
// Add to scripts.js

// Function to change font size
function changeFontSize() {
    const fontSize = document.getElementById('fontSizeSelect').value;
    document.execCommand('fontSize', false, fontSize);
}
