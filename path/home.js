
s('body').style.overflow = 'auto';
s('body').style.overflowX = 'hidden';
s('body').style.overflowY = 'auto';



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


mod_loader.init();
mod_hall_play.init();
mod_body_c.init();
mod_gallery.init();
mod_test.init();
mod_credit.init();



/* notclick('body', 0, false);
notclick('body', 1, false);
notclick('body', 2, false); */





/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


function rr(){

	if( (data.lastW!=s('body').clientWidth) || (data.lastH!=s('body').clientHeight) ){

		data.lastW=s('body').clientWidth;
		data.lastH=s('body').clientHeight;

		if(data.lastH>400&&data.lastW>600){

			data.movil = false;

		}else{

			data.movil = true;

		}

		console.log('movil ->'+data.movil);

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

		s('.slider-gif-content').style.height = window.innerHeight+'px';

		if(s('.slider-gif-content').clientHeight>s('.slider-gif-content').clientWidth){

       s('.img-slider').style.width = 'auto';
       s('.img-slider').style.height = '100%';

     }else{

       s('.img-slider').style.width = '100%';
       s('.img-slider').style.height = 'auto';

     }

		  // var w = window.innerWidth;
			// var h = window.innerHeight;

	 	/* -------------------------------------------------------------------------- */
 		/* -------------------------------------------------------------------------- */

		 if(data.lastW>930){

			 s('.body_c1').style.width = '70%';
	 	 	 s('.body_c2').style.width = '30%';


		 }else{

			 s('.body_c1').style.width = '100%';
	 	 	 s('.body_c2').style.width = '100%';

		 }

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

	}

}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

var data = {

	movil: false,
	lastH: null,
	lastW: null

};
rr();
setInterval(function(e){
	rr();
}, 100);



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */









/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
