import { CheckCircle, Copy, Share2, Download, Zap } from "lucide-react";
import React, { useState } from "react";

function TokenConfirm({ tokenInfo }) {
  const [copied, setCopied] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Handle Copy Token
  const handleCopyToken = () => {
    navigator.clipboard.writeText(tokenInfo?.token || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Share
  const handleShare = async () => {
    const shareText = `
🏥 Hospital Token Confirmed!

Token: ${tokenInfo?.token}
Department: ${tokenInfo?.department}
Hospital: ${tokenInfo?.hospitalName}
Visit Type: ${tokenInfo?.visitType === "new" ? "New Patient" : "Follow-up"}
Date: ${tokenInfo?.date}

Keep this number handy!
    `.trim();

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Hospital Token",
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled:", error);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  // Handle Download
  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, "#0055ff");
    gradient.addColorStop(1, "#0044cc");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Your Hospital Token", 400, 80);

    ctx.font = "bold 72px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(tokenInfo?.token || "TOKEN", 400, 220);

    ctx.font = "20px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.textAlign = "left";
    
    const details = [
      `Department: ${tokenInfo?.department || "N/A"}`,
      `Hospital: ${tokenInfo?.hospitalName || "N/A"}`,
      `Visit Type: ${tokenInfo?.visitType === "new" ? "New Patient" : "Follow-up"}`,
      `Date: ${tokenInfo?.date || new Date().toLocaleDateString("en-IN")}`,
    ];

    let yPosition = 350;
    details.forEach((detail) => {
      ctx.fillText(detail, 60, yPosition);
      yPosition += 50;
    });

    ctx.font = "16px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fillText("Keep this number handy • Valid for today only", 60, 560);

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Token-${tokenInfo?.token || "download"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#0055ff] via-blue-600 to-[#0044cc] p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">Token Status</h3>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                <span className="text-sm font-semibold">Confirmed</span>
              </div>
            </div>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* BODY */}
        <div className="p-8">
          {/* TOKEN DISPLAY - HORIZONTAL */}
          <div className="mb-10">
            <div className="flex items-center gap-8 mb-8">
              {/* Token Box - QR Code Style */}
              <div className="flex-shrink-0">
                {tokenInfo?.qrCode ? (
                  // QR Code Display
                  <div className="w-40 h-40 rounded-3xl bg-white border-4 border-white/20 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img 
                      src={tokenInfo.qrCode} 
                      alt="QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  // Token Number Display - QR Code Style
                  <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-[#0055ff] to-[#0044cc] shadow-2xl flex items-center justify-center border-4 border-white/20">
                    <div className="text-center">
                      <p className="text-white/70 text-xs font-medium mb-2">Your Token</p>
                      <p className="text-3xl font-bold text-white tracking-wider break-words px-2">
                        {tokenInfo?.token}
                      </p>
                    </div>

                    {/* Green check badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="flex-grow">
                <h4 className="text-2xl font-bold text-gray-900 mb-1">Your Token</h4>
                <p className="text-gray-500 text-sm mb-6">Keep this number handy</p>

                {/* Status Messages */}
                {copied && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg text-sm text-green-800 font-semibold">
                    ✓ Copied to clipboard!
                  </div>
                )}

                {shareSuccess && (
                  <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg text-sm text-blue-800 font-semibold">
                    ✓ Shared successfully!
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={handleCopyToken}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-lg font-semibold transition duration-200"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>

                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#0055ff] text-[#0055ff] hover:bg-blue-50 rounded-lg font-semibold transition duration-200"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>

                  <button 
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Department */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  <Zap className="inline w-3 h-3 mr-1 text-[#0055ff]" />
                  Department
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {tokenInfo?.departmentId.name || "N/A"}
                </p>
              </div>

              {/* Hospital */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  Hospital
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {tokenInfo?.hospitalId.name || "N/A"}
                </p>
              </div>

              {/* Visit Type */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  Visit Type
                </p>
                <p className="text-lg font-bold text-gray-900 capitalize">
                  {tokenInfo?.visitType === "new" ? "New Patient" : "Follow-up"}
                </p>
              </div>

              {/* Date */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  Date
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {tokenInfo?.date || new Date().toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>

            {/* Patient Info */}
            {(tokenInfo?.patientName || tokenInfo?.mobile || tokenInfo?.age) && (
              <>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tokenInfo?.patientName && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Patient Name
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {tokenInfo.patientName}
                      </p>
                    </div>
                  )}

                  {tokenInfo?.mobile && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Mobile
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {tokenInfo.mobile}
                      </p>
                    </div>
                  )}

                  {tokenInfo?.age && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Age
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {tokenInfo.age} years
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Important Notes */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-900">
              <span className="font-bold">⏰ Note:</span> Your token is valid for today only. Please arrive at the hospital 10 minutes before your scheduled time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenConfirm;