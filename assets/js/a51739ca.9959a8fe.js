"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(7462),i=t(7294),r=t(6010),o=t(2389),s=t(7392),d=t(7094),l=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:n,block:t,defaultValue:o,values:m,groupId:u,className:h}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),k=(0,s.l)(f,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,d.U)(),[S,w]=(0,i.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:R}=(0,l.o5)();if(null!=u){const e=v[u];null!=e&&e!==S&&f.some((n=>n.value===e))&&w(e)}const E=e=>{const n=e.currentTarget,t=T.indexOf(n),a=f[t].value;a!==S&&(R(n),w(a),null!=u&&b(u,String(a)))},C=e=>{let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}n?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},h)},f.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:e=>T.push(e),onKeyDown:C,onClick:E},o,{className:(0,r.Z)("tabs__item",p,o?.className,{"tabs__item--active":S===n})}),t??n)}))),n?(0,i.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==S})))))}function u(e){const n=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(n)},e))}},7264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905)),r=t(5488),o=t(5162);const s={id:"Redis-Connector",title:"Redis Connector",sidebar_position:8},d=void 0,l={unversionedId:"connector/Redis-Connector",id:"connector/Redis-Connector",title:"Redis Connector",description:"Redis is an open source in-memory data structure storage system that can be used as a database, cache, and messaging middleware. It supports many types of data structures such as strings, hashes, lists, sets, ordered sets and range queries, bitmaps, hyperlogloglogs and geospatial index radius queries. Redis has built-in transactions and various levels of disk persistence, and provides high availability through Redis Sentinel and Cluster.",source:"@site/docs/connector/8-redis.md",sourceDirName:"connector",slug:"/connector/Redis-Connector",permalink:"/docs/connector/Redis-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/8-redis.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"Redis-Connector",title:"Redis Connector",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Http Connector",permalink:"/docs/connector/Http-Connector"},next:{title:"Advanced extension",permalink:"/docs/advanced/"}},c={},p=[{value:"Redis Write Dependency",id:"redis-write-dependency",level:2},{value:"Writing Redis the Regular Way",id:"writing-redis-the-regular-way",level:2},{value:"1.Access to source",id:"1access-to-source",level:3},{value:"2. Write to redis",id:"2-write-to-redis",level:3},{value:"StreamPark Writes to Redis",id:"streampark-writes-to-redis",level:2},{value:"1. Configure policy and connection information",id:"1-configure-policy-and-connection-information",level:3},{value:"2. Write to Redis",id:"2-write-to-redis-1",level:3},{value:"Supported redis operating commands",id:"supported-redis-operating-commands",level:3},{value:"Other Configuration",id:"other-configuration",level:2}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.redis.cn/"},"Redis")," is an open source in-memory data structure storage system that can be used as a database, cache, and messaging middleware. It supports many types of data structures such as strings, hashes, lists, sets, ordered sets and range queries, bitmaps, hyperlogloglogs and geospatial index radius queries. Redis has built-in transactions and various levels of disk persistence, and provides high availability through Redis Sentinel and Cluster."),(0,i.kt)("p",null," Flink does not officially provide a connector for writing reids data.StreamPark is based on ",(0,i.kt)("a",{parentName:"p",href:"https://bahir.apache.org/docs/flink/current/flink-streaming-redis/"},"Flink Connector Redis"),"\nIt encapsulates RedisSink, configures redis connection parameters, and automatically creates redis connections to simplify development. Currently, RedisSink supports the following connection methods: single-node mode, sentinel mode, and cluster mode because it does not support transactions."),(0,i.kt)("p",null,"StreamPark uses Redis' ",(0,i.kt)("strong",{parentName:"p"},"MULTI")," command to open a transaction and the ",(0,i.kt)("strong",{parentName:"p"},"EXEC")," command to commit a transaction, see the link for details:\n",(0,i.kt)("a",{parentName:"p",href:"http://www.redis.cn/topics/transactions.html"},"http://www.redis.cn/topics/transactions.html")," , using RedisSink supports AT_LEAST_ONCE (at least once) processing semantics by default. EXACTLY_ONCE semantics are supported with checkpoint enabled."),(0,i.kt)("admonition",{title:"tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"redis is a key,value type database, AT_LEAST_ONCE semantics flink job with abnormal restart the latest data will overwrite the previous version of data to achieve the final data consistency. If an external program reads the data during the restart, there is a risk of inconsistency with the final data.\nEXACTLY_ONCE semantics will write to redis in batch when the flink job checkpoint is completed as a whole, and there will be a delay of checkpoint interval. Please choose the appropriate semantics according to the business scenario.")),(0,i.kt)("h2",{id:"redis-write-dependency"},"Redis Write Dependency"),(0,i.kt)("p",null,"Flink Connector Redis officially provides two kinds, the following two api are the same, StreamPark is using org.apache.bahir dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.bahir</groupId>\n    <artifactId>flink-connector-redis_2.11</artifactId>\n    <version>1.0</version>\n</dependency>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-redis_2.10</artifactId>\n    <version>1.1.5</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"writing-redis-the-regular-way"},"Writing Redis the Regular Way"),(0,i.kt)("p",null,"The regular way of writing data using Flink Connector Redis is as follows:"),(0,i.kt)("h3",{id:"1access-to-source"},"1.Access to source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.flink.streaming.api.functions.source.SourceFunction;\nimport scala.util.Random;\n\npublic class TestSource implements SourceFunction<TestEntity> {\n\n    private boolean isRunning = true;\n\n    private Random random = new Random();\n\n    private int index = 0;\n\n    @Override\n    public void run(SourceContext<TestEntity> sourceContext) throws Exception {\n        while (isRunning && index <= 1000001) {\n            index += 1;\n            long userId = System.currentTimeMillis();\n            long orderId = random.nextInt(100);\n            int status = random.nextInt(1);\n            double price = random.nextDouble();\n            int quantity = new Random().nextInt(10);\n            TestEntity order = new TestEntity(userId, orderId, 1l, 1l, status, price, quantity, System.currentTimeMillis());\n            sourceContext.collect(order);\n        }\n    }\n\n    @Override\n    public void cancel() {\n        this.isRunning = false;\n    }\n}\nclass TestEntity {\n    Long userId;\n    Long orderId;\n    Long siteId;\n    Long cityId;\n    Integer orderStatus;\n    Double price;\n    Integer quantity;\n    Long timestamp;\n\n    /**\n     * @param userId      : User ID\n     * @param orderId     : Order ID\n     * @param siteId      : Site ID\n     * @param cityId      : City ID\n     * @param orderStatus : Order status(1:Place order,0:Return order)\n     * @param price       : Unit price\n     * @param quantity    : Number of orders\n     * @param timestamp   : Order time\n     */\n    public TestEntity(Long userId, Long orderId, Long siteId, Long cityId, Integer orderStatus, Double price, Integer quantity, Long timestamp) {\n        this.userId = userId;\n        this.orderId = orderId;\n        this.siteId = siteId;\n        this.cityId = cityId;\n        this.orderStatus = orderStatus;\n        this.price = price;\n        this.quantity = quantity;\n        this.timestamp = timestamp;\n    }\n}\n\n")),(0,i.kt)("h3",{id:"2-write-to-redis"},"2. Write to redis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.connectors.redis.RedisSink;\nimport org.apache.flink.streaming.connectors.redis.common.config.FlinkJedisPoolConfig;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommandDescription;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisMapper;\n\npublic class FlinkRedisSink {\n\n    public static void main(String[] args) throws Exception {\n        //1.Get the execution environment\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        env.setParallelism(1);\n\n        //2.Read data and convert to JavaBean\n        DataStreamSource<TestEntity> source = env.addSource(new TestSource(), TypeInformation.of(TestEntity.class));\n        //3.Write Data to Redis\n        FlinkJedisPoolConfig jedisPoolConfig = new FlinkJedisPoolConfig.Builder()\n                .setHost("localhost")\n                .setPort(6379)\n                .build();\n        source.addSink(new RedisSink<>(jedisPoolConfig, new MyRedisMapper()));\n\n        //4.Perform the task\n        env.execute();\n    }\n\n    public static class MyRedisMapper implements RedisMapper<TestEntity> {\n        @Override\n        public RedisCommandDescription getCommandDescription() {\n            // Returns the type of data that exists in Redis, stored as a hash, with the second parameter being the outside key\n            return new RedisCommandDescription(RedisCommand.HSET, "");\n        }\n\n        @Override\n        public String getKeyFromData(TestEntity data) {\n            // Get Key from data: Key of Hash\n            return String.valueOf(data.userId());\n        }\n\n        @Override\n        public String getValueFromData(TestEntity data) {\n            // Get Value from data: Value of Hash\n            return String.valueOf(data.price());\n        }\n    }\n\n}\n')),(0,i.kt)("p",null,"The above creation of FlinkJedisPoolConfig is tedious, and each operation of redis has to build RedisMapper, which is very insensitive. ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamPark")," uses a convention over configuration and automatic configuration. This only requires configuring redis\nStreamPark automatically assembles the source and sink parameters, which greatly simplifies the development logic and improves development efficiency and maintainability."),(0,i.kt)("h2",{id:"streampark-writes-to-redis"},"StreamPark Writes to Redis"),(0,i.kt)("p",null,"RedisSink defaults to AT_LEAST_ONCE (at least once) processing semantics, two-stage segment submission supports EXACTLY_ONCE semantics with checkpoint enabled, available connection types: single-node mode, sentinel mode."),(0,i.kt)("h3",{id:"1-configure-policy-and-connection-information"},"1. Configure policy and connection information"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Single-node configuration",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink configuration\nredis.sink:\n  host: 127.0.0.1 #Required parameters\n  #Optional parameters\n  port: 6379\n  database: 2\n  password:\n  connectType: jedisPool #Optional parameters: jedisPool\uff08\u9ed8\u8ba4\uff09|sentinel\n  maxTotal:\n  maxIdle:\n  minIdle:\n  connectionTimeout:\n"))),(0,i.kt)(o.Z,{value:"Sentinel mode configuration",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink configuration\nredis.sink:\n  masterName: master # Sentinel mode parameters\n  host: 192.168.0.1:6379, 192.168.0.3:6379 # Required parameter, must specify the port of the connection\n  connectType: sentinel\n  #Optional parameters\n  soTimeout: 6379\n  database: 2\n  password:\n  maxTotal:\n  maxIdle:\n  minIdle:\n  connectionTimeout:\n")))),(0,i.kt)("h3",{id:"2-write-to-redis-1"},"2. Write to Redis"),(0,i.kt)("p",null,"Writing to redis with StreamPark is very simple, the code is as follows:"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.{RedisMapper, RedisSink}\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand\nimport org.json4s.DefaultFormats\n\nobject FlinkRedisSinkApp extends FlinkStreaming {\n\n  @transient\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n\n    /**\n     * Create the source of read data\n     */\n    val source = context.addSource(new TestSource)\n\n\n    // Redis sink..................\n    //1)Define RedisSink\n    val sink: RedisSink = RedisSink()\n    //2)Write Mapper\'s mapping\n    val personMapper: RedisMapper[TestEntity] = RedisMapper[TestEntity](RedisCommand.HSET, "flink_user", _.userId.toString, _.orderId.toString)\n\n    sink.sink[TestEntity](source, personMapper, 60000000).setParallelism(1)\n\n  }\n\n}\n\n\n/**\n * RedisMapper\n * @param cmd redis -Write command\n * @param additionalKey -Write additional keys, applicable to hset\n * @param key -Write key\n * @param value -Write value\n * @tparam T\n */\ncase class RedisMapper[T](cmd: RedisCommand, additionalKey: String, key: T => String, value: T => String) extends RMapper[T] {\n\n  override def getCommandDescription: RedisCommandDescription = new RedisCommandDescription(cmd, additionalKey)\n\n  override def getKeyFromData(r: T): String = key(r)\n\n  override def getValueFromData(r: T): String = value(r)\n\n}\n')))),(0,i.kt)("p",null,"As the code shows, StreamPark automatically loads the configuration to create a RedisSink, and the user completes the redis write operation by creating the required RedisMapper object, ",(0,i.kt)("strong",{parentName:"p"},"additionalKey is the outermost key when hset is invalid for other write commands"),".\nRedisSink.sink() write the corresponding key corresponding to the data is required to specify the expiration time, if not specified default expiration time is java Integer.MAX_VALUE (67 years). As shown in the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'class RedisSink() extends Sink {\n\n  def sink[T](stream: DataStream[T], mapper: RedisMapper[T], ttl: Int = Int.MaxValue): DataStreamSink[T] = {\n    val sinkFun = (enableCheckpoint, cpMode) match {\n      case (false, CheckpointingMode.EXACTLY_ONCE) => throw new IllegalArgumentException("redis sink EXACTLY_ONCE must enable checkpoint")\n      case (true, CheckpointingMode.EXACTLY_ONCE) => new Redis2PCSinkFunction[T](config, mapper, ttl)\n      case _ => new RedisSinkFunction[T](config, mapper, ttl)\n    }\n    val sink = stream.addSink(sinkFun)\n    afterSink(sink, parallelism, name, uid)\n  }\n\n}\n\n')),(0,i.kt)("h3",{id:"supported-redis-operating-commands"},"Supported redis operating commands"),(0,i.kt)("p",null,"The following commands are supported for redis operations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public enum RedisCommand {\n\n    /**\n     * Insert the specified value at the head of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operations.\n     */\n    LPUSH(RedisDataType.LIST),\n\n    /**\n     * Insert the specified value at the tail of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operation.\n     */\n    RPUSH(RedisDataType.LIST),\n\n    /**\n     * Add the specified member to the set stored at key.\n     * Specified member that is already a member of this set is ignored.\n     */\n    SADD(RedisDataType.SET),\n\n    /**\n     * Set key to hold the string value. If key already holds a value,\n     * it is overwritten, regardless of its type.\n     */\n    SET(RedisDataType.STRING),\n\n    /**\n     * Adds the element to the HyperLogLog data structure stored at the variable name specified as first argument.\n     */\n    PFADD(RedisDataType.HYPER_LOG_LOG),\n\n    /**\n     * Posts a message to the given channel.\n     */\n    PUBLISH(RedisDataType.PUBSUB),\n\n    /**\n     * Adds the specified members with the specified score to the sorted set stored at key.\n     */\n    ZADD(RedisDataType.SORTED_SET),\n\n    /**\n     * Removes the specified members from the sorted set stored at key.\n     */\n    ZREM(RedisDataType.SORTED_SET),\n\n    /**\n     * Sets field in the hash stored at key to value. If key does not exist,\n     * a new key holding a hash is created. If field already exists in the hash, it is overwritten.\n     */\n    HSET(RedisDataType.HASH);\n}\n")),(0,i.kt)("admonition",{title:"Warning",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"RedisSink currently supports single-node mode and sentinel mode connections. And its cluster mode does not support transactions, but StreamPark is currently for support. Please call the official Flink Connector Redis api if you have a usage scenario.",(0,i.kt)("br",null),"\nCheckpoint must be enabled under EXACTLY_ONCE semantics, otherwise the program will throw parameter exceptions.",(0,i.kt)("br",null),"\nEXACTLY_ONCE semantics checkpoint data sink cache inside the memory, you need to reasonably set the checkpoint interval according to the actual data, otherwise there is a risk of ",(0,i.kt)("strong",{parentName:"p"},"oom"),".",(0,i.kt)("br",null))),(0,i.kt)("h2",{id:"other-configuration"},"Other Configuration"),(0,i.kt)("p",null,"All other configurations must adhere to the ",(0,i.kt)("strong",{parentName:"p"},"StreamPark")," configuration, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/conf"},"project configuration")," for specific configurable items and the role of each parameter."))}u.isMDXComponent=!0}}]);