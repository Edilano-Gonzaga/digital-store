import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductListing from '../components/ProductListing';
import { productsData } from '../data/products';

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') || '';
  const [sort, setSort] = useState('relevancia');
  const [maxPrice, setMaxPrice] = useState(300);

  const filtered = useMemo(() => {
    let list = productsData.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(filterParam.toLowerCase());
      const price = p.priceDiscount || p.price;
      const matchPrice = price <= maxPrice;
      return matchSearch && matchPrice;
    });
    if (sort === 'menor') list = [...list].sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
    if (sort === 'maior') list = [...list].sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
    return list;
  }, [filterParam, sort, maxPrice]);

  return (
    <Layout>
      <div className="container listing-layout" style={{ display: 'flex', gap: '32px', padding: '32px 24px', alignItems: 'flex-start' }}>
        {/* FILTROS */}
        <aside className="filter-aside" style={{ width: '260px', background: '#fff', padding: '20px', borderRadius: '12px', flexShrink: 0 }}>
          <h3 style={{ marginBottom: '16px' }}>Filtrar por</h3>
          <hr />
          <p style={{ fontWeight: '600', margin: '16px 0 8px' }}>Preço até: R$ {maxPrice}</p>
          <input type="range" min="50" max="300" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} style={{ width: '100%' }} />
          <p style={{ fontWeight: '600', margin: '16px 0 8px' }}>Marca</p>
          <label style={{ display: 'block', fontSize: '14px' }}><input type="checkbox" defaultChecked /> Nike</label>
          <label style={{ display: 'block', fontSize: '14px' }}><input type="checkbox" /> Adidas</label>
          <p style={{ fontWeight: '600', margin: '16px 0 8px' }}>Tipo</p>
          <label style={{ display: 'block', fontSize: '14px' }}><input type="checkbox" /> Corrida</label>
          <label style={{ display: 'block', fontSize: '14px' }}><input type="checkbox" /> Casual</label>
        </aside>

        {/* LISTA */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '12px', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '14px' }}>Resultados para <b>"{filterParam || 'todos'}"</b> - {filtered.length} produtos</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <option value="relevancia">Mais relevantes</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>
          <ProductListing products={filtered} />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .listing-layout { flex-direction: column !important; }
          .filter-aside { width: 100% !important; }
        }
      `}</style>
    </Layout>
  );
};
export default ProductListingPage;