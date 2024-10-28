const bangPatterns = {
	"!g": { url: "https://www.google.com/search?q=", desc: "Google Search" },
	"!gf": { url: "https://fonts.google.com/?query=", desc: "Google Fonts" },
	"!gi": { url: "https://fonts.google.com/icons?icon.query=", base: "https://fonts.google.com/icons", desc: "Google Icons" },
	"!gm": { url: "https://www.google.com/maps/search/", base: "https://google.com/maps", desc: "Google Maps" },
	"!gs": { url: "https://scholar.google.com/scholar?q=", desc: "Google Scholar" },
	"!yt": { url: "https://www.youtube.com/search?q=", desc: "YouTube" },
	"!ytm": { url: "https://music.youtube.com/search?q=", desc: "YouTube Music" },
	"!b": { url: "https://www.bing.com/search?q=", desc: "Bing Search" },
	"!ddg": { url: "https://start.duckduckgo.com/?q=", desc: "DuckDuckGo" },
	"!you": { url: "https://you.com/search?q=", desc: "You" },
	"!yep": { url: "https://yep.com/web?q=", desc: "Yep" },
	"!yan": { url: "https://yandex.com/search/?text=", desc: "Yandex" },
	"!p": { url: "https://www.perplexity.ai/search?q=", desc: "Perplexity" },
	"!c": { url: "https://consensus.app/results/?q=", desc: "Consensus" },
	"!m": { url: "https://www.mojeek.com/search?q=", desc: "Mojeek" },
	"!sc": { url: "https://swisscows.com/web?query=", desc: "Swisscows" },
	"!k": { url: "https://kagi.com/search?q=", desc: "Kagi" },
	"!ask": { url: "https://www.ask.com/web?q=", desc: "Ask" },
	"!q": { url: "https://www.qwant.com/?q=", desc: "Qwant" },
	"!exa": { url: "https://exa.ai/search?q=", desc: "Exa" },
	"!sp": { url: "https://www.startpage.com/do/search?query=", desc: "StartPage" },
	"!b": { url: "https://search.brave.com/search?q=", desc: "Brave Search" },
	"!eco": { url: "https://www.ecosia.org/search?q=", desc: "Ecosia" },
	"!amz": { url: "https://www.amazon.com/s?k=", desc: "Amazon" },
	"!ebay": { url: "https://www.ebay.com/sch/?_nkw=", desc: "eBay" },
	"!bc": { url: "https://bandcamp.com/search?q=", desc: "Bandcamp" },
	"!hn": { url: "https://hn.trieve.ai/?q=", base: "https://news.ycombinator.com", desc: "Hacker News" },
	"!w": { url: "https://wikipedia.org/w/index.php?search=", desc: "Wikipedia" },
	"!ud": { url: "https://www.urbandictionary.com/define.php?term=", desc: "Urban Dictionary" },
	"!ia": { url: "https://archive.org/search?query=", desc: "Internet Archive" },
	"!wm": { url: "https://web.archive.org/web/*/", desc: "Wayback Machine" },
	"!r": { url: "https://www.reddit.com/search/?q=", desc: "Reddit" },
	"!rs": { url: "https://www.reddit.com/search/?type=sr&q=", desc: "Reddit Subreddits" },
	"!ciu": { url: "https://caniuse.com/?search=", desc: "Can I Use" },
	"!cp": { url: "https://codepen.io/search/pens?q=", desc: "CodePen" },
	"!mdn": { url: "https://developer.mozilla.org/en-US/search?q=", desc: "MDN Web Docs" },
	"!html": { url: "https://developer.mozilla.org/en-US/search?topic=html&q=", base: "https://developer.mozilla.org/en-US/docs/Web/HTML", desc: "MDN HTML" },
	"!css": { url: "https://developer.mozilla.org/en-US/search?topic=css&q=", base: "https://developer.mozilla.org/en-US/docs/Web/CSS", desc: "MDN CSS" },
	"!js": { url: "https://developer.mozilla.org/en-US/search?topic=js&q=", base: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "MDN JavaScript" },
	"!npm": { url: "https://www.npmjs.com/search?q=", desc: "Node Package Manager" },
	"!reactn": { url: "https://reactnative.dev/search?q=", desc: "React Native documentation" },
	"!wp": { url: "https://wordpress.org/search/", desc: "WordPress documentation" },
	"!pypi": { url: "https://pypi.org/search/?q=", desc: "Python Package Index" },
	"!bs": { url: "https://bsky.app/search?q=", desc: "Bluesky" },
	"!gh": { url: "https://github.com/search?q=", desc: "GitHub" },
	"!gl": { url: "https://gitlab.com/search?search=", desc: "GitLab" },
	"!lw": { url: "https://www.lesswrong.com/search?query=", desc: "LessWrong" },
	"!un": { url: "https://unsplash.com/s/photos/", desc: "Unsplash" },
	"!ov": { url: "https://openverse.org/search/?q=", desc: "Openverse" },
	"!aur": { url: "https://aur.archlinux.org/packages?K=", desc: "Arch User Repository" },
	"!aw": { url: "https://wiki.archlinux.org/index.php?search=", desc: "Arch Wiki" },
	"!nixpkg": { url: "https://search.nixos.org/packages?query=", desc: "Nix Packages" },
	"!nixopt": { url: "https://search.nixos.org/options?query=", base: "https://search.nixos.org/options", desc: "Nix Options" },
	"!pr": { url: "https://www.printables.com/search/models?q=", desc: "Printables" },
	"!t": { url: "https://thangs.com/search/", desc: "Thangs" },
	"!pm": { url: "https://mail.proton.me/u/0/almost-all-mail#keyword=", desc: "Proton Mail" },
	"!pd": { url: "https://drive.proton.me/u/0/search#q=", desc: "Proton Drive" },
	"!pc": { url: "https://calendar.proton.me/u/0/search#keyword=", desc: "Proton Calendar" },
	"!sym": { url: "https://symbl.cc/en/search/?q=", desc: "SYMBL" },
	"!mm": { url: "https://www.merklemap.com/search?query=", desc: "Merklemap" },
	"!lb": { url: "https://letterboxd.com/search/", desc: "Letterboxd" },
	"!mar": { url: "https://search.marginalia.nu/search?query=", desc: "Marginalia" },
	"!mcw": { url: "https://minecraft.wiki/w/?search=", desc: "Minecraft Wiki" },
	"!pvzw": { url: "https://plantsvszombies.wiki.gg/index.php?search=", desc: "Plants vs Zombies Wiki" },
	"!tw": { url: "https://terraria.wiki.gg/index.php?search=", desc: "Terraria Wiki" },
	"!hp": { url: "https://www.halopedia.org/index.php?search=", desc: "Halopedia" },
	"!tfw": { url: "https://wiki.teamfortress.com/w/index.php?search=", desc: "Team Fortress Wiki" },
};

