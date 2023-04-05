const t=JSON.parse('{"key":"v-248fdb24","path":"/notes/database/mysql/heima2022/base/06%20MySQL%E4%BA%8B%E5%8A%A1.html","title":"六、MySQL事务","lang":"zh-CN","frontmatter":{"title":"六、MySQL事务","date":"2023-04-03T21:29:40.000Z","order":6,"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"category":["MySQL","数据库"],"tag":["MySQL","数据库"],"description":"6. 事务 6.1 事务简介 事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。 就比如: 张三给李四转账1000块钱，张三银行账户的钱减少1000，而李四银行账户的钱要增加 1000。 这一组操作就必须在一个事务的范围内，要么都成功，要么都失败。 正常情况: 转账这个操作, 需要分为以下这么三步来完成 , 三步完成之后, 张三减少1000, 而李四 增加1000, 转账成功 :","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/database/mysql/heima2022/base/06%20MySQL%E4%BA%8B%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"六、MySQL事务"}],["meta",{"property":"og:description","content":"6. 事务 6.1 事务简介 事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。 就比如: 张三给李四转账1000块钱，张三银行账户的钱减少1000，而李四银行账户的钱要增加 1000。 这一组操作就必须在一个事务的范围内，要么都成功，要么都失败。 正常情况: 转账这个操作, 需要分为以下这么三步来完成 , 三步完成之后, 张三减少1000, 而李四 增加1000, 转账成功 :"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"六、MySQL事务"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:published_time","content":"2023-04-03T21:29:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"六、MySQL事务\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-03T21:29:40.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"6. 事务","slug":"_6-事务","link":"#_6-事务","children":[{"level":3,"title":"6.1 事务简介","slug":"_6-1-事务简介","link":"#_6-1-事务简介","children":[]},{"level":3,"title":"6.2 事务操作","slug":"_6-2-事务操作","link":"#_6-2-事务操作","children":[]},{"level":3,"title":"6.3 事务四大特性","slug":"_6-3-事务四大特性","link":"#_6-3-事务四大特性","children":[]},{"level":3,"title":"6.4 并发事务问题","slug":"_6-4-并发事务问题","link":"#_6-4-并发事务问题","children":[]},{"level":3,"title":"6.5 事务隔离级别","slug":"_6-5-事务隔离级别","link":"#_6-5-事务隔离级别","children":[]}]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":4.58,"words":1374},"filePathRelative":"notes/database/mysql/heima2022/base/06 MySQL事务.md","localizedDate":"2023年4月4日","excerpt":"<h2> 6. 事务</h2>\\n<h3> 6.1 事务简介</h3>\\n<p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>\\n<p>就比如: 张三给李四转账1000块钱，张三银行账户的钱减少1000，而李四银行账户的钱要增加</p>\\n<p>1000。 这一组操作就必须在一个事务的范围内，要么都成功，要么都失败。</p>\\n<figure><figcaption></figcaption></figure>\\n<p>正常情况: 转账这个操作, 需要分为以下这么三步来完成 , 三步完成之后, 张三减少1000, 而李四 增加1000, 转账成功 :</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{t as data};
