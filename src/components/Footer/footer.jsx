/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";


const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
            <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>34 Pickerill St, Retreat, Cape Town, 7965</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email me</h6>
                    <p>lonewolfecodes@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Howell at me</h6>
                    <p>+27 21 709 0248</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
              <h5>Subscribe to Lone Wolf Blogs </h5>

                {/* <img src={appData.lightLogo} alt="" /> */}
              </div>
              {/* <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div> */}
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
                <br/>
                <br/>

              <div className="title  Copy-right">
                <p>
                
                 Made by Caleb Mutombo.  <span/> <span/> At Lone Wolf Codes. <span/> <span/>

               

                    <Link
                    href="/LoneWolfCodes/Team-dark"
              
                  >
                    <a target="_blank"> <span/>My code Is your command.</a>
                  </Link>.
                </p>
                
              

              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item md-mb50">
               <div className="title"> 
                 <h5>Lone Wolf Bolgs</h5> 
              </div>

              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <img src="/img/blog/01.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                        Why you should become a freelancer.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">LONE WOLF BLOGS</span> <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <img src="/img/blog/01.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                        Why you should not become a freelancer.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                      <span className="date">LONE WOLF BLOGS</span> <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li> 

                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <img src="/img/blog/01.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                        How to become a freelancer this year.
                        </p>
                        
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                      <span className="date">LONE WOLF BLOGS</span> <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li> 

                {/* <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <img src="/img/logo.png" alt="" />
              </a>
              <p>
              My code is your command.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/LoneWolfCodes/Home-dark">Home</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/LoneWolfCodes/Team-dark">Team</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/Portfolio/Portfolio-dark">Portfolio</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/LoneWolfCodes/Process-dark">Process</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/about/about-dark">About</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Links</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/contact/contact-dark">Contact</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/blog/blog-dark">Blog</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/LoneWolfCodes/FAQ">FAQ</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/T&C-list/T&C-list-dark">T&C</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/Price/Price-Details-dark">Price</a>
                </li>
              </ul>
            </div>
          </div>
         
          <div  >
          <div className="item">
          <div className="item-clumn links">
              <h5 className="title mb-30">Social Links</h5>

              <div className="item">
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
          </div>

            </div>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contact</h5>
              <div className="info">
                <span>Email Address</span>
                <h6>
                  <a href="#0">support@gmail.com</a>
                </h6>
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="text-center">
                <p>© 2022 Vie. All Rights Reserved</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <br/>
      <br/>


      <div className="text-center">
         <p>© 2022 Lone Wolf Codes. All Rights Reserved</p>
        </div>
      
    </footer>
    
  );
};


<DarkTheme mobileappstyle/>

export default Footer;


