/**
 * Crops an image based on pixel coordinates
 * @param {string} imageSrc - Base64 image source
 * @param {object} croppedPixels - Object with {x, y, width, height}
 * @returns {Promise<Blob>}
 */
const getCroppedImg = async (imageSrc, croppedPixels) => {
  const image = new Image();
  image.src = imageSrc;

  return new Promise((resolve, reject) => {
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Set canvas dimensions to cropped size
      canvas.width = croppedPixels.width;
      canvas.height = croppedPixels.height;

      // Draw cropped portion of image
      ctx.drawImage(
        image,
        croppedPixels.x,
        croppedPixels.y,
        croppedPixels.width,
        croppedPixels.height,
        0,
        0,
        croppedPixels.width,
        croppedPixels.height
      );

      // Convert canvas to blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas to blob conversion failed'));
          }
        },
        'image/jpeg',
        0.95 // Quality
      );
    };

    image.onerror = () => {
      reject(new Error('Image failed to load'));
    };
  });
};

export default getCroppedImg;