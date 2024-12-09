import { useState } from "react";

const UploadImg = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

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
        <input type="file" id="input-file" hidden onChange={fileHandler} />
        <p className="mt-7 bg-transparent">
          {!backgroundImage ? "Upload or drop image here" : ""}
        </p>
      </label>
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
