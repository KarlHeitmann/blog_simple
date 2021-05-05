// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"

import "./main.scss"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


async function fetchCoinData() {
  const data_raw = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  const data = await data_raw.json()

  const bitcoin_price_usd = data['market_data']['current_price']['usd']
  console.log("BITCOIN PRICE USD",bitcoin_price_usd)

  const bitcoin_price_name = data['name']

  const bitcoin_price_container = document.querySelector('#bitcoin-value')
  bitcoin_price_container.innerText = `$ ${bitcoin_price_usd}`

  const bitcoin_name_container = document.querySelector('#bitcoin-name')
  bitcoin_name_container.innerText = bitcoin_price_name

  console.log("############################################")
  console.log("          T E R M I N A D O")
}

document.addEventListener('turbolinks:load', fetchCoinData)
