const shortcodes = {
	g: { url: "www.google.com/search?q=", desc: "Google" },
	gf: { url: "fonts.google.com/?query=", desc: "Google Fonts" },
	gi: { url: "fonts.google.com/icons?icon.query=", base: "fonts.google.com/icons", desc: "Google Icons" },
	gm: { url: "www.google.com/maps/search/", base: "google.com/maps", desc: "Google Maps" },
	gs: { url: "scholar.google.com/scholar?q=", desc: "Google Scholar" },
	gp: { url: "patents.google.com/?q=", desc: "Google Patents" },
	gb: { url: "books.google.com/?q=", desc: "Google Books" },
	gt: { url: "trends.google.com/explore?q=", desc: "Google Trends" },
	gdm: { url: "deepmind.google/search/?query=", desc: "Google DeepMind" },
	yt: { url: "www.youtube.com/search?q=", desc: "YouTube" },
	ytm: { url: "music.youtube.com/search?q=", desc: "YouTube Music" },
	applem: { url: "music.apple.com/search?term=", desc: "Apple Music" },
	b: { url: "www.bing.com/search?q=", desc: "Bing Search" },
	ddg: { url: "start.duckduckgo.com/?q=", desc: "DuckDuckGo" },
	ddgh: { url: "html.duckduckgo.com/html?q=", desc: "DuckDuckGo (HTML)" },
	ddgl: { url: "lite.duckduckgo.com/lite?q=", desc: "DuckDuckGo (Lite)" },
	you: { url: "you.com/search?q=", desc: "You" },
	yep: { url: "yep.com/web?q=", desc: "Yep" },
	yan: { url: "yandex.com/search/?text=", desc: "Yandex" },
	good: { url: "good-search.org/en/search/?q=", desc: "Good" },
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
	br: { url: "search.brave.com/search?q=", desc: "Brave Search" },
	eco: { url: "www.ecosia.org/search?q=", desc: "Ecosia" },
	vr: { url: "vale.rocks/search?q=", desc: "Vale.Rocks" },
	amz: { url: "www.amazon.com/s?k=", desc: "Amazon" },
	ebay: { url: "www.ebay.com/sch/?_nkw=", desc: "eBay" },
	bc: { url: "bandcamp.com/search?q=", desc: "Bandcamp" },
	hn: { url: "hn.trieve.ai/?q=", base: "news.ycombinator.com", desc: "Hacker News" },
	sw: { url: "simple.wikipedia.org/w/index.php?search=", desc: "Simple Wikipedia" },
	w: { url: "wikipedia.org/w/index.php?search=", desc: "Wikipedia" },
	wd: { url: "www.wikidata.org/w/index.php?search=", desc: "Wikidata" },
	wv: { url: "wikivoyage.org/w/index.php?search=", desc: "Wikivoyage" },
	ud: { url: "www.urbandictionary.com/define.php?term=", desc: "Urban Dictionary" },
	ia: { url: "archive.org/search?query=", desc: "Internet Archive" },
	wm: { url: "web.archive.org/web/*/", desc: "Wayback Machine" },
	m: { url: "medium.com/search?q=", desc: "Medium" },
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
	wc: { url: "www.webcrawler.com/serp?q=", desc: "WebCrawler" },
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
	mar: { url: "marginalia-search.com/search?query=", desc: "Marginalia Search" },
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
	ffn: { url: "www.fanfiction.net/search/?type=story&keywords=cheese", desc: "FanFiction.Net" },
	ao3: { url: "archiveofourown.org/works/search?work_search[query]=", desc: "Archive of Our Own" },
	s: { url: "www.shodan.io/search?query=", desc: "Shodan" },
	dp: { url: "www.dogpile.com/serp?q=", desc: "Dogpile" },
	pubmed: { url: "pubmed.ncbi.nlm.nih.gov/?term=", desc: "PubMed" },
	gmx: { url: "search.gmx.com/web/result?q=", desc: "GMX Search" },
	ps: { url: "presearch.com/search?q=", desc: "Presearch" },
	e: { url: "ekoru.org/?q=", desc: "Ekoru" },
	pw: { url: "www.privacywall.org/search/secure?q=", desc: "PrivacyWall" },
	yc: { url: "youcare.world/all?q=", desc: "YouCare" },
	ly: { url: "search.lycos.com/web/?q=", desc: "Lycos" },
	give: { url: "givero.com/results?q=", desc: "Givero" },
	st: { url: "stract.com/search?q=", desc: "Stract" },
	rd: { url: "rightdao.com/search?q=", desc: "Right Dao" },
	a: { url: "www.alexandria.org/?q=", desc: "Alexandria Search" },
	pkr: { url: "peekr.org/dig?q=", desc: "Peekr" },
	it: { url: "infotiger.com/search?query=", desc: "Infotiger" },
	burf: { url: "burf.co/search.php?term=", desc: "Burf.co" },
	ssel: { url: "www.secretsearchenginelabs.com/find/", desc: "Secret Search Engine Labs" },
	gab: { url: "www.gabanza.com/search?query=", desc: "Gabanza" },
	fynd: { url: "fynd.bot/?search=", desc: "Fynd" },
	pe: { url: "prieco.net/?&q=", desc: "PriEco" },
	ichi: { url: "ichi.do/search?q=", desc: "Ichido" },
	tl: { url: "teclis.com/search?q=", desc: "Teclis" },
	cl: { url: "clew.se/search?q=", desc: "Clew" },
	ll: { url: "search.lixialabs.com/?q=", desc: "Lixia Labs Search" },
	gn: { url: "www.gnomit.com/search/", desc: "Gnomit" },
	ko: { url: "kozmonavt.su/s?q=", desc: "Kozmonavt" },
	se: { url: "www.sengine.info/Search?q=dog", desc: "sengine.info" },
	ts: { url: "search.thunderstone.com/texis/websearch15/?q=", desc: "Thunderstone's Web Site Catalog" },
	bm: { url: "bonzamate.com.au/?q=", desc: "Bonzamate" },
	sems: { url: "www.semanticscholar.org/search?q=", desc: "Semantic Scholar" },
	sc: { url: "searchcode.com/?q=", desc: "searchcode" },
	mwm: { url: "mwmbl.org/?q=", desc: "Mwmbl" },
	us: { url: "unobtanium.rocks/search?search=", desc: "Unobtanium Search" },
	ku: { url: "kukei.eu/?q=", desc: "Kukei.eu" },
	ew: { url: "wiki.evageeks.org/index.php?search=", desc: "EvaWiki" },
	leta: { url: "leta.mullvad.net/?q=", desc: "Mullvad Leta" },
	scratch: { url: "scratch.mit.edu/search/projects?q=", desc: "Scratch" },
	ssb: { url: "www.ssbwiki.com/index.php?search=", desc: "SmashWiki" },
	am: { url: "automod.vale.rocks/search?q=", desc: "AutoMod" },
	ph: { url: "www.phind.com/search/?q=", desc: "Phind" },
	moz: { url: "mozberg.com/?q=", desc: "Mozberg" },
	xkcd: { url: "searchxkcd.com/?q=", desc: "XKCD" },
	lin: { url: "www.linkedin.com/search/results/all/?keywords=", desc: "LinkedIn" },
	apple: { url: "www.apple.com/search/", desc: "Apple" },
	crates: { url: "crates.io/search?q=", desc: "crates.io" },
	docsrs: { url: "docs.rs/releases/search?query=", desc: "Docs.rs" },
	wdm: { url: "www.webdesignmuseum.org/?s=", desc: "Web Design Museum" },
	lcdb: { url: "content.luanti.org/packages/?q=", desc: "Luanti Content DB" },
	mr: { url: "modrinth.com/mods?q=", desc: "Modrinth" },
	sm: { url: "www.smashingmagazine.com/search/?q=", desc: "Smashing Magazine" },
	v: { url: "www.theverge.com/search?q=", desc: "The Verge" },
	wired: { url: "www.wired.com/search/?q=", desc: "WIRED" },
	steam: { url: "store.steampowered.com/search/?term=", desc: "Steam" },
	gog: { url: "www.gog.com/games?query=", desc: "GOG" },
	egs: { url: "store.epicgames.com/browse?q=", desc: "Epic Games Store" },
	abc: { url: "discover.abc.net.au/index.html#/?query=", desc: "Australian Broadcasting Corporation" },
	aa: { url: "annas-archive.org/search?q=", desc: "Anna's Archive" },
	iio: { url: "itch.io/search?q=", desc: "itch.io" },
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

function processCode(code, isSnap) {
	const shortcodeKey = code.toLowerCase();
	const matchingShortcode = Object.keys(shortcodes).find((key) => key.toLowerCase() === shortcodeKey);

	if (matchingShortcode) {
		if (isSnap) {
			const baseUrl = shortcodes[matchingShortcode].base || getBaseUrl(shortcodes[matchingShortcode].url);
			if (baseUrl) {
				return {
					type: "snap",
					result: `site:${baseUrl.replace("https://", "")} `,
				};
			}
		} else {
			return {
				type: "bang",
				result: "https://" + shortcodes[matchingShortcode].url,
			};
		}
	}
	return null;
}

function performSearch(query, defaultEngine) {
	let searchUrl = defaultEngine;
	let sitePrefix = "";
	let processedQuery = query;

	const tokens = query.split(" ");
	const processedTokens = [];
	let bangFound = false;
	let snapFound = false;

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		if (token.startsWith("!")) {
			const bangCode = token.slice(1);
			const result = processCode(bangCode, false, defaultEngine);

			if (result && result.type === "bang") {
				searchUrl = result.result;
				bangFound = true;
			} else {
				processedTokens.push(token);
			}
		} else {
			processedTokens.push(token);
		}
	}

	const finalTokens = [];
	for (let i = 0; i < processedTokens.length; i++) {
		const token = processedTokens[i];
		if (token.startsWith("@")) {
			const snapCode = token.slice(1);
			const result = processCode(snapCode, true, defaultEngine);

			if (result && result.type === "snap") {
				sitePrefix = result.result;
				snapFound = true;
			} else {
				finalTokens.push(token);
			}
		} else {
			finalTokens.push(token);
		}
	}

	processedQuery = finalTokens.join(" ");

	if (!processedQuery.trim()) {
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
		return;
	}

	if (snapFound) {
		processedQuery = sitePrefix + processedQuery;
	}

	window.location.href = `${searchUrl}${encodeURIComponent(processedQuery)}`;
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
