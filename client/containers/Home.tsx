import Home from '../components/Home';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({  }: StoreState) {
  return {}
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {}
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object){
    return Object.assign({}, ownProps, stateProps, dispatchProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);