import { star } from "../assets/icons"

const InfoCards = () => {
    return (
        <div className="flex gap-6 max-md:flex-wrap">

            <div className="flex flex-col gap-2 justify-start items-start rounded-xl shadow-slate-gray shadow-2xl px-5 py-8">
                <img src={star} alt="" />
                <p className="font-bold text-xl font-palanquin">Free shipping</p>
                <p className="text-xs w-[60%] text-slate-gray">Enjoy seamless shopping with our complimentary shipping service.</p>
            </div>

            <div className="flex flex-col gap-2 justify-start items-start rounded-xl shadow-slate-gray shadow-2xl px-5 py-8">
                <img src={star} alt="" />
                <p className="font-bold text-xl font-palanquin">Secure Payment</p>
                <p className="text-xs w-[60%] text-slate-gray">Experience worry-free transactions with our secure payment options.</p>
            </div>

            <div className="flex flex-col gap-2 justify-start items-start rounded-xl shadow-slate-gray shadow-2xl px-5 py-8">
                <img src={star} alt=""/>
                <p className="font-bold text-xl font-palanquin">Love to help you</p>
                <p className="text-xs w-[60%] text-slate-gray">Our dedicated team is here to assist you every step of the way.</p>
            </div>
            
        </div>
    )
}

export default InfoCards