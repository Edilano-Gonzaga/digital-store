import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ background: '#1F1F1F', color: '#fff', padding: '48px 0 24px', marginTop: '60px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '300px' }}>
          <Logo color="#fff" />
          <p style={{ fontSize: '13px', color: '#ccc', marginTop: '16px', lineHeight: '1.6' }}>A melhor loja de tênis e acessórios com ofertas exclusivas para você.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', fontSize: '20px' }}>📘 📸 🐦</div>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Informação</h4>
          <ul style={{ fontSize: '13px', color: '#ccc', lineHeight: '2', listStyle: 'none', padding: 0 }}><li>Sobre Drip Store</li><li>Segurança</li><li>Wishlist</li><li>Trabalhe conosco</li></ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Categorias</h4>
          <ul style={{ fontSize: '13px', color: '#ccc', lineHeight: '2', listStyle: 'none', padding: 0 }}><li>Camisetas</li><li>Calças</li><li>Bonés</li><li>Headphones</li><li>Tênis</li></ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Contato</h4>
          <p style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.8' }}>Av. Santos Dumont, 1510 - 1 andar<br/>Aldeota, Fortaleza - CE, 60150-161<br/>(85) 3051-3411</p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid #333', marginTop: '32px', paddingTop: '16px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
        © 2026 Digital Store | Desenvolvido por <span style={{ color: '#fff', fontWeight: '600' }}>Edilano Melo</span>
      </div>
    </footer>
  );
};
export default Footer;