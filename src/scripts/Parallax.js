export default class Parallax {
    constructor(selector, speed) {
        this.speed = speed;
        this.element = document.getElementById(selector);
        
        if (this.element === null) {
            console.error(`There is no element with "${selector}" id`)
        }
    }

    animate() {
        const pos = Math.round(this.element.getBoundingClientRect().top * this.speed * -1);

        this.element.style.transform = `translateY(${pos}px)`;
    }

    init() {
        this.animate();

        window.addEventListener('scroll', () => {
            this.animate();
        });
    }
}
