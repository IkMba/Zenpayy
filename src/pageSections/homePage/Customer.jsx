import { CustomerCarousel } from "@/components/CustomerCarousel";
import { Separator } from "@/components/ui/separator";


const Customer = () => {
  return (
    <div className="px-6 md:px-32 md:pt-16">
      <h2 className="font-bold text-4xl">Customer Stories</h2>
      <div className=" w-[100%] py-8 flex flex-col justify-between md:py-8 md:flex-row md:gap-24 lg:max-w-[1000px] ">
        <div className="md:w-[70%]">
        <CustomerCarousel />
        </div>
        <div className="">
          <div className="my-6">
            <h2 className="text-black text-3xl font-bold mb-2">90%</h2>
            <p className="text-lg text-gray-600">
              Of users report that this is the best online system they have
              ever used.
            </p>
          </div>
          <hr className="my-6"/>
          {/* <Separator/> */}
          <div>
            <h2 className="text-black text-3xl font-bold">95%</h2>
            <p className="text-lg text-gray-600">
              Of users were satisfied with the product.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Customer;
