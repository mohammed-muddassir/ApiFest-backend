const axios = require('axios');
const cheerio = require('cheerio');


async function getData() {    
    try {
        const baseUrl = "https://coinmarketcap.com/";

        let rawData = await axios.get(baseUrl);
        rawData = rawData.data;

        const $ = cheerio.load(rawData);
        //selector for the data
        const elmSelector = '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr';

       //six datas per coin
        const keys=[
            'rank',
            'name',
            'coin',
            'price',
            '24h',
            '7d',
            'marketCap', 
        ];
        const coinArr=[];

        $(elmSelector).each((parentIdx, parentElem) => {
            
            let keyIdx=0;//for the data
            const coinObject = {};
            //we are taking 10 cypto coins
            if(parentIdx <=9) 
            {
                let next;
                //we loop through each coins data                              
                $(parentElem).children().each((childIdx,childElem) => {
                    let tdValue=$(childElem).text();     
                    if(keyIdx===1 ) { 
                        //to get the first p tag since there are two p tags in it
                         tdValue= $('p:first-child',$(childElem).html()).text()
                         next=$('p:nth-child(2)',$(childElem).html()).text();
                       
                    } 
                    else if(keyIdx===6){
                        tdValue= $('p:first-child',$(childElem).html()).text()
                    }
                    else if(keyIdx==2) {
                        tdValue=next.toLowerCase();

                    }
                    else if(keyIdx===5)  {
                        //to get the first span tag since there are two span tags
                        tdValue=$('span:first-child',$(childElem).html()).text()
                    }
                  
                    if(tdValue && keyIdx<=6) //we dont want more than 6 data's per coin
                    {
                        coinObject[keys[keyIdx]]=tdValue;
                        keyIdx++;
                    }
                });  
                coinArr.push(coinObject);//storing each coin's data(object) in an array 
            }            
        });
        return coinArr;
        
    } catch (err) {
        console.error(err);
    }
}
exports.getData=getData;


