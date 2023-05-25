import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard'
import Medium from '@/components/Medium'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'


export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Mock BNB</title>
        <link rel="icon" href="/favicon.ico"  />
      </Head>

    <Header />
    <Banner />

    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5 text-gray-800">Explore Nearby Places</h2>

        {/* pull some data from a server - API endpoints*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </div>

      </section>

      <section>
        <h2 className="text-4xl font-semibold py-8 text-gray-800">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(item => (
            <Medium key={item.img}
               img={item.img}
               title={item.title}
            />
          ))}
        </div>
      </section>
      <LargeCard
      img="https://links.papareact.com/4cj"
       title ="The Greatest Outdoors"
       description ="Wishlists curated by Kanayo"
       buttonText="Take me Out"  />


    </main>

    <Footer />
    </div>

  )
}

//fetch API. papareact json url no longer exists . i devised this way to store the json locally. I am using the api route. created a data.json and stored in public folder. then created a data.js. stored in pages/api
export async function getStaticProps() {
  // const exploreData = await fetch(`http://localhost:3000/data.json`).then(
    const exploreData = await fetch(`http://localhost:3000/api/data`).then(
    (res) => res.json()    ///here store in a json
);

const cardsData = await fetch (`http://localhost:3000/api/slide`).then(
  (res) => res.json() //retrieve the json
)

return {
  props:{
    exploreData,
    cardsData    ///pass to the component
  }
}

}
