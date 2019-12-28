const axios = require('axios');
const cheerio = require('cheerio');
const articleCtrl = require('./article');


async function cnblogs () {
    const res = await axios.get('https://www.cnblogs.com/');
    const $ = cheerio.load(res.data);
    const $href = $('#editor_pick_lnk');
    let name = $href.text();
    let href = $href.attr('href');
    
    const subRes = await axios.get(href);
    const $$ = cheerio.load(subRes.data);
    const bodyStr = $$('#cnblogs_post_body').html();
    const cRes = await articleCtrl.create({
        from: 'cnblogs',
        title: name,
        article: bodyStr,
        hot_level: 1,
        favor: 1,
        comment: 1
    });
};

module.exports = {
    cnblogs
};