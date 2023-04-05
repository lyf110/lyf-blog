const e=JSON.parse('{"key":"v-264135b5","path":"/notes/cloud/elasticsearch/2022/%E5%88%86%E5%B8%83%E5%BC%8F%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E01.html","title":"一、Elasticsearch-01","lang":"zh-CN","frontmatter":{"title":"一、Elasticsearch-01","date":"2023-04-02T10:38:46.000Z","order":1,"category":["微服务","中间件","分布式搜索","Elasticsearch"],"tag":["微服务","中间件","分布式搜索","Elasticsearch"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"分布式搜索引擎01 -- elasticsearch基础 0.学习目标 1.初识elasticsearch 1.1.了解ES 1.1.1.elasticsearch的作用 elasticsearch是一款非常强大的开源搜索引擎，具备非常多强大功能，可以帮助我们从海量数据中快速找到需要的内容 例如： 在GitHub搜索代码 image-20210720193623245 在电商网站搜索商品 image-20210720193633483 在百度搜索答案 image-20210720193641907 在打车软件搜索附近的车 image-20210720193648044","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/cloud/elasticsearch/2022/%E5%88%86%E5%B8%83%E5%BC%8F%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E01.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、Elasticsearch-01"}],["meta",{"property":"og:description","content":"分布式搜索引擎01 -- elasticsearch基础 0.学习目标 1.初识elasticsearch 1.1.了解ES 1.1.1.elasticsearch的作用 elasticsearch是一款非常强大的开源搜索引擎，具备非常多强大功能，可以帮助我们从海量数据中快速找到需要的内容 例如： 在GitHub搜索代码 image-20210720193623245 在电商网站搜索商品 image-20210720193633483 在百度搜索答案 image-20210720193641907 在打车软件搜索附近的车 image-20210720193648044"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一、Elasticsearch-01"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"分布式搜索"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、Elasticsearch-01\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1.1.了解ES","slug":"_1-1-了解es","link":"#_1-1-了解es","children":[{"level":3,"title":"1.1.1.elasticsearch的作用","slug":"_1-1-1-elasticsearch的作用","link":"#_1-1-1-elasticsearch的作用","children":[]},{"level":3,"title":"1.1.2.ELK技术栈","slug":"_1-1-2-elk技术栈","link":"#_1-1-2-elk技术栈","children":[]},{"level":3,"title":"1.1.3.elasticsearch和lucene","slug":"_1-1-3-elasticsearch和lucene","link":"#_1-1-3-elasticsearch和lucene","children":[]},{"level":3,"title":"1.1.4.为什么不是其他搜索技术？","slug":"_1-1-4-为什么不是其他搜索技术","link":"#_1-1-4-为什么不是其他搜索技术","children":[]},{"level":3,"title":"1.1.5.总结","slug":"_1-1-5-总结","link":"#_1-1-5-总结","children":[]}]},{"level":2,"title":"1.2.倒排索引","slug":"_1-2-倒排索引","link":"#_1-2-倒排索引","children":[{"level":3,"title":"1.2.1.正向索引","slug":"_1-2-1-正向索引","link":"#_1-2-1-正向索引","children":[]},{"level":3,"title":"1.2.2.倒排索引","slug":"_1-2-2-倒排索引","link":"#_1-2-2-倒排索引","children":[]},{"level":3,"title":"1.2.3.正向和倒排","slug":"_1-2-3-正向和倒排","link":"#_1-2-3-正向和倒排","children":[]}]},{"level":2,"title":"1.3.es的一些概念","slug":"_1-3-es的一些概念","link":"#_1-3-es的一些概念","children":[{"level":3,"title":"1.3.1.文档和字段","slug":"_1-3-1-文档和字段","link":"#_1-3-1-文档和字段","children":[]},{"level":3,"title":"1.3.2.索引和映射","slug":"_1-3-2-索引和映射","link":"#_1-3-2-索引和映射","children":[]},{"level":3,"title":"1.3.3.mysql与elasticsearch","slug":"_1-3-3-mysql与elasticsearch","link":"#_1-3-3-mysql与elasticsearch","children":[]}]},{"level":2,"title":"1.4.安装es、kibana","slug":"_1-4-安装es、kibana","link":"#_1-4-安装es、kibana","children":[{"level":3,"title":"1.4.1.安装","slug":"_1-4-1-安装","link":"#_1-4-1-安装","children":[]},{"level":3,"title":"1.4.2.分词器","slug":"_1-4-2-分词器","link":"#_1-4-2-分词器","children":[]},{"level":3,"title":"1.4.3.总结","slug":"_1-4-3-总结","link":"#_1-4-3-总结","children":[]}]},{"level":2,"title":"2.1.mapping映射属性","slug":"_2-1-mapping映射属性","link":"#_2-1-mapping映射属性","children":[]},{"level":2,"title":"2.2.索引库的CRUD","slug":"_2-2-索引库的crud","link":"#_2-2-索引库的crud","children":[{"level":3,"title":"2.2.1.创建索引库和映射","slug":"_2-2-1-创建索引库和映射","link":"#_2-2-1-创建索引库和映射","children":[]},{"level":3,"title":"2.2.2.查询索引库","slug":"_2-2-2-查询索引库","link":"#_2-2-2-查询索引库","children":[]},{"level":3,"title":"2.2.3.修改索引库","slug":"_2-2-3-修改索引库","link":"#_2-2-3-修改索引库","children":[]},{"level":3,"title":"2.2.4.删除索引库","slug":"_2-2-4-删除索引库","link":"#_2-2-4-删除索引库","children":[]},{"level":3,"title":"2.2.5.总结","slug":"_2-2-5-总结","link":"#_2-2-5-总结","children":[]}]},{"level":2,"title":"3.1.新增文档","slug":"_3-1-新增文档","link":"#_3-1-新增文档","children":[]},{"level":2,"title":"3.2.查询文档","slug":"_3-2-查询文档","link":"#_3-2-查询文档","children":[]},{"level":2,"title":"3.3.删除文档","slug":"_3-3-删除文档","link":"#_3-3-删除文档","children":[]},{"level":2,"title":"3.4.修改文档","slug":"_3-4-修改文档","link":"#_3-4-修改文档","children":[{"level":3,"title":"3.4.1.全量修改","slug":"_3-4-1-全量修改","link":"#_3-4-1-全量修改","children":[]},{"level":3,"title":"3.4.2.增量修改","slug":"_3-4-2-增量修改","link":"#_3-4-2-增量修改","children":[]}]},{"level":2,"title":"3.5.总结","slug":"_3-5-总结","link":"#_3-5-总结","children":[]},{"level":2,"title":"4.0.导入Demo工程","slug":"_4-0-导入demo工程","link":"#_4-0-导入demo工程","children":[{"level":3,"title":"4.0.1.导入数据","slug":"_4-0-1-导入数据","link":"#_4-0-1-导入数据","children":[]},{"level":3,"title":"4.0.2.导入项目","slug":"_4-0-2-导入项目","link":"#_4-0-2-导入项目","children":[]},{"level":3,"title":"4.0.3.mapping映射分析","slug":"_4-0-3-mapping映射分析","link":"#_4-0-3-mapping映射分析","children":[]},{"level":3,"title":"4.0.4.初始化RestClient","slug":"_4-0-4-初始化restclient","link":"#_4-0-4-初始化restclient","children":[]}]},{"level":2,"title":"4.1.创建索引库","slug":"_4-1-创建索引库","link":"#_4-1-创建索引库","children":[{"level":3,"title":"4.1.1.代码解读","slug":"_4-1-1-代码解读","link":"#_4-1-1-代码解读","children":[]},{"level":3,"title":"4.1.2.完整示例","slug":"_4-1-2-完整示例","link":"#_4-1-2-完整示例","children":[]}]},{"level":2,"title":"4.2.删除索引库","slug":"_4-2-删除索引库","link":"#_4-2-删除索引库","children":[]},{"level":2,"title":"4.3.判断索引库是否存在","slug":"_4-3-判断索引库是否存在","link":"#_4-3-判断索引库是否存在","children":[]},{"level":2,"title":"4.4.总结","slug":"_4-4-总结","link":"#_4-4-总结","children":[]},{"level":2,"title":"5.1.新增文档","slug":"_5-1-新增文档","link":"#_5-1-新增文档","children":[{"level":3,"title":"5.1.1.索引库实体类","slug":"_5-1-1-索引库实体类","link":"#_5-1-1-索引库实体类","children":[]},{"level":3,"title":"5.1.2.语法说明","slug":"_5-1-2-语法说明","link":"#_5-1-2-语法说明","children":[]},{"level":3,"title":"5.1.3.完整代码","slug":"_5-1-3-完整代码","link":"#_5-1-3-完整代码","children":[]}]},{"level":2,"title":"5.2.查询文档","slug":"_5-2-查询文档","link":"#_5-2-查询文档","children":[{"level":3,"title":"5.2.1.语法说明","slug":"_5-2-1-语法说明","link":"#_5-2-1-语法说明","children":[]},{"level":3,"title":"5.2.2.完整代码","slug":"_5-2-2-完整代码","link":"#_5-2-2-完整代码","children":[]}]},{"level":2,"title":"5.3.删除文档","slug":"_5-3-删除文档","link":"#_5-3-删除文档","children":[]},{"level":2,"title":"5.4.修改文档","slug":"_5-4-修改文档","link":"#_5-4-修改文档","children":[{"level":3,"title":"5.4.1.语法说明","slug":"_5-4-1-语法说明","link":"#_5-4-1-语法说明","children":[]},{"level":3,"title":"5.4.2.完整代码","slug":"_5-4-2-完整代码","link":"#_5-4-2-完整代码","children":[]}]},{"level":2,"title":"5.5.批量导入文档","slug":"_5-5-批量导入文档","link":"#_5-5-批量导入文档","children":[{"level":3,"title":"5.5.1.语法说明","slug":"_5-5-1-语法说明","link":"#_5-5-1-语法说明","children":[]},{"level":3,"title":"5.5.2.完整代码","slug":"_5-5-2-完整代码","link":"#_5-5-2-完整代码","children":[]}]},{"level":2,"title":"5.6.小结","slug":"_5-6-小结","link":"#_5-6-小结","children":[]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":22.43,"words":6729},"filePathRelative":"notes/cloud/elasticsearch/2022/分布式搜索引擎01.md","localizedDate":"2023年4月2日","excerpt":"<h1> 分布式搜索引擎01</h1>\\n<p>-- elasticsearch基础</p>\\n<h1> 0.学习目标</h1>\\n<h1> 1.初识elasticsearch</h1>\\n<h2> 1.1.了解ES</h2>\\n<h3> 1.1.1.elasticsearch的作用</h3>\\n<p>elasticsearch是一款非常强大的开源搜索引擎，具备非常多强大功能，可以帮助我们从海量数据中快速找到需要的内容</p>\\n<p>例如：</p>\\n<ul>\\n<li>\\n<p>在GitHub搜索代码</p>\\n<figure><figcaption>image-20210720193623245</figcaption></figure>\\n</li>\\n<li>\\n<p>在电商网站搜索商品</p>\\n<figure><figcaption>image-20210720193633483</figcaption></figure>\\n</li>\\n<li>\\n<p>在百度搜索答案</p>\\n<figure><figcaption>image-20210720193641907</figcaption></figure>\\n</li>\\n<li>\\n<p>在打车软件搜索附近的车</p>\\n<figure><figcaption>image-20210720193648044</figcaption></figure>\\n</li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
