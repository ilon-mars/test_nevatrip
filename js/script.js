const timeLists = document.querySelectorAll('.time-list');

for (let list of timeLists) {
  const timeRecords = list.querySelectorAll('.time-list-record');

  if (timeRecords.length > 4) {
    const showMoreBtn = document.createElement('button');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'еще';
    timeRecords[3].insertAdjacentElement('beforebegin', showMoreBtn);

    showMoreBtn.addEventListener('click', event => {
      timeRecords.forEach((item, i) => {
        item.style.display = 'block';
      });

      timeRecords[timeRecords.length - 1].insertAdjacentElement(
        'afterend',
        event.target
      );
    });
  }
}
