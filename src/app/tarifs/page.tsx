'use client';

import Image from 'next/image';

export default function TarifsPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Pricing section */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Nos Tarifs</h1>
          
          {/* Location à l'unité */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Location à l&apos;unité</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">1 heure</h3>
                  <p className="text-3xl font-bold">2€</p>
                  <p className="text-sm text-base-content/70">Idéal pour un trajet court</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">2 heures</h3>
                  <p className="text-3xl font-bold">3,50€</p>
                  <p className="text-sm text-base-content/70">Pour une balade plus longue</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Dépassement</h3>
                  <p className="text-3xl font-bold">0,50€</p>
                  <p className="text-sm text-base-content/70">Par tranche de 10 minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Abonnements */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Abonnements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h3 className="card-title text-2xl">Abonnement Mensuel</h3>
                  <p className="text-4xl font-bold mb-4">12€</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Accès illimité aux vélos
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sans engagement
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Support prioritaire
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card bg-secondary text-secondary-content">
                <div className="card-body">
                  <div className="absolute -top-4 right-4 badge badge-accent">Meilleure offre</div>
                  <h3 className="card-title text-2xl">Abonnement Annuel</h3>
                  <p className="text-4xl font-bold mb-4">120€</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Économisez 24€ par an
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Accès illimité aux vélos
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Support prioritaire 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Réservation prioritaire
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Explications */}
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Comment fonctionnent nos abonnements ?</h2>
            <div className="bg-base-200 p-6 rounded-lg space-y-4">
              <p>
                Nos abonnements vous donnent un accès illimité à notre flotte de vélos. Voici les principaux avantages :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Accès 24h/24 et 7j/7 à tous nos vélos</li>
                <li>Pas de frais supplémentaires pour les trajets de moins de 2 heures</li>
                <li>Réservation possible jusqu&apos;à 15 minutes avant votre trajet</li>
                <li>Application mobile pour localiser et déverrouiller les vélos</li>
                <li>Assistance technique en cas de besoin</li>
              </ul>
              <p className="text-sm mt-4">
                Note : Les dépassements au-delà de 2 heures sont facturés 0,50€ par tranche de 10 minutes, même pour les abonnés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image section - hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/3 relative">
        <Image
          src="/eco-born.jpeg"
          alt="Eco cycle park"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
} 