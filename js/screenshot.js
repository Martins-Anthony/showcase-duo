import { compressImage } from './compressImage.js';
import { watermark } from './watermark.js';
import { showModal } from '../components/modal/modal.js';

function screenshot() {

 const elementToCapture = document.querySelector("#capture");
 
  elementToCapture.style.position = 'relative';
  elementToCapture.appendChild(watermark);

 html2canvas(elementToCapture, {
  width: 1440,
  height: 752,
  windowWidth: 1440,
  windowHeight: 752,
  scale: 2,
  x: -25,
  y: -50,
  backgroundColor: null
 }).then(canvas => {
    canvas.toBlob(async (blob) => {
      
    const compressedImage = await compressImage(blob);
    showModal(compressedImage);

  }, "image/png");
 }).finally(() => {
  watermark.remove();
 });
}

export function screenshotBtn() {
  const screenshotBtn = document.getElementById("screenshot-btn")

  screenshotBtn.addEventListener("click", (event) => {
    event.preventDefault()
    screenshot()
  })
}