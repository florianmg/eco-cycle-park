'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormData = z.infer<typeof formSchema>

export default function LoginPage() {
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true)
      setError('')

      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)

      if (userCredential.user) {
        router.push('/app')
      }
    } catch (err) {
      setError('Email ou mot de passe incorrect')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)

      if (userCredential.user) {
        router.push('/app')
      } else {
        setError('Une erreur est survenue lors de la connexion')
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Image section - hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image src="/eco-born.jpeg" alt="Eco cycle park" fill className="object-cover" priority />
      </div>

      {/* Login form section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="card w-full max-w-md bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">Connexion</h2>
            {error && (
              <div className="alert alert-error">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="input input-bordered w-full"
                  required
                  {...register('email')}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mot de passe</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                  required
                  {...register('password')}
                />
                <label className="label">
                  <Link href="/forgot-password" className="label-text-alt link link-hover">
                    Mot de passe oublié ?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary w-full" disabled={isLoading}>
                  {isLoading ? <span className="loading loading-spinner"></span> : 'Se connecter'}
                </button>
              </div>

              <div className="divider">OU</div>

              <button
                type="button"
                className="btn btn-outline w-full gap-2"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                )}
                Continuer avec Google
              </button>

              <p className="text-center text-sm mt-4">
                Pas encore de compte ?{' '}
                <Link href="/register" className="link link-primary">
                  S&apos;inscrire
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
