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
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);

  const handleEnter = (opera: number) => {
    if (opera === 1) {
      setShowImage1(true);
    }
    if (opera === 2) {
      setShowImage1(false);
      setShowImage2(true);
    }
    if (opera === 3) {
      setShowImage1(false);
      setShowImage3(true);
    }
    if (opera === 4) {
      setShowImage1(false);
      setShowImage4(true);
    }
    if (opera === 5) {
      setShowImage1(false);
      setShowImage5(true);
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
    if (opera === 5) {
      setShowImage5(false);
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
          <img
            className={`images right-15 
            ${
              showImage1
                ? "opacity-100 "
                : "opacity-0 scale-y-110 skew-y-3 transition-none -z-10 "
            } `}
            src="./marketplace.png"
            alt=""
            width={400}
            height={400}
          />

          <img
            className={`images  
            ${
              showImage3
                ? "opacity-100"
                : "opacity-0 scale-y-110 skew-y-3 transition-none -z-10"
            } `}
            src="./metaverse.png"
            alt=""
            width={600}
            height={600}
          />

          <img
            className={`images 
            ${
              showImage2
                ? "opacity-100"
                : "transition-none -z-10 opacity-0 scale-y-110 skew-y-3"
            } `}
            src="./minter.png"
            alt=""
            width={600}
            height={600}
          />
          <img
            className={`images 
            ${
              showImage4
                ? "opacity-100"
                : "transition-none -z-10 opacity-0 scale-y-110 skew-y-3"
            } `}
            src="./amagz.png"
            alt=""
            width={600}
            height={600}
          />
        </div>

        {/* Main */}
        <main className="flex flex-col justify-start flex-1 w-full h-full py-10 sm:py-24 sm:mb-16 sm:justify-between font-syne">
          <div className="flex flex-col justify-around pl-10 space-y-10 md:space-y-0 sm:overflow-hidden md:flex-row animate-fade-in-left">
            <a
              href="https://marketplace.aesthetes.com/"
              onMouseEnter={() => handleEnter(1)}
              onMouseLeave={() => handleLeave(1)}
              className={`main-titles ${
                showImage1 ? "text-black" : "text-[#ccc]"
              }`}
            >
              NFTs <br /> Marketplace
              <span className="block pt-2 text-base">
                The first Phygital NFTs marketplace, for cutting edge FineArt
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
              href="https://metaverse.aesthetes.com/"
              onMouseEnter={() => handleEnter(2)}
              onMouseLeave={() => handleLeave(2)}
              className={`main-titles ${
                showImage2 ? "text-black" : "text-[#ccc] "
              } `}
            >
              Leonardo
              <span className="block pt-2 text-base">
                Become an Art creator minting your own collection
              </span>
            </a>
          </div>

          <div className="hidden mx-auto border-t border-black sm:block animate-lineIncrease"></div>

          <div className="flex flex-col justify-around pt-10 pl-10 space-y-10 md:space-y-0 sm:overflow-hidden md:flex-row animate-fade-in-right">
            <a
              href="https://leonardo.aesthetes.com/"
              onMouseEnter={() => handleEnter(3)}
              onMouseLeave={() => handleLeave(3)}
              className={`main-titles ${
                showImage3 ? "text-black" : "text-[#ccc]"
              }`}
            >
              Michelangelo
              <span className="block pt-2 text-base">
                Our Art Space in the Metaverse{" "}
              </span>
            </a>

            <a
              href="https://magazine.aesthetes.com/"
              onMouseEnter={() => handleEnter(4)}
              onMouseLeave={() => handleLeave(4)}
              className={`main-titles ${
                showImage4 ? "text-black" : "text-[#ccc]"
              }`}
            >
              Magazine
              <span className="block pt-2 text-base">
                A window on the fine art{" "}
              </span>
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="lg:w-1/2">
            <p className="text-xs text-center sm:text-sm lg:text-left">
              Copyright © 2023 Aesthetes S.r.l. - P.I. 12066980967
            </p>
          </div>

          <div className="flex flex-col lg:w-1/2 lg:flex-row">
            <div className="flex flex-1 px-2 pt-2 space-x-2 lg:pt-0 sm:space-x-6">
              <a
                href="https://marketplace.aesthetes.com/legal/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="font-montserrat "
              >
                PRIVACY
              </a>
              <p>|</p>
              <a
                href="https://company.aesthetes.art"
                className="font-montserrat"
              >
                ABOUT US
              </a>
              <p>|</p>
              <a
                href="https://whitepaper.aesthetes.com/whitepaper.pdf"
                className="font-montserrat"
              >
                WHITEPAPER
              </a>
            </div>
            <div className="flex px-2 pt-2 mx-auto space-x-2 lg:pt-0">
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
