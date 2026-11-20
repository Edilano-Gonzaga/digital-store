import { Link } from 'react-router-dom';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="container" style={{ margin: '40px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', textAlign: titleAlign, color: '#1F1F1F' }}>{title}</h2>
        {link && <Link to={link.href} style={{ color: '#C92071', fontSize: '14px', fontWeight: '500' }}>{link.text} →</Link>}
      </div>
      {children}
    </section>
  );
};
export default Section;