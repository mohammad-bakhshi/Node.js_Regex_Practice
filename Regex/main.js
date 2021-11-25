$(document).ready(function() {
    var strongRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
    $('#input').on('input',function(e){
             let input=$('#input').val();
             if(input.length===0)
             {
                $('#label').css('color', 'blue');
                $('#description').text('Password input is empty');
                $('#description').css('color', 'black');
                $('#eye').css('color', 'black');
             }
        else if (strongRegex.test(input)) {
            $('#label').css('color', 'green');
            $('#description').text('Good :D');
            $('#description').css('color', 'green');
            $('#eye').css('color', 'green');
        }
        else{
            $('#label').css('color', 'red');
            $('#description').text('Min 8 characters with at insert one capital letter, a number and a special character.');
            $('#description').css('color', 'red');
            $('#eye').css('color', 'red');
        }
    });
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});