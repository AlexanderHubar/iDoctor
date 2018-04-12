;

$(document).ready(function () {
    // MENU
    $('#menu').click(function() {
        if (!$('.navigation').hasClass('open')) {
            $('#menu').addClass('open');
            $('.navigation').addClass('open').animate({
                right: '0px'
            }, 200);
            $('body').animate({
                right: '275px'
            }, 200);
        } else {
            $('#menu').removeClass('open');
            $('.navigation').removeClass('open').animate({
                right: '-275px'
            }, 200);
            $('body').animate({
                right: '0px'
            }, 200);
        }
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.header').css('top', '-75px');
        } else {
            $('.header').css('top', '0');
        }
        lastScrollTop = st;
    });

    //Skills
    var html = '85%', css = '80%' , js = '70%', jq = '75%', photoshop = '85%', sass = '80%';
    $('#html').css('width', html);
    $('#css').css('width', css);
    $('#js').css('width', js);
    $('#jq').css('width', jq);
    $('#photoshop').css('width', photoshop);
    $('#sass').css('width', sass);

    $('div#html.progress').css('content', html);

    //Form

    $('#email').on('input', function() {
        var input=$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email=re.test(input.val());
        if(is_email) {
            input.removeClass("invalid").addClass("valid").css('border-bottom', '2px solid forestgreen');
        } else {
            input.removeClass("valid").addClass("invalid").css('border-bottom', '2px solid red');
        }
    });
    $('#name').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid").css('border-bottom', '2px solid forestgreen');}
        else{input.removeClass("valid").addClass("invalid").css('border-bottom', '2px solid red');}
    });
    $('#message').keyup(function() {
        var input=$(this);
        var message=$(this).val();
        console.log(message);
        if (message) {
            input.removeClass("invalid").addClass("valid").css('border-bottom', '2px solid forestgreen');
        } else {
            input.removeClass("valid").addClass("invalid").css('border-bottom', '2px solid red');
        }
    });
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form").trigger("reset");
        });
        return false;
    });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});


function onScroll(e){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}

document.addEventListener('scroll', function (event) {
    var header = $('.header').height();
    var scrollPosition = $(document).scrollTop() + 75;
    if(scrollPosition > header) {
        $('.header').css("background", "-webkit-linear-gradient( 0deg, rgba(0,242,152,0.8) 0%, rgba(7,247,247,0.8) 100%)");
        $('.social').css("display", "flex");
        $('.header-container').css("justify-content","space-between");
    } else {
        $('.header').css("background", "transparent");
    }
}, true);

$('#minomo').on('click', function() {
    var win = window.open('http://alexanderhubar.github.io/project1', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
});
$('#tajam').on('click', function() {
    var win = window.open('http://alexanderhubar.github.io/project2', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
});
$('#panakeia').on('click', function() {
    var win = window.open('http://alexanderhubar.github.io/project3', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
});

$(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();
    var about = $('#about').scrollTop();

    if ( scrollPosition > about) {
        $('.to-top').css('display', 'flex');
    } else {
        $('.to-top').css('display', 'none');
    }
});
$('.to-top').on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

