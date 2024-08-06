$(function(){
    $('.btn').click(function(){
        let btnTxt = $(this).text();
        console.log(btnTxt);
        if(btnTxt == 'Night'){
            $(this).text('Day');
            $('body').css({
                background:'var(--night-color03)',
                color:'var(--night-color01)',                        
            });
            $('a').css({
                color:'var(--night-color02)',
            });
            $('.footer').css({
                background:'var(--night-color01)',
                color:'var(--night-color03)',
            })

        }else{
            $(this).text('Night');
            $('body').css({
                background:'var(--day-color03)',
                color:'var(--day-color01)',                        
            });
            $('a').css({
                color:'var(--day-color02)',
            });
            $('.footer').css({
                background:'var(--day-color01)',
                color:'var(--day-color03)',
            })
        }
    })

    $('.gnb a').click(function(e){
        e.preventDefault();
    })
    $('.gnb li').click(function(){
        let jsonFileName = $(this).attr('data-json');
        $.ajax({
            url:`./json/${jsonFileName}.json`,
            dataType:'json',
            success:function(obj){
                $('#sec-tit').html(obj.secTit);
                $('#sec-img').attr('src',obj.src);
                $('#sec-img').attr('alt',obj.alt);
                $('#sec-p1').html(obj.secP1);
                $('#sec-p2').html(obj.secP2);
            },
            error:function(){
                alert('Error');
                location.reload();
            }
        })
    })



})