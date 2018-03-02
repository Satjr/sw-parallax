require('./images');
require('./menu');
import Parallax from './Parallax';

require('../styles/main.less');
const is = require('is_js');

const parallaxLogo = new Parallax('logo-parallax', 0.5);
const parallaxKylo = new Parallax('kylo-parallax', 0.5);
const parallaxStormtroopers = new Parallax('stormtroopers-parallax', 0.5);
const advertising = new FollowSection('advert');

parallaxLogo.init();
parallaxKylo.init();
parallaxStormtroopers.init();

if (is.mobile()) {
    require('../styles/mobile.less');
}
