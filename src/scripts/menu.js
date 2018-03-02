import {hamburgerIcon, closeIcon} from './images';

closeIcon.addEventListener('click', function() {
    this.parentNode.classList.remove('active');
});

hamburgerIcon.addEventListener('click', function() {
    this.parentNode.classList.add('active');
});