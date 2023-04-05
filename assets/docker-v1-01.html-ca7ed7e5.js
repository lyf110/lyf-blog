const e=JSON.parse('{"key":"v-2213caff","path":"/notes/tools/docker/docker-v1-01.html","title":"一、docker-v1-66期","lang":"zh-CN","frontmatter":{"title":"一、docker-v1-66期","date":"2023-04-02T18:49:33.000Z","order":1,"category":["开发工具","容器技术","docker"],"tag":["开发工具","容器技术","docker"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"容器部署解决方案Docker 1565137893494 反馈： 集群测试：创建了集群的客户端 就是客户端创建不一样 剩下的api的操作一模一样 spring data es：配置集群的节点信息 ElasticsearchTemplate 加油 加班 加班 加班 技术方向上： 一个个独立业务单元（服务） 认知过程（学过专业） 看看书。","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/notes/tools/docker/docker-v1-01.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、docker-v1-66期"}],["meta",{"property":"og:description","content":"容器部署解决方案Docker 1565137893494 反馈： 集群测试：创建了集群的客户端 就是客户端创建不一样 剩下的api的操作一模一样 spring data es：配置集群的节点信息 ElasticsearchTemplate 加油 加班 加班 加班 技术方向上： 一个个独立业务单元（服务） 认知过程（学过专业） 看看书。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-04T06:51:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一、docker-v1-66期"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"开发工具"}],["meta",{"property":"article:tag","content":"容器技术"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2023-04-02T18:49:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T06:51:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、docker-v1-66期\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T18:49:33.000Z\\",\\"dateModified\\":\\"2023-04-04T06:51:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1.1 虚拟化","slug":"_1-1-虚拟化","link":"#_1-1-虚拟化","children":[{"level":3,"title":"1.1.1什么是虚拟化","slug":"_1-1-1什么是虚拟化","link":"#_1-1-1什么是虚拟化","children":[]},{"level":3,"title":"1.1.2虚拟化种类","slug":"_1-1-2虚拟化种类","link":"#_1-1-2虚拟化种类","children":[]}]},{"level":2,"title":"1.2 什么是Docker","slug":"_1-2-什么是docker","link":"#_1-2-什么是docker","children":[{"level":3,"title":"1.2.1容器技术","slug":"_1-2-1容器技术","link":"#_1-2-1容器技术","children":[]},{"level":3,"title":"1.2.2容器与虚拟机比较","slug":"_1-2-2容器与虚拟机比较","link":"#_1-2-2容器与虚拟机比较","children":[]},{"level":3,"title":"1.2.3 Docker特点","slug":"_1-2-3-docker特点","link":"#_1-2-3-docker特点","children":[]}]},{"level":2,"title":"1.3 Docker组件","slug":"_1-3-docker组件","link":"#_1-3-docker组件","children":[{"level":3,"title":"1.3.1 Docker客户端和服务器   c/s","slug":"_1-3-1-docker客户端和服务器-c-s","link":"#_1-3-1-docker客户端和服务器-c-s","children":[]},{"level":3,"title":"1.3.2 Docker镜像-文件","slug":"_1-3-2-docker镜像-文件","link":"#_1-3-2-docker镜像-文件","children":[]},{"level":3,"title":"1.3.3 Registry（注册中心）","slug":"_1-3-3-registry-注册中心","link":"#_1-3-3-registry-注册中心","children":[]},{"level":3,"title":"1.3.4 Docker容器","slug":"_1-3-4-docker容器","link":"#_1-3-4-docker容器","children":[]}]},{"level":2,"title":"2.1 安装环境说明","slug":"_2-1-安装环境说明","link":"#_2-1-安装环境说明","children":[]},{"level":2,"title":"2.2 在VMware Workstation中安装CentOS7","slug":"_2-2-在vmware-workstation中安装centos7","link":"#_2-2-在vmware-workstation中安装centos7","children":[]},{"level":2,"title":"2.3 安装Docker","slug":"_2-3-安装docker","link":"#_2-3-安装docker","children":[]},{"level":2,"title":"2.4 安装后查看Docker版本","slug":"_2-4-安装后查看docker版本","link":"#_2-4-安装后查看docker版本","children":[]},{"level":2,"title":"2.5 启动与停止Docker","slug":"_2-5-启动与停止docker","link":"#_2-5-启动与停止docker","children":[]},{"level":2,"title":"3.1 什么是Docker镜像","slug":"_3-1-什么是docker镜像","link":"#_3-1-什么是docker镜像","children":[]},{"level":2,"title":"3.2 列出镜像","slug":"_3-2-列出镜像","link":"#_3-2-列出镜像","children":[]},{"level":2,"title":"3.3 搜索镜像","slug":"_3-3-搜索镜像","link":"#_3-3-搜索镜像","children":[]},{"level":2,"title":"3.4 拉取镜像[获取镜像]","slug":"_3-4-拉取镜像-获取镜像","link":"#_3-4-拉取镜像-获取镜像","children":[{"level":3,"title":"3.4.1 从Docker Hub拉取","slug":"_3-4-1-从docker-hub拉取","link":"#_3-4-1-从docker-hub拉取","children":[]},{"level":3,"title":"3.4.2 ustc的镜像","slug":"_3-4-2-ustc的镜像","link":"#_3-4-2-ustc的镜像","children":[]}]},{"level":2,"title":"3.5 删除镜像","slug":"_3-5-删除镜像","link":"#_3-5-删除镜像","children":[]},{"level":2,"title":"4.1 查看容器","slug":"_4-1-查看容器","link":"#_4-1-查看容器","children":[]},{"level":2,"title":"4.2 创建与启动容器","slug":"_4-2-创建与启动容器","link":"#_4-2-创建与启动容器","children":[{"level":3,"title":"4.1.1 交互式容器","slug":"_4-1-1-交互式容器","link":"#_4-1-1-交互式容器","children":[]},{"level":3,"title":"4.1.2 守护式容器","slug":"_4-1-2-守护式容器","link":"#_4-1-2-守护式容器","children":[]}]},{"level":2,"title":"4.3 停止与启动容器","slug":"_4-3-停止与启动容器","link":"#_4-3-停止与启动容器","children":[]},{"level":2,"title":"4.4 文件拷贝","slug":"_4-4-文件拷贝","link":"#_4-4-文件拷贝","children":[]},{"level":2,"title":"4.5 目录挂载","slug":"_4-5-目录挂载","link":"#_4-5-目录挂载","children":[]},{"level":2,"title":"4.6 查看容器IP地址","slug":"_4-6-查看容器ip地址","link":"#_4-6-查看容器ip地址","children":[]},{"level":2,"title":"4.7 删除容器","slug":"_4-7-删除容器","link":"#_4-7-删除容器","children":[]},{"level":2,"title":"5.1 MySQL部署","slug":"_5-1-mysql部署","link":"#_5-1-mysql部署","children":[{"level":3,"title":"5.1.1拉取MySQL镜像","slug":"_5-1-1拉取mysql镜像","link":"#_5-1-1拉取mysql镜像","children":[]},{"level":3,"title":"5.1.2 创建MySQL容器","slug":"_5-1-2-创建mysql容器","link":"#_5-1-2-创建mysql容器","children":[]},{"level":3,"title":"5.1.3 进入MySQL容器,登陆MySQL","slug":"_5-1-3-进入mysql容器-登陆mysql","link":"#_5-1-3-进入mysql容器-登陆mysql","children":[]},{"level":3,"title":"5.1.4 远程登陆MySQL","slug":"_5-1-4-远程登陆mysql","link":"#_5-1-4-远程登陆mysql","children":[]},{"level":3,"title":"5.1.5 查看容器IP地址","slug":"_5-1-5-查看容器ip地址","link":"#_5-1-5-查看容器ip地址","children":[]}]},{"level":2,"title":"5.2 tomcat部署","slug":"_5-2-tomcat部署","link":"#_5-2-tomcat部署","children":[{"level":3,"title":"5.2.1 拉取tomcat镜像","slug":"_5-2-1-拉取tomcat镜像","link":"#_5-2-1-拉取tomcat镜像","children":[]},{"level":3,"title":"5.2.2 创建tomcat容器","slug":"_5-2-2-创建tomcat容器","link":"#_5-2-2-创建tomcat容器","children":[]},{"level":3,"title":"5.2.3 部署web应用","slug":"_5-2-3-部署web应用","link":"#_5-2-3-部署web应用","children":[]}]},{"level":2,"title":"5.3 Nginx部署","slug":"_5-3-nginx部署","link":"#_5-3-nginx部署","children":[{"level":3,"title":"5.3.1 拉取Nginx镜像","slug":"_5-3-1-拉取nginx镜像","link":"#_5-3-1-拉取nginx镜像","children":[]},{"level":3,"title":"5.3.2 创建Nginx容器","slug":"_5-3-2-创建nginx容器","link":"#_5-3-2-创建nginx容器","children":[]},{"level":3,"title":"5.3.3 测试Nginx","slug":"_5-3-3-测试nginx","link":"#_5-3-3-测试nginx","children":[]},{"level":3,"title":"5.3.4 配置反向代理","slug":"_5-3-4-配置反向代理","link":"#_5-3-4-配置反向代理","children":[]}]},{"level":2,"title":"5.4 Redis部署","slug":"_5-4-redis部署","link":"#_5-4-redis部署","children":[{"level":3,"title":"5.4.1 拉取Redis镜像","slug":"_5-4-1-拉取redis镜像","link":"#_5-4-1-拉取redis镜像","children":[]},{"level":3,"title":"5.4.2 创建Redis容器","slug":"_5-4-2-创建redis容器","link":"#_5-4-2-创建redis容器","children":[]},{"level":3,"title":"5.4.3 客户端测试","slug":"_5-4-3-客户端测试","link":"#_5-4-3-客户端测试","children":[]}]},{"level":2,"title":"6.1 容器保存为镜像","slug":"_6-1-容器保存为镜像","link":"#_6-1-容器保存为镜像","children":[]},{"level":2,"title":"6.2 镜像备份","slug":"_6-2-镜像备份","link":"#_6-2-镜像备份","children":[]},{"level":2,"title":"6.3 镜像恢复与迁移","slug":"_6-3-镜像恢复与迁移","link":"#_6-3-镜像恢复与迁移","children":[]}],"git":{"createdTime":1680591075000,"updatedTime":1680591075000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":23.24,"words":6973},"filePathRelative":"notes/tools/docker/docker-v1-01.md","localizedDate":"2023年4月3日","excerpt":"<h1> 容器部署解决方案Docker</h1>\\n<figure><figcaption>1565137893494</figcaption></figure>\\n<p>反馈：</p>\\n<ul>\\n<li>集群测试：创建了集群的客户端\\n<ul>\\n<li>就是客户端创建不一样</li>\\n<li>剩下的api的操作一模一样</li>\\n</ul>\\n</li>\\n<li>spring data es：配置集群的节点信息    ElasticsearchTemplate</li>\\n<li>加油</li>\\n<li>加班</li>\\n<li>加班</li>\\n<li>加班</li>\\n<li>技术方向上： 一个个独立业务单元（服务）     认知过程（学过专业）      看看书。</li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
