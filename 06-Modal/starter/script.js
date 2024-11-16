'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// When multiple class at once they are represented as Array
console.log(btnsOpenModal);

for (let i = 0; i < 3; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', modalOpener);
}

function modalOpener() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const modalCloser = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

btnCloseModal.addEventListener('click', modalCloser);
// Paratheses are remove to prevent js to directly call that fonction without Listening the Event

overlay.addEventListener('click', modalCloser);
// in strict mode strick equality operator are crucial
document.addEventListener('keydown', function (press) {
  if (press.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalCloser();
  }
  console.log(modal.classList.contains('hidden'));
  console.log(`You clicked on key ${press.key}`);
  // console.log(`You clicked button ${[key]}`);
}); // listen every key press

// KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
