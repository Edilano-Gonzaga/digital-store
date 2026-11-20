import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image, price, priceDiscount, discountTag }) => {
  const hasDiscount = priceDiscount && priceDiscount < price;
  return (
    <div className="product-card" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
      <Link to={`/product/${id}`} style={{ display: 'block', background: '#F5F5F5', position: 'relative', padding: '20px' }}>
        {discountTag && (
          <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#E7FF86', fontSize: '12px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', zIndex: 2 }}>
            {discountTag}
          </span>
        )}
        <img src={image} alt={name} className="product-card-img" style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
      </Link>
      <div style={{ padding: '14px 4px' }}>
        <p style={{ fontSize: '12px', color: '#8F8F8F', fontWeight: '600' }}>Tênis</p>
        <Link to={`/product/${id}`} style={{ fontSize: '14px', color: '#1F1F1F', display: 'block', lineHeight: '1.4', margin: '4px 0 8px' }}>{name}</Link>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {hasDiscount && <span style={{ color: '#8F8F8F', textDecoration: 'line-through', fontSize: '14px' }}>${price}</span>}
          <span style={{ color: '#1F1F1F', fontWeight: '700', fontSize: '16px' }}>${hasDiscount ? priceDiscount : price}</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .product-card-img { height: 120px !important; }
        }
      `}</style>
    </div>
  );
};
export default ProductCard;