/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    
    <section className="about-cr space-me">
       <br/>
       <br/>
      <div className="container-fluid">
        <div className="row">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
          <div className="expad col-lg-6 img md-mb50">
          <img src="/img/intro/62659d6163b917c18eabf40c_unnamed.jpg" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font my-skills-pad-left">My Skills</h3>
              <h5 className="co-tit mb-15">
              Here's what to expect.
               </h5>
              <p>
              Over the past 3 years, I have learned a variety of skills and this is how far I have come to create only the most extravagant websites, remarkable apps and cutting-edge SEO strategies.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">HTML</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">CSS</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="92%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Apps Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="82%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">SEO</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="78%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Java Script</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="76%"></div>
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

export default AboutUs5;
