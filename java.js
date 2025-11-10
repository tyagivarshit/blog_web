
function showSection(sectionId) {
  document.getElementById('home-section').classList.add('hidden');
  document.getElementById('about-section').classList.add('hidden');
  document.getElementById('contact-section').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}

// Fetch and render blog posts
async function fetchPosts(url = '/api/posts') {
  try {
    const res = await fetch(url);
    const posts = await res.json();
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    if (posts.length === 0) {
      postsDiv.innerHTML = `<div class="col-span-3 text-center text-gray-400">No posts found.</div>`;
      return;
    }
    posts.forEach(post => {
  const postCard = document.createElement('div');
  postCard.className = "rounded-xl p-6 bg-gray-900/70 shadow-lg";
  postCard.innerHTML = `
    <h2 class="font-bold text-lg text-blue-400 mb-2">${post.title}</h2>
    <p class="text-gray-200">${post.content}</p>
    ${post.link ? `<a href="${post.link}" class="text-blue-300 underline" target="_blank">Go to link</a>` : ''}
  `;
  postsDiv.appendChild(postCard);
});
  } catch (err) {
    console.error('Failed to fetch posts', err);
  }
}

// Search posts on input
document.getElementById('searchInput').addEventListener('input', function(e) {
  const query = e.target.value.trim();
  if (query) {
    fetchPosts(`/api/posts/search?q=${encodeURIComponent(query)}`);
  } else {
    fetchPosts();
  }
});

// Initial fetch on page load
window.onload = function() {
  fetchPosts();
  showSection('home-section');
};


