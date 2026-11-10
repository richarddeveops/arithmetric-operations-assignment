function show(){
   let userInput = document.getElementById('oneNumber').value
   let outOne = document.getElementById('display')
   outOne.innerHTML += `<p>${userInput}</p>`
} 

// area of triangle

function triangle(){
   let trianb = document.getElementById('oneTrianb').value
   let trianh = document.getElementById('oneTrianh').value
   let areaOfTriangle = 0.5*trianb*trianh
   let outOne = document.getElementById('displayTriangle')
   outOne.innerHTML = `<p>${areaOfTriangle}</p>`

   /* console.log('AREA OF TRIANGLE');
   console.log('Area = 1/2 * base * height');
   console.log('where h = 9 and b = 6');
   
   let height = 9;
   let base = 6;
   let areaOfTriangle = 0.5*height*base;
   console.log('Area Of Triangle = ' + areaOfTriangle + ';'); */
}

        
        
        // area of square
        function square(){
            let side = document.getElementById('oneSquare').value
            let areaOfSquare = side*side
            let outOne = document.getElementById('displaySquare')
            outOne.innerHTML = `<p>${areaOfSquare}</p>`

            /* console.log('AREA OF SQUARE');
           console.log('Area = side * side');
           console.log( 'where s = 3');
           
           let s = 3;
           let areaOfSquare = s*s;
           console.log('Area Of Square = ' + areaOfSquare + ';'); */
        }
        
        
        //area of circle
        function circle(){
            let radius = document.getElementById('oneCircle').value
            let areaOfCircle = 3.142*radius*radius
            let outOne = document.getElementById('displayCircle')
            outOne.innerHTML = `<p>${areaOfCircle}</p>`

            /* console.log('AREA OF CIRCLE');
            console.log('Area = π * r²');
            console.log('where r = 5');
    
            let r = 5;
            let areaOfCircle = 3.142 * r * r;
            console.log('Area Of Circle = ' + areaOfCircle + ';'); */
        }

        //area of quadrilateral
        function quadrilateral(){
            let d = document.getElementById('oneQuadrilaterald').value
            let h1 = document.getElementById('oneQuadrilateralh1').value
            let h2 = document.getElementById('oneQuadrilateralh2').value
            let areaOfQuadrilateral = 0.5 * d * (h1 + h2)
            let outOne = document.getElementById('displayQuadrilateral')
            outOne.innerHTML = `<p>${areaOfQuadrilateral}</p>`

            /* console.log('AREA OF QUADRILATERAL');
            console.log('Area = 1/2 * d * (h1 + h2)');
            console.log('where d = 8, h1 = 6, h2 = 4');

            let d = 8;
            let h1 = 6;
            let h2 = 4;
            let areaOfQuadrilateral = 0.5 * d * (h1 + h2); 
            console.log('Area Of Quadrilateral = ' + areaOfQuadrilateral + ';');*/
        }

        //area of rhombus
        function rhombus(){
            let d1 = document.getElementById('oneRhombusd1').value
            let d2 = document.getElementById('oneRhombusd2').value
            let areaOfRhombus = 0.5 * d1 * d2
            let outOne = document.getElementById('displayRhombus')
            outOne.innerHTML = `<p>${areaOfRhombus}</p>`

            /* console.log('AREA OF RHOMBUS');
            console.log('Area = 1/2 * diagonal1 * diagonal2');
            console.log('where d1 = 10, d2 = 8');
   
           let d1_rhombus = 10;
           let d2_rhombus = 8;
           let areaOfRhombus = 0.5 * d1_rhombus * d2_rhombus;
           console.log('Area Of Rhombus = ' + areaOfRhombus + ';'); */
        }

        //area of trapezium
        function trapezium(){
            let a = document.getElementById('oneTrapeziuma').value
            let b = document.getElementById('oneTrapeziumb').value
            let h_trapezium = document.getElementById('oneTrapeziumh').value
            let areaOfTrapezium = 0.5 * (parseFloat(a) + parseFloat(b)) * h_trapezium
            let outOne = document.getElementById('displayTrapezium')
            outOne.innerHTML = `<p>${areaOfTrapezium}</p>`

            /*  console.log('AREA OF TRAPEZIUM');
            console.log('Area = 1/2 * (a + b) * h');
            console.log('where a = 5, b = 7, h = 4');
    
            let a = 5;
            let b = 7;
            let h_trapezium = 4;
            let areaOfTrapezium = 0.5 * (a + b) * h_trapezium;
            console.log('Area Of Trapezium = ' + areaOfTrapezium + ';'); */
        }

        //area of parallelogram
        function parallelogram(){
            let b_parallelogram = document.getElementById('oneParallelogramb').value
            let h_parallelogram = document.getElementById('oneParallelogramh').value
            let areaOfParallelogram = b_parallelogram * h_parallelogram
            let outOne = document.getElementById('displayParallelogram')
            outOne.innerHTML = `<p>${areaOfParallelogram}</p>`

            /* console.log('AREA OF PARALLELOGRAM');
            console.log('Area = base * height');
            console.log('where b = 6, h = 3'); 
    
            let b_parallelogram = 6;
            let h_parallelogram = 3;
            let areaOfParallelogram = b_parallelogram * h_parallelogram;
            console.log('Area Of Parallelogram = ' + areaOfParallelogram + ';'); */
        }

        //body mass index (BMI)
         function bmi(){
            let weight = document.getElementById('oneBMIweight').value
            let height_bmi = document.getElementById('oneBMIheight').value
            let bmi = weight / (height_bmi * height_bmi)
            let outOne = document.getElementById('displayBMI')
            outOne.innerHTML = `<p>${bmi}</p>`

            /* console.log('BODY MASS INDEX (BMI)');
            console.log('BMI = weight(kg) / height(m)²');
            console.log('where weight = 70kg, height = 1.75m'); 
    
            let weight = 70;
            let height_bmi = 1.75;
            let bmi = weight / (height_bmi * height_bmi);
            console.log('BMI = ' + bmi + ';');*/
        }


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
