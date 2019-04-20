const path = require("path");
const striptags = require("./build/strip-tags.js");
const md = require("markdown-it")();

const wrap = function(render) {
  return function() {
    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace("<code>", '<code class="hljs">');
  };
};

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, "$2"),
        16
      )
    );
  });
  return str;
}

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));

    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
        use: [
          [
            require("markdown-it-container"),
            "demo",
            {
              validate: function(params) {
                return params.trim().match(/^demo\s*(.*)$/);
              },
              render: function(tokens, idx) {
                let m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                if (tokens[idx].nesting === 1) {
                  let description = m && m.length > 1 ? m[1] : "";
                  let content = tokens[idx + 1].content;
                  let html = convert(
                    striptags.strip(content, ["script", "style"])
                  ).replace(/(<[^>]*)=""(?=.*>)/g, "$1");
                  let script = striptags.fetch(content, "script");
                  let style = striptags.fetch(content, "style");
                  let jsfiddle = { html: html, script: script, style: style };
                  let descriptionHTML = description
                    ? md.render(description)
                    : "";
                  jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));
                  return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                        <div class="source" slot="source">${html}</div>
                        ${descriptionHTML}
                        <div class="highlight" slot="highlight">`;
                }
                return "</div></demo-block>\n";
              }
            }
          ],
          [require("markdown-it-container"), "tip"],
          [require("markdown-it-container"), "warning"]
        ],
        preprocess: function(MarkdownIt, source) {
          MarkdownIt.renderer.rules.table_open = function() {
            return '<table class="table">';
          };
          MarkdownIt.renderer.rules.fence = wrap(
            MarkdownIt.renderer.rules.fence
          );
          return source;
        }
      });
  }
};
