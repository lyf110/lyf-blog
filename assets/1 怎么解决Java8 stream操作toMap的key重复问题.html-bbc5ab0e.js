const a=JSON.parse('{"key":"v-960df8a4","path":"/interview/Lambda/1%20%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3Java8%20stream%E6%93%8D%E4%BD%9CtoMap%E7%9A%84key%E9%87%8D%E5%A4%8D%E9%97%AE%E9%A2%98.html","title":"一、stream操作toMap的key重复问题","lang":"zh-CN","frontmatter":{"title":"一、stream操作toMap的key重复问题","date":"2023-04-11T09:31:49.000Z","order":1,"category":["Lambda","面试题"],"tag":["Lambda","面试题"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"怎么解决Java8 stream操作toMap的key重复问题 1 java.util.stream.Collectors#toMap 接口说明 public static &lt;T, K, U&gt; Collector&lt;T, ?, Map&lt;K,U&gt;&gt; toMap(Function&lt;? super T, ? extends K&gt; keyMapper, Function&lt;? super T, ? extends U&gt; valueMapper, BinaryOperator&lt;U&gt; mergeFunction) { return toMap(keyMapper, valueMapper, mergeFunction, HashMap::new); }","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/interview/Lambda/1%20%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3Java8%20stream%E6%93%8D%E4%BD%9CtoMap%E7%9A%84key%E9%87%8D%E5%A4%8D%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、stream操作toMap的key重复问题"}],["meta",{"property":"og:description","content":"怎么解决Java8 stream操作toMap的key重复问题 1 java.util.stream.Collectors#toMap 接口说明 public static &lt;T, K, U&gt; Collector&lt;T, ?, Map&lt;K,U&gt;&gt; toMap(Function&lt;? super T, ? extends K&gt; keyMapper, Function&lt;? super T, ? extends U&gt; valueMapper, BinaryOperator&lt;U&gt; mergeFunction) { return toMap(keyMapper, valueMapper, mergeFunction, HashMap::new); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"Lambda"}],["meta",{"property":"article:tag","content":"面试题"}],["meta",{"property":"article:published_time","content":"2023-04-11T09:31:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、stream操作toMap的key重复问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-11T09:31:49.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1 java.util.stream.Collectors#toMap 接口说明","slug":"_1-java-util-stream-collectors-tomap-接口说明","link":"#_1-java-util-stream-collectors-tomap-接口说明","children":[]},{"level":2,"title":"2 案例演示-1","slug":"_2-案例演示-1","link":"#_2-案例演示-1","children":[{"level":3,"title":"2.1 测试代码","slug":"_2-1-测试代码","link":"#_2-1-测试代码","children":[]},{"level":3,"title":"2.2 运行结果","slug":"_2-2-运行结果","link":"#_2-2-运行结果","children":[]}]},{"level":2,"title":"3 案例演示-2","slug":"_3-案例演示-2","link":"#_3-案例演示-2","children":[{"level":3,"title":"3.1 测试代码","slug":"_3-1-测试代码","link":"#_3-1-测试代码","children":[]},{"level":3,"title":"3.2 运行结果","slug":"_3-2-运行结果","link":"#_3-2-运行结果","children":[]}]},{"level":2,"title":"4 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.97,"words":890},"filePathRelative":"interview/Lambda/1 怎么解决Java8 stream操作toMap的key重复问题.md","localizedDate":"2023年4月11日","excerpt":"<h1> 怎么解决Java8 stream操作toMap的key重复问题</h1>\\n<h2> 1 java.util.stream.Collectors#toMap 接口说明</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token class-name\\">Collector</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Map</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">toMap</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Function</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span> <span class=\\"token keyword\\">super</span> <span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">?</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">&gt;</span></span> keyMapper<span class=\\"token punctuation\\">,</span>\\n                                    <span class=\\"token class-name\\">Function</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span> <span class=\\"token keyword\\">super</span> <span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">?</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> valueMapper<span class=\\"token punctuation\\">,</span>\\n                                    <span class=\\"token class-name\\">BinaryOperator</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> mergeFunction<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">toMap</span><span class=\\"token punctuation\\">(</span>keyMapper<span class=\\"token punctuation\\">,</span> valueMapper<span class=\\"token punctuation\\">,</span> mergeFunction<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HashMap</span><span class=\\"token operator\\">::</span><span class=\\"token keyword\\">new</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{a as data};
