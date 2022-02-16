import removeClassSubmitForm from './remove-class-submit-form';
import onSuccess from './success-submit-form';
import onError from './error-submit-form';


$('.telegram-form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form);

    //.attr('disabled','')

    data.append( 'Имя', 		            $('[name="name"]', form).val() );
    data.append( 'Телефон', 		        $('[name="phone"]', form).val() );
    data.append( 'Населенный пункт', 		$('[name="city"]', form).val() );
    data.append( 'Коментарий', 		        $('[name="text"]', form).val() );
    // data.append( 'file', 		$('[name="file"]', form).val() );
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: '../../ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
            if (textStatus === 'error') {
                onError()
            } else return
        },
        complete: function(jqXHR, textStatus) {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            if (textStatus === 'error') {
                return
            }
            form.reset() 
            removeClassSubmitForm()
            onSuccess()
        }
    });

    return false;
});