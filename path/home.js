
s('body').style.overflow = 'auto';
s('body').style.overflowX = 'hidden';
s('body').style.overflowY = 'auto';



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



mod_hall_play.init();
mod_github.init();
mod_gallery.init();

notclick('body', 0, false);
notclick('body', 1, false);
notclick('body', 2, false);



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

		 if(s('.slider-gif-content').clientHeight>s('.slider-gif-content').clientWidth){

       s('.img-slider').style.width = 'auto';
       s('.img-slider').style.height = '100%';

     }else{

       s('.img-slider').style.width = '100%';
       s('.img-slider').style.height = 'auto';

     }

	 	/* -------------------------------------------------------------------------- */
 		/* -------------------------------------------------------------------------- */

		 if(data.lastW>930){

			 s('.github-content').style.width = '70%';
	 	 	 s('.credit-content').style.width = '30%';


		 }else{

			 s('.github-content').style.width = '100%';
	 	 	 s('.credit-content').style.width = '100%';

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
