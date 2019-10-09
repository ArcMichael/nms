import { EnthusiasmAction } from '../actions';
import { demo } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import initState from "../store/initState";

export function enthusiasm(state: demo = initState.demo, action: EnthusiasmAction): demo {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Number( state.enthusiasmLevel) + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Number( state.enthusiasmLevel) - 1 <= 0 ? 1 : Number( state.enthusiasmLevel) - 1 };
    }
    return state;
}