import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";
import styles from "./Hero.module.css";
import Typist from "react-typist";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }

    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div className="max-w-lg mx-auto" data-depth="0.4">
            <GatsbyImage {...data.photo.childImageSharp} />
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="sr-only">
            Sudeep's Home on the Web
            Anna University - Computer Science & Engineering
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <h1 className={`${styles.header} leading-tight`}>
              <span class="bg-clip-text text-transparent bg-gradient-to-br from-blue-700 via-blue-500 to-teal-400">
                Hi, I'm Sudeep
              </span> <br />
            </h1>
            
            <Subtitle onDone={() => setShowSocial(true)} />

            {/* <div className="w-full md:w-auto h-6 my-6">
              {showSocial && <Social />}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
