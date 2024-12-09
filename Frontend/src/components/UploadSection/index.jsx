import Content from "./Content";
import UploadImg from "./UploadImg";

const UploadSection = () => {
  return (
    <main id="container" className="w-full bg-upload">
      <section className="flex wrapper items-center w-11/12 mx-14 gap-52">
        <Content />
        <UploadImg />
      </section>
    </main>
  );
};

export default UploadSection;
