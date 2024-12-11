import * as tf from "@tensorflow/tfjs";

const loadModel = async () => {
  try {
    const model = await tf.loadGraphModel("cassava_disease_model/model.json");
    console.log("Model loaded successfully");
    return model;
  } catch (error) {
    console.error(`Error loading model: ${error.message}`);
  }
};

export default loadModel;
