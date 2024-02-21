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
		createdAt: new Date ('2024-02-21T00:00:00.000Z'),
		reviews: [
			{
        _id: "abc123",
        createdAt: new Date ("2024-02-21T08:30:00.000Z"),
        rating: 4.5,
        comment: "Ótimo produto, atendeu às minhas expectativas.",
        name: "Camiseta Vintage",
        user: "user123",
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
        _id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
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
		reviews: [],
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
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
			},
			{
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
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
		reviews: [],
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
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
			},
			{
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
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
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
			},
			{
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
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
		reviews: [],
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
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
			},
			{
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
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
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
			},
			{
				_id: "def456",
        createdAt: new Date('2024-02-21T00:00:00.000Z'),
        rating: 5,
        comment: "Entrega rápida e produto em perfeitas condições!",
        name: "Smartphone Samsung Galaxy S9",
        user: "user456"
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
		reviews: [],
	},
];
