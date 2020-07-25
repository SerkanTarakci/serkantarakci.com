const para = document.querySelector('p')
// ne yapıyo bu dökümana gidiyo ve it goes top to bottom and grabs the first P tag and
// ignores the rest of them.
// bi değişkene atıyoruz o p tagini istediğimiz zaman müdahale edebilmemiz için.
console.log(para);

// şimdi alttaki o error ptagini almaya çalışcaz nasıl yaparız? yukarıdaki şeyi kullanamayız
// bu sefer class selectörünü kullanırız çünkü bu bi classmış.
const para2 = document.querySelector('.error') //bu selectorde classı almak için . koyuyoruz ondan sonra da classın adı.
console.log(para2);

// şimdi buna erişelim <div class="error">this is another error message</div>
// bunu da şu şekil yapcaz daha spesifik olmamız lazım div ve adı error class olmalı
const para3 = document.querySelector('div.error') //bu selectorde classı almak için . koyuyoruz ondan sonra da classın adı.
console.log(para3);

// konsoldan da bulabiliriz istediğimiz element için selectore yazılacak unique queryi.
// mesela h1'imizi bulalım.
// Tarayıcıda The Dom üstünde sağ tıkladık incele dedik. Inspector açıldı ve o kısmı highlight etti
// sağ tıkladık o highlighted şeyin üstünde. copy selector dedik ve query selectorün içine yapıştırdık
const para4 = document.querySelector('body > h1') //
console.log(para4);

// tek bir elementi değil de çoklu element almak istiyoruz. QuerySelectorun another versiyonunu kullancaz.
// mesela divin içindeki 3 tane p'yi de almak istiyoruz.
const para5 = document.querySelectorAll('p');
console.log(para5);
// bunları bi nodelistte depoluyo yani para5 bi nodelist oluyo. Arraye benziyo ama array tam olark değil. 
// tani tüm array metotlarını kullanamıyoz nodelistte. Ama yine bi şeyler yapabiliyoz.
// square bracket notation [] kullanabiliyoz mesela tek bi element seçmek için.
// forEach de kullanabiliyoz
para5.forEach(para5 => {
    console.log(para5);
});

// adı error olanları bul.
 const errors = document.querySelectorAll('.error');
 console.log(errors);

 errors.forEach(hatalarıAl => { //normalde her yerde şu hataları al yerine errors yazıyoduk asıl değişkenle aynı
    console.log(hatalarıAl);    //ama for eachte ona gerek yok istediğini yazıyon.
});

// Biz query selector ve query selector all metotlarını görmüştük önceden. Şimdi daha farklılarını görcez
const title = document.getElementById('page-title'); // The DOM'u alalım idsi ile. index.htmldeki idsi page-title
//idlerin unique olmasında fayda var tabi.
console.log(title);

// get an element bu ID

// get elements by their class name

// get elements by their tag name