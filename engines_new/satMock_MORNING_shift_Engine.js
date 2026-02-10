const fs = require("node:fs/promises");
const filePath = "outputs/sat_mock_MORNING_shifts.txt";

const input = [
	// {
	// 	id: "E1",
	// 	name: "gita",
	// 	gender: "female",
	// 	Location: "bkc",
	// 	role: "SSA2",
	// 	// role: "LEAD3",
	// 	wantCompoff: "no",
	// 	availableForNight: "no",
	// 	interestedForContinousCompoff: "no",
	// 	group: "G1",
	// },
	// {
	// 	id: "E3",
	// 	name: "janhvi",
	// 	gender: "female",
	// 	Location: "bkc",
	// 	role: "SA1",
	// 	wantCompoff: "yes",
	// 	availableForNight: "yes",
	// 	interestedForContinousCompoff: "yes",
	// 	group: "G1",
	// },
	// {
	// 	id: "E4",
	// 	name: "christina",
	// 	gender: "female",
	// 	Location: "bkc",
	// 	role: "SA2",
	// 	wantCompoff: "yes",
	// 	availableForNight: "yes",
	// 	interestedForContinousCompoff: "yes",
	// 	group: "G1",
	// },
	// {
	// 	id: "E2",
	// 	name: "savitha",
	// 	gender: "female",
	// 	Location: "bcp",
	// 	role: "SSA2",
	// 	wantCompoff: "yes",
	// 	availableForNight: "yes",
	// 	interestedForContinousCompoff: "yes",
	// 	group: "G1",
	// },
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
	// {
	// 	id: "E11",
	// 	name: "balachander",
	// 	gender: "male",
	// 	Location: "bcp",
	// 	role: "LEAD3",
	// 	wantCompoff: "yes",
	// 	availableForNight: "yes",
	// 	interestedForContinousCompoff: "yes",
	// 	group: "G3",
	// },
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
];
// const employees = input;
function combinations(arr, k, rtype = "LEAD1") {
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
	for (let l2 of combinations(lead2, 1, "LEAD2")) {
		for (let count = lead3.length; count >= 0; count--) {
			for (let combo of combinations(lead3, count, "LEAD3")) {
				// console.log("the combo is : ", combo);
				const group = [...l2, ...combo];
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
	for (let l1 of combinations(lead1, 1, "LEAD1")) {
		for (let count = lead3.length; count >= 0; count--) {
			for (let combo of combinations(lead3, count, "LEAD3")) {
				const group = [...l1, ...combo];
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
		[1, 1],
		[2, 0],
		[0, 2],
	];

	// Rule 1 - 1SSA1+1SSA2+*SSA3
	for (let a of combinations(ssa1, 1, "SSA1"))
		for (let b of combinations(ssa2, 1, "SSA2"))
			for (let count = ssa3.length; count >= 0; count--)
				for (let c of combinations(ssa3, count, "SSA3")) {
					const group = [...a, ...b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}

	// Rule 2 - 2SSA2+*SSA3
	for (let b of combinations(ssa2, 2, "SSA2")) {
		for (let count = ssa3.length; count >= 0; count--)
			for (let c of combinations(ssa3, count, "SSA3")) {
				const group = [...b, ...c];
				for (let loc of locationOptions)
					if (matchLocation(group, loc)) yield group;
			}
	}

	// Rule 3 - 2SSA1+*SSA3
	for (let a of combinations(ssa1, 2, "SSA1")) {
		for (let count = ssa3.length; count >= 0; count--)
			for (let c of combinations(ssa3, count, "SSA3")) {
				const group = [...a, ...c];
				for (let loc of locationOptions)
					if (matchLocation(group, loc)) yield group;
			}
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
		[3, 2],
		[2, 3],
		[4, 1],
		[1, 4],
	];

	// Rule 1 - 2SA1+3SA2+*SA3
	for (let a of combinations(sa1, 2, "SA1"))
		for (let b of combinations(sa2, 3, "SA2"))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count, "SA3")) {
					const group = [...a, ...b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}

	// Rule 2 - 3SA1+2SA2+*SA3
	for (let a of combinations(sa1, 3, "SA1"))
		for (let b of combinations(sa2, 2, "SA2"))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count, "SA3")) {
					const group = [...a, ...b, ...c];
					for (let loc of locationOptions)
						if (matchLocation(group, loc)) yield group;
				}
	// Rule 3 - 4SA1+1SA2+*SA3
	for (let a of combinations(sa1, 4, "SA1"))
		for (let b of combinations(sa2, 1, "SA2"))
			for (let count = sa3.length; count >= 0; count--)
				for (let c of combinations(sa3, count, "SA3")) {
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
// now we will filter out most correct combo:
// conditions for more correct satmock-morning combo:-
// 1.list length should be greater than or equal to 8 (length>=8)
// 2.now make the group of lists containing 0 dummy, 1 dummy , 2dummy etc , for example group1 , group2 , notepoint : these groups are array of list only,

// now see the lists of group1
// if group1 is empty then see the lists of group2
// if group2 is empty then see the list of group3
// .. so onnn upto no. of groups created.

// rules for choosing list as per the refrenching table:-
// now how to chooose the people from group as per the refrencing from support-table.

//

// notepoin:-
// replacement of dummy-employee will be managed manully by manager. by manking special-request to other employees.

// console.log(orderedTeams);
// orderedTeams.sort((a, b) => b.length - a.length);
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

// ////////////////////////////////////

const data = orderedTeams;
const minLength = 8;
const filtered = data.filter((list) => list.length >= minLength);
// console.log("the filtered is ", filtered);

const isDummy = (name) => name.name.includes("DUMMY");

const countDummies = (list) =>
	list.reduce((count, name) => count + (isDummy(name) ? 1 : 0), 0);

const groupedByDummyCount = filtered.reduce((groups, list) => {
	const dummyCount = countDummies(list);
	// console.log("the dummy count is ", dummyCount);

	if (!groups[dummyCount]) {
		groups[dummyCount] = [];
	}

	groups[dummyCount].push(list);
	return groups;
}, {});

const namedGroups = Object.fromEntries(
	Object.entries(groupedByDummyCount).map(([count, lists]) => [
		`group${count}`,
		lists,
	]),
);

// console.log(typeof namedGroups);
// console.log(namedGroups);

// const firstKey = Object.keys(namedGroups)[0];
// console.log(firstKey);
// Output: key1
// console.log(namedGroups["group0"]);
const satSupportTable = {
	gita: [1, 1, 0, 0],
	savitha: [0, 0, 0, 0],
	janhvi: [1, 1, 0, 0],
	christina: [1, 1, 0, 0],
	vikas: [1, 0, 1, 0],
	prajakta: [1, 0, 1, 0],
	vaishali: [1, 0, 1, 0],
	arushina: [1, 0, 1, 0],
	sarvesh: [1, 1, 0, 0],
	prabhakr: [1, 0, 1, 0],
	balachander: [1, 0, 1, 0],
	santosh: [1, 1, 0, 0],
	shubhamKadam: [1, 0, 1, 0],
	gauravShinde: [0, 0, 0, 0],
	ajayjangid: [1, 0, 1, 0],
	srikant: [1, 1, 0, 0],
	sudarshan: [1, 1, 0, 0],
	chirag: [1, 1, 0, 0],
	abhishekMehta: [1, 0, 1, 0],
	kavin: [1, 0, 1, 0],
};

let ans = [];

for (const group in namedGroups) {
	// if (Object.hasOwnProperty.call(namedGroups, group)) {
	// 	console.log(group); // Prints the key name
	// }
	console.log("the group is", group);
	console.log("the group0 length is : ", namedGroups[group].length);
	for (const a of namedGroups[group]) {
		// console.log("the group0 is : ", namedGroups[group]);
		// console.log("the a is : ", a);
		// console.log(a.join(","));
		let cnt = 0;
		let maxi = 50000;

		const v1 = [];
		for (b of a) {
			// console.log("the arry is : ", b.name.join(","));
			v1.push(b.name);
			// console.log(satSupportTable[b]);
			// console.log("the b is", b);
			if (b.name.includes("DUMMY")) {
				cnt += 0;
			} else {
				cnt += satSupportTable[b.name][1];
			}
		}
		console.log("the arry is ", v1.join(","));
		if (cnt < maxi) {
			maxi = cnt;
			ans = a;
		}
	}
	console.log("------------------------");
	if (ans.length > 0) break;
	// console.log("------------------------");
}

// console.log("the final ans is : ", ans);
let ansInPlainArray = [];
for (const a of ans) {
	// console.log("the a is : ", a);
	ansInPlainArray.push(a.name);
}
console.log("the final plian arry is : ", ansInPlainArray.join(","));
// if above ans is empty then move to next group and do while get some value in answer.

// notepoint:-
/* 
Total Teams: 54
the group is group2
the group0 length is :  6
the arry is  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA2DUMMY1,SA2DUMMY2
the arry is  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA2DUMMY1,SA2DUMMY3
the arry is  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA2DUMMY2,SA2DUMMY3
the arry is  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA1DUMMY1,SA2DUMMY1
the arry is  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA1DUMMY1,SA2DUMMY2
the arry is  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA1DUMMY1,SA2DUMMY3
------------------------
the final plian arry is :  sarvesh,santosh,gauravShinde,srikant,sudarshan,chirag,SA1DUMMY1,SA2DUMMY3
*/
// in the above example, the final array is : the dummy count is same, but dummy selection can have the impact like, LEAD1DUMMY1's repleacement is hard to replace, so choose the dummy accordingly. choose via priority like if list contatining lead's dummy then that should be avoided
