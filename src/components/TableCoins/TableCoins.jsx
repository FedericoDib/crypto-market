import React from 'react'
import './TableCoins.scss'
import CoinRow from '../TableRow/CoinRow'

function TableCoins({coins, search}) {

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())) 

  return (
    <>  <div className="table-responsive-md">
            <table className="table table-dark table-hover table-bordered align-middle">
                <thead>
                    <tr className="table__heads">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Market Cap</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    { filteredCoins.length ? filteredCoins.map((coin, index) => (
                        <CoinRow coin={coin} key={index} index={index} />
                    )) : <tr className="coin__row"><td className="coin__text" colSpan="6">No coins found</td></tr>}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TableCoins