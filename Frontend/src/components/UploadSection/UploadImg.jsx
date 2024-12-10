import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const UploadImg = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const fileHandler = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setBackgroundImage(imageUrl);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const imageUrl = URL.createObjectURL(file);
    setBackgroundImage(imageUrl);
  };

  const imgClickHandler = (e) => {
    setBackgroundImage(e.target.src);
  };

  const labelIndex = {
    0: 'Bacterial Blight',
    1: 'Brown Streak Disease',
    2: 'Green Mottle',
    3: 'Mosaic Disease',
    4: 'Healthy'
  };


  // Load the TensorFlow.js model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadGraphModel('./../../../cassava_disease_model/model.json');
        setModel(loadedModel);
        console.log('Model loaded successfully.')
      } catch (error) {
        console.error('Error loading the model:', error);
      }
    };

    loadModel();
  }, []);

  // Handle image selection and update the state
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const imageUrl = URL.createObjectURL(file);
    setBackgroundImage(imageUrl);
  };

  // Preprocess the image and make predictions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image && model) {
      const imgElement = document.createElement('img');
      imgElement.src = image;

      imgElement.onload = async () => {
        // Resize the image to match the model's input size (448x448)
        // let imageTensor = tf.browser.fromPixels(imgElement);
        // imageTensor = tf.image.resizeBilinear(imageTensor, [448, 448]); // Resize to [448, 448]
        //
        // // Normalize the image (if the model expects it)
        // imageTensor = imageTensor.div(tf.scalar(255)); // Normalize to [0, 1]
        //
        // // Add the batch dimension
        // const batchedImage = imageTensor.expandDims(0); // Shape: [1, 448, 448, 3]
        //
        // try {
        //   // Make prediction
        //   const prediction = await model.predict(batchedImage);
        //   const predictionData = prediction.dataSync();
        //
        //   // Set prediction
        //   setPrediction(predictionData);
        //   alert(`Prediction: ${predictionData}`);
        // } catch (error) {
        //   console.error('Error making prediction:', error);
        // }
        // Create a Tensor from the image
        const img = tf.browser.fromPixels(imgElement)
          .resizeNearestNeighbor([448, 448])
          .toFloat()
          .div(255.0)
          .expandDims(0);

        // Make prediction
        const predictions = await model.predict(img).data();

        // Process the result (adjust according to your model's output)
        const maxIndex = predictions.indexOf(Math.max(...predictions));
        console.log('maxindex', maxIndex);
        const predictedLabel = labelIndex[maxIndex + 1];
        document.getElementById('prediction').innerText = `Prediction: ${predictedLabel}`;
      };

      if (!imgElement.src) {
        alert('Please upload an image first.');
        return;
      }

    }
  };

  return (
    <div className="flex flex-col w-96">
      <label
        htmlFor="input-file"
        className="rounded-lg w-full flex flex-col items-center justify-center h-64 bg-img-upload bg-slate-200"
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
      >
        <label
          htmlFor="input-file"
          className={`cursor-pointer p-4 rounded-lg mt-10 ${
            !backgroundImage
              ? "bg-upload-icon bg-no-repeat bg-contain"
              : "hidden"
          }`}
        ></label>
        <input type="file" id="input-file" hidden onChange={handleImageChange} />
        <img id="image-preview" src="" alt="Image Preview" style={{display: 'none'}} />
        <p className="mt-7 bg-transparent">
          {!backgroundImage ? "Upload or drop image here" : ""}
        </p>
      </label>
      <button 
        className="mt-3 bg-languange hover:bg-hero hover:text-white p-2 rounded-lg"
        onClick={handleSubmit}
      >
        Predict
      </button>
      <p className="text-white" id="prediction"></p>
      <div className="flex mt-5 gap-6 -ml-7 items-center">
        <p className="text-white">
          No image? <br /> Try one of these:
        </p>
        <div className="img w-16 flex gap-2">
          <img
            src="images/model-test-1.jpg"
            alt="image-1"
            onClick={imgClickHandler}
            className="object-cover object-center aspect-square rounded-lg cursor-pointer"
          />
          <img
            src="images/model-test-2.jpg"
            alt="image-1"
            onClick={imgClickHandler}
            className="object-cover object-center aspect-square rounded-lg cursor-pointer"
          />
          <img
            src="images/model-test-3.jpg"
            alt="image-1"
            onClick={imgClickHandler}
            className="object-cover object-center aspect-square rounded-lg cursor-pointer"
          />
          <img
            src="images/model-test-4.jpg"
            alt="image-1"
            onClick={imgClickHandler}
            className="object-cover object-center aspect-square rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