function getUrlParameter(name) {
	const regex = new RegExp(`[?&]${name}=([^&#]*)`),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getBaseUrl(url) {
	try {
		const urlObj = new URL(url);
		return urlObj.origin;
	} catch (e) {
		console.error("Invalid URL:", url);
		return null;
	}
}

function processBangOrSnap(code, isSnap, defaultEngine) {
	if (isSnap) {
		const bangKey = `!${code}`;
		if (bangPatterns.hasOwnProperty(bangKey)) {
			const baseUrl = bangPatterns[bangKey].base || getBaseUrl(bangPatterns[bangKey].url);
			if (baseUrl) {
				return `${defaultEngine}site:${baseUrl} `;
			}
		}
	} else {
		const bangKey = `!${code}`;
		if (bangPatterns.hasOwnProperty(bangKey)) {
			return bangPatterns[bangKey].url;
		}
	}
	return null;
}

function performSearch(query, defaultEngine) {
	let searchUrl = defaultEngine;
	let isSnap = false;

	if (query.startsWith("!") || query.startsWith("@")) {
		isSnap = query.startsWith("@");
		const parts = query.slice(1).split(" ");
		const bangOrSnap = parts[0];
		const bangOrSnapQuery = parts.slice(1).join(" ");

		const result = processBangOrSnap(bangOrSnap, isSnap, defaultEngine);
		if (result) {
			searchUrl = result;
			query = bangOrSnapQuery;
		}
	} else {
		const parts = query.split(" ");
		const lastPart = parts[parts.length - 1];

		if (lastPart.startsWith("!") || lastPart.startsWith("@")) {
			isSnap = lastPart.startsWith("@");
			const bangOrSnap = lastPart.slice(1);
			const bangOrSnapQuery = parts.slice(0, -1).join(" ");

			const result = processBangOrSnap(bangOrSnap, isSnap, defaultEngine);
			if (result) {
				searchUrl = result;
				query = bangOrSnapQuery;
			}
		}
	}

	if (!query.trim()) {
		const bangKey = Object.keys(bangPatterns).find((key) => bangPatterns[key].url === searchUrl);

		if (bangKey) {
			if (bangPatterns[bangKey].base) {
				window.location.href = bangPatterns[bangKey].base;
			} else {
				const urlParts = searchUrl.split("/");
				window.location.href = urlParts.slice(0, 3).join("/");
			}
		} else {
			window.location.href = new URL(searchUrl).origin;
		}
	} else {
		window.location.href = `${searchUrl}${encodeURIComponent(query)}`;
	}
}

(function () {
	const searchQuery = getUrlParameter("q");
	const defaultEngine = localStorage.getItem("selectedEngine");

	if (searchQuery) {
		performSearch(searchQuery, defaultEngine);
	}
})();

document.addEventListener("DOMContentLoaded", function () {
	const scriptEnabled = document.getElementById("script-enabled"),
		searchForm = document.getElementById("search-form"),
		searchInput = document.getElementById("search-input"),
		engineSelect = document.getElementById("engine-select"),
		bangsList = document.getElementById("bangs-list");

	function createBangList() {
		const fragment = document.createDocumentFragment();
		Object.entries(bangPatterns).forEach(([bang, { desc }]) => {
			const li = document.createElement("li");
			li.textContent = `${bang}: ${desc}`;
			fragment.appendChild(li);
		});
		bangsList.appendChild(fragment);
	}

	function saveSelectedEngine() {
		localStorage.setItem("selectedEngine", engineSelect.value);
	}

	function loadSelectedEngine() {
		const savedEngine = localStorage.getItem("selectedEngine");
		if (savedEngine) {
			engineSelect.value = savedEngine;
		}
	}

	function setupEventListeners() {
		engineSelect.addEventListener("change", saveSelectedEngine);

		searchForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const query = searchInput.value.trim();
			performSearch(query, engineSelect.value);
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "/" && document.activeElement !== searchInput) {
				e.preventDefault();
				searchInput.focus();
			} else if (e.key === "Escape" && document.activeElement === searchInput) {
				searchInput.value = "";
			}
		});
	}

	function init() {
		scriptEnabled.style.display = "flex";
		createBangList();
		loadSelectedEngine();
		setupEventListeners();
	}

	init();
});
