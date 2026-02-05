import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, X } from "lucide-react";

function UploadSectionBranding({ setData }) {
  const logoInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  const { setValue, register } = useForm({
    defaultValues: {
      branding: {
        logo: null,
        banner: null,
      },
    },
  });

  // Local state for previews
  const [previews, setPreviews] = useState({
    logo: null,
    banner: null,
  });

  // Handle file selection
  const handleFileChange = (type, e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Set preview locally
    setPreviews((prev) => ({
      ...prev,
      [type]: URL.createObjectURL(file),
    }));

    // Set file in form state
    setValue(`branding.${type}`, file);

    // Set file in parent setData
    setData((prev) => ({
      ...prev,
      branding: {
        ...(prev.branding || {}),
        [type]: file,
      },
    }));
  };

  // Handle file removal
  const handleRemoveFile = (type) => {
    // Remove preview
    setPreviews((prev) => ({
      ...prev,
      [type]: null,
    }));

    // Remove from form state
    setValue(`branding.${type}`, null);

    // Remove from parent setData
    setData((prev) => ({
      ...prev,
      branding: {
        ...(prev.branding || {}),
        [type]: null,
      },
    }));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Logo Upload */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <ImagePlus className="h-4 w-4 text-teal-500" />
          Hospital Logo
        </label>
        <input
          {...register("branding.logo")}
          ref={logoInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange("logo", e)}
          className="hidden"
        />
        {previews.logo ? (
          <div className="relative aspect-square w-full max-w-[200px] rounded-2xl border-2 border-gray-200 overflow-hidden group bg-gray-50">
            <img
              src={previews.logo}
              alt="Logo preview"
              className="w-full h-full object-contain p-4"
            />
            <button
              type="button"
              onClick={() => handleRemoveFile("logo")}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => logoInputRef.current?.click()}
            className="flex flex-col items-center justify-center aspect-square w-full max-w-[200px] rounded-2xl border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50/50 transition-all cursor-pointer"
          >
            <ImagePlus className="h-10 w-10 text-gray-400 mb-3" />
            <span className="text-sm font-medium text-gray-600">Upload Logo</span>
            <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</span>
          </button>
        )}
      </div>

      {/* Banner Upload */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <ImagePlus className="h-4 w-4 text-teal-500" />
          Hospital Banner
        </label>
        <input
          {...register("branding.banner")}
          ref={bannerInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange("banner", e)}
          className="hidden"
        />
        {previews.banner ? (
          <div className="relative aspect-[3/1] w-full rounded-2xl border-2 border-gray-200 overflow-hidden group">
            <img
              src={previews.banner}
              alt="Banner preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => handleRemoveFile("banner")}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => bannerInputRef.current?.click()}
            className="flex flex-col items-center justify-center aspect-[3/1] w-full rounded-2xl border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50/50 transition-all cursor-pointer"
          >
            <ImagePlus className="h-10 w-10 text-gray-400 mb-3" />
            <span className="text-sm font-medium text-gray-600">Upload Banner</span>
            <span className="text-xs text-gray-400 mt-1">Recommended: 1200x400px</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default UploadSectionBranding;
