import React from 'react';
import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';

const News = () => {


    return (
        <div className='lg:px-32 py-10 bg-primary'>
            <div>
                <h1 className='text-3xl font-bold text-center text-white pb-10'>NEWS</h1>
            </div>
            <Carousel showDots cols={3} rows={1} gap={40} loop>
                <Carousel.Item >
                    <div className="card w-96 bg-base-100 shadow-xl  image-full">
                        <figure><img src="https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/05/btc_altcoins_coins-4.jpg" alt="Shoes" /></figure>
                        <div className="card-body   visible">

                            <div className=" justify-end ">
                                <h2 className="card-title">Morning Crypto Briefing: Bitcoin Eyes Two-Week Highs In Mid-$31,000s Amid Strong Start To Week</h2>
                                <a href="https://www.fxempire.com/news/article/morning-crypto-briefing-bitcoin-eyes-two-week-highs-in-mid-31000s-amid-strong-start-to-week-1017445" className='btn'>Read</a>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="card w-96  bg-base-100 shadow-xl  image-full">
                        <figure><img src="https://imageio.forbes.com/specials-images/imageserve//61b4887dd9569b8b8cc25ef0/0x0.jpg?format=jpg&crop=3618,2035,x0,y322,safe&width=1200" alt="Shoes" /></figure>
                        <div className="card-body   visible">

                            <div className=" justify-end ">
                                <h2 className="card-title">CryptoCodex: ‘Large Price Swings’—Crypto Braced For $9 Trillion Fed Earthquake As Bitcoin, Ethereum, BNB, XRP, Solana And Cardano Soar</h2>
                                <a href="https://www.forbes.com/sites/billybambrough/2022/05/30/cryptocodex-large-price-swings-crypto-braced-for-9-trillion-fed-earthquake-as-bitcoin-ethereum-bnb-xrp-solana-and-cardano-soar/" className='btn'>Read</a>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="card w-96  bg-base-100 shadow-xl  image-full">
                        <figure><img src="https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2018/10/Jackson_palmer-gID_1.png" alt="Shoes" /></figure>
                        <div className="card-body   visible">

                            <div className=" justify-end ">
                                <h2 className="card-title">Dogecoin Creator Jackson Palmer: 'I Wish It Was The End of Crypto, But It’s Not</h2>
                                <a href="https://decrypt.co/101641/dogecoin-creator-jackson-palmer-i-wish-it-was-the-end-of-crypto-but-its-not" className='btn'>Read</a>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="card w-96  bg-base-100 shadow-xl  image-full">
                        <figure ><img src="https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2018/10/Jackson_palmer-gID_1.png" alt="Shoes" /></figure>
                        <div className="card-body   visible">

                            <div className=" justify-end ">
                                <h2 className="card-title">Tesla’s Shanghai factory will return to normal capacity in June</h2>
                                <a href="http://technode.com/2022/05/30/teslas-shanghai-factory-will-return-to-normal-capacity-in-june/" className='btn'>Read</a>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="card w-96  bg-base-100 shadow-xl  image-full">
                        <figure><img src="https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/05/btc_altcoins_coins-4.jpg" alt="Shoes" /></figure>
                        <div className="card-body   visible">

                            <div className=" justify-end ">
                                <h2 className="card-title">Bitcoin Is up After This Mysterious Tweet by Elon Musk, Who Previously Caught Absolute Top</h2>
                                <a href="https://u.today/bitcoin-is-up-after-this-mysterious-tweet-by-elon-musk-who-previously-caught-absolute-top" className='btn'>Read</a>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="card w-96  bg-base-100 shadow-xl  image-full">
                        <figure><img src="https://media.wired.com/photos/6291580102588e8685afc52d/191:100/w_1280,c_limit/Companies-Hacking-Semiconductor-Chip-Shortage-Business-1238899921.jpg" alt="Shoes" /></figure>
                        <div className="card-body   visible">

                            <div className=" justify-end ">
                                <h2 className="card-title">Companies Are Hacking Their Way Around the Chip Shortage</h2>
                                <a href="https://www.wired.com/story/chip-shortage-hacks/" className='btn'>Read</a>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                {/* ... */}
            </Carousel>
        </div>
    )
};

export default News;