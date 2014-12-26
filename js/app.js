/**
 * Created by Administrator on 14. 12. 26.
 */
var parseID="67YYw7vvM96Rgz99YNqiZthaevuFgxN8awnNAfoH";
var parseRestKey="0E6ylKb1esxkHmfhfCbT6wcolIDZW1pBpX66EU7Z";

$(document).ready(function(){
    getMessages();
    $("#send").click(function(){
        var username= $('input[name=username]').attr('value');
        var message = $('input[name=message]').attr('value');
        console.log(username)
        console.log('!');


    $.ajax({
        url:'https://api.parse.com/1/classes/MessageBoard',
        headers:{
            'X-Parse-Application-id':parseID,
            'X-Parse-REST-API-Key':parseRestKey
        },
        contentType:'application/json',
        dataType:'json',
        processData:false,
        data:JSON.stringify({
            'username':username,
            'message':message
        }),
        type:'POST',
        success:function(){
            console.log('sent');
            getMessages();
        },
        error:function(){
            console.log('error');
        }
    });
    });
})

function getMessages(){
    $.ajax({
        url:'https://api.parse.com/1/classes/MessageBoard',
        headers:{
            'X-Parse-Application-Id':parseId,
            'X-Parse-REST-API-Key':parseRestKey
        },
        contentType:'application/json',
        dataType:'application/json',
        dataType:'json',
        type:'GET',

        success:function(data){
            console.log('get');
            updateView(data);
        },
        error: function(){
            console.log('error');
        }
    });
}
function updateView(messages){
    var table=$('.table tbody');
    table.html('');
    $.each(messages.results, function(index, value){
        var trEl = $('<tr><td>'+value.username + '</td><td>'+value.message+'</td></tr>');
        table.append(trEl);
    });
    console.log(messages);
}