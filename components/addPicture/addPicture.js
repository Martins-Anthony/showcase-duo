export function adaptIdsForDevice(device) {
  const prefix = device === 'mobile' ? 'mobile' : 'desktop';
  const container = $(`#${device}-container`);

  container.find('.add-picture-container').attr('id', `${prefix}-add-picture-container`);
  container.find('.picture-input-file').attr('id', `picture-${prefix}`);
  container.find('.image-preview').attr('id', `image-preview-${prefix}`);
  container.find(`.addPicture-btn`).attr('for', `picture-${prefix}`).attr('id', `AddPictureBtn-${prefix}`);
}

export function handlePictureUpload(device) {
  const addPicture = document.getElementById(`picture-${device}`);
  const imagePreview = document.getElementById(`image-preview-${device}`);
  const addPictureContainer = document.getElementById(`${device}-add-picture-container`);

  addPicture.addEventListener('change', function(event) {
    const file = event.target.files[0];
   if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      addPictureContainer.style.display = 'none';
      imagePreview.src = event.target.result;
      imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
   } else {
    imagePreview.src = '';
    imagePreview.style.display = 'none';
   }
  });
}