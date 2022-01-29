#  Crypto-Verse API Documentation
#### This documentation will showcase the functionality of our Crypto Currency API.


## Authors
* Sayak Saha **(TEAM LEAD)**
* Mohammed Muddasir
* Aditya Kumar Singh
* Smeet Kothari

## Description of API
- This API will fetch current price, market cap, price change percentage and total volume of a specific coin of your need in real time.
- We used Postman Scheme to build this API
- Data of the API was scrapped from Crypto Market Place
- We scrapped the data of **10 coins**
- Each coin will have 6 parameters: **Coin, Name, Price, Market Cap, 24h, Rank, 7d**

## Tech Stack
- Node JS
- Fastify Framework
- Express
- cors
- cheerio

## HTTP Methods

## Getting all the coins
Endpoint is ``` /coin```


```
fastify.get("/coin", async (req, res) => {
  const d = await data.getData();
  price["Crypto"] = [];
  price["Crypto"].push(d);
  res.send(price);
});

```

## Getting a Specific Coin
Endpoint is ``` /coin/<coinName>```


```
fastify.get("/coin/:id", async (req, res) => {
  const id = req.params.id;
  if (coins.includes(id)) {
    user = await data.getData();
    user.forEach((crypto) => {
      if (crypto.coin === id) {
        return res.send(crypto);
      }
    });
  } else {
    res.send("enter correct coin");
  }
});
```

## Adding a Coin
Endpoint is ``` /coin```

```
fastify.post("/save/:coin", async (req, res) => {
  const data = req.body;
  price["User"].push(data);
  res.code(201).send(price);
});
```

## Request Body

```
    {
      "rank": "1",
      "name": "Bitcoin",
      "coin": "btc",
      "price": "2.09%",
      "24h": "4.30%",
      "7d": "$699.31B",
      "marketCap": "$23,549,725,582"
    }

```



## Links

[Presentation](https://drive.google.com/file/d/1j6qdOIWJpuJ68hfgihzu27xBHXK_fwJO/view?usp=sharing)
