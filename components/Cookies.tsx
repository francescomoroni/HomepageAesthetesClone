import { IoIosCloseCircleOutline } from "react-icons/io";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Cookies({ open, setOpen }: any) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="fixed bottom-0 w-full transition transform shadow-2xl bg-rosino ">
                <div className="justify-center px-4 py-6 mx-auto space-y-4 text-left sm:w-3/4 ">
                  <p className="font-bold">PRIVACY / COOKIES POLICY</p>
                  <p className="text-xs text-justify sm:text-sm">
                    This website and third-party tools on this website use
                    cookies necessary to the proper functioning of the browsing
                    experience. For more detailed information on the policy
                    please check our Privacy/Cookies policy. By closing this
                    banner, scrolling the webpage, clicking on a link or by
                    browsing the website in any other fashion, you give consent
                    to our cookie policy.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <Link href="https://marketplace.aesthetes.com/legal/privacy">
                      <p className="font-semibold cursor-pointer hover:underline focus:outline-none ">
                        More Details
                      </p>
                    </Link>
                    <p
                      onClick={() => {
                        setOpen(false);
                        localStorage.setItem("cookies", "true");
                      }}
                      className="px-8 pt-1 mt-4 text-center text-white bg-black rounded-md cursor-pointer sm:mt-0"
                    >
                      ACCEPT
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
