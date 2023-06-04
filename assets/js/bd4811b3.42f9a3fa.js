"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:u,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:N}=(0,s.U)(),[v,y]=(0,r.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=u){const e=C[u];null!=e&&e!==v&&h.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,n=S.indexOf(t),a=h[n].value;a!==v&&(w(t),y(a),null!=u&&N(u,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>S.push(e),onKeyDown:E,onClick:T},o,{className:(0,i.Z)("tabs__item",d,o?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},7304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={id:"Jdbc-Connector",title:"JDBC Connector",sidebar_position:2},s=void 0,c={unversionedId:"connector/Jdbc-Connector",id:"connector/Jdbc-Connector",title:"JDBC Connector",description:"Flink officially provides the JDBC connector for reading from or writing to JDBC, which can provides AT_LEAST_ONCE (at least once) processing semantics",source:"@site/docs/connector/2-jdbc.md",sourceDirName:"connector",slug:"/connector/Jdbc-Connector",permalink:"/docs/connector/Jdbc-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/2-jdbc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Jdbc-Connector",title:"JDBC Connector",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka Connector",permalink:"/docs/connector/Kafka-Connector"},next:{title:"ClickHouse Connector",permalink:"/docs/connector/Clickhouse-Connector"}},p={},d=[{value:"JDBC Configuration",id:"jdbc-configuration",level:2},{value:"Semantic",id:"semantic",level:3},{value:"EXACTLY_ONCE",id:"exactly_once",level:4},{value:"AT_LEAST_ONCE &amp;&amp; NONE",id:"at_least_once--none",level:4},{value:"Others",id:"others",level:3},{value:"JDBC read",id:"jdbc-read",level:2},{value:"queryFunc to get sql",id:"queryfunc-to-get-sql",level:3},{value:"resultFunc process the query data",id:"resultfunc-process-the-query-data",level:3},{value:"JDBC Read Write",id:"jdbc-read-write",level:2},{value:"Generate target SQL based on data flow",id:"generate-target-sql-based-on-data-flow",level:3},{value:"Set to write batch size",id:"set-to-write-batch-size",level:3},{value:"Multi-instance JDBC support",id:"multi-instance-jdbc-support",level:2},{value:"Specify JDBC connection information manually",id:"specify-jdbc-connection-information-manually",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flink officially provides the ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/connectors/jdbc.html"},"JDBC")," connector for reading from or writing to JDBC, which can provides ",(0,r.kt)("strong",{parentName:"p"},"AT_LEAST_ONCE")," (at least once) processing semantics"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark")," implements ",(0,r.kt)("strong",{parentName:"p"},"EXACTLY_ONCE")," (Exactly Once) semantics of ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSink")," based on two-stage commit, and uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},(0,r.kt)("inlineCode",{parentName:"a"},"HikariCP"))," as connection pool to make data reading and write data more easily and accurately"),(0,r.kt)("h2",{id:"jdbc-configuration"},"JDBC Configuration"),(0,r.kt)("p",null,"The implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Jdbc Connector")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark")," uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},(0,r.kt)("inlineCode",{parentName:"a"},"HikariCP"))," connection pool, which is configured under the namespace of ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc"),", and the agreed configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  username: root\n  password: 123456\n  driverClassName: com.mysql.jdbc.Driver\n  connectionTimeout: 30000\n  idleTimeout: 30000\n  maxLifetime: 30000\n  maximumPoolSize: 6\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n")),(0,r.kt)("h3",{id:"semantic"},"Semantic"),(0,r.kt)("p",null,"The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"semantic")," is the semantics when writing in ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSink"),", only effect for ",(0,r.kt)("strong",{parentName:"p"},"JdbcSink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSource")," will automatically mask this parameter, there are three options"),(0,r.kt)("div",{class:"counter"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EXACTLY_ONCE"),(0,r.kt)("li",{parentName:"ul"},"AT_LEAST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"NONE"))),(0,r.kt)("h4",{id:"exactly_once"},"EXACTLY_ONCE"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSink")," is configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE")," semantics, the underlying two-phase commit implementation is used to complete the write, at this time to flink with ",(0,r.kt)("inlineCode",{parentName:"p"},"Checkpointing")," to take effect, how to open checkpoint please refer to Chapter 2 on ",(0,r.kt)("a",{parentName:"p",href:"/docs/model/conf"},"checkpoint")," configuration section"),(0,r.kt)("h4",{id:"at_least_once--none"},"AT_LEAST_ONCE && NONE"),(0,r.kt)("p",null,"The default does not specify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"NONE")," semantics will be used, both configurations have the same effect, both are guaranteed ",(0,r.kt)("strong",{parentName:"p"},"at least once")," semantics"),(0,r.kt)("admonition",{title:"tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The benefit of turning on ",(0,r.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE")," exactly once is obvious, to ensure the accuracy of the data, but the cost is also high, the need for ",(0,r.kt)("inlineCode",{parentName:"p"},"checkpoint")," support, the underlying simulation of the transaction is submitted to read, there is a certain loss of real-time, if your business requirements for data accuracy is not so high, it is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AT_LEAST_ONCE")," semantics")),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("p",null,"Except for the special ",(0,r.kt)("inlineCode",{parentName:"p"},"semantic")," configuration item, all other configurations must comply with the ",(0,r.kt)("strong",{parentName:"p"},"HikariCP")," connection pool configuration, please refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Light HikariCP")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/"},"official website documentation")," for the specific configurable items and the role of each parameter. HikariCP#gear-configuration-knobs-baby)."),(0,r.kt)("h2",{id:"jdbc-read"},"JDBC read"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSource")," is used to read data, and according to the data ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," to read data can be replayed, we look at the specific how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSource")," to read data, if the demand is as follows"),(0,r.kt)("div",{class:"counter"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"t_order")," table, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," field, starting at ",(0,r.kt)("inlineCode",{parentName:"li"},"2020-12-16 12:00:00")," and extracting data from there."),(0,r.kt)("li",{parentName:"ul"},"Construct the read data into an ",(0,r.kt)("inlineCode",{parentName:"li"},"Order")," object and return it"))),(0,r.kt)("p",null,"The jdbc configuration and reading code is as follows"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Setting",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc:\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n"))),(0,r.kt)(o.Z,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.source.JdbcSource\nimport org.apache.flink.api.scala._\n\nobject MySQLSourceApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n    JdbcSource().getDataStream[Order](lastOne => {\n      Thread.sleep(5000);\n      val laseOffset = if (lastOne == null) "2020-12-16 12:00:00" else lastOne.timestamp\n      s"select * from t_order where timestamp > \'$laseOffset\' order by timestamp asc "\n    },\n      _.map(x => new Order(x("market_id").toString, x("timestamp").toString))\n    ).print()\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.streampark.flink.core.java.function.SQLQueryFunction;\nimport org.apache.streampark.flink.core.java.function.SQLResultFunction;\nimport org.apache.streampark.flink.core.java.function.StreamEnvConfigFunction;\nimport org.apache.streampark.flink.core.java.source.JdbcSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\n\nimport java.io.Serializable;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MySQLJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        new JdbcSource<Order>(context)\n                .getDataStream(\n                        (SQLQueryFunction<Order>) lastOne -> {\n                            Thread.sleep(5000);\n\n                            Serializable lastOffset = lastOne == null\n                            ? "2020-12-16 12:00:00"\n                            : lastOne.timestamp;\n\n                            return String.format(\n                                "select * from t_order " +\n                                "where timestamp > \'%s\' " +\n                                "order by timestamp asc ",\n                                lastOffset\n                            );\n                        },\n                        (SQLResultFunction<Order>) iterable -> {\n                            List<Order> result = new ArrayList<>();\n                            iterable.forEach(item -> {\n                                Order Order = new Order();\n                                Order.marketId = item.get("market_id").toString();\n                                Order.timestamp = Long.parseLong(item.get("timestamp").toString());\n                                result.add(Order);\n                            });\n                            return result;\n                        })\n                .returns(TypeInformation.of(Order.class))\n                .print();\n\n        context.start();\n    }\n}\n')))),(0,r.kt)("p",null,"Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," api as an example, here you have to accept two parameters"),(0,r.kt)("div",{class:"counter"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SQLQueryFunction<T> queryFunc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SQLResultFunction<T> resultFunc")))),(0,r.kt)("h3",{id:"queryfunc-to-get-sql"},"queryFunc to get sql"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryFunc")," needs to pass in a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLQueryFunction"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," is used to get the query sql, will return the last record to the developer, and then the developer needs to return a new query ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," according to the last record, ",(0,r.kt)("inlineCode",{parentName:"p"},"queryFunc")," is defined as follows :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface SQLQueryFunction<T> extends Serializable {\n    /**\n     * @return query sql\n     */\n    String query(T last) throws Exception;\n}\n")),(0,r.kt)("p",null,"So the above code, the first time ",(0,r.kt)("inlineCode",{parentName:"p"},"lastOne")," (the last record) equals null, and will be judged, if null will take the default ",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),", query sql according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," field in positive order, so that after the first query, will return the last record, the next time you can directly use this record as the basis for the next query"),(0,r.kt)("admonition",{title:"Cautions",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSource")," implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckpointedFunction"),", that is, when the program opens ",(0,r.kt)("strong",{parentName:"p"},"checkpoint"),", it will save these state data such as ",(0,r.kt)("inlineCode",{parentName:"p"},"laseOffset")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"state backend"),", so that when the program hangs, it will automatically restore ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"checkpoint"),", and continue to read data from the last position,\nIn the production environment, a more flexible way is writing ",(0,r.kt)("inlineCode",{parentName:"p"},"lastOffset")," to storage, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),", after each query and then update the offset to ",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),", so that even if the program hangs unexpectedly, you can also get the last ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," for data extract, but also very convenient to adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," for data replay")),(0,r.kt)("h3",{id:"resultfunc-process-the-query-data"},"resultFunc process the query data"),(0,r.kt)("p",null,"The parameter type of ",(0,r.kt)("inlineCode",{parentName:"p"},"resultFunc")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLResultFunction<T>"),", which puts a query result set into ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterable<Map<String, ? >>"),", and then returns it to the developer, at the same time, you can see that each iteration of the iterator returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," records a complete line of records, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is the query field, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is the value, ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLResultFunction<T>")," is defined as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface SQLResultFunction<T> extends Serializable {\n    Iterable<T> result(Iterable<Map<String, ?>> iterable);\n}\n")),(0,r.kt)("h2",{id:"jdbc-read-write"},"JDBC Read Write"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSink")," is used to write data, let's see how to write data with ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSink"),", the example is to read data from ",(0,r.kt)("inlineCode",{parentName:"p"},"kakfa")," and write to ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),"."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Setting",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kafka.source:\n  bootstrap.servers: kfk1:9092,kfk2:9092,kfk3:9092\n  pattern: user\n  group.id: user_02\n  auto.offset.reset: earliest # (earliest | latest)\n  ...\n\njdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n")),(0,r.kt)("admonition",{title:"Cautions",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The configuration under ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc")," ",(0,r.kt)("strong",{parentName:"p"},"semantic")," is the semantics of writing, as described in ",(0,r.kt)("a",{parentName:"p",href:"#jdbc-info-config"},"Jdbc Info Configuration"),", the configuration will only take effect on ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcSink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark")," is based on two-phase commit to achieve ",(0,r.kt)("strong",{parentName:"p"},"EXACTLY_ONCE")," semantics,\nThis requires that the database being manipulated supports transactions(",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MariaDB"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MS SQL Server"),"), theoretically all databases that support standard Jdbc transactions can do EXACTLY_ONCE (exactly once) write"))),(0,r.kt)(o.Z,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.streampark.common.util.JsonUtils\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.JdbcSink\nimport org.apache.streampark.flink.core.scala.source.KafkaSource\nimport org.apache.flink.api.common.typeinfo.TypeInformation\nimport org.apache.flink.api.java.typeutils.TypeExtractor.getForClass\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema\n\nobject JdbcSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n        val source = KafkaSource()\n          .getDataStream[String]()\n          .map(x => JsonUtils.read[User](x.value))\n\n        JdbcSink().sink[User](source)(user =>\n          s"""\n          |insert into t_user(`name`,`age`,`gender`,`address`)\n          |value(\'${user.name}\',${user.age},${user.gender},\'${user.address}\')\n          |""".stripMargin\n        )\n  }\n\n}\n\ncase class User(name:String,age:Int,gender:Int,address:String)\n\n'))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.fasterxml.jackson.databind.ObjectMapper;\nimport org.apache.streampark.flink.core.java.function.StreamEnvConfigFunction;\nimport org.apache.streampark.flink.core.java.source.KafkaSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.source.KafkaRecord;\nimport org.apache.streampark.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema;\nimport org.apache.kafka.clients.consumer.ConsumerRecord;\n\nimport java.io.Serializable;\n\nimport static org.apache.flink.api.java.typeutils.TypeExtractor.getForClass;\n\npublic class JdbcSinkJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        ObjectMapper mapper = new ObjectMapper();\n\n        DataStream<JavaUser> source = new KafkaSource<String>(context)\n                .getDataStream()\n                .map((MapFunction<KafkaRecord<String>, JavaUser>) value ->\n                    mapper.readValue(value.value(), JavaUser.class));\n\n        new JdbcSink<JavaUser>(context)\n                .sql((SQLFromFunction<JavaUser>) JavaUser::toSql)\n                .sink(source);\n\n        context.start();\n    }\n\n}\n\nclass JavaUser implements Serializable {\n    String name;\n    Integer age;\n    Integer gender;\n    String address;\n    public String toSql() {\n        return String.format(\n                \"insert into t_user(`name`,`age`,`gender`,`address`) value('%s',%d,%d,'%s')\",\n                name,\n                age,\n                gender,\n                address);\n    }\n}\n\n")))),(0,r.kt)("h3",{id:"generate-target-sql-based-on-data-flow"},"Generate target SQL based on data flow"),(0,r.kt)("p",null,"When writing, you need to know the specific ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," statement to write, the ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," statement needs to be provided by the developer by a way of the ",(0,r.kt)("inlineCode",{parentName:"p"},"function"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scala")," api, directly after the ",(0,r.kt)("inlineCode",{parentName:"p"},"sink")," method followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"function"),", while the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," api is passed a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLFromFunction")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"sql()")," method"),(0,r.kt)("p",null,"The following is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," api, let's look at the definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," method that provides sql in the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface SQLFromFunction<T> extends Serializable {\n    /**\n     * @param bean\n     * @return\n     */\n    String from(T bean);\n}\n")),(0,r.kt)("p",null,"The generic ",(0,r.kt)("inlineCode",{parentName:"p"},"<T>")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLFromFunction")," is the actual data type in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataStream"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," has a method ",(0,r.kt)("inlineCode",{parentName:"p"},"form(T bean)"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"bean")," is a specific data in the current ",(0,r.kt)("inlineCode",{parentName:"p"},"DataStream"),", the data will be returned to the developer, the developer will based on this data, generate a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," that can be inserted into the database"),(0,r.kt)("h3",{id:"set-to-write-batch-size"},"Set to write batch size"),(0,r.kt)("p",null,"In non-",(0,r.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE")," (under the semantics of exactly once) you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"batch.size")," to improve the performance of JDBC writes (provided that the business allows it), configured as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n  batch.size: 1000\n")),(0,r.kt)("p",null,"In this way, instead of writing data immediately when it comes, and then performs a bulk insert"),(0,r.kt)("admonition",{title:"Cautions",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This setting only takes effect the non-",(0,r.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE")," semantics, the benefit is to improve the performance of Jdbc writes, a large number of data insertion, the disadvantage is that data writing will inevitably have a delay, please use caution according to the actual use of the situation")),(0,r.kt)("h2",{id:"multi-instance-jdbc-support"},"Multi-instance JDBC support"),(0,r.kt)("h2",{id:"specify-jdbc-connection-information-manually"},"Specify JDBC connection information manually"))}u.isMDXComponent=!0}}]);