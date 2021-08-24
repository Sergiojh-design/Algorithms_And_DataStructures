/*
Write a recursive function called reverse which accepts a string and returns a new stirng in reverse.
*/

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//My Solution
function reverse(string){
  if(string.length === 1) return string;
  return reverse(string.slice(1)) + string[0];
}