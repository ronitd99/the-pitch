/* ========================================
   THE PITCH — Main JavaScript
   ======================================== */

/*
  ARTICLES — Add your own articles here. Example:

  1: {
    title: "Your Article Title",
    category: "tactics",          // tactics | transfers | analysis | players | culture
    badge: "Tactics",             // Tactics | Transfers | Match Analysis | Player Analysis | Culture
    author: "Ronit Dey",
    date: "April 13, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-XXXX?w=1200&q=80",
    imageAlt: "Description of image",
    tags: ["Tag1", "Tag2"],
    content: `
      <p>Your first paragraph.</p>
      <h2>Section Heading</h2>
      <p>More content here.</p>
    `
  }
*/
const articles = {
  2: {
    title: "Total Football Is Back: How PSG Became the Most Dangerous Team in the World",
    category: "tactics",
    badge: "Tactics",
    author: "Ronit Dey",
    date: "April 13, 2026",
    readTime: "12 min read",
    image: "img/psg-total-football.png",
    imageAlt: "PSG lifting the Champions League trophy",
    tags: ["Tactics", "PSG", "Ligue 1", "Champions League", "Luis Enrique", "Dembélé"],
    content: `
      <p>For years, PSG were built on individuals. The idea was simple. Get the biggest names, give them freedom, and hope talent carries you in the biggest moments. It worked in Ligue 1, but in Europe it always felt incomplete. Too predictable. Too easy to break when the margins got tight.</p>

      <p>That version of PSG does not exist anymore.</p>

      <p>Under Luis Enrique, this team has been completely rebuilt, not just tactically but philosophically. And what makes it so fascinating is that it feels like a return to something older. Something purer.</p>

      <p><strong>Total Football is back. Just modernized.</strong></p>

      <h2>The Lineup</h2>

      <p>Look at the team on paper.</p>

      <p>Chevalier in goal. Marquinhos and Pacho as the center backs. Hakimi and Nuno Mendes as fullbacks. A midfield built around Vitinha, João Neves, and either Zaïre Emery or Fabián Ruiz. Then a front line of Kvaratskhelia or Barcola, Dembélé, and Désiré Doué.</p>

      <p>It looks like a normal setup. Until the game starts and those positions almost stop existing.</p>

      <div class="tactical-container">
        <canvas id="tactical-canvas"></canvas>
      </div>

      <p>Luis Enrique once said he wants players who can play all ten outfield positions. At the time, it sounded idealistic. Now it looks like he has actually built it.</p>

      <h2>The Fullbacks as Everywhere Men</h2>

      <p>Take Hakimi. On paper, a right back. In reality, he is everywhere. He starts wide, then suddenly appears in the half space like a midfielder. Sometimes he is the one making the final run into the box. Other times, he is helping circulate possession centrally. You cannot assign him a role because it changes every phase.</p>

      <p>Nuno Mendes on the opposite side gives a different version of the same chaos. More direct, more explosive, constantly pushing high and forcing the defensive line to stretch. When he goes, someone else fills his space. That is the key. Movement is never isolated. It is always covered.</p>

      <h2>The Midfield Engine</h2>

      <p>Then you have the midfield.</p>

      <p>Vitinha is the brain. Everything flows through him. He dictates tempo, always offering an angle, always one step ahead in possession. João Neves adds intensity and intelligence off the ball, constantly pressing and recovering, but also technically secure enough to keep the system flowing. Zaïre Emery or Fabián Ruiz give different profiles, one more dynamic and aggressive, the other more controlled and positional, but both capable of drifting into different zones depending on what the moment demands.</p>

      <p>None of them are fixed. At times, one drops into the back line to help build. At other times, they are the ones arriving late in the box.</p>

      <p>It is constant rotation.</p>

      <h2>Dembélé: The False 9 Who Changed Everything</h2>

      <p>But the most important piece, the one that defines everything, is Dembélé.</p>

      <p>Playing as a false 9.</p>

      <p>This is where Luis Enrique has changed everything.</p>

      <p>Dembélé does not stay high. He does not play like a traditional striker. Instead, he drops into midfield, pulls center backs out of position, and creates space for everyone else to attack. One second he is receiving between the lines, the next he is spinning in behind, the next he is out wide combining.</p>

      <p>It makes PSG impossible to track.</p>

      <p>Because if a center back follows him, space opens behind. If they hold their position, Dembélé has time to turn and run at them. And with his unpredictability, that is the last thing you want.</p>

      <p>This role has unlocked him completely.</p>

      <p>For years, Dembélé was seen as a chaotic winger. Now he looks like the most complete attacking player in the world. He is creating, finishing, linking play, and dictating attacks all at once.</p>

      <p><strong>This is Ballon d'Or level football.</strong></p>

      <p>The numbers are there, but it is the influence that stands out. He is the center of everything PSG do in the final third.</p>

      <h2>The Wide Players</h2>

      <p>Then you look at the wide players.</p>

      <p>Kvaratskhelia or Barcola on the left, Doué on the right.</p>

      <p>Again, not traditional wingers.</p>

      <p>Kvara drifts inside constantly, almost becoming a second playmaker. Barcola offers more direct pace and verticality, stretching the game when needed. Doué is somewhere in between, technical, creative, comfortable receiving in tight spaces and combining quickly.</p>

      <p>But what matters is that none of them stay in their lane.</p>

      <p>They rotate with Dembélé. They swap sides. They drop deep. They attack centrally. At times, you will see four players occupy the same zone, then within seconds, they have spread across the entire attacking line again.</p>

      <p>Defenses cannot settle.</p>

      <h2>The Cruyff Connection</h2>

      <p>This is where the comparison to Cruyff's Total Football becomes real.</p>

      <p>Forget the formation. It comes down to principles.</p>

      <p>Space is everything. Movement creates space. Intelligence decides how to use it.</p>

      <p>PSG do not attack with fixed patterns. They attack with understanding. Every player reads the same cues. When one moves, another fills. When one drops, another runs. It is like a chain reaction across the pitch.</p>

      <p>And without the ball, it becomes even more suffocating.</p>

      <p>The moment PSG lose possession, they press immediately. Because of their compact structure and constant rotations, players are already close enough to swarm the ball. It feels like waves. You escape one press, another comes instantly.</p>

      <p>Call it fluid attacking football if you want. I think controlled chaos is closer to what it actually is.</p>

      <h2>Why It Works in Europe</h2>

      <p>This system is why they were able to win the Champions League, and why they are pushing again.</p>

      <p>In knockout football, rigid systems can be figured out. Star dependent teams can be shut down. But a system built on constant movement and shared responsibility is much harder to break.</p>

      <p>You cannot man mark it. You cannot predict it. You cannot control it for 90 minutes.</p>

      <p>And when you add players who are all technically secure, all comfortable in multiple roles, it becomes overwhelming.</p>

      <p>There is still risk in playing this way. When rotations fail, spaces open. When timing is off, the structure can look stretched.</p>

      <p>But when it clicks, it is almost impossible to stop.</p>

      <h2>A New Era</h2>

      <p>And that is what makes this PSG team different.</p>

      <p>They are not just winning. They are evolving how the game is played.</p>

      <p>Luis Enrique has taken an old idea, Total Football, and brought it into the modern era with intensity, athleticism, and technical precision.</p>

      <p>A team where positions do not exist. Where everyone can do everything. Where movement is the system.</p>

      <p>And at the center of it all, a false 9 in Dembélé, redefining what a forward can be and putting himself firmly in Ballon d'Or conversations.</p>

      <p>The PSG we were used to is gone.</p>

      <p><strong>This is something much more dangerous.</strong></p>
    `
  },
  1: {
    title: "Lamine Yamal: The Greatest Teenage Footballer the Sport Has Ever Seen",
    category: "players",
    badge: "Player Analysis",
    author: "Ronit Dey",
    date: "April 12, 2026",
    readTime: "7 min read",
    image: "img/yamal.png",
    imageAlt: "Lamine Yamal celebrating at Camp Nou",
    tags: ["Player Analysis", "Barcelona", "La Liga", "Lamine Yamal"],
    content: `
      <p>18 years old. Just 18. It feels like we have been saying that forever, almost using it as a way to process what we are watching. But at some point this season, that excuse stopped making sense. What Lamine Yamal is doing has gone way beyond impressive for his age. This is pure footballing genius, full stop.</p>

      <p>Barcelona spent nearly two decades watching Lionel Messi redefine the sport. When he left, it felt like the end of something permanent. The club was in chaos, financially broken, falling behind Madrid, even dropping into the Europa League. It looked like a slow decline with no clear way out.</p>

      <p>And then Yamal arrived.</p>

      <p>Since then, something has shifted. Every single week, he gives you a moment that makes you pause. You think you have seen his ceiling, and then he goes and does something that completely resets it. Every single week I watch him and think there is no way he can top this, right? And every single week, he proves me wrong.</p>

      <h2>The Atletico Double Header</h2>

      <p>Last weekend against Atletico Madrid, he almost pulled off what could have been one of the most absurd assists in football history. He nutmegs his man so casually, then plays a trivela pass that honestly does not make sense. The angle, the weight, the vision. It is the kind of pass you do not even see in your imagination, and he is doing it in a high pressure match like it is nothing.</p>

      <p>Then midweek, again against Atletico, Barcelona lose 2 to 0. But somehow, that game still felt like a Yamal showcase. He had one of the best individual performances of the entire year. The defenders could not deal with him. At one point, they had what felt like six players collapsing onto him, and he just glides through all of them. No panic, no rush, just complete control.</p>

      <p>It genuinely looked like he was playing a different sport. Like he was possessed, willing to do anything to drag his team back into the game. There are not many players in football history who could do what he did in that match. He was unstoppable.</p>

      <h2>The Espanyol Derby</h2>

      <p>And then this weekend, the derby against Espanyol. More magic, and somehow it looked effortless too. Two assists for Ferran Torres, both coming from completely different situations, both perfect. One from a set piece where he bends the ball into that impossible area that creates chaos. The other in transition, where he waits that extra second and then releases the pass at the exact right moment.</p>

      <p>And again, the trivela shows up. At this point the trivela is just a weapon. He uses it to eliminate angles that should not even be possible, turning tight situations into open space with one touch.</p>

      <p>Then the runs. Those mazy runs where he just keeps going, gliding past defenders like they are not even set. For a moment, it really felt like we were about to see his Messi vs Getafe moment. He beats one, then another, then another, and you can feel the stadium rising because everyone knows what is coming. It was so close, but the shot gets blocked.</p>

      <h2>The Goal</h2>

      <p>And then the goal. Barcelona break forward, the ball gets messy, the keeper comes out and completely misjudges it. The clearance ricochets straight into space, and before anyone else even reacts, Yamal has already read it. He is there, ready, calm.</p>

      <p>And this is the part that says everything. He starts celebrating before he even scores. That is the level of confidence we are talking about. Then he casually puts it into the empty net. And just to add insult to injury, he finishes it with a trivela. Of course he does.</p>

      <h2>Beyond Comparisons</h2>

      <p>The confidence, the swagger, the pure genius. I genuinely have not seen anything like this since Neymar at his peak. He is the best player in the world right now. And in my opinion, it is not even close.</p>

      <p>But even beyond that, we need to change the way we talk about him. I always see comparisons. Estevao, Saka, Olise. He is the benchmark for all of them. But even that feels outdated now. He has outgrown those comparisons. There is no one in his age group or outside his age group anywhere near him.</p>

      <p>In my 25 years of watching football, only a few players have made me feel the way he does. Messi, Neymar, Ronaldinho. I might be missing a couple, but that is the level we are talking about. Put him with the greats. That is where he belongs. We need to accept it.</p>

      <h2>An All Time Talent</h2>

      <p>We are watching an all time talent. This is the greatest teenage footballer the sport has ever seen. And if he keeps going like this, the conversation stops being about greatness and starts being about one of the best to ever play the game.</p>

      <p>Standing alone at the top with the great Lionel Messi is not unrealistic if this trajectory continues. He could win the Ballon d'Or this year and become the youngest ever. And somehow, that still feels like just the beginning.</p>

      <p>Because when you watch him, it does not feel like there is a ceiling. It feels like he is just getting started.</p>

      <p>My dad had the privilege of watching Maradona. I had the privilege of watching Messi's entire career. I never thought I would see something even close to that again. But this sport has a funny way of repeating itself.</p>

      <p>The player who was bathed by the greatest of all time is here now. And he is not just continuing that legacy. He is building his own. And the world is not ready for what is coming.</p>
    `
  }
};

