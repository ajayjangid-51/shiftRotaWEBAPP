// const fs = require("node:fs/promises");
// const filePath = "outputs/sat_mock_MORNING_shifts.txt";
// import {combinations,locationCount,matchLocation,appendToFile} "../utility_functions/utilities"

const { empList } = require("../utils/employeesListWithDetails");
// console.log("the emplist is : ", empList);

const input = [
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
		id: "E14",
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
		id: "E16",
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
		id: "E20",
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

const ROWS = 100;
// const COLS = 197;
const COLS = 50;
const EMP_START_ROW = 2;
const EMP_IDS = [
	"E1",
	"E2",
	"E3",
	"E4",
	"E5",
	"E6",
	"E7",
	"E8",
	"E9",
	"E10",
	"E11",
	"E12",
	"E13",
	"E14",
	"E15",
	"E16",
	"E17",
	"E18",
	"E19",
	"E20",
	"E21",
	"E22",
	"E23",
	"E24",
	"E25",
	"E26",
	"E27",
	"E28",
	"E29",
	"E30",
	"E31",
	"E32",
	"E33",
	"E34",
	"E35",
	"E36",
	"E37",
	"E38",
	"E39",
	"E40",
	"E41",
	"E42",
];
const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// first the eligible people in EMP_IDS array.

function formatDate(d) {
	return d
		.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		})
		.replace(/ /g, "");
}

// ---------------- MATRIX INIT ----------------
const matrix = Array.from({ length: ROWS }, () => Array(COLS).fill("-"));
let d = new Date("2026-03-01");
for (let c = 20; c < COLS; c++) {
	matrix[0][c] = formatDate(d);
	matrix[1][c] = daysShort[d.getDay()];
	d.setDate(d.getDate() + 1);
}

// ---------------- INITIAL SEED DATA (POINT 1) ----------------
for (let c = 20; c <= 20; c++) {
	// group1
	matrix[2][c] = "WO"; // E1
	matrix[3][c] = "WO"; // E2
	matrix[4][c] = "WO"; // E3
	matrix[5][c] = "WO"; // E4
	// group2
	matrix[6][c] = "WO"; // E5
	matrix[7][c] = "WO"; // E6
	matrix[8][c] = "WO"; // E7
	matrix[9][c] = "WO"; // E8
	// group3
	matrix[10][c] = "WO"; // E9
	matrix[11][c] = "WO"; // E10
	matrix[12][c] = "WO"; // E11
	matrix[13][c] = "WO"; // E12
	matrix[14][c] = "WO"; // E13
	matrix[15][c] = "WO"; // E14
	matrix[16][c] = "WO"; // E15
	matrix[17][c] = "WO"; // E16
	matrix[18][c] = "WO"; // E17
	matrix[19][c] = "WO"; // E18
	matrix[20][c] = "WO"; // E19
	matrix[21][c] = "WO"; // E20
	// group4
	matrix[22][c] = "WO"; // E21
	matrix[23][c] = "WO"; // E22
	matrix[24][c] = "WO"; // E23
	matrix[25][c] = "WO"; // E24
	matrix[26][c] = "WO"; // E25
	matrix[27][c] = "WO"; // E26
	matrix[28][c] = "WO"; // E27
	matrix[29][c] = "WO"; // E28
	matrix[30][c] = "WO"; // E29
	matrix[31][c] = "WO"; // E30
	matrix[32][c] = "WO"; // E31
	// group5
	matrix[33][c] = "N"; // E32
	matrix[34][c] = "N"; // E33
	matrix[35][c] = "N"; // E34
	matrix[36][c] = "N"; // E35
	matrix[37][c] = "N"; // E36
	matrix[38][c] = "N"; // E37
	matrix[39][c] = "N"; // E38
	matrix[40][c] = "N"; // E39
	matrix[41][c] = "N"; // E40
	matrix[42][c] = "N"; // E41
	matrix[43][c] = "N"; // E42
}
for (let c = 21; c <= 25; c++) {
	// group1
	matrix[2][c] = "M"; // E1
	matrix[3][c] = "M"; // E2
	matrix[4][c] = "M"; // E3
	matrix[5][c] = "M"; // E4

	// group2
	matrix[6][c] = "A"; // E5
	matrix[7][c] = "A"; // E6
	matrix[8][c] = "A"; // E7
	matrix[9][c] = "A"; // E8

	// group3
	matrix[10][c] = "M"; // E9
	matrix[11][c] = "M"; // E10
	matrix[12][c] = "M"; // E11
	matrix[13][c] = "M"; // E12
	matrix[14][c] = "M"; // E13
	matrix[15][c] = "M"; // E14
	matrix[16][c] = "M"; // E15
	matrix[17][c] = "M"; // E16
	matrix[18][c] = "M"; // E17
	matrix[19][c] = "M"; // E18
	matrix[20][c] = "M"; // E19
	matrix[21][c] = "M"; // E20

	// group4
	matrix[22][c] = "A"; // E21
	matrix[23][c] = "A"; // E22
	matrix[24][c] = "A"; // E23
	matrix[25][c] = "A"; // E24
	matrix[26][c] = "A"; // E25
	matrix[27][c] = "A"; // E26
	matrix[28][c] = "A"; // E27
	matrix[29][c] = "A"; // E28
	matrix[30][c] = "A"; // E29
	matrix[31][c] = "A"; // E30
	matrix[32][c] = "A"; // E31

	// group5
	matrix[33][c] = "N"; // E32
	matrix[34][c] = "N"; // E33
	matrix[35][c] = "N"; // E34
	matrix[36][c] = "N"; // E35
	matrix[37][c] = "N"; // E36
	matrix[38][c] = "N"; // E37
	matrix[39][c] = "N"; // E38
	matrix[40][c] = "N"; // E39
	matrix[41][c] = "N"; // E40
	matrix[42][c] = "N"; // E41
	matrix[43][c] = "N"; // E42
}

