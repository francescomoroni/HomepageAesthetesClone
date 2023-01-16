import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import Cookies from "../components/Cookies";
import Burger from "../components/Burger";

export default function Home() {
  const [cookiesOpen, setCookiesOpen] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("cookies");
    if (!item) {
      setCookiesOpen(true);
    }
  }, []);

  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(true);
  const [showImage3, setShowImage3] = useState(true);
  const [showImage4, setShowImage4] = useState(true);

  const handleEnter = (opera: number) => {
    if (opera === 1) {
      setShowImage2(false);
      setShowImage3(false);
      setShowImage4(false);

      setShowImage1(true);
    }
    if (opera === 2) {
      setShowImage1(false);
      setShowImage3(false);
      setShowImage4(false);

      setShowImage2(true);
    }
    if (opera === 3) {
      setShowImage1(false);
      setShowImage2(false);
      setShowImage4(false);

      setShowImage3(true);
    }
    if (opera === 4) {
      setShowImage1(false);
      setShowImage2(false);
      setShowImage3(false);

      setShowImage4(true);
    }
  };

  const handleLeave = (opera: number) => {
    if (opera === 1) {
      setShowImage1(false);
    }
    if (opera === 2) {
      setShowImage2(false);
    }
    if (opera === 3) {
      setShowImage3(false);
    }
    if (opera === 4) {
      setShowImage4(false);
    }
  };

  return (
    <>
      <Cookies open={cookiesOpen} setOpen={setCookiesOpen} />

      <Head>
        <title>Aesthetes ecosystem</title>
        <meta name="description" content="Aesthetes portal ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex flex-col min-h-screen bg-white ">
        {/* Header */}
        <header className="flex items-center py-4 bg-black shadow-xl">
          <img
            src="./logo_registrato.png"
            className="max-w-sm mx-auto"
            alt=""
          />
          <Burger />
        </header>

        {/* Images */}
        <div className="">
          {/* Marketplace */}
          <img
            className={`images 2xl:max-w-md 2xl:top-1/4 md:max-w-[15rem] md:ml-2 md:bottom-1/3 md:left-1/2 lg:right-1/4 lg:top-1/3 xl:max-w-sm lg:max-w-[18rem]  sm:max-w-[18rem] sm:bottom-36 sm:right-2
            ${
              showImage1
                ? "opacity-100 "
                : "opacity-0 scale-y-110 skew-y-3 transition-none -z-10 "
            } `}
            src="./marketplaceR.png"
            alt="Aesthetes Marketplace"
          />

          {/* Michelangelo */}
          <img
            className={`images 2xl:max-w-xl 2xl:left-1/3 lg:left-1/2 lg:top-1/4 xl:max-w-lg lg:max-w-md md:max-w-xs md:bottom-1/3 md:right-1/4 sm:max-w-[18rem] sm:bottom-36 sm:right-2
            ${
              showImage3
                ? "opacity-100"
                : "opacity-0 scale-y-110 skew-y-3 transition-none -z-10"
            } `}
            src="./metaverseR.png"
            alt="Michelangelo, our Metaverse platform"
          />

          {/* Leonardo */}
          <img
            className={`images 2xl:left-1/2 lg:left-1/3 lg:top-1/4 lg:max-w-sm xl:max-w-md md:max-w-xs md:bottom-1/3 md:right-1/4 sm:max-w-[18rem] sm:bottom-36 sm:right-2
            ${
              showImage2
                ? "opacity-100"
                : "transition-none -z-10 opacity-0 scale-y-110 skew-y-3"
            } `}
            src="./minterR.png"
            alt="Leonardo, our NFTs minter"
          />

          {/* Magazine */}
          <img
            className={`images 2xl:max-w-lg  lg:left-1/3 lg:top-1/4 lg:max-w-md md:max-w-xs md:bottom-1/3 md:right-1/4 sm:max-w-[18rem] sm:bottom-36 sm:right-2
            ${
              showImage4
                ? "opacity-100"
                : "transition-none -z-10 opacity-0 scale-y-110 skew-y-3"
            } `}
            src="./amagzR.png"
            alt="The Aesthetes Magazine"
          />
        </div>

        {/* Main */}
        <p className="px-4 pt-8 text-4xl text-center font-montserrat">
          Discover our Fine Art ecosystem
        </p>
        <div className="flex flex-col justify-start flex-1 w-full h-full pb-10 sm:mb-16 sm:justify-evenly font-montserrat">
          <div className="flex flex-col justify-around pl-10 space-y-10 md:items-end md:space-y-0 sm:overflow-hidden md:flex-row animate-fade-in-left">
            <a
              href="https://marketplace.aesthetes.com/"
              onMouseEnter={() => handleEnter(1)}
              //onMouseLeave={() => handleLeave(1)}
              className={`main-titles ${
                showImage1 ? "text-black" : "text-[#ccc]"
              }`}
            >
              NFTs <br /> Marketplace
              <span className="pr-20 subtitles">
                The first Phygital NFTs marketplace, for cutting edge Fine Art
                collectors
              </span>
            </a>
            <img
              className={` 
            sm:hidden
               `}
              src="./marketplace.png"
              alt=""
              width={200}
              height={200}
            />
            <a
              href="https://leonardo.aesthetes.com/"
              onMouseEnter={() => handleEnter(2)}
              //onMouseLeave={() => handleLeave(2)}
              className={`main-titles ${
                showImage2 ? "text-black" : "text-[#ccc] "
              } `}
            >
              Leonardo
              <span className="subtitles">
                Become an Art creator minting your own collection
              </span>
            </a>
          </div>

          <div className="hidden mx-auto border-t border-black sm:block animate-lineIncrease"></div>

          <div className="flex flex-col justify-around pt-10 pl-10 space-y-10 md:space-y-0 sm:overflow-hidden md:flex-row animate-fade-in-right">
            <a
              href="https://gallery.aesthetes.com/"
              onMouseEnter={() => handleEnter(3)}
              //onMouseLeave={() => handleLeave(3)}
              className={`main-titles ${
                showImage3 ? "text-black" : "text-[#ccc]"
              }`}
            >
              Michelangelo
              <span className="subtitles">Our Art Space in the Metaverse </span>
            </a>

            <a
              href="https://magazine.aesthetes.com/"
              onMouseEnter={() => handleEnter(4)}
              //onMouseLeave={() => handleLeave(4)}
              className={`main-titles ${
                showImage4 ? "text-black" : "text-[#ccc]"
              }`}
            >
              Magazine
              <span className="subtitles">
                A window on the Fine Art industry{" "}
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="lg:w-1/2">
            <p className="text-xs text-center sm:text-sm lg:text-left">
              Copyright © 2023 Aesthetes S.r.l. - P.I. 12066980967
            </p>
          </div>

          <div className="flex flex-col px-2 pt-2 lg:justify-end lg:w-1/2 lg:flex-row lg:pt-0 ">
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
