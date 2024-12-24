<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación de Cédula</title>
</head>
<body>
    <h2>Validación de Cédula con Algoritmo del Módulo 10</h2>
    <button onclick="validarCedulaPrompt()">Validar Cédula</button>

    <p id="resultado"></p>

    <script>
        function validarCedula(cedula) {
            // Eliminar caracteres no numéricos
            cedula = cedula.replace(/\D/g, '');

            // Verificar que la cédula tenga 11 dígitos
            if (cedula.length !== 11) {
                return false;
            }

            let suma = 0;

            // Recorrer los primeros 10 dígitos de la cédula
            for (let i = 0; i < cedula.length - 1; i++) {
                let digito = parseInt(cedula[i]);

                // Multiplicar los dígitos en posiciones impares por 1 y los pares por 2
                if (i % 2 === 0) {
                    digito *= 1;  // Se puede omitir esta línea, ya que digito *= 1 no tiene efecto.
                } else {
                    digito *= 2;
                }

                // Si el resultado es mayor que 9, restar 9 (equivalente a sumar los dígitos)
                if (digito > 9) {
                    digito -= 9;
                }

                // Sumar el resultado a la suma total
                suma += digito;
            }

            // Obtener el dígito verificador
            const digitoVerificador = parseInt(cedula[cedula.length - 1]);

            // Calcular el módulo 10 de la suma
            const modulo = (10 - (suma % 10)) % 10;

            // Comparar el módulo con el dígito verificador
            return modulo === digitoVerificador;
        }

        function validarCedulaPrompt() {
            // Solicitar la cédula al usuario
            const cedula = prompt("Por favor, ingrese su cédula:");

            // Verificar si el usuario ingresó algo
            if (!cedula) {
                alert("No se ha ingresado ninguna cédula.");
                return;
            }

            // Validar la cédula
            const esValida = validarCedula(cedula);

            // Mostrar el resultado
            const resultado = document.getElementById("resultado");
            if (esValida) {
                resultado.textContent = "La cédula es válida.";
                resultado.style.color = "green";
            } else {
                resultado.textContent = "La cédula no es válida.";
                resultado.style.color = "red";
            }
        }
    </script>
</body>
</html>