// group1
matrix[2][0] = "E1"; // E1
matrix[3][0] = "E2"; // E2
matrix[4][0] = "E3"; // E3
matrix[5][0] = "E4"; // E4
// group2
matrix[6][0] = "E5"; // E5
matrix[7][0] = "E6"; // E6
matrix[8][0] = "E7"; // E7
matrix[9][0] = "E8"; // E8
// group3
matrix[10][0] = "E9"; // E9
matrix[11][0] = "E10"; // E10
matrix[12][0] = "E11"; // E11
matrix[13][0] = "E12"; // E12
matrix[14][0] = "E13"; // E13
matrix[15][0] = "E14"; // E14
matrix[16][0] = "E15"; // E15
matrix[17][0] = "E16"; // E16
matrix[18][0] = "E17"; // E17
matrix[19][0] = "E18"; // E18
matrix[20][0] = "E19"; // E19
matrix[21][0] = "E20"; // E20
// group4
matrix[22][0] = "E21"; // E21
matrix[23][0] = "E22"; // E22
matrix[24][0] = "E23"; // E23
matrix[25][0] = "E24"; // E24
matrix[26][0] = "E25"; // E25
matrix[27][0] = "E26"; // E26
matrix[28][0] = "E27"; // E27
matrix[29][0] = "E28"; // E28
matrix[30][0] = "E29"; // E29
matrix[31][0] = "E30"; // E30
matrix[32][0] = "E31"; // E31
// group5
matrix[33][0] = "E32"; // E32
matrix[34][0] = "E33"; // E33
matrix[35][0] = "E34"; // E34
matrix[36][0] = "E35"; // E35
matrix[37][0] = "E36"; // E36
matrix[38][0] = "E37"; // E37
matrix[39][0] = "E38"; // E38
matrix[40][0] = "E39"; // E39
matrix[41][0] = "E40"; // E40
matrix[42][0] = "E41"; // E41
matrix[43][0] = "E42"; // E42

// ---------------- SUPPORT TABLES ----------------
const satSupport = {},
	sunSupport = {};
EMP_IDS.forEach((id) => {
	// console.log("the id is", id);
	satSupport[id] = [0, 0, 0, 0];
	sunSupport[id] = [0, 0, 0, 0];
});
// console.log(satSupport);
// console.log(sunSupport);

sunSupport["E32"] = [1, 0, 0, 1];
sunSupport["E33"] = [1, 0, 0, 1];
sunSupport["E34"] = [1, 0, 0, 1];
sunSupport["E35"] = [1, 0, 0, 1];
sunSupport["E36"] = [1, 0, 0, 1];
sunSupport["E37"] = [1, 0, 0, 1];
sunSupport["E38"] = [1, 0, 0, 1];
sunSupport["E39"] = [1, 0, 0, 1];
sunSupport["E40"] = [1, 0, 0, 1];
sunSupport["E41"] = [1, 0, 0, 1];
sunSupport["E42"] = [1, 0, 0, 1];

// now our above seed-table is all full ready:- (we will also dump this seed data into our database, and will start to load data from DB only)
// now write the algos for weekday_AFTERNOON_shift_Engine.js
function getRowById(id) {
	return EMP_IDS.indexOf(id) + EMP_START_ROW;
}

