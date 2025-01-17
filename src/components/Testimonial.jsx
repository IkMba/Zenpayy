const Testimonial = ({ review }) => {
  const { org, text, img, firstName, occupation } = review;
  return (
    <div className="">
      <h2 className="text-sm text-gray-400 uppercase py-4">{org && org}</h2>
      <h3 className="text-black text-3xl">{text}</h3>
      <div className="flex gap-4 items-center my-4">
        <img src={img} alt="" className="w-24 h-18 rounded-[50%]" />
        <div>
          <h4 className="text-black text-xl">{firstName}</h4>
          <h4 className="text-gray-800 text-lg">{occupation}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
