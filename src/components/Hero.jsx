import bigshoe from '../assets/images/bigshoe.png'
import { bigshoe2 } from '../assets/images'
import { bigshoe3 } from '../assets/images'
import { statistics } from '../constants'
import { shoes } from '../constants'


const Hero = () => {
  return (
      <div className='flex max-md:flex-col max-md:justify-start max-md:items-start'>
        <div className="flex flex-col gap-5 container flex-wrap pt-10 ">
          <p className='text-coral-red font-montserrat'>Our New Collection</p>
          <h1 className='text-[60px]   text font-bold  max-md:w-full'>

              <span>The New Arrival</span>
              <br />
              <span className='text-coral-red'>Nike  </span>Shoes
              
          </h1>
          <p className='text-slate-gray text-sm w-[50%] max-md:w-[85%]'>Discover Stylish Nike arrivals quality comfort, 
                and innovation for your active life
          </p>
          <div className='flex gap-6 font-palanquin'>
              {statistics.map((stat) => (
                <div key={stat.label}>
                  <p>{stat.label}</p>
                  <p>{stat.value}</p>
                </div>
              ))}
          </div>

        
        </div>
        <div className=" w-[60%] pt-20 max-md:self-center">
            <img src={bigshoe} alt="" className=' w-[1/2] bg-card bg-cover bg-center rounded-lg' id='imgbanner'/>
            
            <div className='container flex '> 
                {shoes.map((shoe) => (
                  <div key={shoe} className='pt-[5%]'>
                    <img src={shoe.imgURL} alt=""/>
                  </div>
                ))}
            </div>
        </div>

      </div>
      
  )  
}
export {Hero}