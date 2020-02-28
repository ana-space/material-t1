interface IRootObject {
    result: number;
    data: IData;
}
interface IData {
    id: number;
    hostname: string;
    title: string;
    geolocation: string;
    links: ILinksItem[];
    state: IState;
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
interface IState {
    deletable: number;
}