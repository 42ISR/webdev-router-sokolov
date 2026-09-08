import ProductCard from '../components/ProductCard.jsx';

export default function HomePage({ featuredProducts, onSelectProduct, onGoToCatalog }) {
  return (
    <section className="page-shell">
      <div className="hero">
        <div>
          <h1>Растения, которые правда выживут у вас дома</h1>
          <p>Подбор простых в уходе растений для новичков — от суккулентов до крупных фикусов.</p>
          <button type="button" className="btn" onClick={onGoToCatalog}>Смотреть каталог</button>
        </div>
        <div className="hero-plant" />
      </div>

      <p className="section-label">Популярное сейчас</p>
      <div className="product-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
        ))}
      </div>
    </section>
  );
}
