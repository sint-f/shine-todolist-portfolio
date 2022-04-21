$(document).ready(function ()
{
    console.log('ready');

    var todo_data = window.localStorage.getItem('todos');
    var darkmode_data = window.localStorage.getItem('body');

    console.log(todo_data);

    if(todo_data != null) {
        $('.todos').html(todo_data);
    }
    if(darkmode_data != null) {
        $('body').html(darkmode_data);
    }
 
    $('.new-todo button').click(function ()
    {
        console.log('clicked');
        var title= $('.new-todo input').val();

        console.log(title);

        var template=   '<div class="todo">' +
                        '<label>' +
                            '<input type="checkbox" name="todo">' +
                            '<span class="title">' + title + '</span>' +
                        '</label>' +
                        '<svg class="delete" fill="none" stroke="currentColor" viewBox="0 0 24 24"' +
                            'xmlns="http://www.w3.org/2000/svg">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"' +
                            'd="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z">' +
                            '</path>' +
                        '</svg>' +
                        '<svg class="aanpas" fill="none" stroke="currentColor" viewBox="0 0 24 24"' +
                            'xmlns="http://www.w3.org/2000/svg">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"'+
                            'd="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">' +
                        '</path>' +
                        '</svg>' +
                    '</div>'
        $('.todos').append(template);

        Save();

        $('.new-todo input').val('');
    });

    $('body .dark').click(function () {
        var element = document.body;
        element.classList.toggle("dark-mode");

        var darkmode = $('body').html();
        window.localStorage.setItem('body', darkmode);
     });

    $('.delete').click(function  ()
    {
        $(this).parent().remove();

        Save();
    });

    $(".todo input[type='checkbox']").change(function() {
        if(this.checked){
            $(this).attr('checked', 'checked');
        } else {
            $(this).removeAttr('checked');
        }
        Save();
        
    });

    $('.aanpas').click(function (){
        var title = prompt('enter new title')

        $(this).parent().find('.title').text(title);

        Save();
    });

    var Save = function(){
        var all_todos = $('.todos').html();
        window.localStorage.setItem('todos', all_todos);
    }

    $('.todos').sortable({
        update: function(event, ui){
            Save();
        }
    });
});