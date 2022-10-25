import attackExtractor from '../app';

test('extract attacks 2', () => {
	const character = {
		special: [
			{
				id: 8,
				name: 'Двойной выстрел',
				icon: 'http://...',
				description: 'Двойной выстрел наносит двойной урон',
			},
			{
				id: 9,
				name: 'Нокаутирующий удар',
				icon: 'http://...',
			},
		],
	};
	const result = [
		{
			id: 8, 
      name: 'Двойной выстрел', 
      icon: 'http://...', 
      description: 'Двойной выстрел наносит двойной урон',
		},
		{
			id: 9, 
      name: 'Нокаутирующий удар', 
      icon: 'http://...', 
      description: 'Описание недоступно',
		},
	];
	expect(attackExtractor(character)).toEqual(result);
});

test('extract attacks', () => {
	const character = {
		special: [],
	};
	const result = [];
	expect(attackExtractor(character)).toEqual(result);
});
