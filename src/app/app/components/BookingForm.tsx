'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Duration = '1h' | '2h' | 'subscription'

interface Parking {
  id: string
  name: string
  address: string
}

const MOCK_PARKINGS: Parking[] = [
  { id: '1', name: 'Parking Centre-Ville', address: '12 rue du Commerce' },
  { id: '2', name: 'Parking Gare', address: '3 place de la Gare' },
  { id: '3', name: 'Parking Plage', address: '45 boulevard Maritime' },
]

const PRICES = {
  '1h': 5,
  '2h': 8,
  subscription: 0,
}

export function BookingForm() {
  const router = useRouter()
  const [selectedParking, setSelectedParking] = useState<string>('')
  const [duration, setDuration] = useState<Duration>('1h')
  const [isSubscribed] = useState(false) // À remplacer par la vraie donnée utilisateur

  const price = isSubscribed ? 0 : PRICES[duration]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // TODO: Appel API pour créer la réservation
      // TODO: Envoi email de confirmation

      alert('Réservation confirmée ! Un email de confirmation vous a été envoyé.')
      router.push('/reservations')
    } catch (error: unknown) {
      console.error('Erreur lors de la réservation:', error)
      alert('Une erreur est survenue lors de la réservation.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Sélectionnez un parking</label>
        <select
          value={selectedParking}
          onChange={(e) => setSelectedParking(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="">Choisir un parking</option>
          {MOCK_PARKINGS.map((parking) => (
            <option key={parking.id} value={parking.id}>
              {parking.name} - {parking.address}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Durée de réservation</label>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value as Duration)}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="1h">1 heure</option>
          <option value="2h">2 heures</option>
          <option value="subscription">Abonnement</option>
        </select>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-md">
        <p className="text-sm font-medium">Statut : {isSubscribed ? 'Abonné' : 'Non abonné'}</p>
        <p className="text-lg font-bold">Prix : {price === 0 ? 'Gratuit' : `${price}€`}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Confirmer la réservation
      </button>
    </form>
  )
}
