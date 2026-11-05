// area of triangle
        console.log('AREA OF TRIANGLE');
        console.log('Area = 1/2 * base * height');
        console.log('where h = 9 and b = 6');
        
        let height = 9;
        let base = 6;
        let areaOfTriangle = 0.5*height*base;
        console.log('Area Of Triangle = ' + areaOfTriangle + ';');
        
        
        // area of square
         console.log('AREA OF SQUARE');
        console.log('Area = side * side');
        console.log( 'where s = 3');
        
        let s = 3;
        let areaOfSquare = s*s;
        console.log('Area Of Square = ' + areaOfSquare + ';');
        
        
        //area of circle
        console.log('AREA OF CIRCLE');
        console.log('Area = π * r²');
        console.log('where r = 5');

        let r = 5;
        let areaOfCircle = Math.PI * r * r;
        console.log('Area Of Circle = ' + areaOfCircle + ';');

        //area of quadrilateral
        console.log('AREA OF QUADRILATERAL');
        console.log('Area = 1/2 * d * (h1 + h2)');
        console.log('where d = 8, h1 = 6, h2 = 4');

        let d = 8;
        let h1 = 6;
        let h2 = 4;
        let areaOfQuadrilateral = 0.5 * d * (h1 + h2);
        console.log('Area Of Quadrilateral = ' + areaOfQuadrilateral + ';');

        //area of rhombus
         console.log('AREA OF RHOMBUS');
         console.log('Area = 1/2 * diagonal1 * diagonal2');
         console.log('where d1 = 10, d2 = 8');

        let d1_rhombus = 10;
        let d2_rhombus = 8;
        let areaOfRhombus = 0.5 * d1_rhombus * d2_rhombus;
        console.log('Area Of Rhombus = ' + areaOfRhombus + ';');

        //area of trapezium
         console.log('AREA OF TRAPEZIUM');
        console.log('Area = 1/2 * (a + b) * h');
        console.log('where a = 5, b = 7, h = 4');

        let a = 5;
        let b = 7;
        let h_trapezium = 4;
        let areaOfTrapezium = 0.5 * (a + b) * h_trapezium;
        console.log('Area Of Trapezium = ' + areaOfTrapezium + ';');

        //area of parallelogram
        console.log('AREA OF PARALLELOGRAM');
        console.log('Area = base * height');
        console.log('where b = 6, h = 3'); 

        let b_parallelogram = 6;
        let h_parallelogram = 3;
        let areaOfParallelogram = b_parallelogram * h_parallelogram;
        console.log('Area Of Parallelogram = ' + areaOfParallelogram + ';');

        //body mass index (BMI)
        console.log('BODY MASS INDEX (BMI)');
        console.log('BMI = weight(kg) / height(m)²');
        console.log('where weight = 70kg, height = 1.75m'); 

        let weight = 70;
        let height_bmi = 1.75;
        let bmi = weight / (height_bmi * height_bmi);
        console.log('BMI = ' + bmi + ';');


        /*
        a. AREA OF A TRIANGLE
        Area = 1/2 * base * height
        Area = 0.5 * b * h

    b. AREA OF A SQUARE
       Area = side * side
        Area = s²

    c. AREA OF A CIRCLE
       Area = π * r²
       Area = 3.142 * r * r

    d. AREA OF A QUADRILATERAL
       Area = 1/2 * d * (h1 + h2)

    e. AREA OF A RHOMBUS
       Area = 1/2 * diagonal1 * diagonal2
       Area = 0.5 * d1 * d2

    f. AREA OF A TRAPEZIUM
       Area = 1/2 * (a + b) * h
        Where a and b are the two parallel sides, h is height

    g. AREA OF A PARALLELOGRAM
       Area = base * height
       Area = b * h

    h. BODY MASS INDEX (BMI)
        BMI = weight(kg) / height(m)²
        BMI = weight / (height * height) 
        
        */
