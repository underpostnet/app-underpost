var mod_hall_play =  {

  init: function(){

    console.log('init hall play');

    /*let slider_cont = random(1, 85);*/
    let slider_cont = 35;

    append('body', `

    <div class='in slider-gif-content'>

      <img class='abs center img-slider' src='`+path+`/assets/fondos/`+slider_cont+`.gif'>


      <img class='abs img-logo' alt='underpost.net'
      src='`+path+`/assets/logo_underpost_alpha.gif'>

      <div class='abs arrow-content'>

        <div class='abs arrow-content-c1'>

          <div class='abs center'>&#x25C2;</div>

        </div>

        <div class='abs arrow-content-c2'>

          <div class='abs center'>&#x25B8;</div>

        </div>

      </div>

    </div>

    `);


    let animation = true;

    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */

    function sumSlider(){

      fadeOut(s('.img-slider'));

      setTimeout(function(){

        slider_cont++;

        if(slider_cont>85){

          slider_cont = 1;

        }

        s('.img-slider').src = (path+'/assets/fondos/'+slider_cont+'.gif');
        fadeIn(s('.img-slider'), 'block');

      }, 300);

    }

    function restSlider(){

      fadeOut(s('.img-slider'));

      setTimeout(function(){

        slider_cont--;

        if(slider_cont<1){

          slider_cont = 85;

        }

        s('.img-slider').src = (path+'/assets/fondos/'+slider_cont+'.gif');
        fadeIn(s('.img-slider'), 'block');

      }, 300);

    }

    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */

    s('.arrow-content-c1').onclick = function(){

      animation = false;
      restSlider();

    };

    s('.arrow-content-c2').onclick = function(){

      animation = false;
      sumSlider();

    };

    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */

    setInterval(function(){

      if(animation){

        /*sumSlider();*/

      }

    }, 3000);

  }

};
