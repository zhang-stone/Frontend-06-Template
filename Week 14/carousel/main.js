
import {createElement, Component} from './framework'
class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null)
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    for (let r of this.attributes.src) {
      let child = document.createElement('div')
      child.style.backgroundImage = `url('${r}')`;
      this.root.appendChild(child)
    }
    let currentIndex = 0;
    setInterval(() => {
      let children = this.root.children;
      let nextIndex = (currentIndex + 1) % children.length;
      
      let current = children[currentIndex]
      let next = children[nextIndex]
      
      next.style.transition = 'none'
      next.style.transform = `translateX(${100 - nextIndex * 100}%)`;
      
      setTimeout(() => {
        next.style.transition = ''
        current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
        
        next.style.transform = `translateX(${-nextIndex * 100}%)`;
        currentIndex = nextIndex;
      },16)
      
      
    }, 2000);
    return this.root;
  }
  mountTo(parent) {
    parent.appendChild(this.render())
  }
}

let d = [
  'https://c-ssl.duitang.com/uploads/item/202007/03/20200703235450_mguxx.jpg',
  'https://c-ssl.duitang.com/uploads/item/202004/18/20200418110446_GvwiA.thumb.1000_0.jpeg',
  'https://c-ssl.duitang.com/uploads/item/202002/23/20200223144256_jwKU4.thumb.1000_0.jpeg'
]

let a = <Carousel src={d} />

a.mountTo(document.body)