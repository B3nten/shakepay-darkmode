import styles from './Love.module.css'
import twitter from '../../content/twitter-round.png'
import reddit from '../../content/reddit-round.png'
import facebook from '../../content/facebook-round.png'

export default function Love() {

    return (
        <div>
            <section />
            <h2 className='text-3xl font-avenir-black text-center mb-10'>Community Love 😍</h2>
            <div className='relative h-[20rem] whitespace-nowrap overflow-hidden'>
                <div className={`absolute left-0 top-0 whitespace-nowrap flex space-x-10 ${styles.marquee}`}>

                    <a href="" className={styles.card}>
                        <img src={twitter} className='w-10 h-10' />
                        <span className={styles.title}>@cryptobubbleman</span>
                        <span className={styles.text}>
                            Can confirm, just had great user experience. I registered, sent funds from my bank account to website to my cold storage in ~1 hour. 👍🙏👌
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={facebook} className='w-10 h-10' />
                        <span className={styles.title}>Miguel Levesque</span>
                        <span className={styles.text}>
                            I created an account, e-transferred money and was owning ETH in minutes. It removes alot of headaches compared to what i'm used to. Other than being crazy fast and simple...it's cheap! I could not believe it.
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={reddit} className='w-10 h-10' />
                        <span className={styles.title}>/u/Hooftly</span>
                        <span className={styles.text}>
                        Shakepay is also the easiest on-ramp IMO as well. Usually E-transfers take minutes to appear in your account. The whole process from Bank to Shakepay to Wallet the last time was literally 30 Minutes from the time I sent the E-Transfer. 10 / 10 would use Shakepay again.
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={twitter} className='w-10 h-10' />
                        <span className={styles.title}>@tremblay96</span>
                        <span className={styles.text}>
                        @shakepay 🇨🇦🇨🇦🇨🇦🇨🇦 Give it a try and you won't regret it! Great customer service as well! A must-have for all Canadians!
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={reddit} className='w-10 h-10' />
                        <span className={styles.title}>/u/caramelpies</span>
                        <span className={styles.text}>
                        Shakepay is amazing - no, I don't work for them, and no, I'm not providing an affiliate link. E-Transfer is super convenient and my funds have always hit my Shakepay account within 5 minutes.
                        </span>
                    </a>

                    <a href="" className={styles.card}>
                        <img src={twitter} className='w-10 h-10' />
                        <span className={styles.title}>@cryptobubbleman</span>
                        <span className={styles.text}>
                            Can confirm, just had great user experience. I registered, sent funds from my bank account to website to my cold storage in ~1 hour. 👍🙏👌
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={facebook} className='w-10 h-10' />
                        <span className={styles.title}>Miguel Levesque</span>
                        <span className={styles.text}>
                            I created an account, e-transferred money and was owning ETH in minutes. It removes alot of headaches compared to what i'm used to. Other than being crazy fast and simple...it's cheap! I could not believe it.
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={reddit} className='w-10 h-10' />
                        <span className={styles.title}>/u/Hooftly</span>
                        <span className={styles.text}>
                        Shakepay is also the easiest on-ramp IMO as well. Usually E-transfers take minutes to appear in your account. The whole process from Bank to Shakepay to Wallet the last time was literally 30 Minutes from the time I sent the E-Transfer. 10 / 10 would use Shakepay again.
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={twitter} className='w-10 h-10' />
                        <span className={styles.title}>@tremblay96</span>
                        <span className={styles.text}>
                        @shakepay 🇨🇦🇨🇦🇨🇦🇨🇦 Give it a try and you won't regret it! Great customer service as well! A must-have for all Canadians!
                        </span>
                    </a>
                    <a href="" className={styles.card}>
                        <img src={reddit} className='w-10 h-10' />
                        <span className={styles.title}>/u/caramelpies</span>
                        <span className={styles.text}>
                        Shakepay is amazing - no, I don't work for them, and no, I'm not providing an affiliate link. E-Transfer is super convenient and my funds have always hit my Shakepay account within 5 minutes.
                        </span>
                    </a>



                </div>
            </div>
        </div>
    )
}