function changeText() {
    const textEl = document.getElementById('dynamic-text');
    textEl.textContent = "You've changed me! ✨";
  }
  
  function changeStyle() {
    const title = document.getElementById('main-title');
    title.classList.toggle('highlight');
  }
  
  function addItem() {
    const list = document.getElementById('element-list');
    const li = document.createElement('li');
    li.textContent = "New Item 🧩";
    list.appendChild(li);
  }
  
  function removeItem() {
    const list = document.getElementById('element-list');
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  }
  