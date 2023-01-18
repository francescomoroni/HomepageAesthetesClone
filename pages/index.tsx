import Head from "next/head";
import { BsArrowUpRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Cookies from "../components/Cookies";
import Social from "../components/Social";

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
      link: "https://artmagz.com/",
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

  return (
    <>
      <Cookies open={cookiesOpen} setOpen={setCookiesOpen} />

      <Head>
        <title>Aesthetes ecosystem</title>
        <meta name="description" content="Aesthetes ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex flex-col min-h-screen ">
        {/* Logo title */}
        <header className="relative flex items-center justify-between px-2 py-4 bg-black shadow-xl">
          <img
            src="./logo_registrato.png"
            className="w-40 mx-auto sm:w-52"
            alt=""
          />
        </header>

        {/* Subtitle SM */}
        <p className="subtitleSM animate-fade-in">
          Discover our Fine Art ecosystem
        </p>

        {/* Subtitle > SM */}
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

        {/* Main < SM */}
        <div className="grid max-w-md grid-cols-1 gap-4 p-4 mx-auto sm:hidden ">
          {titles.map((title) => (
            <a
              href={title.link}
              target="_blank"
              rel="noreferrer noopener"
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
          <a href={titles[0].link} target="_blank" rel="noreferrer noopener">
            <img
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
          <a href={titles[2].link} target="_blank" rel="noreferrer noopener">
            <img
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
          <a href={titles[1].link} target="_blank" rel="noreferrer noopener">
            <img
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
          <a href={titles[3].link} target="_blank" rel="noreferrer noopener">
            <img
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
        <div className="flex-col justify-start flex-1 hidden w-full h-full px-10 pb-16 sm:flex sm:mb-16 sm:justify-around 2xl:justify-between ">
          <div className="flex flex-col justify-between space-y-10 md:items-end md:space-y-0 md:flex-row animate-fade-in-left">
            <a
              href={titles[0].link}
              target="_blank"
              rel="noreferrer noopener"
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
              target="_blank"
              rel="noreferrer noopener"
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

          <div className="hidden mx-auto border-t border-[#ccc] sm:block animate-lineIncrease -z-10"></div>

          <div className="flex flex-col justify-between pt-10 space-y-10 md:items-end md:space-y-0 md:space-x-4 lg:space-x-0 md:flex-row animate-fade-in-right">
            <a
              href={titles[2].link}
              target="_blank"
              rel="noreferrer noopener"
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
              target="_blank"
              rel="noreferrer noopener"
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

        {/* Footer < SM */}
        <footer className="footerSM ">
          <div className="order-2 lg:order-none lg:w-1/2">
            <p className="pt-2 text-xs text-center sm:text-sm lg:text-left ">
              Copyright © 2023 Aesthetes S.r.l. - P.I. 12066980967
            </p>
          </div>

          <div className="flex flex-col px-2 lg:justify-end lg:w-1/2 lg:flex-row lg:pt-0 ">
            <div className="flex space-x-2">
              <a
                href="https://marketplace.aesthetes.com/legal/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm sm:text-base hover:underline "
              >
                PRIVACY
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://whitepaper.aesthetes.com/whitepaper.pdf"
                className="text-sm sm:text-base hover:underline"
              >
                WHITEPAPER
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://company.aesthetes.art"
                className="text-sm sm:text-base hover:underline"
              >
                ABOUT US
              </a>
            </div>
            <Social />
          </div>
        </footer>

        {/* Footer > SM */}
        <footer className="footerLG ">
          <div className="order-2 lg:order-none lg:w-1/2">
            <p className="pt-2 text-xs text-center lg:pt-0 sm:text-sm lg:text-left">
              Copyright © 2023 Aesthetes S.r.l. - P.I. 12066980967
            </p>
          </div>

          <div className="flex flex-col px-2 lg:justify-end lg:w-1/2 lg:flex-row lg:pt-0 ">
            <div className="flex space-x-2">
              <a
                href="https://marketplace.aesthetes.com/legal/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm sm:text-base hover:underline "
              >
                PRIVACY
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://whitepaper.aesthetes.com/whitepaper.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm sm:text-base hover:underline"
              >
                WHITEPAPER
              </a>
              <p className="text-sm sm:text-base">|</p>
              <a
                href="https://company.aesthetes.art"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm sm:text-base hover:underline"
              >
                ABOUT US
              </a>
            </div>
            <Social />
          </div>
        </footer>
      </div>
    </>
  );
}
