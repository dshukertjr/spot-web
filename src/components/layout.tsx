import React, { ReactElement } from 'react'

export default function Layout({
  title,
  children,
}: React.PropsWithChildren<{ title?: string }>): ReactElement {
  return (
    <div>
      <main>
        <h1>{title}</h1>
        {children}
      </main>

      <footer></footer>
    </div>
  )
}
