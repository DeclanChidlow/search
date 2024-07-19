const searchForm = document.getElementById("search-form"),
	searchInput = document.getElementById("search-input"),
	engineSelect = document.getElementById("engine-select"),
	allBangsList = document.getElementById("all-bangs-list");

const bangPatterns = {
	"!g": { url: "https://www.google.com/search?q=", description: "Google Search" },
	"!gf": { url: "https://fonts.google.com/?query=", description: "Google Fonts" },
	"!gi": { url: "https://fonts.google.com/icons?icon.query=", description: "Google Icons" },
	"!gm": { url: "https://www.google.com.au/maps/search/", description: "Google Maps" },
	"!yt": { url: "https://www.youtube.com/search?q=", description: "YouTube" },
	"!ytm": { url: "https://music.youtube.com/search?q=", description: "YouTube Music" },
	"!b": { url: "https://www.bing.com/search?q=", description: "Bing Search" },
	"!ddg": { url: "https://duckduckgo.com/?q=", description: "DuckDuckGo" },
	"!sp": { url: "https://www.startpage.com/do/search?query=", description: "StartPage" },
	"!br": { url: "https://search.brave.com/search?q=", description: "Brave Search" },
	"!eco": { url: "https://www.ecosia.org/search?q=", description: "Ecosia" },
	"!bc": { url: "https://bandcamp.com/search?q=", description: "Bandcamp" },
	"!hn": { url: "https://hn.algolia.com/?q=", description: "Hacker News" },
	"!w": { url: "https://wikipedia.org/w/index.php?search=", description: "Wikipedia" },
	"!ud": { url: "https://www.urbandictionary.com/define.php?term=", description: "Urban Dictionary" },
	"!ia": { url: "https://archive.org/search?query=", description: "Internet Archive" },
	"!wm": { url: "https://web.archive.org/web/*/", description: "Wayback Machine" },
	"!r": { url: "https://www.reddit.com/search/?q=", description: "Reddit" },
	"!rs": { url: "https://www.reddit.com/search/?type=sr&q=", description: "Reddit Subreddits" },
	"!ciu": { url: "https://caniuse.com/?search=", description: "Can I Use" },
	"!mdn": { url: "https://developer.mozilla.org/en-US/search?q=", description: "MDN Web Docs" },
	"!html": { url: "https://developer.mozilla.org/en-US/search?topic=html&q=", description: "MDN HTML" },
	"!css": { url: "https://developer.mozilla.org/en-US/search?topic=css&q=", description: "MDN CSS" },
	"!js": { url: "https://developer.mozilla.org/en-US/search?topic=js&q=", description: "MDN JavaScript" },
	"!npm": { url: "https://www.npmjs.com/search?q=", description: "npm packages" },
	"!bs": { url: "https://bsky.app/search?q=", description: "Bluesky" },
	"!gh": { url: "https://github.com/search?q=", description: "GitHub" },
	"!lw": { url: "https://www.lesswrong.com/search?query=", description: "LessWrong" },
	"!un": { url: "https://unsplash.com/s/photos/", description: "Unsplash" },
	"!aur": { url: "https://aur.archlinux.org/packages?K=", description: "Arch User Repository" },
	"!aw": { url: "https://wiki.archlinux.org/index.php?search=", description: "Arch Wiki" },
	"!nixpkg": { url: "https://search.nixos.org/packages?query=", description: "Nix Packages" },
	"!p": { url: "https://www.printables.com/search/models?q=", description: "Printables" },
	"!pm": { url: "https://mail.proton.me/u/0/almost-all-mail#keyword=", description: "Proton Mail" },
	"!pd": { url: "https://drive.proton.me/u/0/search#q=", description: "Proton Drive" },
};

for (const [bang, { description }] of Object.entries(bangPatterns)) {
	const li = document.createElement("li");
	li.textContent = `${bang}: ${description}`;
	allBangsList.appendChild(li);
}

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function saveSelectedEngine() {
	localStorage.setItem("selectedEngine", engineSelect.value);
}

engineSelect.addEventListener("change", saveSelectedEngine);

function loadSelectedEngine() {
	const savedEngine = localStorage.getItem("selectedEngine");
	if (savedEngine) {
		engineSelect.value = savedEngine;
	}
}

function performSearch(query) {
	let searchUrl = engineSelect.value;

	for (const [bang, { url }] of Object.entries(bangPatterns)) {
		if (query.startsWith(bang + " ")) {
			searchUrl = url;
			query = query.slice(bang.length + 1);
			break;
		}
	}

	window.location.href = searchUrl + encodeURIComponent(query);
}

window.addEventListener("load", () => {
	const searchQuery = getUrlParameter("search");
	loadSelectedEngine();

	if (searchQuery) {
		searchInput.value = searchQuery;
		performSearch(searchQuery);
	}
});

searchForm.addEventListener("submit", function (e) {
	e.preventDefault();
	let query = searchInput.value.trim();
	performSearch(query);
});

document.addEventListener("keydown", (e) => {
	if (e.key === "/" && document.activeElement !== searchInput) {
		e.preventDefault();
		searchInput.focus();
	} else if (e.key === "Escape" && document.activeElement === searchInput) {
		searchInput.value = "";
	}
});
