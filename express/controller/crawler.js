const axios = require('axios');
const cheerio = require('cheerio');

async function cnblogs () {
    const res = await axios.get('https://www.cnblogs.com/');
    const html = res.data;
    console.log(html);
    // .then(res => {
    //     var html = res.data;
    //     const $ = cheerio.load(html);
    //     const $href = $('#editor_pick_lnk');
    //     let name = $href.text();
    //     let href = $href.attr('href');
    //     return { name, href };
    // })
    // .then(res => {
    //     axios.get(res.href)
    //     .then
    // })
};

cnblogs();