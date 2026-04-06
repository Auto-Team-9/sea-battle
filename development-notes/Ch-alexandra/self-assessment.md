
**FEATURES TABLE**

| Feature             | Score | Link                                                                                                                                                                |
|---------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Widget Engine**   | 25    | https://github.com/Auto-Team-9/sea-battle/pull/25                                                                                                                   |
| BaaS CRUD           | 15    | https://github.com/Auto-Team-9/sea-battle/blob/9fd23ca466a48bf1b48cb366f2207ceb8ca6c6d2/sea-of-code/src/api/questions.ts                                            |
| Drag & Drop         | 10    | https://github.com/Auto-Team-9/sea-battle/pull/29                                                                                                                   |
| Responsive          | 5     |                                                                                                                                                                     |
| Unit Tests (Basic)  | 10    | https://github.com/Auto-Team-9/sea-battle/blob/e2b221cb31471739657557807b0431b862b94bc1/sea-of-code/src/pages/game/components/question-modal/questionModal.test.tsx |
| API Layer           | 10    |                                                                                                                                                                     |
| Auto-deploy         | 5     | https://github.com/Auto-Team-9/sea-battle/blob/develop/.github/workflows/deploy.yml                                                                                 |
| React               | 5     |                                                                                                                                                                     |
| **Rich UI Screen**  | 20    | https://github.com/Auto-Team-9/sea-battle/pull/32                                                                                                                   |
| Real-time           | 20    | https://github.com/Auto-Team-9/sea-battle/blob/72a6a6c9a11801552d054775f65df6c2ba11c46a/sea-of-code/src/pages/clans/clans.tsx                                       |
| Advanced Animations | 10    | https://github.com/Auto-Team-9/sea-battle/blob/72a6a6c9a11801552d054775f65df6c2ba11c46a/sea-of-code/src/pages/clans/clans.css                                       |
|                     |       |                                                                                                                                                                     |
| Score:              | 115   |                                                                                                                                                                     |



[Link to this PR for questions]()

В рамках проекта мною было разработано модальное окно с вопросами, которое встраивается в игровой процесс. При выстреле по кораблям для удачно попадения нужно верно ответитьь на вопрос.
Компонент QuestionModal загружает вопрос из Firebase Firestore и поддерживает два типа вопросов множественный выбор и drag-and-drop, показывает результат и пробрасывают результат через колбэк для дальнейших деййствий.

Квиз модальное лкгл оазбито на несколько незваисимых компонентов - ModalShell, ActionArea, MultipleChoice, DragDropOrder - чтобы каждый отвечал за одну задачу. 

Написала API-слой (api/questions.ts) для получения случайного вопроса из Firestore с фильтрацией по теме, сложности и типу. Разобралась со структурой хранения вопросов: остановилась на одной коллекции с полями-фильтрами вместо вложенных подколлекций, потому что это проще в запросе.
ПОзнакомилась как работать с firestore и какие есть способы пополнять базу. Загружала при помощи скрипта, который принимает файл с вопросами через аргумент командной строки.

Также разобралась с Drag-and-Drop на нативном HTML. Основные сложности: браузер не вызывает onDrop без preventDefault в onDragOver, а при отпускании элемента вне зоны дропа onDrop не срабатывает - поэтому пришлось сбрасывать состояние в onDragEnd. Массив для перемешивания вариантов перед отображением нужно копировать, иначе мутируется оригинал - поймала этот баг уже в процессе.

Покрыла модалку юнит-тестами на Vitest + Testing Library: проверила состояние загрузки, отображение вариантов ответа, обработку ошибки загрузки и наличие кнопки отправки.



Реализовала страницу кланов. Сделан детальный экран с лором и статистикой, выделен топ 5-игроков клана и топ среди кланов.

Для real-time отображения статистики кланов использовала onSnapshot из firebase - подписка на всю коллекцию users, при каждом изменении пересчитывается количество участников, побед.

Написала кастомные CSS-анимации в clans.css: clan-select при вступлении в клан, fade-in-up для появления карточек, modal-bounce-in  для модального окна подтверждения.

Технологии: React, TypeScript, Firebase Firestore, Vitest, HTML Drag-and-Drop API.

Юыло сложным разобраться с dnd api, структурировать хранение вопросов и настроить seed-скрипт, а также наладить real-time агрегацию без серверной логики.