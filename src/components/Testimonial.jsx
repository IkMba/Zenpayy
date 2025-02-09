const Testimonial = ({ review }) => {
  const { org, text, img, firstName, occupation } = review;
  return (
    <div className="">
      <h2 className="text-sm text-gray-400 uppercase py-4">{org && org}</h2>
      <h3 className="text-black text-[1.25rem] md:text-[1.75rem] font-medium">{text}</h3>
      <div className="flex gap-4 items-center my-4">
        <img src={img} alt="" className="w-28 h-24 rounded-[50%]" />
        <div>
          <h4 className="text-black text-xl">{firstName}</h4>
          <h4 className="text-gray-800 text-lg">{occupation}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