const categoryInfo = {
  tactics: {
    name: "Tactics",
    description: "Deep dives into formations, playing styles, and the strategic chess matches that define modern football."
  },
  transfers: {
    name: "Transfers",
    description: "The latest transfer news, scouting reports, and market analysis from across European football."
  },
  analysis: {
    name: "Match Analysis",
    description: "Detailed breakdowns of the biggest matches. What happened, why it happened, and what it means."
  },
  players: {
    name: "Player Analysis",
    description: "In-depth breakdowns of individual players. Their strengths, weaknesses, playing style, and impact on the game."
  },
  culture: {
    name: "Culture",
    description: "The stories, traditions, and communities that make football more than just a game."
  }
};

/* ----------------------------------------
   Mobile Menu Toggle
   ---------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtn.classList.toggle("active");
    });
  }
});

/* ----------------------------------------
   Newsletter Submit
   ---------------------------------------- */

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector("input");
  if (input.value) {
    showToast("You're in! Welcome to the squad.");
    input.value = "";
  }
}

/* ----------------------------------------
   Toast Notification
   ---------------------------------------- */

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ----------------------------------------
   Article Page Loader
   ---------------------------------------- */

function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const article = articles[id];
  const container = document.getElementById("article-container");

  if (!article || !container) return;

  document.title = `${article.title} — The Pitch`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = article.title;

  const badgeClass = `badge-${article.category}`;

  container.innerHTML = `
    <div class="article-header">
      <span class="badge ${badgeClass}">${article.badge}</span>
      <h1>${article.title}</h1>
      <div class="article-meta">
        <span class="author">By ${article.author}</span>
        <span>${article.date}</span>
        <span>${article.readTime}</span>
      </div>
    </div>
    <div class="article-cover">
      <img src="${article.image}" alt="${article.imageAlt}">
    </div>
    <div class="article-body">
      ${article.content}



      <div class="article-tags">
        ${article.tags.map(tag => `<a href="#" class="article-tag">${tag}</a>`).join("")}
      </div>
      <div class="article-share">
        <span>Share:</span>
        <button class="share-btn" onclick="shareArticle('twitter')">Twitter</button>
        <button class="share-btn" onclick="shareArticle('copy')">Copy Link</button>
      </div>
    </div>
  `;

  if (document.getElementById("tactical-canvas")) {
    var s = document.createElement("script");
    s.src = "js/psg-tactical.js";
    document.body.appendChild(s);
  }
}

