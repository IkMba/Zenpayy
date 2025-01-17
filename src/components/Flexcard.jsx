const Flexcard = ({image,action,description}) => {
    return (
        <div className="w-full md:max-w-[20rem] md:w-[20rem]">
            <img src={image} alt="how-it-works-image " className="rounded-[10px] h-[45vh] w-[100%] md:h-[65vh]"/>
            <div className="py-4">
                <h3 className="font-semibold text-2xl">{action}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    )
};

export default Flexcard;
 