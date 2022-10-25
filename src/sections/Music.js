import React from "react";
import Heading from "../components/Heading";
import { MdMusicNote } from "../components/Icons";
import { graphql, useStaticQuery } from "gatsby";

const Music = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "music" } }) {
        html
      }
    }
  `);

  return (
    <section id="music">
      <Heading icon={MdMusicNote} title="Music" />

      
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWX83CujKHHOn"
        width="100%"
        height="500"
        frameBorder="0"
        className="mt-5"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </section>
  );
};


export default Music;