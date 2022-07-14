# Φ Phiswap DEX AMM Exchange

<p><a href="https://graph.phiswap.com/subgraphs/name/exchange/graphql">Phiswap Graphql</a></p>

<p><a href="https://price.phi.network/api/ticker?filter=WPHI">WPHI Price Consumable API</a></p>
Price Consumable API SYNTAX
https://price.phi.network/api/ticker?filter=(TOKEN-SYMBOL)
<p></p>


[Phiswap](https://phiswap.com/) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [PHI Smart Chain](https://phi.network) (PHI). It is fast, cheap, and allows anyone to participate.

This repo is responsible for the **exchange** interface of the AMM: [app.phiswap.com](https://app.phiswap.com/)

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

<p><a href="https://github.com/Phinetwork/phiswap/blob/main/phiswap.json">Token List Json</a></p>

In order to streamline the review of the contribution we ask you
to ensure the following steps have been taken:

1. Go To <p><a href="https://github.com/Phinetwork/phiswap/blob/main/phiswap.json">Token List Json</a></p>

2. Add New Tokens Information In Json Format Example Below
3. Submit A Pull Request 

Example:

```json
    {
      "name": "Element",
      "symbol": "Element",
      "address": "0x2977cbcf82fc2069050cdcd7cadd97497fd28904",
      "chainId": 4181,
      "decimals": 18,
      "logoURI": "https://instantmarketcap.com/images/1647212160.png"
    },

```
Additional Requirements To Be Consider For Listing On Phiswap As Verified Token & Logo Addition To Phiswap Analytics 
1. $10,000,000+ In Liquidity 
2. Price Populates On Phiswap Analytics
3. 6+ Months Of Trading Activity
4. Average Daily Trading Volume of $20,000+
