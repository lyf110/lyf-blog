const e=JSON.parse('{"key":"v-338d7b6c","path":"/notes/database/redis/heima2022/02.Redis-%E5%AE%9E%E6%88%98%E7%AF%87.html","title":"二、Redis-基础篇","lang":"zh-CN","frontmatter":{"title":"二、Redis-基础篇","date":"2023-04-02T10:38:46.000Z","order":2,"category":["数据库","Redis","分布式缓存","中间件"],"tag":["数据库","Redis","分布式缓存","中间件"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"实战篇Redis 开篇导读 亲爱的小伙伴们大家好，马上咱们就开始实战篇的内容了，相信通过本章的学习，小伙伴们就能理解各种redis的使用啦，接下来咱们来一起看看实战篇我们要学习一些什么样的内容 短信登录 这一块我们会使用redis共享session来实现 商户查询缓存 通过本章节，我们会理解缓存击穿，缓存穿透，缓存雪崩等问题，让小伙伴的对于这些概念的理解不仅仅是停留在概念上，更是能在代码中看到对应的内容 优惠卷秒杀","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/database/redis/heima2022/02.Redis-%E5%AE%9E%E6%88%98%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"二、Redis-基础篇"}],["meta",{"property":"og:description","content":"实战篇Redis 开篇导读 亲爱的小伙伴们大家好，马上咱们就开始实战篇的内容了，相信通过本章的学习，小伙伴们就能理解各种redis的使用啦，接下来咱们来一起看看实战篇我们要学习一些什么样的内容 短信登录 这一块我们会使用redis共享session来实现 商户查询缓存 通过本章节，我们会理解缓存击穿，缓存穿透，缓存雪崩等问题，让小伙伴的对于这些概念的理解不仅仅是停留在概念上，更是能在代码中看到对应的内容 优惠卷秒杀"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二、Redis-基础篇"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"分布式缓存"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二、Redis-基础篇\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"开篇导读","slug":"开篇导读","link":"#开篇导读","children":[]},{"level":2,"title":"1、短信登录","slug":"_1、短信登录","link":"#_1、短信登录","children":[{"level":3,"title":"1.1、导入黑马点评项目","slug":"_1-1、导入黑马点评项目","link":"#_1-1、导入黑马点评项目","children":[]},{"level":3,"title":"1.2 、基于Session实现登录流程","slug":"_1-2-、基于session实现登录流程","link":"#_1-2-、基于session实现登录流程","children":[]},{"level":3,"title":"1.3 、实现发送短信验证码功能","slug":"_1-3-、实现发送短信验证码功能","link":"#_1-3-、实现发送短信验证码功能","children":[]},{"level":3,"title":"1.4、实现登录拦截功能","slug":"_1-4、实现登录拦截功能","link":"#_1-4、实现登录拦截功能","children":[]},{"level":3,"title":"1.5、隐藏用户敏感信息","slug":"_1-5、隐藏用户敏感信息","link":"#_1-5、隐藏用户敏感信息","children":[]},{"level":3,"title":"1.6、session共享问题","slug":"_1-6、session共享问题","link":"#_1-6、session共享问题","children":[]},{"level":3,"title":"1.7 Redis代替session的业务流程","slug":"_1-7-redis代替session的业务流程","link":"#_1-7-redis代替session的业务流程","children":[]},{"level":3,"title":"1.8 基于Redis实现短信登录","slug":"_1-8-基于redis实现短信登录","link":"#_1-8-基于redis实现短信登录","children":[]},{"level":3,"title":"1.9 解决状态登录刷新问题","slug":"_1-9-解决状态登录刷新问题","link":"#_1-9-解决状态登录刷新问题","children":[]}]},{"level":2,"title":"2、商户查询缓存","slug":"_2、商户查询缓存","link":"#_2、商户查询缓存","children":[{"level":3,"title":"2.1 什么是缓存?","slug":"_2-1-什么是缓存","link":"#_2-1-什么是缓存","children":[]},{"level":3,"title":"2.2 添加商户缓存","slug":"_2-2-添加商户缓存","link":"#_2-2-添加商户缓存","children":[]},{"level":3,"title":"2.3 缓存更新策略","slug":"_2-3-缓存更新策略","link":"#_2-3-缓存更新策略","children":[]},{"level":3,"title":"2.4 实现商铺和缓存与数据库双写一致","slug":"_2-4-实现商铺和缓存与数据库双写一致","link":"#_2-4-实现商铺和缓存与数据库双写一致","children":[]},{"level":3,"title":"2.5 缓存穿透问题的解决思路","slug":"_2-5-缓存穿透问题的解决思路","link":"#_2-5-缓存穿透问题的解决思路","children":[]},{"level":3,"title":"2.6 编码解决商品查询的缓存穿透问题：","slug":"_2-6-编码解决商品查询的缓存穿透问题","link":"#_2-6-编码解决商品查询的缓存穿透问题","children":[]},{"level":3,"title":"2.7 缓存雪崩问题及解决思路","slug":"_2-7-缓存雪崩问题及解决思路","link":"#_2-7-缓存雪崩问题及解决思路","children":[]},{"level":3,"title":"2.8 缓存击穿问题及解决思路","slug":"_2-8-缓存击穿问题及解决思路","link":"#_2-8-缓存击穿问题及解决思路","children":[]},{"level":3,"title":"2.9 利用互斥锁解决缓存击穿问题","slug":"_2-9-利用互斥锁解决缓存击穿问题","link":"#_2-9-利用互斥锁解决缓存击穿问题","children":[]},{"level":3,"title":"3.0 、利用逻辑过期解决缓存击穿问题","slug":"_3-0-、利用逻辑过期解决缓存击穿问题","link":"#_3-0-、利用逻辑过期解决缓存击穿问题","children":[]},{"level":3,"title":"3.1、封装Redis工具类","slug":"_3-1、封装redis工具类","link":"#_3-1、封装redis工具类","children":[]}]},{"level":2,"title":"3、优惠卷秒杀","slug":"_3、优惠卷秒杀","link":"#_3、优惠卷秒杀","children":[{"level":3,"title":"3.1 -全局唯一ID","slug":"_3-1-全局唯一id","link":"#_3-1-全局唯一id","children":[]},{"level":3,"title":"3.2 -Redis实现全局唯一Id","slug":"_3-2-redis实现全局唯一id","link":"#_3-2-redis实现全局唯一id","children":[]},{"level":3,"title":"3.3 添加优惠卷","slug":"_3-3-添加优惠卷","link":"#_3-3-添加优惠卷","children":[]},{"level":3,"title":"3.4 实现秒杀下单","slug":"_3-4-实现秒杀下单","link":"#_3-4-实现秒杀下单","children":[]},{"level":3,"title":"3.5 库存超卖问题分析","slug":"_3-5-库存超卖问题分析","link":"#_3-5-库存超卖问题分析","children":[]},{"level":3,"title":"3.6 乐观锁解决超卖问题","slug":"_3-6-乐观锁解决超卖问题","link":"#_3-6-乐观锁解决超卖问题","children":[]},{"level":3,"title":"3.6 优惠券秒杀-一人一单","slug":"_3-6-优惠券秒杀-一人一单","link":"#_3-6-优惠券秒杀-一人一单","children":[]},{"level":3,"title":"3.7 集群环境下的并发问题","slug":"_3-7-集群环境下的并发问题","link":"#_3-7-集群环境下的并发问题","children":[]}]},{"level":2,"title":"4、分布式锁","slug":"_4、分布式锁","link":"#_4、分布式锁","children":[{"level":3,"title":"4.1 、基本原理和实现方式对比","slug":"_4-1-、基本原理和实现方式对比","link":"#_4-1-、基本原理和实现方式对比","children":[]},{"level":3,"title":"4.2 、Redis分布式锁的实现核心思路","slug":"_4-2-、redis分布式锁的实现核心思路","link":"#_4-2-、redis分布式锁的实现核心思路","children":[]},{"level":3,"title":"4.3 实现分布式锁版本一","slug":"_4-3-实现分布式锁版本一","link":"#_4-3-实现分布式锁版本一","children":[]},{"level":3,"title":"4.4 Redis分布式锁误删情况说明","slug":"_4-4-redis分布式锁误删情况说明","link":"#_4-4-redis分布式锁误删情况说明","children":[]},{"level":3,"title":"4.5 解决Redis分布式锁误删问题","slug":"_4-5-解决redis分布式锁误删问题","link":"#_4-5-解决redis分布式锁误删问题","children":[]},{"level":3,"title":"4.6 分布式锁的原子性问题","slug":"_4-6-分布式锁的原子性问题","link":"#_4-6-分布式锁的原子性问题","children":[]},{"level":3,"title":"4.7 Lua脚本解决多条命令原子性问题","slug":"_4-7-lua脚本解决多条命令原子性问题","link":"#_4-7-lua脚本解决多条命令原子性问题","children":[]},{"level":3,"title":"4.8 利用Java代码调用Lua脚本改造分布式锁","slug":"_4-8-利用java代码调用lua脚本改造分布式锁","link":"#_4-8-利用java代码调用lua脚本改造分布式锁","children":[]}]},{"level":2,"title":"5、分布式锁-redission","slug":"_5、分布式锁-redission","link":"#_5、分布式锁-redission","children":[{"level":3,"title":"5.1 分布式锁-redission功能介绍","slug":"_5-1-分布式锁-redission功能介绍","link":"#_5-1-分布式锁-redission功能介绍","children":[]},{"level":3,"title":"5.2 分布式锁-Redission快速入门","slug":"_5-2-分布式锁-redission快速入门","link":"#_5-2-分布式锁-redission快速入门","children":[]},{"level":3,"title":"5.3 分布式锁-redission可重入锁原理","slug":"_5-3-分布式锁-redission可重入锁原理","link":"#_5-3-分布式锁-redission可重入锁原理","children":[]},{"level":3,"title":"5.4 分布式锁-redission锁重试和WatchDog机制","slug":"_5-4-分布式锁-redission锁重试和watchdog机制","link":"#_5-4-分布式锁-redission锁重试和watchdog机制","children":[]},{"level":3,"title":"5.5 分布式锁-redission锁的MutiLock原理","slug":"_5-5-分布式锁-redission锁的mutilock原理","link":"#_5-5-分布式锁-redission锁的mutilock原理","children":[]}]},{"level":2,"title":"6、秒杀优化","slug":"_6、秒杀优化","link":"#_6、秒杀优化","children":[{"level":3,"title":"6.1 秒杀优化-异步秒杀思路","slug":"_6-1-秒杀优化-异步秒杀思路","link":"#_6-1-秒杀优化-异步秒杀思路","children":[]},{"level":3,"title":"6.2 秒杀优化-Redis完成秒杀资格判断","slug":"_6-2-秒杀优化-redis完成秒杀资格判断","link":"#_6-2-秒杀优化-redis完成秒杀资格判断","children":[]},{"level":3,"title":"6.3 秒杀优化-基于阻塞队列实现秒杀优化","slug":"_6-3-秒杀优化-基于阻塞队列实现秒杀优化","link":"#_6-3-秒杀优化-基于阻塞队列实现秒杀优化","children":[]}]},{"level":2,"title":"7、Redis消息队列","slug":"_7、redis消息队列","link":"#_7、redis消息队列","children":[{"level":3,"title":"7.1 Redis消息队列-认识消息队列","slug":"_7-1-redis消息队列-认识消息队列","link":"#_7-1-redis消息队列-认识消息队列","children":[]},{"level":3,"title":"7.2 Redis消息队列-基于List实现消息队列","slug":"_7-2-redis消息队列-基于list实现消息队列","link":"#_7-2-redis消息队列-基于list实现消息队列","children":[]},{"level":3,"title":"7.3 Redis消息队列-基于PubSub的消息队列","slug":"_7-3-redis消息队列-基于pubsub的消息队列","link":"#_7-3-redis消息队列-基于pubsub的消息队列","children":[]},{"level":3,"title":"7.4 Redis消息队列-基于Stream的消息队列","slug":"_7-4-redis消息队列-基于stream的消息队列","link":"#_7-4-redis消息队列-基于stream的消息队列","children":[]},{"level":3,"title":"7.5 Redis消息队列-基于Stream的消息队列-消费者组","slug":"_7-5-redis消息队列-基于stream的消息队列-消费者组","link":"#_7-5-redis消息队列-基于stream的消息队列-消费者组","children":[]},{"level":3,"title":"7.6 基于Redis的Stream结构作为消息队列，实现异步秒杀下单","slug":"_7-6-基于redis的stream结构作为消息队列-实现异步秒杀下单","link":"#_7-6-基于redis的stream结构作为消息队列-实现异步秒杀下单","children":[]}]},{"level":2,"title":"8、达人探店","slug":"_8、达人探店","link":"#_8、达人探店","children":[{"level":3,"title":"8.1、达人探店-发布探店笔记","slug":"_8-1、达人探店-发布探店笔记","link":"#_8-1、达人探店-发布探店笔记","children":[]},{"level":3,"title":"8.2 达人探店-查看探店笔记","slug":"_8-2-达人探店-查看探店笔记","link":"#_8-2-达人探店-查看探店笔记","children":[]},{"level":3,"title":"8.3 达人探店-点赞功能","slug":"_8-3-达人探店-点赞功能","link":"#_8-3-达人探店-点赞功能","children":[]},{"level":3,"title":"8.4 达人探店-点赞排行榜","slug":"_8-4-达人探店-点赞排行榜","link":"#_8-4-达人探店-点赞排行榜","children":[]}]},{"level":2,"title":"9、好友关注","slug":"_9、好友关注","link":"#_9、好友关注","children":[{"level":3,"title":"9.1 好友关注-关注和取消关注","slug":"_9-1-好友关注-关注和取消关注","link":"#_9-1-好友关注-关注和取消关注","children":[]},{"level":3,"title":"9.2 好友关注-共同关注","slug":"_9-2-好友关注-共同关注","link":"#_9-2-好友关注-共同关注","children":[]},{"level":3,"title":"9.3 好友关注-Feed流实现方案","slug":"_9-3-好友关注-feed流实现方案","link":"#_9-3-好友关注-feed流实现方案","children":[]},{"level":3,"title":"9.4 好友关注-推送到粉丝收件箱","slug":"_9-4-好友关注-推送到粉丝收件箱","link":"#_9-4-好友关注-推送到粉丝收件箱","children":[]},{"level":3,"title":"9.5好友关注-实现分页查询收邮箱","slug":"_9-5好友关注-实现分页查询收邮箱","link":"#_9-5好友关注-实现分页查询收邮箱","children":[]}]},{"level":2,"title":"10、附近商户","slug":"_10、附近商户","link":"#_10、附近商户","children":[{"level":3,"title":"10.1、附近商户-GEO数据结构的基本用法","slug":"_10-1、附近商户-geo数据结构的基本用法","link":"#_10-1、附近商户-geo数据结构的基本用法","children":[]},{"level":3,"title":"10.2、 附近商户-导入店铺数据到GEO","slug":"_10-2、-附近商户-导入店铺数据到geo","link":"#_10-2、-附近商户-导入店铺数据到geo","children":[]},{"level":3,"title":"10.3 附近商户-实现附近商户功能","slug":"_10-3-附近商户-实现附近商户功能","link":"#_10-3-附近商户-实现附近商户功能","children":[]}]},{"level":2,"title":"11、用户签到","slug":"_11、用户签到","link":"#_11、用户签到","children":[]},{"level":2,"title":"12、UV统计","slug":"_12、uv统计","link":"#_12、uv统计","children":[{"level":3,"title":"12.1 、UV统计-HyperLogLog","slug":"_12-1-、uv统计-hyperloglog","link":"#_12-1-、uv统计-hyperloglog","children":[]},{"level":3,"title":"12.2 UV统计-测试百万数据的统计","slug":"_12-2-uv统计-测试百万数据的统计","link":"#_12-2-uv统计-测试百万数据的统计","children":[]}]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":108.15,"words":32446},"filePathRelative":"notes/database/redis/heima2022/02.Redis-实战篇.md","localizedDate":"2023年4月2日","excerpt":"<h1> 实战篇Redis</h1>\\n<h2> 开篇导读</h2>\\n<p>亲爱的小伙伴们大家好，马上咱们就开始实战篇的内容了，相信通过本章的学习，小伙伴们就能理解各种redis的使用啦，接下来咱们来一起看看实战篇我们要学习一些什么样的内容</p>\\n<ul>\\n<li>短信登录</li>\\n</ul>\\n<p>这一块我们会使用redis共享session来实现</p>\\n<ul>\\n<li>商户查询缓存</li>\\n</ul>\\n<p>通过本章节，我们会理解缓存击穿，缓存穿透，缓存雪崩等问题，让小伙伴的对于这些概念的理解不仅仅是停留在概念上，更是能在代码中看到对应的内容</p>\\n<ul>\\n<li>优惠卷秒杀</li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
