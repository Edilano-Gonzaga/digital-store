import Layout from '../components/Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { featuredCollections, productsData } from '../data/products';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
  // Suas imagens do Figma que vão trocar nas bolinhas
  const heroImages = [
    "/tenis-branco-vermelho.png",
    "/produc-image-1.jpeg",
    "/produc-image-2.jpeg",
    "/produc-image-3.jpeg",
    "/produc-image-4.jpeg",
    "/produc-image-5.jpeg",
    "/home-slide-2.jpeg",
    "/home-slide-3.jpeg",
  ];
  const [slide, setSlide] = useState(0);

  return (
    <Layout>
      {/* HERO */}
      <div style={{ background: '#F5F5F5', padding: '40px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ maxWidth: '500px' }}>
            <p style={{ color: '#F6AA1C', fontWeight: '700', fontSize: '14px' }}>Melhores ofertas personalizadas</p>
            <h1 style={{ fontSize: '52px', lineHeight: '1.1', fontWeight: '800', margin: '12px 0' }}>Queima de estoque Nike 🔥</h1>
            <p style={{ color: '#474747', lineHeight: '1.6', marginBottom: '20px' }}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <Link to="/produtos" style={{ background: '#C92071', color: '#fff', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', display: 'inline-block' }}>Ver Ofertas</Link>
            <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
              {heroImages.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', background: i === slide ? '#C92071' : '#CCCCCC', cursor: 'pointer' }} />
              ))}
            </div>
          </div>
          {/* AGORA TROCA! */}
          <img key={slide} src={heroImages[slide]} alt="Destaque" style={{ width: '55%', maxHeight: '400px', objectFit: 'contain' }} />
        </div>
      </div>

      {/* COLEÇÕES */}
      <Section title="Coleções em destaque">
        <div className="collections-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {featuredCollections.map((c) => (
            <Link key={c.id} to="/produtos" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', display: 'block', height: '220px' }}>
              <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#E7FF86', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{c.discount}</span>
              <span style={{ position: 'absolute', bottom: '16px', left: '16px', background: '#fff', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>{c.title}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* CATEGORIAS - icones */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
          {['/collection-1.png', '/collection-2.png', '/collection-3.png'].map((src, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <img src={src} alt="" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '13px', fontWeight: '600' }}>{['Camisetas', 'Calças', 'Bonés'][i]}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUTOS */}
      <Section title="Produtos em alta" link={{ text: 'Ver todos', href: '/produtos' }}>
        <ProductListing products={productsData} />
      </Section>

      {/* BANNER OFERTA ESPECIAL */}
      <div className="container offer-banner" style={{ background: '#fff', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '40px', padding: '40px', marginBottom: '40px' }}>
        <img src="/product-thumb-1.jpeg" alt="Oferta" style={{ width: '40%', objectFit: 'contain', background: '#F5F5F5', borderRadius: '12px', padding: '20px' }} />
        <div>
          <p style={{ color: '#C92071', fontWeight: '700', fontSize: '13px' }}>Oferta especial</p>
          <h2 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.2', margin: '10px 0' }}>Air Jordan edição de colecionador</h2>
          <p style={{ color: '#474747', lineHeight: '1.6', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/produtos" style={{ background: '#C92071', color: '#fff', padding: '12px 32px', borderRadius: '8px', fontWeight: '600' }}>Ver Oferta</Link>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;