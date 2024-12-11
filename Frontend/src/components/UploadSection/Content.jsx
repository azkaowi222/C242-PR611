const Content = () => {
  return (
    <div data-aos="zoom-in" className="w-500 max-sm:w-80 max-sm:pt-4">
      <img
        src="images/img-preview.png "
        alt="cassava"
        className="object-cover"
      />
      <div className="description my-5 max-sm:my-0">
        <h1 className="text-3xl font-bold text-center text-white max-sm:text-2xl">
          <span className="green max-sm:text-2xl">Cassava </span>Disease Detection
        </h1>
        <p className="text-xl text-white text-center mt-4 max-sm:text-lg">100% Automatically and Free</p>
        {/* <p>
          we make tools and models that can detect diseases in cassava plants to
          help cassava farmers to produce vegetables or tubers that can be
          processed into various healthy and quality foods.
        </p> */}
      </div>
    </div>
  );
};

export default Content;
