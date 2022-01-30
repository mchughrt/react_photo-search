import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID P1veGcwYbGTnbVysJP8_N2IikHfAGzObSr3xdYB0dv0",
  },
});
