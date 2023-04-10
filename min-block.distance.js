//www.youtube.com/watch?v=rw4s4M3hFfs

https: function minBlockDistance(blocks = [], requirements = []) {
	const result = blocks.map((block) => {
		return requirements.map((req) => (block[req] === true ? 0 : null));
	});

	blocks.forEach((block, i) => {
		result.forEach((res, j) => {
			if (i !== j)
				result[j] = res.map((r, reqIndex) => {
					return block[requirements[reqIndex]] === true &&
						(r === null || r > Math.abs(i - j))
						? Math.abs(i - j)
						: r;
				});
		});
	});

	console.log(result);

	return result
		.map((block) => block.reduce((acc, curr) => acc + curr, 0))
		.reduce(
			(prev, curr, i) =>
				prev.value === null || prev.value > curr
					? { index: i, value: curr }
					: prev,
			{ index: null, value: null }
		).index;
}

console.log(
	minBlockDistance(
		[
			{
				gym: true,
				school: true,
				park: true,
			},
			{
				gym: false,
				school: false,
				park: false,
			},
			{
				gym: false,
				school: true,
				park: false,
			},
			{
				gym: false,
				school: false,
				park: true,
			},
		],
		['gym', 'park']
	)
);
