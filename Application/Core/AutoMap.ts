export default function map(source,destination){

    Object.keys(source).map(function(key, index) {
        destination[key]= source[key];
      });
}

