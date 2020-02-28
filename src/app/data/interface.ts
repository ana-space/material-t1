interface IRootObject {
    result: number;
    data: IData;
}
interface IData {
    items: IItemsItem[];
}
interface IItemsItem {
    created_at: string;
    design: IDesign;
    domainid: number;
    files: IFiles;
    formats: number;
    hasVideo: boolean;
    height: number;
    id: number;
    widgetid: null;
    kind: string;
    lang: string;
    options: IOptions;
    permissions: string[];
    status: number;
    title: string;
    type: string;
    width: number;
    alias: null;
    links: ILinksItem[];
    updated_at: string;
}
interface IDesign {
    renderHTML?: boolean;
    listStyle?: string;
    render?: IRender;
    slots?: ISlotsItem[];
    scroll?: IScroll;
}
interface IRender {
    target: ITarget;
    'default': {
        image: IImage;
        title: ITitle;
        text: IText;
        category: ICategory;
    };
    pet: IPet;
}
interface ITarget {
    headline: IHeadline;
    list: IList;
    powered: IPowered;
    advertise: IAdvertise;
    oba: IOba;
}
interface IHeadline {
    label: string;
}
interface IList {
}
interface IPowered {
    label: string;
    position: string;
    color: string;
    text: string;
}
interface IAdvertise {
    label: string;
    parent: string;
    text: string;
}
interface IOba {
    label: string;
    color: string;
    position: string;
}
interface IImage {
    label: string;
    width: number;
    height: number;
    crop: boolean;
    maxWidth?: number;
    autoClose?: boolean;
    mode?: string;
    engage?: string;
}
interface ITitle {
    label: string;
    length: number;
    ellipsis: boolean;
    split: boolean;
}
interface IText {
    label: string;
    length: number;
    ellipsis: boolean;
    split: boolean;
}
interface ICategory {
    label: string;
    length: number;
    ellipsis: boolean;
    split: boolean;
}
interface IPet {
    image: IImage;
    title: ITitle;
    text: IText;
    brand: IBrand;
    adhint: IAdhint;
}
interface IBrand {
    label: string;
    landingpage: boolean;
    length: number;
    ellipsis: boolean;
    split: boolean;
}
interface IAdhint {
    color: string;
    type: string;
    multiple: boolean;
    ad: string;
    pcd: string;
}
interface ISlotsItem {
    preferences: IPreferencesItem[];
}
interface IPreferencesItem {
    type: string;
    transparency: number;
    condition?: ICondition;
}
interface ICondition {
    adblocker: string;
}
interface IFiles {
    'custom.css'?: string;
    'layout.css'?: string;
    'structure.css'?: string;
    'widgetScript.js'?: string;
}
interface IOptions {
    alias: null;
    baseTemplate?: string;
    context_filter?: IContext_filter;
    createdByTool: string;
    elements?: string;
    flagPermissions: IFlagPermissions;
    hardFloor: number;
    hidden: null;
    isActive: number | null;
    layout?: string;
    petpos?: number;
    priority?: string;
    styleTemplates?: IStyleTemplates;
    toolVersion?: number;
    use_sid: number;
    adserver?: number;
    fq_seconds?: number;
    use_ast?: number;
}
interface IContext_filter {
    device_type: string;
}
interface IFlagPermissions {
    deny: number[] | IDeny;
    allow: IAllow;
}
interface IAllow {
}
interface IStyleTemplates {
    'layout.css': string;
    'structure.css': string;
}
interface ILinksItem {
    rel: string;
    ref: string;
    version: boolean;
    identifier: string;
    niceName: string;
    path: string;
    method: string;
    prefix: string;
}
interface IScroll {
    show: string;
    max: string;
}
interface IDeny {
}