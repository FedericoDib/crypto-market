import React from 'react'
import './CoinRow.scss'

function CoinRow({coin, index}) {

  console.log(coin.total_volume.toLocaleString(), coin.name)

  const getNumber = (num) => {
    if (num.toString().length > 7) {
      var units = ["M","B","T","Q"]
      var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
      var r = unit%3
      var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
      return x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
    } else {
      return num.toLocaleString()
    }
  }

  return (
    <>
        <tr className="coin__row">
            <td className="coin__text">{index + 1}</td>
            <td>
                <img src={coin.image} alt={coin.name} className="coin__image img-fluid" />
                <span className="coin__name">{coin.name}</span>
                <span className="coin__symbol">{coin.symbol}</span>
            </td>
            <td className="coin__price">{coin.current_price.toFixed(2)} US$</td>
            <td className={coin.price_change_percentage_24h < 0 ? 'coin__text coin__red' : 'coin__text coin__green'}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td className="coin__text">{getNumber(coin.market_cap)} US$</td>
            <td className="coin__text">{getNumber(coin.total_volume)} US$</td>
        </tr>
    </>
  )
}

export default CoinRow