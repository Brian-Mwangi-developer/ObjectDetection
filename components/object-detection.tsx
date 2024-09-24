"use client";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  // Request camera access
  const requestCameraAccess = async () => {
    try {
      // Check if mediaDevices API is available
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request permission to access the camera
        await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraAllowed(true); // Set state to allow camera access
      } else {
        alert("Your browser does not support camera access");
      }
    } catch (error) {
      console.error("Camera access denied", error);
      alert("Camera access was denied. Please enable it in your browser settings.");
      setCameraAllowed(false); // Handle denied access
    }
  };

  useEffect(() => {
    // Call requestCameraAccess when component mounts
    requestCameraAccess();
  }, []);

  return (
    <div className="mt-2">
      {cameraAllowed ? (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          <Webcam ref={webcamRef} className="rounded-md w-full lg:h-[720px]" muted />
        </div>
      ) : (
        <div className="text-center text-red-500">Camera access is required to use this feature.</div>
      )}
    </div>
  );
};

export default ObjectDetection;
