// Test component only, when you clone basepolymerit repository, you are free to use this code as
// a starting point of develop your own component. But you're free to remove it.
//

'use strict';

// selected playbasis.js for testing purpose
let Playbasis = require('playbasis.js');

class StockTicker {

  beforeRegister() {
    // Takes camelcase class name "StockTicker" -> "stock-ticker".
    let is = this.constructor.name.replace(/\W+/g, '-')
        .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

    this.is = is;
    this.properties = {
      symbols: {
        type: Array,
        value: function() { return []; },
        observer: '_updateQuotes'
      },
      tickers: {
        type: Array,
        value: function() { return []; }
      }
    };
  }

  _updateQuotes() {
    if (!this.symbols.length) {
      return;
    }

    let url = `https://finance.google.com/finance/info?client=ig&q=${this.symbols}`;
    url = `${url}`;

    console.log(this.symbols);

    fetch(url).then(resp => resp.text()).then(text => {
      // Remove // prefix from response and parse as JSON.
      let tickers = JSON.parse(text.slice(text.indexOf('[')));
      this.tickers = tickers;
    });
  }

  _computeColor(gain) {
    return `color:${gain >= 0 ? '#4CAF50' : '#F44336'}`;
  }

  _computeArrow(gain) {
    return `${gain >= 0 ? '▲' : '▼'}`;
  }

  _computeHref(ticker) {
    return `https://www.google.com/finance?q=${ticker}`;
  }

  _computePoints(points) {
    return Math.abs(points);
  }

  _computePercent(percent) {
    return percent.slice(1);
  }

  dummyStr(str) {
    return "dummy:" + str;
  }

  buildAndAuthPlaybasis() {
    Playbasis.builder
     .setApiKey("2043203153")
     .setApiSecret("144da4c8df85b94dcdf1f228ced27a32")
     .build();

    Playbasis.authApi.auth()
      .then((result) => {
        console.log(result);
      }, (e) => {
        console.log(e);
      });
  }
}

// Register the element using Polymer's constructor.
Polymer(StockTicker);