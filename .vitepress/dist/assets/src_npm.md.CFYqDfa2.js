import{_ as s,c as i,o as a,a1 as t}from"./chunks/framework.B2LAFC3B.js";const g=JSON.parse('{"title":"npm 命令相关","description":"","frontmatter":{},"headers":[],"relativePath":"src/npm.md","filePath":"src/npm.md"}'),n={name:"src/npm.md"},e=t(`<h1 id="npm-命令相关" tabindex="-1">npm 命令相关 <a class="header-anchor" href="#npm-命令相关" aria-label="Permalink to &quot;npm 命令相关&quot;">​</a></h1><h3 id="npm-outdated" tabindex="-1">npm outdated <a class="header-anchor" href="#npm-outdated" aria-label="Permalink to &quot;npm outdated&quot;">​</a></h3><p><code>npm outdated</code> 命令用于检查项目中的依赖包是否有可用的更新版本。它会列出当前安装的版本、符合 <code>package.json</code> 中定义的版本范围以及最新的可用版本。这个命令可以帮助你识别哪些包需要更新，以确保你的项目使用的是最新的依赖。</p><p>执行 <code>npm outdated</code> 命令时，输出类似以下格式：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Wanted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Location</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           3.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     3.0.3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    3.1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   my-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@vue/cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      4.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    4.2.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   my-project</span></span></code></pre></div><ul><li><strong>Package</strong>: 包的名称。</li><li><strong>Current</strong>: 当前安装的版本。</li><li><strong>Wanted</strong>: 符合 <code>package.json</code> 中定义的版本范围的最新版本。如果你在 <code>package.json</code> 中定义了版本范围，比如 <code>^3.0.0</code>，则 <code>Wanted</code> 会显示符合这个范围的最新版本。</li><li><strong>Latest</strong>: 最新的稳定版本，即当前可以安装的最新版本。</li><li><strong>Location</strong>: 包所在的位置或项目名。</li></ul><p>通过 <code>npm outdated</code> 你可以轻松了解哪些包有更新，并决定是否要进行更新。</p><p>更新依赖包可以使用 <code>npm update</code>，它会将依赖包更新到 <code>package.json</code> 中定义的版本范围内的最新版本。如果想更新到最新的版本，可以使用：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新单个依赖包到最新版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新所有依赖包到最新版本（手动逐个更新）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@latest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@latest</span></span></code></pre></div><p>使用 <code>npm outdated</code> 和 <code>npm update</code>，你可以有效地管理项目的依赖包，保持它们的最新和安全。</p>`,10),p=[e];function l(h,k,d,o,c,r){return a(),i("div",null,p)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
