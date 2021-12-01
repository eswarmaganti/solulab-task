import React from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero-img.jpg";
const LandingScreen = () => {
  return (
    <section className="landing-screen">
      <Navbar />
      <div className="container-section -sm:px-5  h-full pt-20">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col items-end justify-center ">
            <div>
              <h3 className="uppercase text-xl font-bold">
                Exclusive NFT TICKET access
              </h3>
              <h1 className=" py-3 md:text-5xl text-2xl font-black text-secondary">
                PolyOne NFT Portal
              </h1>
              <p className="text-gray-600 md:text-lg text-sm">
                As a member of the PolyOne.IO you’ll be able to pre-access the
                platform before official launch, Collect & mint exclu sive NFT
                artwork by world renowned artists.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end  justify-center ">
            <div className="hero-image-container flex items-center ">
              <div className="card ">
                <div className="card-header ">
                  <img className="card-image" src={heroImage} />
                  <div className="card-head-content  ">
                    <h1 className="md:text-xl text-sm font-medium capitalize">
                      Membership NFT
                    </h1>
                    <h1 className="md:text-xl text-sm font-medium capitalize">
                      Access Card
                    </h1>
                    <h1 className="md:text-xl text-sm font-medium capitalize">
                      Silver
                    </h1>
                    <p className="md:text-xl text-xs font-medium capitalize text-right">
                      1/888
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingScreen;

{
  /*


*/
}
