import React from 'react';
import Items from './Items';
import './Middle.css';

function Middle() {
  return (
    <div className='middle'>
      <Items id="1" rate={2.2} image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/2/7/0/FNM_030118-Wilted-Cabbage-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1518023994042.jpeg"price={5.0} title='Cabbage salad' weigh={300}/>
      <Items id="12" rate={4.5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEGWy4gzriF-OfxoCvBsp_9QsmXYhtYAkLw&usqp=CAU" price={14.0} title='Noodle salad' weigh={250}/>
      <Items id="123" rate={4.9} image="https://thumbs.dreamstime.com/b/indian-mix-veg-mixed-vegetable-recipe-served-bowl-chapati-dry-restaurant-style-192327893.jpg" price={12} title='Vegetable mix' weigh={320}/>
      <Items id="1234" rate={4.4} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-i-zXNkBqE9tpZWwuUMXwQ0subvLNLI0Qw&usqp=CAU" price={18.9} title='Seafood soup' weigh={450}/>
      <Items id="12345" rate={4.9} image="https://thecozycook.com/wp-content/uploads/2022/02/Pinto-Bean-Soup-f.jpg" price={12} title='Bean soup' weigh={120}/>
      <Items id="123456" rate={3.9} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSvpuCOsZeek9Pm8ZOceReVxPR4HYgB5bZQ&usqp=CAU" price={15} title='Stewed vegetables'weigh={100}/>
      <Items id="13" rate={4.2} image="https://geekrobocook.com/wp-content/uploads/2021/04/Hot-and-sour-chicken-soup.jpg" price={16.8} title='Chicken soup'weigh={150} />
      <Items id="132" rate={4.4} image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slimming-world-51173-crunchy-roasties-with-celery-salt-festive-jpg-sw-hi-res-jpg-1575636484.jpg?crop=0.785xw:0.589xh;0.109xw,0.238xh&resize=480:*" price={12} title='Roast potatoes' weigh={350}/>
    </div>
  )
}

export default Middle
