const l=JSON.parse('{"key":"v-5059aab3","path":"/notes/ssm/springboot/SpringBoot.html","title":"一、SpringBoot v1","lang":"zh-CN","frontmatter":{"title":"一、SpringBoot v1","date":"2023-04-02T10:38:46.000Z","category":["ssm","框架","SpringBoot"],"tag":["ssm","框架","SpringBoot"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"SpringBoot 姓名：阮文 籍贯：安徽.安庆 读书：江西.南昌大学（软件学院） 学习方式： 1564468901099 ssm + dubbo： 写配置文件 添加依赖 直接写代码：业务 学习目标 1、SpringBoot简介 2、SpringBoot快速入门【掌握】 3、SpringBoot原理分析【了解】","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/ssm/springboot/SpringBoot.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、SpringBoot v1"}],["meta",{"property":"og:description","content":"SpringBoot 姓名：阮文 籍贯：安徽.安庆 读书：江西.南昌大学（软件学院） 学习方式： 1564468901099 ssm + dubbo： 写配置文件 添加依赖 直接写代码：业务 学习目标 1、SpringBoot简介 2、SpringBoot快速入门【掌握】 3、SpringBoot原理分析【了解】"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一、SpringBoot v1"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"ssm"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、SpringBoot v1\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1.1 java的开发方式","slug":"_1-1-java的开发方式","link":"#_1-1-java的开发方式","children":[]},{"level":2,"title":"1.2 SpringBoot简介","slug":"_1-2-springboot简介","link":"#_1-2-springboot简介","children":[{"level":3,"title":"1.2.1 spring开发经历的阶段","slug":"_1-2-1-spring开发经历的阶段","link":"#_1-2-1-spring开发经历的阶段","children":[]},{"level":3,"title":"1.2.2 springboot简介","slug":"_1-2-2-springboot简介","link":"#_1-2-2-springboot简介","children":[]}]},{"level":2,"title":"2.1 需求","slug":"_2-1-需求","link":"#_2-1-需求","children":[]},{"level":2,"title":"2.2 springmvc实现","slug":"_2-2-springmvc实现","link":"#_2-2-springmvc实现","children":[]},{"level":2,"title":"2.3 SpringBoot实现","slug":"_2-3-springboot实现","link":"#_2-3-springboot实现","children":[{"level":3,"title":"2.3.1 方式一","slug":"_2-3-1-方式一","link":"#_2-3-1-方式一","children":[]},{"level":3,"title":"2.3.2 方式二（建议）","slug":"_2-3-2-方式二-建议","link":"#_2-3-2-方式二-建议","children":[]}]},{"level":2,"title":"3.1 spring-boot-starter-parent","slug":"_3-1-spring-boot-starter-parent","link":"#_3-1-spring-boot-starter-parent","children":[]},{"level":2,"title":"3.2 @SpringBootApplication","slug":"_3-2-springbootapplication","link":"#_3-2-springbootapplication","children":[]},{"level":2,"title":"4.1 application.properties","slug":"_4-1-application-properties","link":"#_4-1-application-properties","children":[{"level":3,"title":"4.1.1 语法","slug":"_4-1-1-语法","link":"#_4-1-1-语法","children":[]},{"level":3,"title":"4.1.2 案例","slug":"_4-1-2-案例","link":"#_4-1-2-案例","children":[]}]},{"level":2,"title":"4.2 application.yml","slug":"_4-2-application-yml","link":"#_4-2-application-yml","children":[{"level":3,"title":"4.2.1 语法","slug":"_4-2-1-语法","link":"#_4-2-1-语法","children":[]},{"level":3,"title":"4.2.2 案例","slug":"_4-2-2-案例","link":"#_4-2-2-案例","children":[]}]},{"level":2,"title":"4.3 热部署","slug":"_4-3-热部署","link":"#_4-3-热部署","children":[{"level":3,"title":"4.3.1 配置pom","slug":"_4-3-1-配置pom","link":"#_4-3-1-配置pom","children":[]},{"level":3,"title":"4.3.2 开启自动构建工程","slug":"_4-3-2-开启自动构建工程","link":"#_4-3-2-开启自动构建工程","children":[]}]},{"level":2,"title":"5.1 集成mybatis","slug":"_5-1-集成mybatis","link":"#_5-1-集成mybatis","children":[{"level":3,"title":"5.1.1 需求","slug":"_5-1-1-需求","link":"#_5-1-1-需求","children":[]},{"level":3,"title":"5.1.2 创建工程","slug":"_5-1-2-创建工程","link":"#_5-1-2-创建工程","children":[]},{"level":3,"title":"5.1.3 编写pojo","slug":"_5-1-3-编写pojo","link":"#_5-1-3-编写pojo","children":[]},{"level":3,"title":"5.1.4 编写mapper接口以及映射文件","slug":"_5-1-4-编写mapper接口以及映射文件","link":"#_5-1-4-编写mapper接口以及映射文件","children":[]},{"level":3,"title":"5.1.5 编写service接口以及实现类","slug":"_5-1-5-编写service接口以及实现类","link":"#_5-1-5-编写service接口以及实现类","children":[]},{"level":3,"title":"5.1.6 编写controller","slug":"_5-1-6-编写controller","link":"#_5-1-6-编写controller","children":[]},{"level":3,"title":"5.1.7 配置application.properties","slug":"_5-1-7-配置application-properties","link":"#_5-1-7-配置application-properties","children":[]},{"level":3,"title":"5.1.8 发布程序并访问","slug":"_5-1-8-发布程序并访问","link":"#_5-1-8-发布程序并访问","children":[]}]},{"level":2,"title":"5.2 集成Spring Data Redis","slug":"_5-2-集成spring-data-redis","link":"#_5-2-集成spring-data-redis","children":[{"level":3,"title":"5.2.1 添加Redis启动器","slug":"_5-2-1-添加redis启动器","link":"#_5-2-1-添加redis启动器","children":[]},{"level":3,"title":"5.2.2 配置application","slug":"_5-2-2-配置application","link":"#_5-2-2-配置application","children":[]},{"level":3,"title":"5.2.3 更新程序","slug":"_5-2-3-更新程序","link":"#_5-2-3-更新程序","children":[]},{"level":3,"title":"5.2.4 测试","slug":"_5-2-4-测试","link":"#_5-2-4-测试","children":[]}]},{"level":2,"title":"5.3 集成Spring Data JPA","slug":"_5-3-集成spring-data-jpa","link":"#_5-3-集成spring-data-jpa","children":[{"level":3,"title":"5.2.1 需求","slug":"_5-2-1-需求","link":"#_5-2-1-需求","children":[]},{"level":3,"title":"5.2.2 创建工程","slug":"_5-2-2-创建工程","link":"#_5-2-2-创建工程","children":[]},{"level":3,"title":"5.2.3 编写pojo","slug":"_5-2-3-编写pojo","link":"#_5-2-3-编写pojo","children":[]},{"level":3,"title":"5.2.4 编写dao接口","slug":"_5-2-4-编写dao接口","link":"#_5-2-4-编写dao接口","children":[]},{"level":3,"title":"5.2.5 编写service接口以及实现类","slug":"_5-2-5-编写service接口以及实现类","link":"#_5-2-5-编写service接口以及实现类","children":[]},{"level":3,"title":"5.2.6 编写controller","slug":"_5-2-6-编写controller","link":"#_5-2-6-编写controller","children":[]},{"level":3,"title":"5.2.7 配置application","slug":"_5-2-7-配置application","link":"#_5-2-7-配置application","children":[]},{"level":3,"title":"5.2.8 测试","slug":"_5-2-8-测试","link":"#_5-2-8-测试","children":[]}]},{"level":2,"title":"5.4 集成定时器","slug":"_5-4-集成定时器","link":"#_5-4-集成定时器","children":[]},{"level":2,"title":"7.1 打jar包","slug":"_7-1-打jar包","link":"#_7-1-打jar包","children":[]},{"level":2,"title":"7.2 打war包","slug":"_7-2-打war包","link":"#_7-2-打war包","children":[]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":16.49,"words":4947},"filePathRelative":"notes/ssm/springboot/SpringBoot.md","localizedDate":"2023年4月2日","excerpt":"<h1> SpringBoot</h1>\\n<p>姓名：阮文</p>\\n<p>籍贯：安徽.安庆</p>\\n<p>读书：江西.南昌大学（软件学院）</p>\\n<p>学习方式：</p>\\n<figure><figcaption>1564468901099</figcaption></figure>\\n<p>ssm + dubbo：</p>\\n<ul>\\n<li>写配置文件</li>\\n<li>添加依赖</li>\\n<li>直接写代码：业务</li>\\n</ul>\\n<p>学习目标</p>\\n<p>1、SpringBoot简介</p>\\n<p>2、SpringBoot快速入门【掌握】</p>\\n<p>3、SpringBoot原理分析【了解】</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{l as data};
