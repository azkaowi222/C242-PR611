import Content from "./Content";
import UploadImg from "./UploadImg";

const UploadSection = ({
  predictHandler,
  setImgElement,
  imgElement,
  isDisable,
}) => {
  return (
    <main id="container" className="w-full bg-upload">
      <section className="flex wrapper items-center w-11/12 mx-14 gap-52 max-sm:flex-col max-sm:justify-center max-sm:m-0 max-sm:w-full max-sm:gap-10 max-sm:pb-7">
        <Content />
        <UploadImg
          predictHandler={predictHandler}
          setImgElement={setImgElement}
          imgElement={imgElement}
          isDisable={isDisable}
        />
      </section>
    </main>
  );
};

export default UploadSection;
