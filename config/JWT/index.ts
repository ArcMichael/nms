import development from "./development";
import production from "./production";

import env from "../Environment";

let Environment = development;

if( env === 'development' ){
    Environment = development;
}

export default Environment;