// import myKey from "./KhaltiKey";
// import { useState } from "react";

// let config = {
//   // replace this key with yours
//   publicKey: myKey.publicTestKey,
//   productIdentity: "12376",
//   productName: "House mates Rooms",
//   productUrl: "http://gameofthrones.com/buy/Dragons",
//   eventHandler: {
//     onSuccess(payload) {
//       // hit merchant api for initiating verfication
//       console.log(payload);
//       console.log(payload.token);
//     },
//     // onError handler is optional
//     onError(error) {
//       // handle errors
//       console.log(error);
//     },
//     onClose() {
//       console.log("widget is closing");
//     },
//   },
//   paymentPreference: [
//     "KHALTI",
//     "EBANKING",
//     "MOBILE_BANKING",
//     "CONNECT_IPS",
//     "SCT",
//   ],
// };

// export default config;

import myKey from "./KhaltiKey";
import { useState } from "react";
import axios from "axios";

let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "12376",
  productName: "House mates Rooms",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verification
      console.log(payload);
      console.log(payload.token);
      // send the token to the backend
      axios
        .post("http://127.0.0.1:8000/api/khalti", {
          token: payload.token,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
