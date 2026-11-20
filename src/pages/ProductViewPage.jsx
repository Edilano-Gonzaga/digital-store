import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { productsData } from '../data/products';

const ProductViewPage = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id)) || productsData[0];
  const [size, setSize] = useState(42);
  const [color, setColor] = useState(0);
  const related = productsData.filter(p => p.id !== product.id).slice(0, 4);
  return (
    <Layout>
      <div className="container detail-layout" style={{ display: 'flex', gap: '48px', padding: '32px 24px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ background: '#F5F5F5', borderRadius: '16px', padding: '32px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '380px', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ width: '80px', height: '80px', background: '#F5F5F5', borderRadius: '8px', padding: '8px', border: i===1 ? '2px solid #C92071' : 'none' }}>
                <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700' }}>{product.name}</h1>
          <p style={{ color: '#666', fontSize: '13px', margin: '8px 0' }}>Ref: 38416711 | ⭐ 4.7 (90 avaliações)</p>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '16px 0' }}>
            <span style={{ color: '#8F8F8F', textDecoration: 'line-through' }}>R$ {product.price}</span>
            <span style={{ fontSize: '28px', fontWeight: '800' }}>R$ {product.priceDiscount || product.price}</span>
          </div>
          <p style={{ fontSize: '14px', color: '#474747', lineHeight: '1.6' }}>Descrição do produto: tênis confortável, ideal para uso diário e prática de esportes.</p>
          <p style={{ fontWeight: '600', marginTop: '20px' }}>Tamanho</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            {[39,40,41,42,43].map(s => (
              <button key={s} onClick={() => setSize(s)} style={{ width: '48px', height: '48px', borderRadius: '8px', border: size===s ? '2px solid #C92071' : '1px solid #ddd', background: size===s ? '#C92071' : '#fff', color: size===s ? '#fff' : '#000', cursor: 'pointer' }}>{s}</button>
            ))}
          </div>
          <p style={{ fontWeight: '600', marginTop: '20px' }}>Cor</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            {['#C92071','#1F1F1F','#F6AA1C','#4A90E2'].map((c,i) => (
              <button key={c} onClick={() => setColor(i)} style={{ width: '32px', height: '32px', borderRadius: '50%', background: c, border: color===i ? '2px solid #000' : '2px solid #fff', boxShadow: '0 0 0 1px #ddd', cursor: 'pointer' }} />
            ))}
          </div>
          <button style={{ background: '#F6AA1C', color: '#000', width: '100%', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: '700', marginTop: '24px', cursor: 'pointer', fontSize: '16px' }}>COMPRAR</button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .detail-layout { flex-direction: column !important; gap: 24px !important; }
        }
      `}</style>
      <Section title="Produtos relacionados" link={{ text: 'Ver todos', href: '/produtos' }}>
        <ProductListing products={related} />
      </Section>
    </Layout>
  );
};
export default ProductViewPage;