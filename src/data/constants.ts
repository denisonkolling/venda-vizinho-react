export const products = [
	{
		_id: 1,
		name: 'Camiseta Vintage',
		price: 15.99,
		image: 'https://source.unsplash.com/random/300×300/?shirt',
		category: 'Roupas',
		brand: 'Fashion Retro',
		description: 'Camiseta vintage em bom estado, estilo retrô dos anos 80.',
		qty: 10,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'abc123',
				createdAt: new Date('2024-02-21T08:30:00.000Z'),
				rating: 4.5,
				comment: 'Ótimo produto, atendeu às minhas expectativas.',
				name: 'Amanda',
				user: 'user123',
			},
			{
				_id: 'def789',
				createdAt: new Date('2024-02-22T10:00:00.000Z'),
				rating: 4,
				comment: 'Gostei da qualidade, mas o tamanho ficou um pouco grande.',
				name: 'Roberto',
				user: 'user789',
			},
		],
	},
	{
		_id: 2,
		name: 'Smartphone Samsung Galaxy S9',
		price: 399.99,
		image: 'https://source.unsplash.com/random/300×300/?smartphone',
		category: 'Eletrônicos',
		brand: 'Samsung',
		description:
			'Smartphone usado em ótimo estado, desbloqueado, com tela de 5.8 polegadas, câmera de 12 MP e 64 GB de armazenamento.',
		qty: 5,
		createdAt: new Date('2024-02-20T00:00:00.000Z'),
		reviews: [
			{
				_id: 'def456',
				createdAt: new Date('2024-02-21T00:00:00.000Z'),
				rating: 5,
				comment: 'Entrega rápida e produto em perfeitas condições!',
				name: 'Rodrigo',
				user: 'user456',
			},
			{
				_id: 'ghi123',
				createdAt: new Date('2024-02-22T12:00:00.000Z'),
				rating: 4,
				comment: 'Excelente custo-benefício!',
				name: 'Adrian',
				user: 'user789',
			},
		],
	},
	{
		_id: 3,
		name: 'Mesa de Jantar Antiga',
		price: 199.99,
		image: 'https://source.unsplash.com/random/300×300/?dinnertable',
		category: 'Móveis',
		brand: 'Vintage Home',
		description:
			'Mesa de jantar antiga em madeira maciça, com capacidade para 6 pessoas.',
		qty: 1,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'jkl456',
				createdAt: new Date('2024-02-22T15:00:00.000Z'),
				rating: 5,
				comment: 'Produto de excelente qualidade, exatamente como descrito!',
				name: 'Leandro',
				user: 'user789',
			},
			{
				_id: 'mno789',
				createdAt: new Date('2024-02-22T16:00:00.000Z'),
				rating: 4,
				comment: 'Estou muito satisfeito com a minha compra. Recomendo!',
				name: 'Gustavo',
				user: 'user101',
			},
		],
	},
	{
		_id: 4,
		name: 'Câmera Fotográfica Canon T6',
		price: 299.99,
		image: 'https://source.unsplash.com/random/300×300/?camera',
		category: 'Eletrônicos',
		brand: 'Canon',
		description: 'Câmera DSLR usada, ótimo estado, acompanha lente 18-55mm.',
		qty: 3,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'pqr123',
				createdAt: new Date('2024-02-22T18:00:00.000Z'),
				rating: 4,
				comment: 'Funciona perfeitamente, estou feliz com minha compra!',
				name: 'Álvaro',
				user: 'user789',
			},
			{
				_id: 'stu456',
				createdAt: new Date('2024-02-22T19:00:00.000Z'),
				rating: 4,
				comment:
					'Ótimo custo-benefício, recomendo a todos os amantes da fotografia.',
				name: 'Marcelo',
				user: 'user101',
			},
		],
	},
	{
		_id: 5,
		name: 'Sofá de Couro',
		price: 499.99,
		image: 'https://source.unsplash.com/random/300×300/?sofa',
		category: 'Móveis',
		brand: 'Comfort Living',
		description: 'Sofá de couro usado, 3 lugares, em bom estado.',
		qty: 2,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'vwx123',
				createdAt: new Date('2024-02-22T20:00:00.000Z'),
				rating: 5,
				comment: 'Adorei o sofá, muito confortável e elegante!',
				name: 'Fernanda',
				user: 'user789',
			},
			{
				_id: 'yza456',
				createdAt: new Date('2024-02-22T21:00:00.000Z'),
				rating: 4,
				comment: 'Boa qualidade, entrega rápida. Recomendo!',
				name: 'Felipe',
				user: 'user101',
			},
		],
	},
	{
		_id: 6,
		name: 'Livro: O Senhor dos Anéis',
		price: 12.5,
		image: 'https://source.unsplash.com/random/300×300/?book',
		category: 'Livros',
		brand: 'Tolkien Books',
		description:
			'Edição usada em bom estado do clássico da literatura fantástica.',
		qty: 8,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'bcd123',
				createdAt: new Date('2024-02-22T22:00:00.000Z'),
				rating: 5,
				comment: 'Um dos melhores livros que já li, recomendo!',
				name: 'Marcos',
				user: 'user789',
			},
			{
				_id: 'cde456',
				createdAt: new Date('2024-02-22T23:00:00.000Z'),
				rating: 3,
				comment: 'História envolvente e personagens memoráveis.',
				name: 'Emily',
				user: 'user101',
			},
		],
	},
	{
		_id: 7,
		name: 'Bicicleta Urbana',
		price: 149.99,
		image: 'https://source.unsplash.com/random/300×300/?bike',
		category: 'Esportes',
		brand: 'UrbanBike',
		description:
			'Bicicleta urbana usada, aro 26, em bom estado de conservação.',
		qty: 4,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'def123',
				createdAt: new Date('2024-02-23T10:00:00.000Z'),
				rating: 5,
				comment: 'Excelente bicicleta, estou muito feliz com minha compra!',
				name: 'Sophia',
				user: 'user789',
			},
			{
				_id: 'efg456',
				createdAt: new Date('2024-02-23T11:00:00.000Z'),
				rating: 3,
				comment: 'Ótima qualidade e conforto. Recomendo!',
				name: 'Liam',
				user: 'user101',
			},
		],
	},
	{
		_id: 8,
		name: 'Mochila Escolar',
		price: 19.99,
		image: 'https://source.unsplash.com/random/300×300/?backpack',
		category: 'Acessórios',
		brand: 'BackpackPro',
		description:
			'Mochila escolar usada, em bom estado, capacidade para notebook de até 15 polegadas.',
		qty: 6,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'fgh123',
				createdAt: new Date('2024-02-23T12:00:00.000Z'),
				rating: 5,
				comment: 'Mochila muito confortável e prática, adorei!',
				name: 'Isabella',
				user: 'user789',
			},
			{
				_id: 'ghi456',
				createdAt: new Date('2024-02-23T13:00:00.000Z'),
				rating: 3,
				comment: 'Ótimo produto, resistente e espaçoso.',
				name: 'Noah',
				user: 'user101',
			},
		],
	},
	{
		_id: 9,
		name: 'Panela de Ferro Fundido',
		price: 29.99,
		image: 'https://source.unsplash.com/random/300×300/?pan',
		category: 'Utensílios Domésticos',
		brand: 'Kitchen Essentials',
		description:
			'Panela de ferro fundido usada, em bom estado, ideal para cozimento lento.',
		qty: 3,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'hij123',
				createdAt: new Date('2024-02-23T14:00:00.000Z'),
				rating: 5,
				comment: 'Panela de excelente qualidade, recomendo a todos!',
				name: 'Olivia',
				user: 'user789',
			},
			{
				_id: 'ijk456',
				createdAt: new Date('2024-02-23T15:00:00.000Z'),
				rating: 4,
				comment: 'Estou muito satisfeito com o produto, entrega rápida!',
				name: 'William',
				user: 'user101',
			},
		],
	},
	{
		_id: 10,
		name: 'Skate Completo',
		price: 39.99,
		image: 'https://source.unsplash.com/random/300×300/?skate',
		category: 'Esportes',
		brand: 'SkateZone',
		description: 'Skate completo usado, em bom estado, ideal para iniciantes.',
		qty: 5,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'jkl123',
				createdAt: new Date('2024-02-23T16:00:00.000Z'),
				rating: 5,
				comment: 'Adorei o skate, super resistente e ágil!',
				name: 'Emma',
				user: 'user789',
			},
			{
				_id: 'klm456',
				createdAt: new Date('2024-02-23T17:00:00.000Z'),
				rating: 4,
				comment: 'Skate de ótima qualidade, meu filho adorou!',
				name: 'James',
				user: 'user101',
			},
		],
	},
	{
		_id: 11,
		name: 'Violão Acústico',
		price: 79.99,
		image: 'https://source.unsplash.com/random/300×300/?guitar',
		category: 'Instrumentos Musicais',
		brand: 'MusicMaster',
		description: 'Violão acústico usado, em bom estado, com cordas novas.',
		qty: 2,
		createdAt: new Date('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
				_id: 'lmn123',
				createdAt: new Date('2024-02-23T18:00:00.000Z'),
				rating: 5,
				comment: 'Ótimo violão, som de alta qualidade!',
				name: 'Sophia',
				user: 'user789',
			},
			{
				_id: 'mno456',
				createdAt: new Date('2024-02-23T19:00:00.000Z'),
				rating: 4,
				comment: 'Estou muito feliz com a minha compra, recomendo!',
				name: 'Liam',
				user: 'user101',
			},
		],
	},
];
