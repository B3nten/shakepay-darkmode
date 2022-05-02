import btm from '../content/bitcoin-magazine.svg'
import bloom from '../content/bloomberg.svg'
import forbes from '../content/forbes.svg'
import fp from '../content/financial-post.svg'

export default function Usedby(){

    return (
        <div className='w-full bg-neutral-900 my-20'>
            <div className='max-w-7xl mx-auto flex justify-between py-16 saturate-0'>
                <a className='opacity-50 hover:opacity-100 transition-opacity duration-300' href="https://bitcoinmagazine.com/articles/new-shakepay-feature-turns-your-spare-change-bitcoin/"><img src={btm} /></a>
                <a className='opacity-50 hover:opacity-100 transition-opacity duration-300' href="https://www.bloombergquint.com/onweb/blockchain-bootcamps-emerge-with-rising-demand-for-software-pros"><img src={bloom} /></a>
                <a className='opacity-50 hover:opacity-100 transition-opacity duration-300' href="https://www.forbes.com/sites/panosmourdoukoutas/2019/01/29/bitcoins-three-biggest-problems-in-reaching-the-masses"><img src={forbes} /></a>
                <a className='opacity-50 hover:opacity-100 transition-opacity duration-300' href="https://business.financialpost.com/pmn/press-releases-pmn/business-wire-news-releases-pmn/shakepay-introduces-lightning-fast-over-the-counter-trade-desk-for-digital-currency-trading-in-canada"><img src={fp} /></a>
            </div>
        </div>
    )
}