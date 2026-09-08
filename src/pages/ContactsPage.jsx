export default function ContactsPage() {
  return (
    <section className="page-shell">
      <p className="page-eyebrow">Контакты</p>
      <h1 className="page-title">Свяжитесь с нами</h1>
      <p className="page-sub" style={{ maxWidth: 560 }}>
        Пишите нам, если у вас вопрос по уходу за растением или доставке.
      </p>
      <div className="contacts-list">
        <div className="contacts-row"><span>Телефон</span><span>+7 (999) 123-45-67</span></div>
        <div className="contacts-row"><span>Почта</span><span>hello@terra.shop</span></div>
        <div className="contacts-row"><span>Адрес</span><span>Москва, ул. Садовая, 12</span></div>
      </div>
    </section>
  );
}
