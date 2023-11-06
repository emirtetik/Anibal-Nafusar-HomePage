import Hero from './components/hero'
import Category from './components/category'
import CarouselProduct from './components/carousel'
import Card from './components/card'
import Video from './components/_corecomponent/video'
import Stats from './components/feature/stats'

export default function Home() {
  return (
    <main >
      {/* <Video/> */}
      <Hero/>
      <Category/>
      <CarouselProduct/>
      <Card/>
      <Stats/>
    </main>
  )
}
