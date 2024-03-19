const buttons = document.querySelectorAll('#btn');

buttons.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const ans = e.target.parentNode.parentNode.nextSibling.nextSibling;
    ans.classList.toggle('show');
  })
);
