// charactersticts of a employee, which affects the rota generation.:
// (male,female),(bkc,bcp),(lead1,lead2,lead3,ssa1,ssa2,sa1,sa2,new),(want-compoff yes or no),(available for night yes or no),(interested for one-day-compoff or want to compile his compoff atmax3 so he can avail them in continous in next or next-to-next week., )

// object and its attributes:- , here employee is one of the object of our rota-generation-system project.
employees=[
    {
        id:"E1",
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


// resource-management-rules:-
day=[
    {
        day:"weekday",
        type:"working",
        shift:"morning",
        resourceRequire:{
            total:11,
            lead:2, // l1+l2+*l3 or l1+1*l3 or l2+1*l3 or l1 or l2 (here 1* means atleast 1 and atmax any as per among the available ones)
            bkcbcp:1,1 or 2,0 or 0,2 or 1,0 or 0,1
            ssa:3, // 1ssa-1+2ssa-2+*ssa-3 or 3ssa-2+*ssa-3 or 2ssa-1+1ssa-2+*ssa-3
            bkcbcp:2,1 or 1,2
            sa:6, // 4sa-1+2sa-2+*sa-3 or 3sa-1+3sa-2+*sa-3 or 2sa-1+5sa-2+*sa-3 or 2sa-1+4sa-1+*sa-3
            bkcBcp:3,3 or 4,2 or 2,4 // notepoint: don't count 3s-role in bkc,bcp-contraint.

        }
    },
     {
        day:"weekday",
        type:"working",
        shift:"afternoon",
        resourceRequire:{
            total:12,
            lead:2, // l1+l2+*l3 or l1+1*l3 or l2+1*l3 or l1 or l2
            bkcbcp:1,1 or 2,0 or 0,2 or 1,0 or 0,1
            ssa:4, // 2ssa-1+2ssa-2+*ssa-3 or 1ssa-1+3ssa-2+*ssa-3 or 4ssa-2+*ssa-3
            bkcbcp:2,2 or 3,1 or 1,3
            sa:7, // 5sa-1+2sa-2+*sa-3 or 4sa-1+3sa-2+*sa-3 or 3sa-1+4sa-2+*sa-3 or 2sa-1+6sa-2+*sa-3 or 2sa-1+5sa-2+*sa-3 
            // start making from sa, then ssa and then lead, bcoz all first depends on sa, like ssa's absence depends on sa and lead's absence depends ssa
            bkcBcp:4,3 or 3,4 or 5,2 or 2,5

        }
    },
    {
        day:"weekday",
        type:"working",
        shift:"night",
        resourceRequire:{
            total:9,
            lead:2, // l1+l2+*l3 or l1+1*l3 or l2+1*l3 or l1 or l2
            bkcbcp:1,1 or 2,0 or 0,2 or 1,0 or 0,1
            ssa:2, // 1ssa-1+1ssa-2+*ssa-3 or 2ssa-2+*ssa-3 or 2ssa-1+*ssa-3
            bkcbcp:1,1 or 2,0 or 0,2
            sa:5, // 3sa-1+2sa-2+*sa-3 or 2sa-1+3sa-2+*sa-3
            bkcBcp:3,2 or 2,3 or 1,4
        }
    },
    // assigning rules,
    // first see eligible person for that particular shift, then pick up the top one.
    {
        day:"saturday",
        type:"mock",
        shift:"morning",
        resourceRequire:{
            total:8,
            lead:1, // l2+*l3 or l1+*l3 or l2 or l1 (if l3 is available in that group or eligible for satmock)
            bkcbcp:1,0 or 0,1 //(don't count l3 in bkc,bcp criteria)
            ssa:2, // ssa-1+ssa-2+*ssa-3 or 2ssa-2+*ssa-3 (here * means take all eligible ssa-3 in satmock to make them learn)
            bkcbcp:1,1 or 2,0 or 0,2 //(don't count ssa-3 for site-rule)
            sa:5, // 2sa-1+3sa-2+*sa-3 or 3sa-1+2sa-2+*sa-3
            bkcbcp:3,2 or 2,3 //(don't count sa-3 for site-rule)
        }
    },
    {
        day:"saturday",
        type:"mock",
        shift:"afternoon",
        resourceRequire:{
            total:9,
            lead:1, // l1 or l1+*l3 or l2 or l2+*l3 (if l3 is available in that group or eligible for satmock)
            ssa:3, // ssa-1+2ssa-2+*ssa-3 or 2ssa-1+1ssa-2+*ssa-3 or 3ssa-2+*ssa-3 (here * means take all eligible ssa-3 in satmock to make them learn)
            sa:5, // 2sa-1+3sa-2+*sa-3 or 3sa-1+2sa-2+*sa-3
            bkcBcp:+-2
        }
    },
      {
        day:"saturday",
        type:"mock",
        shift:"night",
        resourceRequire:{
            total:9,
            lead:0,
            ssa:0,
            sa:1, // 1sa-2+1sa-3 or 1sa-1+1sa-3
            bkcBcp:+-1
        }

    },
    {
        day:"sunday",
        type:"onCall",
        shift:"morning",
        resourceRequire:{
            total:4,
            lead:1, // l2+1l3 or l2 or l1+1l3 or l1
            ssa:1, // ssa-2+1ssa-3 or ssa-1+1ssa-3
            sa:2, // 1sa-1+1sa-2+1sa-3 or 2sa-2+1sa-3 or 2sa-1+1sa-3
            bkcBcp:+-2
        }

    },
      {
        day:"sunday",
        type:"free",
        shift:"night",
        resourceRequire:{
            total:9,
            lead:2, // l1+l2+*l3 or l1+1*l3 or l2+1*l3 or l1 or l2
            ssa:2, // 1ssa-1+1ssa-2+*ssa-3 or 2ssa-2+*ssa-3 or 2ssa-1+*ssa-3
            sa:5, // 3sa-1+2sa-2+*sa-3 or 2sa-1+3sa-2+*sa-3
            bkcBcp:+-2
        }
    },
]

// sarvesh (male,bkc,lead1,want-compoff-yes,available-for-night-yes,interested-for-continous-compoff)
// rahul  (male,bkc,lead2,want-compoff-yes,available-for-night-yes,interested-for-one-day-compoff)
// abhishek-gautam
// harsh fatnani
// prabhakar
// shailender-kumar
// praveen-vikraman
// balachander-ganesan

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








