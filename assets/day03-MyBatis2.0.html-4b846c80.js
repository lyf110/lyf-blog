const t=JSON.parse('{"key":"v-cac67ab6","path":"/notes/ssm/mybatis/day03-MyBatis2.0.html","title":"三、MyBatis-day03","lang":"zh-CN","frontmatter":{"title":"三、MyBatis-day03","date":"2023-04-02T10:38:46.000Z","order":3,"category":["ssm","Mybatis","数据库中间件"],"tag":["ssm","Mybatis","数据库中间件"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"day03-MyBatis 学习目标 掌握Mybatis的延迟加载 掌握Mybatis缓存 掌握Mybatis注解开发","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/ssm/mybatis/day03-MyBatis2.0.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"三、MyBatis-day03"}],["meta",{"property":"og:description","content":"day03-MyBatis 学习目标 掌握Mybatis的延迟加载 掌握Mybatis缓存 掌握Mybatis注解开发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"三、MyBatis-day03"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"ssm"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:tag","content":"数据库中间件"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三、MyBatis-day03\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"知识点-Mybatis 延迟加载策略","slug":"知识点-mybatis-延迟加载策略","link":"#知识点-mybatis-延迟加载策略","children":[{"level":3,"title":"1.目标","slug":"_1-目标","link":"#_1-目标","children":[]},{"level":3,"title":"2.路径","slug":"_2-路径","link":"#_2-路径","children":[]},{"level":3,"title":"3.讲解","slug":"_3-讲解","link":"#_3-讲解","children":[]},{"level":3,"title":"4.总结","slug":"_4-总结","link":"#_4-总结","children":[]}]},{"level":2,"title":"知识点-缓存概述","slug":"知识点-缓存概述","link":"#知识点-缓存概述","children":[{"level":3,"title":"1.目标","slug":"_1-目标-1","link":"#_1-目标-1","children":[]},{"level":3,"title":"2.路径","slug":"_2-路径-1","link":"#_2-路径-1","children":[]},{"level":3,"title":"3.讲解","slug":"_3-讲解-1","link":"#_3-讲解-1","children":[]},{"level":3,"title":"4.小结","slug":"_4-小结","link":"#_4-小结","children":[]}]},{"level":2,"title":"知识点-一级缓存","slug":"知识点-一级缓存","link":"#知识点-一级缓存","children":[{"level":3,"title":"1.目标","slug":"_1-目标-2","link":"#_1-目标-2","children":[]},{"level":3,"title":"2.路径","slug":"_2-路径-2","link":"#_2-路径-2","children":[]},{"level":3,"title":"3.讲解","slug":"_3-讲解-2","link":"#_3-讲解-2","children":[]},{"level":3,"title":"4.小结","slug":"_4-小结-1","link":"#_4-小结-1","children":[]}]},{"level":2,"title":"知识点-二级缓存","slug":"知识点-二级缓存","link":"#知识点-二级缓存","children":[{"level":3,"title":"1.目标","slug":"_1-目标-3","link":"#_1-目标-3","children":[]},{"level":3,"title":"2.路径","slug":"_2-路径-3","link":"#_2-路径-3","children":[]},{"level":3,"title":"3.讲解","slug":"_3-讲解-3","link":"#_3-讲解-3","children":[]},{"level":3,"title":"4.小结","slug":"_4-小结-2","link":"#_4-小结-2","children":[]}]},{"level":2,"title":"知识点-使用 Mybatis 注解实现基本CRUD","slug":"知识点-使用-mybatis-注解实现基本crud","link":"#知识点-使用-mybatis-注解实现基本crud","children":[{"level":3,"title":"1.目标","slug":"_1-目标-4","link":"#_1-目标-4","children":[]},{"level":3,"title":"2.分析","slug":"_2-分析","link":"#_2-分析","children":[]},{"level":3,"title":"3.实现","slug":"_3-实现","link":"#_3-实现","children":[]},{"level":3,"title":"4.小结","slug":"_4-小结-3","link":"#_4-小结-3","children":[]}]},{"level":2,"title":"知识点-使用Mybatis注解实现复杂关系映射开发","slug":"知识点-使用mybatis注解实现复杂关系映射开发","link":"#知识点-使用mybatis注解实现复杂关系映射开发","children":[{"level":3,"title":"1.目标","slug":"_1-目标-5","link":"#_1-目标-5","children":[]},{"level":3,"title":"2.路径","slug":"_2-路径-4","link":"#_2-路径-4","children":[]},{"level":3,"title":"3.讲解","slug":"_3-讲解-4","link":"#_3-讲解-4","children":[]}]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":13.58,"words":4073},"filePathRelative":"notes/ssm/mybatis/day03-MyBatis2.0.md","localizedDate":"2023年4月2日","excerpt":"<h1> day03-MyBatis</h1>\\n<h1> 学习目标</h1>\\n<ul class=\\"task-list-container\\">\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-0\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-0\\"> 掌握Mybatis的延迟加载</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-1\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-1\\"> 掌握Mybatis缓存</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-2\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-2\\"> 掌握Mybatis注解开发</label></li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{t as data};
