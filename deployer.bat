:: REMOVE BUILDER DIST
cd D:\FormIO\ngFormBuilder
set folder="D:\FormIO\ngFormBuilder\dist"
rd /s /q %folder%
::mkdir %folder%
:: GULP
call gulp
call git add .
call git commit -a -m "commit prova"
call git push
:: REMOVE BUILDER DIST
::FormIO\formio-app-formio\bower_components\ng-formio-builder
cd D:\FormIO\formio-app-formio
rd /s /q D:\FormIO\formio-app-formio\bower_components\ng-formio-builder
call bower cache clean
call bower install ng-formio-builder=https://github.com/aialenti/ngFormBuilder.git#master
::	mkdir D:\FormIO\formio-app-formio\bower_components\ng-formio-builder
::Copiare tutti i file e le cartelle (tranne bower_components e node_modeules) da ngFormBuilder a app-formio
::	ROBOCOPY D:\FormIO\ngFormBuilder D:\FormIO\formio-app-formio\bower_components\ng-formio-builder /E /xd D:\FormIO\ngFormBuilder\bower_components /xd D:\FormIO\ngFormBuilder\node_modules
:: GULP
call gulp
call git add .
call git commit -a -m "commit prova"
call git push

cd D:\FormIO\hsd-form-io
rd /s /q D:\FormIO\hsd-form-io\client
::	mkdir D:\FormIO\hsd-form-io\client
::Copiare tutti i file e le cartelle (tranne bower_components e node_modeules) da app-formio a formio\client
::	ROBOCOPY D:\FormIO\formio-app-formio D:\FormIO\hsd-form-io\client /E /xd D:\FormIO\formio-app-formio\bower_components /xd D:\FormIO\formio-app-formio\node_modules
taskkill /im node.exe
call node main