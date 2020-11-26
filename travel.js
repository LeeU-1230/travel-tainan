var xhr = new XMLHttpRequest();

    xhr.open('get','https://opengov.tainan.gov.tw/OpenApi/api/service/Get/bb7ba3ff-1974-4400-9a41-2aa803045550');

    xhr.send();

    xhr.onload = function(){
      var travel = JSON.parse(this.responseText);
      console.log(travel);
      tntravel = travel.data;
    }


var area = document.querySelector('.area');
var li = document.querySelector('.list');
var pg = document.querySelector('.pg');

var pgsize = 10;        //每頁顯示資料筆數


area.addEventListener("change", changeArea, false);

function changeArea(e){                             //選單切換區域
    e.preventDefault();

    var thisarea = e.target.value;
    var str = '';
    Reco = [];


    for (var i = 0 ; i < tntravel.length ; i++){    //建立陣列資料
        if (tntravel[i].district == thisarea){
            Reco.push(tntravel[i]);  
            
        var num = Reco.length;
        var page = num/pgsize;      //總頁數 = 資料個數 / 每頁顯示個數
        var pgnu = '';              //頁碼字串

           for (var j = 0 ; j < page ; j++){        //製作分頁頁碼
            var PG = j+1; 
               pgnu += '<li><a class="Num" href="#" data-num='+ PG +'>'+ PG + '</a></li>';
               }

        } 
    }


    for (var l = 0 ; l < pgsize ; l++){           //切換時的第一頁呈現
        str += '<li class="box"><h2 class="name">' + Reco[l].name + '</h2>' /*<p>' + Reco[k].id </p>*/ +'<img src="https://fakeimg.pl/350x200/000000/fff/?text=example"><p class = "message"><span><i class="far fa-clock fa-1x"></i>' + Reco[l].open_time + '</span><span><i class="fas fa-map-marker-alt fa-1x"></i>' + Reco[l].address + '</span><span><i class="fas fa-mobile-alt fa-1x"></i>' + Reco[l].tel +'</p></li>';
    }

    
    pg.innerHTML = pgnu;                     //輸出選擇區域頁碼
    li.innerHTML = str;                      //輸出點選切換時的第一頁呈現
}


pg.addEventListener('click',pageNum,false);           //切換分頁

function pageNum(e){
    e.preventDefault();         
    window.document.body.scrollTop = 400;              //換頁回頂端
    window.document.documentElement.scrollTop = 400;

    var str = '';

    if(e.target.nodeName == 'A') {
        nowpg = e.target.dataset.num;          //當前頁數碼
        minnu = (nowpg * pgsize) - pgsize ;    //當頁最小筆數
        maxnu = nowpg * pgsize - 1;            //當頁最大筆數

    }

    for (var k = minnu ; k < Reco.length ; k++){     //for迴圈跑每頁顯示的資料數量
        if(k > maxnu){                               //當K > 當頁最大筆數時跳出
            break;
        }
        str += '<li class="box"><h2 class="name">' + Reco[k].name + '</h2><img src="https://fakeimg.pl/350x200/000000/fff/?text=example"><p class = "message"><span><i class="far fa-clock fa-1x"></i>' + Reco[k].open_time + '</span><span><i class="fas fa-map-marker-alt fa-1x"></i>' + Reco[k].address + '</span><span><i class="fas fa-mobile-alt fa-1x"></i>' + Reco[k].tel +'</p></li>';

    } 
    li.innerHTML = str;                                 //輸出景點資訊
}


var hot = document.querySelector('.hot');

hot.addEventListener('click',chosehot,false);                   //按鈕切換區域

function chosehot(e){
    e.preventDefault();

    var hotarea = e.target.value;
    var str = '';
    Reco = [];

    for (var i = 0 ; i < tntravel.length ; i++){
        if (tntravel[i].district == hotarea){
            Reco.push(tntravel[i]);

            var num = Reco.length;
            var page = num/pgsize;      //總頁數 = 資料個數 / 每頁顯示個數
            var pgnu = '';              //頁碼字串

           for (var j = 0 ; j < page ; j++){      //製作分頁頁碼
            var PG = j+1; 
               pgnu += '<li><a class="Num" href="#" data-num='+ PG +'>'+ PG + '</a></li>';
               }
        }
    }

    for (var l = 0 ; l < 10 ; l++){           //切換時的第一頁呈現
        str += '<li class="box"><h2 class="name">' + Reco[l].name + '</h2>' /*<p>' + Reco[k].id </p>*/ +'<img src="https://fakeimg.pl/350x200/000000/fff/?text=example"><p class = "message"><span><i class="far fa-clock fa-1x"></i>' + Reco[l].open_time + '</span><span><i class="fas fa-map-marker-alt fa-1x"></i>' + Reco[l].address + '</span><span><i class="fas fa-mobile-alt fa-1x"></i>' + Reco[l].tel +'</p></li>';
    }

    pg.innerHTML = pgnu;           //輸出選擇區域頁碼
    li.innerHTML = str;            //輸出點選切換時的第一頁呈現

}
