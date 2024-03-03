import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"



const SpecialOffer = () => {
    return (
        <div className="flex max-md:flex-wrap gap-4">
            <img src={offer} alt="" className="w-1/2 max-md:w-[100%]"/>
            <div className="flex flex-col translate-y-[20%] gap-4">

                <h2 className="text-3xl font-bold "><span className="text-coral-red">Special</span> Offer</h2>

                <p className="text-sm font-montserrat text-slate-gray">Embark on a shopping journey that redefines your experience with unbeatable deals.
                    From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

                <p className="text-sm font-montserrat text-slate-gray">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. 
                Your journey with us is nothing short of exceptional.</p>

                <div className="flex gap-6 animate-pulse">
                    <button className="bg-coral-red flex gap-2 items-center justify-center px-4 py-1 rounded-full text-white font-montserrat text-sm hover: tr hover:duration-100"> Shop now <img src={arrowRight} alt="" className="w-[15%]"/></button>
                    <button className="px-4 py-1 font-montserrat text-slate-gray rounded-full border  border-slate-gray bg-transparent leading-none text-sm hover:bg-slate-gray hover:text-white "> Learn more</button>
                </div>
                
            </div>
        </div>
    )
}

export default SpecialOffer