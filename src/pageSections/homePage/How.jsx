import Flexcard from "@/components/Flexcard";
import flexImage from "@/assets/pexels-photo-8520490.webp"
const How = () => {
    return (
        <div className=" px-6 py-12 md:px-24 bg-[--light-blue] h-auto">
            <h2 className="font-bold text-4xl mb-8">How it Works</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
            <Flexcard image={flexImage} action="Sign up" description="Sign up now and enjoy all the benefits"/>
            <Flexcard image={flexImage} action="Add your bank account" description="Sign up now and enjoy all the benefits"/>
            <Flexcard image={flexImage} action="Start Transacting" description="Sign up now and enjoy all the benefits"/>
        </div>
        </div>
    )
};

export default How;
