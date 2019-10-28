export interface demo {
    languageName: string;
    enthusiasmLevel?: number;
}

export interface layout{
    sliderBar?: boolean;
}

export interface StoreState {
    demo: demo;
    layout: layout;
}
