const Butikker = [
  {name: 'Odense'},
  {name: 'Slagelse'},
  {name: 'Vejle'},
  {name: 'Ringsted'},
  {name: 'Næstved'},
  {name: 'København'},
];

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  console.log('input event fired');
});
