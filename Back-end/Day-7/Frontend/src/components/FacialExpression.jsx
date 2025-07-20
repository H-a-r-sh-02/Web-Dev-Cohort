 import React, { useEffect, useRef } from 'react';
 import * as faceapi from 'face-api.js';


 export default function FacialExpression() {
  const videoRef = useRef();

     const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };
    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    async function detectMood() {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

          let mostProbableExpression = 0;
          let _expression = '';

          if(!detections || detections.length === 0) {
            console.log("No Face Detected!");
            return; 
          }
    
          for (const expression of Object.keys(detections[0].expressions)) {

            if(detections[0].expressions[expression] > mostProbableExpression) {
                mostProbableExpression = detections[0].expressions[expression];
                _expression = expression
            }
          }
          console.log(_expression);
    }

  useEffect(() => {
 
    loadModels().then(startVideo);

  }, []);

  return (
    <div className='flex gap-3 items-center justify-center'>
      <video
        ref={videoRef}
        autoPlay
        muted
       className='w-[25rem] aspect-video object-cover rounded'
      />
      <button className='px-[1rem] py-[0.5rem] rounded bg-white cursor-pointer' onClick={detectMood}>Detect Mood</button>
 </div>
 );
 }
