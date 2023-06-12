import{_ as e,W as s,X as n,a0 as a}from"./framework-7a1bedf3.js";const i="/assets/image-20230531092101426-c5e3095e.png",d={},r=a(`<h1 id="七、docker-常见问题记录" tabindex="-1"><a class="header-anchor" href="#七、docker-常见问题记录" aria-hidden="true">#</a> 七、docker 常见问题记录</h1><h2 id="_1-vmware虚拟机挂起后-再次运行以后-之前在windows本地能连上的mysql-现在连不上了" tabindex="-1"><a class="header-anchor" href="#_1-vmware虚拟机挂起后-再次运行以后-之前在windows本地能连上的mysql-现在连不上了" aria-hidden="true">#</a> 1 VMware虚拟机挂起后，再次运行以后，之前在windows本地能连上的mysql，现在连不上了</h2><p>在Centos7 虚拟机内部是可以正常连接的</p><h3 id="_1-1-解决办法1-重启docker-治标不治本" tabindex="-1"><a class="header-anchor" href="#_1-1-解决办法1-重启docker-治标不治本" aria-hidden="true">#</a> 1.1 解决办法1，重启docker（治标不治本）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-解决办法2-修改配置-治本" tabindex="-1"><a class="header-anchor" href="#_1-2-解决办法2-修改配置-治本" aria-hidden="true">#</a> 1.2 解决办法2，修改配置（治本）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开配置文件</span>
<span class="token function">vim</span> /usr/lib/sysctl.d/00-system.conf

<span class="token comment"># 在最后面添加</span>
net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># 然后保存退出，接着重启网络服务</span>
systemctl restart network

<span class="token comment">#重启以后，输入以下命令，查看IPv4转发状态</span>
<span class="token function">sysctl</span> net.ipv4.ip_forward

<span class="token comment"># 显示</span>
<span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 再次在windows上连接mysql和redis，就已经没问题了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="image-20230531092101426" tabindex="0" loading="lazy"><figcaption>image-20230531092101426</figcaption></figure>',8),c=[r];function l(t,o){return s(),n("div",null,c)}const v=e(d,[["render",l],["__file","Docker常见问题记录.html.vue"]]);export{v as default};
