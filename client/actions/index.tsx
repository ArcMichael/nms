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
export interface SliderBarShow {
    type: constants.SLIDERBAR_SHOW;
}

export interface SliderBarHide {
    type: constants.SLIDERBAR_HIDE;
}

export type SliderBarAction = SliderBarShow | SliderBarHide;

export function sliderbarShow(): SliderBarShow {
    console.log('SliderBarShow')
    return{
        type: constants.SLIDERBAR_SHOW
    }
}

export function sliderbarHide(): SliderBarHide {
    console.log('SliderBarHide')
    return {
        type: constants.SLIDERBAR_HIDE
    }
}