# nodejs-challenge
## Code Name RED

Herzlichen Glückwunsch, Du erhältst heute unsere Coding Challenge! Weiter unten findest Du die Aufgaben-Stellung.
Alles, was Du (neben NodeJS) brauchst, findest du in diesem Paket.

### Kriterien
1. Es werden nur Lösungen gewertet die mit NodeJS/TypeScript programmiert wurden. 
2. Externe npm module sind nur zur Entwicklung (= devDependencies) gestattet.
3. Zeitansatz max. 4 Stunden
4. Abgabe der Lösung erfolgt als Repository (github oder bitbucket). Achtung! Bitte das Repository aus der Aufgabe klonen, nicht forken, 
damit die Bedingungen für alle Bewerber gleich bleiben.

### Aufgabe

Gegeben ist eine geheime Datei (-> `secret.enc`), deren Inhalt uns brennend interessiert.
1. Entschlüssele die Datei. Der Verschlüsselungs-Algorithmus ist AES256-GCM. Alle Dateien, die du hierfür benötigst, findest du im Paket.
2. Sag uns wie die Summe aller vorkommenden Ziffern lautet.
   Beispiel:
   ```
   Text: "D1es 1st 31n Te4t."
   Summe der Ziffern: 1+1+3+1+4 = 10 
   ```
3. Zähle zu der gefundenen Summe alle vorkommenden Vokale mit folgender Wertigkeit hinzu:  
    a = 2  
    e = 4  
    i = 8  
    o = 16  
    u = 32
4. Berechne die Summe der Ziffern (vgl. 2.) pro Satz (Satz-Trennzeichen wie im deutschen Sprachgebrauch).      
    
    a) Sortiere die 10 größten Werte in der Reihenfolge ihres Vorkommens im Text in ein Array aus und subtrahiere von jedem Wert dessen
     Index im Array.
    Beispiel: 
    ```
    gefundene Summen: [4, 8, 1, 5, 2, 7, 9]
    größte 3 Werte: [9, 8, 7]
    größte 3 Werte in der Reihenfolge ihres Vorkommens: [8, 7, 9]
    größte 3 Werte in der Reihenfolge ihres Vorkommens abzüglich Index: [8, 6, 7]
    ```
    
    b) Untersuche die Ergebnisse der 10 Werte anhand einer ASCII Tabelle...kommt da etwa ein Lösungswort heraus?
    
    c) Das Lösungswort soll von einem node http server als Antwort zurückgegeben werden.
