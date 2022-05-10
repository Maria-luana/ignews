import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps{
    product:{
        priceId: string;
        amount: number;
    }
}


export default function Home({product}:HomeProps) {



    return (
        <>
        <Head>
            <title>Home | IG.News</title>
        </Head>
        <main>
            <section className={styles.contentContainer}>
                <div className={styles.hero}>
                    <span>👏 Hey, welcome</span>
                    <h1>New about the <span>React</span> world.</h1>
                    <p>
                        Get access to all the publications <br/>
                        <span>for {product.amount} month</span>
                    </p>
                    <SubscribeButton priceId={product.priceId} />
                </div>
                <figure>
                    <img src="/images/avatar.svg" alt="Girl coding" />
                </figure>
            </section>
        </main>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const price = await stripe.prices.retrieve('price_1KwUGFJcEmNvaOEfoDiOjZMn');

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price.unit_amount / 100),

    };

    return{
        
        props: {
            product
        },
        revalidate: 60*60*24, //24 horas

    }

}
