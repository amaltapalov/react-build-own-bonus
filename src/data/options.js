const options = [
	{
		id: 0,
		type: 'question',
		title: require('../images/text/0.png'),
		questions: [
			{
				to: 1,
				image: require('../images/buttons/button-1.png')
			},
			{
				to: 2,
				image: require('../images/buttons/button-2.png')
			}
		]
	},
	{
		id: 1,
		type: 'bonus',
		image: require('../images/bonuses/bonus-1.png'),
		to: 'https://www.google.com=BYOB15',
		terms:
			'BYOB15 Terms: This bonus comes with a 10x wagering requirement, no limits on how much you can cash-out, will redeem with any deposit you make of $100 or more, and is good for play in all slots and keno. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Offer valid until 23:59 EST on July 16th, 2019. Unless specifically stated otherwise, standard rules apply.'
	},
	{
		id: 2,
		type: 'question',
		title: require('../images/text/1.png'),
		questions: [
			{
				to: 3,
				image: require('../images/buttons/button-3.png')
			},
			{
				to: 4,
				image: require('../images/buttons/button-4.png')
			},
			{
				to: 5,
				image: require('../images/buttons/button-5.png')
			}
		]
	},
	{
		id: 3,
		type: 'bonus',
		image: require('../images/bonuses/bonus-2.png'),
		to: 'https://www.google.com=BYOB13',
		terms:
			'BYOB13 Terms: This bonus comes with no wagering requirement, no limits on how much you can cash-out, will redeem with any deposit you make of $50 or more, and is good for play in all slots and keno. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Offer valid until 23:59 EST on July 16th, 2019.Unless specifically stated otherwise, standard rules apply.'
	},
	{
		id: 4,
		type: 'bonus',
		image: require('../images/bonuses/bonus-3.png'),
		to: 'https://www.google.com=BYOB14',
		terms:
			'BYOB14 Terms: This bonus comes with no playthrough requirement, $50,000 maximum cash-out, will redeem with any deposit you make of $60 or more, and is good for play in all slots, keno, bingo, and scratch card games. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Offer valid until 23:59 EST on July 16th, 2019. Unless specifically stated otherwise, standard rules apply.'
	},
	{
		id: 5,
		type: 'question',
		title: require('../images/text/2.png'),
		questions: [
			{
				to: 6,
				image: require('../images/buttons/button-6.png')
			},
			{
				to: 7,
				image: require('../images/buttons/button-7.png')
			}
		]
	},
	{
		id: 6,
		type: 'bonus',
		image: require('../images/bonuses/bonus-4.png'),
		to: 'https://www.google.com=BYOB11',
		terms:
			'BYOB11 Terms: This bonus comes with a 5x wagering requirement, no limits on how much you can cash-out, will redeem with any deposit you make of $30 or more, and is good for play in all slots and keno. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Offer valid until 23:59 EST on July 16th, 2019. Unless specifically stated otherwise, standard rules apply.'
	},
	{
		id: 7,
		type: 'question',
		title: require('../images/text/3.png'),
		questions: [
			{
				to: 8,
				image: require('../images/buttons/button-8.png')
			},
			{
				to: 9,
				image: require('../images/buttons/button-9.png')
			},
			{
				to: 10,
				image: require('../images/buttons/button-10.png')
			}
		]
	},
	{
		id: 8,
		type: 'bonus',
		image: require('../images/bonuses/bonus-5.png'),
		to: 'https://www.google.com=BYOB12',
		terms:
			'BYOB12 Terms: This bonus comes with a 5x wagering requirement, no limits on how much you can cash-out, will redeem with any deposit you make of $50 or more, and is good for play in all slots and keno. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Unless specifically stated otherwise, standard rules apply. FREE SPINS Terms: Free spins will be credited automatically upon redemption of relevant coupon code. You must play all of the spins before moving on to another game. Free spins come with a 5x wagering requirements and no added restrictions on withdrawals. Offer valid until 23:59 EST on July 16th, 2019. Unless specifically stated otherwise, standard rules apply. '
	},
	{
		id: 9,
		type: 'bonus',
		image: require('../images/bonuses/bonus-6.png'),
		to: 'https://www.google.com=BYOB16',
		terms:
			'BYOB16 Terms: This bonus comes with a 10x wagering requirement, no limits on how much you can cash-out, will redeem with any deposit you make of $75 or more, and is good for play in all slots and keno. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Unless specifically stated otherwise, standard rules apply. FREE SPINS Terms: Free spins will be credited automatically upon redemption of relevant coupon code. You must play all of the spins before moving on to another game. Free spins come with a 10x wagering requirements and no added restrictions on withdrawals. Offer valid until 23:59 EST on July 16th, 2019. Unless specifically stated otherwise, standard rules apply. '
	},
	{
		id: 10,
		type: 'bonus',
		image: require('../images/bonuses/bonus-7.png'),
		to: 'https://www.google.com=BYOB26',
		terms:
			'BYOB26 Terms: This bonus comes with a 10x wagering requirement, no limits on how much you can cash-out, will redeem with any deposit you make of $75 or more, and is good for play in all slots and keno. Bonus amount is considered non-cashable and will be removed from the amount of your withdrawal request. Unless specifically stated otherwise, standard rules apply. FREE SPINS Terms: Free spins will be credited automatically upon redemption of relevant coupon code. You must play all of the spins before moving on to another game. Free spins come with a 10x wagering requirements and no added restrictions on withdrawals. Offer valid until 23:59 EST on July 16th, 2019. Unless specifically stated otherwise, standard rules apply. '
	}
];

export const getRandomBonus = () => {
	const bonusOption = options.filter(option => option.type === 'bonus');
	var randomBonus =
		bonusOption[Math.floor(Math.random() * bonusOption.length)];

	return randomBonus;
};

export default options;
