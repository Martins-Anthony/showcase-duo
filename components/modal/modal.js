export function showModal(compressedImage) {
  const modal = document.getElementById('screenshot-modal');
  const previewImage = document.getElementById('screenshot-preview');
  const downloadLink = document.getElementById('download-link');

  const imageUrl = URL.createObjectURL(compressedImage);
  previewImage.src = imageUrl;

  downloadLink.href = imageUrl;

  modal.style.display = 'block';

  const closeModalBtn = document.getElementById('close-modal');
  const retryBtn = document.getElementById('retry-btn');

  closeModalBtn.onclick = function() {
    modal.style.display = 'none';
  };

  retryBtn.onclick = function() {
    modal.style.display = 'none';
    screenshot();
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}