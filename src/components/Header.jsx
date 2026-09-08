export default function Header({ currentPage, onNavigate, onSearch }) {
  function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
      onSearch(e.target.value.trim());
      e.target.value = '';
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="/"
          className="brand"
          onClick={e => { e.preventDefault(); onNavigate('home'); }}
        >
          <div className="brand-mark">t</div>
          <div className="brand-name">Terra</div>
        </a>

        <nav className="main-nav">
          <NavItem label="Главная" page="home" currentPage={currentPage} onNavigate={onNavigate} />
          <NavItem label="Каталог" page="catalog" currentPage={currentPage} onNavigate={onNavigate} />
          <NavItem label="О нас" page="about" currentPage={currentPage} onNavigate={onNavigate} />
          <NavItem label="Контакты" page="contacts" currentPage={currentPage} onNavigate={onNavigate} />
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Найти растение..." onKeyDown={handleSearchKeyDown} />
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, page, currentPage, onNavigate }) {
  return (
    <a
      href={'/' + (page === 'home' ? '' : page)}
      className={'nav-link' + (currentPage === page ? ' active' : '')}
      onClick={e => { e.preventDefault(); onNavigate(page); }}
    >
      {label}
    </a>
  );
}
