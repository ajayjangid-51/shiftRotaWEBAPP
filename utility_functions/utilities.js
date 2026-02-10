export function combinations(arr, k, rtype = "LEAD1") {
	if (arr.length < k) {
		let dummyCount = 1;
		let dummyLocation = "bkc";
		while (arr.length < k) {
			// arr.push(`DUMMY${dummyCount++}`);
			arr.push({
				id: `DUMMY${dummyCount}`,
				name: `${rtype}DUMMY${dummyCount}`,
				gender: "male",
				Location: dummyLocation,
				role: `${rtype}`,
				wantCompoff: "yes",
				availableForNight: "yes",
				interestedForContinousCompoff: "yes",
				group: "GX",
			});
			dummyCount++;
			if (dummyLocation === "bkc") {
				dummyLocation = "bcp";
			} else {
				dummyLocation = "bkc";
			}
		}
	}
	const res = [];
	function backtrack(start, path) {
		if (path.length === k) return res.push([...path]);
		for (let i = start; i < arr.length; i++) {
			path.push(arr[i]);
			backtrack(i + 1, path);
			path.pop();
		}
	}
	backtrack(0, []);
	return res;
}

export function locationCount(group) {
	let bkc = 0,
		bcp = 0;
	for (let p of group) {
		if (
			!["LEAD3", "SSA3", "SA3"].includes(p.role) &&
			p.Location.toLowerCase() === "bkc"
		)
			bkc++;
		if (
			!["LEAD3", "SSA3", "SA3"].includes(p.role) &&
			p.Location.toLowerCase() === "bcp"
		)
			bcp++;
	}
	return { bkc, bcp };
}

export function matchLocation(group, [reqBkc, reqBcp]) {
	const { bkc, bcp } = locationCount(group);
	return bkc === reqBkc && bcp === reqBcp;
}

export async function appendToFile(filename, data) {
	try {
		await fs.appendFile(filename, data + "\n", "utf8"); // Appends data and a newline
		// console.log("Data appended successfully!");
	} catch (err) {
		console.error("Error appending to file:", err);
	}
}
