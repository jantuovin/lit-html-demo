import { html, render } from 'lit-html';

let items = [];

const handleValueChange = (e) => {
  if (e.code === 'Enter' && e.target.value !== '') {
    items = [...items, e.target.value];
    e.target.value = '';
    update();
  }
}

const handleClearClick = () => {
  items = [];
  update();
}

const app = () => html`
    <h1>To Do list</h1>
    <label>
      New
      <input type="text" @keyup=${handleValueChange} />
    </label>
    <ul>
      ${items.map((item) => html`
      <li>
        <p>${item}</p>
      </li>`)}
    </ul>
    ${items.length > 0 ? html`<button @click=${handleClearClick}>Clear</button>` : ''}
`;

const update = () => render(app(), document.body);

update();