
/*
	This file stores the compiler/interpretor details that are provided to DockerSandbox.sh	by the app.js
	The index is the key field, 
	First column contains the compiler/interpretor that will be used for translation
	Second column is the file name to use when storing the source code
	Third column is optional, it contains the command to invoke the compiled program, it is used only for compilers
	Fourth column is just the language name for display on console, for verbose error messages
	Fifth column is optional, it contains additional arguments/flags for compilers

	You can add more languages to this API by simply adding another row in this file along with installing it in your
	Docker VM.

	Author: Osman Ali 
	Date: 3 - JUN - 2014
	*Revised on: 30th June 2014 (Added Column number 4 to display the name of languages to console)
*/

exports.compilerInfo = [
	{
		langID: 0, 
		language: 'Java',
		compiler: '"javac -cp /usr/share/java/junit.jar:."', 
		compileTarget: '*.java', 
		runTarget: '"java -cp /usercode/:/usr/share/java/junit.jar Main"',
		runtimeArgs: ''
	},
	{
		langID: 1,
		language: 'Python',
		compiler: 'python',
		compileTarget: 'file.py',
		runTarget: '',
		runtimeArgs: ''
	}
];



/*			 ["ruby","file.rb","","Ruby",""],
			 ["clojure","file.clj","","Clojure",""],
			 ["php","file.php","","Php",""],
			 ["nodejs","file.js","","Nodejs",""],
			 ["scala","file.scala","","Scala",""],
			 ["\'go run\'","file.go","","Go",""],
			 ["\'g++ -o /usercode/a.out\' ","file.cpp","/usercode/a.out","C/C++",""],
			 
			 ["\'vbnc -nologo -quiet\'","file.vb","\'mono /usercode/file.exe\'","VB.Net",""],
			 ["gmcs","file.cs","\'mono /usercode/file.exe\'","C#",""],
			 ["/bin/bash","file.sh"," ","Bash",""],
			 ["gcc ","file.m"," /usercode/a.out","Objective-C","\' -o /usercode/a.out -I/usr/include/GNUstep -L/usr/lib/GNUstep -lobjc -lgnustep-base -Wall -fconstant-string-class=NSConstantString\'"],
			 ["/usercode/sql_runner.sh","file.sql","","MYSQL",""],
			 ["perl","file.pl","","Perl",""]*/

