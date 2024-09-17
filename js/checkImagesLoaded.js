export function checkImagesLoaded() {
  const mobileContainer = document.querySelector('#image-preview-mobile');
  const desktopContainer = document.querySelector('#image-preview-desktop');
  const screenshotBtn = document.getElementById('screenshot-btn');

  if (!mobileContainer || !desktopContainer) {
    return;
  }

  const mobileImage = mobileContainer.getAttribute('src');
  const desktopImage = desktopContainer.getAttribute('src');

  if (mobileImage && desktopImage && mobileImage !== "#" && desktopImage !== "#") {
    screenshotBtn.style.display = 'block';
  } else {
    screenshotBtn.style.display = 'none';
  }
}

export function addImageListeners() {
  const mobileContainer = document.querySelector('#image-preview-mobile');
  const desktopContainer = document.querySelector('#image-preview-desktop');
  
  if (mobileContainer) {
    mobileContainer.addEventListener('load', checkImagesLoaded);
  }
  
  if (desktopContainer) {
    desktopContainer.addEventListener('load', checkImagesLoaded);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const screenshotBtn = document.getElementById('screenshot-btn');
  screenshotBtn.style.display = 'none';

  addImageListeners();
});