 // let student = [
        //     {
        //         name: 'Adesare Adegbagbi',
        //         matric: 'MST33/32392',
        //     },
        //     [100, 23, 54, 49, 94,]
        // ]

        
         
           function calculateEquivalentGrades() {
            event.preventDefault()

            const subject1Score = parseFloat(document.getElementById('subject1').value) || 0;
            const subject2Score = parseFloat(document.getElementById('subject2').value) || 0;
            const subject3Score = parseFloat(document.getElementById('subject3').value) || 0;
            const subject4Score = parseFloat(document.getElementById('subject4').value) || 0;
            const subject5Score = parseFloat(document.getElementById('subject5').value) || 0;



            let numEmpty1 = document.querySelector(".moreNum1");
            let numEmpty2 = document.querySelector(".moreNum2");
            let numEmpty3 = document.querySelector(".moreNum3");
            let numEmpty4 = document.querySelector(".moreNum4");
            let numEmpty5 = document.querySelector(".moreNum5");



               if (subject1Score == "") {
                numEmpty1.textContent = "Subject 1 can not be empty";
               }

               else if (subject1Score > 100) {
                numEmpty1.textContent = "Input greater than 100";

               } else {
                 numEmpty1.textContent = "";
               }



               function subSection2(){
                 if (subject2Score == "") {
                   numEmpty2.textContent = "Subject 2 can not be empty";
                 } 
                 else if (subject2Score > 100) {
                numEmpty2.textContent = "Input greater than 100";
                   
                 } else {
                   numEmpty2.textContent = "";
                 }
               }
               subSection2();


               function subSection3(){
                 if (subject3Score == "") {
                   numEmpty3.textContent = "Subject 3 can not be empty";
                 } 
                 else if (subject3Score > 100) {
                   numEmpty3.textContent = "Input greater than 100";
                 } 
                 else {
                   numEmpty3.textContent = "";
                 }
               }
               subSection3();

               
               
               function subSection4(){
                 if (subject4Score == "") {
                   numEmpty4.textContent = "Subject 4 can not be empty";
                 } 
                 else if (subject4Score > 100) {
                   numEmpty4.textContent = "Input greater than 100";
                 } 
                 else {
                   numEmpty4.textContent = "";
                 }
               }
               subSection4();
           
               
               
               function subSection5(){
                 if (subject5Score == "") {
                  numEmpty5.textContent = "Subject 5 can not be empty";
               }
                else if (subject5Score > 100) {
                numEmpty5.textContent = "Input greater than 100";
                   
                 } else {
                   numEmpty5.textContent = "";
                 }
            }
               subSection5();
           

            

            // Calculate the total score
            const totalScore = subject1Score + subject2Score + subject3Score + subject4Score + subject5Score;

            // Display the total score
            document.getElementById('totalScore').textContent = totalScore;

            // Calculate and display equivalent grades for each subject
            displayEquivalentGrade('subject1Grade', subject1Score);
            displayEquivalentGrade('subject2Grade', subject2Score);
            displayEquivalentGrade('subject3Grade', subject3Score);
            displayEquivalentGrade('subject4Grade', subject4Score);
            displayEquivalentGrade('subject5Grade', subject5Score);
        }

        function displayEquivalentGrade(elementId, score) {
            let numGreater = document.querySelector(".moreNum")
            // let numGreaterTwo = document.querySelector("#moreNumTwo")
            
             
            
            let grade = '';
             

            if (score >= 0 && score <= 39) {
                grade = 'F9';
            } 
                  
                   else if (score >= 40 && score <= 44) {
                     grade = "E8";
                   } else if (score >= 45 && score <= 49) {
                     grade = "D7";
                   } else if (score >= 50 && score <= 54) {
                     grade = "C6";
                   } else if (score >= 55 && score <= 59) {
                     grade = "C5";
                   } else if (score >= 60 && score <= 64) {
                     grade = "C4";
                   } else if (score >= 65 && score <= 69) {
                     grade = "B3";
                   } else if (score >= 70 && score <= 74) {
                     grade = "B2";
                   } else if (score >= 75 && score <= 100) {
                     grade = "A";
                   }
         
            document.getElementById(elementId).textContent = grade;
        }