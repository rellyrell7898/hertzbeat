"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[3692],{4137:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,s=u["".concat(m,".").concat(k)]||u[k]||c[k]||l;return n?r.createElement(s,o(o({ref:e},d),{},{components:n})):r.createElement(s,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7779:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const l={id:"docker",title:"Monitor\uff1aDocker Monitor",sidebar_label:"Docker Monitor"},o=void 0,i={unversionedId:"help/docker",id:"help/docker",title:"Monitor\uff1aDocker Monitor",description:"Collect and monitor general performance Metrics of Docker containers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/docker.md",sourceDirName:"help",slug:"/help/docker",permalink:"/en/docs/help/docker",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/docker.md",tags:[],version:"current",frontMatter:{id:"docker",title:"Monitor\uff1aDocker Monitor",sidebar_label:"Docker Monitor"},sidebar:"docs",previous:{title:"Apache Tomcat",permalink:"/en/docs/help/tomcat"},next:{title:"Kubernetes \u76d1\u63a7",permalink:"/en/docs/help/kubernetes"}},m={},p=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Metric collection: system",id:"metric-collection-system",level:4},{value:"Metric collection: containers",id:"metric-collection-containers",level:4},{value:"Metrics collection: stats",id:"metrics-collection-stats",level:4}],d={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collect and monitor general performance Metrics of Docker containers.")),(0,a.kt)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,a.kt)("p",null,"If you want to monitor the container information in ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker"),", you need to open the port according to the following steps, so that the collection request can obtain the corresponding information."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Edit the docker.server file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vi /usr/lib/systemd/system/docker.service\n")),(0,a.kt)("p",null,"Find the ",(0,a.kt)("strong",{parentName:"p"},"[Service]")," node, modify the ExecStart property, and add ",(0,a.kt)("inlineCode",{parentName:"p"},"-H tcp://0.0.0.0:2375")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375\n")),(0,a.kt)("p",null,"This is equivalent to the ",(0,a.kt)("strong",{parentName:"p"},"2375")," port that is open to the outside world. Of course, it can be modified to other ports according to your own situation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Reload the Docker configuration to take effect:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\nsystemctl restart docker\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Remember to open the ",(0,a.kt)("inlineCode",{parentName:"strong"},"2375")," port number in the server console. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. If the above method does not work:")),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"2375")," port number inside the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"firewall-cmd --zone=public --add-port=2375/tcp --permanent\nfirewall-cmd --reload\n")),(0,a.kt)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored peer IPV4, IPV6 or domain name. Note \u26a0\ufe0f without protocol headers (eg: https://, http://).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identifies the name of this monitor. The name needs to be unique.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"The port provided by the database externally, the default is 2375.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Query Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the timeout when getting the Docker server API interface, in ms, the default is 3000 ms.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Container Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Generally monitors all running container information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"connection username, optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"connection password, optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Database connection URL, optional, if configured, the parameters such as database name, username and password in the URL will override the parameters configured above")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitor periodical collection data interval, in seconds, the minimum interval that can be set is 10 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and then continue to add and modify operations if the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description Remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"More remarks that identify and describe this monitoring, users can remark information here")))),(0,a.kt)("h3",{id:"collect-metrics"},"Collect metrics"),(0,a.kt)("h4",{id:"metric-collection-system"},"Metric collection: system"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Server Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"docker version number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"os"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"server version eg: linux x86_64")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"root_dir"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"docker folder directory eg: /var/lib/docker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"containers"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Total number of containers (running + not running)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"containers_running"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of running containers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"containers_paused"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"number of containers in pause")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"images"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of container images.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ncpu"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"ncpu")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mem_total"),(0,a.kt)("td",{parentName:"tr",align:null},"MB"),(0,a.kt)("td",{parentName:"tr",align:null},"Total size of memory used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"system_time"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"system time")))),(0,a.kt)("h4",{id:"metric-collection-containers"},"Metric collection: containers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the container in Docker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The container name in the Docker container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"image"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Image used by the Docker container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"command"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Default startup command in Docker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"state"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The running state of the container in Docker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Update time in Docker container")))),(0,a.kt)("h4",{id:"metrics-collection-stats"},"Metrics collection: stats"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The name in the Docker container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"available_memory"),(0,a.kt)("td",{parentName:"tr",align:null},"MB"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of memory that the Docker container can utilize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"used_memory"),(0,a.kt)("td",{parentName:"tr",align:null},"MB"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of memory already used by the Docker container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memory_usage"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Memory usage of the Docker container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cpu_delta"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of CPUs already used by the Docker container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number_cpus"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of CPUs that the Docker container can use")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cpu_usage"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker container CPU usage")))))}c.isMDXComponent=!0}}]);