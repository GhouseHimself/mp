import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Discover the latest additions to our property listings. Explore homes, apartments, offices, and more, meticulously curated for your convenience and satisfaction.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
