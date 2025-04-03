"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { SiTarget } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import useTransaction from "@/store/Global";
import { useShallow } from "zustand/react/shallow";
import countries from "@/lib/countries";

const AppHero = () => {
  return (
    <>
      <section className="bg-[#2C415A] flex flex-col-reverse gap-10 sm:gap-0  sm:grid rounded-xl sm:grid-cols-2 items-center justify-center p-4 sm:p-24">
        <main>
          <h2 className="text-white text-center text-4xl font-bold">
            Download the app:
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 mt-10">
            <Image
              src="/images/apple_store.svg"
              width={200}
              height={60}
              alt="AppStore"
            />
            <Image
              src="/images/play_store.png"
              width={200}
              height={60}
              alt="Google Play"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <p className="text-white text-xl">
              Scan the code with your phone to get the app
            </p>
            <Image
              src="/images/qr_code.png"
              width={100}
              height={60}
              alt="QR Code"
            />
          </div>
        </main>
        <main className=" ">
          <h1 className="text-5xl text-center  text-white font-bold">
            FAST. EASY. <br /> RELIABLE
          </h1>
        </main>
      </section>
      <ThirdHero />
      <FourthHero />
      <FifthHero />
      <SixthHero />
      <SeventhHero />
      <EighthHero />
      <NinthHero />
      <Footer />
    </>
  );
};

export default AppHero;

const ThirdHero = () => {
  const [to, from, updateData] = useTransaction(
    useShallow((state) => [state.data.to, state.data.from, state.updateData])
  );
  const data = countries[to];
  const fromCountry = countries[from];
  const toCountry = countries[to];
  return (
    <section className="bg-[#FBF8F2] p-10">
      <h2 className="text-center text-[#2C415A] text-4xl font-bold py-2">
        Transfer money home to {toCountry?.name} from the {fromCountry?.name}
      </h2>
      <p className="text-center text-xl">
        Worry-free transfers for you and your loved ones
      </p>
      <Button className="mx-auto block bg-[#2C415A] text-white my-4 p-3 h-[50px] rounded-2xl text-xl">
        Send Now
      </Button>
    </section>
  );
};
export const FourthHero = () => {
  return (
    <section className=" bg-white p-10 flex flex-col items-center ">
      <h2 className="text-center text-[#2C415A] text-4xl font-bold py-2">
        Where to send money in Nigeria with Citties
      </h2>
      <p className="text-center text-xl">
        Cash pickup and bank deposit with our trusted network in Nigeria. Click
        your preferred provider to learn more.
      </p>
      <div className="flex gap-4  m-6">
        {[1, 2].map((item, index) => (
          <div key={index} className="shadow p-2 rounded-md">
            <Image
              src={
                index === 0 ? "/images/access_bank.svg" : "/images/gt_bank.svg"
              }
              width={150}
              height={60}
              alt="AppStore"
            />
            <p className="text-center text-base">
              {index === 0 ? "Access Bank" : "Guaranty Trust Bank"}
            </p>
          </div>
        ))}
      </div>
      <Button className=" bg-[#4487d8]  text-white my-4 p-3 w-48 h-[50px] rounded-2xl text-xl">
        More
      </Button>
      <p className="text-base mt-3">
        Trademarks, trade names and logos displayed are registered trademarks of
        their respective owners. No affiliation or endorsement of Citties should
        be implied.
      </p>
    </section>
  );
};
export const FifthHero = () => {
  return (
    <section className=" bg-[#FBF8F2] p-4 sm:p-10 flex flex-col items-center rounded-xl ">
      <h2 className="text-center text-[#2C415A] text-4xl font-bold py-2">
        Tips for sending money from the United States to Nigeria securely
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 justify-around mt-5 px-4 sm:px-20">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className=" p-2 rounded-md  flex flex-col items-center"
          >
            <b className="py-2">
              {index === 0 ? (
                <>
                  <IoCalendarNumberOutline size={30} />
                </>
              ) : index === 1 ? (
                <>
                  <MdOutlineCurrencyExchange size={30} />
                </>
              ) : (
                <>
                  <SiTarget size={30} />
                </>
              )}
            </b>
            <p className="text-center text-lg">
              {index === 0
                ? "Always double-check your recipient's information to avoid delays."
                : index === 1
                ? "Be aware of the exchange rates, as this can impact the amount your recipient receives."
                : "Using a secure internet connection can help safeguard your information."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const SixthHero = () => {
  return (
    <section className="bg-[#D3EAEC]  py-16 ">
      <h2 className="text-center text-[#2C415A]  text-4xl font-bold py-2">
        How to send money to Nigeria with Citties
      </h2>
      <main className="flex px-8 sm:px-24 gap-8 flex-col md:flex-row mt-5">
        <div className="gap-2 flex flex-col ">
          {Array(5)
            .fill(0)
            .map((val, index) => (
              <div
                className="flex  border-b-2 my-1 text-[#04829E] border-[#04829E]"
                key={index}
              >
                <span className="rounded-full text-[#04829E] border-[#04829E] h-12 w-12 px-4 py-2 border-2 mr-2">
                  {index + 1}
                </span>
                <span className="text-[#2C415A]  text-xl">
                  {index === 0
                    ? "Create an account using your email address through our website or our app on the App Store or Google Play."
                    : index === 1
                    ? "Select the currency, the amount you want to send, and the delivery speed."
                    : index == 2
                    ? "Choose how your money is delivered."
                    : index === 3
                    ? "Enter the name and information of the person who will receive the money."
                    : "Enter your payment information and select confirm transfer to send."}
                </span>
              </div>
            ))}
        </div>
        <div>
          <iframe
            className="h-[320px]  w-full sm:w-[560px] "
            src="https://www.youtube.com/embed/wLHrbnbQWUc?si=mdF0uM43Xbrr90eR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </section>
  );
};

const SeventhHero = () => {
  return (
    <section className=" p-5  md:p-28 ">
      <h2 className="text-center  text-4xl font-bold py-2 flex flex-col">
        {" "}
        <span>Choose your preferred delivery method when sending</span>{" "}
        <span>money to Nigeria</span>{" "}
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 justify-around mt-5 px-4 sm:px-20">
        {[1, 2].map((item, index) => (
          <div
            key={index}
            className=" p-5 shadow-lg  rounded-md  flex flex-col items-center"
          >
            <b className="py-2">
              {index === 0 ? (
                <>
                  <BsCash size={40} color="##04829E" />
                </>
              ) : (
                <>
                  <CiBank size={40} color="##04829E" />
                </>
              )}
            </b>
            <b className="text-center text-2xl">
              {index === 0 ? "Cash pickup" : "Bank deposit"}
            </b>
          </div>
        ))}
      </div>
    </section>
  );
};
const EighthHero = () => {
  return (
    <section className="bg-[#FBF8F2] p-10 flex flex-col items-center rounded-xl ">
      <h2 className="text-center text-[#2C415A] text-4xl font-bold py-2">
        See what our customers are saying
      </h2>
      <main className=" mt-10 gap-8 flex flex-col px-8 md:px-36">
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`flex  flex-col gap-5 md:flex-row ${
                index === 0 ? "" : "flex-row-reverse"
              } gap-4`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={`/images/testimony_${index + 1}.webp`}
                  width={500}
                  height={600}
                  className={` ${
                    index === 0 ? "rounded-br-[4rem] " : "rounded-tl-[4rem] "
                  }`}
                  alt="AppStore"
                />
              </div>

              <div className="flex w-full md:w-1/2 flex-col items-center justify-center  gap-4">
                <p className="text-3xl font-light ">
                  Sending money is easy and fast. It’s a hassle free fast money
                  sending app.
                </p>
                <strong>Nilmini M.</strong>
                <p className="text-xl">
                  Sent money from Canada to Sri Lanka with Remitly.
                </p>
              </div>
            </div>
          ))}
      </main>
    </section>
  );
};

