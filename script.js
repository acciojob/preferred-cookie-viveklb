const form = document.querySelector("form");
const fontsizeInput = document.getElementById("fontsize");
const fontcolorInput = document.getElementById("fontcolor");

// Get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const parts = cookie.split("=");

    if (parts[0] === name) {
      return decodeURIComponent(parts[1]);
    }
  }

  return null;
}

// Apply preferences on page load
const savedFontsize = getCookie("fontsize");
const savedFontcolor = getCookie("fontcolor");

if (savedFontsize) {
  document.documentElement.style.setProperty(
    "--fontsize",
    savedFontsize + "px"
  );

  // Important for test
  fontsizeInput.value = savedFontsize;
}

if (savedFontcolor) {
  document.documentElement.style.setProperty(
    "--fontcolor",
    savedFontcolor
  );

  // Important for test
  fontcolorInput.value = savedFontcolor;
}

// Save preferences
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fontsize = fontsizeInput.value;
  const fontcolor = fontcolorInput.value;

  // Save cookies
  document.cookie = `fontsize=${fontsize}; path=/`;
  document.cookie = `fontcolor=${fontcolor}; path=/`;

  // Apply styles immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontsize + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    fontcolor
  );
});