new Vue ({
	el: '#app',
	data: {
		products:
		[
			{ id: 0, name: 'КОФЕ ЛАТТЕ', en: 'latte', price: '50р', desk: 'Латте — кофейный напиток родом из Италии, состоящий из молока и кофе эспрессо.' },
			{ id: 1, name: 'КАПУЧИНО', en: 'cappuc',price: '70р',desk: 'Капучино — кофейный напиток на основе эспрессо с подогретым вспененным молоком. ' },
			{ id: 2, name: 'РАФ КЛАСС.', en: 'raf',price: '150р', desk: 'Раф – горячий напиток, приготовленный из эспрессо,сахара и свежих сливок.' },
			{ id: 3, name: 'БЕЛЫЙ МОККО', en: 'white_mocco',price: '180р', desk: 'Белый Моккачино - раздновидность латте с добавлением белого шоколада.' },
			{ id: 4, name: 'ЧЕРНЫЙ МОККО', en: 'black_mocco',price: '180р', desk: 'Черный Моккачино - разновидность латте с добавлением горького шоколада.' },
		],
	},
})