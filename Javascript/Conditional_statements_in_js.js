  <body>
    <h1>Conditional Operators</h1>
    <script>
      // var passMarks = window.prompt("Enter your marks");

      // if (passMarks >= 35){
      // alert("You have Passed");
      //   } else {
      // alert("You have Failed"); }

      //Marks in grade

      //<35 -- Fail

      //35-50 -- E Grade

      //50-60 -- D Grade

      //60-80 -- C Grade

      //80-90 -- B Grade

      //90-100 -- A Grade

      // let marks = window.prompt("Enter the Marks");

      // if (marks < 35) {
      // console.log("Fail");
      // } else if (marks >= 35 && marks <= 50) {
      //console.log("E Grade");
      // } else if (marks >= 50 && marks <= 60) {
      //console.log("D Grade");
      // } else if (marks >= 60 && marks <= 80) {
      //console.log("C Grade");
      // } else if (marks >= 80 && marks <= 90) {
      //console.log("B Grade");
      // } else {
      //console.log(" A Grade");
      // }

      //Ternary operator
      // if (passMarks <= 35);
      //var passMarks = 35;
      //var passMarks = window.prompt("Enter your marks");

      //syntax: condition ? expressionifTrue : expressionIfFalse;

      //passMarks
      //? console.log("You have passed")
      //: console.log("You have failed");

      let marks = window.prompt("Enter the marks");
      switch (true) {
        case marks < 35:
          console.log("Failed");
          break;

        case marks >= 35 && marks <= 70:
          console.log("C GRADE");
          break;

        case marks >= 70 && marks <= 90:
          console.log("B GRADE");
          break;

        case marks > 90:
          console.log("A GRADE");
          break;
      }

      
    </script>
  </body>
</html>
