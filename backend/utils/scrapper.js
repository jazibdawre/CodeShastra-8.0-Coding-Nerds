const puppeteer = require('puppeteer');
const Banks = require('../models/bank');

module.exports.scrap = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // executablePath: 'C:\\Program Files\\Google\\Chrome\\ṭApplication\\chrome.exe',
        executablePath: 'C:\\Program Files\\chrome-win\\chrome-win\\chrome.exe',
        
        ignoreDefaultArgs: ["--enable-automation"],
    });

    const page = await browser.newPage();
    let coupons = []
    let urls = ['https://www.icicibank.com/offers/categories/everyday-delights.page?','https://www.icicibank.com/offers/categories/emi-fest.page']

    await page.goto('https://www.google.com/');
    await (await browser.pages())[0].close()

    for ( let k = 0 ; k <= 1 ; k++){
        await page.goto(urls[k]);
        await page.waitForSelector('div.offer-card', {visible: true})
        let divs = await page.$$("div.offer-card")

        for (let i = 0 ; i < divs.length ; i++){
            const div = divs[i]
            let imgURL = "https://www.icicibank.com/" + await div.$eval('div.card-inner div.media img', img => img.getAttribute('src'))
    
            let title = await div.$eval('div.card-inner div.content div.top-content div.title', div => div.textContent)
    
            let description = await div.$eval('div.card-inner div.content div.top-content div.description', div => div.textContent)

            let offers = await div.$$('div.card-inner div.content div.top-content div.offer-coupon-content div.offer-tags div.tag')
            let _offer = []
            for(let j = 0 ; j < offers.length ; j++){
                let offer = offers[j]
                let price = await offer.$eval('p', p => p.textContent)
                _offer.push(price)
            }

            let price = null
            let discount = null
            let expiry = null

            for(let m = 0 ; m < _offer.length ; m++){
                let k = _offer[m]
                if(k.includes('Get')){
                    const regex = /\d+/g
                    let found = parseInt(k.match(regex).join(''))

                    if(k.includes('%')){
                        discount = found
                    }else{
                        price = parseInt(found)
                    }
                }else{
                    a = k.split(' ')
                    expiry = new Date(a[3] + ' ' + a[4] + ' ' + a[5]).toISOString()
                }
            }
            coupons.push({
                imgURL: imgURL,
                title: title,
                discount: discount,
                price: price,
                description: description,
                expiry: expiry
            })
        }
    }
    await browser.close();
    Banks.findOne({name:'ICICI'} , async(err,bank) => {
        if(err){
            console.log(err)
        }else{
            bank.coupons = [...bank.coupons, ...coupons]
            await bank.save()
            console.log("Couponds Added")
        }
    })
};