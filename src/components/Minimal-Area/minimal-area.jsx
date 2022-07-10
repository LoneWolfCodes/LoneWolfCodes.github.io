/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/cut-in-a-moment-QzcynTZmOcw-unsplash-min-min.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              

              <h4 className="wow color-font">About Lone Wolf Codes.</h4>
              <p className="wow txt" data-splitting>
              In a nutshell, Lone Wolf Codes is a Web Development company run by a single person. At the moment Lone Wolf Codes products and services are limited to Web Development, but soon it will grow into a digital nomad network, that offers a wider range of digital products and services by collaborating with freelancers, to cultivate smart ideas and turn them into services for start-ups and even seasoned players. 
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>
                  In the not-so-distant 5 years from now. Lone Wolf Codes seeks to expand the by connecting freelancers internationally to provide 7+ digital products and services to NGO's, NOP's, start-ups and established companies. From  1 man to 50 people and from just web development to content creation, accounting, sales, creative writing, systems analysis, business consulting, app development and any other digital product or service offered by freelancers.                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> My Mission
                  </h6>
                  <p>
                  To become the biggest one-stop destination for all digital product and services needs, by being the largest employer of freelancers. I will achieve this by keeping things simple and removing a lot of lengthy processes and unnecessary expenses, like overheads of renting large buildings, buying office equipment, company cars, and holiday getaway trips. Each collaborator of Lone Wolf Codes will be an independent contractor / freelancer or digital nomad if you prefer.                  
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Lone Wolf Codes?
                  </h6>
                  <p>
                  I offer the best websites and services, at the lowest cost at the fastest time with no compromise on quality as I am a highly skilled individual. When you choose Lone Wolf Codes. You are getting more bang for my buck. So, if you are looking for an awesome website at the lowest price with the highest quality and fastest delivery, that saves you time and money. Then look no further than Lone Wolf Codes.                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </section>
  );
};

export default MinimalArea;
