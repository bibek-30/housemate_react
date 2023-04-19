import myKey from "./KhaltiKey";
import axios from "axios";
import { toast } from "react-toastify";

let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "12376",
  productName: "Housemates Rooms",
  productUrl: "http://housemates.com/rooms",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verification
      console.log(payload);

      // console.log(payload.token);
      // send the token to the backend
      axios
        .post(
          "http://127.0.0.1:8000/api/khalti",
          {
            token: payload.token,
          }
          // { headers }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      toast.success("Payment made successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
    onError(error) {
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
