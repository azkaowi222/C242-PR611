import { useState } from "react";

const UploadImg = ({
  predictHandler,
  setImgElement,
  imgElement,
  isDisable,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.onloadend = () => {
      setBackgroundImage(reader.result);
    };
    reader.readAsDataURL(file);
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

  return (
    <div className="flex flex-col w-96 max-sm:w-4/5">
      <img
        src={backgroundImage}
        alt="cassava-leaves"
        hidden
        onLoad={(e) => setImgElement(e.target)}
      />
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
        <input type="file" id="input-file" hidden onChange={fileHandler} />
        <p className="mt-7 bg-transparent">
          {!backgroundImage ? "Upload or drop image here" : ""}
        </p>
      </label>
      <button
        onClick={predictHandler}
        disabled={isDisable}
        className="mt-3 bg-languange hover:bg-hero hover:text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {!isDisable ? "Predict" : "Predicting..."}
      </button>
      <div className="flex mt-5 gap-6 -ml-7 items-center max-sm:m-0 max-sm:block">
        <p className="text-white max-sm:inline-block max-sm:my-2 max-sm:mr-2">
          No image? <span className="md:block">Try one of these:</span>
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
