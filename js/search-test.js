const Butikker = [
  {name: 'odense'},
  {name: 'slagelse'},
  {name: 'vejle'},
  {name: 'ringsted'},
  {name: 'næstved'},
  {name: 'kbenhavn'},
  {name: 'randers'},
];

const list = document.getElementById('list');

function setlist(group) {
  clearlist();
  for (const Butikker of group){
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode(Butikker.name);
    item.appendChild(text);
    list.appendChild(item);
  }
  if (group.length === 0){
    setNoResults();
  }
}

function clearlist() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function setNoResults(){
  const item = document.createElement('li');
  item.classList.add('list-group-item');
  const text = document.createTextNode('Intet resultat fundet');
  item.appendChild(text);
  list.appendChild(item);
}

function getRelevancy(value, seachTerm){
    if (value === seachTerm) {
      return 2;
    } else if (value.startWith(term)) {
      return 1;

    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const value = event.target.value;
  if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase();
      setList(Butikker.filter(butik => {
        return butik.name.includes(value);
      }));
  } else {
    clearlist();
  }
});
