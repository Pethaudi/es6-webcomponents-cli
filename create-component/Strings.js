class Strings {
	static jsFile(name) {
		return "import html from './" + name + ".component.html';\n" +
			"import css from './" + name + ".component.css';\n" +
			"\n" +
			"export default class " + name + " extends HTMLElement {\n" +
			"\tconstructor() {\n" +
			"\t\tsuper();\n" +
			"\n" +
			"\t\tthis.root = this.attachShadow({mode: \"open\"})\n" +
			"\t}\n" +
			"\n" +
			"\tconnectedCallback() {\n" +
			"\t\tthis.appendHTML();\n" +
			"\t}\n" +
			"\n" +
			"\tappendHTML() {\n" +
			"\t\tthis.root.innerHTML = html;\n" +
			"\t\tthis.appendCSS();\n" +
			"\t}\n" +
			"\n" +
			"\tappendCSS() {\n" +
			"\t\tlet style = document.createElement(\"style\");\n" +
			"\t\tstyle.innerText = css;\n" +
			"\t\tthis.root.append(style);\n" +
			"\t}\n" +
			"}\n" +
			"\n" +
			"customElements.define(\"" + name + "-app\", $name);"
	}

	static exampleHtml(name) { return `<h2>$name</h2>` }

	static exampleHtmlElectron(name) {
		return "<script async id=\"__bs_script__\" src=\"http://localhost:3000/browser-sync/browser-sync-client.js?v=2.18.8 \"></script>\n" +
			"<h2>" + name + "</h2>"
	}

	static exampleCss(name) { return "h2 { background: blue }" }
}

module.exports = Strings;