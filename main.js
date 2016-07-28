function pal(str) {

	var removeChar = str.replace(/[\W_]/g,"").toLowerCase();

	return removeChar === removeChar.split('').reverse().join('');

} 
