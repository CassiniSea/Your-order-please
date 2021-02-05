words = 'is2 Thi1s T4est 3a'

function order(words){
	return words
		.split(' ')
		.sort((a, b) =>
			(	parseInt(a.replace(/[^1-9]/g, '')) -
				parseInt(b.replace(/[^1-9]/g, ''))
			)
		)
		.join(' ')
}
console.log(parseInt('df3dfa'.replace(/[^1-9]/g,'')))
console.log(order(words))