import { customer1 } from "../assets/images"
import { star } from "../assets/icons"
import { customer2 } from "../assets/images"
const Customers = () => {
    return (
        <div className="flex flex-col gap-10 bg-pale-blue py-16">
            <div className="  text-center justify-center items-center">
                <h1 className="text-[40px] font-bold font-palanquin pt- ">
                    What Our <span className="text-coral-red">Customers</span> Say?
                    
                </h1>
                <p className="text-sm w-[40%] max-md:w-[65%] text-center m-auto text-slate-gray">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
                
            </div>

            <div className="flex ">
                <div className="flex flex-col w-1/2 justify-start items-center text-center gap-4">
                    <img src={customer1} alt="" className=" rounded-full w-1/4"/>
                    <p className="text-slate-gray text-xs w-[55%] max-md:w-[85%] font-montserrat">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                    <div className="flex gap-2"> <img src={star} alt="" className="w-[17px]"/> <span className=" font-montserrat">(4.5)</span></div>
                    <h3 className="font-bold font-palanquin text-xl"> Morich Brown </h3>
                </div>

                <div className="flex flex-col w-1/2 justify-start items-center text-center gap-4">
                    <img src={customer2} alt="" className=" rounded-full w-1/4"/>
                    <p className="text-slate-gray text-xs w-[55%] max-md:w-[90%] font-montserrat">The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p>
                    <div className="flex gap-2"> <img src={star} alt="" className="w-[17px]"/> <span className=" font-montserrat">(4.5)</span></div>
                    <h3 className="font-bold font-palanquin text-xl"> Lota Mongeskar </h3>
                </div>
            </div>
        </div>
    )
}

export default Customers