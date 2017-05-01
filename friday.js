$(document).ready(function(){


  $('button').on('click', function() {

    var search = $('#search').val();
    searchReddit(search);

  });

  function searchReddit(subreddit) {

    $.get('http://www.reddit.com/r/' + subreddit + '.json').done(function(response) {

      console.log(response.data.children[0].data);

      for(var i = 0; i < response.data.children.length; i++) {

        var title = response.data.children[i].data.title;
        var thumbnail = response.data.children[i].data.thumbnail;
        var author = response.data.children[i].data.author;
        var score = response.data.children[i].data.score;
        var date = response.data.children[i].data.created;
        var link = response.data.children[i].data.created;


        $('.main').append('<section>   <div><p>' + score + '</p></div>   <div><a href=' + link + '><img src=' + thumbnail + '></a></div>   <div><p>' + title + '</p><br><p>' + author + '</p><p>' + date + '</p> </div></section>');
        $('.main section').addClass('box');
            // $('.main').append("<sectiom></section>");
            // $('.main section').addClass('box');
            // $('.box').append('<div><p>' + title + '</p></div>');
            // $('.box').append('<div><p>' + score + '</p></div>');
            // $('.box').append('<div><img src=' + thumbnail + '></div>');
            // $('.box').append('<div><p>' + author + '</p></div>');
            // $('.box').append('<div><p>' + date + '</p></div>');


      }

    });

  }



});
