import {Bouilloire} from "./class/bouilloire.js";
import {chauffer} from "./function/chauffer.js";

let eau = new Bouilloire(0)
console.log(eau);

chauffer(eau);