function getEmpbyId(empId) {
	for (const emp of empList) {
		// console.log("the emp is : ", empId, "and", emp.id, " and ", emp);
		// console.log("the emp is : ", empId, "and", emp.id);

		if (emp.id == empId) {
			// console.log("yes yes");
			return emp;
		}
	}
	return {
		id: "EX",
		name: "dummy",
		gender: "female",
		Location: "bkc",
		role: "SA1",
		wantCompoff: "yes",
		availableForNight: "yes",
		interestedForContinousCompoff: "yes",
		group: "G1",
	};
}

// scan the
function getEligibleEmployeesforShift(
	friCol,
	dayType = "weekday",
	EligibleFor = "M",
) {
	const shiftType = EligibleFor == "M" ? "N" : EligibleFor == "A" ? "M" : "A";
	const eligibleEmployees = [];
	if (dayType == "weekday") {
		for (let row = 2; row <= 43; row++) {
			const empId = `E${row - 1}`;
			const empDetails = getEmpbyId(empId);
			// console.log("the empDetails : ", empDetails);
			// checking for afternoon shift
			if (shiftType === "M") {
				if (matrix[row][friCol] === shiftType) {
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
			// checking for night shift
			else if (shiftType === "A") {
				if (
					matrix[row][friCol] === shiftType &&
					empDetails.availableForNight === "yes"
				) {
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
			// checking for morning shift
			else {
				if (
					matrix[row][friCol] === shiftType &&
					empDetails.availableForNight === "yes"
				) {
					console.log("the emplye is : ", empId, empDetails);
					eligibleEmployees.push(`E${row - 1}`);
				}
				if (
					matrix[row][friCol] === "A" &&
					empDetails.availableForNight === "no"
				) {
					console.log(empDetails);
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
		}
	} else if (dayType == "satMock") {
		// people who were in morning on frday and girls who were afternoon on friday
		for (let row = 2; row <= 43; row++) {
			const empId = `E${row - 1}`;
			const empDetails = getEmpbyId(empId);
			// console.log("the empDetails : ", empDetails);
			// checking for afternoon shift
			if (shiftType === "M") {
				if (matrix[row][friCol] === "M") {
					eligibleEmployees.push(`E${row - 1}`);
				} else if (
					matrix[row][friCol] === "A" &&
					empDetails.availableForNight === "no"
				) {
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
			// checking for night shift
			else if (shiftType === "A") {
				if (
					matrix[row][friCol] === "N" &&
					empDetails.availableForNight === "yes"
				) {
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
			// checking for morning shift
			else {
				if (
					matrix[row][friCol] === "M" &&
					matrix[row][friCol + 1] != "M" &&
				) {
					// console.log("the emplye is : ", empId, empDetails);
					eligibleEmployees.push(`E${row - 1}`);
				}
				if (
					matrix[row][friCol] === "A" &&
					empDetails.availableForNight === "no" &&
					matrix[row][friCol + 1] != "M"
				) {
					console.log(empDetails);
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
		}
	} else if (dayType == "sunOncall") {
        for (let row = 2; row <= 43; row++) {
			const empId = `E${row - 1}`;
			const empDetails = getEmpbyId(empId);
			// console.log("the empDetails : ", empDetails);
			// checking for afternoon shift
			if (shiftType === "M") {
				if (
					matrix[row][friCol] === "N" &&
					matrix[row][friCol + 1] != "N"
				) {
					// console.log("the emplye is : ", empId, empDetails);
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
			// checking for morning shift
			else {
				if (
					matrix[row][friCol] === "N" &&
					matrix[row][friCol + 1] != "N"
				) {
					// console.log("the emplye is : ", empId, empDetails);
					eligibleEmployees.push(`E${row - 1}`);
				}
			}
		}
	}

	return eligibleEmployees;
}

// getEmpbyId("E5");
//
const eligibleEmployeesForMorning = getEligibleEmployeesforShift(
	25,
	"weekday",
	"M",
);
const eligibleEmployeesForAfternoon = getEligibleEmployeesforShift(
	25,
	"weekday",
	"A",
);
const eligibleEmployeesForNight = getEligibleEmployeesforShift(
	25,
	"weekday",
	"N",
);
const eligibleEmployeesForSatMockMorning = getEligibleEmployeesforShift(
	25,
	"satMock",
	"M",
);
const eligibleEmployeesForSatMockAfterNoon;
const eligibleEmployeesForSatMockUCI;
const eligibleEmployeesForSundayMorning = getEligibleEmployeesforShift(
	25,
	"sunOncall",
	"M",
);
const eligibleEmployeesForSundayAfterNoon = getEligibleEmployeesforShift(
	25,
	"sunOncall",
	"A",
);

console.log("the eligibles Morning are : ", eligibleEmployeesForMorning);
console.log("the eligibles AfterNoon are : ", eligibleEmployeesForAfternoon);
console.log("the eligibles Night are : ", eligibleEmployeesForNight);

// now we are good for filtering out eligible persons as per requirement.
