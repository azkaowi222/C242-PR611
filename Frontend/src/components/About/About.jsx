const About = () => {
  return (
    <section
      className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gray-200"
      id="about"
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex ">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    A story from GreenLeaves
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    This project idea came from our talks about the obstacles
                    faced by small-scale farmers in Indonesia, notably in
                    diagnosing illnesses in staple crops like cassava and
                    potatoes. Significant crop losses frequently result from
                    farmers' lack of access to trustworthy, reasonably priced
                    disease detection technology.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-black hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Deep Experience
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Improve crop disease prediction with cutting-edge
                      technology.
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-black hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      AI-Based Projects
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Hundreds of projects have successfully supported cassava
                      farmers.
                    </p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-black hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Award for Innovation
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Recognition for smart solutions in agriculture.
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-black hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Farmer Trust
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Our technology makes it easier for farmers to understand
                      the health of their crops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="images/cassava-about.jpg"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
