const options = [
	{
		id: 0,
		type: "question",
		title: require("../images/text/0.png"),
		questions: [
			{
				to: 1,
				image: require("../images/buttons/button-1.png")
			},
			{
				to: 2,
				image: require("../images/buttons/button-2.png")
			}
		]
	},
	{
		id: 1,
		type: "bonus",
		title: require("../images/text/1.png"),
		image: require("../images/bonuses/bonus-1.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB15"
	},
	{
		id: 2,
		type: "question",
		title: require("../images/text/2.png"),
		questions: [
			{
				to: 3,
				image: require("../images/buttons/button-3.png")
			},
			{
				to: 4,
				image: require("../images/buttons/button-4.png")
			},
			{
				to: 5,
				image: require("../images/buttons/button-5.png")
			}
		]
	},
	{
		id: 3,
		type: "bonus",
		image: require("../images/bonuses/bonus-2.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB13"
	},
	{
		id: 4,
		type: "bonus",
		image: require("../images/bonuses/bonus-3.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB14"
	},
	{
		id: 5,
		type: "question",
		title: require("../images/text/4.png"),
		questions: [
			{
				to: 6,
				image: require("../images/buttons/button-6.png")
			},
			{
				to: 7,
				image: require("../images/buttons/button-7.png")
			}
		]
	},
	{
		id: 6,
		type: "bonus",
		image: require("../images/bonuses/bonus-4.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB11"
	},
	{
		id: 7,
		type: "question",
		title: require("../images/text/5.png"),
		questions: [
			{
				to: 8,
				image: require("../images/buttons/button-8.png")
			},
			{
				to: 9,
				image: require("../images/buttons/button-9.png")
			},
			{
				to: 10,
				image: require("../images/buttons/button-10.png")
			}
		]
	},
	{
		id: 8,
		type: "bonus",
		image: require("../images/bonuses/bonus-5.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB12"
	},
	{
		id: 9,
		type: "bonus",
		image: require("../images/bonuses/bonus-6.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB16"
	},
	{
		id: 10,
		type: "bonus",
		image: require("../images/bonuses/bonus-7.png"),
		to: "https://www.planet7casino.com/webplay/?cashier&coupon=BYOB26"
	}
];

export default options;
