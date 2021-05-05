async function fetchCoinData(coin_id) {
  const data_raw = await fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}`)
  const data = await data_raw.json()

  const bitcoin_price_usd = data['market_data']['current_price']['usd']
  console.log("BITCOIN PRICE USD",bitcoin_price_usd)

  const bitcoin_price_name = data['name']

  const bitcoin_price_container = document.querySelector('#bitcoin-value')
  bitcoin_price_container.innerText = `$ ${bitcoin_price_usd}`

  const bitcoin_name_container = document.querySelector('#bitcoin-name')
  bitcoin_name_container.innerText = bitcoin_price_name

  console.log("############################################")
  console.log("          T E R M I N A D O con async await ")
}

// TAREA: Hacerlo con + de 3 monedas (o las que quiera) y buscar el bitcoin en fetchAllCoins
function fetchAllCoins() {
  fetch('https://api.coingecko.com/api/v3/coins/list')
    .then(data => {
      return data.json()
    })
    .then(data => {
      fetchCoinData(data[0]['id'])
      fetchCoinData(data[1]['id'])
    })
}

export {
  fetchAllCoins,
}
