// saturday-support-table
// ID	Total	M	A	N
ID	T M	A N
E1
E2 1 1 0 0
E3
E4
// group2
E5
E6
E7
E8
// group3
E9
E10 1 1 0 0
E11 1 1 0 0
E12 
E13 1 1 0 0
E14
E15
E16
E17
E18
E19
E20
// group4
E21
E22
E23
E24
E25
E26
E27
E28
E29
E30
E31
E32
// group5
E33
E34
E35
E36
E37
E38
E39
E40
E41
E41
E41
// sunday-support-table
ID	Total	M	A	N
E1
E2
E3
E4
//
E5
E6
E7
E8
//
E9
E10
E11
E12
E13
E14
E15
E16
E17
E18
E19
E20
//
E21
E22
E23
E24
E25
E26
E27
E28
E29
E30
E31
E32
//
E33 1 0 0 1
E34 1 0 0 1
E35 1 0 0 1
E36 1 0 0 1
E37 1 0 0 1
E38 1 0 0 1
E39 1 0 0 1
E40 1 0 0 1
E41 1 0 0 1
E41 1 0 0 1
E41 1 0 0 1
// pending-comp-off-queue:-
ID	Count	SupportedDates	Given
E1
E2
E3
E4
//
E5
E6
E7
E8
//
E9
E10
E11
E12
E13
E14
E15
E16
E17
E18
E19
E20
//
E21
E22
E23
E24
E25
E26
E27
E28
E29
E30
E31
E32
//
E33
E34
E35
E36
E37
E38
E39
E40
E41
E41
E41

// 
// create a combinations as per the rule of resoure-type, and then see the eligible persons as per bkc,bcp rule and among then pick up by the shift-type-count from suppor-table.
// if shift-count difference is 3 or more then need to jump over next bkcbcp rule.

// first pick grils(i.e from group1 or group2) for saturday-mock, bcoz they do not support for night.
// current we have 4 morning girsl and 4 afternoon girls, so pick fix 3 girls simply.
// and pick boys and then see the bkc,bcp rule.


// input as a->output as b
// first create the eligible-list by passing the all actual-eligible as per previous-shift.

// now pass "b" as input and get all the possible lists for that day as per the all rules including bkc,bcp
// output as c

// now after that pass input "c" to fn3 to verify with the support-table to get the most-eligible one list of employees, who will actually support that day.
// output as d

// now pass "d" as input to fn4, which will update the comp-off-needed list accordingly who wants compoff.

// now after that we can start to give compoff as per compoff rules from monday to thrusday.


so the input is : 
list of employees's object:
input = [
    {
        id:"E9",
        name:"sarvesh",
        gender:"male",
        Location:"bkc",
        role:"LEAD1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
        {
        id:"E10",
        name:"prabhakr",
        gender:"male",
        Location:"bcp",
        role:"LEAD2",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
        {
        id:"E11",
        name:"balachander",
        gender:"male",
        Location:"bcp",
        role:"LEAD3",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
        {
        id:"E12",
        name:"santosh",
        gender:"male",
        Location:"bkc",
        role:"SSA1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
        {
        id:"E1",
        name:"gita",
        gender:"female",
        Location:"bkc",
        role:"SSA2",
        wantCompoff:"no",
        availableForNight:"no",
        interestedForContinousCompoff:"no",
        group:"G1"       
    },
    {
        id:"E13",
        name:"shubhamKadam",
        gender:"male",
        Location:"bkc",
        role:"SSA2",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
      {
        id:"E3",
        name:"janhvi",
        gender:"female",
        Location:"bkc",
        role:"SA1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G1"       
    },
      {
        id:"E14",
        name:"ajayjangid",
        gender:"male",
        Location:"bkc",
        role:"SA1",
        wantCompoff:"no",
        availableForNight:"yes",
        interestedForContinousCompoff:"no",
        group:"G3"       
    },
      {
        id:"E4",
        name:"christina",
        gender:"female",
        Location:"bkc",
        role:"SA2",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G1"       
    },
      {
        id:"E19",
        name:"abhishekMehta",
        gender:"male",
        Location:"bkc",
        role:"SA2",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
      {
        id:"E2",
        name:"savitha",
        gender:"female",
        Location:"bcp",
        role:"SSA2",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G1"       
    },
      {
        id:"E15",
        name:"srikant",
        gender:"male",
        Location:"bcp",
        role:"SA1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
      {
        id:"E16",
        name:"mankala",
        gender:"male",
        Location:"bcp",
        role:"SA1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
      {
        id:"E17",
        name:"sudarshan",
        gender:"male",
        Location:"bcp",
        role:"SA1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
      {
        id:"E18",
        name:"chirag",
        gender:"male",
        Location:"bcp",
        role:"SA1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G3"       
    },
] 
// and rules are :

rules:{
    // rule to chooose lead
   lead:{
    // try to match any one combo, but start from index-0, bcoz that on hight priority,
    // notepoint : here 1-LEAD2+*-LEAD3 means that one lead1 and any no. of of LEAD3 from but start from considering all.
    //  the analogy of X-ROLETYPE+*-ROLETYPE means X people of ROLETYPE are required and any number of X peopel of ROLETYPE are required but try to take all first if possible then going to zero if no one is available
    combinations: [1-LEAD2+1*-LEAD3 or 1-LEAD1+1*-LEAD3 or 1-LEAD2 or 1-LEAD1],
    // here location (x,y) means the people choosen frothat x from bkc and y from bcp are required.
    locationOptions:[(1,1) or (0,1) or (1,0)]
   },
//    rule to choose ssa
ssa:{
     combinations: [1-SSA1+1-SSA2+*-SSA3 or 2-SSA2+*-SSA3 or 2-SSA1+*-SSA3],
    // here location (x,y) means the people choosen frothat x from bkc and y from bcp are required.
    locationOptions:[(1,1) or (2,0) or (0,2)]

},
//    rule to choose sa
   sa:{
     combinations: [2-SA1+3-SA2+*-SA3 or 3-SA1+2-SA2+*-SA3],
    locationOptions:[(3,2) or (2,3)]

   }
}

// output :
// give me all possible lists


