var mod_github = {

  init: function(){


    console.log('init github');



    append('body', `


    <div class='in github-content'>


    </div>


    <div class='in credit-content'>

      <br>

      <div class='github-widget' data-username='underpostnet'></div>

      <br>

      <br>

      <a target='_blank' alt='underpost' href='https://github.com/underpostnet'>

        <img class='in img-git' src='`+path+`/assets/git.png'>

      </a>

      <br>

      <br>

      <a target='_blank' class='link-blogger' alt='contracultura cyberpunk' href='https://contraculturacyberpunk.blogspot.com/'><div class='in blogger-content'>

        <img class='inl img-blogger' src='`+path+`/assets/blogger.png'>

        <span class='inl' style='top: -16px;'>Contracultura Cyberpunk</span>

      </div></a>

      <br>

      <br>

    </div>

    <div class='in sub-credit'>

      <br>

      <br><br>

      <a class='link-credit' target='_blank' href='https://www.dogmadual.com/' alt='dogmadual'>

        © 2020 DOGMADUAL.com

      </a>

      <br><br>

      <br>

      <br>

    </div>

    `);



  }

};
