const scriptEnabled = document.getElementById("script-enabled"),
	searchForm = document.getElementById("search-form"),
	searchInput = document.getElementById("search-input"),
	engineSelect = document.getElementById("engine-select"),
	bangsList = document.getElementById("bangs-list");

scriptEnabled.style.display = "flex";

const bangPatterns = {
	"!g": { url: "https://www.google.com/search?q=", desc: "Google Search" },
	"!gf": { url: "https://fonts.google.com/?query=", desc: "Google Fonts" },
	"!gi": { url: "https://fonts.google.com/icons?icon.query=", desc: "Google Icons" },
	"!gm": { url: "https://www.google.com.au/maps/search/", desc: "Google Maps" },
	"!yt": { url: "https://www.youtube.com/search?q=", desc: "YouTube" },
	"!ytm": { url: "https://music.youtube.com/search?q=", desc: "YouTube Music" },
	"!b": { url: "https://www.bing.com/search?q=", desc: "Bing Search" },
	"!ddg": { url: "https://start.duckduckgo.com/?q=", desc: "DuckDuckGo" },
	"!you": { url: "https://you.com/search?q=", desc: "You" },
	"!yep": { url: "https://yep.com/web?q=", desc: "Yep" },
	"!p": { url: "https://www.perplexity.ai/search?q=", desc: "Perplexity" },
	"!sc": { url: "https://swisscows.com/web?query=", desc: "Swisscows" },
	"!k": { url: "https://kagi.com/search?q=", desc: "Kagi" },
	"!ask": { url: "https://www.ask.com/web?q=", desc: "Ask" },
	"!q": { url: "https://www.qwant.com/?q=", desc: "Qwant" },
	"!exa": { url: "https://exa.ai/search?q=", desc: "Exa" },
	"!sp": { url: "https://www.startpage.com/do/search?query=", desc: "StartPage" },
	"!br": { url: "https://search.brave.com/search?q=", desc: "Brave Search" },
	"!eco": { url: "https://www.ecosia.org/search?q=", desc: "Ecosia" },
	"!bc": { url: "https://bandcamp.com/search?q=", desc: "Bandcamp" },
	"!hn": { url: "https://hn.algolia.com/?q=", desc: "Hacker News" },
	"!w": { url: "https://wikipedia.org/w/index.php?search=", desc: "Wikipedia" },
	"!ud": { url: "https://www.urbandictionary.com/define.php?term=", desc: "Urban Dictionary" },
	"!ia": { url: "https://archive.org/search?query=", desc: "Internet Archive" },
	"!wm": { url: "https://web.archive.org/web/*/", desc: "Wayback Machine" },
	"!r": { url: "https://www.reddit.com/search/?q=", desc: "Reddit" },
	"!rs": { url: "https://www.reddit.com/search/?type=sr&q=", desc: "Reddit Subreddits" },
	"!ciu": { url: "https://caniuse.com/?search=", desc: "Can I Use" },
	"!mdn": { url: "https://developer.mozilla.org/en-US/search?q=", desc: "MDN Web Docs" },
	"!html": { url: "https://developer.mozilla.org/en-US/search?topic=html&q=", desc: "MDN HTML" },
	"!css": { url: "https://developer.mozilla.org/en-US/search?topic=css&q=", desc: "MDN CSS" },
	"!js": { url: "https://developer.mozilla.org/en-US/search?topic=js&q=", desc: "MDN JavaScript" },
	"!npm": { url: "https://www.npmjs.com/search?q=", desc: "NPM packages" },
	"!bs": { url: "https://bsky.app/search?q=", desc: "Bluesky" },
	"!gh": { url: "https://github.com/search?q=", desc: "GitHub" },
	"!lw": { url: "https://www.lesswrong.com/search?query=", desc: "LessWrong" },
	"!un": { url: "https://unsplash.com/s/photos/", desc: "Unsplash" },
	"!ov": { url: "https://openverse.org/search/?q=", desc: "Openverse" },
	"!aur": { url: "https://aur.archlinux.org/packages?K=", desc: "Arch User Repository" },
	"!aw": { url: "https://wiki.archlinux.org/index.php?search=", desc: "Arch Wiki" },
	"!nixpkg": { url: "https://search.nixos.org/packages?query=", desc: "Nix Packages" },
	"!nixopt": { url: "https://search.nixos.org/options?query=", desc: "Nix Options" },
	"!p": { url: "https://www.printables.com/search/models?q=", desc: "Printables" },
	"!pm": { url: "https://mail.proton.me/u/0/almost-all-mail#keyword=", desc: "Proton Mail" },
	"!pd": { url: "https://drive.proton.me/u/0/search#q=", desc: "Proton Drive" },
	"!pc": { url: "https://calendar.proton.me/u/0/search#keyword=", desc: "Proton Calendar" },
	"!sym": { url: "https://symbl.cc/search/?q=", desc: "SYMBL" },
};

for (const [bang, { desc }] of Object.entries(bangPatterns)) {
	const li = document.createElement("li");
	li.textContent = `${bang}: ${desc}`;
	bangsList.appendChild(li);
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

	if (bangPatterns.hasOwnProperty(query)) {
		window.location.href = new URL(bangPatterns[query].url).origin;
		return;
	}

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
