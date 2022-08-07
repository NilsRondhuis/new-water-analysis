import refs from '../refs/refs';

function curretYear(target) {
  const date = new Date();
  target.textContent = String(date.getFullYear());
}

curretYear(refs.copyYear);
