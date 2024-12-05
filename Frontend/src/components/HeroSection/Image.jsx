import mainImage from "../../assets/images/leaves-removebg-preview.png";
const Image = () => {
  return (
    <div className="p-0 -mr-5">
      <img src={mainImage} alt="leafes" width={450} className="aspect-square object-contain" />
    </div>
  );
};

export default Image;
