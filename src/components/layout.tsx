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

      <main className={`relative overflow-auto w-full h-full px-6 py-10 ${styles.mainContents}`}>
        {children}
      </main>

      <div className="hidden md:block fixed top-1/2 left-12 right-1/2 -mt-32">
        <img src="/img/phrase.svg" alt="Share your Monent right at your Location" />
        <div className="flex pt-12">
          <a
            className="block mr-8"
            href="https://apps.apple.com/us/app/spot-videos/id1564675926?utm_source=website&utm_campaign=static"
            target="blank"
          >
            <img className="block h-12" src="/img/ios.svg" alt="App Store download button" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.spotvideo&utm_source=website&utm_campaign=static"
            target="blank"
          >
            <img className="block h-12" src="/img/android.svg" alt="Google Play download button" />
          </a>
        </div>
        <a
          href="https://www.producthunt.com/posts/spot-2d300f54-7a0a-4dbf-aee2-4a75311217cc?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-spot-2d300f54-7a0a-4dbf-aee2-4a75311217cc"
          target="_blank"
          rel="noreferrer"
          className="block mt-4"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=297952&theme=light"
            alt="Spot - Map-based video sharing app | Product Hunt"
            className="h-12"
          />
        </a>
      </div>

      <header className="fixed left-4 top-4 md:left-12 md:top-8">
        <Link href="/">
          <a>
            <img className="w-20" src="/img/logo.svg" alt="Spot logo" />
          </a>
        </Link>
      </header>

      <div className="fixed shadow-md bottom-6 rounded-2xl bg-white p-4 text-center left-6 right-6 md:hidden">
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
