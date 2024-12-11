const Image = () => {
  return (
    <div className="max-sm:flex max-sm:w-full max-sm:justify-end">
      <div
        className="p-0 -mr-7 w-500 max-sm:w-80 max-sm:"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <img
          src="images/leaves-removebg-preview.png"
          alt="leafes"
          className="aspect-square object-contain"
        />
      </div>
    </div>
  );
};

export default Image;
