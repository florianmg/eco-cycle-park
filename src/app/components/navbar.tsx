'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/auth'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function Navbar() {
  const { user } = useAuth()

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
    }
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {user ? (
              <li>
                <Link href="/app">Réserver</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/tarifs">Tarifs</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Eco cycle park
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <li>
              <Link href="/app">Réserver</Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/tarifs">Tarifs</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span className="text-xs">{user.email?.[0].toUpperCase()}</span>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/app">Réserver</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Déconnexion</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn">
              Connexion
            </Link>
            <Link href="/register" className="btn btn-primary">
              Inscription
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
