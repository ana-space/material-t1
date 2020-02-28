interface IRootObject {
    result: number;
    data: IData;
}
interface IData {
    id: number;
    basicSetup: IBasicSetup;
    api: IApi;
    state: IState;
    algorithm: IAlgorithm;
    revenue: IRevenue;
    options: IOptions;
    links: ILinksItem[];
}
interface IBasicSetup {
    hostname: string;
    title: string;
    geolocation: string;
    currency: string;
    matchingType: string;
    matchingRule: string;
    channels: any[];
    categories: any[];
    timezone: string;
    sourceTypes: any[];
    channelId: null;
}
interface IApi {
    apiKey: string;
    publicKey: string;
    app: string;
}
interface IState {
    status: string;
    demo: number;
    cookie: number;
    api: number;
    adNetwork: number;
    publisher: number;
    advertiser: number;
    cookieDemo: number;
    osrPublisher: number;
    deletable: number;
}
interface IAlgorithm {
    semanticBoost: number;
    recommendationAge: null;
    recommendationAgeUnit: string;
    cookieLifetime: number;
}
interface IRevenue {
    widgetBilling: number;
}
interface IOptions {
    crawler: ICrawler;
    domains: IDomains;
    iframe: IIframe;
    items: IItems;
    ssp: ISsp;
}
interface ICrawler {
    crawlItems: string;
    crawlCreatedAsModifiedWhenEmpty: number;
    crawlerOgConvregexpImg: string;
    crawlerOgConvregexpKicker: string;
    crawlerOgConvregexpTitle: string;
    crawlerOgConvregexpUrl: string;
    crawlExceptPublishedAt: number;
    crawlSpecialcharsDecodeEntQuotes: number;
}
interface IDomains {
    payoutLimit: number;
    paymentClearance: null;
    lastBilling: number;
    widgetForbidLocalstoragePookie: number;
    createdAt: number;
    patternUpdatedAt: number;
    selfservice: number;
    useAsyncJS: number;
    widgetOBA: number;
    language: null;
    itemApiUpdateDelay: number;
    itemApiUpdateMax: number;
    onsiteStaticRecs: string;
    crossdomainstats_expansion: number;
    useturbine: null;
    postview_3rdparty_disable: number;
    channelTag: null;
}
interface IIframe {
    fixedVisibilityForStats: number;
    allowVideo: number;
}
interface IItems {
    canIndexFulltext: number;
    hideRedirectUrl: number;
    jpgImageOnly: number;
    mediamirrorValidMimetypes: string;
    imageSize: string;
    cropImages: number;
    allowOSRTextEmpty: number;
    redirectParam: string;
    maxPixelRatio: null;
}
interface ISsp {
    dsp: number;
    ignoreParams: number;
    useJavascript: number;
}
interface ILinksItem {
    rel: string;
    ref: string;
    version: boolean | null;
    identifier: string | null;
    niceName: string | null;
    path: string | null;
    method: string | null;
    prefix: string | null;
}