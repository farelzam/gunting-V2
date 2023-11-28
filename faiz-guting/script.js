const container = document.querySelector(".container");
function getPilihanComputer() {
  const komp = Math.random();
  if (komp < 0.34) return "kertas";
  if (komp >= 0.34 && komp < 0.67) return "gunting";
  return "batu";
}
function getHasil(komp, player) {
  if (player == komp) return "SERI";
  if (player == "kertas") return komp == "gunting" ? "KALAH" : "MENANG";
  if (player == "gunting") return komp == "kertas" ? "MENANG" : "KALAH";
  if (player == "batu") return komp == "gunting" ? "MENANG" : "KALAH";
}

///METODE 1
// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   putar();
//   setTimeout(() => {
//     const imgKomputer = container.getElementsByTagName("img")[0];
//     imgKomputer.setAttribute("src", `asset/${pilihanComputer}.jpeg`);

//     const info = container.querySelector(".info");
//     info.innerHTML = hasil;
//   }, 1000);
// });
// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   putar();
//   setTimeout(() => {
//     const imgKomputer = container.getElementsByTagName("img")[0];
//     imgKomputer.setAttribute("src", `asset/${pilihanComputer}.jpeg`);

//     const info = container.querySelector(".info");
//     info.innerHTML = hasil;
//   }, 1000);
// });
// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   putar();
//   setTimeout(() => {
//     const imgKomputer = container.getElementsByTagName("img")[0];
//     imgKomputer.setAttribute("src", `asset/${pilihanComputer}.jpeg`);

//     const info = container.querySelector(".info");
//     info.innerHTML = hasil;
//   }, 1000);
// });

////METODE 2
const pilihan = document.querySelectorAll("li img");
pilihan.forEach((pilihanImg) => {
  pilihanImg.addEventListener("click", () => {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pilihanImg.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();
    setTimeout(() => {
      const imgKomputer = container.getElementsByTagName("img")[0];
      imgKomputer.setAttribute("src", `asset/${pilihanComputer}.jpeg`);

      const info = container.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

function putar() {
  const imgKomputer = container.getElementsByTagName("img")[0];
  const gambar = ["kertas", "gunting", "batu"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", `asset/${pilihanComputer}.jpeg`);
    if (i == gambar.length) i = 0;
  }, 100);
}
