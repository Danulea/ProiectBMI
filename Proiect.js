
document.querySelector('.verify1').addEventListener('click', function() {

      const inaltime = document.querySelector('.inputInaltime1').value;
      const greutate = document.querySelector('.inputGreutate1').value;

      let bmi = greutate / inaltime;

      document.querySelector('.clasaBMI1').textContent = (`BMI-ul tau este ${bmi}.`);
    });

    document.querySelector('.verifyAge1').addEventListener('click', function() {

      const anulNasterii = document.querySelector('.inputAn1').value;

      let varsta = new Date().getFullYear() - anulNasterii;

      document.querySelector('.clasaVarsta1').textContent = (`Varsta este ${varsta}.`);
    });



    document.querySelector('.verify2').addEventListener('click', function() {

      const inaltime = document.querySelector('.inputInaltime2').value;
      const greutate = document.querySelector('.inputGreutate2').value;

      let bmii = greutate / inaltime;

      document.querySelector('.clasaBMI2').textContent = (`BMI-ul tau este ${bmii}.`);
    });

    document.querySelector('.verifyAge2').addEventListener('click', function() {

      const anulNasteriii = document.querySelector('.inputAn2').value;

      let varstaa = new Date().getFullYear() - anulNasteriii;

      document.querySelector('.clasaVarsta2').textContent = (`Varsta este ${varstaa}.`);
    });

document.querySelector('.compara').addEventListener('click', function() {

    
      if( bmi > bmii){
        document.querySelector('.clasaCompara').textContent =(`Primul BMI este mai mare ${compara}`);
      } else {
        document.querySelector('.clasaCompara').textContent =(`al doilea BMI e mai mare ${compara}`);
      }
    })
