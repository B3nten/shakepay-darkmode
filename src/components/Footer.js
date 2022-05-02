import logo from '../content/logo.svg'
import language from '../content/language.svg'

const product = ['Fees', 'Charts', 'Blog']
const company = ['About us', 'Help', 'Wall of Champions', 'Careers', 'Terms of Use', 'Privacy policy', 'Production orders']
const social = ['Discord', 'Twitter', 'Reddit', 'Facebook', 'YouTube', 'Instagram']

export default function Footer() {
    return (
        <div className="bg-neutral-900">
            <section>
                <div className='w-full py-16 grid grid-cols-4'>
                    <div className='space-y-5'>
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={logo} alt='Logo' className='w-10 h-10 mr-4' />
                            <span className='text-xl'>Shakepay Inc.</span>
                        </div>
                        <span>Montreal, Canada 🍁</span>
                        <span className='flex items-center space-x-2'><img src={language} alt='Globe' /><span>Français</span></span>
                        <div className='flex flex-col text-sm'>
                            <span className='font-avenir-black'>REGULATED</span>
                            <span>FINTRAC #M123456789</span>
                            <span>Revenu Québec #904007</span>
                        </div>
                    </div>
                    <div>
                        <p className='mb-3 opacity-70 font-avenir-black'>Product</p>
                        <ul className='space-y-[2px]'>
                            {product.map((p) =>
                                <li id={p.indexOf()}>
                                    <a href='' className='hover:text-brand transition-all duration-300'>{p}</a>
                                </li>)}
                        </ul>
                    </div>
                    <div>
                        <p className='mb-3 opacity-70 font-avenir-black'>Company</p>
                        <ul className='space-y-[2px]'>
                            {company.map((p) =>
                                <li id={p.indexOf()}>
                                    <a href='' className='hover:text-brand transition-all duration-300'>{p}</a>
                                </li>)}
                        </ul>
                    </div>
                    <div>
                        <p className='mb-3 opacity-70 font-avenir-black'>Social</p>
                        <ul className='space-y-[2px]'>
                            {social.map((p) =>
                                <li id={p.indexOf()}>
                                    <a href='' className='hover:text-brand transition-all duration-300'>{p}</a>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
