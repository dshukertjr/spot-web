import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { getMobileOperatingSystem } from '../util/constants'

export default function Layout({ children }: React.PropsWithChildren<unknown>): ReactElement {
  const [isIos, setIsIos] = useState(false)
  useEffect(() => {
    setIsIos(getMobileOperatingSystem() == 'ios')
  }, [])
  return (
    <div className="">
      <div className={`fixed inset-0 ${styles.scaffoldGradient}`}>
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

      <main className="relative overflow-auto w-full h-full px-6 py-10">{children}</main>

      <header className="fixed left-4 top-4">
        <Link href="/">
          <a>
            <img className="w-20" src="/img/logo.svg" alt="Spot logo" />
          </a>
        </Link>
      </header>

      <div className="fixed shadow-md bottom-6 rounded-2xl bg-white p-4 text-center left-6 right-6">
        <div className="pb-2 font-bold">Download the App now!</div>
        {isIos ? (
          <a
            href="https://apps.apple.com/us/app/spot-videos/id1564675926?utm_source=website&utm_campaign=static"
            target="blank"
          >
            <img className="block m-auto" src="/img/ios.svg" alt="App Store download button" />
          </a>
        ) : (
          <a
            href="https://play.google.com/store/apps/details?id=app.spotvideo&utm_source=website&utm_campaign=static"
            target="blank"
          >
            <img
              className="block m-auto"
              src="/img/android.svg"
              alt="Google Play download button"
            />
          </a>
        )}
      </div>
    </div>
  )
}
