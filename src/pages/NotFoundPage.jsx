import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage({ path, onGoHome }) {
  return (
    <section className="page-shell">
      <StatusBlock
        emoji="🍂"
        title="Такой страницы нет"
        subtitle={`Путь "${path}" не совпал ни с одним маршрутом.`}
        actionLabel="Вернуться на главную"
        onAction={onGoHome}
      />
    </section>
  );
}
