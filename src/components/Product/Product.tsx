import css from './Product.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div className={css.container}>
      <h2 className={css.header}>{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p className={css.price}>Price: {price}</p>
    </div>
  );
}
