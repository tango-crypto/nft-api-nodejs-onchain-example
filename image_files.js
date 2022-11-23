const axios = require('axios').default;

const HOST = 'cardano-testnet.tangocrypto.com';

const APP_ID = 'XXXXXXXXXXXXXX';
const API_KEY = 'XXXXXXXXXXXXX';

axios.defaults.baseURL = `https://${HOST}/${APP_ID}/v1`;
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';


const collection = {
  "name": "Candles2",
  "description": "Onchain images",
  "url": "https://www.candles.com",
  "payout_address": "addr_test1qp9mj7vnenx4v99hw7ztfq03n7dmmujpgtlyfjhhel9w67nk72usllcew208n60ym94xcptfrgytuy5apwp565x28jgsg0ztq3",
  "policy": {
    "lock": true,
    "lock_time": "2024-04-30"
  },
  "metadata": {
    "asset_name": "<asset_name>",
    "name": "<name>",
    "image": "<image_link>",
    "media_type": "<mime_type>",
    "description": "<description>",
    "files": {
      "name": "<file_name>",
      "mediaType": "<mime_type>",
      "src": "<src>",
    },
    "attributes": {
      "color": "<color>",
      "collection": "On-chain animation Collection",
      "artist": "Tangocrypto",
      "twitter": "https://twitter.com/tango_crypto",
      "copyright": "Tangocrypto 2022"
    },
    "version": "1.0"
  }
};

