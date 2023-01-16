import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Burger() {
  return (
    <Popover className="z-20 ">
      <Popover.Button className="flex items-center mr-1 text-white hover:scale-105 focus:outline-none sm:hidden">
        <HiMenu className="w-10 h-10 " />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed inset-0 overflow-hidden">
          <Popover.Panel className="fixed inset-0 flex flex-col h-screen transition origin-top-right transform bg-black sm:hidden">
            {({ close }) => (
              <>
                <div className="flex items-center justify-between px-5 pt-5">
                  <img
                    src="./logo_registrato.png"
                    className="object-contain w-1/2"
                    alt=""
                  />
                  <AiOutlineClose
                    onClick={() => close()}
                    className="w-10 h-10 text-white transition-all duration-200 ease-in-out cursor-pointer hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col items-start pt-40 pl-4 space-y-10 text-2xl text-white sm:pl-10 font-syne sm:text-3xl md:text-5xl ">
                  <Popover.Button>
                    <a className="hover:underline">NFTs Marketplace</a>
                  </Popover.Button>
                  <Popover.Button>
                    <a className="hover:underline">Mint</a>
                  </Popover.Button>
                  <Popover.Button>
                    <a className="hover:underline ">Metaverse</a>
                  </Popover.Button>
                  <Popover.Button>
                    <a className="hover:underline ">Magazine</a>
                  </Popover.Button>
                </div>
              </>
            )}
          </Popover.Panel>
        </div>
      </Transition>
    </Popover>
  );
}
