import React, { useRef, useState, useCallback } from 'react';
import { UploadCloud, X } from 'lucide-react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../../helper/cropImage';

const MediaLocation = ({ formData, updateFormData, onNext, onPrevious }) => {
  const additionalPhotoRef = useRef(null);

  // ================= MAIN PHOTO STATE =================
  const [mainPreview, setMainPreview] = useState("");
  const [tempSrc, setTempSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedPixels, setCroppedPixels] = useState(null);
  const [openCrop, setOpenCrop] = useState(false);

  const onCropComplete = useCallback((_, pixels) => {
    setCroppedPixels(pixels);
  }, []);

  // ================= HANDLE MAIN UPLOAD =================
  const handleMainUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setTempSrc(reader.result);
      setOpenCrop(true);
    };
    reader.onerror = () => {
      alert('Failed to read file');
    };
    reader.readAsDataURL(file);
  };

  // ================= SAVE CROPPED IMAGE =================
  const saveCropped = async () => {
    if (!tempSrc || !croppedPixels) {
      alert('Please crop the image first');
      return;
    }

    try {
      const blob = await getCroppedImg(tempSrc, croppedPixels);
      const file = new File([blob], 'mainEntrance.jpg', { type: 'image/jpeg' });

      // Create preview URL from blob
      const previewUrl = URL.createObjectURL(blob);
      setMainPreview(previewUrl);

      // Update form data with the file
      updateFormData('mainEntrancePhoto', file);

      // Close modal and reset states
      setOpenCrop(false);
      setTempSrc(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedPixels(null);

      console.log('✅ Image saved successfully');
    } catch (err) {
      console.error('❌ Error saving cropped image:', err);
      alert('Failed to save cropped image: ' + err.message);
    }
  };

  // ================= ADDITIONAL PHOTOS =================
  const handleAdditional = (e) => {
    const files = Array.from(e.target.files || []).filter(f =>
      f.type.startsWith('image/')
    );

    if (files.length > 0) {
      updateFormData(
        'additionalPhotos',
        [...(formData.additionalPhotos || []), ...files]
      );
    }
  };

  const removeAdditional = (i) => {
    const copy = [...(formData.additionalPhotos || [])];
    copy.splice(i, 1);
    updateFormData('additionalPhotos', copy);
  };

  // ================= ADDRESS LOGIC =================
  const [hasSpecialBuilding, setHasSpecialBuilding] = useState(false);
  const [departmentAddress, setDepartmentAddress] = useState({
    floorNumber: '',
    wing: '',
    landmark: '',
  });

  const handleAddressChange = (field, value) => {
    const updated = { ...departmentAddress, [field]: value };
    setDepartmentAddress(updated);
    updateFormData('departmentAddress', {
      ...updated,
      hasSpecialBuilding,
    });
  };

  const handleSpecialBuildingChange = (checked) => {
    setHasSpecialBuilding(checked);
    updateFormData('departmentAddress', {
      ...departmentAddress,
      hasSpecialBuilding: checked,
    });
  };

  // ================= VALIDATION =================
  const isMainPhotoValid = mainPreview && mainPreview.length > 0;
  const isAddressValid = hasSpecialBuilding || (departmentAddress.floorNumber && departmentAddress.floorNumber.trim());
  const isValid = isMainPhotoValid && isAddressValid;

  // ================= RENDER =================
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Media & Location</h2>

      {/* ========== MAIN ENTRANCE PHOTO ========== */}
      <div className="space-y-3">
        <label className="font-semibold block">
          Main Entrance Photo <span className="text-red-500">*</span>
        </label>

        <div
          onClick={() => document.getElementById('mainInput').click()}
          className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition overflow-hidden"
        >
          {mainPreview ? (
            <img
              src={mainPreview}
              alt="Main entrance preview"
              className="w-full h-full object-contain"
              onError={(e) => {
                console.error('Image load failed:', e);
                setMainPreview('');
              }}
            />
          ) : (
            <div className="text-center">
              <UploadCloud className="mx-auto mb-2 text-gray-400" size={40} />
              <p className="text-gray-500 font-medium">Click to upload photo</p>
            </div>
          )}
        </div>

        <input
          id="mainInput"
          type="file"
          accept="image/*"
          onChange={handleMainUpload}
          className="hidden"
        />

       
      </div>

      {/* ========== CROP MODAL ========== */}
      {openCrop && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Crop Your Image</h3>
                <button
                  onClick={() => {
                    setOpenCrop(false);
                    setTempSrc(null);
                    setCrop({ x: 0, y: 0 });
                    setZoom(1);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {tempSrc && (
              <>
                <div className="relative h-96 bg-gray-900">
                  <Cropper
                    image={tempSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    restrictPosition={true}
                  />
                </div>

                <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
                  <button
                    onClick={() => {
                      setOpenCrop(false);
                      setTempSrc(null);
                      setCrop({ x: 0, y: 0 });
                      setZoom(1);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveCropped}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Save Crop
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ========== ADDITIONAL PHOTOS ========== */}
      <div className="space-y-3">
        <label className="font-semibold block">Additional Photos</label>

        <div
          onClick={() => additionalPhotoRef.current?.click()}
          className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
        >
          <div className="text-center">
            <UploadCloud className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="text-gray-500 text-sm">Click to add more photos</p>
          </div>
        </div>

        <input
          ref={additionalPhotoRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleAdditional}
          className="hidden"
        />

        {formData.additionalPhotos && formData.additionalPhotos.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {formData.additionalPhotos.map((file, i) => (
              <div key={i} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Additional ${i + 1}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeAdditional(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  title="Remove"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ========== ADDRESS SECTION ========== */}
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasSpecialBuilding}
            onChange={(e) => handleSpecialBuildingChange(e.target.checked)}
            className="w-4 h-4 rounded"
          />
          <span className="font-medium">Department has special building</span>
        </label>

        {!hasSpecialBuilding && (
          <div className="space-y-3">
            <input
              placeholder="Floor Number"
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={departmentAddress.floorNumber}
              onChange={(e) => handleAddressChange('floorNumber', e.target.value)}
            />
            <input
              placeholder="Wing (Optional)"
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={departmentAddress.wing}
              onChange={(e) => handleAddressChange('wing', e.target.value)}
            />
            <input
              placeholder="Landmark (Optional)"
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={departmentAddress.landmark}
              onChange={(e) => handleAddressChange('landmark', e.target.value)}
            />
          </div>
        )}
      </div>

      
      {/* ========== NAVIGATION ========== */}
      <div className="flex justify-between pt-6 border-t">
        <button
          onClick={onPrevious}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            isValid
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MediaLocation;