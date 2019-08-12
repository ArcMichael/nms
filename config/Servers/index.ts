import development from "./development";
import production from "./production";

import env from "../Environment";

let Environment = production;

if( env === 'development' ){
    Environment = development;
}

export default Environment;