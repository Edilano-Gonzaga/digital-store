import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/produtos?filter=${encodeURIComponent(search)}`);
    else navigate('/produtos');
  };

  // Função que deixa rosa só o link ativo - igual Figma
  const navStyle = (isActive) => ({
    color: isActive ? '#C92071' : '#474747',
    borderBottom: isActive ? '2px solid #C92071' : '2px solid transparent',
    paddingBottom: '2px',
    textDecoration: 'none',
  });

  return (
    <header style={{ background: '#fff', padding: '16px 0 0', borderBottom: '1px solid #eee', position: 'relative' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'space-between' }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }} className="hamburger">☰</button>
        
        <Logo />
        
        {/* Desktop search */}
        <form onSubmit={handleSearch} className="search-desktop" style={{ flex: 1, display: 'flex', background: '#F5F5F5', borderRadius: '8px', padding: '10px 16px' }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar produto..." style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '14px' }} />
          <button type="submit" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>🔍</button>
        </form>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link to="/produtos" style={{ fontSize: '14px', textDecoration: 'underline' }} className="hide-mobile">Cadastre-se</Link>
          <Link to="/produtos" style={{ background: '#C92071', color: '#fff', padding: '8px 20px', borderRadius: '8px', fontWeight: '600', fontSize: '14px' }} className="hide-mobile">Entrar</Link>
          <span style={{ fontSize: '22px', cursor: 'pointer' }}>🛒</span>
        </div>
      </div>

      {/* Search Mobile - abaixo */}
      <div className="container" style={{ paddingTop: '12px' }}>
        <form onSubmit={handleSearch} className="search-mobile" style={{ display: 'none', background: '#F5F5F5', borderRadius: '8px', padding: '10px 16px' }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar produto..." style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '14px' }} />
          <button type="submit" style={{ border: 'none', background: 'transparent' }}>🔍</button>
        </form>
      </div>

      {/* Nav Desktop - CORRIGIDO */}
      <nav className="container hide-mobile" style={{ display: 'flex', gap: '32px', padding: '16px 24px', fontSize: '14px', fontWeight: '500' }}>
        <Link to="/" style={navStyle(path === '/')}>Home</Link>
        <Link to="/produtos" style={navStyle(path === '/produtos' || path.startsWith('/produto/'))}>Produtos</Link>
        <Link to="/produtos" style={navStyle(false)}>Categorias</Link>
        <Link to="/produtos" style={navStyle(false)}>Meus Pedidos</Link>
      </nav>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div style={{ background: '#fff', padding: '16px', borderTop: '1px solid #eee', position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontWeight: path === '/' ? '700' : '400', color: path === '/' ? '#C92071' : '#000' }}>Home</Link>
          <Link to="/produtos" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0', color: path === '/produtos' ? '#C92071' : '#000', fontWeight: path === '/produtos' ? '700' : '400' }}>Produtos</Link>
          <Link to="/produtos" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0' }}>Categorias</Link>
          <Link to="/produtos" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0' }}>Meus Pedidos</Link>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <Link to="/produtos" style={{ flex: 1, textAlign: 'center', border: '1px solid #C92071', color: '#C92071', padding: '10px', borderRadius: '8px' }}>Cadastre-se</Link>
            <Link to="/produtos" style={{ flex: 1, textAlign: 'center', background: '#C92071', color: '#fff', padding: '10px', borderRadius: '8px' }}>Entrar</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: block !important; }
          .search-desktop { display: none !important; }
          .search-mobile { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};
export default Header;