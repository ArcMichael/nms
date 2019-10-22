import { LayoutSliderAction } from "../actions";
// import { layout } from "../types";
import { LAYOUT_SLIDER_HIDE, LAYOUT_SLIDER_SHOW } from "../constants";

export interface Slider{
    collapsed: boolean;
}

export interface StateLayout{
    slider: Slider
}

const initStateLayout: StateLayout = {
    slider:  {
        collapsed: true
    }
}

export function layout(state = initStateLayout, actions: LayoutSliderAction): StateLayout {
    switch (actions.type) {
        case LAYOUT_SLIDER_HIDE:
            return { ...state, slider: { collapsed: false } }
        case LAYOUT_SLIDER_SHOW:
            return { ...state, slider: { collapsed: true } }
    }
    return state;
}