const express = require("express");
const app = express();

const dummyNasabah = {
  "1101424471351": {
    nama: "Ahmad Fauzi",
    alamat: "Jl. Merdeka No. 123",
    tanggal_lahir: "1985-07-12",
    jenis_kelamin: "Laki-laki",
    no_telepon: "081234567890"
  },
  "9876543210": {
    nama: "Siti Aminah",
    alamat: "Jl. Mawar No. 45",
    tanggal_lahir: "1990-01-22",
    jenis_kelamin: "Perempuan",
    no_telepon: "082345678901"
  }
};

app.get("/nasabah", (req, res) => {
  const noKartu = req.query.no_kartu;

  if (!noKartu) {
    return res.status(400).json({
      status: "error",
      message: "Parameter 'no_kartu' wajib diisi"
    });
  }

  const nasabah = dummyNasabah[noKartu];

  if (!nasabah) {
    return res.status(404).json({
      status: "error",
      message: "Data nasabah tidak ditemukan"
    });
  }

  return res.json({
    status: "success",
    message: "Data nasabah ditemukan",
    data: {
      no_kartu: noKartu,
      ...nasabah
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API berjalan di port ${PORT}`);
});
