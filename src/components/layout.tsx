import React, { ReactElement } from 'react'

export default function Layout({ children }: React.PropsWithChildren<unknown>): ReactElement {
  return (
    <div className="relative h-screen">
      <main>{children}</main>

      <footer></footer>

      <img
        className="absolute top-0 left-32 h-32 md:right-0"
        src="/img/red.svg"
        alt="red background gradient"
      />
      <img
        className="absolute bottom-0 right-0"
        src="/img/orange.svg"
        alt="orange background gradient"
      />
      <img
        className="absolute bottom-0 left-0"
        src="/img/blue.svg"
        alt="blue background gradient"
      />
    </div>
  )
}
