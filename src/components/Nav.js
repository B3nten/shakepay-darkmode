import logo from '../content/logo.svg'
import btc from '../content/btc.svg'
import eth from '../content/eth.svg'


export default function Nav() {

    return (
        <nav className='flex items-center justify-center pt-5'>
            <a href="https://www.shakepay.com" className='group flex items-center'>
                <img src={logo} alt='Logo' className='w-10 h-10 mr-4' />
                <div className='font-avenir-black text-xl text-white/90 mr-20 group-hover:text-brand transition-all duration-300'>Shakepay</div>
            </a>
            <a href='https://shakepay.com/charts?pair=CAD_BTC&lang=en' className='group flex items-center mr-10'>
                <img src={btc} className='w-8 h-8 mr-2' />
                <div className='group-hover:text-[#009FFF] transition-all duration-300'>$49,491.99</div>
            </a>
            <a href='https://shakepay.com/charts?pair=CAD_ETH&lang=en' className='group flex items-center mr-24'>
                <img src={eth} className='w-8 h-8 mr-2' />
                <div className='group-hover:text-[#009FFF] transition-all duration-300' >$3,603.86</div>
            </a>
            <ul className='flex space-x-12 text-white/90'>
                <li><a href="https://shakepay.com/card?lang=en" className='hover:text-brand transition-all duration-300'>Card</a></li>
                <li><a href="https://shakepay.com/careers?lang=en" className='hover:text-brand transition-all duration-300 relative'>
                    Careers
                    <div className='absolute mt-4 bg-gray-300 rounded-[4px] -translate-x-[55px] w-40 h-10 flex items-center justify-center text-black'>
                        <span className='absolute bg-gray-300 w-3 h-3 rotate-45 -top-1'></span>
                        <span className='font-avenir-black'>👩‍💻 We're hiring!</span>
                    </div>
                </a></li>
                <li><a href="https://shakepay.com/security?lang=en" className={link} >Security</a></li>
                <li><a href="https://shakepay.com/fees?lang=en" className={link}>Fees</a></li>
                <li><a href="https://help.shakepay.com/" className={link}>Help</a></li>
                <li><a href="https://shakepay.com/signin" className={link}>Sign in</a></li>
            </ul>
            <button className='ml-12 px-4 py-2 rounded-[4px] bg-brand hover:bg-[#0c69a3] transition-all duration-300 text-white/90'>Get started</button>
        </nav>
    )
}

const link = 'hover:text-brand transition-all duration-300'