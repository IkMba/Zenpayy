import { CustomerCarousel } from "@/components/CustomerCarousel";
import fastCompany from "@/assets/fastcompanylogo.svg";
import { Separator } from "@/components/ui/separator";

const Customer = () => {
  return (
    <div className="px-12 md:px-32">
      <h2 className="font-bold text-4xl">Customer Stories</h2>
      <div className=" w-[100%] py-8 flex flex-col justify-between  md:py-8 md:flex-row md:gap-24 lg:max-w-[1000px] ">
        <CustomerCarousel />
        <div className="">
          <div className="my-8">
            <h2 className="text-black text-3xl font-bold mb-2">90%</h2>
            <p className="text-lg text-gray-600">
              Of users report that this is the best microfinance app they have
              ever used
            </p>
          </div>
          <hr className="my-8"/>
          {/* <Separator/> */}
          <div>
            <h2 className="text-black text-3xl font-bold">95%</h2>
            <p className="text-lg text-gray-600">
              Of users got the amount they want
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src={fastCompany} alt="" className="w-[200px] marquee--item" />
        <img src={fastCompany} alt="" className="w-[200px] marquee--item" />
        <img src={fastCompany} alt="" className="w-[200px] marquee--item" />
        {/* <img src={fastCompany} alt="" className="w-[200px] marquee--item" /> */}
      </div>
    </div>
  );
};

export default Customer;
