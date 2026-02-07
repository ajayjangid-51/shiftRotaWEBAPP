const fs = require("node:fs/promises");
const filePath = "sat_mock_afternoon_shifts_output.txt";

const input = [
	{
		id: "E5",
		name: "vikas",
		gender: "male",
		Location: "bkc",
		role: "SSA1",
		wantCompoff: "yes",
		availableForNight: "no",
		interestedForContinousCompoff: "yes",
		group: "G2",
	},
	{
		id: "E6",
		name: "prajakta",
		gender: "female",
		Location: "bkc",
		role: "SSA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G2",
	},
	{
		id: "E7",
		name: "vaishali",
		gender: "female",
		Location: "bkc",
		role: "SA1",
		wantCompoff: "no",
		availableForNight: "no",
		interestedForContinousCompoff: "yes",
		group: "G2",
	},
	{
		id: "E8",
		name: "arushina",
		gender: "female",
		Location: "bkc",
		role: "SA2",
		wantCompoff: "yes",
		availableForNight: "no",
		interestedForContinousCompoff: "yes",
		group: "G2",
	},
	{
		id: "E9",
		name: "sarvesh",
		gender: "male",
		Location: "bkc",
		role: "LEAD1",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E10",
		name: "prabhakr",
		gender: "male",
		Location: "bcp",
		role: "LEAD2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E11",
		name: "balachander",
		gender: "male",
		Location: "bcp",
		role: "LEAD3",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E12",
		name: "santosh",
		gender: "male",
		Location: "bkc",
		role: "SSA1",
		// role: "LEAD3",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E13",
		name: "shubhamKadam",
		gender: "male",
		Location: "bkc",
		role: "SSA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E26",
		name: "gauravShinde",
		gender: "male",
		Location: "bkc",
		role: "SSA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E14",
		name: "ajayjangid",
		gender: "male",
		Location: "bkc",
		role: "SA1",
		wantCompoff: "no",
		availableForNight: "yes",
		interestedForContinousCompoff: "no",
		group: "G3",
	},

	{
		id: "E15",
		name: "srikant",
		gender: "male",
		Location: "bcp",
		role: "SA1",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E17",
		name: "sudarshan",
		gender: "male",
		Location: "bcp",
		role: "SA1",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E18",
		name: "chirag",
		gender: "male",
		Location: "bcp",
		role: "SA1",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E19",
		name: "abhishekMehta",
		gender: "male",
		Location: "bkc",
		role: "SA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E18",
		name: "kavin",
		gender: "male",
		Location: "bcp",
		role: "SA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
];
// const employees = input;
function combinations(arr, k) {
	if (arr.length < k) {
		let dummyCount = 1;
		while (arr.length < k) {
			arr.push(`DUMMY${dummyCount++}`);
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

function locationCount(group) {
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

function matchLocation(group, [reqBkc, reqBcp]) {
	const { bkc, bcp } = locationCount(group);
	return bkc === reqBkc && bcp === reqBcp;
}

function* leadGroups() {
	const lead1 = input.filter((e) => e.role === "LEAD1");
	const lead2 = input.filter((e) => e.role === "LEAD2");
	const lead3 = input.filter((e) => e.role === "LEAD3");
	// console.log(lead1);
	// console.log(lead2);
	// console.log(lead3);

	const locationOptions = [
		[1, 1],
		[0, 1],
		[1, 0],
	];

	// Rule 1: 1-LEAD2 + *-LEAD3
	for (let l2 of lead2) {
		for (let count = lead3.length; count >= 0; count--) {
			for (let combo of combinations(lead3, count)) {
				// console.log("the combo is : ", combo);
				const group = [l2, ...combo];
				// const v1 = [];
				// for (let i = 0; i < group.length; i++) {
				// 	v1.push(group[i].name);
				// }
				// console.log(v1.join(","));

				// console.log("-------------------------------------------------------");
				for (let loc of locationOptions)
					if (matchLocation(group, loc)) yield group;
			}
		}
	}

	// Rule 2: 1-LEAD1 + *-LEAD3
	for (let l1 of lead1) {
		for (let count = lead3.length; count >= 0; count--) {
			for (let combo of combinations(lead3, count)) {
				const group = [l1, ...combo];
				for (let loc of locationOptions)
					if (matchLocation(group, loc)) yield group;
			}
		}
	}
}

function* ssaGroups() {
	const ssa1 = input.filter((e) => e.role === "SSA1");
	const ssa2 = input.filter((e) => e.role === "SSA2");
	const ssa3 = input.filter((e) => e.role === "SSA3");

	// console.log(ssa1);
	// console.log(ssa2);
	// console.log(ssa3);

	const locationOptions = [
		[3, 0],
		[2, 1],
		[1, 2],
		[0, 3],
	];

	// Rule 1 - 1SSA1+2SSA2+*SSA3
	for (let a of ssa1)
		for (let b of combinations(ssa2, 2))
			for (let count = ssa3.length; count >= 0; count--)
				for (let c of combinations(ssa3, count)) {
					const group = [a, ...b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}

	// Rule 2 - 2SSA1+1SSA2+*SSA3
	for (let a of combinations(ssa1, 2)) {
		for (let b of ssa2)
			for (let count = ssa3.length; count >= 0; count--)
				for (let c of combinations(ssa3, count)) {
					const group = [...a, b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}
	}

	// Rule 3 - 3SSA2+*SSA3
	for (let a of combinations(ssa2, 3))
		for (let count = ssa3.length; count >= 0; count--)
			for (let c of combinations(ssa3, count)) {
				const group = [...a, ...c];
				for (let loc of locationOptions)
					if (matchLocation(group, loc)) yield group;
			}
}

function* saGroups() {
	const sa1 = input.filter((e) => e.role === "SA1");
	const sa2 = input.filter((e) => e.role === "SA2");
	const sa3 = input.filter((e) => e.role === "SA3");

	// console.log(sa1);
	// console.log(sa2);
	// console.log(sa3);

	const locationOptions = [
		[4, 1],
		[3, 2],
		[2, 3],
		[1, 4],
	];

	// Rule 1 - 2SA1+3SA2+*SA3
	for (let a of combinations(sa1, 2))
		for (let b of combinations(sa2, 3))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count)) {
					const group = [...a, ...b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}

	// Rule 2 - 3SA1+2SA2+*SA3
	for (let a of combinations(sa1, 3))
		for (let b of combinations(sa2, 2))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count)) {
					const group = [...a, ...b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}
}

function generateTeamsPriority() {
	const teams = [];

	for (let lead of leadGroups()) {
		for (let ssa of ssaGroups()) {
			for (let sa of saGroups()) {
				teams.push([...lead, ...ssa, ...sa]);
				// teams.push([...lead]);
			}
		}
	}

	return teams;
}

async function appendToFile(filename, data) {
	try {
		await fs.appendFile(filename, data + "\n", "utf8"); // Appends data and a newline
		// console.log("Data appended successfully!");
	} catch (err) {
		console.error("Error appending to file:", err);
	}
}

const orderedTeams = generateTeamsPriority();
console.log("Total Teams:", orderedTeams.length);
// console.log(orderedTeams);
orderedTeams.sort((a, b) => b.length - a.length);
for (const combo of orderedTeams) {
	// console.log(typeof combo);
	// console.log(combo.length);
	const v1 = [];
	for (const emp of combo) {
		v1.push(emp.name);
		// console.log(emp.name);
	}
	// console.log(v1.join(","));
	// const fileContent = v1.join(",");
	// Example usage:
	appendToFile(filePath, v1.join(","));
}
