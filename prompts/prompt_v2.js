this is my logic for shift assignment repeatedly from saturday to next friday, and it also include the logic of giving comp-off: , so first you give me re-fine mode of this below logic in proper format and correction.

so initially you take this as a intial hardcoded input data for the matrix, and the further matrix will be filled by reference from this only : 

// below point1 to 3 are prequisite data structures to be created before shift assignment logic as per point4.
point1:
initial data : 
			for (let c = 2; c <= 7; c++) {
				matrix[2][c] = "A";
				matrix[3][c] = "A";
				matrix[4][c] = "N";
				matrix[5][c] = "N";
				matrix[6][c] = "M";
				matrix[7][c] = "M";
				matrix[8][c] = "M";
				matrix[9][c] = "A";
			}
point2:
create a two tables, 
1st: support-table-for-saturday
the format will be like this : 
// L1 (T,M,A,N)
L1 (0,0,0,0)
L2 (0,0,0,0)
L3 (0,0,0,0)
.
.
L8 (0,0,0,0)
note: here T = total count of M , A and N shifts for the saturday till yet

2nd: support-table for sunday 
the format will be like this : 
L1 (0,0,0,0)
L2 (0,0,0,0)
L3 (0,0,0,0)
.
.
L8 (T,M,A,N)
note: here T = total count of M,A and N shifts for the people who have supported on sunday till yet.

point3:
also create a pending-comp-off list for the people who have supported on saturday and sunday but have not yet availed their comp-off.
the format will be like this:
L1,cnt,list_of_supported_days_with_dates,given_comp-off_or_not
note: here cnt = total count of days supported by that L1 till yet, list_of_supported_days_with_dates = list of dates on which that L1 has supported in the format dd-mm-yyyy separated by semicolon, given_comp-off_or_not = True or False indicating whether comp-off is given or not.
so note that whenever a person supports on saturday or sunday his name will be added to this pending-comp-off list with cnt = 1 and the date on which he supported, and when he supports again on next saturday or sunday his cnt will be incremented by 1 and the new date will be added to his list_of_supported_days_with_dates separated by semicolon. but also note that current cnt is already = 3 then insert the new record with cnt = 1 and new date in the list_of_supported_days_with_dates and so on.
also note that this pending-comp-off list will be used to give comp-off to the people, so the first priority will be given to first entry in the list



point4: shift-assigning-logic
now we will talk about shift assignment logic:
a) first we will fill the matrix with initial data as per point1.
b) then we will start filling the matrix from day 8th onwards that means saturday of 07feb2026.
c) so to assign a people for M on saturday we will see the people who were in M-shift on its last day(that means the just before friday), so the people who were in moring-shift(i.e "M") will only support for the saturday-morning, so now check the support-table-for-saturday and see which person has least total count of shifts assigned till yet, and assign that person to M shift on that saturday and also check if total count is getting tie for multiple people then check the count of M, whoever has least count assign him that as "M" for saturday(i.e assignment-day) and again if there is tie between multiple person then choose the person with least id(like L1 is smaller than L2 , L2 is smaller than L3 , and simiarly L10 is smaller than L11) . and also note that after assignation also update them in pending-comp-off list as per point3.

d) now for assigning A shift on saturday we will see the people who were in A-shift on its last day(that means the just before friday), so the people who were in afternoon-shift(i.e "A") will only support for the saturday-afternoon, so now check the support-table-for-saturday and see which person has least total count of shifts assigned till yet, and assign that person to A shift on that saturday and also check if total count is getting tie for multiple people then check the count of A, whoever has least count assign him that as "A" for saturday(i.e assignment-day) and again if there is tie between multiple person then choose the person with least id(like L1 is smaller than L2 , L2 is smaller than L3 , and simiarly L10 is smaller than L11) also note that after assignation also update them in pending-comp-off list as per point3.

e)after assigning 1 M and 1 A shifts on saturday, assign everybody else as "WO" for saturday.

f)now after saturday we will move to assign shift for  sunday of 08feb2026 and next monday to friday. after that we will re-follow the same logic for next saturday and sunday with monday-friday and so on.

so now for this sunday we want only person for M shift on sunday, so the people who were in "A"-shift on last friday and has "WO" on saturday among them we need to pick one for "M"-shift on sunday and so assign him "M" from sunday to next friday (i.e for next 6 days),  so to pick up that one now check the support-table-for-sunday and see which person has least total count of shifts assigned till yet, and assign that person to M shift on that sunday and also check if total count is getting tie for multiple people then check the count of M, whoever has least count assign him that as "M" for sunday(i.e assignment-day) and again if there is tie between multiple person then choose the person with least id(like L1 is smaller than L2 , L2 is smaller than L3 , and simiarly L10 is smaller than L11) . and also note that after assignation also update them in pending-comp-off list as per point3.

so the people who were in M-shift on last friday and had a "WO" on saturday will be assigned as "N"-shift on sunday to upcoming friday (i.e for next 6 days), also update the support of the employee in pending-comp-off list as per point3. but keep note that we only want 2 person for N-shift, so if more than 2 people are eligible for N-shift on sunday then pick only 2 people who has least total count of shifts assigned till yet by looking into the support-table-for-sunday, and if tie occurs then check the count of N-shift assigned till yet, and if again tie occurs then choose the person with least id(like L1 is smaller than L2 , L2 is smaller than L3 , and simiarly L10 is smaller than L11) .




now people who were is "N"-shift on last friday , give them "WO" on sunday and assign them "A"-shift from upcoming monday to friday (i.e for next 5 days).

now people who were in "M"-shift on last friday and has "M" on saturday, assign them "WO" on sunday as well and assign them "A"-shift from upcoming monday to friday (i.e for next 5 days).




g) now we will move to next week and repeat the same process from point b) to f) till the end of matrix.

point5:- comp-off giving logic:
1.we can give comp-off only for M and A shifts, and at max we can give 3 continous comp-off days as per the balance in pending-comp-off list, also keep note that is someday is marked holiday like "AHO" or "MHO" then that day will not be counted in continous comp-off days.
2.so to give comp-off see the pending-comp-off list and pick up the top two entry from pending-comp-off list, one who is currently in "A" shift and other one who is "M" shift on monday, so now simply give continous comp-off as "CWO" to them as per the count-value and also marked as true, so this elements in comp-off will not be considered again. 