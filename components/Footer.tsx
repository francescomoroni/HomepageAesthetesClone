import Social from "./Social";

export default function Footer() {
  return (
    <footer className="footerSM sm:footerLG">
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
  );
}
