import Image from 'next/image'
import ThemeButton from './components/_corecomponent/button/themeButton'
import Video from './components/_corecomponent/video'
import Hero from './components/hero'
import ProductCategory from './components/feature/products'

export default function Home() {
  return (
    <main >
      <Hero/>
      <ProductCategory/>
      {/* <Video/> */}
    </main>
  )
}
