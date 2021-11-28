import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className='home_container'>
            <h1>Productivitinator</h1>
            <p>
                Model and design workflows exactly how you want. Be Productive
            </p>
            <p>Scaling 🚀 to the moon with elixr</p>

            <p className='coming_soon'>
                <Link href='https://github.com/aadityarajkumawat/productivitinator'>
                    Coming Soon!
                </Link>
            </p>

            <div className='backstory'>
                <h4>What? Why? and How?</h4>
                <p>
                    Productivitinator is a highly opinionated productivity app
                    which gives you the supreme access in the way you manage
                    yourself. I started this out pulling a gag on notion.so, but
                    now it makes sense to work on such a solution reaping off
                    the benefits of cloud syncing and non-blocking event-loop
                    driven architecture of nodejs.
                </p>
            </div>
        </div>
    )
}

export default Home
