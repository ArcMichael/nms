export interface slider {
    collapsed: boolean;
}
export interface demo {
    languageName: string;
    enthusiasmLevel?: number;
}

export interface layout{
    collapsed?: boolean;
}

export interface StoreState {
    demo: demo;
    layout: layout;
}
