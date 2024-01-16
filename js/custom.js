$(function () {

    /* 비디오 모달 버튼 클릭 이벤트 */
    $('main.contents .video button').click(function(){
        // $('.vid_modal').show();
        $('.vid_modal').fadeIn();
        //문제.. 비디오 버튼을 껐다 켜도 그 안에 비디오가 그대로 재생되고있다.
        $('.vid_modal iframe').attr('src','https://www.youtube.com/embed/hxmwALUvXsc?si=EObJad24Faj5Ul3k');
    });
    $('.vid_modal i').click(function(){
        // $('.vid_modal').hide();
        $('.vid_modal').fadeOut();
        $('.vid_modal iframe').attr('src','');
    });

    


    /* 랭귀지 체인지 */
    $('header ul.l_box li').first().click(function () {
        $(this).siblings().stop().slideToggle().css('display', 'flex');
        $(this).find('i').toggleClass('fa-caret-down').toggleClass('fa-caret-up')
    });

    /* 햄버거 메뉴 */
    $('header .ham_all ul').click(function () {
        $(this).removeClass('on').siblings('ul').addClass('on');
        $('.all_menu').fadeToggle();

    });

    /* 스와이퍼 */
    let swiper = new Swiper(".main_banner", {
        pagination: {
            el: ".main_banner .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_banner .swiper-button-next",
            prevEl: ".main_banner .swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    /* 스크롤 이벤트 시작 */
    $(window).scroll(function () {
        let st = $(this).scrollTop(); //스크롤 TOP 위치를 st에 저장
        console.log(st);

        let evTop = $('.event').offset().top - 500; //(맨 위에서 .event 바로 위 -500px 까지...) 이벤트가 스크롤 될 위치를 evTop에 저장
        console.log(evTop);
        
        let lineTop = $('.line_up').offset().top - 400; //라인업이 스크롤될 위치를 lineTop에 저장. 그리고 400px 먼저 시작할것임)


        //이벤트 컨텐츠 액션 시작
        //이벤트 안에 있는 섹션에 on 클래스 붙여줄건데... tool_if 그대로 brand 딜레이
        if (st >= evTop) {
            //0번 인덱스 .tool_if 그 외 형제 .brand
            $('main.contents .event section').eq(0).addClass('on').siblings().addClass('on').css({'transition-delay':'0.3s'});
        } else {
            $('main.contents .event section').removeClass('on');
        }
        //이벤트 액션 끝~~~~

        //라인업 액션 시작 주의: 4마리임 그래서 for문으로 반복
        for(let i =0; i<$('main.contents .line_up .container .img_box li').length; i++){
            // $('.txt_box li').length;로 잡아도 상관없음
            if(st>=lineTop+(i+30)){
                //i 처음 시작은 i=0 두번째 돌때는 30만큼 더 내려왔을 상황...?
                $('main.contents .line_up .container .img_box li').eq(i).addClass('on').css({'transition-delay':(0.4*i)+'s'});
                $('main.contents .line_up .container .txt_box li').eq(i).addClass('on').css({'transition-delay':(0.5*i)+'s'});
            }else{
                $('main.contents .line_up .container .img_box li,main.contents .line_up .container .txt_box li').removeClass('on');
            }
        }
        //라인업 액션 끝~~~~
    
        //products 액션 시작

        /* 
        let pdTop = $('.products').offset().top -500; 

        for(let i=0; i<$('main.contents .products ul li').length; i++){
            if(st>=pdTop){
                $('main.contents .products ul li').eq(i).addClass('on').css({'animation-delay' : (0.2*i)+'s'});
            }else{
                $('main.contents .products ul li').removeClass('on');
            }
        }
         */

        //변수 안만들고 하는 법
        if(st>=$('.products').offset().top-500){
            for(let i =0; i<$('.products').find('li').length;i++){
                $('.products').find('li').eq(i).addClass('on').css({'animation-delay':(0.2*i)+'s'});
            }
        }else{
            $('.products').find('li').removeClass('on');
        }
        //products 액션 끝~~~~


    });/* 스크롤 이벤트 끝 */

    /* 패밀리사이트 */
    $('.family p').eq(0).click(function(){
        $(this).siblings().slideToggle();
        $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
    });

    
    $('aside.top').click(function(){
        $('body, html').animate({scrollTop: '0'},500);
        
    });

});//ready end