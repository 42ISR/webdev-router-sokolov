export const categories = [
  { id: '', label: 'Все' },
  { id: 'succulents', label: 'Суккуленты' },
  { id: 'tropical', label: 'Тропические' },
  { id: 'herbs', label: 'Травы' },
];

export const products = [
  { id: 'monstera', name: 'Монстера Делициоза', category: 'tropical', price: 2400, color: '#3f6b47', description: 'Крупные резные листья, любит рассеянный свет и не терпит пересушивания.' },
  { id: 'echeveria', name: 'Эчеверия Лола', category: 'succulents', price: 650, color: '#7c8f5e', description: 'Компактный суккулент розеткой, поливать редко, держать на солнце.' },
  { id: 'ficus', name: 'Фикус Лирата', category: 'tropical', price: 3200, color: '#2f5233', description: 'Крупное растение с глянцевыми листьями, требует стабильного места без сквозняков.' },
  { id: 'basil', name: 'Базилик в горшке', category: 'herbs', price: 350, color: '#4f7942', description: 'Съедобная зелень для подоконника, любит солнце и регулярный полив.' },
  { id: 'haworthia', name: 'Хавортия Полосатая', category: 'succulents', price: 480, color: '#8c9b6e', description: 'Неприхотливый суккулент для новичков, почти не требует внимания.' },
  { id: 'mint', name: 'Мята перечная', category: 'herbs', price: 320, color: '#5b8a52', description: 'Быстро разрастается, любит влажную почву и полутень.' },
];

export function labelForCategory(categoryId) {
  return categories.find(c => c.id === categoryId)?.label || categoryId;
}
