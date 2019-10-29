import { SliderBarAction } from '../actions';
import { layout } from '../types/index';
import { SLIDERBAR_HIDE, SLIDERBAR_SHOW } from '../constants/index';

const initLayout = {
    layout: {
        sliderBar: false
    }
}

export function layout(state: layout = initLayout.layout, action: SliderBarAction): layout {
    switch (action.type) {
        case SLIDERBAR_SHOW:
            return { ...state, sliderBar: true };
        case SLIDERBAR_HIDE:
            return { ...state, sliderBar: false };
    }
    return state;
}