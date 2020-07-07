import { ConnectTransportRequest, ConsumerData, ConsumeRequest, ConsumeResponse, ConsumerPreferredLayers, NumWorkersData, PipeFromRemoteProducerRequest, PipeToRemoteProducerRequest, PipeTransportConnectData, PipeTransportData, ProducerData, ProduceRequest, ProduceResponse, ServerConfigs, RecordingData, StatsInput, StatsOutput, StreamFileRequest, TransportBitrateData, TransportData, WorkerLoadData, ListData, StreamData, FilePathInput, PushStreamInputsRequest, PushStreamInputsResponse, PullStreamInputsRequest, PullStreamInputsResponse, RecordingRequest, StreamKindsData, LiveStreamRequest, KindsByFileInput, KindsData, PushStreamOptionsRequest, PushStreamOptionsResponse, PushStreamRequest, StreamKindData, StreamListenData, MixerUpdateData, MixerRemoveData, MixerInput, MixerAddAudioData, MixerAddVideoData } from './client-interfaces';
import { TransportOptions } from 'mediasoup-client/lib/Transport';
import { IMediasoupApi } from './i-mediasoup-api';
import { RxSocketClient } from 'rx-socket-io.client';
export declare class MediasoupSocketApi implements IMediasoupApi {
    private readonly log;
    readonly client: RxSocketClient;
    constructor(url: string, worker: number, token: string, log?: typeof console.log);
    initSocket(): Promise<void>;
    resumeConsumer(json: ConsumerData): Promise<void>;
    pauseConsumer(json: ConsumerData): Promise<void>;
    setPreferredLayers(json: ConsumerPreferredLayers): Promise<void>;
    closeConsumer(json: ConsumerData): Promise<void>;
    resumeProducer(json: ProducerData): Promise<void>;
    pauseProducer(json: ProducerData): Promise<void>;
    closeProducer(json: ProducerData): Promise<void>;
    produce(json: ProduceRequest): Promise<ProduceResponse>;
    consume(json: ConsumeRequest): Promise<ConsumeResponse>;
    createPipeTransport(): Promise<PipeTransportData>;
    connectPipeTransport(json: PipeTransportConnectData): Promise<void>;
    closeTransport(json: TransportData): Promise<void>;
    getServerConfigs(): Promise<ServerConfigs>;
    createTransport(): Promise<TransportOptions>;
    connectTransport(json: ConnectTransportRequest): Promise<void>;
    setMaxIncomingBitrate(json: TransportBitrateData): Promise<void>;
    producersStats(json: StatsInput): Promise<StatsOutput>;
    consumersStats(json: StatsInput): Promise<StatsOutput>;
    transportStats(json: StatsInput): Promise<StatsOutput>;
    workerLoad(): Promise<WorkerLoadData>;
    numWorkers(): Promise<NumWorkersData>;
    pipeToRemoteProducer(json: PipeToRemoteProducerRequest): Promise<void>;
    pipeFromRemoteProducer(json: PipeFromRemoteProducerRequest): Promise<void>;
    startRecording(json: RecordingRequest): Promise<void>;
    stopRecording(json: RecordingData): Promise<void>;
    fileStreaming(json: StreamFileRequest): Promise<void>;
    stopFileStreaming(json: StreamKindsData): Promise<void>;
    recordedStreams(): Promise<ListData>;
    streamRecordings(json: StreamData): Promise<ListData>;
    deleteStreamRecordings(json: StreamData): Promise<void>;
    deleteRecording(json: FilePathInput): Promise<void>;
    pushToServerInputs(json: PushStreamInputsRequest): Promise<PushStreamInputsResponse>;
    pushToServerOptions(json: PushStreamOptionsRequest): Promise<PushStreamOptionsResponse>;
    pushToServer(json: PushStreamRequest): Promise<void>;
    pullFromServerInputs(json: PullStreamInputsRequest): Promise<PullStreamInputsResponse>;
    kindsByFile(json: KindsByFileInput): Promise<KindsData>;
    requestKeyframe(json: ConsumerData): Promise<void>;
    listenStreamStarted(json: StreamListenData): Promise<boolean>;
    listenStreamStopped(json: StreamKindData): Promise<boolean>;
    liveStreaming(json: LiveStreamRequest): Promise<void>;
    mixerStart(json: StreamKindsData): Promise<MixerInput>;
    mixerClose(json: MixerInput): Promise<void>;
    mixerAdd(json: MixerAddAudioData | MixerAddVideoData): Promise<void>;
    mixerUpdate(json: MixerUpdateData): Promise<void>;
    mixerRemove(json: MixerRemoveData): Promise<void>;
    clear(): void;
    private request;
}
