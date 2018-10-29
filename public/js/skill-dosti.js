$(document).ready(function(){
	$('.register span').click(function(){
		$('#'+$(this).attr('for')).prop("checked", true);
	})
    
    $('.form').on('submit',function(e){
		alert();
        var thisform=$(this).attr('id');
        var submitbtn=$(this).children('button[type="submit"]');
        submitbtn.prepend('<i class="la la-refresh la-spin la-2x"></i>');
       e.preventDefault();
        $('.cfield input').each(function(){
           $(this).siblings('span.error').remove();
       });
       var data=$(this).serialize();
       var url=$(this).attr('action');
        $.ajax({
           method:"POST",
           url:url,
            data:data,
            success:function(result){
                submitbtn.html(submitbtn.attr('name'));
                if(result!=true){
                    $.each(result,function(error,msg){
                        $('#'+thisform+' [name="'+error+'"]').parent('.cfield').append('<span class="error">'+msg+'</span>');
                    });
                }else{
                   location.reload();
                }
            }
        });
    });
    
    $('.cfield input').on('focus',function(){
       $(this).siblings('span.error').remove();
    });
    $('.cfield input').on('blur',function(){
        if(!$(this).val()){
            $(this).parent('.cfield').append('<span class="error">Please do not left blank</span>');
        }      
    });
});