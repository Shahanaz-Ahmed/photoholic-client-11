import React from "react";
import Banner from "../Banner/Banner";

const About = () => {
  return (
    // <div className="hero">
    //   <div className="hero-content sm:flex-col lg:flex-row-reverse">
    //     <div className="w-1/2">
    //       <Banner></Banner>
    //     </div>
    //     <div className="w-1/2">
    //       <h1 className="text-5xl font-bold">About PhotoHolic</h1>
    //       <div>
    //         <p className="py-6 text-2xl">
    //           I'm not just your photographer - I'm your friend. Nothing is more
    //           important to me than planning a wedding or elopement with you that
    //           is easy, stress-free, and speaks to your soul.Your story deserves
    //           to be told in a way that’s real for you. You've found your twin
    //           flame, your mirror soul, and that's something that deserves to be
    //           immortalized through photography and film. We want to capture this
    //           connection and tell your story in its truest form. That way, when
    //           you look back in 10, 20, even 50 years, you’ll know it was real.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2 min-h-sm rounded-lg shadow-2xl">
          <Banner></Banner>
        </div>
        <div className="w-1/2 px-5">
          <h1 className="text-5xl font-bold">About PhotoHolic</h1>
          <p className="py-6 text-3xl">
            I'm not just your photographer - I'm your friend. Nothing is more
            important to me than planning a wedding or elopement with you that
            is easy, stress-free, and speaks to your soul.Your story deserves to
            be told in a way that’s real for you. You've found your twin flame,
            your mirror soul, and that's something that deserves to be
            immortalized through photography and film. We want to capture this
            connection and tell your story in its truest form. That way, when
            you look back in 10, 20, even 50 years, you’ll know it was real.
          </p>
        </div>
      </div>
    </div>
    // <div className="my-12">
    //   <div className="flex flex-col w-4/5 mx-auto lg:flex-row m-0 p-0">
    //     <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
    //       <Banner></Banner>
    //     </div>
    //     <div className="divider lg:divider-horizontal"></div>
    //     <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
    //       <div>
    //         <h1 className="text-5xl font-bold">About PhotoHolic</h1>
    //         <p className="py-6">
    //           I'm not just your photographer - I'm your friend. Nothing is more
    //           important to me than planning a wedding or elopement with you that
    //           is easy, stress-free, and speaks to your soul.Your story deserves
    //           to be told in a way that’s real for you. You've found your twin
    //           flame, your mirror soul, and that's something that deserves to be
    //           immortalized through photography and film. We want to capture this
    //           connection and tell your story in its truest form. That way, when
    //           you look back in 10, 20, even 50 years, you’ll know it was real.{" "}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
