const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// Get cookie value
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split("=");

    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
}

// Apply saved preferences on page load
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
  document.documentElement.style.setProperty(
    "--fontsize",
    savedFontSize + "px"
  );

  fontSizeInput.value = savedFontSize;
}

if (savedFontColor) {
  document.documentElement.style.setProperty(
    "--fontcolor",
    savedFontColor
  );

  fontColorInput.value = savedFontColor;
}

// Save preferences
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  // Save cookies
  document.cookie =
    "fontsize=" + encodeURIComponent(fontSize) +
    "; path=/; max-age=31536000";

  document.cookie =
    "fontcolor=" + encodeURIComponent(fontColor) +
    "; path=/; max-age=31536000";

  // Apply immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});