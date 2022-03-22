import Head from 'next/head'
import Navbar from "../component/navbar";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <Head>

        </Head>
        <head>
            <Navbar></Navbar>
        </head>

        <div className="section is-white is-medium" id="contact-form">

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
