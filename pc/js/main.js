$(function () {


    var mySwiper = new Swiper('.pc-banner .swiper-container', {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.pc-banner .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.pc-banner .swiper-button-next',
            prevEl: '.pc-banner .swiper-button-prev',
        },
    })


    // wap右上导航
    $(".nav li").click(function () {
        $(this).parent().parent().removeClass("in");
    })

    // 导航
    $(".navbar-nav>li").hover(function () {
        $(this).children(".second").slideDown(500);
    }, function () {
        $(".second").hide()
    });

    // 滚动监听
    $('body').scrollspy({
        target: '#navbar-example'
    })

    // up
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".gotop").fadeIn(1000);
            $(".navbar-default").addClass("fixeds");
        } else {
            $(".gotop").fadeOut(1000);
            $(".navbar-default").removeClass("fixeds");
        }
    });
    $(".gotop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);

    });


    // wap菜单切换
    $('.arrow').click(function () {
        $(this).toggleClass('active3');
        $(this).siblings('.mt_ul').slideToggle(300);
    })
    // 菜单切换
    $(".h_right").click(function () {
        $(".bg").animate({
            "right": "0"
        }, 200);
    })
    $('.bg_l').click(function () {
        $(".bg").animate({
            "right": "-100%"
        }, 200);
    })
    $(".mt_ul a").click(function () {
        $(".bg").animate({
            "right": "-100%"
        }, 200);
    });


})



var submitcount2 = 0;
function beforeSubmit2(form) {
    if (form.name.value == '') {
        alert('Name can not be empty');
        form.name.focus();
        return false;
    } else if (form.email.value == '') {
        alert('Please enter the correct email format');
        form.email.focus();
        return false;
    } else if (form.email.value.indexOf('@') < 0) {
        alert('The email is wrong');
        form.email.focus();
        return false;
    } else if (form.company.value == '') {
        alert('The company can not be empty');
        form.company.focus();
        return false;
    } else if (form.phone.value == '') {
        alert('The cellphone can not be empty');
        form.phone.focus();
        return false;
    } else if (form.phone.value.length < 11) {
        alert('The phone is wrong');
        form.phone.focus();
        return false;
    } else if (form.con.value == '') {
        alert('The country can not be empty');
        form.con.focus();
        return false;
    } else {
        if (submitcount2 == 0) {
            submitcount2++;
            return true;
        } else {
            alert("Message is being sent, please wait!");
            return false;
        }
    }
}