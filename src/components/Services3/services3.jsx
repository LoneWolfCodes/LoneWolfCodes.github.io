import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div>
        <div className=" container center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn">
              My 8 STEP  
              </h6>
              <h3 className="wow color-font ">
              WEB DEVELOPMENT PLAN  <br/>IN DETAIL.
              </h3>
              <p>
              Whether you are an individual freelancer, NGO, NPO, an established business, or just starting out. Here at Lone Wolf Codes, we have an 8-step web development plan to suite your needs and budget without compromising on quality or performance. Here is My step-by-step methodology for webdevelopment.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
        <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 1</h3>
                <i className="pe-7s-target"></i>
              </span>
              <h5>GOAL IDENTIFICATION</h5>
              <p>
              In this first step we,I need to understand how I can help YOU. I need to know what is your website for, this way I can determine exactly what it needs. Whether it’s a landing page, Magazine, E-commerce, Blogs, Portfolio, Social media, Directory or a Contact Page. Every website made here is unique, and it all starts here.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke ">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-3 col-md-6 items active md-mb30 ">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 2</h3>
                <i className="ion-ios-list"></i>
              </span>
              <h5>SCOPE DEFINITION</h5>
              <p>
              Once we have classified your website, I can determine exactly what will go into your website. This may be fonts, colours, text, pictures, videos and or animations, the number of pages and the features it might include. Please avoid setting out with one goal in mind, but then gradually expanding and evolving. This will hinder the launch of the site. I can however make many changes in the maintenance phase step 8 
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" >
              <span className="icon wow color-font">
                <h3>Step 3</h3>
                <i className="ion-map"></i>
              </span>
              <h5>SITEMAP AND WIREFRAME CREATION</h5>
              <p>
              With the scope at hand and clearly defined. We begin with the sitemap. Think of this as the floor plan of a building, here is where we define where all the content and features from the scope will go, it clarifies the idea of the website information, and architecture and explains the relationships between the various pages and content elements. Although a wireframe doesn’t contain any final design elements, it does act as a guide for how the site will ultimately look. It is also the inspiration for the formatting of various elements.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>


          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 4</h3>
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>CONTENT CREATION</h5>
              <p>
              With the sitemap done. I can start creating content for the individual pages, always keeping search engine optimization (SEO) in mind to help keep pages focused on a single topic. Without it, the site visitors will have no actions to take on the site. Content also boosts a site’s visibility for search engines. The practice of creating and improving content to rank well in search is known as search engine optimization or SEO.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>          
        </div>

        <br/>
        <br/>
        


        <div className="row">
        <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 5</h3>
                <i className="ion-ios-eye-outline"></i>
              </span>
              <h5>VISUAL ELEMENTS</h5>
              <p>
              From the scope, we will begin placing the right elements into place. This starts with visual branding. Depending on the client, this may already be well-defined. If not, I will begin with style tiles, mood boards, and element collages. Finally, it’s time to create the visual style for the site. This part of the design process will often be shaped by existing branding elements, colour choices, and logos. Please remember that massive, beautiful images can seriously slow down your site. So, I use Optimizilla to compress images without losing quality, saving on page-load times. 
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke ">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-3 col-md-6 items active md-mb30 ">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 6</h3>
                <i className="ion-bug"></i>
              </span>
              <h5>TESTING</h5>
              <p>
              We need to know that the site is responsive, nothing really complicated. It just means that my site adjusts its width and height for different screen sizes, like phones, tablets and laptops or wide screens like smart TVs. I use a combination of manual browsing with automated site crawlers to identify everything from user experience issues to simple broken links.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" >
              <span className="icon wow color-font">
                <h3>Step 7</h3>
                <i className="pe-7s-rocket"></i>
              </span>
              <h5>LAUNCH</h5>
              <p>
              It includes planning both launch timing and communication strategies — i.e., when will the site launch and how will you let the world know? When everything has been thought through and thoroughly tested to my satisfaction, it’s time to lunch. Finally, it is done. The moment we have been working for.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>


          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 8</h3>
                <i className="ion-hammer"></i>
              </span>
              <h5>MAINTAINS</h5>
              <p>
              There may be still some elements that need change. Websites are a fluid and ongoing process that requires constant maintenance. Web development is all about finding the right balance between form and function. Once the site goes live, please bear in mind that I continually run user testing on new content and features, monitor analytics, and refining your messaging.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default Services3;
