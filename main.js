
//Vamos a crear función que haga la operación
const calcularAreaRectangulo = () => {
    //Vamos a recuperar el valor del input
    let valorRectangulo = document.getElementById("valor1").value;
    //Verificamos el valor recuperado
    console.log(valorRectangulo);
    //Hacemos la operación matemática para determinar el área del valor del Rectangulo
    let areaRectangulo = valorRectangulo * valorRectangulo;
    //Imprimimos en pantalla el resultado de la operación
    document.getElementById("resultado").innerHTML = `
    <h5>El resultado del área del Rectangulo es: ${areaRectangulo}</h5>
    `;
  };
