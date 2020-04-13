const Butikker = [
  {name: 'Odense'},
  {name: 'Slagelse'},
  {name: 'Vejle'},
  {name: 'Ringsted'},
  {name: 'Næstved'},
  {name: 'København'},
  {name: 'Randers'},
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

}

function setNoResults(){

}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const value = event.target.value;
});
