import{_ as l,W as i,X as p,Y as n,Z as a,$ as e,a0 as t,C as c}from"./framework-5f3abea5.js";const o="/assets/202303221756027-03d80988.png",r="/assets/202303221757020-02e11679.png",u="/assets/202303221757130-def0e088.png",d="/assets/202303221757820-bbf29d51.png",v="/assets/202303221758300-134d7383.png",k="/assets/202303221759575-1b3fb8d5.png",m="/assets/202303221759581-f99c1c6c.png",b="/assets/202303221803622-c71428df.png",g="/assets/202303221803281-3643c7d2.png",y="/assets/202303221803167-14a71564.png",h={},_=t('<h1 id="seata的部署和集成" tabindex="-1"><a class="header-anchor" href="#seata的部署和集成" aria-hidden="true">#</a> seata的部署和集成</h1><h1 id="一、部署seata的tc-server" tabindex="-1"><a class="header-anchor" href="#一、部署seata的tc-server" aria-hidden="true">#</a> 一、部署Seata的tc-server</h1><h2 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1.下载</h2>',3),f={href:"http://seata.io/zh-cn/blog/download.html",target:"_blank",rel:"noopener noreferrer"},L={href:"http://seata.io/zh-cn/blog/download.html",target:"_blank",rel:"noopener noreferrer"},T={href:"http://seata.io/zh-cn/blog/download.html",target:"_blank",rel:"noopener noreferrer"},E={href:"http://seata.io/zh-cn/blog/download.html",target:"_blank",rel:"noopener noreferrer"},A=t('<p>当然，课前资料也准备好了：</p><figure><img src="'+o+'" alt="image-20210622202357640" tabindex="0" loading="lazy"><figcaption>image-20210622202357640</figcaption></figure><h2 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压" aria-hidden="true">#</a> 2.解压</h2><p>在非中文目录解压缩这个zip包，其目录结构如下：</p><figure><img src="'+r+'" alt="image-20210622202515014" tabindex="0" loading="lazy"><figcaption>image-20210622202515014</figcaption></figure><h2 id="_3-修改配置" tabindex="-1"><a class="header-anchor" href="#_3-修改配置" aria-hidden="true">#</a> 3.修改配置</h2><p>修改conf目录下的registry.conf文件：</p><figure><img src="'+u+`" alt="image-20210622202622874" tabindex="0" loading="lazy"><figcaption>image-20210622202622874</figcaption></figure><p>内容如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">registry</span> <span class="token value attr-value">{</span>
<span class="token comment">  # tc服务的注册中心类，这里选择nacos，也可以是eureka、zookeeper等</span>
<span class="token key attr-name">  type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;nacos&quot;</span>

<span class="token key attr-name">  nacos</span> <span class="token value attr-value">{</span>
<span class="token comment">    # seata tc 服务注册到 nacos的服务名称，可以自定义</span>
<span class="token key attr-name">    application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;seata-tc-server&quot;</span>
<span class="token key attr-name">    serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;127.0.0.1:8848&quot;</span>
<span class="token key attr-name">    group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;DEFAULT_GROUP&quot;</span>
<span class="token key attr-name">    namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
<span class="token key attr-name">    cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;SH&quot;</span>
<span class="token key attr-name">    username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;nacos&quot;</span>
<span class="token key attr-name">    password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;nacos&quot;</span>
  }
}

<span class="token key attr-name">config</span> <span class="token value attr-value">{</span>
<span class="token comment">  # 读取tc服务端的配置文件的方式，这里是从nacos配置中心读取，这样如果tc是集群，可以共享配置</span>
<span class="token key attr-name">  type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;nacos&quot;</span>
<span class="token comment">  # 配置nacos地址等信息</span>
<span class="token key attr-name">  nacos</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;127.0.0.1:8848&quot;</span>
<span class="token key attr-name">    namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
<span class="token key attr-name">    group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;SEATA_GROUP&quot;</span>
<span class="token key attr-name">    username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;nacos&quot;</span>
<span class="token key attr-name">    password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;nacos&quot;</span>
<span class="token key attr-name">    dataId</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;seataServer.properties&quot;</span>
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-在nacos添加配置" tabindex="-1"><a class="header-anchor" href="#_4-在nacos添加配置" aria-hidden="true">#</a> 4.在nacos添加配置</h2><p>特别注意，为了让tc服务的集群可以共享配置，我们选择了nacos作为统一配置中心。因此服务端配置文件seataServer.properties文件需要在nacos中配好。</p><p>格式如下：</p><figure><img src="`+d+`" alt="image-20210622203609227" tabindex="0" loading="lazy"><figcaption>image-20210622203609227</figcaption></figure><p>配置内容如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 数据存储方式，db代表数据库</span>
<span class="token key attr-name">store.mode</span><span class="token punctuation">=</span><span class="token value attr-value">db</span>
<span class="token key attr-name">store.db.datasource</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">store.db.dbType</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token key attr-name">store.db.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">store.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/seata?useUnicode=true&amp;rewriteBatchedStatements=true</span>
<span class="token key attr-name">store.db.user</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">store.db.password</span><span class="token punctuation">=</span><span class="token value attr-value">123</span>
<span class="token key attr-name">store.db.minConn</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">store.db.maxConn</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">store.db.globalTable</span><span class="token punctuation">=</span><span class="token value attr-value">global_table</span>
<span class="token key attr-name">store.db.branchTable</span><span class="token punctuation">=</span><span class="token value attr-value">branch_table</span>
<span class="token key attr-name">store.db.queryLimit</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">store.db.lockTable</span><span class="token punctuation">=</span><span class="token value attr-value">lock_table</span>
<span class="token key attr-name">store.db.maxWait</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>
<span class="token comment"># 事务、日志等配置</span>
<span class="token key attr-name">server.recovery.committingRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.recovery.asynCommittingRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.recovery.rollbackingRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.recovery.timeoutRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.maxCommitRetryTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
<span class="token key attr-name">server.maxRollbackRetryTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
<span class="token key attr-name">server.rollbackRetryTimeoutUnlockEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">server.undo.logSaveDays</span><span class="token punctuation">=</span><span class="token value attr-value">7</span>
<span class="token key attr-name">server.undo.logDeletePeriod</span><span class="token punctuation">=</span><span class="token value attr-value">86400000</span>

<span class="token comment"># 客户端与服务端传输方式</span>
<span class="token key attr-name">transport.serialization</span><span class="token punctuation">=</span><span class="token value attr-value">seata</span>
<span class="token key attr-name">transport.compressor</span><span class="token punctuation">=</span><span class="token value attr-value">none</span>
<span class="token comment"># 关闭metrics功能，提高性能</span>
<span class="token key attr-name">metrics.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">metrics.registryType</span><span class="token punctuation">=</span><span class="token value attr-value">compact</span>
<span class="token key attr-name">metrics.exporterList</span><span class="token punctuation">=</span><span class="token value attr-value">prometheus</span>
<span class="token key attr-name">metrics.exporterPrometheusPort</span><span class="token punctuation">=</span><span class="token value attr-value">9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>其中的数据库地址、用户名、密码都需要修改成你自己的数据库信息。</mark></p><h2 id="_5-创建数据库表" tabindex="-1"><a class="header-anchor" href="#_5-创建数据库表" aria-hidden="true">#</a> 5.创建数据库表</h2><p>特别注意：tc服务在管理分布式事务时，需要记录事务相关数据到数据库中，你需要提前创建好这些表。</p><p>新建一个名为seata的数据库，运行课前资料提供的sql文件：</p><figure><img src="`+v+'" alt="image-20210622204145159" tabindex="0" loading="lazy"><figcaption>image-20210622204145159</figcaption></figure><p>这些表主要记录全局事务、分支事务、全局锁信息：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>\nSET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n-- 分支事务表\n-- ----------------------------\nDROP TABLE IF EXISTS `branch_table`;\nCREATE TABLE `branch_table`  (\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `transaction_id` bigint(20) NULL DEFAULT NULL,\n  `resource_group_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `resource_id` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `branch_type` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `status` tinyint(4) NULL DEFAULT NULL,\n  `client_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `application_data` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `gmt_create` datetime(6) NULL DEFAULT NULL,\n  `gmt_modified` datetime(6) NULL DEFAULT NULL,\n  PRIMARY KEY (`branch_id`) USING BTREE,\n  INDEX `idx_xid`(`xid`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\n-- ----------------------------\n-- 全局事务表\n-- ----------------------------\nDROP TABLE IF EXISTS `global_table`;\nCREATE TABLE `global_table`  (\n  `xid` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `transaction_id` bigint(20) NULL DEFAULT NULL,\n  `status` tinyint(4) NOT NULL,\n  `application_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `transaction_service_group` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `transaction_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `timeout` int(11) NULL DEFAULT NULL,\n  `begin_time` bigint(20) NULL DEFAULT NULL,\n  `application_data` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,\n  `gmt_create` datetime NULL DEFAULT NULL,\n  `gmt_modified` datetime NULL DEFAULT NULL,\n  PRIMARY KEY (`xid`) USING BTREE,\n  INDEX `idx_gmt_modified_status`(`gmt_modified`, `status`) USING BTREE,\n  INDEX `idx_transaction_id`(`transaction_id`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\nSET FOREIGN_KEY_CHECKS = 1;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-启动tc服务" tabindex="-1"><a class="header-anchor" href="#_6-启动tc服务" aria-hidden="true">#</a> 6.启动TC服务</h2><p>进入bin目录，运行其中的seata-server.bat即可：</p><figure><img src="'+k+'" alt="image-20210622205427318" tabindex="0" loading="lazy"><figcaption>image-20210622205427318</figcaption></figure><p>启动成功后，seata-server应该已经注册到nacos注册中心了。</p>',27),C={href:"http://localhost:8848",target:"_blank",rel:"noopener noreferrer"},U=t('<figure><img src="'+m+`" alt="image-20210622205901450" tabindex="0" loading="lazy"><figcaption>image-20210622205901450</figcaption></figure><h1 id="二、微服务集成seata" tabindex="-1"><a class="header-anchor" href="#二、微服务集成seata" aria-hidden="true">#</a> 二、微服务集成seata</h1><h2 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖" aria-hidden="true">#</a> 1.引入依赖</h2><p>首先，我们需要在微服务中引入seata依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--版本较低，1.3.0，因此排除--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--seata starter 采用1.4.2版本--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${seata.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件" aria-hidden="true">#</a> 2.修改配置文件</h2><p>需要修改application.yml文件，添加一些配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span> <span class="token comment"># TC服务注册中心的配置，微服务根据这些信息去注册中心获取tc服务地址</span>
    <span class="token comment"># 参考tc服务自己的registry.conf中的配置</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span> <span class="token comment"># tc</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
      <span class="token key atrule">application</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>tc<span class="token punctuation">-</span>server <span class="token comment"># tc服务在nacos中的服务名称</span>
      <span class="token key atrule">cluster</span><span class="token punctuation">:</span> SH
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>demo <span class="token comment"># 事务组，根据这个获取tc服务的cluster名称</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span> <span class="token comment"># 事务组与TC服务cluster的映射关系</span>
      <span class="token key atrule">seata-demo</span><span class="token punctuation">:</span> SH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、tc服务的高可用和异地容灾" tabindex="-1"><a class="header-anchor" href="#三、tc服务的高可用和异地容灾" aria-hidden="true">#</a> 三、TC服务的高可用和异地容灾</h1><h2 id="_1-模拟异地容灾的tc集群" tabindex="-1"><a class="header-anchor" href="#_1-模拟异地容灾的tc集群" aria-hidden="true">#</a> 1.模拟异地容灾的TC集群</h2><p>计划启动两台seata的tc服务节点：</p><table><thead><tr><th>节点名称</th><th>ip地址</th><th>端口号</th><th>集群名称</th></tr></thead><tbody><tr><td>seata</td><td>127.0.0.1</td><td>8091</td><td>SH</td></tr><tr><td>seata2</td><td>127.0.0.1</td><td>8092</td><td>HZ</td></tr></tbody></table><p>之前我们已经启动了一台seata服务，端口是8091，集群名为SH。</p><p>现在，将seata目录复制一份，起名为seata2</p><p>修改seata2/conf/registry.conf内容如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">registry</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># tc服务的注册中心类，这里选择nacos，也可以是eureka、zookeeper等</span>
  <span class="token directive"><span class="token keyword">type</span> = <span class="token string">&quot;nacos&quot;</span>

  nacos</span> <span class="token punctuation">{</span>
    <span class="token comment"># seata tc 服务注册到 nacos的服务名称，可以自定义</span>
    application = &quot;seata-tc-server&quot;
    serverAddr = &quot;127.0.0.1:8848&quot;
    group = &quot;DEFAULT_GROUP&quot;
    namespace = &quot;&quot;
    cluster = &quot;HZ&quot;
    username = &quot;nacos&quot;
    password = &quot;nacos&quot;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">config</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># 读取tc服务端的配置文件的方式，这里是从nacos配置中心读取，这样如果tc是集群，可以共享配置</span>
  <span class="token directive"><span class="token keyword">type</span> = <span class="token string">&quot;nacos&quot;</span>
  <span class="token comment"># 配置nacos地址等信息</span>
  nacos</span> <span class="token punctuation">{</span>
    serverAddr = &quot;127.0.0.1:8848&quot;
    namespace = &quot;&quot;
    group = &quot;SEATA_GROUP&quot;
    username = &quot;nacos&quot;
    password = &quot;nacos&quot;
    dataId = &quot;seataServer.properties&quot;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入seata2/bin目录，然后运行命令：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>seata-server<span class="token punctuation">.</span>bat <span class="token operator">-</span>p 8092
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开nacos控制台，查看服务列表：</p><figure><img src="`+b+'" alt="image-20210624151150840" tabindex="0" loading="lazy"><figcaption>image-20210624151150840</figcaption></figure><p>点进详情查看：</p><figure><img src="'+g+'" alt="image-20210624151221747" tabindex="0" loading="lazy"><figcaption>image-20210624151221747</figcaption></figure><h2 id="_2-将事务组映射配置到nacos" tabindex="-1"><a class="header-anchor" href="#_2-将事务组映射配置到nacos" aria-hidden="true">#</a> 2.将事务组映射配置到nacos</h2><p>接下来，我们需要将tx-service-group与cluster的映射关系都配置到nacos配置中心。</p><p>新建一个配置：</p><figure><img src="'+y+`" alt="image-20210624151507072" tabindex="0" loading="lazy"><figcaption>image-20210624151507072</figcaption></figure><p>配置的内容如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 事务组映射关系</span>
<span class="token key attr-name">service.vgroupMapping.seata-demo</span><span class="token punctuation">=</span><span class="token value attr-value">SH</span>

<span class="token key attr-name">service.enableDegrade</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">service.disableGlobalTransaction</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># 与TC服务的通信配置</span>
<span class="token key attr-name">transport.type</span><span class="token punctuation">=</span><span class="token value attr-value">TCP</span>
<span class="token key attr-name">transport.server</span><span class="token punctuation">=</span><span class="token value attr-value">NIO</span>
<span class="token key attr-name">transport.heartbeat</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">transport.enableClientBatchSendRequest</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">transport.threadFactory.bossThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyBoss</span>
<span class="token key attr-name">transport.threadFactory.workerThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyServerNIOWorker</span>
<span class="token key attr-name">transport.threadFactory.serverExecutorThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyServerBizHandler</span>
<span class="token key attr-name">transport.threadFactory.shareBossWorker</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">transport.threadFactory.clientSelectorThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyClientSelector</span>
<span class="token key attr-name">transport.threadFactory.clientSelectorThreadSize</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">transport.threadFactory.clientWorkerThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyClientWorkerThread</span>
<span class="token key attr-name">transport.threadFactory.bossThreadSize</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">transport.threadFactory.workerThreadSize</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
<span class="token key attr-name">transport.shutdown.wait</span><span class="token punctuation">=</span><span class="token value attr-value">3</span>
<span class="token comment"># RM配置</span>
<span class="token key attr-name">client.rm.asyncCommitBufferLimit</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">client.rm.lock.retryInterval</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">client.rm.lock.retryTimes</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">client.rm.lock.retryPolicyBranchRollbackOnConflict</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.rm.reportRetryCount</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">client.rm.tableMetaCheckEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.rm.tableMetaCheckerInterval</span><span class="token punctuation">=</span><span class="token value attr-value">60000</span>
<span class="token key attr-name">client.rm.sqlParserType</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">client.rm.reportSuccessEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.rm.sagaBranchRegisterEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># TM配置</span>
<span class="token key attr-name">client.tm.commitRetryCount</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">client.tm.rollbackRetryCount</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">client.tm.defaultGlobalTransactionTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">60000</span>
<span class="token key attr-name">client.tm.degradeCheck</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.tm.degradeCheckAllowTimes</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">client.tm.degradeCheckPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>

<span class="token comment"># undo日志配置</span>
<span class="token key attr-name">client.undo.dataValidation</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.undo.logSerialization</span><span class="token punctuation">=</span><span class="token value attr-value">jackson</span>
<span class="token key attr-name">client.undo.onlyCareUpdateColumns</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.undo.logTable</span><span class="token punctuation">=</span><span class="token value attr-value">undo_log</span>
<span class="token key attr-name">client.undo.compress.enable</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.undo.compress.type</span><span class="token punctuation">=</span><span class="token value attr-value">zip</span>
<span class="token key attr-name">client.undo.compress.threshold</span><span class="token punctuation">=</span><span class="token value attr-value">64k</span>
<span class="token key attr-name">client.log.exceptionRate</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-微服务读取nacos配置" tabindex="-1"><a class="header-anchor" href="#_3-微服务读取nacos配置" aria-hidden="true">#</a> 3.微服务读取nacos配置</h2><p>接下来，需要修改每一个微服务的application.yml文件，让微服务读取nacos中的client.properties文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">group</span><span class="token punctuation">:</span> SEATA_GROUP
      <span class="token key atrule">data-id</span><span class="token punctuation">:</span> client.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启微服务，现在微服务到底是连接tc的SH集群，还是tc的HZ集群，都统一由nacos的client.properties来决定了。</p>`,32);function x(q,N){const s=c("ExternalLinkIcon");return i(),p("div",null,[_,n("p",null,[a("首先我们要下载seata-server包，地址在"),n("a",f,[a("http"),e(s)]),n("a",L,[a("😕/seata.io/zh-cn/blog/download"),e(s)]),n("a",T,[a("."),e(s)]),n("a",E,[a("html"),e(s)])]),A,n("p",null,[a("打开浏览器，访问nacos地址："),n("a",C,[a("http://localhost:8848"),e(s)]),a("，然后进入服务列表页面，可以看到seata-tc-server的信息：")]),U])}const S=l(h,[["render",x],["__file","seata的部署和集成.html.vue"]]);export{S as default};
