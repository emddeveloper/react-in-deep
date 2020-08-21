import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _0X2dohX4uwTSMtU1TNsow1hQczthztZpv2kvWs5P3s"
  }
})
