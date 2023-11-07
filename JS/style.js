/**Tính tiền trả lãi chậm
 * B1: nhập thông tin mua sắm, nhập số tiền trả bank
 * B2: tình huống 1:
 * giả sử trả hết -> không nợ (tiền còn lại = tiền mua sắm - tiền trả bank ) > 0
 * tình huống 2: tiền còn lại >0
 * tiền còn lại = (tiền mua sắm - tiền trả bank)>0
 * --> var lai_suat= 15/100
 * tien_phat =  tiền còn lại * 15/100
 * Đầu ra : Show kết quả UI
 *
 *
 * */

var submitTinDung = document.getElementById("submitTinDung");
submitTinDung = document.onclick = function () {
  var tienMuaSam = document.getElementById("tienMuaSam").value * 1;
  var tienTraBank = document.getElementById("tienTraBank").value * 1;
  var laisuatbank = document.getElementById("laisuatbank").value * 1;

  var tienConLai = tienMuaSam - tienTraBank;
  var tienPhat;
  console.log(
    "Tien mua sam",
    tienMuaSam,
    "Tien tra bank",
    tienTraBank,
    "Tien con lai: ",
    tienConLai
  );
  const LAI_SUAT = laisuatbank / 100;
  console.log("Lai suat", LAI_SUAT);

  if (tienConLai > 0) {
    var tienPhat = LAI_SUAT * tienConLai;
    console.log("tien phat", tienPhat);
  }
  var result = "";
  result += "<p> Tiền phạt banker</p>";
  result += "<p>Tiền mua sắm ban đầu:" + tienMuaSam + "</p>";
  result += "<p> Tiền trả bank của bạn: " + tienTraBank + "</p>";
  result += "<p>Lãi suất bank: " + laisuatbank + "</p>";
  result += "<p> Tien phat" + tienPhat + "</p>";

  console.log(result);
  var footerTinhDung = document.getElementById("footerTinhDung");
  footerTinhDung.innerHTML = result;
};
