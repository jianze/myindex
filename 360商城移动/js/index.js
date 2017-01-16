var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination'
});
var newswiper = new Swiper('.swiper-newcontainer', {
    direction: 'vertical',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2000,
    loop:true,
    autoplayDisableOnInteraction: false
});
var qiangswiper = new Swiper('.swiper-containerqiang', {
    slidesPerView: 3,
    paginationClickable: true,
    freeMode: true
});
    var hfs=$('.hfs');
    setInterval(dao,1000);
    dao();
    function dao(){
        var arr=[];
        var a=new Date();
        var b=new Date(2177,0,28,0,0,0);
        var cha=Math.floor((b.getTime()-a.getTime())/1000);
        cha=cha%(60*60*24);
        var c=Math.floor(cha/60/60);
        arr.push(c);
        cha=cha%(60*60);
        var d=Math.floor(cha/60);
        arr.push(d);
        var e=cha%60;
        arr.push(e);
        for(var i=0;i<arr.length;i++){
            hfs[i].innerHTML=arr[i];
            if(arr[i]<10){
                hfs[i].innerHTML='0'+arr[i];
            }
        }
    }