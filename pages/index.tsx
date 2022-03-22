import Head from 'next/head'
import Navbar from "../component/navbar";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <Head>

        </Head>
        <section className="hero is-primary is-medium">

          <div className="hero-head">
            <Navbar></Navbar>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-5 landing-caption">
                  <h1 className="title is-1">La Boîte Jaune</h1>
                  <h2 className="subtitle is-5">
                    Votre application pour trouver la boîte aux lettre la plus proche de vous
                  </h2>
                </div>
                <div className="column has-text-centered">
                  <figure className="image is-384x384 is-inline-block">
                    <img alt="" src="/assets/logo/la-boite-jaune.png"/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section is-white is-medium" id="contact-form">
          <div className="container">
            <div className="columns">
              <div className="column is-5 landing-caption">
                <h2 className="title is-2">Comment ça marche?</h2>
                <p className="is-5">
                  Trouvez immédiatement la boîte aux lettres la plus proche de vous.En cas de besoin. Bénéficiez d’une base riche déjà de plus de 140 000 emplacements sur toute la France métropolitaine et en Corse !
                </p>
                <p>
                  La Boîte jaune, est une application reposant sur une base de donnée officielles fournie par OpenDataGouv.
                </p>
              </div>
              <div className="column">
                {/*<video src="/video/arnold.mp4"  controls autoPlay muted loop />*/}
                <figure className="image is-16by9">
                  <iframe className="has-ratio" width="560" height="315"
                          src="https://www.youtube.com/embed/Tv-84GiLGG4?autoplay=1&loop=1&showinfo=0&controls=0"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </figure>

              </div>
            </div>
          </div>
        </div>


        <section className="section is-grey" id="contact-form">
          <div className="container">
            <div className="columns is-centered is-mobile">
              <div className="column is-half has-text-centered">
                © 2021 - <Link href="/">Arnold App</Link>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
