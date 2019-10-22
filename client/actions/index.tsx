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
 * Layout Slider Display
 */

export interface LayoutSliderHide {
    type: constants.LAYOUT_SLIDER_HIDE;
 }

 export interface LayoutSliderShow {
    type: constants.LAYOUT_SLIDER_SHOW;
 }

 export type LayoutSliderAction = LayoutSliderHide | LayoutSliderShow;

 export function layoutSliderHide(): LayoutSliderHide {
     return {
         type: constants.LAYOUT_SLIDER_HIDE
     }
 }

 export function layoutSliderShow(): LayoutSliderShow {
     return {
         type: constants.LAYOUT_SLIDER_SHOW
     }
 }