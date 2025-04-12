import ProtectedRoute from '../components/protected-route'

export default function AppPage() {
  return (
    <ProtectedRoute>
      <div>App</div>
    </ProtectedRoute>
  )
}
