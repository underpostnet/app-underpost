var mod_gallery = {

  init: function(){

    console.log('init gallery');

    s('.body_c1').style.background = 'red';

    mod_gallery.addApp('PATHFINDING ENGINE', 'underpost.net/pathfinding', 'app13');

    mod_gallery.addApp('CYBERIA ONLINE MMORPG', 'cyberiaonline.com', 'app12');

    mod_gallery.addApp('YWORK NODEJS FRAMEWORK', 'github.com/underpostnet/express-ywork', 'app11');

    mod_gallery.addApp('NEXODEV.ORG VIRTUAL HOST', 'nexodev.org', 'app10');

    mod_gallery.addApp('VANILA SNAKE', 'underpost.net/snake', 'app9');

    mod_gallery.addApp('SURVIVAL BALL GAME', 'underpost.net/survival', 'app8');

    mod_gallery.addApp('OLD CYBERIA', 'underpost.net/old-cyberia', 'app7');

    mod_gallery.addApp('INFINITE LEVELS LABYRYNTH', 'underpost.net/laberinto', 'app6');

    mod_gallery.addApp('VIRTUAL ROLL DICE', 'underpost.net/dice', 'app5');

    mod_gallery.addApp('FRIENDLY BACKLINK GENERATOR', 'underpost.net/back', 'app4');

    mod_gallery.addApp('BOT VIRTUAL WORLD', 'underpost.net/bots', 'app3');

    mod_gallery.addApp('CELLULAR AUTOMATA SIMULATOR', 'underpost.net/life', 'app2');

    mod_gallery.addApp('BLOG CONTRACULTURA CYBERPUNK', 'contraculturacyberpunk.blogspot.com', 'app1');

  },
  addApp: function(name, url, id){

    append('.body_c1', `

      <app itemscope itemtype="https://schema.org/WebApplication">

        <h2>`+name+`</h2>

        <a class='gallery-link' href='https://`+url+`/'>

          <div class="`+id+` title-app">`+name+`</div>

          <div class="`+id+`" style="padding-bottom: 10px;" >`+url+`</div>

        </a>

        <div>

          <div

          class="a2a_kit a2a_kit_size_32 a2a_default_style"
          data-a2a-url="https://`+url+`/"
          data-a2a-title="`+name+`"

          >

          <!--<a class="a2a_button_copy_link"></a>-->

          <a class="a2a_button_twitter"></a>

          <a class="a2a_button_facebook"></a>

          <a class="a2a_button_reddit"></a>

          <a class="a2a_button_whatsapp"></a>

        </div>

      </div>

      <a href="`+path+`/embed.php?url=https://`+url+`"><img class="img-embed" src="`+path+`/assets/embed.png"></a>

    </app>

    `);

  }

};
