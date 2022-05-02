import lightning from '../../content/features/lightning.svg'
import dollar from '../../content/features/dollar-sign.svg'
import users from '../../content/features/users.svg'
import lock from '../../content/features/lock.svg'
import card from '../../content/features/credit-card.svg'
import reg from '../../content/features/reg.svg'
import styles from './features.module.css'

export default function Features(){

    return (

        <section>

            <div class='w-full grid grid-cols-3 mb-40 gap-10'>
                <div className='flex flex-col text-center'>
                    <span className='text-3xl font-avenir-black mb-1'>10 Minutes</span>
                    <span className='opacity-80'>to own your first bitcoin</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='text-3xl font-avenir-black mb-1'>$6B+</span>
                    <span className='opacity-80'>in digital currency bought & sold</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='text-3xl font-avenir-black mb-1'>900,000+</span>
                    <span className='opacity-80'>Canadians served</span>
                </div>
            </div>


            <div class='w-full grid grid-cols-3 gap-x-24 gap-y-24'>

                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img src={lightning} />
                    </div>
                    <span className={styles.title}>Lightning fast</span>
                    <span className='opacity-80'>Get your personal or business account setup instantly and you'll be owning your first bitcoin within minutes</span>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img src={dollar}/>
                    </div>
                    <span className={styles.title}>Commission-free</span>
                    <span className='opacity-80'>Buy & sell bitcoin and ethereum <span className="text-brand"><a href="https://shakepay.com/fees">commission-free</a></span> at market-leading prices</span>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img src={users} />
                    </div>
                    <span className={styles.title}>Responsive support</span>
                    <span className='opacity-80'>We'll get your issues resolved within hours any day of the week</span>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img src={lock} />
                    </div>
                    <span className={styles.title}>Bitcoins stored securely</span>
                    <span className='opacity-80'>The majority of all digital currencies are stored securely offline and are backed by an insurance policy issued for Shakepay</span>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img src={card} />
                    </div>
                    <span className={styles.title}>Your money in your control</span>
                    <span className='opacity-80'>Send out your bitcoin to a wallet in your control. Send out your Canadian Dollars to your bank. In seconds.</span>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img src={reg} />
                    </div>
                    <span className={styles.title}>Regulated</span>
                    <span className='opacity-80'>Shakepay is licensed as a Money Service Business by FINTRAC and Revenu Québec to operate in all Canadian provinces and territories</span>
                </div>

            </div>
        </section>

    )
}
