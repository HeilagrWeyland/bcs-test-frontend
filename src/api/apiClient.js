import request from 'superagent';

export const get = (url, params) => request
    .get(url)
    .query(params)
    .retry(2);
