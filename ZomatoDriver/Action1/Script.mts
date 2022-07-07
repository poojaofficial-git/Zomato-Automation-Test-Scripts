 @@ script infofile_;_ZIP::ssf294.xml_;_
 @@ script infofile_;_ZIP::ssf351.xml_;_
 @@ script infofile_;_ZIP::ssf352.xml_;_
 @@ script infofile_;_ZIP::ssf330.xml_;_
'----------Object Repositories Function Call -------------
'ObjR1()
'ObjR2()
'ObjR3() @@ script infofile_;_ZIP::ssf278.xml_;_
'ObjR4() @@ script infofile_;_ZIP::ssf263.xml_;_
'ObjR5()
'ObjR6() @@ script infofile_;_ZIP::ssf299.xml_;_
'ObjR7() @@ script infofile_;_ZIP::ssf313.xml_;_
'ObjR8() @@ script infofile_;_ZIP::ssf252.xml_;_
'ObjR9() @@ script infofile_;_ZIP::ssf259.xml_;_
'ObjR10() @@ script infofile_;_ZIP::ssf340.xml_;_
 @@ script infofile_;_ZIP::ssf341.xml_;_
 @@ script infofile_;_ZIP::ssf236.xml_;_
'------------------Descriptive Programming Function Call------------------- @@ script infofile_;_ZIP::ssf161.xml_;_
 
'restNearMe() @@ script infofile_;_ZIP::ssf248.xml_;_
'cafeNearMe()
'loungeNearMe()
'claimRestaurant()
'registerHelpOption()
'beveragesNearMe()
'appsForYou() @@ script infofile_;_ZIP::ssf156.xml_;_
'orderOnlineSandwich()
'casualDiningNearMe() @@ script infofile_;_ZIP::ssf167.xml_;_
'zomatoAppDeviceCheck() @@ script infofile_;_ZIP::ssf201.xml_;_


DataTable.AddSheet "Test Data"
DataTable.ImportSheet "C:\Users\user241\Documents\zomato\Test Data\Test Data.xlsx","Zomato Data","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Flag","Test Data")="Y" Then

executeTest (DataTable.Value("TestCaseID","Test Data"))
On Error Resume Next
DataTable.Value("Result","Test Data") = Environment.Value("Result")


End If

Next

DataTable.ExportSheet "C:\Users\user241\Documents\zomato\Test Data\Test Data.xlsx","Test Data","Zomato Data"
