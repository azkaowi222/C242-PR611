const Content = () => {
  return (
    <div data-aos="zoom-in">
      <img
        src="images/img-preview.png "
        alt="cassava"
        width={500}
        className="object-cover"
      />
      <div className="description my-5">
        <h1 className="text-3xl font-bold text-center text-white">
          <span className="green">Potato </span>Disease Detection
        </h1>
        <p className="text-xl text-white text-center mt-4">100% Automatically and Free</p>
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
