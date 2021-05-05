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

async function getBitcoinData() {
  const result = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  console.log("result", result)
  const bitcoin_data = await result.json()
  console.log("bitcoin_data", bitcoin_data)
  // Esto es desestructurar un objeto en JavaScript. La siguiente linea crea las variables symbol y name tomándolas de las llaves del objeto bitcoin_data.
  // Las variables deben llevar el mismo nombre de las llaves del objeto para que funcione,
  // y deben rodearse de {} justo después de "const" (aunque también puede usar "var" o "let")
  const {symbol, name} = bitcoin_data
  const bannerContainer = document.querySelector("#banner-container")
  // bannerContainer.innerHTML = `
  //   <h1>${name}</h1>
  //   <h2>${symbol}</h2>
  //   <p>Valor: ${bitcoin_data.market_data.current_price.usd}</p>
  // `
  bannerContainer.innerHTML = `
    <h1>${name} - ${symbol}</h1>
    <p>Valor: ${bitcoin_data.market_data.current_price.usd}</p>
  `
}

document.addEventListener('turbolinks:load', () => {
  console.log("turbolinks:load!!!!!")
  getBitcoinData()
})
