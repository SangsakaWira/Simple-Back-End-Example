const express = require("express");
const cors = require("cors");
let port_number = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to Vacation Mini API v1.0.0",
        endpoint_example:"/get-all-locations"
    })
})

app.get("/get-all-locations", (req, res) => {
  res.send([{
    nama: "Kintamani",
    foto:
      "https://images.pexels.com/photos/4239546/pexels-photo-4239546.jpeg?cs=srgb&dl=pexels-alleksana-4239546.jpg&fm=jpg",
    provinsi: "Bali",
    negara: "Indonesia"
  },{
    nama: "Lombok",
    foto:
      "https://images.pexels.com/photos/3857215/pexels-photo-3857215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    provinsi: "NTB",
    negara: "Indonesia"
  },{
    nama: "Toba Lake",
    foto:
      "https://images.pexels.com/photos/15901135/pexels-photo-15901135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    provinsi: "Sumatera Utara",
    negara: "Indonesia"
  },{
    nama: "Raja Ampat",
    foto:
      "https://images.pexels.com/photos/10482395/pexels-photo-10482395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    provinsi: "Sumatera Utara",
    negara: "Indonesia"
  }]);
});

app.listen(port_number, (err) => {
  console.log("Server is running!");
});
