export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="filter-row">
      {categories.map(cat => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'filter-chip' + (cat.id === activeCategory ? ' active' : '')}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
