const axios = require('axios').default;
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const BASE_URL = 'https://jobs.github.com/positions.json';

const fetchGithub = async () => {
    const jobs = [];
    let page = 1;
    let resultCount = 1;
    while(resultCount > 0) {
        const fetchData = await axios.get(`${BASE_URL}?page=${page}`);
        const results = fetchData.data;
        resultCount = results.length;
        console.log(resultCount);
        jobs.push(...results);
        page++;
    }
    console.log(jobs.length);
    const success = await setAsync('github', JSON.stringify(jobs));
    console.log(success);
}

fetchGithub();