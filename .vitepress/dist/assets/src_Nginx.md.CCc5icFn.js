import{_ as s,c as i,o as e,a1 as a}from"./chunks/framework.B2LAFC3B.js";const u=JSON.parse('{"title":"Nginx 相关","description":"","frontmatter":{},"headers":[],"relativePath":"src/Nginx.md","filePath":"src/Nginx.md"}'),o={name:"src/Nginx.md"},l=a(`<h1 id="nginx-相关" tabindex="-1">Nginx 相关 <a class="header-anchor" href="#nginx-相关" aria-label="Permalink to &quot;Nginx 相关&quot;">​</a></h1><h2 id="访问服务器" tabindex="-1">访问服务器 <a class="header-anchor" href="#访问服务器" aria-label="Permalink to &quot;访问服务器&quot;">​</a></h2><h3 id="mac-端" tabindex="-1">mac 端 <a class="header-anchor" href="#mac-端" aria-label="Permalink to &quot;mac 端&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 以访问jenkins 服务为例 --&gt;</span></span>
<span class="line"><span>ssh root@121.89.207.223</span></span>
<span class="line"><span>&lt;!-- 输入指令后根据提示输入密码 --&gt;</span></span>
<span class="line"><span>Woshikeji2022..</span></span></code></pre></div><p>在Mac终端上，一旦你通过SSH成功登录到远程服务器（如阿里巴巴云ECS实例），你将使用Linux命令来查看目录和操作文件。要查看当前所在的目录，你可以使用<code>pwd</code>（print working directory）命令。若要列出当前目录下的文件和文件夹，可以使用<code>ls</code>命令。如果你想查看更详细的文件信息，包括权限、大小等，可以使用<code>ls -l</code>命令。</p><p>以下是一些基本的目录查看与操作命令： 确保在执行这些命令时，你的SSH会话是活跃的，并且你有足够的权限访问相关的目录和文件。</p><ul><li><p><strong>查看当前目录</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span></span></code></pre></div></li><li><p><strong>列出当前目录内容</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 隐藏目录也列出</span></span></code></pre></div></li><li><p><strong>列出并详细显示当前目录内容</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre></div></li><li><p><strong>切换目录</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [目录名]</span></span></code></pre></div><p>例如，要进入名为“Documents”的目录，命令为：<code>cd Documents</code></p></li><li><p><strong>查看其他目录内容（不切换目录）</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [目录路径]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">或</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [目录路径]</span></span></code></pre></div><p>例如，查看家目录下的“Downloads”目录内容：<code>ls -l ~/Downloads</code></p></li><li><p><strong>要在Linux中显示<code>root</code>目录下所有的隐藏目录（以<code>.</code>开头的目录），可以使用以下命令之一：</strong></p><ol><li>使用<code>ls</code>命令结合<code>-a</code>选项，显示包括<code>.</code>和<code>..</code>在内的所有隐藏文件和目录：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root</span></span></code></pre></div><p>注意：由于<code>/root</code>是root用户的主目录，非root用户需要使用<code>sudo</code>来获取足够的权限来查看这个目录的内容。</p><ol start="2"><li>如果你不想看到<code>.</code>和<code>..</code>这两个特殊的隐藏目录，可以使用<code>-A</code>选项代替：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root</span></span></code></pre></div><p>这两个命令都需要你具有查看<code>/root</code>目录的权限。如果你已经是root用户，那么无需使用<code>sudo</code>。如果上述命令执行时提示权限不足，确保你有相应的权限或者以root身份登录。</p></li><li><p><strong>显示当前目录下所有文件(不要含子文件)的大小</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">du</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .[^.]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span></code></pre></div><p>这里的命令解释如下：</p><ul><li><code>du -sh</code> 用于以人类可读的格式显示目录或文件的大小。</li><li><code>.</code> 表示当前目录</li><li><code>[^.]*</code> 是一个正则表达式，匹配所有不以.开头的文件名（即非隐藏文件）。</li><li><code>*</code> 匹配当前目录下所有的非隐藏文件。</li></ul></li></ul><p><strong>要查看当前目录所在文件系统的剩余空间，你需要使用<code>df</code>命令。但是，直接使用<code>df</code>命令会显示整个文件系统的使用情况，而不是特定于当前目录。为了更接近查看“当前目录下的剩余空间”，你可以结合使用<code>df</code>和<code>pwd</code>命令，或者理解为查看当前目录所在分区的可用空间。下面是具体的操作方法：</strong></p><ul><li><p><strong>查看当前目录所在文件系统的总体空间情况</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>这里，<code>$(pwd)</code>获取当前工作目录的绝对路径，然后将其作为参数传递给<code>df</code>命令，<code>-h</code>选项让输出的单位更易读（如KB、MB、GB）。</p><p>这将显示包括总容量、已用空间、可用空间以及使用百分比等信息，对于理解当前目录所在分区或挂载点的存储情况非常有用。</p><p>如果你想了解某个特定目录实际占用空间和剩余空间的详细情况（比如，如果你想管理当前目录内部的空间使用），你应该使用<code>du</code>命令来检查目录和文件的大小，但这并不直接显示“剩余空间”，而是帮助你管理已用空间。</p></li><li><p><strong><code>rm -rf node_modules</code> 和 <code>rm node_modules</code></strong></p><p><code>rm -rf node_modules</code> 和 <code>rm node_modules</code> 都是用于删除名为 <code>node_modules</code> 的目录，但它们之间有一个关键的区别：</p><ol><li><strong>rm -rf node_modules</strong>:</li></ol><ul><li><code>-r</code> 或 <code>-R</code> 选项表示递归（recursive），意味着该命令会删除 <code>node_modules</code> 目录及其包含的所有子目录和文件，不论这些子目录有多深。</li><li><code>-f</code> 选项代表强制（force），它会强制删除文件或目录，即使该目录非空或文件被设置为只读，也不会提示用户确认，直接进行删除操作。 因此，<code>rm -rf node_modules</code> 命令会迅速且没有任何提示地删除 <code>node_modules</code> 目录及其所有内容，且此操作不可逆。</li></ul><ol start="2"><li><strong>rm node_modules</strong>:</li></ol><ul><li>如果 <code>node_modules</code> 是一个空目录，这个命令会直接删除该目录。</li><li>但如果 <code>node_modules</code> 目录包含任何文件或子目录，这条命令在大多数Unix-like系统（包括macOS）上会失败，并显示一个错误消息，告诉你该目录不是空的，不能这样直接删除，除非你使用 <code>-r</code> 或 <code>-R</code> 选项来进行递归删除。</li></ul><p>总结来说，<code>rm -rf node_modules</code> 是一个更为强力的命令，它会不顾一切地删除目标目录及其所有内容，而 <code>rm node_modules</code> 则主要用于删除空目录，或在没有 <code>-r</code> 选项的情况下尝试删除非空目录时会导致失败。使用这些命令时应特别小心，以免误删重要数据。</p></li></ul>`,9),d=[l];function t(n,p,c,h,r,k){return e(),i("div",null,d)}const b=s(o,[["render",t]]);export{u as __pageData,b as default};
