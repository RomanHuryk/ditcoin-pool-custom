/* Insert your pool's unique Javascript here */

var coinLogoUrl = 'https://github.com/ditcoin/ditcoin-gui/raw/master/images/appicons/96x96.png'
var coinName = 'ditcoin'
var coinSymbolElt = document.getElementById('coinSymbol')
var coinLogoBrandElt = document.createElement('span')

document.getElementsByTagName('title')[0].innerText = coinName + ' Mining Pool'

coinLogoBrandElt.setAttribute('id', 'coinLogo')
coinLogoBrandElt.innerHTML = '<img src="' + coinLogoUrl + '" alt="coinLogo">'

if (coinSymbolElt) coinSymbolElt.parentElement.insertBefore(coinLogoBrandElt, coinSymbolElt)
