str = 'Мама мыла раму';
var vowelCount = function(str){
  var count = 0;
  for(var i = 0; i < str.length; i++) {
   if(str[i] === 'a' || str[i] === 'е' || str[i] === 'ё' ||str[i] === 'и'
    || str[i] === 'о' || str[i] === 'у' || str[i] === 'ы'
    || str[i] === 'э' || str[i] == 'ю' || str[i] == 'я') {
      count+=1;
    }
        }
  vowelCount(str)
  return count;
