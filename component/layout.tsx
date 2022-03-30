import Link from "next/link";
import React from "react";
import Navbar from "./navbar";

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({children}: LayoutProps) {
    return (
        <>

            <div id="header">
                <Navbar/>
            </div>
            <div id="main">{children}</div>
            <footer id="footer">
                <section className="section is-grey" id="contact-form">
                    <div className="container">
                        <div className="columns is-centered is-mobile">
                            <div className="column is-half has-text-centered">
                                <Link href="/cgu">Conditions générales d'utilisation</Link>
                            </div>
                        </div>
                        <div className="columns is-centered is-mobile">
                            <div className="column is-one-third">
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.giboow.laboitejaune.la_boite_jaune">
                                    <a target="_blank" title="Télécharger l'application sur le PlayStore Google">
                                        <figure className="image is-128x128 is-inline-block">
                                            <img alt="Télécharger l'application sur le PlayStore Google" src="/assets/google-play.png"/>
                                        </figure>
                                    </a>
                                </Link>
                            </div>
                            <div className="column is-one-third has-text-centered">
                                © 2021 - <Link href="/">La Boîte Jaune</Link>
                            </div>
                            <div className="column is-one-third has-text-centered">
                                Made with ❤️&nbsp;&nbsp;by <Link href="https://begoodev.fr">BeGooDev</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
