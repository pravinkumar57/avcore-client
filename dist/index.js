!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("socket.io-client")):"function"==typeof define&&define.amd?define(["socket.io-client"],t):"object"==typeof exports?exports.avcore=t(require("socket.io-client")):e.avcore=t(e.io)}(this,(function(e){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";var i,n,o;r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return n})),r.d(t,"h",(function(){return o})),r.d(t,"e",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return E})),r.d(t,"f",(function(){return R})),function(e){e.GET_SERVER_CONFIGS="getServerConfigs",e.CREATE_TRANSPORT="createTransport",e.CONNECT_TRANSPORT="connectTransport",e.CLOSE_TRANSPORT="closeTransport",e.PRODUCE="produce",e.CONSUME="consume",e.RESUME_CONSUMER="resumeConsumer",e.PAUSE_CONSUMER="pauseConsumer",e.CLOSE_CONSUMER="closeConsumer",e.RESUME_PRODUCER="resumeProducer",e.PAUSE_PRODUCER="pauseProducer",e.CLOSE_PRODUCER="closeProducer",e.FILE_STREAMING="fileStreaming",e.LIVE_STREAMING="liveStreaming",e.STOP_FILE_STREAMING="stopFileStreaming",e.START_RECORDING="startRecording",e.STOP_RECORDING="stopRecording",e.CREATE_PIPE_TRANSPORT="createPipeTransport",e.CONNECT_PIPE_TRANSPORT="connectPipeTransport",e.SET_PREFERRED_LAYERS="setPreferredLayers",e.SET_MAX_INCOMING_BITRATE="setMaxIncomingBitrate",e.PRODUCERS_STATS="producersStats",e.CONSUMERS_STATS="consumersStats",e.TRANSPORT_STATS="transportStats",e.PIPE_TO_REMOTE_PRODUCER="pipeToRemoteProducer",e.PIPE_FROM_REMOTE_PRODUCER="pipeFromRemoteProducer",e.WORKER_LOAD="workerLoad",e.NUM_WORKERS="numWorkers",e.RECORDED_STREAMS="recordedStreams",e.STREAM_RECORDINGS="streamRecordings",e.DELETE_STREAM_RECORDINGS="deleteStreamRecordings",e.DELETE_RECORDING="deleteRecording",e.PUSH_TO_SERVER_INPUTS="pushToServerInputs",e.PULL_FROM_SERVER_INPUTS="pullFromServerInputs",e.PUSH_TO_SERVER_OPTIONS="pushToServerOptions",e.PUSH_TO_SERVER="pushToServer",e.KINDS_BY_FILE="kindsByFile",e.REQUEST_KEYFRAME="requestKeyframe",e.LISTEN_STREAM_STARTED="listenStreamStarted",e.LISTEN_STREAM_STOPPED="listenStreamStopped",e.MIXER_START="mixerStart",e.MIXER_CLOSE="mixerClose",e.MIXER_ADD="mixerAdd",e.MIXER_REMOVE="mixerRemove",e.MIXER_UPDATE="mixerUpdate",e.MIXER_PIPE_START="mixerPipeStart",e.MIXER_PIPE_STOP="mixerPipeStop",e.LISTEN_MIXER_STOPPED="listenMixerStopped"}(i||(i={})),function(e){e.STREAM_STARTED="streamStarted",e.STREAM_STOPPED="streamStopped",e.MIXER_STOPPED="mixerStopped"}(n||(n={})),function(e){e.STATS="stats",e.TRAFFIC="traffic",e.CPU="cpu"}(o||(o={}));const u={ROOT:"hls",PLAYLIST:"master.m3u8"},s={PATH:"nexmo",AUDIO_SAMPLE_RATE:16e3,AUDIO_CHANNELS:1};var d,E,R;!function(e){e[e.UNKNOWN=500]="UNKNOWN",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.INVALID_TRANSPORT=530]="INVALID_TRANSPORT",e[e.INVALID_PRODUCER=531]="INVALID_PRODUCER",e[e.INVALID_CONSUMER=532]="INVALID_CONSUMER",e[e.INVALID_STREAM=533]="INVALID_STREAM",e[e.INVALID_OPERATION=534]="INVALID_OPERATION",e[e.INVALID_WORKER=535]="INVALID_WORKER",e[e.INVALID_INPUT=536]="INVALID_INPUT"}(d||(d={})),function(e){e[e.SUBSCRIBE=0]="SUBSCRIBE",e[e.PUBLISH=1]="PUBLISH",e[e.RECORDING=2]="RECORDING",e[e.STREAMING=3]="STREAMING",e[e.MIXER=4]="MIXER"}(E||(E={})),function(e){e[e.LIVE=0]="LIVE",e[e.RECORDING=1]="RECORDING",e[e.RTMP=2]="RTMP",e[e.HLS=3]="HLS"}(R||(R={}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(4),n=r.n(i),o=r(0),u=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function u(e){try{d(i.next(e))}catch(e){o(e)}}function s(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,s)}d((i=i.apply(e,t||[])).next())}))};class s{constructor(e,t,r,i){this.closed=!1,this.log=i||console.log,this.client=n()(e,{path:"",transports:["websocket"],query:`auth_token=${r}&mediasoup_worker=${t}`,forceNew:!0})}connectSocket(){return new Promise((e,t)=>{this.client.connected?e():(this.client.on("error",t),this.client.on("connect",e))})}resumeConsumer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.RESUME_CONSUMER,e)}))}pauseConsumer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.PAUSE_CONSUMER,e)}))}setPreferredLayers(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.SET_PREFERRED_LAYERS,e)}))}closeConsumer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.CLOSE_CONSUMER,e)}))}resumeProducer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.RESUME_PRODUCER,e)}))}pauseProducer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.PAUSE_PRODUCER,e)}))}closeProducer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.CLOSE_PRODUCER,e)}))}produce(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.PRODUCE,e)}))}consume(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.CONSUME,e)}))}createPipeTransport(){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.CREATE_PIPE_TRANSPORT)}))}connectPipeTransport(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.CONNECT_PIPE_TRANSPORT,e)}))}closeTransport(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.CLOSE_TRANSPORT,e)}))}getServerConfigs(){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.GET_SERVER_CONFIGS)}))}createTransport(){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.CREATE_TRANSPORT)}))}connectTransport(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.CONNECT_TRANSPORT,e)}))}setMaxIncomingBitrate(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.SET_MAX_INCOMING_BITRATE,e)}))}producersStats(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.PRODUCERS_STATS,e)}))}consumersStats(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.CONSUMERS_STATS,e)}))}transportStats(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.TRANSPORT_STATS,e)}))}workerLoad(){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.WORKER_LOAD)}))}numWorkers(){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.NUM_WORKERS)}))}pipeToRemoteProducer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.PIPE_TO_REMOTE_PRODUCER,e)}))}pipeFromRemoteProducer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.PIPE_FROM_REMOTE_PRODUCER,e)}))}startRecording(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.START_RECORDING,e)}))}stopRecording(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.STOP_RECORDING,e)}))}fileStreaming(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.FILE_STREAMING,e)}))}stopFileStreaming(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.STOP_FILE_STREAMING,e)}))}recordedStreams(){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.RECORDED_STREAMS)}))}streamRecordings(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.STREAM_RECORDINGS,e)}))}deleteStreamRecordings(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.DELETE_STREAM_RECORDINGS,e)}))}deleteRecording(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.DELETE_RECORDING,e)}))}pushToServerInputs(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.PUSH_TO_SERVER_INPUTS,e)}))}pushToServerOptions(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.PUSH_TO_SERVER_OPTIONS,e)}))}pushToServer(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.PUSH_TO_SERVER,e)}))}pullFromServerInputs(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.PULL_FROM_SERVER_INPUTS,e)}))}kindsByFile(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.KINDS_BY_FILE,e)}))}requestKeyframe(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.REQUEST_KEYFRAME,e)}))}listenStreamStarted(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.LISTEN_STREAM_STARTED,e)}))}listenStreamStopped(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.LISTEN_STREAM_STOPPED,e)}))}liveStreaming(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.LIVE_STREAMING,e)}))}mixerStart(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.MIXER_START,e)}))}mixerClose(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.MIXER_CLOSE,e)}))}mixerAdd(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.MIXER_ADD,e)}))}mixerUpdate(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.MIXER_UPDATE,e)}))}mixerRemove(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.MIXER_REMOVE,e)}))}mixerPipeStart(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.MIXER_PIPE_START,e)}))}mixerPipeStop(e){return u(this,void 0,void 0,(function*(){yield this.request(o.a.MIXER_PIPE_STOP,e)}))}listenMixerStopped(e){return u(this,void 0,void 0,(function*(){return yield this.request(o.a.LISTEN_MIXER_STOPPED,e)}))}clear(){this.closed=!0,this.client.removeAllListeners(),this.client.disconnect()}request(e,t={}){return u(this,void 0,void 0,(function*(){if(!this.closed)return yield this.connectSocket(),this.log("sent message",e,JSON.stringify(t)),new Promise((r,i)=>{this.client.emit(e,t,t=>{t&&"boolean"!=typeof t&&t.hasOwnProperty("errorId")?(this.log("got error",e,JSON.stringify(t)),i(t)):r(t)})})}))}}},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(0);class n{static pinCodeChoice(e,t,r="Please, enter active pin code."){return[{action:"talk",text:r,bargeIn:!0},{action:"input",maxDigits:e,timeOut:10,eventUrl:[t]}]}static pinCodeChoiceRepeat(e,t,r="Sorry, this pin code is invalid.",i){return[{action:"talk",text:r},...n.pinCodeChoice(e,t,i)]}static mixerConnect(e,t,r="Connecting to meeting. Please, wait."){return[{action:"talk",text:r},{action:"connect",endpoint:[{type:"websocket",uri:`${e.replace("http","ws")}/${i.g.PATH}`,"content-type":"audio/l16;rate="+i.g.AUDIO_SAMPLE_RATE,headers:t}]}]}}},function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t);var i=r(0);r.d(t,"ERROR",(function(){return i.c})),r.d(t,"ACTION",(function(){return i.a})),r.d(t,"API_OPERATION",(function(){return i.b})),r.d(t,"EVENT",(function(){return i.d})),r.d(t,"STAT",(function(){return i.h})),r.d(t,"MIXER_PIPE_TYPE",(function(){return i.f})),r.d(t,"NEXMO",(function(){return i.g})),r.d(t,"HLS",(function(){return i.e}));var n=r(1);r.d(t,"MediasoupSocketApi",(function(){return n.a}));var o=r(2);for(var u in o)["ERROR","ACTION","API_OPERATION","EVENT","STAT","MIXER_PIPE_TYPE","NEXMO","HLS","MediasoupSocketApi","NexmoUtils","default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(u);var s=r(3);r.d(t,"NexmoUtils",(function(){return s.a}))}])}));