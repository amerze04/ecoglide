import React, { createContext, useRef } from "react";
import logo from "../assets/logo.png";
import skuter1 from "../assets/skuter.png";
import skuter2 from "../assets/skuter2.png";
import skuter3 from "../assets/skuter3.png";
import img1 from "../assets/userimg1.jpg";
import img2 from "../assets/userimg2.png";
import img3 from "../assets/userimg3.jpg";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const testimonial1 = `"I never thought commuting could be this simple and eco-friendly! With the Ecoglide scooter, I've cut down on fuel costs while helping the environment. The design is sleek, and the ride is incredibly smooth. I highly recommend it to anyone looking for a sustainable way to get around!"`;
  const testimonial2 = `"Ecoglide has completely transformed the way I travel in the city. Their scooter is fast, quiet, and incredibly efficient. Not only am I saving money, but I also feel great knowing I'm reducing my carbon footprint. This is the future of urban transportation!"`;
  const testimonial3 = `"Switching to Ecoglide was one of the best decisions I've made. The scooter is not only eco-friendly but also very stylish and fun to ride. I can zip through traffic with ease, and it’s great knowing that I’m doing my part to help the environment. Highly recommended!"`;

  const aboutUs = [
    {
      title: "Our Story",
      text: "EcoGlide was born out of a passion for nature conservation and the desire to reduce pollution in urban areas. Founded a few years ago, our company quickly grew to become a leader in producing eco-friendly electric scooters. From the beginning, our goal has been to offer sustainable and efficient transportation options that are both affordable and convenient for everyday use.",
    },
    {
      title: "Our Mission",
      text: "EcoGlide's mission is simple: we aim to make the world a cleaner place through innovative solutions in e-mobility. Our electric scooters allow cities to reduce harmful emissions while providing our customers with a fast, economical, and fun way to get around.",
    },
    {
      title: "Environmental Awareness",
      text: "Our goal is to contribute to environmental preservation by using electric vehicles that produce zero emissions. Every EcoGlide scooter helps in the fight against air pollution and reduces the carbon footprint.",
    },
    {
      title: "Innovation",
      text: "We continuously improve our products by using the latest technologies. Innovation is key to our mission of making vehicles more efficient, eco-friendly, and easier to use.",
    },
  ];

  const users = [
    {
      name: "Mark Johnson",
      image: img2,
      text: testimonial1,
    },

    {
      name: "Emily Davis",
      image: img1,
      text: testimonial2,
    },

    {
      name: "James Thompson",
      image: img3,
      text: testimonial3,
    },
  ];

  const sectionRef = useRef(null);

  const contextValue = {
    logo,
    skuter1,
    skuter2,
    skuter3,
    users,
    sectionRef,
    aboutUs
  };

  return (
    <PageContext.Provider value={contextValue}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
