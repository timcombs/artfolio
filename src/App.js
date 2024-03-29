import React, { useState } from 'react';

import Card from './Card';
import Masthead from './Masthead';
import ArtFilter from './ArtFilter';
import StyleButtons from './StyleButtons';

import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      title: 'ω∀⦂⟟ ∫⨺⟠∤',
      type: 'Web',
      image: './img/digiWabiSabi.gif',
      imgname: 'digiWabiSabi.gif',
      alt: 'gif of digiWabiSabi web art',
      path: 'https://www.desolidstate.com/digiWabiSabi/digiWabiSabi.html'
    },
    {
      title: 'crack-rend',
      type: 'Vid',
      image: './img/crack-rend.png',
      imgname: 'crack-rend.png',
      alt: 'picture of crack-rend video',
      path: 'https://www.desolidstate.com/vid/crack-rend.mp4'
    },
    {
      title: '8 Bit Adventure',
      type: 'Web',
      image: './img/8bitAdv.gif',
      imgname: '8bitAdv.gif',
      alt: 'gif of 8 Bit Adventure web art',
      path: 'https://www.desolidstate.com/adventureDragons/advDragons.html'
    },
    {
      title: 'cotton',
      type: 'Txt',
      text: 'is <em>Cotton Clean</em> or <em>Dirty</em>?',
    },
    {
      title: '8 Bit Invaders',
      type: 'Web',
      image: './img/8bitInv.gif',
      imgname: '8bitInv.gif',
      alt: 'gif of 8 Bit Invaders web art',
      path: 'https://www.desolidstate.com/adventureDragons/spInvaders.html'
    },
    {
      title: 'everything',
      type: 'Txt',
      text: "you can't know <em>everything</em> at once",
    },
    {
      title: 'Snow Gather',
      type: 'Img',
      image: './img/snowGather.gif',
      imgname: 'snowGather.gif',
      alt: 'gif titled Snow Gather',
      path: './img/snowGather.gif'
    },
    {
      title: 'crowmanteau',
      type: 'Txt',
      text: 'Control Systems: <br><br>built Objects w/embedded monitors to display video loops of longish duration.<br>translucent objects with lights inside.<br><br>Crowmanteau.<br>Portmancrow.<br><br>sensors measuring the humans in the room.'
    },
    {
      title: 'ripe vagaries',
      type: 'Txt',
      text: '<p>a need for <em>spontaneity</em> - or perhaps <em>extemporaneity</em> - to match a self actualized <em>"flow"</em><br></br><br></br>- or <em>something</em><br></br><em>some</em> & <em>thing</em> are ripe vagaries</p>'
    },
    {
      title: 'Marx Headmon Speaks',
      type: 'Web',
      image: '.img/marx-headmon-speaks.png',
      imgname: 'marx-headmon-speaks.png',
      alt: 'Marx Headmon Speaks',
      path: 'https://www.desolidstate.com/marx_headmon_speaks/marx-headmon-speaks.html'
    },
    {
      title: 'transparency',
      type: 'Txt',
      text: 'a mirror held up to see the ghost inside'
    },
    {
      title: 'plague years',
      type: 'Txt',
      text: 'rather, the postApocalypse already happened and we are in the plague years, the crypt time, a place of decay and possibilities'
    },
    {
      title: 'Cellular Autobota',
      type: 'Web',
      image: './img/cell-autobota.png',
      imgname: 'cell-autobota.png',
      alt: 'picture generated by Twitter bot Cell Autobota',
      path: 'https://twitter.com/cellAutobota'
    },
    {
      title: 'emergence cartography',
      type: 'Txt',
      text: 'experimentation surveys an <em>emergence</em> cartography'
    },
    {
      title: 'truth and lies',
      type: 'Txt',
      text: "this information we've conceived from the data immersion is real & irreal, truth and lies at once, iterating our possible futures."
    },
    {
      title: 'well-crafted',
      type: 'Txt',
      text: "maybe it's only about well-crafted documentation"
    },
    {
      title: 'post-',
      type: 'Txt',
      text: "the <em>post-</em> already happened and we're just trying to fulfill our <em>baroque</em> destinies"
    },
    {
      title: 'emergence contexts',
      type: 'Txt',
      text: 'rather, utopias died deaths with the avant garde - we are organizers of emergence contexts'
    },
    {
      title: 'meta closet',
      type: 'Txt',
      text: 'the meta closet. small space small work. ephemerals. skins. installs.'
    },
    {
      title: 'technological present',
      type: 'Txt',
      text: 'part of understanding the ethical implications of a technological present is to fully explore the technological and metaphoric limitations of various technological media.'
    },
    {
      title: 'extended glitch',
      type: 'Txt',
      text: 'an extended glitch feels like despondency'
    },
    {
      title: 'one',
      type: 'Img',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'two',
      type: 'Aud',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'four',
      type: 'Txt',
      text: ''
    },
    {
      title: 'four',
      type: 'Txt',
      text: ''
    },
    {
      title: 'four',
      type: 'Txt',
      text: ''
    },
    {
      title: 'two',
      type: 'Aud',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'two',
      type: 'Aud',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'two',
      type: 'Aud',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'one',
      type: 'Img',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'one',
      type: 'Img',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'one',
      type: 'Img',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'three',
      type: 'Web',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'three',
      type: 'Web',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'five',
      type: 'Vid',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'five',
      type: 'Vid',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
    {
      title: 'five',
      type: 'Vid',
      image: '',
      imgname: '',
      alt: '',
      path: ''
    },
  ])

  return (
    <div className='app'>
      <Masthead />
      <ArtFilter />
      <div className='cards'>
        {cards.map((card, idx) => (
          <Card key={`${idx}-${card.title}`}
            index={idx}
            card={card}
          ></Card>
        ))}
      </div>

      <StyleButtons />
    </div>
  );
}

export default App;
