// Sample mock news data with image + link
const newsData = [
  { 
    title: "Celebration of 80th Anniversary of Korea’s Liberation Held", 
    category: "world", 
    content: "Created: 19 August 2025", 
    image: "https://image.freshnewsasia.com/2021/id-154/fn-2025-08-19-11-28-27-2.jpg",
    link: "news1.html"
  },
  { 
    title: "Cambodia Launches National AI Strategy Initiative", 
    category: "technology", 
    content: "Created: 18 August 2025", 
    image: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2025/08/19/88523106-e0c0-4e09-a93e-b59c584e09f3_582edab9.jpg?itok=aw3uFNdY&v=1755591877",
    link: "news4.html"
  },
   { 
    title: "Fantasy football rankings 2025: Top sleepers by model that nailed James Cook's dominant season", 
    category: "sports", 
    content: "Aug 17, 2025", 
    image: "https://sportshub.cbsistatic.com/i/r/2024/11/13/dcb15ad9-9b1a-4bb0-9052-253bcde66c9f/thumbnail/770x433/f4758f8f36052575cfd9f24a96a99241/brock-purdy-san-francisco-49ers-usatsi-4.jpg",
    link: "news7.html"
  },
  
  { 
    title: "Trump-Putin summit: Fox News says Trump got ‘steamrolled’ by Putin and left", 
    category: "world", 
    content: "Created: 18 August 2025", 
    image: "https://static.kyivpost.com/storage/2025/08/17/4412cedc33f6ef5356a39f1b7ce535fa.jpg?w=2560&f=webp",
    link: "news3.html"
  },
  { 
    title: "Windows Endpoint Protection Manager Vulnerability Leads to Domain Admin Privileges", 
    category: "technology", 
    content: "Aug 10, 2025", 
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=130&fit=crop",
    link: "news5.html"
  },
  { 
    title: "Cambodian Boxers Medal Winners at the Asian Kickboxing Championships 2022", 
    category: "sports", 
    content: "Aug 13, 2025", 
    image: "https://eacnews.asia/uploads/images/1671421402_6005ceafbbae1dbbcf8b.jpg",
    link: "news6.html"
  },
    { 
    title: "Samdech Techo Hun Sen: Cambodia Will Retaliate If Thai Leaders Seek Arrest of Cambodian Leaders", 
    category: "world", 
    content: "Created: 18 August 2025", 
    image: "https://image.freshnewsasia.com/2021/2025/08/fn-2025-08-18-16-03-09-268.jpg",
    link: "news2.html"
  },
];

let visibleCount = 3; // initial articles
const container = document.getElementById("news-container");

// Render articles with clickable image
function renderArticles(category = "all", customList = null) {
  container.innerHTML = "";
  const filtered = customList || (category === "all" ? newsData : newsData.filter(n => n.category === category));
  filtered.slice(0, visibleCount).forEach(article => {
    const div = document.createElement("div");
    div.className = "article";
    div.innerHTML = `
      <a href="${article.link}" target="_blank">
        <img src="${article.image}" alt="${article.title}">
      </a>
      <h3>${article.title}</h3>
      <p>${article.content}</p>
    `;
    container.appendChild(div);
  });
}



// Initial load
renderArticles();

// Category filter
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    visibleCount = 3; // reset
    renderArticles(link.dataset.category);
  });
});

// Load more
document.getElementById("load-more").addEventListener("click", () => {
  visibleCount += 2;
  renderArticles();
});

// Dark/Light mode toggle
document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.getElementById("Sign_up").addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Sign Up Successfully");
});

// Back to top button
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = newsData.filter(a => a.title.toLowerCase().includes(searchTerm));
  renderArticles("all", filtered);
});

