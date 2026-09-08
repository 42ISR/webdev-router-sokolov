# Terra (упрощённая версия) — шаблон без react-router

Рабочее React-приложение без корзины: поиск, каталог с фильтром, карточка
одного товара, две статичные страницы. Переключение экранов сделано через
`useState` в `src/App.jsx` — так же, как в лабораторной про хуки.

## Запуск

```
npm install
npm run dev
```

## Структура

```
src/
 ├─ components/
 │   ├─ Header.jsx         навигация + поиск
 │   ├─ ProductCard.jsx    карточка товара
 │   ├─ CategoryFilter.jsx фильтр каталога по категории
 │   └─ StatusBlock.jsx    переиспользуемый блок для 404
 ├─ pages/
 │   ├─ HomePage.jsx
 │   ├─ CatalogPage.jsx
 │   ├─ ProductPage.jsx
 │   ├─ SearchPage.jsx
 │   ├─ AboutPage.jsx
 │   ├─ ContactsPage.jsx
 │   └─ NotFoundPage.jsx
 ├─ data/products.js
 ├─ App.jsx           здесь живёт ручное переключение currentPage
 ├─ main.jsx
 └─ index.css
```

## Задача занятия

В `src/App.jsx` оставлены комментарии с тем, что нужно заменить на
react-router:

- обернуть приложение в `<BrowserRouter>` (в `main.jsx`);
- вместо `renderPage()` со `switch` — `<Routes>` и `<Route>`;
- в `Header.jsx` и `ProductCard.jsx` заменить `<a onClick>` на
  `<Link>` / `<NavLink>`;
- `selectedProductId` — на `useParams()` внутри маршрута `/catalog/:id`;
- `activeCategory` и `searchQuery` — на `useSearchParams()`;
- `onBack` в `ProductPage` — на `navigate(-1)` из `useNavigate()`;
- `NotFoundPage` — подключить как `<Route path="*">`.

Компоненты и страницы уже получают всё через пропсы, так что при переходе
на react-router их почти не придётся менять — вся работа в `App.jsx` и
`Header.jsx`.
