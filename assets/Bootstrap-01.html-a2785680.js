const n=JSON.parse('{"key":"v-4f4191cb","path":"/notes/front/bootstrap/Bootstrap-01.html","title":"一、Bootstrap 入门","lang":"zh-CN","frontmatter":{"title":"一、Bootstrap 入门","date":"2023-03-28T14:54:19.000Z","order":1,"category":["前端","BootStrap"],"tag":["前端","BootStrap"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"回顾 导入 内嵌式 &lt;script type=\\"text/javascript\\"&gt; \\t//代码 &lt;/script&gt; 外联式 &lt;script type=\\"text/javascript\\" src=\\"1.js\\"&gt;&lt;/script&gt; 基本语法 声明变量 var 变量名 = 值 ; 定义函数 //命名 function 函数名(参数名1，...){ } //匿名 var fn = function(参数名1，...){ } bom基本操作 window alert(); 弹出框 confirm() 确认框 setInterval() 定时器 setTimeout() 延迟 location location.href = \\"地址\\" //跳转 history history.go(-1) , back() history.go(1)\\t,forward() dom基本操作 获得 document.getElementById();\\t\\t\\t//&lt;标签 id=\\"\\"&gt; document.getElementsByName();\\t\\t//&lt;标签 name=\\"\\"&gt; document.getElementsByTagName();\\t//&lt;标签&gt; document.getElementsByClassName();\\t//&lt;标签 class=\\"\\"&gt; 创建 //创建 var obj = document.createElement(\\"标签名\\") //设置属性 obj.setAttribute(k , v ); //追加 父元素.appendChild( obj ); 正则表达式 //定义对象 var reg = /正则表达式/属性;\\t\\t//new RegExp(\\"正则\\",\\"属性\\"); //正则表达式 语法 /* ^ 开始 $ 结束 * &gt;=0 + &gt;=1 ? 0或1 [0-9a-zA-Z] 数字和大小写字母 {n} 匹配n个 {n,} &gt;=n个 {n,m} n到m个 .\\t\\t任意 \\\\d\\t数字 \\\\D\\t非数字 \\\\w\\t单词字符（0-9a-zA-Z_） //汉字 \\\\W\\t非单词字符 */","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/front/bootstrap/Bootstrap-01.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、Bootstrap 入门"}],["meta",{"property":"og:description","content":"回顾 导入 内嵌式 &lt;script type=\\"text/javascript\\"&gt; \\t//代码 &lt;/script&gt; 外联式 &lt;script type=\\"text/javascript\\" src=\\"1.js\\"&gt;&lt;/script&gt; 基本语法 声明变量 var 变量名 = 值 ; 定义函数 //命名 function 函数名(参数名1，...){ } //匿名 var fn = function(参数名1，...){ } bom基本操作 window alert(); 弹出框 confirm() 确认框 setInterval() 定时器 setTimeout() 延迟 location location.href = \\"地址\\" //跳转 history history.go(-1) , back() history.go(1)\\t,forward() dom基本操作 获得 document.getElementById();\\t\\t\\t//&lt;标签 id=\\"\\"&gt; document.getElementsByName();\\t\\t//&lt;标签 name=\\"\\"&gt; document.getElementsByTagName();\\t//&lt;标签&gt; document.getElementsByClassName();\\t//&lt;标签 class=\\"\\"&gt; 创建 //创建 var obj = document.createElement(\\"标签名\\") //设置属性 obj.setAttribute(k , v ); //追加 父元素.appendChild( obj ); 正则表达式 //定义对象 var reg = /正则表达式/属性;\\t\\t//new RegExp(\\"正则\\",\\"属性\\"); //正则表达式 语法 /* ^ 开始 $ 结束 * &gt;=0 + &gt;=1 ? 0或1 [0-9a-zA-Z] 数字和大小写字母 {n} 匹配n个 {n,} &gt;=n个 {n,m} n到m个 .\\t\\t任意 \\\\d\\t数字 \\\\D\\t非数字 \\\\w\\t单词字符（0-9a-zA-Z_） //汉字 \\\\W\\t非单词字符 */"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一、Bootstrap 入门"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"BootStrap"}],["meta",{"property":"article:published_time","content":"2023-03-28T14:54:19.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、Bootstrap 入门\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-03-28T14:54:19.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"bootstrap概述","slug":"bootstrap概述","link":"#bootstrap概述","children":[]},{"level":2,"title":"响应式布局","slug":"响应式布局","link":"#响应式布局","children":[]},{"level":2,"title":"模板（搭建环境）","slug":"模板-搭建环境","link":"#模板-搭建环境","children":[]},{"level":2,"title":"布局容器","slug":"布局容器","link":"#布局容器","children":[]},{"level":2,"title":"栅格系统","slug":"栅格系统","link":"#栅格系统","children":[]},{"level":2,"title":"导航条","slug":"导航条","link":"#导航条","children":[]},{"level":2,"title":"轮播图","slug":"轮播图","link":"#轮播图","children":[]},{"level":2,"title":"按钮","slug":"按钮","link":"#按钮","children":[]},{"level":2,"title":"案例分析与实现","slug":"案例分析与实现","link":"#案例分析与实现","children":[]},{"level":2,"title":"排版","slug":"排版","link":"#排版","children":[]},{"level":2,"title":"表格","slug":"表格","link":"#表格","children":[]},{"level":2,"title":"案例实现","slug":"案例实现","link":"#案例实现","children":[]},{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":2,"title":"响应式工具","slug":"响应式工具","link":"#响应式工具","children":[]},{"level":2,"title":"案例分析与实现","slug":"案例分析与实现-1","link":"#案例分析与实现-1","children":[]},{"level":2,"title":"其他技术：表单","slug":"其他技术-表单","link":"#其他技术-表单","children":[]},{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"确定需要部署页面","slug":"确定需要部署页面","link":"#确定需要部署页面","children":[]},{"level":3,"title":"配置nginx","slug":"配置nginx","link":"#配置nginx","children":[]},{"level":3,"title":"启动nginx","slug":"启动nginx","link":"#启动nginx","children":[]},{"level":3,"title":"nginx常规操作","slug":"nginx常规操作","link":"#nginx常规操作","children":[]}]},{"level":2,"title":"扩展：配置本地域名","slug":"扩展-配置本地域名","link":"#扩展-配置本地域名","children":[]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":7.42,"words":2227},"filePathRelative":"notes/front/bootstrap/Bootstrap-01.md","localizedDate":"2023年3月28日","excerpt":"<h1> 回顾</h1>\\n<ul>\\n<li>\\n<p>导入</p>\\n<ul>\\n<li>\\n<p>内嵌式</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n\\t<span class=\\"token comment\\">//代码</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>外联式</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>1.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>基本语法</p>\\n<ul>\\n<li>\\n<p>声明变量</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> 变量名 <span class=\\"token operator\\">=</span>  值 <span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>定义函数</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">//命名</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">函数名</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">参数名<span class=\\"token number\\">1</span>，<span class=\\"token operator\\">...</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">//匿名</span>\\n<span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">fn</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">参数名<span class=\\"token number\\">1</span>，<span class=\\"token operator\\">...</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>bom基本操作</p>\\n<ul>\\n<li>\\n<p>window</p>\\n<ul>\\n<li>alert(); 弹出框</li>\\n<li>confirm() 确认框</li>\\n<li>setInterval()  定时器</li>\\n<li>setTimeout() 延迟</li>\\n</ul>\\n</li>\\n<li>\\n<p>location</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>location<span class=\\"token punctuation\\">.</span>href <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"地址\\"</span>  <span class=\\"token comment\\">//跳转</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>history</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>history<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">go</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">back</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nhistory<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">go</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\t<span class=\\"token punctuation\\">,</span><span class=\\"token function\\">forward</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>dom基本操作</p>\\n<ul>\\n<li>\\n<p>获得</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t\\t\\t<span class=\\"token comment\\">//&lt;标签 id=\\"\\"&gt;</span>\\ndocument<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementsByName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t\\t<span class=\\"token comment\\">//&lt;标签 name=\\"\\"&gt;</span>\\ndocument<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementsByTagName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">//&lt;标签&gt;</span>\\ndocument<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementsByClassName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t<span class=\\"token comment\\">//&lt;标签 class=\\"\\"&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>创建</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">//创建</span>\\n<span class=\\"token keyword\\">var</span> obj <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createElement</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"标签名\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">//设置属性</span>\\nobj<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAttribute</span><span class=\\"token punctuation\\">(</span>k <span class=\\"token punctuation\\">,</span> v <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//追加</span>\\n父元素<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">appendChild</span><span class=\\"token punctuation\\">(</span> obj <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>正则表达式</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">//定义对象</span>\\n<span class=\\"token keyword\\">var</span> reg <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">/</span>正则表达式<span class=\\"token operator\\">/</span>属性<span class=\\"token punctuation\\">;</span>\\t\\t<span class=\\"token comment\\">//new RegExp(\\"正则\\",\\"属性\\");</span>\\n<span class=\\"token comment\\">//正则表达式 语法</span>\\n<span class=\\"token comment\\">/*\\n^ 开始\\n$ 结束\\n* &gt;=0\\n+ &gt;=1\\n? 0或1\\n[0-9a-zA-Z]   数字和大小写字母\\n{n}   匹配n个\\n{n,}  &gt;=n个\\n{n,m}   n到m个\\n.\\t\\t任意\\n\\\\d\\t数字\\n\\\\D\\t非数字\\n\\\\w\\t单词字符（0-9a-zA-Z_）  //汉字\\n\\\\W\\t非单词字符\\n*/</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{n as data};
