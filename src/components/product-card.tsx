import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatCurrencry } from '../utils/helper';
import { ReviewTypes } from '../utils/interfaces';

export type Product = {
  id: number;
  name: string;
  slug: string;
  in_stock: number;
  feature: number;
  new: number;
  feature_image: string;
  price: number;
  viewed: number;
  short_desc: null;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ height: '400px' }}>
      <Link to={`/product/${product.id}`}>
        <Card.Img
          src={product.feature_image}
          variant='top'
          style={{ height: '300px', width: '100%', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
            <span className='fs-2'>{product.name}</span>
            <span className='ms-2 text-muted'>
              {formatCurrencry(product.price)}
            </span>
          </Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;
