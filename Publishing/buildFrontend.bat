cd .\Frontend
call ng build
xcopy /s .\dist ..\Backend\Backend\wwwroot /y
