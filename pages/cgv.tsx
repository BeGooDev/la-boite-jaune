import Head from 'next/head'
import Navbar from "../component/navbar";
import Link from "next/link";
import {Layout} from "../component/layout";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="content">
                    <div className="section is-white is-medium" id="contact-form">
                        <h1 className="is-size-1">Conditions générales d'utilisation du site La Boîte Jaune</h1>


                        <h2 className="is-size-2">ARTICLE 1 : Objet</h2>

                        <p>
                            Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique
                            de
                            l’utilisation du site [votre site] et de ses services.
                        </p>
                        <p>
                            Ce contrat est conclu entre :
                        </p>

                        <p>
                            Le gérant du site internet, ci-après désigné « l’Éditeur »,
                        </p>

                        <p>
                            Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après
                            appelé «
                            l’Utilisateur ».
                            Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son
                            accès au site
                            vaut acceptation de ces conditions.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 2 : Mentions légales
                        </h2>


                        <p>
                            Le site <span className="has-text-weight-bold">La Boîte Jaune</span> est édité par la
                            société <a className="has-text-weight-bold" href="https://begoodev.fr">BeGooDev</a>, EURL au capital de 1000 €,
                            dont le
                            siège social est situé au 11 Allée Madame de Sévigné, 35470 Bain de Bretagne.
                            La société est représentée par Philippe Gibert.
                        </p>


                        <h2 className="is-size-2">
                            ARTICLE 3 : accès aux services
                        </h2>

                        <p>
                            L’Utilisateur du site [votre site] a accès aux services suivants :
                            <ul className="list">
                                <li>Application mobile de geolocalisation des boîtes aux lettre de La Poste©</li>
                            </ul>

                        </p>

                        <p>
                            Tout Utilisateur ayant accès a internet peut accéder gratuitement et depuis n’importe où au
                            site. Les frais supportés par l’Utilisateur pour y accéder (connexion internet, matériel
                            informatique, etc.) ne sont pas à la charge de l’Éditeur.
                        </p>
                        <p>
                            Le site et ses différents services peuvent être interrompus ou suspendus par l’Éditeur,
                            notamment à l’occasion d’une maintenance, sans obligation de préavis ou de justification.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 4 : Responsabilité de l’Utilisateur
                        </h2>

                        <p>
                            Tout Utilisateur, qu’il soit un simple visiteur ou un utilisateur inscrit, reconnaît
                            accepter
                            les
                            règles et les conditions qui régissent les services disponibles sur le site <span
                            className="has-text-weight-bold">La Boîte Jaune</span>.
                            L’Éditeur se réserve le droit de modifier unilatéralement et à tout moment le contenu des
                            services, et ce sans préavis.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 5 : Responsabilité de l’Éditeur
                        </h2>

                        <p>
                            Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de
                            l’Éditeur.
                        </p>
                        <p>
                            De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du fait
                            imprévisible et insurmontable d'un tiers.
                        </p>
                        <p>
                            Le site<span className="has-text-weight-bold">La Boîte Jaune</span>s'engage à mettre en
                            œuvre tous les moyens nécessaires pour garantir
                            la sécurité et la confidentialité des données. Toutefois, il n’apporte pas une garantie de
                            sécurité totale.
                        </p>
                        <p>
                            L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des sources, bien que les
                            informations diffusées su le site soient réputées fiables.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 6 : Propriété intellectuelle
                        </h2>

                        <p>
                            Les contenus du site<span className="has-text-weight-bold">La Boîte Jaune</span>(logos,
                            textes, éléments graphiques, vidéos, etc.) son
                            protégés par le droit d’auteur, en vertu du Code de la propriété intellectuelle.
                        </p>
                        <p>
                            L’Utilisateur devra obtenir l’autorisation de l’éditeur du site avant toute reproduction,
                            copie ou publication de ces différents contenus.
                        </p>
                        <p>
                            Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage
                            commercial est interdit.
                        </p>
                        <p>
                            L’Utilisateur est entièrement responsable de tout contenu qu’il met en ligne et il s’engage
                            à ne pas porter atteinte à un tiers.
                        </p>
                        <p>
                            L’Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment
                            les contenus mis en ligne par les utilisateurs, et ce sans justification.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 7 : Données personnelles
                        </h2>

                        <p>
                            Aucune donnée personnelle n'est collectée par le site ou l'application mobile.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 8 : Liens hypertextes
                        </h2>
                        <p>
                            Les domaines vers lesquels mènent les liens hypertextes présents sur le site n’engagent pas
                            la responsabilité de l’Éditeur de La Boîte Jaune, qui n’a pas de contrôle sur ces liens.
                        </p>
                        <p>
                            Il est possible pour un tiers de créer un lien vers une page du site<span
                            className="has-text-weight-bold">La Boîte Jaune</span>sans
                            autorisation expresse de l’éditeur.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 9 : Évolution des conditions générales d’utilisation
                        </h2>
                        <p>
                            Le site<span className="has-text-weight-bold">La Boîte Jaune</span>se réserve le droit de
                            modifier les clauses de ces conditions
                            générales d’utilisation à tout moment et sans justification.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 10 : Durée du contrat
                        </h2>
                        <p>
                            La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de
                            l'Utilisateur à compter du début de l’utilisation du service.
                        </p>

                        <h2 className="is-size-2">
                            ARTICLE 11 : Droit applicable et juridiction compétente
                        </h2>
                        <p>
                            Le présent contrat dépend de la législation française.
                            En cas de litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, les tribunaux de
                            [nom de ville] sont compétents pour régler le contentieux.
                        </p>

                    </div>
                </div>
            </Layout>
        </>
    )
}
