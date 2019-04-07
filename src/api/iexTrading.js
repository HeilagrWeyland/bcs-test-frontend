export default {
    GET_INSTRUMENT: instrument => `https://api.iextrading.com/1.0/stock/${instrument}/company`,
    GET_QUOTE: instrument => `https://api.iextrading.com/1.0/stock/${instrument}/quote`,
    GET_QUOTES: () => `https://api.iextrading.com/1.0/stock/market/batch`,
};
