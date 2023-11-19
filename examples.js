const examplesDropdown = new DropdownMenu('examples');

const examples = [
  {
    text: 'ខ្មែរ',
    keys: ['x','j','m',['shift','E'],'r'],
    description: 'the word "Khmer"',
    alternates: [
      { keys: ['x',['shift','E'],'j','m','r'], description: "coeng typed before vowel" },
    ]
  },
  {
    text: 'ស្ត្រី',
    keys: ['s','j','t','j','r',['shift','I']],
    description: 'stri, "woman"',
    alternates: [
      { keys: ['s','j','r','j','t',['shift','I']],  description: 'coeng ro typed before coeng to' },
      { keys: ['s','j','d','j','r',['shift','I']],  description: 'coeng do instead of coeng to' },
      { keys: ['s','j','r','j','d',['shift','I']],  description: 'coeng do instead of coeng to, wrong order' },
      { keys: ['s',['shift','I'],'j','t','j','r'],  description: 'vowel before coengs' },
      { keys: ['s',['shift','I'],'j','r','j','d'],  description: 'vowel before coengs, coengs wrong order, do instead of to!' },
    ]
  },
  {
    text: 'ស៊ើប',
    description: '"to detect, investigate"',
    keys: ['s','/',';','b'],
    alternates: [
      { keys: ['s','"',';','b'], description: 'wrong shifter' },
      { keys: ['s','/','e',['shift','I'],'b'], description: 'two vowel chars instead of correct one' },
      { keys: ['s','u',';','b'], description: 'u vowel instead of dropped shifter' },
      { keys: ['s','e',['shift','I'],'u','b'], description: 'u vowel instead of shifter, AND two vowel chars' },
    ]
  }
];

function fillExamples() {
  examplesDropdown.removeAll();
  for(let i = 0; i < examples.length; i++) {
    const example = examples[i];
    examplesDropdown.add('#example'+i.toString(), example.text + ' ' + example.description);
  }
  examplesDropdown.set('#example0');
}

fillExamples();
showExample(0);

examplesDropdown.onclick = (value) => {
  // examplesDropdown.set('');
  const index = Number.parseInt(value.substring('#example'.length));
  showExample(index);
};

function keysToHtml(keys) {
  const html = [];
  for(let key of keys) {
    const kx = Array.isArray(key) ? key : [key];
    html.push(kx.map(k => `<kbd>${k}</kbd>`).join('+'));
  }
  return html.join(' ');
}

function showExample(index) {
  const example = examples[index];

  document.getElementById('examples-body').innerHTML = '';
  document.getElementById('examples-tabs').innerHTML = '';

  // Add correct example

  const row = document.createElement('div');
  row.className = 'row correct';
  row.id='example-0';

  const colKeys = document.createElement('div');
  colKeys.className = 'col-md';
  colKeys.innerHTML = keysToHtml(example.keys);
  row.appendChild(colKeys);

  const colDescription = document.createElement('div');
  colDescription.className = 'col-md';
  colDescription.innerText = example.description;
  row.appendChild(colDescription);

  const colText = document.createElement('div');
  colText.className = 'col-md example-text';
  colText.innerText = example.text;
  row.appendChild(colText);

  document.getElementById('examples-body').appendChild(row);

  // Add tab

  const li = document.createElement('li');
  li.className = 'nav-item';
  const a = document.createElement('a');
  a.className = 'nav-link';
  a.id='example-tab-0';
  a.href='#';
  a.addEventListener('click', event => { showExampleRow(0); event.preventDefault(); return false; } );
  li.appendChild(a);
  a.innerText = example.text;
  //const span = document.createElement('span');
  //span.className = 'bi-check';
  //a.appendChild(span);

  document.getElementById('examples-tabs').appendChild(li);


  let n = 1;
  for(let alt of example.alternates) {
    const row = document.createElement('div');
    row.className = 'row';
    row.id='example-'+n.toString();

    const colKeys = document.createElement('div');
    colKeys.className = 'col-md';
    colKeys.innerHTML = keysToHtml(alt.keys);
    row.appendChild(colKeys);

    const colDescription = document.createElement('div');
    colDescription.className = 'col-md';
    colDescription.innerText = alt.description;
    row.appendChild(colDescription);

    const colText = document.createElement('div');
    colText.className = 'col-md example-text';
    // colText.innerText = example.text;
    row.appendChild(colText);

    document.getElementById('examples-body').appendChild(row);

    // Add tab

    const li = document.createElement('li');
    li.className = 'nav-item';
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.id = `example-tab-${n}`;
    a.href='#';
    ((n) => a.addEventListener('click', event => { showExampleRow(n); event.preventDefault(); return false; } ))(n);
    li.appendChild(a);
    const span = document.createElement('span');
    span.className = `bi-${n}-square-fill`;
    a.appendChild(span);

    document.getElementById('examples-tabs').appendChild(li);

    n++;
  }

  showExampleRow(0);
  //            <div class='row'>
  // <div class='col'><kbd>x</kbd><kbd>E</kbd><kbd>j</kbd><kbd>m</kbd><kbd>r</kbd>: ខ្មែរ</div>
  // </div>
};

function showExampleRow(index) {
  const items = document.querySelectorAll('#examples-body .row');
  for(let item of items) {
    item.classList.remove('active');
  }
  document.querySelector(`#examples-body #example-${index}`).classList.add('active');

  const tabs = document.querySelectorAll('#examples-tabs a');
  for(let item of tabs) {
    item.classList.remove('active');
  }
  document.querySelector(`#examples-tabs #example-tab-${index}`).classList.add('active');
  focusTextArea();
}