const NinthHero = () => {
  return (
    <section className="bg-[#2C415A] p-10 flex flex-col items-center rounded-xl ">
      <h2 className="text-center text-white text-4xl font-bold py-2">
        Beyond Borders: The Official Remitly Blog
      </h2>
      <main className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-3 md:px-36">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 justify-center mt-10"
            >
              <Image
                src={`/images/explore_${index + 1}.webp`}
                width={500}
                height={600}
                className={` !h-[280px] sm:!h-[350px] rounded-[4rem]`}
                alt={`AppStore + ${index + 1}`}
              />
              <div className="rounded-b-2xl border-2 border-[#ffff] py-14 px-2 ">
                <b className="text-2xl text-white  ">
                  {index === 0
                    ? "Today’s U.S. Dollar (USD) Exchange Rate with Remitly: Dollar to Peso and More"
                    : index === 1
                    ? "5 Top Online Banks in the U.S. (and 2 Popular Alternatives)"
                    : index === 2
                    ? "How Do I Change the Address for My Green Card?"
                    : index === 3
                    ? "What Is Dual Citizenship, and How Does It Work?"
                    : ""}
                </b>
              </div>
            </div>
          ))}
      </main>
    </section>
  );
};

export const Footer = () => {
  return (
    <section className="mt-5  bg-[#2C415A] p-10 rounded-t-xl ">
    <div className="lg:max-w-[80rem] mx-auto grid grid-cols-2 justify-center gap-10 md:grid-cols-3 lg:grid-cols-4">
    <div>
         <h2 className="text-white text-3xl">Citties</h2>
         <div className="flex flex-col">
           {[
             "User Agreement",
             "Privacy Help Center",
             "Privacy Policy",
             "Your Privacy Choices",
             "Licenses",
           ].map((item, index) => (
             <a key={index} href={`#`} className="text-white py-2 underline">
               {item}
             </a>
           ))}
         </div>
       </div>
       <div>
         <h2 className="text-white text-3xl">Company</h2>
         <div className="flex flex-col">
           {"About-Blog-Newsroom-Press-Careers-Investors-Become an affiliate"
             .split("-")
             .map((item, index) => (
               <a key={index} href={`#`} className="text-white py-2 underline">
                 {item}
               </a>
             ))}
         </div>
       </div>
       <div>
         <h2 className="text-white text-3xl">Product</h2>
         <div className="flex flex-col">
           {[
             "Rates & fees",
             "Security",
             "Reviews",
             "Partners",
             "Swift codes",
             "Refer friends",
             "Businesses",
             "Seafarers",
           ].map((item, index) => (
             <a key={index} href={`#`} className="text-white py-2 underline">
               {item}
             </a>
           ))}
         </div>
       </div>
       <div>
         <h2 className="text-white text-3xl">Support</h2>
         <div className="flex flex-col">
           {["Help", "File a complaint"].map((item, index) => (
             <a key={index} href={`#`} className="text-white py-2 underline">
               {item}
             </a>
           ))}
         </div>
       </div>
    </div>
     </section>
  );
};
