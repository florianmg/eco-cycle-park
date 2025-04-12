import ProtectedRoute from '../components/protected-route'
import { BookingForm } from './components/BookingForm'

export default function AppPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Réservation d&apos;un box</h1>
        <BookingForm />
      </div>
    </ProtectedRoute>
  )
}
