!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios"),require("socket.io-client")):"function"==typeof define&&define.amd?define(["axios","socket.io-client"],e):"object"==typeof exports?exports.avcore=e(require("axios"),require("socket.io-client")):t.avcore=e(t.axios,t.io)}(this,(function(t,e){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e,r){"use strict";var i;r.d(e,"a",(function(){return i})),r.d(e,"l",(function(){return n})),r.d(e,"k",(function(){return o})),r.d(e,"d",(function(){return s})),r.d(e,"m",(function(){return u})),r.d(e,"f",(function(){return d})),r.d(e,"e",(function(){return c})),r.d(e,"j",(function(){return E})),r.d(e,"i",(function(){return R})),r.d(e,"c",(function(){return a})),r.d(e,"b",(function(){return S})),r.d(e,"g",(function(){return T})),r.d(e,"h",(function(){return _})),function(t){t.GET_SERVER_CONFIGS="getServerConfigs",t.CREATE_TRANSPORT="createTransport",t.CONNECT_TRANSPORT="connectTransport",t.CLOSE_TRANSPORT="closeTransport",t.PRODUCE="produce",t.CONSUME="consume",t.RESUME_CONSUMER="resumeConsumer",t.PAUSE_CONSUMER="pauseConsumer",t.CLOSE_CONSUMER="closeConsumer",t.RESUME_PRODUCER="resumeProducer",t.PAUSE_PRODUCER="pauseProducer",t.CLOSE_PRODUCER="closeProducer",t.FILE_STREAMING="fileStreaming",t.LIVE_STREAMING="liveStreaming",t.LIVE_TO_HLS="liveToHls",t.STOP_FILE_STREAMING="stopFileStreaming",t.START_RECORDING="startRecording",t.STOP_RECORDING="stopRecording",t.CREATE_PIPE_TRANSPORT="createPipeTransport",t.CONNECT_PIPE_TRANSPORT="connectPipeTransport",t.SET_PREFERRED_LAYERS="setPreferredLayers",t.SET_MAX_INCOMING_BITRATE="setMaxIncomingBitrate",t.PRODUCERS_STATS="producersStats",t.CONSUMERS_STATS="consumersStats",t.TRANSPORT_STATS="transportStats",t.PIPE_TO_REMOTE_PRODUCER="pipeToRemoteProducer",t.PIPE_FROM_REMOTE_PRODUCER="pipeFromRemoteProducer",t.WORKER_LOAD="workerLoad",t.NUM_WORKERS="numWorkers",t.RECORDED_STREAMS="recordedStreams",t.STREAM_RECORDINGS="streamRecordings",t.DELETE_STREAM_RECORDINGS="deleteStreamRecordings",t.DELETE_RECORDING="deleteRecording",t.PUSH_TO_SERVER_INPUTS="pushToServerInputs",t.PULL_FROM_SERVER_INPUTS="pullFromServerInputs",t.PUSH_TO_SERVER_OPTIONS="pushToServerOptions",t.PUSH_TO_SERVER="pushToServer",t.KINDS_BY_FILE="kindsByFile",t.REQUEST_KEYFRAME="requestKeyframe",t.LISTEN_STREAM_STARTED="listenStreamStarted",t.LISTEN_STREAM_STOPPED="listenStreamStopped",t.MIXER_START="mixerStart",t.MIXER_CLOSE="mixerClose",t.MIXER_ADD="mixerAdd",t.MIXER_ADD_FILE="mixerAddFile",t.MIXER_REMOVE="mixerRemove",t.MIXER_UPDATE="mixerUpdate",t.MIXER_PIPE_START="mixerPipeStart",t.MIXER_PIPE_STOP="mixerPipeStop",t.MIXER_COMMAND="mixerCommand",t.LISTEN_MIXER_STOPPED="listenMixerStopped"}(i||(i={}));const n=[i.GET_SERVER_CONFIGS,i.CREATE_TRANSPORT,i.CONNECT_TRANSPORT,i.CLOSE_TRANSPORT,i.PRODUCE,i.CONSUME,i.LISTEN_STREAM_STARTED,i.LISTEN_STREAM_STOPPED,i.LISTEN_MIXER_STOPPED,i.CREATE_PIPE_TRANSPORT,i.CONNECT_PIPE_TRANSPORT,i.PIPE_TO_REMOTE_PRODUCER,i.PIPE_FROM_REMOTE_PRODUCER],o=Object.values(i).filter(t=>!n.includes(t));var s,u,d;!function(t){t.STREAM_STARTED="streamStarted",t.STREAM_STOPPED="streamStopped",t.MIXER_STOPPED="mixerStopped"}(s||(s={})),function(t){t.STATS="stats",t.TRAFFIC="traffic",t.CPU="cpu",t.STREAM="stream"}(u||(u={})),function(t){t.INFO="info",t.MCU="mcu"}(d||(d={}));const c={ROOT:"hls",PLAYLIST:"master.m3u8"};var E;!function(t){t.API="api"}(E||(E={}));const R={PATH:"nexmo",AUDIO_SAMPLE_RATE:16e3,AUDIO_CHANNELS:1};var a,S,T,_;!function(t){t[t.UNKNOWN=500]="UNKNOWN",t[t.UNAUTHORIZED=401]="UNAUTHORIZED",t[t.INVALID_TRANSPORT=530]="INVALID_TRANSPORT",t[t.INVALID_PRODUCER=531]="INVALID_PRODUCER",t[t.INVALID_CONSUMER=532]="INVALID_CONSUMER",t[t.INVALID_STREAM=533]="INVALID_STREAM",t[t.INVALID_OPERATION=534]="INVALID_OPERATION",t[t.INVALID_WORKER=535]="INVALID_WORKER",t[t.INVALID_INPUT=536]="INVALID_INPUT",t[t.INVALID_ACTION=537]="INVALID_ACTION"}(a||(a={})),function(t){t[t.SUBSCRIBE=0]="SUBSCRIBE",t[t.PUBLISH=1]="PUBLISH",t[t.RECORDING=2]="RECORDING",t[t.STREAMING=3]="STREAMING",t[t.MIXER=4]="MIXER"}(S||(S={})),function(t){t[t.LIVE=0]="LIVE",t[t.RECORDING=1]="RECORDING",t[t.RTMP=2]="RTMP",t[t.HLS=3]="HLS"}(T||(T={})),function(t){t.SCALE="scale",t.CROP="crop",t.PAD="pad"}(_||(_={}))},function(e,r){e.exports=t},function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var i=r(6),n=r.n(i),o=r(1),s=r.n(o),u=r(0),d=function(t,e,r,i){return new(r||(r=Promise))((function(n,o){function s(t){try{d(i.next(t))}catch(t){o(t)}}function u(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,u)}d((i=i.apply(t,e||[])).next())}))};class c{constructor(t,e,r,i,n){this.closed=!1,this.log=i||console.log,this.url=t,this.worker=e,this.token=r,this.cloudApi=n}get client(){return this._client||(this._client=n()(this.url,{path:"",transports:["websocket"],query:`auth_token=${this.token}&mediasoup_worker=${this.worker}`,forceNew:!0})),this._client}connectSocket(){return new Promise((t,e)=>{this.client.connected?t():(this.client.on("error",t=>{"Not enough or too many segments"===t.message?t.errorId=u.c.UNAUTHORIZED:t.errorId=u.c.UNKNOWN,e(t)}),this.client.on("connect",t))})}resumeConsumer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.RESUME_CONSUMER,t)}))}pauseConsumer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.PAUSE_CONSUMER,t)}))}setPreferredLayers(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.SET_PREFERRED_LAYERS,t)}))}closeConsumer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.CLOSE_CONSUMER,t)}))}resumeProducer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.RESUME_PRODUCER,t)}))}pauseProducer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.PAUSE_PRODUCER,t)}))}closeProducer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.CLOSE_PRODUCER,t)}))}produce(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.PRODUCE,t)}))}consume(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.CONSUME,t)}))}createPipeTransport(){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.CREATE_PIPE_TRANSPORT)}))}connectPipeTransport(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.CONNECT_PIPE_TRANSPORT,t)}))}closeTransport(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.CLOSE_TRANSPORT,t)}))}getServerConfigs(){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.GET_SERVER_CONFIGS)}))}createTransport(){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.CREATE_TRANSPORT)}))}connectTransport(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.CONNECT_TRANSPORT,t)}))}setMaxIncomingBitrate(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.SET_MAX_INCOMING_BITRATE,t)}))}producersStats(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.PRODUCERS_STATS,t)}))}consumersStats(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.CONSUMERS_STATS,t)}))}transportStats(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.TRANSPORT_STATS,t)}))}workerLoad(){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.WORKER_LOAD)}))}numWorkers(){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.NUM_WORKERS)}))}pipeToRemoteProducer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.PIPE_TO_REMOTE_PRODUCER,t)}))}pipeFromRemoteProducer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.PIPE_FROM_REMOTE_PRODUCER,t)}))}startRecording(t){return d(this,void 0,void 0,(function*(){!t.origin&&this.cloudApi&&(t.origin=yield this.cloudApi.streamOrigin(this,t.stream)),yield this.request(u.a.START_RECORDING,t)}))}stopRecording(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.STOP_RECORDING,t)}))}fileStreaming(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.FILE_STREAMING,t)}))}stopFileStreaming(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.STOP_FILE_STREAMING,t)}))}recordedStreams(){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.RECORDED_STREAMS)}))}streamRecordings(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.STREAM_RECORDINGS,t)}))}deleteStreamRecordings(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.DELETE_STREAM_RECORDINGS,t)}))}deleteRecording(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.DELETE_RECORDING,t)}))}pushToServerInputs(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.PUSH_TO_SERVER_INPUTS,t)}))}pushToServerOptions(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.PUSH_TO_SERVER_OPTIONS,t)}))}pushToServer(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.PUSH_TO_SERVER,t)}))}pullFromServerInputs(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.PULL_FROM_SERVER_INPUTS,t)}))}kindsByFile(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.KINDS_BY_FILE,t)}))}requestKeyframe(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.REQUEST_KEYFRAME,t)}))}listenStreamStarted(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_STREAM_STARTED,t)}))}listenStreamStopped(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_STREAM_STOPPED,t)}))}liveStreaming(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.LIVE_STREAMING,t)}))}liveToHls(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.LIVE_TO_HLS,t)}))}mixerStart(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.MIXER_START,t)}))}mixerClose(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_CLOSE,t)}))}mixerAdd(t){return d(this,void 0,void 0,(function*(){!t.origin&&this.cloudApi&&(t.origin=yield this.cloudApi.streamOrigin(this,t.stream)),yield this.request(u.a.MIXER_ADD,t)}))}mixerAddFile(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_ADD_FILE,t)}))}mixerUpdate(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_UPDATE,t)}))}mixerRemove(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_REMOVE,t)}))}mixerPipeStart(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.MIXER_PIPE_START,t)}))}mixerPipeStop(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_PIPE_STOP,t)}))}mixerCommand(t){return d(this,void 0,void 0,(function*(){yield this.request(u.a.MIXER_COMMAND,t)}))}listenMixerStopped(t){return d(this,void 0,void 0,(function*(){return yield this.request(u.a.LISTEN_MIXER_STOPPED,t)}))}hlsUrl(t){return`${this.url}/${u.e.ROOT}/${t}/${u.e.PLAYLIST}`}streamOrigin(t){if(t&&t.url!==this.url){const{url:e,token:r,worker:i}=this;return{source:t,target:{url:e,token:r,worker:i}}}}clear(){this.closed=!0,this._client&&(this._client.removeAllListeners(),this.client.connected&&this._client.disconnect())}request(t,e={}){return d(this,void 0,void 0,(function*(){if(!this.closed)return this._client||u.l.includes(t)?this.socketRequest(t,e):this.restRequest(t,e)}))}socketRequest(t,e={}){return d(this,void 0,void 0,(function*(){return yield this.connectSocket(),this.log("sent message",t,JSON.stringify(e)),new Promise((r,i)=>{this.client.emit(t,e,e=>{e&&"boolean"!=typeof e&&e.hasOwnProperty("errorId")?(this.log("got error",t,JSON.stringify(e)),i(e)):(this.log("got message",t,JSON.stringify(e)),r(e))})})}))}restRequest(t,e={}){return d(this,void 0,void 0,(function*(){try{const{data:r}=yield s.a.post(`${this.url}/${u.j.API}/${this.worker}/${t}`,e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return this.log("got message",t,JSON.stringify(r)),r}catch(t){let e=u.c.UNKNOWN;throw this.log("got error",t),t.response&&t.response.status&&u.c[t.response.status]&&(e=t.response.status),{errorId:e}}}))}}},function(t,e){},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r(0);class n{static pinCodeChoice(t,e,r="Please, enter active pin code."){return[{action:"talk",text:r,bargeIn:!0},{action:"input",maxDigits:t,timeOut:10,eventUrl:[e]}]}static pinCodeChoiceRepeat(t,e,r="Sorry, this pin code is invalid.",i){return[{action:"talk",text:r},...n.pinCodeChoice(t,e,i)]}static mixerConnect(t,e,r="Connecting to meeting. Please, wait."){return[{action:"talk",text:r},{action:"connect",endpoint:[{type:"websocket",uri:`${t.replace("http","ws")}/${i.i.PATH}`,"content-type":"audio/l16;rate="+i.i.AUDIO_SAMPLE_RATE,headers:e}]}]}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var i=r(1),n=r.n(i),o=r(0),s=r(2),u=function(t,e,r,i){return new(r||(r=Promise))((function(n,o){function s(t){try{d(i.next(t))}catch(t){o(t)}}function u(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,u)}d((i=i.apply(t,e||[])).next())}))};class d{constructor(t,e,r){this.url=t,this.token=e,this.log=r}create(t){return u(this,void 0,void 0,(function*(){const{data:{config:{url:e,worker:r,token:i}}}=yield n.a.post(this.url+"/api/customer/config/api",{operation:t},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return new s.a(e,r,i,this.log,this)}))}streamOrigin(t,e){return u(this,void 0,void 0,(function*(){const{data:{config:{url:r,worker:i,token:s}}}=yield n.a.post(this.url+"/api/customer/config/sdk",{operation:o.b.PUBLISH,stream:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.token}});return t.streamOrigin({url:r,worker:i,token:s})}))}}},function(t,r){t.exports=e},function(t,e,r){"use strict";r.r(e);var i=r(0);r.d(e,"ERROR",(function(){return i.c})),r.d(e,"ACTION",(function(){return i.a})),r.d(e,"API_OPERATION",(function(){return i.b})),r.d(e,"EVENT",(function(){return i.d})),r.d(e,"STAT",(function(){return i.m})),r.d(e,"INFO",(function(){return i.f})),r.d(e,"MIXER_PIPE_TYPE",(function(){return i.g})),r.d(e,"NEXMO",(function(){return i.i})),r.d(e,"HLS",(function(){return i.e})),r.d(e,"PATH",(function(){return i.j})),r.d(e,"SOCKET_ONLY_ACTIONS",(function(){return i.l})),r.d(e,"REST_ACTIONS",(function(){return i.k})),r.d(e,"MIXER_RENDER_TYPE",(function(){return i.h}));var n=r(2);r.d(e,"MediasoupSocketApi",(function(){return n.a}));var o=r(3);for(var s in o)["default","ERROR","ACTION","API_OPERATION","EVENT","STAT","INFO","MIXER_PIPE_TYPE","NEXMO","HLS","PATH","SOCKET_ONLY_ACTIONS","REST_ACTIONS","MIXER_RENDER_TYPE","MediasoupSocketApi","NexmoUtils","CloudApi"].indexOf(s)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(s);var u=r(4);r.d(e,"NexmoUtils",(function(){return u.a}));var d=r(5);r.d(e,"CloudApi",(function(){return d.a}))}])}));