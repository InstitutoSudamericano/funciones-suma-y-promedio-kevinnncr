function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    
    if (promedio > 70) {
      return "aprobado";
    } else {
      return "reprobado";
    }
}  
  let rpromedio= calcularPromedio(85,50,60);
  alert("El estudiante esta"+ rpromedio)