/* ----------------------------------------
   Category Page Loader
   ---------------------------------------- */

function loadCategory() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const info = categoryInfo[cat];
  const titleEl = document.getElementById("category-title");
  const descEl = document.getElementById("category-desc");
  const gridEl = document.getElementById("category-grid");

  if (!info || !gridEl) return;

  document.title = `${info.name} — The Pitch`;
  if (titleEl) titleEl.textContent = info.name;
  if (descEl) descEl.textContent = info.description;

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    if (link.href.includes(`cat=${cat}`)) {
      link.classList.add("active");
    }
  });

  const filtered = Object.entries(articles).filter(([, a]) => a.category === cat);

  gridEl.innerHTML = filtered.map(([id, a]) => `
    <article class="post-card" onclick="location.href='article.html?id=${id}'">
      <div class="post-image">
        <img src="${a.image.replace('w=1200', 'w=600')}" alt="${a.imageAlt}" loading="lazy">
      </div>
      <div class="post-content">
        <span class="badge badge-${a.category}">${a.badge}</span>
        <h3>${a.title}</h3>
        <p>${stripHTML(a.content).substring(0, 150)}...</p>
        <div class="post-meta">
          <span class="date">${a.date}</span>
          <span class="read-time">${a.readTime}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function stripHTML(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

/* ----------------------------------------
   Share Functionality
   ---------------------------------------- */

function shareArticle(platform) {
  const url = window.location.href;
  const title = document.title;

  if (platform === "twitter") {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank");
  } else if (platform === "copy") {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Link copied to clipboard!");
    });
  }
}
