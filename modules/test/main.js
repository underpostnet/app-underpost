var mod_test = {


  init: function(){



    console.log('test module init');



    append('body', `


    <!-- <test class='in' style='display: block;'>

      `+spr('TeSt<br>', 3)+`

      `+tl(spr('TeSt<br>', 3))+`

      `+tu(spr('TeSt<br>', 3))+`

      `+cap(spr('TeSt  aSnYv<br> ', 3))+`

    </test> -->

    `);


  }


};
