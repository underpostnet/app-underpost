var mod_loader = {

  init: function(){


    append('body', `


    <loader class='fix'>

      <div class='abs center'>

        <img class='loading-img' src='`+path+`/assets/loading.gif'>

      </div>

    </loader>


    `);

    setTimeout(function(){

      fadeOut(s('loader'));

    }, 600);


  }

};
