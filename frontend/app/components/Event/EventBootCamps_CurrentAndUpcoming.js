import Current1 from "../../../public/Current1.png";
import Current2 from "../../../public/Current2.png";
import Current3 from "../../../public/Current3.png";
import Current4 from "../../../public/Current4.png";
import Image from "next/image";

const EventBootCamps_CurrentAndUpcoming = () => {
  return (
    <>
      <div className=" max-w-[977px] mx-auto hidden md:block md:px-[50px]">
        <div className="bg-[#FFFEFB] border border-gray-700 rounded-xl mx-auto pl-[90px] pr-[52px] py-[20px] ">
          <div className="flex justify-between gap-10  ">
            <div>
              <img src="/images/sidespeakerimg.svg" alt="speaker" />
            </div>
            <div>
              <h2 className="text-[48px] font-[400]   ">Bootcamps</h2>
              <h4 className="text-[20px] font-[400]  max-w-[529px]">
                Learn, build and showcase your skills alongside like-minded
                peers.{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center lg:text-[48px] text-[28px]  md:text-[36px] font-normal trackong-[3.36px] leading-[120px] tracking-wide md:mt-[50px] lg:mb-[57px] md:mb-[55px]">
          Current and Upcoming
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-[44px] lg:mb-[135px] md:mb-[40px] sm:mb-[67px]">
        <div className="max-w-xs flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 w-[243px]">
          <Image className="h-[100px] w-[100px] rounded-full " src={Current1} />
          <div className=" mt-[25px] pb-[31px] flex flex-col justify-center items-center">
            <div className="w-[266px]  flex flex-col gap-2 justify-center items-center">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Rorem Ipsum dolor
              </h3>

              <p className="font-poppins text-[16px] text-sm font-light opacity-65 leading-relaxed w-[110px">
                Web3 | Online
              </p>

              <p className="font-poppins text-neutral-black text-[16px] font-light opacity-65 leading-relaxed">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex mt-[35px] items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed">
              View more
            </button>
          </div>
        </div>

        <div className="max-w-xs flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 w-[243px]">
          <Image className="h-[100px] w-[100px] rounded-full " src={Current2} />
          <div className=" mt-[25px] pb-[31px] flex flex-col justify-center items-center">
            <div className="w-[266px]  flex flex-col gap-2 justify-center items-center">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Rorem Ipsum dolor
              </h3>

              <p className="font-poppins text-[16px] text-sm font-light opacity-65 leading-relaxed w-[110px">
                Web3 | Online
              </p>

              <p className="font-poppins text-neutral-black text-[16px] font-light opacity-65 leading-relaxed">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex mt-[35px] items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed">
              View more
            </button>
          </div>
        </div>

        <div className="max-w-xs flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 w-[243px]">
          <Image className="h-[100px] w-[100px] rounded-full " src={Current3} />
          <div className=" mt-[25px] pb-[31px] flex flex-col justify-center items-center">
            <div className="w-[266px]  flex flex-col gap-2 justify-center items-center">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Rorem Ipsum dolor
              </h3>

              <p className="font-poppins text-[16px] text-sm font-light opacity-65 leading-relaxed w-[110px">
                Web3 | Online
              </p>

              <p className="font-poppins text-neutral-black text-[16px] font-light opacity-65 leading-relaxed">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex mt-[35px] items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed">
              View more
            </button>
          </div>
        </div>

        <div className="max-w-xs flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 w-[243px]">
          <Image className="h-[100px] w-[100px] rounded-full " src={Current4} />
          <div className=" mt-[25px] pb-[31px] flex flex-col justify-center items-center">
            <div className="w-[266px]  flex flex-col gap-2 justify-center items-center">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Rorem Ipsum dolor
              </h3>

              <p className="font-poppins text-[16px] text-sm font-light opacity-65 leading-relaxed w-[110px">
                Web3 | Online
              </p>

              <p className="font-poppins text-neutral-black text-[16px] font-light opacity-65 leading-relaxed">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex mt-[35px] items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed">
              View more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBootCamps_CurrentAndUpcoming;
