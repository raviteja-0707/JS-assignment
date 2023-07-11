<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Operators in javascript</title>
  </head>
  <body>
    <h1>Operators in javascript</h1>
    <script>
      //4.Logical operators

      //AND)(&&) Operator

      let x = 5;
      let y = 15;
      console.log(x < 9 && y > 10);

      console.log(true && false);

      console.log(y < 9 && x < 6);

      console.log(true && true);

      console.log(false && false);

      //OR(||) Operator

      let x1 = 50;
      let y1 = 78;

      console.log(x1 < 60 || y1 < 80);

      console.log(x1 >= 50 || y1 <= 90);

      console.log(x1 == 50 || y1 == 60);

      console.log(x1 == 70 || y1 == 90);

      console.log(y1 <= 2 || x1 <= 7);

      //NOT(!) Operator

      let a = 5;
      let b = 25;
      console.log(!(a < b));

      console.log(!(b < a));

      console.log(!(a == b));

      console.log(!(a === a));

      console.log(!(b <= a));
    </script>
  </body>
</html>
