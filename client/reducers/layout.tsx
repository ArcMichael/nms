import { LayoutSliderCollapsedAction } from '../actions';
import { layout } from '../types/index';
import { LAYOUT_SLIDER_COLLAPSED_SHOW, LAYOUT_SLIDER_COLLAPSED_HIDE } from '../constants/index';

const initState = {
    layout: {
        collapsed: false
    }
}

export function layout(state: layout = initState.layout, action: LayoutSliderCollapsedAction): layout {
    switch (action.type) {
        case LAYOUT_SLIDER_COLLAPSED_SHOW:
            return { ...state, collapsed: true }
        case LAYOUT_SLIDER_COLLAPSED_HIDE:
            return { ...state, collapsed: false }
    }
    return state;
}