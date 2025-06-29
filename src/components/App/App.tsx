import Books from '../Books/Books';
import ClickCounter from '../ClickCounter/ClickCounter';
import Objects from '../Objects/Objects';
import SomeStans from '../SomeStans/SomeStans';
import UserMenu from '../User/User';
import Mailbox from '../message/Message';
import Product from '../Product/Product';
import { useState } from 'react';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <hr />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <hr />
      <SomeStans />
      <hr />
      <Objects />
      <hr />
      <Mailbox username="Poly" unreadMessages={['hello']} />
      <Mailbox username="Julie" unreadMessages={[]} />
      <hr />
      <Books />
      <hr />
      <UserMenu name="Poly" />
    </>
  );
}
