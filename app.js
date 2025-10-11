const bookmarkList = document.getElementById('bookmarkList');
const searchInput = document.getElementById('searchInput');
const saveBookmark = document.getElementById('saveBookmark');
const clearForm = document.getElementById('clearForm');

let editIndex = null;
function getBookmarks() {
  return JSON.parse(localStorage.getItem('bookmarks') || '[]');
}

function saveBookmarks(bookmarks) {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function renderBookmarks(filter = '') {
  const bookmarks = getBookmarks();
  bookmarkList.innerHTML = '';
  bookmarks
    .filter(b => b.title.toLowerCase().includes(filter.toLowerCase()) || b.tags.join(',').toLowerCase().includes(filter.toLowerCase()))
    .forEach((bookmark, index) => {
      const div = document.createElement('div');
      div.className = 'bookmark-card';
      div.innerHTML = `
        <div>
          <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
          <small>${bookmark.tags.join(', ')}</small>
          <p>${bookmark.description || ''}</p>
        </div>
        <div class="controls">
          <button onclick="editBookmark(${index})">&#9998;&#65039;</button>
          <button onclick="deleteBookmark(${index})">&#128465;&#65039;</button>
        </div>
      `;
      bookmarkList.appendChild(div);
    });
}

saveBookmark.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const tags = document.getElementById('tags').value.split(',').map(t => t.trim()).filter(Boolean);
  const description = document.getElementById('description').value;
  if (!title || !url) {
    alert('Please fill in title and URL');
    return;
  }
  const bookmarks = getBookmarks();
  if (editIndex !== null) {
    bookmarks[editIndex] = { title, url, tags, description };
  } else {
    bookmarks.push({ title, url, tags, description });
  }
  saveBookmarks(bookmarks);
  renderBookmarks();
  clearInputs();
  editIndex = null;
});

function deleteBookmark(index) {
  if (!confirm('Delete this bookmark?')) return;
  const bookmarks = getBookmarks();
  bookmarks.splice(index, 1);
  saveBookmarks(bookmarks);
  renderBookmarks();
}

function editBookmark(index) {
  const bookmarks = getBookmarks();
  const bm = bookmarks[index];
  document.getElementById('title').value = bm.title;
  document.getElementById('url').value = bm.url;
  document.getElementById('tags').value = bm.tags.join(', ');
  document.getElementById('description').value = bm.description;
  editIndex = index;
}

function clearInputs() {
  document.getElementById('title').value = '';
  document.getElementById('url').value = '';
  document.getElementById('tags').value = '';
  document.getElementById('description').value = '';
}

clearForm.addEventListener('click', () => {
  clearInputs();
  editIndex = null;
});

searchInput.addEventListener('input', (e) => {
  renderBookmarks(e.target.value);
});

renderBookmarks();