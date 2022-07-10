/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Lone Wolf Codes Portfolio
              </h6>
              <h3 className="wow color-font">
                Up comming web design & <br /> Available templets.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".ecom">E-COMMERCE</span>
              <span data-filter=".blog"> BLOGS</span>
              <span data-filter=".port">PORTFOLIOS</span>
              <span data-filter=".funnel">FUNNEL PAGES</span>
              <span data-filter=".landing">Marketing</span>

            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items ecom lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Restaurant</h6>
                  <p>Go online with everything taste. Restaurant websites are available right here.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/9dcad93f-e286-43cb-81d7-6c620ce729a6.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Food</Link>
                  </span>
                  <span>
                    <Link href="#0">Meal</Link>
                  </span>
                  <span>
                    <Link href="#0">Eat</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items ecom wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Accessory Shop</h6>
                  <p>Sell only the latest fashion accessories today with your very own only luxury branded bags store.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/62429cac-65ec-424a-bf8d-2fb5b2c6ba76.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Fashion</Link>
                  </span>
                  <span>
                    <Link href="#0">Style</Link>
                  </span>
                  <span>
                    <Link href="#0">Clothes</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items blog wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Fashion Blogger</h6>
                  <p>The world is waiting to hear about all you have to tell us about fashion, swag, style or whatever it's called these days.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/1596fae6-5733-400e-809f-d496b54602a0.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works4/works4-dark">Trends</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">Fashion</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">Make up</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items blog graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Homemade Recipe Blog.</h6>
                  <p>Have a passion for cooking? Why not share it with the rest of the world? We are all waiting to read about what you got cooking.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/2887c42b-744c-4304-8fdc-38b2b4f356b2.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Recipie </Link>
                  </span>
                  <span>
                    <Link href="#0">Food</Link>
                  </span>
                  <span>
                    <Link href="#0">Eat</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items blog wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Personal Blog</h6>
                  <p>This one is not for the faint-hearted. If you got a story to tell, build a community of like-minded people who may have the same thought and feeling as you, People who have lived the same experiences.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/716c5431-9995-4a92-a439-85425a016501.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Life </Link>
                  </span>
                  <span>
                    <Link href="#0">Story</Link>
                  </span>
                  <span>
                    <Link href="#0">Experiences</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items blog wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Travel Blog</h6>
                  <p>Go anywhere and everywhere, but don't forget to take us with you. Create a travel blog that will not only tell the world where you have been, but how you got there.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/d847951e-d8e6-4f7c-8dac-3cdad6321a99.webp " alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Location</Link>
                  </span>
                  <span>
                    <Link href="#0">Foreign</Link>
                  </span>
                  <span>
                    <Link href="#0">People</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items port wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Life Couch Portfolio</h6>
                  <p>Take your personal development career to new heights with an online resume for the world to see.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/d980ac6b-24a4-4d08-8c78-6a1236f95230.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Personal development</Link>
                  </span>
                  <span>
                    <Link href="#0">Coach</Link>
                  </span>
                  <span>
                    <Link href="#0">Mentel Health</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items port wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Multipurpose Portfolio</h6>
                  <p>A portfolio for whatever you do! We got it right here. Tell your new employer or clients exactly what you offer in a unique way.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/da5074de-5c38-4d93-a796-a0491cfb8a10.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Resume</Link>
                  </span>
                  <span>
                    <Link href="#0">Skill</Link>
                  </span>
                  <span>
                    <Link href="#0">Qulifications</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items funnel wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Sales Website</h6>
                  <p>Get those sale numbers up with our multipage funnel sites. That converts your prospect to clients or customers.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/23f6c309-b426-4e9d-9c7b-164b43bb224c.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Consumer</Link>
                  </span>
                  <span>
                    <Link href="#0">Sell</Link>
                  </span>
                  <span>
                    <Link href="#0">Conversion</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items landing wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Marketing Site</h6>
                  <p>Got a service or product you want to tell us about, get the word out there with your very own marketing website.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/f33310a6-2800-4a20-ac71-ea59e5c8f656.webp" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Advertising</Link>
                  </span>
                  <span>
                    <Link href="#0">Product</Link>
                  </span>
                  <span>
                    <Link href="#0">Services</Link>
                  </span>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
