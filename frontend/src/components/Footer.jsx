import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700  w-[100%] ">
      <div className=" border-b-[1px] pb-4">
        <div className=" text-center bg-gray-500 hover:bg-gray-400 text-white min-h-10 flex items-center justify-center font-semibold cursor-pointer">
          <p>Back to top</p>
        </div>
        <div className="container mx-auto pl-3 pt-5 flex flex-row justify-between lg:pl-20 lg:pr-20">
          <div>
            <div>
              <p className=" text-gray-500">ABOUT</p>
              <div className="text-white text-sm flex flex-col gap-1">
                <div className="mt-3">
                  <p className=" hover:underline hover:cursor-pointer">
                    Contact Us
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    About Us
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    Sweet Home Stories
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <p className=" text-gray-500">HELP</p>
              <div className="text-white text-sm flex flex-col gap-1">
                <div className="mt-3">
                  <p className=" hover:underline hover:cursor-pointer">
                    Payments
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    Shipping
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    Cancellation & Returns
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">FAQ</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <p className="text-gray-500">CONSUMER POLICY</p>
              <div className="text-white text-sm flex flex-col gap-1">
                <div className="mt-3">
                  <p className=" hover:underline hover:cursor-pointer">
                    Cancellation & Returns
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    Terms Of Use
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    Security
                  </p>
                </div>
                <div>
                  <p className=" hover:underline hover:cursor-pointer">
                    Privacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white font-semibold min-h-16 flex justify-center items-center">
        <p> &copy; 1996-2024, Sweethome-store.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;