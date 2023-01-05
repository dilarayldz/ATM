let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1 - Bakiye Görüntüleme" + yeniSatir
+"2 - Para Çekme" + yeniSatir
+"3 - Para Yatırma" + yeniSatir
+"4 - İşlem Bitiş"+ yeniSatir
+"Lütfen Seçim Yapınız";

let secim = prompt(metin);

switch(secim){
    case "1":
        alert("Kullanılabilir Bakiye: " + bakiye);
        break;

    case "2":
        let cekilecekTutar = prompt("Çekmek İstediğiniz Tutarı Giriniz: ");
        if(cekilecekTutar<bakiye){
            alert("Paranızı Alabilirsiniz")
        }

        else {
            alert("!BAKİYE YETERSİZ!")
        }
        break;

    case "3":
        let yatırılacakTutar = prompt("Yatıracağınız Tutarı Giriniz: ");
        if(yatırılacakTutar<=0){
            alert("!Geçerli Bir Değer Giriniz!")
        }

        else{
            bakiye = bakiye + yatırılacakTutar
            alert("Yeni Bakiye: " + bakiye)
        }
        break;
    
        case "4":
            alert("Çıkış Yapılmıştır.")
            break;
}