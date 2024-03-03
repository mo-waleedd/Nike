import { footerlogo } from "../assets/images"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"








const Footer = () => {
    return (
        <div className="flex  bg-black  py-10 px-10 max-md:flex-col">
            <div className="flex flex-col gap-6 w-[40%] max-md:w-[100%]">
                <img src={footerlogo} alt="" className="w-[100px] h-[45px]"/>
                <p className="text-white text-xs font-montserrat w-[60%] max-md:w-[80%]">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <div className="flex gap-5">
                    {socialMedia.map((app) => (
                        <div key={app}>
                            <img src={app.src} alt="social" className="bg-white rounded-full px-5 py-1 cursor-pointer"/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-20 pt-3 max-md:flex-col max-md:gap-10 max-md:pt-10">
                {footerLinks.map((section) => (
                    <div key={section} className="flex flex-col">
                        <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                        <ul className="text-white py-2">
                            {section.links.map((link) => (
                                <li key={link.name} className="text-white text-xs font-thin hover:text-slate-gray">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer