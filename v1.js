const input = [
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
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G3",
	},
	{
		id: "E1",
		name: "gita",
		gender: "female",
		Location: "bkc",
		role: "SSA2",
		wantCompoff: "no",
		availableForNight: "no",
		interestedForContinousCompoff: "no",
		group: "G1",
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
		id: "E3",
		name: "janhvi",
		gender: "female",
		Location: "bkc",
		role: "SA1",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G1",
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
		id: "E4",
		name: "christina",
		gender: "female",
		Location: "bkc",
		role: "SA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G1",
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
		id: "E2",
		name: "savitha",
		gender: "female",
		Location: "bcp",
		role: "SSA2",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G1",
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
		id: "E16",
		name: "mankala",
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
];
const employees = input;

// ---------- Helpers ----------
function groupByRole(prefix) {
	return employees.filter((e) => e.role.startsWith(prefix));
}

function splitByLocation(list) {
	return {
		bkc: list.filter((e) => e.Location.toLowerCase() === "bkc"),
		bcp: list.filter((e) => e.Location.toLowerCase() === "bcp"),
	};
}

function combinations(arr, k) {
	const res = [];
	function backtrack(start, path) {
		if (path.length === k) {
			res.push([...path]);
			return;
		}
		for (let i = start; i < arr.length; i++) {
			path.push(arr[i]);
			backtrack(i + 1, path);
			path.pop();
		}
	}
	backtrack(0, []);
	return res;
}

function locationValid(group, reqBkc, reqBcp) {
	let bkc = 0,
		bcp = 0;
	for (let p of group) {
		if (p.Location.toLowerCase() === "bkc") bkc++;
		if (p.Location.toLowerCase() === "bcp") bcp++;
	}
	return bkc === reqBkc && bcp === reqBcp;
}

function generateLeads() {
	const lead1 = employees.filter((e) => e.role === "LEAD1");
	const lead2 = employees.filter((e) => e.role === "LEAD2");
	const lead3 = employees.filter((e) => e.role === "LEAD3");

	const results = [];

	// Combination 1: 1-LEAD2 + *-LEAD3
	for (let l2 of lead2) {
		for (let count = lead3.length; count >= 0; count--) {
			for (let combo of combinations(lead3, count)) {
				results.push([l2, ...combo]);
			}
		}
	}

	// Combination 2: 1-LEAD1 + *-LEAD3
	for (let l1 of lead1) {
		for (let count = lead3.length; count >= 0; count--) {
			for (let combo of combinations(lead3, count)) {
				results.push([l1, ...combo]);
			}
		}
	}

	// Apply location filter
	const locationRules = [
		[1, 1],
		[0, 1],
		[1, 0],
	];
	return results.filter((group) =>
		locationRules.some(([bkc, bcp]) => locationValid(group, bkc, bcp)),
	);
}

function generateSSA() {
	const ssa1 = employees.filter((e) => e.role === "SSA1");
	const ssa2 = employees.filter((e) => e.role === "SSA2");
	const ssa3 = employees.filter((e) => e.role === "SSA3");

	const results = [];

	// 1-SSA1 + 1-SSA2 + *-SSA3
	for (let a of ssa1)
		for (let b of ssa2)
			for (let count = ssa3.length; count >= 0; count--)
				for (let combo of combinations(ssa3, count))
					results.push([a, b, ...combo]);

	// 2-SSA2 + *-SSA3
	for (let combo2 of combinations(ssa2, 2))
		for (let count = ssa3.length; count >= 0; count--)
			for (let combo3 of combinations(ssa3, count))
				results.push([...combo2, ...combo3]);

	// 2-SSA1 + *-SSA3
	for (let combo1 of combinations(ssa1, 2))
		for (let count = ssa3.length; count >= 0; count--)
			for (let combo3 of combinations(ssa3, count))
				results.push([...combo1, ...combo3]);

	const locationRules = [
		[1, 1],
		[2, 0],
		[0, 2],
	];
	return results.filter((group) =>
		locationRules.some(([bkc, bcp]) => locationValid(group, bkc, bcp)),
	);
}

function generateSA() {
	const sa1 = employees.filter((e) => e.role === "SA1");
	const sa2 = employees.filter((e) => e.role === "SA2");
	const sa3 = employees.filter((e) => e.role === "SA3");

	const results = [];

	// 2-SA1 + 3-SA2 + *-SA3
	for (let a of combinations(sa1, 2))
		for (let b of combinations(sa2, 3))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count))
					results.push([...a, ...b, ...c]);

	// 3-SA1 + 2-SA2 + *-SA3
	for (let a of combinations(sa1, 3))
		for (let b of combinations(sa2, 2))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count))
					results.push([...a, ...b, ...c]);

	const locationRules = [
		[3, 2],
		[2, 3],
	];
	return results.filter((group) =>
		locationRules.some(([bkc, bcp]) => locationValid(group, bkc, bcp)),
	);
}

function generateAllTeams() {
	const leads = generateLeads();
	const ssas = generateSSA();
	const sas = generateSA();

	const allTeams = [];

	for (let l of leads)
		for (let ssa of ssas)
			for (let sa of sas) allTeams.push([...l, ...ssa, ...sa]);

	return allTeams;
}

const output = generateAllTeams();
console.log("Total Teams:", output.length);
// console.log(output);
// console.log(output[0][0].id);
let output2 = output;
for (let i = 0; i < output2.length; i++) {
	let v = [];
	for (let j = 0; j < output2[i].length; j++) {
		// v.push(output2[i][j].id);
		v.push(output2[i][j].name);
	}
	console.log(v.join(","));
}
