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
// what the combinations we get
// whatever the count of eligible-employees we have, pick up the employees with least count or say in order from less to hight count like for-example:
// [E1(0),E2(0),E3(1),E4(1),E5(1),E6(2),E7(2),E8(2),E9(3),E10(4).... so on...] so pickup the prefix-array-part whichever is matching with among the combinations.



// also notepoint is that: the count of L1,L2,L3, S1,S2,S3 etc all on bkc,bcp should be almost same i.e +-2 atmax is ok only.
// so grouping ache se banani hogi.



