import React, { useState, useEffect } from 'react'
import './Home.scss'
import axios from 'axios'
import TableCoins from '../TableCoins/TableCoins'
import Loader from '../Loader/Loader'
import Footer from '../Footer/Footer'

function Home() {

const [coins, setCoins] = useState([])
const [search, setSearch] = useState('')

const getCoins = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(response.data)
    setCoins(response.data)
}

useEffect(() => {
    getCoins()
}, [])


const handleSearch = e => {
    setSearch(e.target.value)
}

  return (
    <>
        <div className="home__container">
            <span className="home__title">Crypto markets</span>
            <input type="text" placeholder='Search a Coin...' className='form-control bg-dark text-light border-0 mb-4 text-center' onChange={handleSearch} />
            { coins.length ? (<TableCoins coins={coins} search={search} />) : (<Loader />)}
            <Footer />
        </div>
    </>
  )
}

export default Home