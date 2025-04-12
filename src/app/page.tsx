import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Eco Cycle Park</h1>
            <p className="mb-5">Le premier parking à vélo souterrain intelligent et sécurisé de votre ville.</p>
            <Link href="/app" className="btn btn-primary">
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Sécurité 24/7</h3>
                <p>Vidéosurveillance et contrôle d&apos;accès permanent pour la sécurité de votre vélo.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Recharge Électrique</h3>
                <p>Points de recharge pour vélos électriques disponibles sur 30% des emplacements.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Accès Facile</h3>
                <p>Entrée et sortie facilitées avec rampes d&apos;accès et ascenseurs adaptés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="stats shadow flex flex-col md:flex-row w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="stat-title">Places de parking</div>
              <div className="stat-value">100+</div>
              <div className="stat-desc">Places sécurisées</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="stat-title">Points de recharge</div>
              <div className="stat-value">30</div>
              <div className="stat-desc">Bornes de recharge</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="stat-title">Disponibilité</div>
              <div className="stat-value">24/7</div>
              <div className="stat-desc">Accès permanent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services Complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Station de Gonflage</h3>
                <p>Gonflage automatique gratuit pour vos pneus</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Distributeur</h3>
                <p>Accessoires et pièces détachées disponibles 24/7</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Espace Détente</h3>
                <p>Zone d&apos;attente confortable pendant la recharge</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Assistance</h3>
                <p>Borne interactive d&apos;information</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="card  text-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">Prêt à sécuriser votre vélo ?</h2>
              <p className="mb-6">
                Rejoignez Eco Cycle Park dès aujourd&apos;hui et profitez d&apos;un mois d&apos;essai gratuit.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">S&apos;inscrire maintenant</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
