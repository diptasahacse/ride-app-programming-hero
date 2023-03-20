import React from "react";
const Hero = () => {
  return (
    <div className="hero inner-hero-section min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            className="w-25"
            src={
              "https://templatekit.jegtheme.com/taxico/wp-content/uploads/sites/190/2021/10/app3-ST8ZZE3-e1635131579605.png"
            }
          />
        </div>
        <div className="text-white">
          <h1 className="text-5xl font-bold">Enjoy Your <br/> Comfortable Trip.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
