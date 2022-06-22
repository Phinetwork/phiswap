# Φ Phiswap Swap Exchange

<p><a href="https://graph.phiswap.com/subgraphs/name/exchange/graphql">Phiswap Graphql</a></p>

[Phiswap](https://phiswap.com/) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [PHI Smart Chain](https://phi.network) (PHI). It is fast, cheap, and allows anyone to participate.

This repo is responsible for the **exchange** interface of the AMM: [app.phiswap.com](https://app.phiswap.com/)

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

<p><a href="https://github.com/Phinetwork/phiswap/blob/main/phiswap.json">Token List Json</a></p>

In order to streamline the review of the contribution we ask you
to ensure the following steps have been taken:

1. Go To Phiswap.json

2. Upload a json file for additional info. File name is your token symbol in the `uppercase` format with suffix


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
