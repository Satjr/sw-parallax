import hamburgerMenuSrc from '../images/menu.png';
import closeMenuSrc from '../images/close.png';
import swLogoSrc from '../images/logo.png';
import adSrc from '../images/ad.jpg';
import droidSrc from '../images/r2d2_c3p0-2x.jpg';
import droidMobileSrc from '../images/r2d2_c3p0.jpg';
import fbSrc from '../images/icon_facebook.png';
import fbSvgSrc from '../images/icon_facebook.svg';
import twitterSrc from '../images/icon_twitter.png';
import twitterSvgSrc from '../images/icon_twitter.svg';
import instagramSrc from '../images/icon_instagram.png';
import instagramSvgSrc from '../images/icon_instagram.svg';

const is = require('is_js');

export let hamburgerIcon = document.getElementById('hamburger-menu');
export let closeIcon = document.getElementById('close-menu');
export let swLogo = document.getElementById('sw-logo');
export let adImg = document.getElementById('advert');
export let droidImg = document.getElementById('droids');
export let fbImg = document.getElementById('facebook');
export let twitterImg = document.getElementById('twitter');
export let instagramImg = document.getElementById('instagram');

hamburgerIcon.src = hamburgerMenuSrc;
closeIcon.src = closeMenuSrc;
swLogo.src = swLogoSrc;
adImg.src = adSrc;
droidImg.src = is.mobile() ? droidMobileSrc : droidSrc ;
fbImg.src = fbSrc;
twitterImg.src = twitterSrc;
instagramImg.src = instagramSrc;


