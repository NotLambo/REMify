// Main Variables
const confirmation = document.querySelector('.converter');
const results = document.querySelector('.result');
const output = document.querySelector('.output');
const userSwitch = document.querySelector('.switch');
const pixelDIV = document.querySelector('.pixels');
const remDIV = document.querySelector('.rem');
const confirmationText = document.querySelector('.con-text');

// Calculations

confirmation.addEventListener('click', function() {
  const userPixel = Number(document.querySelector('.pixel-in').value);
  const userREM = Number(document.querySelector('.rem-in').value);
  output.classList.remove('hidden');
  if(confirmationText.textContent.includes(`REM`)) {
    console.log(userPixel)
    const remCalculation = userPixel / 16;
    results.textContent = `REM: ${remCalculation}`;
  } else if(!confirmationText.textContent.includes(`REM`)) {
    const pixelCalculation = userREM * 16;
    results.textContent = `Pixels: ${pixelCalculation}`;
  }
})

userSwitch.addEventListener('click', function() {
  if(userSwitch.textContent.startsWith('REM')) {
    confirmationText.textContent = `Convert To Pixels`;
    remDIV.classList.remove('hidden');
    pixelDIV.classList.add('hidden');
    userSwitch.textContent = `Pixels To REM`;
  } else if(userSwitch.textContent.startsWith('Pixel')) {
    confirmationText.textContent = `Convert To REM`;
    remDIV.classList.add('hidden');
    pixelDIV.classList.remove('hidden');
    userSwitch.textContent = `REM To Pixels.`;
  }
})

/*


  ______ _____ _______ _     _ _     _ ______    _______  _____  _______    / __   _  _____  _______        _______ _______ ______   _____ 
 |  ____   |      |    |_____| |     | |_____]   |       |     | |  |  |   /  | \  | |     |    |    |      |_____| |  |  | |_____] |     |
 |_____| __|__    |    |     | |_____| |_____] . |_____  |_____| |  |  |  /   |  \_| |_____|    |    |_____ |     | |  |  | |_____] |_____|
                                                                         /                                                                 


*/