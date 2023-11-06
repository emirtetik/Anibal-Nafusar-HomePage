import type { Metadata } from 'next'
import './globals.css'
import Provider from './provider'
import Footer from './components/layout/footer'
import ResponsiveHeader from './components/layout/header/responsiveHeader'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <Provider>
        <ResponsiveHeader/>
          {children}
          <Footer/>
        </Provider>
        </body>
    </html>
  )
}
