
import {createElement, Component} from './framework'
import { Carousel } from './carousel'

import {Timeline, Animation} from './animation'

let d = [
  'https://c-ssl.duitang.com/uploads/item/202007/03/20200703235450_mguxx.jpg',
  'https://c-ssl.duitang.com/uploads/item/202004/18/20200418110446_GvwiA.thumb.1000_0.jpeg',
  'https://c-ssl.duitang.com/uploads/item/202002/23/20200223144256_jwKU4.thumb.1000_0.jpeg'
]


let tl = new Timeline()

tl.add(new Animation({ set a (v) { console.log(v) }}, 'a', 0, 100, 1000, null));

tl.start()


let a = <Carousel src={d} />

a.mountTo(document.body)