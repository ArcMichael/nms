import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Number( state.enthusiasmLevel) + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Number( state.enthusiasmLevel) - 1 <= 0 ? 1 : Number( state.enthusiasmLevel) - 1 };
    }
    return state;
}