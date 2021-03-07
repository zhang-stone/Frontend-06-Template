
import { Timeline, Animation } from './animation.js'
import {easeInOut, ease} from './ease.js'

let t1 = new Timeline();

t1.start();

t1.add(new Animation(document.querySelector('#el').style, "transform", 0, 500, 2000, 0, ease, v => `translateX(${v}px)`));

document.querySelector('#el2').style.transition = '2s ease';
document.querySelector('#el2').style.transform = 'translateX(500px)';

document.querySelector('#pause-btn').addEventListener('click', () => t1.pause())
document.querySelector('#resume-btn').addEventListener('click', () => t1.resume())