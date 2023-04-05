import{d as n,_ as s,a,b as e,c as t,e as i,h as l,f as p,g as o,i as c}from"./1534651673743-78363a2d.js";import{_ as d,W as r,X as u,a0 as v}from"./framework-5f3abea5.js";const k={},m=v('<h1 id="ajax-json-1-0" tabindex="-1"><a class="header-anchor" href="#ajax-json-1-0" aria-hidden="true">#</a> ajax-json 1.0</h1><h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标：</h2><ol><li>能够理解异步的概念</li><li>能够使用jQuery的$.get()进行访问</li><li>能够使用jQuery的$.post()进行访问</li><li>能够掌握json的三种数据格式</li><li>能够使用json转换工具Jackson进行json格式字符串的转换</li><li>能够完成用户名是否存在的查重案例</li><li>能够完成自动补全的案例</li></ol><h2 id="案例一-使用js的ajax完成用户名的异步校验" tabindex="-1"><a class="header-anchor" href="#案例一-使用js的ajax完成用户名的异步校验" aria-hidden="true">#</a> 案例一：使用JS的AJAX完成用户名的异步校验</h2><h3 id="一-需求分析" tabindex="-1"><a class="header-anchor" href="#一-需求分析" aria-hidden="true">#</a> 一，需求分析</h3><p>​ 我们有一个网站，网站中都有注册的页面，当我们在注册的页面中输入用户名的时候(失去焦点的时候)，这个时候会提示，用户名是否存在。</p><figure><img src="'+n+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="二-技术分析" tabindex="-1"><a class="header-anchor" href="#二-技术分析" aria-hidden="true">#</a> 二，技术分析</h3><h4 id="_1-ajax的概述" tabindex="-1"><a class="header-anchor" href="#_1-ajax的概述" aria-hidden="true">#</a> 1. AJAX的概述</h4><h5 id="_1-1-什么是ajax" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是ajax" aria-hidden="true">#</a> 1.1 什么是AJAX</h5><figure><img src="'+s+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>​ 说白了: 使用AJax可以做异步的请求</p><h5 id="_1-2什么是异步" tabindex="-1"><a class="header-anchor" href="#_1-2什么是异步" aria-hidden="true">#</a> 1.2什么是异步</h5><ul><li><p>同步</p><p>​</p></li></ul><figure><img src="'+a+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><p>异步</p><figure><img src="'+e+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li></ul><h5 id="_1-3为什么要学习ajax" tabindex="-1"><a class="header-anchor" href="#_1-3为什么要学习ajax" aria-hidden="true">#</a> 1.3为什么要学习AJAX</h5><p>​ 提升用户的体验。异步</p><p>​ 实现页面局部刷新。</p><p>​ 将部分的代码，写到客户端浏览器。</p><h4 id="_2-js的ajax入门【了解】" tabindex="-1"><a class="header-anchor" href="#_2-js的ajax入门【了解】" aria-hidden="true">#</a> 2.js的Ajax入门【了解】</h4><h5 id="_2-1步骤" tabindex="-1"><a class="header-anchor" href="#_2-1步骤" aria-hidden="true">#</a> 2.1步骤</h5><p>​ 第一步：创建异步请求对象。</p><p>​ 第二步：打开连接。</p><p>​ 第三步：发送请求。</p><p>​ 第四步：设置监听对象改变所触发的函数,处理结果</p><h5 id="_2-2-get请求方式的入门" tabindex="-1"><a class="header-anchor" href="#_2-2-get请求方式的入门" aria-hidden="true">#</a> 2.2 GET请求方式的入门</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
		<span class="token keyword">function</span> <span class="token function">ajaxDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">//1.创建xmlHttpRequest对象</span>
			<span class="token keyword">var</span> xmlHttp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// all modern browsers</span>
				xmlHttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// for IE5, IE6</span>
				xmlHttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		
			<span class="token comment">//2.打开连接</span>
			xmlHttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\${pageContext.request.contextPath}/demo02?username=zs&amp;password=123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//3.发送请求</span>
			xmlHttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  			<span class="token comment">//4.设置对象状态发生改变所触发的函数</span>
			xmlHttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>xmlHttp<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xmlHttp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">var</span> result <span class="token operator">=</span> xmlHttp<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
					<span class="token function">alert</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				
			<span class="token punctuation">}</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3post请求方式的入门" tabindex="-1"><a class="header-anchor" href="#_2-3post请求方式的入门" aria-hidden="true">#</a> 2.3POST请求方式的入门</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">function</span> <span class="token function">ajaxDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//1.创建xmlHttpRequest对象</span>
		<span class="token keyword">var</span> xmlHttp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// all modern browsers</span>
			xmlHttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// for IE5, IE6</span>
			xmlHttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	
		<span class="token comment">//2.打开连接</span>
		xmlHttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\${pageContext.request.contextPath}/demo03&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//设置请求参数的mime类型</span>
		xmlHttp<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//3.发送请求</span>
		xmlHttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;username=zs&amp;password=123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
  		<span class="token comment">//4.设置状态发生改变触发的函数,处理结果</span>
		xmlHttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>xmlHttp<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xmlHttp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">var</span> result <span class="token operator">=</span> xmlHttp<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
				<span class="token function">alert</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
  
	<span class="token punctuation">}</span>

	
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-js的ajax" tabindex="-1"><a class="header-anchor" href="#_3-js的ajax" aria-hidden="true">#</a> 3.JS的Ajax</h4><h5 id="_3-1异步请求的对象xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#_3-1异步请求的对象xmlhttprequest" aria-hidden="true">#</a> 3.1异步请求的对象XMLHttpRequest</h5><p>​ 不同的浏览器对该对象的创建的方式不一样，MSIE浏览器，比较早的浏览器，创建这个对象的时候将这个对象封装到ActiveXObject的插件中。像火狐或者谷歌浏览器则直接new出来。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createXmlHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">var</span> xmlHttp<span class="token punctuation">;</span>
   <span class="token keyword">try</span><span class="token punctuation">{</span> <span class="token comment">// Firefox, Opera 8.0+, Safari</span>
        xmlHttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	   <span class="token keyword">try</span><span class="token punctuation">{</span><span class="token comment">// Internet Explorer</span>
	         xmlHttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Msxml2.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	      <span class="token punctuation">}</span>
	    <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	      <span class="token keyword">try</span><span class="token punctuation">{</span>
	         xmlHttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	      <span class="token punctuation">}</span>
	      <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">return</span> xmlHttp<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2xmlhttprequest的对象的api" tabindex="-1"><a class="header-anchor" href="#_3-2xmlhttprequest的对象的api" aria-hidden="true">#</a> 3.2XMLHttpRequest的对象的API</h5><h6 id="_3-2-1方法" tabindex="-1"><a class="header-anchor" href="#_3-2-1方法" aria-hidden="true">#</a> 3.2.1方法</h6><p>​ open() ：打开连接。传递三个参数。第一个是请求方式(GET/POST)，第二个是请求路径，第三个是否是异步的(默认就是异步,不需要这个参数)。</p><p>​ send([post请求的参数]): 发送请求。</p><p>​ setRequestHeader()：解决POST请求参数的问题。 key和值 content-type</p><h6 id="_3-2-2属性" tabindex="-1"><a class="header-anchor" href="#_3-2-2属性" aria-hidden="true">#</a> 3.2.2属性</h6><p>​ onreadystatechange：监听该对象的状态的改变,需要一个函数响应它</p><p>​ readyState：该属性就记录这个对象的状态。</p><figure><img src="`+t+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>​ <strong>status：状态码 。</strong></p><p>​ <strong>responseText:获得字符串形式的响应数据(响应体)。</strong></p><p>​ responseXML :获得 XML 形式的响应数据(响应体)</p><h3 id="三-思路分析" tabindex="-1"><a class="header-anchor" href="#三-思路分析" aria-hidden="true">#</a> 三，思路分析</h3><ol><li><p>创建页面和数据库</p></li><li><p>给用户名输入框设置失去焦点(onblur)事件,创建一个checkUserName()的函数响应这个事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function checkUserName(){
  //1.获得用户输入的用户名
  //2.使用JS的Ajax请求服务器(需要把用户名传过去)
  //3. 获得服务器响应的结果, 判断用户名是否被占用, 给用户提示
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建UserServlet</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class UserServlet{
  
  //1. 获得请求参数(用户名)
  //2.调用业务, 检查用户名是否存在
  //3. 判断是否存在, 给前端响应
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>创建UserService</p></li><li><p>创建UserDao</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from user where username = ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="四-代码实现" tabindex="-1"><a class="header-anchor" href="#四-代码实现" aria-hidden="true">#</a> 四，代码实现</h3><h4 id="_1-环境的准备" tabindex="-1"><a class="header-anchor" href="#_1-环境的准备" aria-hidden="true">#</a> 1.环境的准备</h4><ul><li><p>创建数据库和表</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create database web36;
use web36;
create table user(
	id int primary key auto_increment,
	username varchar(20),
	password varchar(20),
	email varchar(50),
	phone varchar(20)
);
insert into user values (null,&#39;aaa&#39;,&#39;123&#39;,&#39;aaa@163.com&#39;,&#39;15845612356&#39;);
insert into user values (null,&#39;bbb&#39;,&#39;123&#39;,&#39;bbb@qq.com&#39;,&#39;15845612356&#39;);
insert into user values (null,&#39;ccc&#39;,&#39;123&#39;,&#39;ccc@163.com&#39;,&#39;15845612356&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建实体类</p><pre><code>  public class User implements Serializable{

      private int id;
      private String username;
      private String password;
      private String email;
      private String phone;

      public int getId() {
          return id;
      }

      public void setId(int id) {
          this.id = id;
      }

      public String getUsername() {
          return username;
      }

      public void setUsername(String username) {
          this.username = username;
      }

      public String getPassword() {
          return password;
      }

      public void setPassword(String password) {
          this.password = password;
      }

      public String getEmail() {
          return email;
      }

      public void setEmail(String email) {
          this.email = email;
      }

      public String getPhone() {
          return phone;
      }

      public void setPhone(String phone) {
          this.phone = phone;
      }

      @Override
      public String toString() {
          return &quot;User{&quot; +
                  &quot;id=&quot; + id +
                  &quot;, username=&#39;&quot; + username + &#39;\\&#39;&#39; +
                  &quot;, password=&#39;&quot; + password + &#39;\\&#39;&#39; +
                  &quot;, email=&#39;&quot; + email + &#39;\\&#39;&#39; +
                  &quot;, phone=&#39;&quot; + phone + &#39;\\&#39;&#39; +
                  &#39;}&#39;;
      }
  }
</code></pre></li><li><p>导入jar包 (驱动,c3p0,jdbctemplate)</p></li><li><p>引入工具类(C3P0Utils),配置文件(c3p0-config.xml)</p></li><li><p>页面的准备</p></li></ul><h4 id="_2-代码实现" tabindex="-1"><a class="header-anchor" href="#_2-代码实现" aria-hidden="true">#</a> 2.代码实现</h4><ul><li>页面</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
    //给用户名输入框设置失去焦点(onblur)事件,创建一个checkUserName()的函数响应这个事件
    function checkUserName(obj) {
        //1.获得用户输入的用户名
        var username =  obj.value;

        //2.使用JS的Ajax请求服务器(需要把用户名传过去)
        //a.创建异步请求对象 xmlHttpRequest
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
        }
        //b.打开连接
        xmlhttp.open(&quot;get&quot;, &quot;../userServlet?username=&quot;+username);
        //c. 发送请求
        xmlhttp.send();
        //d.设置异步请求对象的状态改变触发的函数
        xmlhttp.onreadystatechange= function () {
            if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200){
                var flag =  xmlhttp.responseText; //获得服务器响应的结果, 判断用户名是否被占用, 给用户提示
                if (flag == &quot;true&quot;){
                    //可以使用
                    document.getElementById(&quot;usernamespan&quot;).innerHTML = &quot;&lt;font color=&#39;green&#39;&gt;恭喜!用户名可用!&lt;/font&gt;&quot;;
                }else{
                    //不可以使用
                    document.getElementById(&quot;usernamespan&quot;).innerHTML = &quot;&lt;font color=&#39;red&#39;&gt;用户名已经被占用!&lt;/font&gt;&quot;;
                }

            }
        }

    }
    
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserServlet</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@WebServlet(&quot;/userServlet&quot;)
public class UserServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1. 获得请求参数(用户名)
        String username = request.getParameter(&quot;username&quot;);
        //2.调用业务, 检查用户名是否存在
        UserService userService = new UserService();
        boolean isExist =  userService.checkUserName(username);
        //3. 判断是否存在, 给前端响应
        if(isExist){
            //存在, 不可用
            response.getWriter().print(false);
        }else{
            //不存在, 可用
            response.getWriter().print(true);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserServie</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class UserService {


    public boolean checkUserName(String username) {
        //调用Dao, 判断
        UserDao userDao = new UserDao();
        User user =  userDao.findByUserName(username);
        if(user != null){
            //存在
            return true;
        }else{
            //不存在
            return false;
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserDao</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
public class UserDao {

    public User findByUserName(String username) {
        try {
            JdbcTemplate jdbcTemplate = new JdbcTemplate(C3P0Utils.getDataSource());
            String sql = &quot;select * from user where username = ?&quot;;
            User user = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper&lt;&gt;(User.class), username);
            return  user; //查询的出来(存在的)
        } catch (Exception e) {
            e.printStackTrace();
            return  null; //查询不出来(不存在的)
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例二-使用jq的ajax完成用户名异步校验" tabindex="-1"><a class="header-anchor" href="#案例二-使用jq的ajax完成用户名异步校验" aria-hidden="true">#</a> 案例二:使用JQ的Ajax完成用户名异步校验</h2><h3 id="一-需求分析-1" tabindex="-1"><a class="header-anchor" href="#一-需求分析-1" aria-hidden="true">#</a> 一，需求分析</h3><p>​ 我们有一个网站，网站中都有注册的页面，当我们在注册的页面中输入用户名的时候，这个时候会提示，用户名是否存在。</p><p>​ <img src="`+n+`" alt="img" loading="lazy"></p><h3 id="二-技术分析-1" tabindex="-1"><a class="header-anchor" href="#二-技术分析-1" aria-hidden="true">#</a> 二，技术分析</h3><h4 id="_1-jquery的ajax【重点】" tabindex="-1"><a class="header-anchor" href="#_1-jquery的ajax【重点】" aria-hidden="true">#</a> 1.JQuery的Ajax【重点】</h4><h5 id="_1-1-为什么要使用jquery的ajax" tabindex="-1"><a class="header-anchor" href="#_1-1-为什么要使用jquery的ajax" aria-hidden="true">#</a> 1.1  为什么要使用JQuery的AJAX</h5><p>​ 因为传统(js里面)的AJAX的开发中，AJAX有两个主要的问题：</p><p>​ 浏览器的兼容的问题 , 编写AJAX的代码太麻烦而且很多都是雷同的。</p><p>​ 在实际的开发通常使用JQuery的Ajax</p><h5 id="_1-2jquery的ajax的api" tabindex="-1"><a class="header-anchor" href="#_1-2jquery的ajax的api" aria-hidden="true">#</a> 1.2JQuery的Ajax的API</h5><table><thead><tr><th>请求方式</th><th>语法</th></tr></thead><tbody><tr><td>GET请求</td><td>$.get(url, <em>[data]</em>, <em>[callback]</em>, <em>[type]</em>)</td></tr><tr><td><strong>POST请求</strong></td><td>$.post(url, <em>[data]</em>, <em>[callback]</em>, <em>[type]</em>)</td></tr><tr><td><strong>AJAX请求</strong></td><td>$.ajax([settings])</td></tr><tr><td>GET请求(3.0新特性)</td><td>$.get([settings])</td></tr><tr><td>POST请求(3.0新特性)</td><td>$.post([settings])</td></tr></tbody></table><h4 id="_2-入门" tabindex="-1"><a class="header-anchor" href="#_2-入门" aria-hidden="true">#</a> 2.入门</h4><h5 id="_2-1get" tabindex="-1"><a class="header-anchor" href="#_2-1get" aria-hidden="true">#</a> 2.1get()</h5><ul><li><p>get方式, 语法 <code>$.get(url, [data], [callback], [type]);</code></p><table><thead><tr><th>参数名称</th><th>解释</th></tr></thead><tbody><tr><td>url</td><td>请求的服务器端url地址</td></tr><tr><td>data</td><td>发送给服务器端的请求参数，格式可以是key=value，也可以是js对象</td></tr><tr><td>callback</td><td>当请求成功后的回掉函数，可以在函数体中编写我们的逻辑代码</td></tr><tr><td>type</td><td>预期的返回数据的类型，取值可以是 xml, html, script, json, text, _defaul等</td></tr></tbody></table></li><li><p>实例</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(&quot;#btn1&quot;).click(function(){
  		//发送请求; $.get(url,[params],[function(result){}])

  		$.get(&quot;{pageContext.request.contextPath }/demo01&quot;,		{&quot;username&quot;:&quot;zs&quot;,&quot;password&quot;:&quot;123456&quot;},function(result){	
  			alert(result);

  		});

  	});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2post" tabindex="-1"><a class="header-anchor" href="#_2-2post" aria-hidden="true">#</a> 2.2post()</h5><ul><li><p>post方式, 语法 <code>$.post(url, [data], [callback], [type])</code></p><table><thead><tr><th>参数名称</th><th>解释</th></tr></thead><tbody><tr><td>url</td><td>请求的服务器端url地址</td></tr><tr><td>data</td><td>发送给服务器端的请求参数，格式可以是key=value，也可以是js对象</td></tr><tr><td>callback</td><td>当请求成功后的回掉函数，可以在函数体中编写我们的逻辑代码</td></tr><tr><td>type</td><td>预期的返回数据的类型，取值可以是 xml, html, script, json, text, _defaul等</td></tr></tbody></table></li><li><p>实例</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  	$(&quot;#btn2&quot;).click(function(){

  		//发送请求; $.post(url,[params],[function(result){}])

  		$.post(&quot;{pageContext.request.contextPath }/demo01&quot;,{&quot;username&quot;:&quot;zs&quot;,&quot;password&quot;:&quot;123456&quot;},function(result){

  			alert(result);

  		});

  	});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3ajax" tabindex="-1"><a class="header-anchor" href="#_2-3ajax" aria-hidden="true">#</a> 2.3ajax()</h5><ul><li><p>语法 <code>$.ajax([settings])</code></p><p>其中，settings是一个js字面量形式的对象，格式是{name:value,name:value... ...}，常用的name属性名如下</p><table><thead><tr><th>属性名称</th><th>解释</th></tr></thead><tbody><tr><td>url</td><td>请求的服务器端url地址</td></tr><tr><td>async</td><td>(默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false</td></tr><tr><td>data</td><td>发送到服务器的数据，可以是键值对形式，也可以是js对象形式</td></tr><tr><td>type</td><td>(默认: &quot;GET&quot;) 请求方式 (&quot;POST&quot; 或 &quot;GET&quot;)， 默认为 &quot;GET&quot;</td></tr><tr><td>dataType</td><td>预期的返回数据的类型，取值可以是 xml, html, script, json, text, _defaul等</td></tr><tr><td>success</td><td>请求成功后的回调函数</td></tr><tr><td>error</td><td>请求失败时调用此函数</td></tr></tbody></table></li><li><p>实例</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sendRequest(){
		$.ajax({
			url:&quot;/AjaxDemo/ajaxServlet&quot;,
			async:true,
			data:&quot;name=haohao&amp;age=33&quot;,
			type:&quot;GET&quot;,
			dataType:&quot;text&quot;,
			success:function(data){
				alert(data);
			},
			error:function(){
				alert(&quot;数据没有成功返回!&quot;)
			}
		});
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-思路分析-1" tabindex="-1"><a class="header-anchor" href="#三-思路分析-1" aria-hidden="true">#</a> 三,思路分析</h3><figure><img src="`+i+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><p>创建页面和数据库</p></li><li><p>给用户名输入框设置失去焦点事件(jq对象.blur(function(){}))</p></li><li><p>在函数里面:</p><p>​ 获得用户输入的用户名</p><p>​ <strong>通过JQ发送Ajax请求CheckServlet(带用户名请求参数)</strong></p></li><li><p>在CheckServlet的doGet()方法里面</p><p>​ 获得请求参数(用户名)</p><p>​ 调用业务,根据用户名获得用户对象</p><p>​ 判断,给前端响应</p></li></ol><h3 id="四-代码实现-1" tabindex="-1"><a class="header-anchor" href="#四-代码实现-1" aria-hidden="true">#</a> 四，代码实现</h3><h2 id="案例三-能够完成自动补全的案例-返回json数据" tabindex="-1"><a class="header-anchor" href="#案例三-能够完成自动补全的案例-返回json数据" aria-hidden="true">#</a> 案例三：能够完成自动补全的案例(返回JSON数据)</h2><h3 id="一-需求分析-2" tabindex="-1"><a class="header-anchor" href="#一-需求分析-2" aria-hidden="true">#</a> 一，需求分析</h3><p>​ 实现一个搜索页面，在文本框中输入一个值以后(键盘抬起的时候)，给出一些提示</p><p>​ <img src="'+l+'" alt="img" loading="lazy"></p><h3 id="二-技术分析-2" tabindex="-1"><a class="header-anchor" href="#二-技术分析-2" aria-hidden="true">#</a> 二，技术分析</h3><h4 id="_1-json" tabindex="-1"><a class="header-anchor" href="#_1-json" aria-hidden="true">#</a> 1.JSON</h4><h5 id="_1-1什么是json" tabindex="-1"><a class="header-anchor" href="#_1-1什么是json" aria-hidden="true">#</a> 1.1什么是JSON</h5><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><p>用我们自己的话来说: JSON就是一个容易生成和解析的数据格式;</p><p>​ 常用作客户端(前端,IOS,安卓)和服务器(JavaEE)之间的数据交换</p></li></ul><h5 id="_1-2-json数据格式" tabindex="-1"><a class="header-anchor" href="#_1-2-json数据格式" aria-hidden="true">#</a> 1.2. JSON数据格式</h5><table><thead><tr><th>类型</th><th>语法</th><th>解释</th></tr></thead><tbody><tr><td>JSON对象</td><td><code>{name:value,name:value...}</code></td><td>其中name是字符串类型，而value是任意类型</td></tr><tr><td>JSON数组</td><td><code>[value,value,value...]</code></td><td>其中value是任意类型</td></tr><tr><td>混合类型</td><td><code>[{},{}... ...] 或 {key:[]... ...}</code></td><td>合理包裹嵌套对象类型和数组类</td></tr></tbody></table><h4 id="_2-json的转换工具" tabindex="-1"><a class="header-anchor" href="#_2-json的转换工具" aria-hidden="true">#</a> 2.json的转换工具</h4><h5 id="_2-1json转换工具的概述" tabindex="-1"><a class="header-anchor" href="#_2-1json转换工具的概述" aria-hidden="true">#</a> 2.1json转换工具的概述</h5><p>​ json的转换工具是通过java封装好的一些jar工具包，直接将java对象或集合转换成json格式的字符串。</p><h5 id="_2-2常见的json转换工具" tabindex="-1"><a class="header-anchor" href="#_2-2常见的json转换工具" aria-hidden="true">#</a> 2.2常见的json转换工具</h5><table><thead><tr><th>工具名称</th><th>介绍</th></tr></thead><tbody><tr><td>Jsonlib</td><td>Java 类库，需要导入的jar包较多</td></tr><tr><td>Gson</td><td>google提供的一个简单的json转换工具</td></tr><tr><td>Fastjson</td><td>alibaba技术团队提供的一个高性能的json转换工具</td></tr><tr><td>Jackson</td><td>开源免费的json转换工具，springmvc转换默认使用jackson</td></tr></tbody></table><h5 id="_2-3jackson的使用" tabindex="-1"><a class="header-anchor" href="#_2-3jackson的使用" aria-hidden="true">#</a> 2.3Jackson的使用</h5><ul><li>导入jar</li></ul><figure><img src="'+o+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>使用jackson的ObjectMapper对象的writeValueAsString方法进行转换</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ObjectMapper om = new ObjectMapper();
String jsonStr =  om.writeValueAsString(java对象);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>java对象对应的json格式</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JavaBean对象 eg: user对象 -----&gt; {}  把JavaBean对象的属性作为key
Map对象                   -----&gt; {}  把map的key作为key
List					 -----&gt; []		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-思路分析-2" tabindex="-1"><a class="header-anchor" href="#三-思路分析-2" aria-hidden="true">#</a> 三,思路分析</h3><figure><img src="`+c+`" alt="1534651673743" tabindex="0" loading="lazy"><figcaption>1534651673743</figcaption></figure><ol><li><p>创建数据库和页面</p></li><li><p>在页面上,给输入框设置一个键盘抬起<code>(keyup(function(){}))</code>事件,创建函数响应这个事件</p></li><li><p>在这个函数里面:</p><p>​ //获得输入框里面用户输入的关键词</p><p>​ //是JQ的Ajax请求服务器(随带关键词请求参数)</p><p>​ //获得服务器响应的数据(json数组), 解析数据, 填充页面</p></li><li><p>创建 WordServlet,在doGet()方法里面</p><p>​ //获得请求参数(关键词)</p><p>​ //调用业务, 根据关键词获得词语的数据 <code>List&lt;word&gt; list</code></p><p>​ //把list通过jackson转成JSON数组,响应给前端</p></li><li><p>创建WordService</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span>  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Word</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>

	<span class="token comment">//调用Dao,查询数据库</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p></li><li><p>创建WordDao</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span>  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Word</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>

		<span class="token comment">//sql = &quot;select * from 表 where word like ? limit 0,5&quot;;</span>

	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="四-代码实现-2" tabindex="-1"><a class="header-anchor" href="#四-代码实现-2" aria-hidden="true">#</a> 四，代码实现</h3><h4 id="_1-环境的准备-1" tabindex="-1"><a class="header-anchor" href="#_1-环境的准备-1" aria-hidden="true">#</a> 1.环境的准备</h4><ul><li><p>创建数据库</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> words<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    word <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;application&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;applet&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;animal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;back&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;bad&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;bag&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;ball&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;bear&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;bike&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;careful&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;cheese&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;come&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;dance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;day&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;dirty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;duck&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;east&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;every&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> words <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建JavaBean</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.itheima.bean;

import java.io.Serializable;

public class Words implements Serializable{


    private int id;
    private String word;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    @Override
    public String toString() {
        return &quot;Words{&quot; +
                &quot;id=&quot; + id +
                &quot;, word=&#39;&quot; + word + &#39;\\&#39;&#39; +
                &#39;}&#39;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导入jar,工具类, 配置文件</p></li><li><p>创建页面,search.jsp</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
	pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;center&gt;

		&lt;h1&gt;黑马&lt;/h1&gt;

		&lt;input id=&quot;inputId&quot; type=&quot;text&quot; style=&quot;width: 500px; height: 38px;&quot; /&gt;&lt;input
			type=&quot;button&quot; style=&quot;height: 38px;&quot; value=&quot;黑马一下&quot; /&gt;
		&lt;div id=&quot;divId&quot;
			style=&quot;width: 500px; border: 1px red solid; height: 300px; position: absolute; left: 394px;&quot;&gt;
			&lt;table id=&quot;tabId&quot; width=&quot;100%&quot; height=&quot;100%&quot;  border=&quot;1px&quot;&gt;
				&lt;tr&gt;&lt;td&gt;aaaa&lt;/td&gt;&lt;/tr&gt;
				&lt;tr&gt;&lt;td&gt;bbbb&lt;/td&gt;&lt;/tr&gt;
				&lt;tr&gt;&lt;td&gt;cccc&lt;/td&gt;&lt;/tr&gt;
				&lt;tr&gt;&lt;td&gt;dddd&lt;/td&gt;&lt;/tr&gt;
				&lt;tr&gt;&lt;td&gt;eeee&lt;/td&gt;&lt;/tr&gt;
			&lt;/table&gt;
		&lt;/div&gt;

	&lt;/center&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,117),b=[m];function h(g,x){return r(),u("div",null,b)}const q=d(k,[["render",h],["__file","index.html.vue"]]);export{q as default};
