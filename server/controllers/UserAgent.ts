import { UAParser } from 'ua-parser-js';

interface screenSize {
    width: string;
    height: string;
}

interface sephoraUserAgentResponse {
    tag?: boolean;
    scale?: string | boolean;
    screenSize?: screenSize;
    platform?: string;
    version?: string;
    isSephora: boolean;
    _isAndroid?: boolean;
    _isIos?: boolean;
    _isWechat?: boolean;
    _isMiniProgram?: boolean;
}

class UserAgent {
    uaParserJs: any;
    useragent: string;
    useragentLower: any;
    _isIos: boolean = false;
    _isAndroid: boolean = false;
    _isWechat: boolean = false;
    _isMiniProgram: boolean = false;
    constructor(useragent: string) {
        this.useragent = useragent
        this.useragentLower = useragent.toLocaleLowerCase();
        this.uaParserJs = new UAParser(useragent);
        try {
            this._isIos = this.uaParserJs.getOS().name.toLocaleLowerCase() === "ios"
        } catch (e) { }
        try {
            this._isAndroid = this.uaParserJs.getOS().name.toLocaleLowerCase() === "android"
        } catch (e) { }
        try {
            this._isWechat = this.uaParserJs.getUA().indexOf('MicroMessenger') > -1
        } catch (e) { }
        try {
            this._isMiniProgram = this.uaParserJs.getUA().indexOf('miniProgram') > -1
        } catch (e) { }
    }

    getUserAgentParser() {
        return this.uaParserJs.getResult();
    }

    getSephoraUserAgentParser(): sephoraUserAgentResponse {
        return {
            tag: this.tag,
            scale: this.scale,
            screenSize: this.screenSize,
            platform: this.platform,
            version: this.version,
            isSephora: this.isSephora
        }
    }

    get isIos(): boolean {
        return this._isIos;
    }

    get isWechat(): boolean {
        return this._isWechat
    }

    get isAndriod(): boolean {
        return this._isAndroid;
    }

    get tag(): boolean {
        if (this.isSephora) {
            try {
                return this.useragentLower.search(/sephora\/app/) > -1
            } catch (e) {
                return false
            }
        }
        return false
    }

    get scale() {
        const _value: any = this.value;
        if (_value) {
            try {
                return _value.match(/(scale\/([\d\.]+))/)[2]
            } catch (e) {
                return false
            }
        }
        return false
    }

    get screenSize() {
        const _value: any = this.value;
        if (_value) {
            try {
                const wh = _value.match(/(screensize\/([\d\.x]+))/)[2]
                return {
                    width: wh.split('x')[0],
                    height: wh.split('x')[1]
                }
            } catch (e) {
                return {
                    width: false,
                    height: false
                }
            }
        }
        return {
            width: false,
            height: false
        }
    }

    get platform() {
        const _value: any = this.value;
        if (_value) {
            try {
                return _value.match(/(iphone|android phone|android ecwall)/)[0]
            } catch (e) {
                return false
            }
        }
        return false
    }

    get value() {
        if (this.isSephora) {
            try {
                return this.useragentLower.match(/\([^)]*\)/)[0];
            } catch (e) {
                return false
            }
        }
        return false;
    }

    get version() {
        if (this.isSephora) {
            try {
                return this.useragentLower.match(/^sephora\/([\d\.]+)/)[1]
            } catch (e) {
                return false
            }
        }
        return false
    }

    get isSephora(): boolean {
        return this.useragent.search(/^Sephora/) > -1;
    }
}

export { UserAgent }