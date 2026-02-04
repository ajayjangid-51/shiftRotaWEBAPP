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