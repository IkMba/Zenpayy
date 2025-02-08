import Flexcard from "@/components/Flexcard";
import payment1 from "@/assets/rev/payment2.webp"
import savings2 from "@/assets/rev/savings2.webp"
import save1 from "@/assets/rev/save-1.webp"
const How = () => {
    return (
        <div className="  px-6 py-12 md:px-24 bg-[--light-blue] h-auto">
            <h2 className="font-bold text-3xl md:text-4xl mb-8">How it Works</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between">
            <Flexcard image={save1} action="Sign up" description="Sign up now and enjoy all the benefits."/>
            <Flexcard image={savings2} action="Deposit money to your account" description="Deposit money and earn interests."/>
            <Flexcard image={payment1} action="Start Transacting" description="Super fast and super secure systems."/>
        </div>
        </div>
    )
};

export default How;