const tokensArr = {
  "tokens": [{
      "asset_name": "Candle",
      "name": "Candle",
      "description": "Funny candle",
      "media_type": "image/png",
      "image": "ipfs://QmRZRTzfmSxJs4TMfxPvEpk3GZLf6bMWt6UJp5HyVwh2w2",
      "metadata_attributes": [{
        "tag": "<color>",
        "name": "Candle color",
        "value": "White"
      }],
      "files": [{
        "metadata_attributes": [{
            "tag": "<file_name>",
            "name": "File name",
            "value": "Candle"
          },
          {
            "tag": "<mime_type>",
            "name": "Mime type",
            "value": "text/html"
          },
          {
            "tag": "<src>",
            "name": "File link",
            "value": [
              "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPj",
              "xoZWFkPiA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+IDx0aXRsZT5DYW5kbGUgRnVuIC",
              "hQdXJlIENTUyBBbmltYXRpb24pPC90aXRsZT4gPHN0eWxlPmJvZHl7YmFja2dyb3",
              "VuZC1jb2xvcjogI0ZGRjsgYW5pbWF0aW9uOiBjaGFuZ2UtYmFja2dyb3VuZCAzcy",
              "BpbmZpbml0ZSBsaW5lYXI7fS53cmFwcGVye3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbG",
              "VmdDogNTAlOyB0b3A6IDcwJTsgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSkgdH",
              "JhbnNsYXRlKC01MCUsIC01MCUpO30uZmxvb3J7cG9zaXRpb246IGFic29sdXRlOy",
              "BsZWZ0OiA1MCU7IHRvcDogNTAlOyB3aWR0aDogMzUwcHg7IGhlaWdodDogNXB4Oy",
              "BiYWNrZ3JvdW5kOiAjNjczQzYzOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC",
              "AtNTAlKTsgYm94LXNoYWRvdzogMHB4IDJweCA1cHggIzExMTsgei1pbmRleDogMj",
              "t9LmNhbmRsZXN7cG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1MCU7IHRvcDogNT",
              "AlOyB3aWR0aDogMjUwcHg7IGhlaWdodDogMTUwcHg7IHRyYW5zZm9ybTogdHJhbn",
              "NsYXRlKC01MCUsIC0xMDAlKTsgei1pbmRleDogMTt9LmNhbmRsZTF7cG9zaXRpb2",
              "46IGFic29sdXRlOyBsZWZ0OiA1MCU7IHRvcDogNTAlOyB3aWR0aDogMzVweDsgaG",
              "VpZ2h0OiAxMDBweDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAzcHggc29saW",
              "QgIzY3M0M2MzsgYm9yZGVyLWJvdHRvbTogMHB4OyBib3JkZXItcmFkaXVzOiAzcH",
              "g7IHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDsgdHJhbnNmb3JtOiB0cm",
              "Fuc2xhdGUoNjAlLCAtMjUlKTsgYm94LXNoYWRvdzogLTJweCAwcHggMHB4ICM5NW",
              "M2ZjIgaW5zZXQ7IGFuaW1hdGlvbjogZXhwYW5kLWJvZHkgM3MgaW5maW5pdGUgbG",
              "luZWFyO30uY2FuZGxlMV9fc3RpY2ssIC5jYW5kbGUyX19zdGlja3twb3NpdGlvbj",
              "ogYWJzb2x1dGU7IGxlZnQ6IDUwJTsgdG9wOiAwJTsgd2lkdGg6IDNweDsgaGVpZ2",
              "h0OiAxNXB4OyBiYWNrZ3JvdW5kOiAjNjczQzYzOyBib3JkZXItcmFkaXVzOiA4cH",
              "g7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTt9LmNhbmRsZTJfX3",
              "N0aWNre2hlaWdodDogMTJweDsgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbn",
              "RlcjsgYW5pbWF0aW9uOiBzdGljay1hbmltYXRpb24gM3MgaW5maW5pdGUgbGluZW",
              "FyO30uY2FuZGxlMV9fZXllcywgLmNhbmRsZTJfX2V5ZXN7cG9zaXRpb246IGFic2",
              "9sdXRlOyBsZWZ0OiA1MCU7IHRvcDogMCU7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6ID",
              "MwcHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTt9LmNhbmRsZTFfX2",
              "V5ZXMtb25le3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMzAlOyB0b3A6IDIwJT",
              "sgd2lkdGg6IDVweDsgaGVpZ2h0OiA1cHg7IGJvcmRlci1yYWRpdXM6IDEwMCU7IG",
              "JhY2tncm91bmQ6ICM2NzNDNjM7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsID",
              "AlKTsgYW5pbWF0aW9uOiBibGluay1leWVzIDNzIGluZmluaXRlIGxpbmVhcjt9Lm",
              "NhbmRsZTFfX2V5ZXMtdHdve3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzAlOy",
              "B0b3A6IDIwJTsgd2lkdGg6IDVweDsgaGVpZ2h0OiA1cHg7IGJvcmRlci1yYWRpdX",
              "M6IDEwMCU7IGJhY2tncm91bmQ6ICM2NzNDNjM7IHRyYW5zZm9ybTogdHJhbnNsYX",
              "RlKC03MCUsIDAlKTsgYW5pbWF0aW9uOiBibGluay1leWVzIDNzIGluZmluaXRlIG",
              "xpbmVhcjt9LmNhbmRsZTFfX21vdXRoe3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdD",
              "ogNDAlOyB0b3A6IDIwJTsgd2lkdGg6IDBweDsgaGVpZ2h0OiAwcHg7IGJvcmRlci",
              "1yYWRpdXM6IDIwcHg7IGJhY2tncm91bmQ6ICM2NzNDNjM7IHRyYW5zZm9ybTogdH",
              "JhbnNsYXRlKC01MCUsIC01MCUpOyBhbmltYXRpb246IHVmZiAzcyBpbmZpbml0ZS",
              "BsaW5lYXI7fS5jYW5kbGVfX3Ntb2tlLW9uZXtwb3NpdGlvbjogYWJzb2x1dGU7IG",
              "xlZnQ6IDMwJTsgdG9wOiA1MCU7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDNweDsgYm",
              "Fja2dyb3VuZDogZ3JleTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJS",
              "k7IGFuaW1hdGlvbjogbW92ZS1sZWZ0IDNzIGluZmluaXRlIGxpbmVhcjt9LmNhbm",
              "RsZV9fc21va2UtdHdve3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMzAlOyB0b3",
              "A6IDQwJTsgd2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgYm9yZGVyLXJhZGl1cz",
              "ogMTBweDsgYmFja2dyb3VuZDogZ3JleTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLT",
              "UwJSwgLTUwJSk7IGFuaW1hdGlvbjogbW92ZS10b3AgM3MgaW5maW5pdGUgbGluZW",
              "FyO30uY2FuZGxlMntwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDIwJTsgdG9wOi",
              "A2NSU7IHdpZHRoOiA0MnB4OyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQ6ICNmZm",
              "Y7IGJvcmRlcjogM3B4IHNvbGlkICM2NzNDNjM7IGJvcmRlci1ib3R0b206IDBweD",
              "sgYm9yZGVyLXJhZGl1czogM3B4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC",
              "0xNSUpOyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7IGJveC1zaGFkb3",
              "c6IC0ycHggMHB4IDBweCAjOTVjNmYyIGluc2V0OyBhbmltYXRpb246IHNoYWtlLW",
              "xlZnQgM3MgaW5maW5pdGUgbGluZWFyO30uY2FuZGxlMl9fZXllcy1vbmV7cG9zaX",
              "Rpb246IGFic29sdXRlOyBsZWZ0OiAzMCU7IHRvcDogNTAlOyB3aWR0aDogNXB4Oy",
              "BoZWlnaHQ6IDVweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXI6IDBweC",
              "Bzb2xpZCAjNjczQzYzOyBib3JkZXItcmFkaXVzOiAxMDAlOyBmbG9hdDogbGVmdD",
              "sgYmFja2dyb3VuZDogIzY3M0M2MzsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTgwJS",
              "wgMCUpOyBhbmltYXRpb246IGNoYW5nZXRvLWxvd2VyIDNzIGluZmluaXRlIGxpbm",
              "Vhcjt9LmNhbmRsZTJfX2V5ZXMtdHdve3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdD",
              "ogNzAlOyB0b3A6IDUwJTsgd2lkdGg6IDVweDsgaGVpZ2h0OiA1cHg7IGRpc3BsYX",
              "k6IGlubGluZS1ibG9jazsgYm9yZGVyOiAwcHggc29saWQgIzY3M0M2MzsgYm9yZG",
              "VyLXJhZGl1czogMTAwJTsgZmxvYXQ6IGxlZnQ7IGJhY2tncm91bmQ6ICM2NzNDNj",
              "M7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MCUsIDAlKTsgYW5pbWF0aW9uOiBjaG",
              "FuZ2V0by1ncmVhdGVyIDNzIGluZmluaXRlIGxpbmVhcjt9LmxpZ2h0X193YXZle3",
              "Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAzNSU7IGxlZnQ6IDM1JTsgd2lkdGg6ID",
              "c1cHg7IGhlaWdodDogNzVweDsgYm9yZGVyLXJhZGl1czogMTAwJTsgei1pbmRleD",
              "ogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSkgc2NhbGUoMi41LC",
              "AyLjUpOyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMi",
              "k7IGFuaW1hdGlvbjogZXhwYW5kLWxpZ2h0IDNzIGluZmluaXRlIGxpbmVhcjt9Lm",
              "NhbmRsZTJfX2ZpcmV7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdD",
              "ogNDAlOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDE2cHg7IGhlaWdodDogMjBweD",
              "sgYmFja2dyb3VuZC1jb2xvcjogcmVkOyBib3JkZXItcmFkaXVzOiA1MCUgNTAlID",
              "UwJSA1MCUgLyA2MCUgNjAlIDQwJSA0MCU7IGJhY2tncm91bmQ6ICNGRjk4MDA7IH",
              "RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBhbmltYXRpb246IGRhbm",
              "NlLWZpcmUgM3MgaW5maW5pdGUgbGluZWFyO31Aa2V5ZnJhbWVzIGJsaW5rLWV5ZX",
              "N7MCUsIDM1JXtvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLC",
              "AwJSk7fTM2JSwgMzkle29wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC",
              "03MCUsIDAlKTt9NDAle29wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC",
              "03MCUsIDAlKTt9NTAlLCA2NSV7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE0MCUsID",
              "AlKTt9NjYle3RyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDAlKTt9fUBrZXlmcm",
              "FtZXMgZXhwYW5kLWJvZHl7MCUsIDQwJXt0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIH",
              "RyYW5zbGF0ZSg2MCUsIC0yNSUpO300NSUsIDU1JXt0cmFuc2Zvcm06IHNjYWxlKD",
              "EuMSwgMS4xKSB0cmFuc2xhdGUoNjAlLCAtMjglKTt9NjAle3RyYW5zZm9ybTogc2",
              "NhbGUoMC44OSwgMC44OSkgdHJhbnNsYXRlKDYwJSwgLTI1JSk7fTY1JXt0cmFuc2",
              "Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZSg2MCUsIC0yNSUpO303MCV7dHJhbn",
              "Nmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KSB0cmFuc2xhdGUoNjAlLCAtMjUlKTt9Nz",
              "Ule3RyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKDYwJSwgLTI1JSk7fX",
              "1Aa2V5ZnJhbWVzIHVmZnswJSwgNDAle3dpZHRoOiAwcHg7IGhlaWdodDogMHB4O3",
              "01MCUsIDU0JXt3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyBsZWZ0OiAzMCU7fT",
              "U5JXt3aWR0aDogNXB4OyBoZWlnaHQ6IDVweDsgbGVmdDogMjAlO302MiV7d2lkdG",
              "g6IDJweDsgaGVpZ2h0OiAycHg7IGxlZnQ6IDIwJTt9Njcle3dpZHRoOiAwcHg7IG",
              "hlaWdodDogMHB4OyBsZWZ0OiAzMCU7fX1Aa2V5ZnJhbWVzIGNoYW5nZS1iYWNrZ3",
              "JvdW5kezAlLCA1OSUsIDk4JSwgMTAwJXtiYWNrZ3JvdW5kOiAjRkZGO302MSUsID",
              "k3JXtiYWNrZ3JvdW5kOiAjMDAwO319QGtleWZyYW1lcyBtb3ZlLWxlZnR7MCUsID",
              "U5JSwgMTAwJXt3aWR0aDogMHB4OyBsZWZ0OiA0MCU7fTYwJXt3aWR0aDogMzBweD",
              "sgbGVmdDogMzAlO302OCV7d2lkdGg6IDBweDsgbGVmdDogMjAlO319QGtleWZyYW",
              "1lcyBtb3ZlLXRvcHswJSwgNjQlLCAxMDAle3dpZHRoOiAwcHg7IGhlaWdodDogMH",
              "B4OyB0b3A6IDAlO302NSV7d2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgdG9wOi",
              "A0MCU7IGxlZnQ6IDQwJTt9ODAle3dpZHRoOiAwcHg7IGhlaWdodDogMHB4OyB0b3",
              "A6IDIwJTt9fUBrZXlmcmFtZXMgc2hha2UtbGVmdHswJSwgNDAle2xlZnQ6IDIwJT",
              "sgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAlLCAtMTUlKTt9NTAlLCA1NCV7bGVmdD",
              "ogMjAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0xNSUpO301OSV7bGVmdD",
              "ogMjAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0xNSUpO302MiV7bGVmdD",
              "ogMTglOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0xNSUpO302NSV7bGVmdD",
              "ogMjElOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0xNSUpO302NyV7bGVmdD",
              "ogMjAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0xNSUpO303NSV7bGVmdD",
              "ogMjAlOyB0cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpIHRyYW5zbGF0ZSg2MC",
              "UsIC0xNSUpOyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItY29sb3I6ICM2NzNDNj",
              "M7fTkxJXtsZWZ0OiAyMCU7IHRyYW5zZm9ybTogc2NhbGUoMS4xOCwgMC44MikgdH",
              "JhbnNsYXRlKDYwJSwgLTEwJSk7IGJhY2tncm91bmQ6ICNGNDQzMzY7IGJvcmRlci",
              "1jb2xvcjogI0Y0NDMzNjsgYm94LXNoYWRvdzogLTJweCAwcHggMHB4ICNGNDQzMz",
              "YgaW5zZXQ7fTkyJXtsZWZ0OiAyMCU7IHRyYW5zZm9ybTogc2NhbGUoMC44NSwgMS",
              "4xNSkgdHJhbnNsYXRlKDYwJSwgLTE1JSk7fTk1JXtsZWZ0OiAyMCU7IHRyYW5zZm",
              "9ybTogc2NhbGUoMS4wNSwgMC45NSkgdHJhbnNsYXRlKDYwJSwgLTE1JSk7fTk3JX",
              "tsZWZ0OiAyMCU7IHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKDYwJS",
              "wgLTE1JSk7fX1Aa2V5ZnJhbWVzIHN0aWNrLWFuaW1hdGlvbnswJSwgNDAle2xlZn",
              "Q6IDUwJTsgdG9wOiAwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMC",
              "UpO301MCUsIDU0JXtsZWZ0OiA1MCU7IHRvcDogMCU7IHRyYW5zZm9ybTogdHJhbn",
              "NsYXRlKC01MCUsIC0xMDAlKTt9NTkle2xlZnQ6IDUwJTsgdG9wOiAwJTsgdHJhbn",
              "Nmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO302MiV7bGVmdDogNTAlOyB0b3",
              "A6IDAlOyB0cmFuc2Zvcm06IHJvdGF0ZVooLTE1ZGVnKSB0cmFuc2xhdGUoLTUwJS",
              "wgLTEwMCUpO302NSV7bGVmdDogNTAlOyB0b3A6IDAlOyB0cmFuc2Zvcm06IHJvdG",
              "F0ZVooMTVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7fTcwJXtsZWZ0OiA1MC",
              "U7IHRvcDogMCU7IHRyYW5zZm9ybTogcm90YXRlWigtNWRlZykgdHJhbnNsYXRlKC",
              "01MCUsIC0xMDAlKTt9NzIle2xlZnQ6IDUwJTsgdG9wOiAwJTsgdHJhbnNmb3JtOi",
              "Byb3RhdGVaKDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7fTc0JSwgODQle2",
              "xlZnQ6IDUwJTsgdG9wOiAwJTsgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHRyYW",
              "5zbGF0ZSgtNTAlLCAtMTAwJSk7fTg1JXt0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZG",
              "VnKSB0cmFuc2xhdGUoMCUsIDEyMCUpO305MiV7bGVmdDogNTAlOyB0b3A6IDAlOy",
              "B0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7fX1Aa2V5ZnJhbWVzIG",
              "V4cGFuZC1saWdodHsxMCUsIDI5JSwgNTklLCA4OSV7dHJhbnNmb3JtOiB0cmFuc2",
              "xhdGUoLTI1JSwgLTUwJSkgc2NhbGUoMCwgMCk7IGJvcmRlcjogMnB4IHNvbGlkIH",
              "JnYmEoMjU1LCAyNTUsIDI1NSwgMCk7fTkwJSwgMjAlLCA1MCV7dHJhbnNmb3JtOi",
              "B0cmFuc2xhdGUoLTI1JSwgLTUwJSkgc2NhbGUoMSwgMSk7fTk1JSwgOTYlLCAyNi",
              "UsIDI3JSwgNTYlLCA1NyV7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJS",
              "kgc2NhbGUoMiwgMik7IGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsID",
              "I1NSwgMC41KTt9MCUsIDI4JSwgNTglLCAxMDAle3RyYW5zZm9ybTogdHJhbnNsYX",
              "RlKC0yNSUsIC01MCUpIHNjYWxlKDIuNSwgMi41KTsgYm9yZGVyOiAycHggc29saW",
              "QgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO319QGtleWZyYW1lcyBkYW5jZS1maX",
              "JlezU5JSwgODkle2xlZnQ6IDQwJTsgd2lkdGg6IDBweDsgaGVpZ2h0OiAwcHg7fT",
              "kwJSwgMCUsIDclLCAxNSUsIDIzJSwgMzElLCAzOSUsIDQ3JSwgNTUle2xlZnQ6ID",
              "QwLjglOyB3aWR0aDogMTZweDsgaGVpZ2h0OiAyMHB4OyBiYWNrZ3JvdW5kOiAjRk",
              "ZDMTA3O305NCUsIDMlLCAxMSUsIDE5JSwgMjclLCAzNSUsIDQzJSwgNTElLCA1OC",
              "V7bGVmdDogNDEuMiU7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDIwcHg7IGJhY2tncm",
              "91bmQ6ICNGRjk4MDA7fX1Aa2V5ZnJhbWVzIGNoYW5nZXRvLWxvd2VyezAlLCA3MC",
              "UsIDkwJXtwYWRkaW5nOiAwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZG",
              "VyLXJhZGl1czogMTAwJTsgYmFja2dyb3VuZDogIzY3M0M2MzsgYm9yZGVyLXdpZH",
              "RoOiAwIDAgMCAwOyBib3JkZXI6IDBweCBzb2xpZCAjNjczQzYzOyB0cmFuc2Zvcm",
              "06IHRyYW5zbGF0ZSgtOTAlLCAwJSk7fTcxJSwgODkle2JhY2tncm91bmQ6IG5vbm",
              "U7IGJvcmRlcjogc29saWQgIzY3M0M2MzsgYm9yZGVyLXJhZGl1czogMHB4OyBib3",
              "JkZXItd2lkdGg6IDAgMnB4IDJweCAwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH",
              "BhZGRpbmc6IDFweDsgZmxvYXQ6IGxlZnQ7IHRyYW5zZm9ybS1vcmlnaW46IGJvdH",
              "RvbSBsZWZ0OyB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNT",
              "AlLCAtNjUlKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW",
              "5zbGF0ZSgtNTAlLCAtNjUlKTt9fUBrZXlmcmFtZXMgY2hhbmdldG8tZ3JlYXRlcn",
              "swJSwgNzAlLCA5MCV7dG9wOiA1MCU7IHBhZGRpbmc6IDBweDsgZGlzcGxheTogaW",
              "5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOiAxMDAlOyBiYWNrZ3JvdW5kOiAjNj",
              "czQzYzOyBib3JkZXItd2lkdGg6IDAgMCAwIDA7IGJvcmRlcjogMHB4IHNvbGlkIC",
              "M2NzNDNjM7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MCUsIDAlKTt9NzElLCA4OS",
              "V7dG9wOiAzMCU7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogc29saWQgIzY3M0",
              "M2MzsgYm9yZGVyLXJhZGl1czogMHB4OyBib3JkZXItd2lkdGg6IDAgMnB4IDJweC",
              "AwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDFweDsgZmxvYXQ6IG",
              "xlZnQ7IHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0OyB0cmFuc2Zvcm06IH",
              "JvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZSgtODAlLCAyMCUpOyAtd2Via2l0LXRyYW",
              "5zZm9ybTogcm90YXRlKDEzNWRlZykgdHJhbnNsYXRlKC04MCUsIDIwJSk7fX08L3",
              "N0eWxlPjwvaGVhZD48Ym9keT4gPGRpdiBjbGFzcz0id3JhcHBlciI+IDxkaXYgY2",
              "xhc3M9ImNhbmRsZXMiPiA8ZGl2IGNsYXNzPSJsaWdodF9fd2F2ZSI+PC9kaXY+PG",
              "RpdiBjbGFzcz0iY2FuZGxlMSI+IDxkaXYgY2xhc3M9ImNhbmRsZTFfX2JvZHkiPi",
              "A8ZGl2IGNsYXNzPSJjYW5kbGUxX19leWVzIj4gPHNwYW4gY2xhc3M9ImNhbmRsZT",
              "FfX2V5ZXMtb25lIj48L3NwYW4+IDxzcGFuIGNsYXNzPSJjYW5kbGUxX19leWVzLX",
              "R3byI+PC9zcGFuPiA8L2Rpdj48ZGl2IGNsYXNzPSJjYW5kbGUxX19tb3V0aCI+PC",
              "9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY2FuZGxlMV9fc3RpY2siPjwvZGl2PjwvZG",
              "l2PjxkaXYgY2xhc3M9ImNhbmRsZTIiPiA8ZGl2IGNsYXNzPSJjYW5kbGUyX19ib2",
              "R5Ij4gPGRpdiBjbGFzcz0iY2FuZGxlMl9fZXllcyI+IDxkaXYgY2xhc3M9ImNhbm",
              "RsZTJfX2V5ZXMtb25lIj48L2Rpdj48ZGl2IGNsYXNzPSJjYW5kbGUyX19leWVzLX",
              "R3byI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY2FuZGxlMl9fc3RpY2",
              "siPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImNhbmRsZTJfX2ZpcmUiPjwvZGl2Pj",
              "xkaXYgY2xhc3M9InNwYXJrbGVzLW9uZSI+PC9kaXY+PGRpdiBjbGFzcz0ic3Bhcm",
              "tsZXMtdHdvIj48L2Rpdj48ZGl2IGNsYXNzPSJjYW5kbGVfX3Ntb2tlLW9uZSI+ID",
              "wvZGl2PjxkaXYgY2xhc3M9ImNhbmRsZV9fc21va2UtdHdvIj4gPC9kaXY+PC9kaX",
              "Y+PGRpdiBjbGFzcz0iZmxvb3IiPiA8L2Rpdj48L2Rpdj48L2JvZHk+PC9odG1sPg",
              "=="
            ]
          }
        ]
      }]
    },
    {
      "asset_name": "Submarine",
      "name": "Submarine",
      "description": "Funny Submarine",
      "media_type": "image/png",
      "image": "ipfs://QmQGXxmDchP93YxBi4ihKJYxMhR4wcuxWERhfsRJD8tUSh",
      "metadata_attributes": [{
        "tag": "<color>",
        "name": "Candle color",
        "value": "White"
      }],
      "files": [{
        "metadata_attributes": [{
            "tag": "<file_name>",
            "name": "File name",
            "value": "Candle"
          },
          {
            "tag": "<mime_type>",
            "name": "Mime type",
            "value": "text/html"
          },
          {
            "tag": "<src>",
            "name": "File link",
            "value": [
              "data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPj",
              "xoZWFkPiA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+IDx0aXRsZT5TdWJtYXJpbmUgd2",
              "l0aCBDU1M8L3RpdGxlPiA8c3R5bGU+I2FqZXJlentwb3NpdGlvbjogYWJzb2x1dG",
              "U7IHRvcDogNXB4OyByaWdodDogNXB4OyB6LWluZGV4OiA5OTk5O30jYWplcmV6IG",
              "ltZ3tib3gtc2l6aW5nOiBib3JkZXItYm94OyB3aWR0aDogNDVweDsgaGVpZ2h0Oi",
              "A0NXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJvcmRlcjogMnB4IHNvbGlkICM3ND",
              "gyQTU7IHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMC4ycyBlYXNlLWluLW91dD",
              "t9I2FqZXJleiBpbWc6aG92ZXJ7Ym9yZGVyLXJhZGl1czogMzAlO31ib2R5e2JhY2",
              "tncm91bmQtY29sb3I6ICMzMDZEODU7IG1hcmdpbjogMDt9KiwgKjpiZWZvcmUsIC",
              "o6YWZ0ZXJ7Ym94LXNpemluZzogYm9yZGVyLWJveDt9LnNlYXtkaXNwbGF5OiBmbG",
              "V4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcj",
              "sgb3ZlcmZsb3c6IGhpZGRlbjsgaGVpZ2h0OiAxMDB2aDt9LnNlYSAuYnViYmxle3",
              "Bvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDdweDsgaGVpZ2h0OiA3cHg7IGJvcm",
              "Rlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZC1jb2xvcjogIzZiYWZjYTsgb3BhY2",
              "l0eTogMC45OyAtd2Via2l0LWFuaW1hdGlvbjogYnViYmxlMS1oLW1vdmVtZW50ID",
              "FzIGVhc2UtaW4gaW5maW5pdGUsIGJ1YmJsZTEtdi1tb3ZlbWVudCAzMDBtcyBlYX",
              "NlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUsIGJ1YmJsZS1zY2FsZS1tb3ZlbW",
              "VudCAzMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7IGFuaW1hdG",
              "lvbjogYnViYmxlMS1oLW1vdmVtZW50IDFzIGVhc2UtaW4gaW5maW5pdGUsIGJ1Ym",
              "JsZTEtdi1tb3ZlbWVudCAzMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm",
              "5hdGUsIGJ1YmJsZS1zY2FsZS1tb3ZlbWVudCAzMDBtcyBlYXNlLWluLW91dCBpbm",
              "Zpbml0ZSBhbHRlcm5hdGU7fS5zZWEgLmJ1YmJsZTphZnRlcntwb3NpdGlvbjogYW",
              "Jzb2x1dGU7IGNvbnRlbnQ6ICIiOyB3aWR0aDogN3B4OyBoZWlnaHQ6IDdweDsgYm",
              "9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmJhZmNhOyBvcG",
              "FjaXR5OiAwLjk7fS5zZWEgLmJ1YmJsZTphZnRlcnt0b3A6IC0yMDsgbGVmdDogMT",
              "AwcHg7IHdpZHRoOiA5cHg7IGhlaWdodDogOXB4O30uc2VhIC5jaXJjbGUtd3JhcH",
              "Blcntwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaW",
              "VudCgjMmM2NDdhLCAjMjA0ODU4KTsgd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDMwMH",
              "B4OyBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87IG92ZXJmbG93OiBoaWRkZW47IH",
              "otaW5kZXg6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgcGFkZGluZzogMCA1MHB4ID",
              "AgNTBweDsgYm9yZGVyOiA2cHggc29saWQgIzNlOGNhYTt9LnNlYSAuc3VibWFyaW",
              "5lLXdyYXBwZXJ7aGVpZ2h0OiAzMDBweDsgd2lkdGg6IDMwMHB4OyBwYWRkaW5nOi",
              "AzMHB4IDUwcHggMzBweCAxNTBweDsgbWFyZ2luOiAwIGF1dG8gMCBhdXRvOyAtd2",
              "Via2l0LWFuaW1hdGlvbjogZGl2aW5nIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlLC",
              "BkaXZpbmctcm90YXRlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlOyBhbmltYXRpb2",
              "46IGRpdmluZyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSwgZGl2aW5nLXJvdGF0ZS",
              "AzcyBlYXNlLWluLW91dCBpbmZpbml0ZTt9LnNlYSAuc3VibWFyaW5lLXdyYXBwZX",
              "IgLnN1Ym1hcmluZS1ib2R5e3dpZHRoOiAxNTBweDsgaGVpZ2h0OiA4MHB4OyBwb3",
              "NpdGlvbjogYWJzb2x1dGU7IG1hcmdpbi10b3A6IDUwcHg7IGxlZnQ6IDI1cHg7IG",
              "JhY2tncm91bmQtY29sb3I6ICNEOTNBNTQ7IGJvcmRlci1yYWRpdXM6IDQwcHg7IG",
              "JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRDkzQTU0LCAjYmMyNDNkKTt9Ln",
              "NlYSAuc3VibWFyaW5lLXdyYXBwZXIgLnN1Ym1hcmluZS1ib2R5IC5saWdodHtwb3",
              "NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJvcmRlci1zdH",
              "lsZTogc29saWQ7IGJvcmRlci13aWR0aDogMCA0MHB4IDE1MHB4IDQwcHg7IGJvcm",
              "Rlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzM3N2M5OCB0cmFuc3",
              "BhcmVudDsgdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTsgdG9wOiA0MHB4OyBsZW",
              "Z0OiA5OSU7fS5zZWEgLnN1Ym1hcmluZS13cmFwcGVyIC5zdWJtYXJpbmUtYm9keS",
              "AubGlnaHQ6YWZ0ZXJ7Y29udGVudDogIiI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2",
              "lkdGg6IDIwcHg7IGhlaWdodDogMTNweDsgYm9yZGVyLXJhZGl1czogNXB4OyBiYW",
              "NrZ3JvdW5kLWNvbG9yOiAjZDEyODQ0OyBtYXJnaW4tbGVmdDogLTEwcHg7fS5zZW",
              "EgLnN1Ym1hcmluZS13cmFwcGVyIC5zdWJtYXJpbmUtYm9keSAud2luZG93e3dpZH",
              "RoOiAzN3B4OyBoZWlnaHQ6IDM3cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbWFyZ2",
              "luLXRvcDogMjNweDsgcmlnaHQ6IDE4cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncm",
              "FkaWVudCgjMWU0NTU0LCAjMTgzNjQyKTsgYm9yZGVyLXJhZGl1czogNTAlOyBib3",
              "JkZXI6IDNweCBzb2xpZCAjRDkzQTU0O30uc2VhIC5zdWJtYXJpbmUtd3JhcHBlci",
              "Auc3VibWFyaW5lLWJvZHkgLndpbmRvdzphZnRlcntjb250ZW50OiAiIjsgcG9zaX",
              "Rpb246IGFic29sdXRlOyBtYXJnaW4tdG9wOiAzcHg7IG1hcmdpbi1sZWZ0OiAzcH",
              "g7IHdpZHRoOiAyNXB4OyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDUwJT",
              "sgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IG9wYWNpdHk6IDAuODsgYm",
              "9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlOyB0cmFuc2Zvcm06IHJvdGF0ZSgtND",
              "VkZWcpO30uc2VhIC5zdWJtYXJpbmUtd3JhcHBlciAuc3VibWFyaW5lLWJvZHkgLm",
              "VuZ2luZXt3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4OyBwb3NpdGlvbjogYWJzb2",
              "x1dGU7IG1hcmdpbi10b3A6IDMycHg7IGxlZnQ6IDUzcHg7IGJhY2tncm91bmQtY2",
              "9sb3I6ICNiYzI0M2Q7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiA1cHggc2",
              "9saWQgI0Q5M0E1NDt9LnNlYSAuc3VibWFyaW5lLXdyYXBwZXIgLnN1Ym1hcmluZS",
              "1ib2R5IC5lbmdpbmU6YWZ0ZXIsIC5zZWEgLnN1Ym1hcmluZS13cmFwcGVyIC5zdW",
              "JtYXJpbmUtYm9keSAuZW5naW5lOmJlZm9yZXtwb3NpdGlvbjogYWJzb2x1dGU7IG",
              "NvbnRlbnQ6ICIiOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQtY29sb3",
              "I6IHdoaXRlOyAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA5MDBtcyBsaW5lYXIgaW",
              "5maW5pdGU7IGFuaW1hdGlvbjogc3BpbiA5MDBtcyBsaW5lYXIgaW5maW5pdGU7IG",
              "9wYWNpdHk6IDAuODt9LnNlYSAuc3VibWFyaW5lLXdyYXBwZXIgLnN1Ym1hcmluZS",
              "1ib2R5IC5lbmdpbmU6YWZ0ZXJ7dG9wOiA4cHg7IHdpZHRoOiAyMHB4OyBoZWlnaH",
              "Q6IDRweDt9LnNlYSAuc3VibWFyaW5lLXdyYXBwZXIgLnN1Ym1hcmluZS1ib2R5IC",
              "5lbmdpbmU6YmVmb3Jle2xlZnQ6IDhweDsgd2lkdGg6IDRweDsgaGVpZ2h0OiAyMH",
              "B4O30uc2VhIC5zdWJtYXJpbmUtd3JhcHBlciAuaGVsaXh7d2lkdGg6IDMwcHg7IG",
              "hlaWdodDogNzBweDsgcG9zaXRpb246IGFic29sdXRlOyBtYXJnaW4tdG9wOiA1NX",
              "B4OyBsZWZ0OiAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRDkzQTU0OyBib3JkZXItcm",
              "FkaXVzOiA3cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRDkzQTU0LC",
              "AjYmMyNDNkKTt9LnNlYSAuc3VibWFyaW5lLXdyYXBwZXIgLmhlbGl4OmFmdGVye2",
              "NvbnRlbnQ6ICIiOyBwb3NpdGlvbjogYWJzb2x1dGU7IG1hcmdpbi10b3A6IDVweD",
              "sgbWFyZ2luLWxlZnQ6IDdweDsgd2lkdGg6IDE3cHg7IGhlaWdodDogNjBweDsgYm",
              "9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudD",
              "sgb3BhY2l0eTogMC44OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm",
              "90dG9tLCAjRDkzQTU0LCAjRDkzQTU0IDUwJSwgI2U1N2E4YyA1MCUsICNlNTdhOG",
              "MpOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjBweDsgLXdlYmtpdC1hbmltYXRpb2",
              "46IGhlbGl4LW1vdmVtZW50IDExMG1zIGxpbmVhciBpbmZpbml0ZTsgYW5pbWF0aW",
              "9uOiBoZWxpeC1tb3ZlbWVudCAxMTBtcyBsaW5lYXIgaW5maW5pdGU7fS5zZWEgLn",
              "N1Ym1hcmluZS13cmFwcGVyIC5oYXR7d2lkdGg6IDY1cHg7IGhlaWdodDogMjVweD",
              "sgcG9zaXRpb246IGFic29sdXRlOyBtYXJnaW4tdG9wOiAyNnB4OyBsZWZ0OiA3MH",
              "B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRDkzQTU0OyBib3JkZXItcmFkaXVzOiAxMH",
              "B4IDEwcHggMCAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0Q5M0E1NC",
              "wgI2Q3MmQ0OSk7fS5zZWEgLnN1Ym1hcmluZS13cmFwcGVyIC5oYXQgLnBlcmlzY2",
              "9wZXtwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA3cHg7IGhlaWdodDogMjBweD",
              "sgYmFja2dyb3VuZC1jb2xvcjogI0Q5M0E1NDsgbWFyZ2luLXRvcDogLTI3cHg7IG",
              "1hcmdpbi1sZWZ0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDt9Ln",
              "NlYSAuc3VibWFyaW5lLXdyYXBwZXIgLmhhdCAucGVyaXNjb3BlOmFmdGVyLCAuc2",
              "VhIC5zdWJtYXJpbmUtd3JhcHBlciAuaGF0IC5wZXJpc2NvcGU6YmVmb3Jle2Nvbn",
              "RlbnQ6ICIiOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxNXB4OyBoZWlnaH",
              "Q6IDdweDsgYm9yZGVyLXJhZGl1czogNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRD",
              "kzQTU0O30uc2VhIC5zdWJtYXJpbmUtd3JhcHBlciAuaGF0IC5sZWRzLXdyYXBwZX",
              "J7d2lkdGg6IDUzcHg7IGhlaWdodDogMTNweDsgcG9zaXRpb246IHJlbGF0aXZlOy",
              "B0b3A6IDdweDsgbGVmdDogN3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRDkzQTU0Oy",
              "Bib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbn",
              "QoI2IzMjMzYSwgI2EyMWYzNSk7fS5zZWEgLnN1Ym1hcmluZS13cmFwcGVyIC5oYX",
              "QgLmxlZHMtd3JhcHBlciAubGVkc3twb3NpdGlvbjogYWJzb2x1dGU7IG1hcmdpbi",
              "10b3A6IDRweDsgbWFyZ2luLWxlZnQ6IDdweDsgd2lkdGg6IDVweDsgaGVpZ2h0Oi",
              "A1cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZC1jb2xvcjogd2hpdG",
              "U7IC13ZWJraXQtYW5pbWF0aW9uOiBsZWRzLW9mZiA1MDBtcyBsaW5lYXIgaW5maW",
              "5pdGU7IGFuaW1hdGlvbjogbGVkcy1vZmYgNTAwbXMgbGluZWFyIGluZmluaXRlO3",
              "0uc2VhIC5zdWJtYXJpbmUtd3JhcHBlciAuaGF0IC5sZWRzLXdyYXBwZXIgLmxlZH",
              "M6YWZ0ZXIsIC5zZWEgLnN1Ym1hcmluZS13cmFwcGVyIC5oYXQgLmxlZHMtd3JhcH",
              "BlciAubGVkczpiZWZvcmV7Y29udGVudDogIiI7IHBvc2l0aW9uOiBhYnNvbHV0ZT",
              "sgd2lkdGg6IDVweDsgaGVpZ2h0OiA1cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm",
              "Fja2dyb3VuZC1jb2xvcjogd2hpdGU7fS5zZWEgLnN1Ym1hcmluZS13cmFwcGVyIC",
              "5oYXQgLmxlZHMtd3JhcHBlciAubGVkczphZnRlcnttYXJnaW4tdG9wOiAwcHg7IG",
              "1hcmdpbi1sZWZ0OiAxN3B4O30uc2VhIC5zdWJtYXJpbmUtd3JhcHBlciAuaGF0IC",
              "5sZWRzLXdyYXBwZXIgLmxlZHM6YmVmb3Jle21hcmdpbi10b3A6IDBweDsgbWFyZ2",
              "luLWxlZnQ6IDM0cHg7fUAtd2Via2l0LWtleWZyYW1lcyBzcGluezEwMCV7dHJhbn",
              "Nmb3JtOiByb3RhdGUoMzYwZGVnKTt9fUBrZXlmcmFtZXMgc3BpbnsxMDAle3RyYW",
              "5zZm9ybTogcm90YXRlKDM2MGRlZyk7fX1ALXdlYmtpdC1rZXlmcmFtZXMgbGVkcy",
              "1vZmZ7MTAwJXtvcGFjaXR5OiAwLjM7fX1Aa2V5ZnJhbWVzIGxlZHMtb2ZmezEwMC",
              "V7b3BhY2l0eTogMC4zO319QC13ZWJraXQta2V5ZnJhbWVzIGhlbGl4LW1vdmVtZW",
              "50ezEwMCV7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2",
              "U1N2E4YyA1MCUsICNlNTdhOGMsICNEOTNBNTQsICNEOTNBNTQgNTAlKTsgYmFja2",
              "dyb3VuZC1zaXplOiAxMDAlIDIwcHg7fX1Aa2V5ZnJhbWVzIGhlbGl4LW1vdmVtZW",
              "50ezEwMCV7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2",
              "U1N2E4YyA1MCUsICNlNTdhOGMsICNEOTNBNTQsICNEOTNBNTQgNTAlKTsgYmFja2",
              "dyb3VuZC1zaXplOiAxMDAlIDIwcHg7fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGl2aW",
              "5nezAle21hcmdpbi10b3A6IDVweDt9NTAle21hcmdpbi10b3A6IDE1cHg7fTEwMC",
              "V7bWFyZ2luLXRvcDogNXB4O319QGtleWZyYW1lcyBkaXZpbmd7MCV7bWFyZ2luLX",
              "RvcDogNXB4O301MCV7bWFyZ2luLXRvcDogMTVweDt9MTAwJXttYXJnaW4tdG9wOi",
              "A1cHg7fX1ALXdlYmtpdC1rZXlmcmFtZXMgZGl2aW5nLXJvdGF0ZXswJXt0cmFuc2",
              "Zvcm06IHJvdGF0ZSgwZGVnKTt9NTAle3RyYW5zZm9ybTogcm90YXRlKDNkZWcpO3",
              "03NSV7dHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO30xMDAle3RyYW5zZm9ybTogcm",
              "90YXRlKDBkZWcpO319QGtleWZyYW1lcyBkaXZpbmctcm90YXRlezAle3RyYW5zZm",
              "9ybTogcm90YXRlKDBkZWcpO301MCV7dHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7fT",
              "c1JXt0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7fTEwMCV7dHJhbnNmb3JtOiByb3",
              "RhdGUoMGRlZyk7fX1ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlMS1oLW1vdmVtZW",
              "50ezAle21hcmdpbi1sZWZ0OiA4MCU7fTEwMCV7bWFyZ2luLWxlZnQ6IC0xMDAlO3",
              "19QGtleWZyYW1lcyBidWJibGUxLWgtbW92ZW1lbnR7MCV7bWFyZ2luLWxlZnQ6ID",
              "gwJTt9MTAwJXttYXJnaW4tbGVmdDogLTEwMCU7fX1ALXdlYmtpdC1rZXlmcmFtZX",
              "MgYnViYmxlMi1oLW1vdmVtZW50ezAle21hcmdpbi1sZWZ0OiA2NSU7fTEwMCV7bW",
              "FyZ2luLWxlZnQ6IC01JTt9fUBrZXlmcmFtZXMgYnViYmxlMi1oLW1vdmVtZW50ez",
              "Ale21hcmdpbi1sZWZ0OiA2NSU7fTEwMCV7bWFyZ2luLWxlZnQ6IC01JTt9fUAtd2",
              "Via2l0LWtleWZyYW1lcyBidWJibGUxLXYtbW92ZW1lbnR7MCV7bWFyZ2luLXRvcD",
              "ogMTE1cHg7fTEwMCV7bWFyZ2luLXRvcDogMTYwcHg7fX1Aa2V5ZnJhbWVzIGJ1Ym",
              "JsZTEtdi1tb3ZlbWVudHswJXttYXJnaW4tdG9wOiAxMTVweDt9MTAwJXttYXJnaW",
              "4tdG9wOiAxNjBweDt9fUAtd2Via2l0LWtleWZyYW1lcyBidWJibGUyLXYtbW92ZW",
              "1lbnR7MCV7bWFyZ2luLXRvcDogMTE1cHg7fTEwMCV7bWFyZ2luLXRvcDogOTBweD",
              "t9fUBrZXlmcmFtZXMgYnViYmxlMi12LW1vdmVtZW50ezAle21hcmdpbi10b3A6ID",
              "ExNXB4O30xMDAle21hcmdpbi10b3A6IDkwcHg7fX1ALXdlYmtpdC1rZXlmcmFtZX",
              "MgYnViYmxlLXNjYWxlLW1vdmVtZW50ezAle3RyYW5zZm9ybTogc2NhbGUoMS40KT",
              "t9MTAwJXt0cmFuc2Zvcm06IHNjYWxlKDAuOSk7fX1Aa2V5ZnJhbWVzIGJ1YmJsZS",
              "1zY2FsZS1tb3ZlbWVudHswJXt0cmFuc2Zvcm06IHNjYWxlKDEuNCk7fTEwMCV7dH",
              "JhbnNmb3JtOiBzY2FsZSgwLjkpO319QC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0LW",
              "1vdmVtZW50ezAle3RyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7fTUwJXt0cmFuc2",
              "Zvcm06IHJvdGF0ZSgtNzBkZWcpO30xMDAle3RyYW5zZm9ybTogcm90YXRlKC00MG",
              "RlZyk7fX1Aa2V5ZnJhbWVzIGxpZ2h0LW1vdmVtZW50ezAle3RyYW5zZm9ybTogcm",
              "90YXRlKC00MGRlZyk7fTUwJXt0cmFuc2Zvcm06IHJvdGF0ZSgtNzBkZWcpO30xMD",
              "Ale3RyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7fX08L3N0eWxlPjwvaGVhZD48Ym",
              "9keT4gPGRpdiBjbGFzcz0ic2VhIj4gPGRpdiBjbGFzcz0iY2lyY2xlLXdyYXBwZX",
              "IiPiA8ZGl2IGNsYXNzPSJidWJibGUiPjwvZGl2PjxkaXYgY2xhc3M9InN1Ym1hcm",
              "luZS13cmFwcGVyIj4gPGRpdiBjbGFzcz0ic3VibWFyaW5lLWJvZHkiPiA8ZGl2IG",
              "NsYXNzPSJ3aW5kb3ciPjwvZGl2PjxkaXYgY2xhc3M9ImVuZ2luZSI+PC9kaXY+PG",
              "RpdiBjbGFzcz0ibGlnaHQiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImhlbGl4Ij",
              "48L2Rpdj48ZGl2IGNsYXNzPSJoYXQiPiA8ZGl2IGNsYXNzPSJsZWRzLXdyYXBwZX",
              "IiPiA8ZGl2IGNsYXNzPSJwZXJpc2NvcGUiPjwvZGl2PjxkaXYgY2xhc3M9ImxlZH",
              "MiPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxhIGlkPSJham",
              "VyZXoiIGhyZWY9Imh0dHA6Ly93d3cuYWplcmV6LmVzL2VuLyIgdGFyZ2V0PSJfYm",
              "xhbmsiPjxpbWcgc3JjPSJodHRwczovL2kuaW1ndXIuY29tL0FJNEJTMkkucG5nIi",
              "8+PC9hPjwvYm9keT48L2h0bWw+"
            ]
          }
        ]
      }]
    }
  ]
};

const salePhase = {
  "type": "random",
  "name": "public-sale",
  "total_tokens": 6,
  "reservation_time": 1200,
  "price_tiers": [{
    "name": "Golden plan",
    "quantity": 2,
    "supply": 1,
    "price": 20000000
    "price": {
       "ADA": {
          "amount": 60000000
        }
     }
  }]
};



async function createCollection(collection) {
  try {
    console.log("Create Collection");
    const response = await axios.post('/nft/collections', JSON.stringify(collection));
    console.log(response.data);
    return response.data.id;
  } catch (error) {
    console.error(error);
  }
}

async function createTokens(collectionId, tokens) {
  try {
    console.log("Create Tokens");
    const response = await axios.post(`/nft/collections/${collectionId}/tokens`, JSON.stringify(tokens));
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function createSalePhase(collectionId, salePhase) {
  try {
    console.log("Create Sale phase");
    const response = await axios.post(`/nft/collections/${collectionId}/phases`, JSON.stringify(salePhase));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  let collectionId = await createCollection(collection);
  let tokens = await createTokens(collectionId, tokensArr);
  let phase = await createSalePhase(collectionId, salePhase);
  console.log(phase);
}

main();
