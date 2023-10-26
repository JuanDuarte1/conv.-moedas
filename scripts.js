


const convertButton = document.querySelector(".convert-button") // botao de conversao
const currencySelect = document.querySelector(".currency-select") // seletor de moedas

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas convertidas

    const dolarToday = 5.03;
    const euroToday = 5.32;
    const bitcoinToday = 170.730;
    const libraToday = 6.05;

    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor de Dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        //se o select estiver selecionado o valor de Euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "bitcoin") {
        //se o select estiver selecionado o valor de Bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "libra") {
        //se o select estiver selecionado o valor de Dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src = "./assets/Dolar.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/Euro.png"
        }

        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/Bitcoin.png"
        }

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/Libra.png"
        }


        convertValues()


    }

    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)

}