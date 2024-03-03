import headerlogo from '../assets/images/headerlogo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'


const NavBar = () => {
  return (
  
        <header>
              <nav className='padding-x py-5 w-screen flex  top-0 z-20 justify-between items-center'>
                  <Link to="/">
                      <img 
                      src={headerlogo} 
                      alt="Logo" 
                      className='w-[100px] h-[29px]'
                      />
                    </Link>
                    <ul className='container flex justify-center gap-8 max-md:hidden'>
                      {navLinks.map((link) => (
                          <li key={link.label}>
                            <Link to={link.href} className='leading-normal font-montserrat text-sm text-slate-gray'>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <div>
                      <img 
                        src={hamburger} 
                        alt="hamburger" 
                        className='w-[25px] h-[25px] hidden max-md:block'
                      />
                    </div>
                    <p className=' font-montserrat w-[30%] max-md:hidden'>sign in / Explore now</p>
            </nav>
        </header>
  )
}

export {NavBar}