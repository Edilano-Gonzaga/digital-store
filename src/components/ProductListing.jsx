import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
  if (!products || products.length === 0) {
    return <p style={{ padding: '20px 0' }}>Nenhum produto encontrado.</p>;
  }
  return (
    <>
      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {products.map((p) => (
          <ProductCard key={p.id} id={p.id} name={p.name} image={p.image} price={p.price} priceDiscount={p.priceDiscount} discountTag={p.discountTag} />
        ))}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
        }
      `}</style>
    </>
  );
};
export default ProductListing;