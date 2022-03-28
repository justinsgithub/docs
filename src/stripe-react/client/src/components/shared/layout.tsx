import { FC, ReactNode } from 'react'
import Header from '../header/header'
import Footer from '../single-product/footer/footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
  <>
      <Header />
        <main>
          {children}
        </main>
      <Footer/>
  </>
  )
}
