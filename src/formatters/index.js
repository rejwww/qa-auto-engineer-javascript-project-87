import stylish from "./stylish.js";
import plain from "./plain.js";

const formatName = (format, comparisonResult) =>{
     
    if (format === 'stylish') {
     return stylish(comparisonResult);
 } else if (format === 'plain') {
     return plain(comparisonResult);
 } 
}

export default formatName
  