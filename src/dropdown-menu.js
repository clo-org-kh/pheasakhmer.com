/* Dropdown menus */

export class DropdownMenu {
  constructor(id) {
    this.id = id;
    this.container = document.getElementById('dropdown-'+id);
    this.container.querySelectorAll('ul li button').forEach(item => this.attach(item));
  }

  /*private*/ attach(item) {
    item.addEventListener('click', () => {
      this.removeActive();
      item.classList.add('active');
      if(this.onclick) {
        this.onclick(item.dataset[this.id]);
      }
    });
  }

  /*private*/ removeActive() {
    this.container.querySelectorAll('ul li button.active').forEach(item => item.classList.remove('active'));
  }

  /*private*/ getItem(value) {
    return this.container.querySelector('ul li button[data-'+this.id+'="'+value+'"]');
  }

  get() {
    let item = this.container.querySelector('ul li button.active');
    return item ? item.dataset[this.id] : null;
  }

  set(value) {
    this.removeActive();
    let item = this.getItem(value);
    if(item) item.classList.add('active');
  }

  add(value, text) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.className="dropdown-item";
    button.type="button";
    button.dataset[this.id] = value;
    button.innerText = text;
    li.appendChild(button);
    this.container.querySelector('ul').appendChild(li);
    this.attach(button);
  }

  addDivider() {
    let li = document.createElement('li');
    let hr = document.createElement('hr');
    hr.className = 'dropdown-divider';
    li.appendChild(hr);
    this.container.querySelector('ul').appendChild(li);
  }

  remove(value) {
    let item = this.getItem(value);
    if(item) {
      item.parentElement.parentNode.removeChild(item.parentElement);
    }
  }

  removeAll() {
    this.container.querySelector('ul').innerHTML = '';
  }
}