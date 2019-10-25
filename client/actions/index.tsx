import * as constants from '../constants'

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

/**
 * Layout Slider
 */
export interface LayoutSliderCollapsedShow {
    type: constants.LAYOUT_SLIDER_COLLAPSED_SHOW;
}

export interface LayoutSliderCollapsedHide {
    type: constants.LAYOUT_SLIDER_COLLAPSED_HIDE;
}

export type LayoutSliderCollapsedAction = LayoutSliderCollapsedShow | LayoutSliderCollapsedHide;

export function layoutSliderCollapsedShow(): LayoutSliderCollapsedShow {
    console.log('LayoutSliderCollapsedShow')
    return{
        type: constants.LAYOUT_SLIDER_COLLAPSED_SHOW
    }
}

export function layoutSliderCollapsedHide(): LayoutSliderCollapsedHide {
    console.log('LayoutSliderCollapsedHide')
    return {
        type: constants.LAYOUT_SLIDER_COLLAPSED_HIDE
    }
}