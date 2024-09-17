export async function compressImage(imageFile) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 2880,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.error("Erreur lors de la compression :", error);
  }
}