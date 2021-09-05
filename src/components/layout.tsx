import React, { ReactElement } from 'react'
import styles from '../styles/layout.module.css'
import Link from 'next/link'

export default function Layout({ children }: React.PropsWithChildren<unknown>): ReactElement {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className={`absolute inset-0 ${styles.scaffoldGradient}`}>
        <img
          className="absolute top-16 left-0 md:right-0"
          src="/img/purple-fog.svg"
          alt="purple background gradient"
        />
        <img
          className="absolute top-0 right-0 md:right-0"
          src="/img/red.svg"
          alt="red background gradient"
        />
        <img
          className="absolute bottom-0 left-0"
          src="/img/blue.svg"
          alt="blue background gradient"
        />
        <img
          className="absolute bottom-0 right-0"
          src="/img/orange.svg"
          alt="orange background gradient"
        />
      </div>

      <header className="absolute left-4 top-4">
        <Link href="/">
          <a>
            <img className="w-20" src="/img/logo.svg" alt="Spot logo" />
          </a>
        </Link>
      </header>

      <main>{children}</main>

      <footer></footer>
    </div>
  )
}
