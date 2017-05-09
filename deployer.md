**Modifiche effettuate, vogliamo deployarle (in locale)**

-	Eliminare ndFormBuilder/dist
-	Lanciare la build di ngFormBuilder (cmd gulp) posizionandosi dentro la cartella di ngFormBuilder
-	**E' stata creata la nuova ngFormBuilder/dist**
-	Eliminare il contenuto della seguente cartella: 
~~~~
D:\OneDrive\OneDrive - ICONSULTING S.p.A\Progetti\HSD - Gestionale\Progetti FormIO\formio-app-formio\bower_components\ng-formio-builder
~~~~
-	Copiare tutti i file e le cartelle (**tranne bower_components e node_modeules**) da ngFormBuilder a :
~~~~
......\formio-app-formio\bower_components\ng-formio-builder
~~~~
-	Eliminare la seguente catella:
~~~~
......\formio-app-formio\dist
~~~~
-	Lanciare il comando per fare la build di **formio-app-formio** (cmd gulp) posizionandosi in **....../formio-app-formio**
-	Cancellare il contenuto della cartella **client** in **.....\hsd-form-io**

- Copiare il contenuto della cartella **formio-app-formio** (tranne *bower_components* e *node_modules*) in **...../hsd-form-io/client**.
-	Stoppare il server **Node.js**
-	Lanciare il comando **cmd node main** posizionandosi in **...../hsd-form-io**