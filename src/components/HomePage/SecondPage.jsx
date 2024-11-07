import React from "react";

const SecondPage = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side - Steps and Testimonial (8 columns - 2/3) */}
        <div className="lg:col-span-8 p-8 lg:border-r-4 lg:border-[#88B92F]">
          <div className="max-w-3xl mx-auto space-y-8">
            <img src="Boxes.png" />

            {/* Computer Icon and Testimonial */}
            <div className="flex flex-col lg:flex-row justify-around mt-16 text-center">
              <div className="flex flex-col">
                <blockquote className="text-gray-300 text-2xl italic">
                  "Joining Quick Funded has
                  <br /> been a game-changer. The
                  <br /> support and knowledge-
                  <br /> sharing here have pushed
                  <br /> my trading skills to new
                  <br /> levels."
                  <br />
                </blockquote>
                <p className="text-gray-500 text-2xl">-Charlie Anderrson</p>
              </div>
              <div className="justify-center mt-8 lg:mt-0">
                <img
                  src="Computer.png"
                  alt="Trading Computer"
                  className="w-60 h-60 object-contain mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Community Section (4 columns - 1/3) */}
        <div className="lg:col-span-4 bg-opacity-20 bg-black p-8 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Community & Support Focus
            </h2>
            <p className="text-gray-300 font-medium text-xl mb-8 leading-relaxed">
              At Quick Funded, we're more than just traders—we're a
              collaborative community committed to each other's growth. With
              career-building resources, regular feedback sessions, and open
              discussions, our traders support one another in reaching their
              full potential. By sharing insights, strategies, and experiences,
              each member benefits from a network that fosters growth and
              resilience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <div>
                <a href="https://www.facebook.com/people/QuickFunded/61563946089420/?mibextid=ZbWKwL">
                  <img src="facebook.png" className="w-11" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/quick_funded/">
                  <img src="instagram.png" className="w-11" />
                </a>
              </div>
              <div>
                <a href="https://discord.com/invite/yHsWZdTY">
                  <img src="discord.png" className="w-12" />
                </a>
              </div>
              <div>
                <a href="https://x.com/QuickFunded?t=tgpu5IemaxXq5mdl_ul3SA&s=09">
                  <img src="twitter1.png" className="w-12 text-white" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/@quickfunded?si=8HMMwX425lPfL9KN">
                  <img src="youtube.png" className="w-11 text-white" />
                </a>
              </div>
              <div>
                <a href="https://t.me/quick_funded">
                  <img src="telegram.png" className="w-11 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
