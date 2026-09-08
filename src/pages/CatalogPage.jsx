import ProductCard from '../components/ProductCard.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';

export default function CatalogPage({ products, categories, activeCategory, onSelectCategory, onSelectProduct }) {
  const visibleProducts = activeCategory
    ? products.filter(p => p.category === activeCategory)
    : products;

  return (
    <section className="page-shell">
      <p className="page-eyebrow">Каталог</p>
      <h1 className="page-title">Все растения</h1>

      <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={onSelectCategory} />

      <div className="product-grid">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
        ))}
      </div>
    </section>
  );
}
