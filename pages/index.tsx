import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Cookies from "../components/Cookies";
import Burger from "../components/Burger";

export default function Home() {
  const titles = [
    {
      id: 0,
      title: "NFTs Marketplace",
      description:
        "The first Phygital NFTs marketplace, for cutting edge Fine Art collectors",
      image: "./marketplace.png",
      alt: "The Aesthetes Marketplace",
      link: "https://marketplace.aesthetes.com/",
    },
    {
      id: 1,
      title: "Leonardo",
      description: "Become an Art creator minting your own collection",
      image: "./leonardo.png",
      alt: "Leonardo, our NFTs minter",
      link: "https://leonardo.aesthetes.com/",
    },
    {
      id: 2,
      title: "Michelangelo",
      description: "Our Art Space in the Metaverse",
      image: "./metaverse.png",
      alt: "Michelangelo, our Metaverse platform",
      link: "https://gallery.aesthetes.com/",
    },
    {
      id: 3,
      title: "Magazine",
      description: "A window on the Fine Art industry",
      image: "./magazine.png",
      alt: "The Aesthetes Magazine",
      link: "https://magazine.aesthetes.com/",
    },
  ];

  const [cookiesOpen, setCookiesOpen] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("cookies");
    if (!item) {
      setCookiesOpen(true);
    }
  }, []);

  const [showImage0, setShowImage0] = useState(true);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);

  const handleEnter = (opera: number) => {
    if (opera === 0) {
      setShowImage1(false);
      setShowImage2(false);
      setShowImage3(false);

      setShowImage0(true);
    }
    if (opera === 1) {
      setShowImage0(false);
      setShowImage2(false);
      setShowImage3(false);

      setShowImage1(true);
    }
    if (opera === 2) {
      setShowImage0(false);
      setShowImage1(false);
      setShowImage3(false);

      setShowImage2(true);
    }
    if (opera === 3) {
      setShowImage0(false);
      setShowImage1(false);
      setShowImage2(false);

      setShowImage3(true);
    }
  };

  const handleClickLink = (opera: number) => {
    if (opera === 0) {
      window.open("https://marketplace.aesthetes.com/", "_blank");
    }
    if (opera === 1) {
      window.open("https://leonardo.aesthetes.com/", "_blank");
    }
    if (opera === 2) {
      window.open("https://gallery.aesthetes.com/", "_blank");
    }
    if (opera === 3) {
      window.open("https://magazine.aesthetes.com/", "_blank");
    }
  };

  return (
    <>
      <Cookies open={cookiesOpen} setOpen={setCookiesOpen} />

      <Head>
        <title>Aesthetes ecosystem</title>
        <meta name="description" content="Aesthetes homepage ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex flex-col min-h-screen ">
        {/* Header */}
        <header className="relative flex items-center justify-between px-2 py-4 bg-black shadow-xl">
          <img
            src="./logo_registrato.png"
            className="w-40 mx-auto sm:w-52"
            alt=""
          />
          {/* <Burger /> */}
        </header>
        <div className="flex flex-wrap justify-center">
          <span style={{ animationDelay: "0.5s" }} className=" subtitleLG">
            Discover{" "}
          </span>
          <span style={{ animationDelay: "1s" }} className=" subtitleLG">
            our{" "}
          </span>
          <span style={{ animationDelay: "1.5s" }} className=" subtitleLG">
            Fine{" "}
          </span>
          <span style={{ animationDelay: "2s" }} className=" subtitleLG">
            Art{" "}
          </span>
          <span style={{ animationDelay: "2.5s" }} className=" subtitleLG">
            ecosystem
          </span>
        </div>
        <p className="subtitleSM animate-fade-in">
          Discover our Fine Art ecosystem
        </p>

        {/* Main < SM*/}
        <div className="grid max-w-md grid-cols-1 gap-4 p-4 mx-auto sm:hidden font-montserrat ">
          {titles.map((title) => (
            <a
              href={title.link}
              key={title.id}
              className="flex flex-col items-center justify-between p-4 text-center border cursor-pointer rounded-xl bg-rosino/10 hover:bg-rosino/30 group"
            >
              <div className="flex items-center justify-between animate-fade-in-left">
                <h1 className="text-2xl font-bold">{title.title}</h1>
                <BsArrowUpRight className="pl-1" />
              </div>
              <p className="pt-2 text-sm animate-fade-in-right group-hover:underline">
                {title.description}
              </p>
              <img
                className={`animate-fade-in h-60 mt-2   `}
                src={title.image}
                alt={title.title}
              />
            </a>
          ))}
        </div>

        {/* Images > SM  */}
        <div className="">
          {/* Marketplace */}
          <a href={titles[0].link}>
            <img
              //onClick={() => handleClickLink(titles[0].id)}
              className={`images      
            ${
              showImage0
                ? "opacity-100  "
                : "opacity-0 scale-y-110 skew-y-3 transition-none -z-10 "
            } `}
              src={titles[0].image}
              alt={titles[0].alt}
            />
          </a>

          {/* Michelangelo */}
          <a href={titles[2].link}>
            <img
              //onClick={() => handleClickLink(titles[2].id)}
              className={`images         
            ${
              showImage2
                ? "opacity-100"
                : "opacity-0 scale-y-110 skew-y-3 transition-none -z-10"
            } `}
              src={titles[2].image}
              alt={titles[2].alt}
            />
          </a>

          {/* Leonardo */}
          <a href={titles[1].link}>
            <img
              // onClick={() => handleClickLink(titles[1].id)}
              className={`images      
            ${
              showImage1
                ? "opacity-100"
                : "transition-none -z-10 opacity-0 scale-y-110 skew-y-3"
            } `}
              src={titles[1].image}
              alt={titles[1].alt}
            />
          </a>
          {/* Magazine */}
          <a href={titles[3].link}>
            <img
              // onClick={() => handleClickLink(titles[3].id)}
              className={`images     
            ${
              showImage3
                ? "opacity-100"
                : "transition-none -z-10 opacity-0 scale-y-110 skew-y-3"
            } `}
              src={titles[3].image}
              alt={titles[3].alt}
            />
          </a>
        </div>

        {/* Main > SM*/}
        <div className="flex-col justify-start flex-1 hidden w-full h-full px-10 pb-16 sm:flex sm:mb-16 sm:justify-around 2xl:justify-between font-montserrat">
          <div className="flex flex-col justify-between space-y-10 md:items-end md:space-y-0 md:flex-row animate-fade-in-left">
            {" "}
            <a
              href={titles[0].link}
              onMouseEnter={() => handleEnter(titles[0].id)}
              className={` main-titles  items-start  ${
                showImage0 ? "text-black" : "text-[#ccc]"
              }`}
            >
              {titles[0].title}

              <span className="items-start pl-2 subtitles">
                {titles[0].description}
              </span>
            </a>
            <a
              href={titles[1].link}
              onMouseEnter={() => handleEnter(titles[1].id)}
              className={`main-titles items-start md:items-end ${
                showImage1 ? "text-black" : "text-[#ccc] "
              } `}
            >
              {titles[1].title}
              <span className="md:text-right subtitles">
                {titles[1].description}
              </span>
            </a>
          </div>

          <div className="hidden mx-auto border-t border-[#ccc] sm:block animate-lineIncrease"></div>

          <div className="flex flex-col justify-between pt-10 space-y-10 md:items-end md:space-y-0 md:space-x-4 lg:space-x-0 md:flex-row animate-fade-in-right">
            <a
              href={titles[2].link}
              onMouseEnter={() => handleEnter(titles[2].id)}
              className={`main-titles  items-start   ${
                showImage2 ? "text-black" : "text-[#ccc]"
              }`}
            >
              {titles[2].title}
              <span className="pl-2 subtitles">{titles[2].description}</span>
            </a>

            <a
              href={titles[3].link}
              onMouseEnter={() => handleEnter(titles[3].id)}
              className={`main-titles items-start md:items-end ${
                showImage3 ? "text-black" : "text-[#ccc]"
              }`}
            >
              {titles[3].title}
              <span className="md:text-right subtitles">
                {titles[3].description}
              </span>
            </a>
          </div>
        </div>

        {/* Footer < SM*/}
        <footer className="footerSM ">
          <div className="order-2 lg:order-none lg:w-1/2">
            <p className="pt-2 text-xs text-center sm:text-sm lg:text-left">
              Copyright © 2023 Aesthetes S.r.l. - P.I. 12066980967
            </p>
          </div>

          <div className="flex flex-col px-2 lg:justify-end lg:w-1/2 lg:flex-row lg:pt-0 ">
            <div className="flex space-x-2">
              <a
                href="https://marketplace.aesthetes.com/legal/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm sm:text-base font-montserrat hover:underline "
              >
                PRIVACY
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://whitepaper.aesthetes.com/whitepaper.pdf"
                className="text-sm sm:text-base font-montserrat hover:underline"
              >
                WHITEPAPER
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://company.aesthetes.art"
                className="text-sm sm:text-base font-montserrat hover:underline"
              >
                ABOUT US
              </a>
            </div>
            <div className="flex justify-center pt-2 space-x-2 lg:pl-6 lg:pt-0">
              <AiOutlineTwitter className="social-icons " />
              <AiOutlineInstagram className="social-icons " />
              <AiFillFacebook className="social-icons " />
              <AiFillLinkedin className="social-icons " />
              <AiFillYoutube className="social-icons " />
            </div>
          </div>
        </footer>

        {/* Footer > SM */}
        <footer className="footerLG ">
          <div className="order-2 lg:order-none lg:w-1/2">
            <p className="pt-2 text-xs text-center sm:text-sm lg:text-left">
              Copyright © 2023 Aesthetes S.r.l. - P.I. 12066980967
            </p>
          </div>

          <div className="flex flex-col px-2 lg:justify-end lg:w-1/2 lg:flex-row lg:pt-0 ">
            <div className="flex space-x-2">
              <a
                href="https://marketplace.aesthetes.com/legal/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm sm:text-base font-montserrat hover:underline "
              >
                PRIVACY
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://whitepaper.aesthetes.com/whitepaper.pdf"
                className="text-sm sm:text-base font-montserrat hover:underline"
              >
                WHITEPAPER
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://company.aesthetes.art"
                className="text-sm sm:text-base font-montserrat hover:underline"
              >
                ABOUT US
              </a>
            </div>
            <div className="flex justify-center pt-2 space-x-2 lg:pl-6 lg:pt-0">
              <AiOutlineTwitter className="social-icons " />
              <AiOutlineInstagram className="social-icons " />
              <AiFillFacebook className="social-icons " />
              <AiFillLinkedin className="social-icons " />
              <AiFillYoutube className="social-icons " />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
