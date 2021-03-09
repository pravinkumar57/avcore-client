!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios"),require("socket.io-client")):"function"==typeof define&&define.amd?define(["axios","socket.io-client"],e):"object"==typeof exports?exports.avcore=e(require("axios"),require("socket.io-client")):t.avcore=e(t.axios,t.io)}(this,(function(t,e){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){"use strict";var r;i.d(e,"a",(function(){return r})),i.d(e,"l",(function(){return n})),i.d(e,"k",(function(){return o})),i.d(e,"d",(function(){return s})),i.d(e,"m",(function(){return u})),i.d(e,"f",(function(){return E})),i.d(e,"e",(function(){return d})),i.d(e,"j",(function(){return c})),i.d(e,"i",(function(){return R})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return S})),i.d(e,"g",(function(){return T})),i.d(e,"h",(function(){return _})),function(t){t.GET_SERVER_CONFIGS="getServerConfigs",t.CREATE_TRANSPORT="createTransport",t.CONNECT_TRANSPORT="connectTransport",t.CLOSE_TRANSPORT="closeTransport",t.PRODUCE="produce",t.CONSUME="consume",t.RESUME_CONSUMER="resumeConsumer",t.PAUSE_CONSUMER="pauseConsumer",t.CLOSE_CONSUMER="closeConsumer",t.RESUME_PRODUCER="resumeProducer",t.PAUSE_PRODUCER="pauseProducer",t.CLOSE_PRODUCER="closeProducer",t.FILE_STREAMING="fileStreaming",t.LIVE_STREAMING="liveStreaming",t.LIVE_TO_HLS="liveToHls",t.STOP_FILE_STREAMING="stopFileStreaming",t.START_RECORDING="startRecording",t.STOP_RECORDING="stopRecording",t.CREATE_PIPE_TRANSPORT="createPipeTransport",t.CONNECT_PIPE_TRANSPORT="connectPipeTransport",t.SET_PREFERRED_LAYERS="setPreferredLayers",t.SET_MAX_INCOMING_BITRATE="setMaxIncomingBitrate",t.PRODUCERS_STATS="producersStats",t.CONSUMERS_STATS="consumersStats",t.TRANSPORT_STATS="transportStats",t.PIPE_TO_REMOTE_PRODUCER="pipeToRemoteProducer",t.PIPE_FROM_REMOTE_PRODUCER="pipeFromRemoteProducer",t.WORKER_LOAD="workerLoad",t.NUM_WORKERS="numWorkers",t.RECORDED_STREAMS="recordedStreams",t.STREAM_RECORDINGS="streamRecordings",t.DELETE_STREAM_RECORDINGS="deleteStreamRecordings",t.DELETE_RECORDING="deleteRecording",t.PUSH_TO_SERVER_INPUTS="pushToServerInputs",t.PULL_FROM_SERVER_INPUTS="pullFromServerInputs",t.PUSH_TO_SERVER_OPTIONS="pushToServerOptions",t.PUSH_TO_SERVER="pushToServer",t.KINDS_BY_FILE="kindsByFile",t.REQUEST_KEYFRAME="requestKeyframe",t.LISTEN_STREAM_STARTED="listenStreamStarted",t.LISTEN_STREAM_STOPPED="listenStreamStopped",t.MIXER_START="mixerStart",t.MIXER_CLOSE="mixerClose",t.MIXER_ADD="mixerAdd",t.MIXER_ADD_FILE="mixerAddFile",t.MIXER_REMOVE="mixerRemove",t.MIXER_UPDATE="mixerUpdate",t.MIXER_PIPE_START="mixerPipeStart",t.MIXER_PIPE_STOP="mixerPipeStop",t.MIXER_COMMAND="mixerCommand",t.LISTEN_MIXER_STOPPED="listenMixerStopped",t.LISTEN_MIXER_FILE_STARTED="listenMixerFileStarted",t.LISTEN_MIXER_FILE_STOPPED="listenMixerFileStopped",t.HEAP_SNAPSHOT="heapSnapshot"}(r||(r={}));const n=[r.GET_SERVER_CONFIGS,r.CREATE_TRANSPORT,r.CONNECT_TRANSPORT,r.CLOSE_TRANSPORT,r.PRODUCE,r.CONSUME,r.LISTEN_STREAM_STARTED,r.LISTEN_STREAM_STOPPED,r.LISTEN_MIXER_STOPPED,r.LISTEN_MIXER_FILE_STARTED,r.LISTEN_MIXER_FILE_STOPPED,r.CREATE_PIPE_TRANSPORT,r.CONNECT_PIPE_TRANSPORT,r.PIPE_TO_REMOTE_PRODUCER,r.PIPE_FROM_REMOTE_PRODUCER],o=Object.values(r).filter(t=>!n.includes(t));var s,u,E;!function(t){t.STREAM_STARTED="streamStarted",t.STREAM_STOPPED="streamStopped",t.MIXER_STOPPED="mixerStopped",t.MIXER_FILE_STARTED="mixerFileStarted",t.MIXER_FILE_STOPPED="mixerFileStopped"}(s||(s={})),function(t){t.STATS="stats",t.TRAFFIC="traffic",t.CPU="cpu",t.STREAM="stream"}(u||(u={})),function(t){t.INFO="info",t.MCU="mcu"}(E||(E={}));const d={ROOT:"hls",PLAYLIST:"master.m3u8"};var c;!function(t){t.API="api"}(c||(c={}));const R={PATH:"nexmo",AUDIO_SAMPLE_RATE:16e3,AUDIO_CHANNELS:1};var a,S,T,_;!function(t){t[t.UNKNOWN=500]="UNKNOWN",t[t.UNAUTHORIZED=401]="UNAUTHORIZED",t[t.INVALID_TRANSPORT=530]="INVALID_TRANSPORT",t[t.INVALID_PRODUCER=531]="INVALID_PRODUCER",t[t.INVALID_CONSUMER=532]="INVALID_CONSUMER",t[t.INVALID_STREAM=533]="INVALID_STREAM",t[t.INVALID_OPERATION=534]="INVALID_OPERATION",t[t.INVALID_WORKER=535]="INVALID_WORKER",t[t.INVALID_INPUT=536]="INVALID_INPUT",t[t.INVALID_ACTION=537]="INVALID_ACTION"}(a||(a={})),function(t){t[t.SUBSCRIBE=0]="SUBSCRIBE",t[t.PUBLISH=1]="PUBLISH",t[t.RECORDING=2]="RECORDING",t[t.STREAMING=3]="STREAMING",t[t.MIXER=4]="MIXER"}(S||(S={})),function(t){t[t.LIVE=0]="LIVE",t[t.RECORDING=1]="RECORDING",t[t.RTMP=2]="RTMP",t[t.HLS=3]="HLS"}(T||(T={})),function(t){t.SCALE="scale",t.CROP="crop",t.PAD="pad"}(_||(_={}))},function(e,i){e.exports=t},function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var r=i(6),n=i.n(r),o=i(1),s=i.n(o),u=i(0),E=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function s(t){try{E(r.next(t))}catch(t){o(t)}}function u(t){try{E(r.throw(t))}catch(t){o(t)}}function E(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,u)}E((r=r.apply(t,e||[])).next())}))};class d{constructor(t,e,i,r,n){this.closed=!1,this.log=r||console.log,this.url=t,this.worker=e,this.token=i,this.cloudApi=n}get client(){return this._client||(this._client=n()(this.url,{path:"",transports:["websocket"],query:`auth_token=${this.token}&mediasoup_worker=${this.worker}`,forceNew:!0})),this._client}connectSocket(){return new Promise((t,e)=>{this.client.connected?t():(this.client.on("error",t=>{"Not enough or too many segments"===t.message?t.errorId=u.c.UNAUTHORIZED:t.errorId=u.c.UNKNOWN,e(t)}),this.client.on("connect",t))})}resumeConsumer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.RESUME_CONSUMER,t)}))}pauseConsumer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.PAUSE_CONSUMER,t)}))}setPreferredLayers(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.SET_PREFERRED_LAYERS,t)}))}closeConsumer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.CLOSE_CONSUMER,t)}))}resumeProducer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.RESUME_PRODUCER,t)}))}pauseProducer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.PAUSE_PRODUCER,t)}))}closeProducer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.CLOSE_PRODUCER,t)}))}produce(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.PRODUCE,t)}))}consume(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.CONSUME,t)}))}createPipeTransport(){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.CREATE_PIPE_TRANSPORT)}))}connectPipeTransport(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.CONNECT_PIPE_TRANSPORT,t)}))}closeTransport(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.CLOSE_TRANSPORT,t)}))}getServerConfigs(){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.GET_SERVER_CONFIGS)}))}createTransport(){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.CREATE_TRANSPORT)}))}connectTransport(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.CONNECT_TRANSPORT,t)}))}setMaxIncomingBitrate(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.SET_MAX_INCOMING_BITRATE,t)}))}producersStats(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.PRODUCERS_STATS,t)}))}consumersStats(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.CONSUMERS_STATS,t)}))}transportStats(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.TRANSPORT_STATS,t)}))}workerLoad(){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.WORKER_LOAD)}))}numWorkers(){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.NUM_WORKERS)}))}pipeToRemoteProducer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.PIPE_TO_REMOTE_PRODUCER,t)}))}pipeFromRemoteProducer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.PIPE_FROM_REMOTE_PRODUCER,t)}))}startRecording(t){return E(this,void 0,void 0,(function*(){!t.origin&&this.cloudApi&&(t.origin=yield this.cloudApi.streamOrigin(this,t.stream)),yield this.request(u.a.START_RECORDING,t)}))}stopRecording(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.STOP_RECORDING,t)}))}fileStreaming(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.FILE_STREAMING,t)}))}stopFileStreaming(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.STOP_FILE_STREAMING,t)}))}recordedStreams(){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.RECORDED_STREAMS)}))}streamRecordings(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.STREAM_RECORDINGS,t)}))}deleteStreamRecordings(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.DELETE_STREAM_RECORDINGS,t)}))}deleteRecording(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.DELETE_RECORDING,t)}))}pushToServerInputs(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.PUSH_TO_SERVER_INPUTS,t)}))}pushToServerOptions(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.PUSH_TO_SERVER_OPTIONS,t)}))}pushToServer(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.PUSH_TO_SERVER,t)}))}pullFromServerInputs(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.PULL_FROM_SERVER_INPUTS,t)}))}kindsByFile(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.KINDS_BY_FILE,t)}))}requestKeyframe(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.REQUEST_KEYFRAME,t)}))}listenStreamStarted(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_STREAM_STARTED,t)}))}listenStreamStopped(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_STREAM_STOPPED,t)}))}liveStreaming(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.LIVE_STREAMING,t)}))}liveToHls(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.LIVE_TO_HLS,t)}))}mixerStart(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.MIXER_START,t)}))}mixerClose(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_CLOSE,t)}))}mixerAdd(t){return E(this,void 0,void 0,(function*(){!t.origin&&this.cloudApi&&(t.origin=yield this.cloudApi.streamOrigin(this,t.stream)),yield this.request(u.a.MIXER_ADD,t)}))}mixerAddFile(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_ADD_FILE,t)}))}mixerUpdate(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_UPDATE,t)}))}mixerRemove(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_REMOVE,t)}))}mixerPipeStart(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.MIXER_PIPE_START,t)}))}mixerPipeStop(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_PIPE_STOP,t)}))}mixerCommand(t){return E(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_COMMAND,t)}))}listenMixerStopped(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_MIXER_STOPPED,t)}))}listenMixerFileStarted(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_MIXER_FILE_STARTED,t)}))}listenMixerFileStopped(t){return E(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_MIXER_FILE_STOPPED,t)}))}heapSnapshot(){return E(this,void 0,void 0,(function*(){yield this.request(u.a.HEAP_SNAPSHOT)}))}hlsUrl(t){return`${this.url}/${u.e.ROOT}/${t}/${u.e.PLAYLIST}`}location(){return this.url}streamOrigin(t){if(t&&t.url!==this.url){const{url:e,token:i,worker:r}=this;return{source:t,target:{url:e,token:i,worker:r}}}}clear(){this.closed=!0,this._client&&(this._client.removeAllListeners(),this.client.connected&&this._client.disconnect())}request(t,e={}){return E(this,void 0,void 0,(function*(){if(!this.closed)return this._client||u.l.includes(t)||t===u.a.MIXER_START&&e.closeOnDisconnected?this.socketRequest(t,e):this.restRequest(t,e)}))}socketRequest(t,e={}){return E(this,void 0,void 0,(function*(){return yield this.connectSocket(),this.log("sent message",t,JSON.stringify(e)),new Promise((i,r)=>{this.client.emit(t,e,e=>{e&&"boolean"!=typeof e&&e.hasOwnProperty("errorId")?(this.log("got error",t,JSON.stringify(e)),r(e)):(this.log("got message",t,JSON.stringify(e)),i(e))})})}))}restRequest(t,e={}){return E(this,void 0,void 0,(function*(){try{const{data:i}=yield s.a.post(`${this.url}/${u.j.API}/${this.worker}/${t}`,e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return this.log("got message",t,JSON.stringify(i)),i}catch(t){let e=u.c.UNKNOWN;throw this.log("got error",t),t.response&&t.response.status&&u.c[t.response.status]&&(e=t.response.status),{errorId:e}}}))}}},function(t,e){},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i(0);class n{static pinCodeChoice(t,e,i="Please, enter active pin code."){return[{action:"talk",text:i,bargeIn:!0},{action:"input",maxDigits:t,timeOut:10,eventUrl:[e]}]}static pinCodeChoiceRepeat(t,e,i="Sorry, this pin code is invalid.",r){return[{action:"talk",text:i},...n.pinCodeChoice(t,e,r)]}static mixerConnect(t,e,i="Connecting to meeting. Please, wait."){return[{action:"talk",text:i},{action:"connect",endpoint:[{type:"websocket",uri:`${t.replace("http","ws")}/${r.i.PATH}`,"content-type":"audio/l16;rate="+r.i.AUDIO_SAMPLE_RATE,headers:e}]}]}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return E}));var r=i(1),n=i.n(r),o=i(0),s=i(2),u=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function s(t){try{E(r.next(t))}catch(t){o(t)}}function u(t){try{E(r.throw(t))}catch(t){o(t)}}function E(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,u)}E((r=r.apply(t,e||[])).next())}))};class E{constructor(t,e,i){this.url=t,this.token=e,this.log=i}create(t,e){return u(this,void 0,void 0,(function*(){const{data:{config:{url:i,worker:r,token:o}}}=yield n.a.post(this.url+"/api/customer/config/api",{operation:t,mixerId:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return new s.a(i,r,o,this.log,this)}))}streamOrigin(t,e){return u(this,void 0,void 0,(function*(){const{data:{config:{url:i,worker:r,token:s}}}=yield n.a.post(this.url+"/api/customer/config/sdk",{operation:o.b.PUBLISH,stream:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return t.streamOrigin({url:i,worker:r,token:s})}))}}},function(t,i){t.exports=e},function(t,e,i){"use strict";i.r(e);var r=i(0);i.d(e,"ERROR",(function(){return r.c})),i.d(e,"ACTION",(function(){return r.a})),i.d(e,"API_OPERATION",(function(){return r.b})),i.d(e,"EVENT",(function(){return r.d})),i.d(e,"STAT",(function(){return r.m})),i.d(e,"INFO",(function(){return r.f})),i.d(e,"MIXER_PIPE_TYPE",(function(){return r.g})),i.d(e,"NEXMO",(function(){return r.i})),i.d(e,"HLS",(function(){return r.e})),i.d(e,"PATH",(function(){return r.j})),i.d(e,"SOCKET_ONLY_ACTIONS",(function(){return r.l})),i.d(e,"REST_ACTIONS",(function(){return r.k})),i.d(e,"MIXER_RENDER_TYPE",(function(){return r.h}));var n=i(2);i.d(e,"MediasoupSocketApi",(function(){return n.a}));var o=i(3);for(var s in o)["default","ERROR","ACTION","API_OPERATION","EVENT","STAT","INFO","MIXER_PIPE_TYPE","NEXMO","HLS","PATH","SOCKET_ONLY_ACTIONS","REST_ACTIONS","MIXER_RENDER_TYPE","MediasoupSocketApi","NexmoUtils","CloudApi"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);var u=i(4);i.d(e,"NexmoUtils",(function(){return u.a}));var E=i(5);i.d(e,"CloudApi",(function(){return E.a}))}])}));