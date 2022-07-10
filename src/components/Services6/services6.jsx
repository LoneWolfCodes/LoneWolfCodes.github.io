import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels-vedanti-242494-min.jpg)" }}
          >
            <h6 className="numb"> Step 01</h6>
            <h5 className="color-font">GOAL IDENTIFICATION</h5>
            <p>
            Clarity is key so, tell me where do you want to take your website and I will show you how to get there.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/glenn-carstens-peters-RLw-UC03Gwc-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 02</h6>
            <h5 className="color-font">SCOPE DEFINITION</h5>
            <p>
            Like a chef preparing the ingredients for a five star meal, I prepare the components  for your new world class website.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/faizur-rehman-dJpupM4LiS4-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 03</h6>
            <h5 className="color-font">SITEMAP & WIREFRAMES</h5>
            <p>
            Know the purpose of the site and it;s components, can only mean it’s time to plan the construction.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/peter-stumpf-FhZEpxtTI_Y-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 04</h6>
            <h5 className="color-font">CONTENT CREATION</h5>
            <p>
            I will make sure that the images, video, text and animation send one unified message from you to your clients/ customers 
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
        </div>

        <div className="row justify-content-center">
        <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/kevin-nalty-BPQzHsFD9ng-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 05</h6>
            <h5 className="color-font">VISUAL ELEMENTS</h5>
            <p>
            One by one, with creativity I will delicately place all the elements of your site in just the right place.             </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/luke-chesser-JKUTrJ4vK00-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 06</h6>
            <h5 className="color-font">TESTING</h5>
            <p>
            To ensure that all functions  and elements are working harmoniously, I will put your site under multiple regress tests.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/nasa-JkaKy_77wF8-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 07</h6>
            <h5 className="color-font">LAUNCH</h5>
            <p>
            5, 4, ,3 ,2 ,1 we got lift off. We are receiving live satellite images of a fully functional website. At this point its all systems go!
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/ken-suarez-4IxPVkFGJGI-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 08</h6>
            <h5 className="color-font">MAINTAINS</h5>
            <p>
            No the job is not yet complete, believe it all not, sites like people need a little TLC and a place to call home.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Services6;
