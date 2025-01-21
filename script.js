const shortcodes = {
	g: { url: "www.google.com/search?q=", desc: "Google Search" },
	gf: { url: "fonts.google.com/?query=", desc: "Google Fonts" },
	gi: { url: "fonts.google.com/icons?icon.query=", base: "fonts.google.com/icons", desc: "Google Icons" },
	gm: { url: "www.google.com/maps/search/", base: "google.com/maps", desc: "Google Maps" },
	gs: { url: "scholar.google.com/scholar?q=", desc: "Google Scholar" },
	gp: { url: "patents.google.com/?q=", desc: "Google Patents" },
	gdm: { url: "deepmind.google/search/?query=", desc: "Google DeepMind" },
	yt: { url: "www.youtube.com/search?q=", desc: "YouTube" },
	ytm: { url: "music.youtube.com/search?q=", desc: "YouTube Music" },
	b: { url: "www.bing.com/search?q=", desc: "Bing Search" },
	ddg: { url: "start.duckduckgo.com/?q=", desc: "DuckDuckGo" },
	you: { url: "you.com/search?q=", desc: "You" },
	yep: { url: "yep.com/web?q=", desc: "Yep" },
	yan: { url: "yandex.com/search/?text=", desc: "Yandex" },
	y: { url: "search.yahoo.com/search?p=", desc: "Yahoo!" },
	p: { url: "www.perplexity.ai/search?q=", desc: "Perplexity" },
	c: { url: "consensus.app/results/?q=", desc: "Consensus" },
	m: { url: "www.mojeek.com/search?q=", desc: "Mojeek" },
	sc: { url: "swisscows.com/web?query=", desc: "Swisscows" },
	k: { url: "kagi.com/search?q=", desc: "Kagi" },
	gpt: { url: "chatgpt.com/?hints=search&q=", desc: "ChatGPT Search" },
	oai: { url: "openai.com/search/?q=", desc: "OpenAI" },
	ask: { url: "www.ask.com/web?q=", desc: "Ask" },
	q: { url: "www.qwant.com/?q=", desc: "Qwant" },
	exa: { url: "exa.ai/search?q=", desc: "Exa" },
	sp: { url: "www.startpage.com/do/search?query=", desc: "StartPage" },
	b: { url: "search.brave.com/search?q=", desc: "Brave Search" },
	eco: { url: "www.ecosia.org/search?q=", desc: "Ecosia" },
	vr: { url: "vale.rocks/search?q=", desc: "Vale.Rocks" },
	amz: { url: "www.amazon.com/s?k=", desc: "Amazon" },
	ebay: { url: "www.ebay.com/sch/?_nkw=", desc: "eBay" },
	bc: { url: "bandcamp.com/search?q=", desc: "Bandcamp" },
	hn: { url: "hn.trieve.ai/?q=", base: "news.ycombinator.com", desc: "Hacker News" },
	w: { url: "wikipedia.org/w/index.php?search=", desc: "Wikipedia" },
	wd: { url: "www.wikidata.org/w/index.php?search=", desc: "Wikidata" },
	ud: { url: "www.urbandictionary.com/define.php?term=", desc: "Urban Dictionary" },
	ia: { url: "archive.org/search?query=", desc: "Internet Archive" },
	wm: { url: "web.archive.org/web/*/", desc: "Wayback Machine" },
	r: { url: "www.reddit.com/search/?q=", desc: "Reddit" },
	rs: { url: "www.reddit.com/search/?type=sr&q=", desc: "Reddit Subreddits" },
	ciu: { url: "caniuse.com/?search=", desc: "Can I Use" },
	cp: { url: "codepen.io/search/pens?q=", desc: "CodePen" },
	mdn: { url: "developer.mozilla.org/en-US/search?q=", desc: "MDN Web Docs" },
	html: { url: "developer.mozilla.org/en-US/search?topic=html&q=", base: "developer.mozilla.org/en-US/docs/Web/HTML", desc: "MDN HTML" },
	css: { url: "developer.mozilla.org/en-US/search?topic=css&q=", base: "developer.mozilla.org/en-US/docs/Web/CSS", desc: "MDN CSS" },
	js: { url: "developer.mozilla.org/en-US/search?topic=js&q=", base: "developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "MDN JavaScript" },
	npm: { url: "www.npmjs.com/search?q=", desc: "Node Package Manager" },
	reactn: { url: "reactnative.dev/search?q=", desc: "React Native documentation" },
	wp: { url: "wordpress.org/search/", desc: "WordPress documentation" },
	cfd: { url: "developer.chrome.com/s/results?q=", desc: "Chrome for Developers" },
	pypi: { url: "pypi.org/search/?q=", desc: "Python Package Index" },
	bs: { url: "bsky.app/search?q=", desc: "Bluesky" },
	gh: { url: "github.com/search?q=", desc: "GitHub" },
	gl: { url: "gitlab.com/search?search=", desc: "GitLab" },
	lw: { url: "www.lesswrong.com/search?query=", desc: "LessWrong" },
	un: { url: "unsplash.com/s/photos/", desc: "Unsplash" },
	ov: { url: "openverse.org/search/?q=", desc: "Openverse" },
	aur: { url: "aur.archlinux.org/packages?K=", desc: "Arch User Repository" },
	aw: { url: "wiki.archlinux.org/index.php?search=", desc: "Arch Wiki" },
	nixpkg: { url: "search.nixos.org/packages?query=", desc: "Nix Packages" },
	nixopt: { url: "search.nixos.org/options?query=", base: "search.nixos.org/options", desc: "Nix Options" },
	pr: { url: "www.printables.com/search/models?q=", desc: "Printables" },
	t: { url: "thangs.com/search/", desc: "Thangs" },
	pm: { url: "mail.proton.me/u/0/almost-all-mail#keyword=", desc: "Proton Mail" },
	pd: { url: "drive.proton.me/u/0/search#q=", desc: "Proton Drive" },
	pc: { url: "calendar.proton.me/u/0/search#keyword=", desc: "Proton Calendar" },
	sym: { url: "symbl.cc/en/search/?q=", desc: "SYMBL" },
	mm: { url: "www.merklemap.com/search?query=", desc: "Merklemap" },
	lb: { url: "letterboxd.com/search/", desc: "Letterboxd" },
	mar: { url: "search.marginalia.nu/search?query=", desc: "Marginalia" },
	mcw: { url: "minecraft.wiki/w/?search=", desc: "Minecraft Wiki" },
	pvzw: { url: "plantsvszombies.wiki.gg/index.php?search=", desc: "Plants vs Zombies Wiki" },
	tw: { url: "terraria.wiki.gg/index.php?search=", desc: "Terraria Wiki" },
	hp: { url: "www.halopedia.org/index.php?search=", desc: "Halopedia" },
	tfw: { url: "wiki.teamfortress.com/w/index.php?search=", desc: "Team Fortress Wiki" },
	arx: { url: "arxiv.org/search/?searchtype=all&query=", desc: "Arxiv" },
	acdb: { url: "www.classification.gov.au/search/title?search=", desc: "Australian Classification Database" },
	wiby: { url: "wiby.me/?q=", desc: "Wiby" },
	wikenigma: { url: "wikenigma.org.uk/?do=search&q=", desc: "Wikenigma" },
	tcrf: { url: "tcrf.net/index.php?search=", desc: "The Cutting Room Floor" },
	sms: { url: "searchmysite.net/search/?q=", desc: "Search My Site" },
	dblp: { url: "dblp.org/search?q=", desc: "dblp Computer Science Bibliography" },
	snopes: { url: "www.snopes.com/search/?q=", desc: "Snopes" },
	nature: { url: "www.nature.com/search?q=", desc: "Nature" },
};

function getUrlParameter(name) {
	const regex = new RegExp(`[?&]${name}=([^&#]*)`),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getBaseUrl(url) {
	const urlObj = new URL("https://" + url);
	return urlObj.origin;
}

function processBangOrSnap(code, isSnap, defaultEngine) {
	const shortcodeKey = code.toLowerCase();
	const matchingShortcode = Object.keys(shortcodes).find((key) => key.toLowerCase() === shortcodeKey);

	if (matchingShortcode) {
		if (isSnap) {
			const baseUrl = shortcodes[matchingShortcode].base || getBaseUrl(shortcodes[matchingShortcode].url);
			if (baseUrl) {
				return `${defaultEngine}site:${baseUrl.replace("https://", "")} `;
			}
		} else {
			return "https://" + shortcodes[matchingShortcode].url;
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

		const result = processBangOrSnap(bangOrSnap, isSnap, searchUrl);
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

			const result = processBangOrSnap(bangOrSnap, isSnap, searchUrl);
			if (result) {
				searchUrl = result;
				query = bangOrSnapQuery;
			}
		}
	}

	if (!query.trim()) {
		const shortcodeKey = Object.keys(shortcodes).find((key) => "https://" + shortcodes[key].url === searchUrl);

		if (shortcodeKey) {
			if (shortcodes[shortcodeKey].base) {
				window.location.href = "https://" + shortcodes[shortcodeKey].base;
			} else {
				window.location.href = searchUrl.split("/").slice(0, 3).join("/");
			}
		} else {
			window.location.href = searchUrl;
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
		shortcodeList = document.getElementById("shortcode-list");

	function createShortcodeList() {
		const fragment = document.createDocumentFragment();
		Object.entries(shortcodes).forEach(([code, { desc }]) => {
			const li = document.createElement("li");
			li.textContent = `${code}: ${desc}`;
			fragment.appendChild(li);
		});
		shortcodeList.appendChild(fragment);
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
		createShortcodeList();
		loadSelectedEngine();
		setupEventListeners();
	}

	init();
});
