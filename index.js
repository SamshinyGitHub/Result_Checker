 // let student = [
        //     {
        //         name: 'Adesare Adegbagbi',
        //         matric: 'MST33/32392',
        //     },
        //     [100, 23, 54, 49, 94,]
        // ]

        
            //Get the input valus for each subject
            // const subject1Score = parseFloat(document.getElementById('subject1').value) ;
            // console.log(subject1Score)

            // if(isNaN(subject1Score)){
            //     return alert('Score cannot be empty')
            // }
            //     if(subject1Score > 100){
            //     return alert("Please enter values between 0 - 100")
                
            // }





            

           function calculateEquivalentGrades() {
            event.preventDefault()

            const subject1Score = parseFloat(document.getElementById('subject1').value) || 0;
            const subject2Score = parseFloat(document.getElementById('subject2').value) || 0;
            const subject3Score = parseFloat(document.getElementById('subject3').value) || 0;
            const subject4Score = parseFloat(document.getElementById('subject4').value) || 0;
            const subject5Score = parseFloat(document.getElementById('subject5').value) || 0;

               if (subject1Score == "") {
                 alert("empty input 1");
               }

               function subSection2(){
                 if (subject2Score == "") {
                alert("empty input 2");
               
               }
               }
               subSection2();

               function subSection3(){
                 if (subject3Score == "") {
                  alert("empty input 3");
               
               }
               }
               subSection3();

               function subSection4(){
                 if (subject4Score == "") {
                 alert("empty input 4");
               
               }
               }
               subSection4();
           
               function subSection5(){
                 if (subject4Score == "") {
                  alert("empty input 5");
               
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
                   if (score > 100) {
                     numGreater.textContent = "value can not be more than 100";
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