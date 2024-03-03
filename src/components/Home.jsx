
import { Hero } from './Hero';
import InfoCards from './InfoCards';
import { NavBar } from './NavBar';
import Products from './PopularProducts';
import ShoesDetail from './ShoesDetail';
import SpecialOffer from './SpecialOffer';
import Customers from './Customers'
import SignUP from './SignUP'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <section className='padding-x'>
        <Hero/>
      </section>

      <section className='padding-x pt-20'>
        <Products/>
      </section>

      <section className='padding'>
        <ShoesDetail />
      </section>

      <section className='padding-x pb-20'>
        <InfoCards />
      </section>

      <section className='padding-x pb-20'>
        <SpecialOffer />
      </section>

      <section className='padding-x pb-20'>
        <Customers />
      </section>
      

      <section className='padding-x pb-20'>
        <SignUP />
      </section>

      <section className=''>
        <Footer />
      </section>
      
    </div>
        
  
  )
}

export  {Home};