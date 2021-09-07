/*
Given a string with HTMLElements, check if it has the correct format with opening and closing tags (if so return true) else return the first element without a proper closing tag.
*/

function HTMLElements(str) {
  let openingTags = str.match(/<\w+>/g);
   let closingTags = str.match(/(<\/\w+>)/g);
   let strObj = {
     '<div>': '</div>',
     '<p>':'</p>',
     '<i>':'</i>',
     '<p>':'</p>',
     '<em>':'</em>',
     '<b>':'</b>',
   };

   const max = Math.max(openingTags.length, closingTags.length);
   for(i = 0; i < max; i++){
     let checkOpeningTag = strObj[openingTags[i]];
     if (closingTags.indexOf(checkOpeningTag) === -1){
       return (openingTags[i] || closingTags[i]).replace(/<|>/g, '');
     }
     if(closingTags.indexOf(checkOpeningTag) !== -1){
       let index = closingTags.indexOf(checkOpeningTag);
       closingTags[index] = '';
     }
   }
   return true;
 }

 let str =  "<div><div><b></b></div></p>";
 HTMLElements(str);