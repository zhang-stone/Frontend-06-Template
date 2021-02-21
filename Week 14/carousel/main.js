
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

    let position = 0;
    this.root.addEventListener('mousedown', (event) => {
      console.log('mousedown');
      let children = this.root.children;
      let startX = event.clientX;
      let move = (event) => {
        let x = event.clientX - startX;
        
        let current = position - ((x - x % 500) / 500);
        for (let offset of [-1, 0, 1]) {
          let pos = current + offset
          pos = (pos + children.length) % children.length;

          children[pos].style.transition = 'none'
          children[pos].style.transform =  `translateX(${- pos * 500 + offset * 500 + x}px)`;
        }
      }
      let up = (event) => {
        console.log('up')
        let x = event.clientX - startX;
        position = position - Math.round(x / 500);

        for (let offset of [0, -Math.sign(Math.round(x / 500) -x +250 * Math.sign(x))]) {
          let pos = position + offset;
          pos = (pos + children.length) % children.length;
          
          children[pos].style.transition = ''
          children[pos].style.transform = `translateX(${- pos * 500 + offset * 500}px)`;
        }
        
        // for (let child of children) {
        //   child.style.transition = ''
        //   child.style.transform = `translateX(${- position * 500}px)`;
        // }

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })



    // let currentIndex = 0;
    // setInterval(() => {
    //   let children = this.root.children;
    //   let nextIndex = (currentIndex + 1) % children.length;
      
    //   let current = children[currentIndex]
    //   let next = children[nextIndex]
      
    //   next.style.transition = 'none'
    //   next.style.transform = `translateX(${100 - nextIndex * 100}%)`;
      
    //   setTimeout(() => {
    //     next.style.transition = ''
    //     current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
        
    //     next.style.transform = `translateX(${-nextIndex * 100}%)`;
    //     currentIndex = nextIndex;
    //   },16)
      
    // }, 2000);
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