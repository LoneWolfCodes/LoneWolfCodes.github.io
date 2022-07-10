/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/efe-kurnaz-RnCPiXixooY-unsplash-min.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream, Design & Develop.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                I trust that you have a solid understanding of My process from here on out. My process is quite lengthy, but that’s not your problem that’s why I am here. You can cancel at any time, please see my T&C’s. Feel free to ask any questions regarding Lone Wolf Codes.  
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                	Hush, most things happen in the background, so you don’t need to worry.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                	You keep the site you paid for even after the cancellation of step 8                </li>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                	I will take care of hosting. This keeps your site live and available for all to see.                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                	No need to worry about security as my hosting provider is trusted and secure.                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                	I create backups of my site for every change made.  
                </li>
              </ul>
              <Link href={`/T&C-list/T&C-list-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>T&C</span>
                </a>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
