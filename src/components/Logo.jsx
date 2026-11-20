import { Link } from 'react-router-dom';

const Logo = ({ color = '#C92071' }) => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src="/logo.png" alt="Digital Store" style={{ width: '33px', height: '33px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
      <span style={{ fontSize: '28px', fontWeight: '700', color: color, letterSpacing: '-0.5px' }}>
        Digital Store
      </span>
    </Link>
  );
};
export default Logo;