// api.js
const express = require("express");
const router = express.Router();

const nasabahList = [
  {
    no_kartu: "1234567890",
    nama: "Ahmad Fauzi",
    alamat: "Jl. Merdeka No. 123",
    tanggal_lahir: "1985-07-12",
    jenis_kelamin: "Laki-laki",
    no_telepon: "081234567890"
  },
  {
    no_kartu: "9876543210",
    nama: "Rina Dewi",
    alamat: "Jl. Sudirman No. 45",
    tanggal_lahir: "1990-03-21",
    jenis_kelamin: "Perempuan",
    no_telepon: "089876543210"
  }
];

router.get("/nasabah", (req, res) => {
  const noKartu = req.query.no_kartu;
  if (!noKartu) {
    return res.status(400).json({ status: "error", message: "Parameter no_kartu wajib diisi", data: null });
  }

  const nasabah = nasabahList.find(n => n.no_kartu === noKartu);
  if (!nasabah) {
    return res.status(404).json({ status: "error", message: "Data nasabah tidak ditemukan", data: null });
  }

  res.json({ status: "success", message: "Data nasabah ditemukan", data: nasabah });
});

module.exports = router;
