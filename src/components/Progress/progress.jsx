import React from "react";

const Progress = () => {
  return (
    <section className="app-process section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Choose your payment plan.
                <span className="right"></span>
              </h6>
              <h2>It's easy as 1,2,3</h2>
            </div>
          </div>
        </div>

        <div className="row">

          

          <div className="col-lg-4">
            <div className="item text-center">
              <span className="icon pe-7s-cart"></span>
              <h5>Choose your package</h5>
              <span className="step-number">Step 1</span>
              <p>
              Here at Lone Wolf Codes, I got a deal for everyone. Yes, that means you too. No matter your budget, we can work something out today!
              </p>
            </div>
          </div>

         <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-user"></span>
              <h5>Fill out my questionnaire.</h5>
              <span className="step-number">Step 2</span>
              <p>
              Tell me what your website is all about, and I will show it to you in no time. I want to know it all. So, you can get it all. 
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-cloud-download"></span>
              <h5>Download the quotation</h5>
              <span className="step-number">Step 3</span>
              <p>
              Once you have downloaded the quotation and you are comfortable with it. I will send you a contract, seal my end of the deal and send you a copy of my contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
