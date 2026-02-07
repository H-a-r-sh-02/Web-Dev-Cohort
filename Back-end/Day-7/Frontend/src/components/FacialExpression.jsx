 import React, { useEffect, useRef } from 'react';
 import * as faceapi from 'face-api.js';
 import axios from 'axios';
 import BACKEND_URL from '../config';
import { toast } from 'react-toastify';

 export default function FacialExpression({setsongs}) {
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
            // console.log("No Face Detected!");
            toast.error("No Face Detected!")
            return; 
          }
    
          for (const expression of Object.keys(detections[0].expressions)) {

            if(detections[0].expressions[expression] > mostProbableExpression) {
                mostProbableExpression = detections[0].expressions[expression];
                _expression = expression
            }
          }
          axios.get(`${BACKEND_URL}/songs?mood=${_expression}`)
          .then(response=>{
            console.log(response.data);
            setsongs(response.data.songs);
          })
          .catch(error => {
           console.error("Error fetching songs:", error);
            });

            toast.success("Mood is Detected!");
    }

  useEffect(() => {
 
    loadModels().then(startVideo);

  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full px-4 sm:flex-row sm:gap-6'>
      <video
        ref={videoRef}
        autoPlay
        muted
       className='w-full max-w-xs sm:max-w-md aspect-video rounded-xl object-cover'
      />
      <button className='bg-white text-black font-medium px-4 py-2 rounded shadow ' onClick={detectMood}>Detect Mood</button>
 </div>
 );
 }
