export interface slider {
    collapsed: boolean;
}
export interface demo {
    languageName: string;
    enthusiasmLevel?: number;
}
// export interface layout {
//     slider: slider;
// }

export interface Slider{
    collapsed: boolean;
}

export interface TLayout{
    slider: Slider
}

export interface StoreState {
    demo: demo;
    layout: TLayout;
}