import iphone from '../content/iphone.png'
import gplay from '../content/gplay.svg'
import appl from '../content/applestore.svg'

const buttonPrimary = 'px-4 py-4 rounded-[4px] bg-brand hover:bg-[#0c69a3] transition-all duration-300 text-white/90 font-avenir-black'
const buttonSecondary = 'px-4 py-4 rounded-[4px] bg-gray-200 hover:bg-gray-400 transition-all duration-300 text-white/90 font-avenir-black'


export default function Hero() {

    return (
        <section className='flex items-center mt-24'>
            <div className='w-3/5'>
                <a className='relative px-10 inline-block py-6 rounded-md bg-neutral-900 bg-cover' href='https://blog.shakepay.com/weve-raised-44-million-to-usher-in-the-bitcoin-golden-age/'>
                    <span className='text-lg'>Shakepay raises $44m to usher in the Bitcoin Golden Age</span>
                    <span className='block mt-3 text-brand font-avenir-black'> 🎉 Celebrate with us</span>
                    <div className='absolute -inset-2 rounded-lg bg-brand bg-opacity-20 -z-10 blur-xl'></div>
                </a>
                <div className='mt-12 space-y-8'>
                    <h1 className='text-5xl font-avenir-black leading-tight'>
                        The <span className="text-brand">easiest way</span> for Canadians to buy and sell bitcoin.
                    </h1>
                    <p className='text-2xl text-white/70'>Buy bitcoin in minutes with Interac e-Transfer®. Cash out to your bank account instantly. Customer service that cares.</p>
                    <div className='flex items-stretch space-x-3'>
                        <button className={buttonPrimary}>Get the Shakepay app ➡️</button>
                        <button className={buttonSecondary}><img src={gplay} /></button>
                        <button className={buttonSecondary}><img src={appl} /></button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-2/5'><img src={iphone} className='w-[260px] text-center' /></div>
        </section>
    )
}