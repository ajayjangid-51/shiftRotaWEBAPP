// charactersticts of a employee, which affects the rota generation.:
// (male,female),(bkc,bcp),(lead1,lead2,lead3,ssa1,ssa2,sa1,sa2,new),(want-compoff yes or no),(available for night yes or no),(interested for one-day-compoff or want to compile his compoff atmax3 so he can avail them in continous in next or next-to-next week., )

// object and its attributes:- , here employee is one of the object of our rota-generation-system project.
employees=[
    {
        name:"sarvesh",
        gender:"male",
        Location:"bkc",
        role:"Lead1",
        wantCompoff:"yes",
        availableForNight:"yes",
        interestedForContinousCompoff:"yes",
        group:"G1"       
    },{},{},{},{}
]

day=[
    {
        name:"weekday",
        subCategory:"working",
        shift:"morning",
        minLeadCount:2,
        minResourceCount:9,


    },
     {
        name:"weekday",
        subCategory:"working",
        shift:"afternoon",
        minLeadCount:2,
        minResourceCount:10,

    },
     {
        name:"weekday",
        subCategory:"working",
        shift:"night",
        minLeadCount:2,
        minResourceCount:8,

    },
     {
        name:"weekend",
        subCategory:"mock",
        shift:"morning",
        minLeadCount:1,
        minResourceCount:7,

    },
  {
        name:"weekend",
        subCategory:"mock",
        shift:"afternoon",
        minLeadCount:1,
        minResourceCount:8,

    },
      {
        name:"weekend",
        subCategory:"mock",
        shift:"night",
        minLeadCount:0,
        minResourceCount:1,

    },
  {
        name:"weekend",
        subCategory:"sunday",
        shift:"morning",
        minResourceCount:7,

    },
      {
        name:"holiday",
        subCategory:"SpecailActivity",
        shift:"morning",
        minLeadCount:0,
        minResourceCount:1,

    },
      {
        name:"holiday",
        subCategory:"NoActivity",
        shift:"morning",
        minLeadCount:0,
        minResourceCount:1,

    },
]

sarvesh (male,bkc,lead1,want-compoff-yes,available-for-night-yes,interested-for-continous-compoff)
rahul  (male,bkc,lead2,want-compoff-yes,available-for-night-yes,interested-for-one-day-compoff)
abhishek-gautam
harsh fatnani
prabhakar
shailender-kumar
praveen-vikraman
balachander-ganesan

// 
// 
// 
// 
// rules for shift:-
// 1. morning shift should have atleast 9 people but with proper resource-level-score, and the extra one can be given compoff as per the want-compoff attribute of the employee.
// 2. afternoon shift should have atleast 10 people
// 3. night shift should have atleast 8 people with atleast 2 lead(lead1,lead2)

// group4:(girl-gang)
// group1:
sarvesh - L1
prabhakar - L2
balachander - L3
santosh - SSA-1
shubham-kadam - SSA-2
ajay-jangid - SA-1
srikant - SA-1
mankala - SA-1
sudarshan - SA-1
chirag - SA-1
sushant - SA-2
abhishek-mehta - SA-2

// night meh comp-off or leave dene ki kya dependency-conditions hai group1 ki we will write those.
// below are conditions for every-indidividual employee of group1 to get compoff or leave in the night-shift
if ( prabhakar and sarvesh present ) then can give compoff to balachander
// 
if (sarvesh & balachander present ) then can give compoff to prabhakar
if (prabhakar, balachander, santosh, shubham-kadam present) then can give compoff to sarvesh
// at ssa level
if shubham-kadam and ajay-jangid are present then can give compoff to santosh
if santosh and ajay-jangid are present + minimum-requirement-fullfilled then can give compoff of shubham-kadam
// at sa level
if santosh & shubham-kadam are present then can give compoff to ajay-jangid
srikant,mankala,sudarshan, chirag, sushant, abhishek-mehta can get leave or compoff if minimum requirement as per shift are fullfilling


// every-shift should contains resources like this:-
L1,L2,L3,SSA-1,SSA-2,SSA-3,SA-1,SA-2,SA-3 (multiple of these will be be fine) | *-3 means new, *-2 means good, *-1 means strong
// 
L1 == L2+L3+SSA-1 or L2+SSA-1+SSA-2 
L2 == L1+L3 or L1+SSA-1+SSA-2
SSA-1 == SSA-2+SSA-3+SA-1 or SSA-2+2-SA-1    (this means SSA-1 can get leave or comp-off if L2 is present or one SSA-2 and one SA-1 is present)
SSA-2 = SSA1+SSA-3 or SSA-1+SA-1
SA-1 == 2SA-1
SA-2 == 1SA-2 or 1SA-1

L3,SSA-3,SA-3 are not obliqued to get compoff or leave. 
L3 = SSA-3+SA-3
now SSA-3 and SA-3 depends upon each-other, only one will get off and other should present.

// in addition to above conditions, below conditions should also be fullfilled
// bkc,bcp wala constraint should also be considered, +-2 will be ok, i.e count of BKC-Count of BCP = +-2 will be ok or acceptable.
// group is pre-made in a such a way only that bkc,bcp,stronger are all first maintained. likve in above L1,L2 are taken alternatively one might be from bkc and other will from bcp.
//  minimum people criteria should also be fullfilled



// group2:
shailender - L1
rahul - L2
harsh-fatnani - L3
sachin - SSA-1
somesh - SSA-1
gaurav-shinde - SSA-2
gaurav-rathva - SA-1
vivek-pal - SA-1
krishna-reddy - SA-1
amarnath - SA2
praneeth - SA2
kavin - SA2


// group3:
praveen - L1
abhishek, - L2
aniket - SSA-1
akshay - SSA-2
mohan-bhor - SA-1
pratik - SA-1
anshul - SA-2
arasan - SA-2
sushant - SA-2
aravinth - SA-2
ajay-v - SA-2



// group4:-
gita - SSA-2
janhavi - SA-1
christina - SA-2
savitha - SSA-2


// group5:
vikas - SSA-1
prajakta - SSA-2
vaishali - SA-1
arushina - SA-2








