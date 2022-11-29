!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios"),require("socket.io-client")):"function"==typeof define&&define.amd?define(["axios","socket.io-client"],e):"object"==typeof exports?exports.avcore=e(require("axios"),require("socket.io-client")):t.avcore=e(t.axios,t.io)}(this,(function(t,e){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){"use strict";var r;i.d(e,"a",(function(){return r})),i.d(e,"l",(function(){return n})),i.d(e,"k",(function(){return o})),i.d(e,"d",(function(){return s})),i.d(e,"m",(function(){return u})),i.d(e,"f",(function(){return d})),i.d(e,"e",(function(){return E})),i.d(e,"j",(function(){return c})),i.d(e,"i",(function(){return R})),i.d(e,"c",(function(){return S})),i.d(e,"b",(function(){return a})),i.d(e,"g",(function(){return T})),i.d(e,"h",(function(){return _})),function(t){t.GET_SERVER_CONFIGS="getServerConfigs",t.CREATE_TRANSPORT="createTransport",t.CONNECT_TRANSPORT="connectTransport",t.CLOSE_TRANSPORT="closeTransport",t.PRODUCE="produce",t.CONSUME="consume",t.RESUME_CONSUMER="resumeConsumer",t.PAUSE_CONSUMER="pauseConsumer",t.CLOSE_CONSUMER="closeConsumer",t.RESUME_PRODUCER="resumeProducer",t.PAUSE_PRODUCER="pauseProducer",t.CLOSE_PRODUCER="closeProducer",t.FILE_STREAMING="fileStreaming",t.LIVE_STREAMING="liveStreaming",t.LIVE_TO_HLS="liveToHls",t.TCP_STREAMING="tcpStreaming",t.STOP_FILE_STREAMING="stopFileStreaming",t.START_RECORDING="startRecording",t.STOP_RECORDING="stopRecording",t.CREATE_PIPE_TRANSPORT="createPipeTransport",t.CONNECT_PIPE_TRANSPORT="connectPipeTransport",t.SET_PREFERRED_LAYERS="setPreferredLayers",t.SET_MAX_INCOMING_BITRATE="setMaxIncomingBitrate",t.PRODUCERS_STATS="producersStats",t.PRODUCERS_STATS_BY_STREAM="producersStatsByStream",t.CONSUMERS_STATS="consumersStats",t.TRANSPORT_STATS="transportStats",t.PIPE_TO_REMOTE_PRODUCER="pipeToRemoteProducer",t.PIPE_FROM_REMOTE_PRODUCER="pipeFromRemoteProducer",t.WORKER_LOAD="workerLoad",t.NUM_WORKERS="numWorkers",t.RECORDED_STREAMS="recordedStreams",t.STREAM_RECORDINGS="streamRecordings",t.DELETE_STREAM_RECORDINGS="deleteStreamRecordings",t.DELETE_RECORDING="deleteRecording",t.PUSH_TO_SERVER_INPUTS="pushToServerInputs",t.PULL_FROM_SERVER_INPUTS="pullFromServerInputs",t.PUSH_TO_SERVER_OPTIONS="pushToServerOptions",t.PUSH_TO_SERVER="pushToServer",t.KINDS_BY_FILE="kindsByFile",t.REQUEST_KEYFRAME="requestKeyframe",t.LISTEN_STREAM_STARTED="listenStreamStarted",t.LISTEN_STREAM_STOPPED="listenStreamStopped",t.ALLOCATE_PORT="allocatePort",t.RELEASE_PORT="releasePort",t.MIXER_START="mixerStart",t.MIXER_CLOSE="mixerClose",t.MIXER_ADD="mixerAdd",t.MIXER_ADD_FILE="mixerAddFile",t.MIXER_ADD_TCP="mixerAddTcp",t.MIXER_REMOVE="mixerRemove",t.MIXER_UPDATE="mixerUpdate",t.MIXER_PIPE_START="mixerPipeStart",t.MIXER_PIPE_STOP="mixerPipeStop",t.MIXER_COMMAND="mixerCommand",t.LISTEN_MIXER_STOPPED="listenMixerStopped",t.LISTEN_MIXER_FILE_STARTED="listenMixerFileStarted",t.LISTEN_MIXER_FILE_STOPPED="listenMixerFileStopped",t.CLEAR_PIPE_TRANSPORTS="clearPipeTransports",t.HEAP_SNAPSHOT="heapSnapshot"}(r||(r={}));const n=[r.GET_SERVER_CONFIGS,r.CREATE_TRANSPORT,r.CONNECT_TRANSPORT,r.CLOSE_TRANSPORT,r.PRODUCE,r.CONSUME,r.LISTEN_STREAM_STARTED,r.LISTEN_STREAM_STOPPED,r.LISTEN_MIXER_STOPPED,r.LISTEN_MIXER_FILE_STARTED,r.LISTEN_MIXER_FILE_STOPPED,r.CREATE_PIPE_TRANSPORT,r.CONNECT_PIPE_TRANSPORT,r.PIPE_TO_REMOTE_PRODUCER,r.PIPE_FROM_REMOTE_PRODUCER],o=Object.values(r).filter(t=>!n.includes(t));var s,u,d;!function(t){t.STREAM_STARTED="streamStarted",t.STREAM_STOPPED="streamStopped",t.MIXER_STOPPED="mixerStopped",t.MIXER_FILE_STARTED="mixerFileStarted",t.MIXER_FILE_STOPPED="mixerFileStopped"}(s||(s={})),function(t){t.STATS="stats",t.TRAFFIC="traffic",t.CPU="cpu",t.STREAM="stream"}(u||(u={})),function(t){t.INFO="info",t.MCU="mcu",t.GST="gst"}(d||(d={}));const E={ROOT:"hls",PLAYLIST:"master.m3u8"};var c;!function(t){t.API="api"}(c||(c={}));const R={PATH:"nexmo",AUDIO_SAMPLE_RATE:16e3,AUDIO_CHANNELS:1};var S,a,T,_,l;!function(t){t[t.UNKNOWN=500]="UNKNOWN",t[t.UNAUTHORIZED=401]="UNAUTHORIZED",t[t.INVALID_TRANSPORT=530]="INVALID_TRANSPORT",t[t.INVALID_PRODUCER=531]="INVALID_PRODUCER",t[t.INVALID_CONSUMER=532]="INVALID_CONSUMER",t[t.INVALID_STREAM=533]="INVALID_STREAM",t[t.INVALID_OPERATION=534]="INVALID_OPERATION",t[t.INVALID_WORKER=535]="INVALID_WORKER",t[t.INVALID_INPUT=536]="INVALID_INPUT",t[t.INVALID_ACTION=537]="INVALID_ACTION"}(S||(S={})),function(t){t[t.SUBSCRIBE=0]="SUBSCRIBE",t[t.PUBLISH=1]="PUBLISH",t[t.RECORDING=2]="RECORDING",t[t.STREAMING=3]="STREAMING",t[t.MIXER=4]="MIXER"}(a||(a={})),function(t){t[t.LIVE=0]="LIVE",t[t.RECORDING=1]="RECORDING",t[t.RTMP=2]="RTMP",t[t.HLS=3]="HLS",t[t.PORT=4]="PORT"}(T||(T={})),function(t){t.SCALE="scale",t.CROP="crop",t.PAD="pad"}(_||(_={})),function(t){t.OPUS="opus",t.H264="h264",t.VP8="vp8"}(l||(l={}))},function(e,i){e.exports=t},function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var r=i(6),n=i(1),o=i.n(n),s=i(0),u=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function s(t){try{d(r.next(t))}catch(t){o(t)}}function u(t){try{d(r.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,u)}d((r=r.apply(t,e||[])).next())}))};class d{constructor(t,e,i,r,n){this.closed=!1,this.log=r||console.log,this.url=t,this.worker=e,this.token=i,this.cloudApi=n}get client(){return this._client||(this._client=Object(r.io)(this.url,{path:"",transports:["websocket"],query:{auth_token:this.token,mediasoup_worker:this.worker},forceNew:!0})),this._client}connectSocket(){return new Promise((t,e)=>{this.client.connected?t():(this.client.on("error",t=>{"Not enough or too many segments"===t.message?t.errorId=s.c.UNAUTHORIZED:t.errorId=s.c.UNKNOWN,e(t)}),this.client.on("connect",t))})}resumeConsumer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.RESUME_CONSUMER,t)}))}pauseConsumer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.PAUSE_CONSUMER,t)}))}setPreferredLayers(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.SET_PREFERRED_LAYERS,t)}))}closeConsumer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.CLOSE_CONSUMER,t)}))}resumeProducer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.RESUME_PRODUCER,t)}))}pauseProducer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.PAUSE_PRODUCER,t)}))}closeProducer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.CLOSE_PRODUCER,t)}))}produce(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.PRODUCE,t)}))}consume(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.CONSUME,t)}))}createPipeTransport(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.CREATE_PIPE_TRANSPORT)}))}connectPipeTransport(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.CONNECT_PIPE_TRANSPORT,t)}))}closeTransport(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.CLOSE_TRANSPORT,t)}))}getServerConfigs(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.GET_SERVER_CONFIGS)}))}createTransport(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.CREATE_TRANSPORT)}))}connectTransport(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.CONNECT_TRANSPORT,t)}))}setMaxIncomingBitrate(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.SET_MAX_INCOMING_BITRATE,t)}))}producersStats(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.PRODUCERS_STATS,t)}))}producersStatsByStream(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.PRODUCERS_STATS_BY_STREAM,t)}))}consumersStats(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.CONSUMERS_STATS,t)}))}transportStats(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.TRANSPORT_STATS,t)}))}workerLoad(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.WORKER_LOAD)}))}numWorkers(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.NUM_WORKERS)}))}pipeToRemoteProducer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.PIPE_TO_REMOTE_PRODUCER,t)}))}pipeFromRemoteProducer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.PIPE_FROM_REMOTE_PRODUCER,t)}))}startRecording(t){return u(this,void 0,void 0,(function*(){!t.origin&&this.cloudApi&&(t.origin=yield this.cloudApi.streamOrigin(this,t.stream)),yield this.request(s.a.START_RECORDING,t)}))}stopRecording(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.STOP_RECORDING,t)}))}fileStreaming(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.FILE_STREAMING,t)}))}stopFileStreaming(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.STOP_FILE_STREAMING,t)}))}recordedStreams(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.RECORDED_STREAMS)}))}streamRecordings(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.STREAM_RECORDINGS,t)}))}deleteStreamRecordings(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.DELETE_STREAM_RECORDINGS,t)}))}deleteRecording(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.DELETE_RECORDING,t)}))}pushToServerInputs(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.PUSH_TO_SERVER_INPUTS,t)}))}pushToServerOptions(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.PUSH_TO_SERVER_OPTIONS,t)}))}pushToServer(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.PUSH_TO_SERVER,t)}))}pullFromServerInputs(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.PULL_FROM_SERVER_INPUTS,t)}))}kindsByFile(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.KINDS_BY_FILE,t)}))}requestKeyframe(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.REQUEST_KEYFRAME,t)}))}listenStreamStarted(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.LISTEN_STREAM_STARTED,t)}))}listenStreamStopped(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.LISTEN_STREAM_STOPPED,t)}))}liveStreaming(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.LIVE_STREAMING,t)}))}liveToHls(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.LIVE_TO_HLS,t)}))}tcpStreaming(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.TCP_STREAMING,t)}))}allocatePort(){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.ALLOCATE_PORT)}))}releasePort(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.RELEASE_PORT,t)}))}mixerStart(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.MIXER_START,t)}))}mixerClose(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_CLOSE,t)}))}mixerAdd(t){return u(this,void 0,void 0,(function*(){!t.origin&&this.cloudApi&&(t.origin=yield this.cloudApi.streamOrigin(this,t.stream)),yield this.request(s.a.MIXER_ADD,t)}))}mixerAddTcp(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_ADD_TCP,t)}))}mixerAddFile(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_ADD_FILE,t)}))}mixerUpdate(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_UPDATE,t)}))}mixerRemove(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_REMOVE,t)}))}mixerPipeStart(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.MIXER_PIPE_START,t)}))}mixerPipeStop(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_PIPE_STOP,t)}))}mixerCommand(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.MIXER_COMMAND,t)}))}listenMixerStopped(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.LISTEN_MIXER_STOPPED,t)}))}listenMixerFileStarted(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.LISTEN_MIXER_FILE_STARTED,t)}))}listenMixerFileStopped(t){return u(this,void 0,void 0,(function*(){return yield this.request(s.a.LISTEN_MIXER_FILE_STOPPED,t)}))}clearPipeTransports(t){return u(this,void 0,void 0,(function*(){yield this.request(s.a.CLEAR_PIPE_TRANSPORTS,t)}))}heapSnapshot(){return u(this,void 0,void 0,(function*(){yield this.request(s.a.HEAP_SNAPSHOT)}))}hlsUrl(t){return`${this.url}/${s.e.ROOT}/${t}/${s.e.PLAYLIST}`}location(){return this.url}streamOrigin(t){if(t&&t.url!==this.url){const{url:e,token:i,worker:r}=this;return{source:t,target:{url:e,token:i,worker:r}}}}clear(){this.closed=!0,this._client&&(this._client.removeAllListeners(),this.client.connected&&this._client.disconnect())}request(t,e={}){return u(this,void 0,void 0,(function*(){if(!this.closed)return this._client||s.l.includes(t)||t===s.a.MIXER_START&&e.closeOnDisconnected?this.socketRequest(t,e):this.restRequest(t,e)}))}socketRequest(t,e={}){return u(this,void 0,void 0,(function*(){return yield this.connectSocket(),this.log("sent message",t,JSON.stringify(e)),new Promise((i,r)=>{this.client.emit(t,e,e=>{e&&"boolean"!=typeof e&&e.hasOwnProperty("errorId")?(this.log("got error",t,JSON.stringify(e)),r(e)):(this.log("got message",t,JSON.stringify(e)),i(e))})})}))}restRequest(t,e={}){return u(this,void 0,void 0,(function*(){try{const{data:i}=yield o.a.post(`${this.url}/${s.j.API}/${this.worker}/${t}`,e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return this.log("got message",t,JSON.stringify(i)),i}catch(t){let e=s.c.UNKNOWN;throw this.log("got error",t),t.response&&t.response.status&&s.c[t.response.status]&&(e=t.response.status),{errorId:e}}}))}}},function(t,e){},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i(0);class n{static pinCodeChoice(t,e,i="Please, enter active pin code."){return[{action:"talk",text:i,bargeIn:!0},{action:"input",maxDigits:t,timeOut:10,eventUrl:[e]}]}static pinCodeChoiceRepeat(t,e,i="Sorry, this pin code is invalid.",r){return[{action:"talk",text:i},...n.pinCodeChoice(t,e,r)]}static mixerConnect(t,e,i="Connecting to meeting. Please, wait."){return[{action:"talk",text:i},{action:"connect",endpoint:[{type:"websocket",uri:`${t.replace("http","ws")}/${r.i.PATH}`,"content-type":"audio/l16;rate="+r.i.AUDIO_SAMPLE_RATE,headers:e}]}]}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var r=i(1),n=i.n(r),o=i(0),s=i(2),u=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function s(t){try{d(r.next(t))}catch(t){o(t)}}function u(t){try{d(r.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,u)}d((r=r.apply(t,e||[])).next())}))};class d{constructor(t,e,i){this.url=t,this.token=e,this.log=i}create(t,e,i){return u(this,void 0,void 0,(function*(){const{data:{config:{url:r,worker:o,token:u}}}=yield n.a.post(this.url+"/api/customer/config/api",{operation:t,mixerId:e,stream:i},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return new s.a(r,o,u,this.log,this)}))}streamOrigin(t,e){return u(this,void 0,void 0,(function*(){const{data:{config:{url:i,worker:r,token:s}}}=yield n.a.post(this.url+"/api/customer/config/sdk",{operation:o.b.PUBLISH,stream:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return t.streamOrigin({url:i,worker:r,token:s})}))}}},function(t,i){t.exports=e},function(t,e,i){"use strict";i.r(e);var r=i(0);i.d(e,"ERROR",(function(){return r.c})),i.d(e,"ACTION",(function(){return r.a})),i.d(e,"API_OPERATION",(function(){return r.b})),i.d(e,"EVENT",(function(){return r.d})),i.d(e,"STAT",(function(){return r.m})),i.d(e,"INFO",(function(){return r.f})),i.d(e,"MIXER_PIPE_TYPE",(function(){return r.g})),i.d(e,"NEXMO",(function(){return r.i})),i.d(e,"HLS",(function(){return r.e})),i.d(e,"PATH",(function(){return r.j})),i.d(e,"SOCKET_ONLY_ACTIONS",(function(){return r.l})),i.d(e,"REST_ACTIONS",(function(){return r.k})),i.d(e,"MIXER_RENDER_TYPE",(function(){return r.h}));var n=i(2);i.d(e,"MediasoupSocketApi",(function(){return n.a}));var o=i(3);for(var s in o)["default","ERROR","ACTION","API_OPERATION","EVENT","STAT","INFO","MIXER_PIPE_TYPE","NEXMO","HLS","PATH","SOCKET_ONLY_ACTIONS","REST_ACTIONS","MIXER_RENDER_TYPE","MediasoupSocketApi","NexmoUtils","CloudApi"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);var u=i(4);i.d(e,"NexmoUtils",(function(){return u.a}));var d=i(5);i.d(e,"CloudApi",(function(){return d.a}))}])}));