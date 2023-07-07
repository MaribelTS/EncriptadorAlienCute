// Función para encriptar el texto
function encriptarTexto() {
    const textarea = document.querySelector('.text-area');
    const texto = textarea.value;
    let textoEncriptado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Rango de letras mayúsculas
        charCode = ((charCode - 65 + 13) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Rango de letras minúsculas
        charCode = ((charCode - 97 + 13) % 26) + 97;
      }
  
      textoEncriptado += String.fromCharCode(charCode);
    }
  
    const mensajeTextArea = document.querySelector('.mensaje');
    mensajeTextArea.value = textoEncriptado;
  }
  
  // Función para desencriptar el texto
  function desencriptarTexto() {
    const mensajeTextArea = document.querySelector('.mensaje');
    const textoEncriptado = mensajeTextArea.value;
    let textoDesencriptado = '';
  
    for (let i = 0; i < textoEncriptado.length; i++) {
      let charCode = textoEncriptado.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Rango de letras mayúsculas
        charCode = ((charCode - 65 - 13 + 26) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Rango de letras minúsculas
        charCode = ((charCode - 97 - 13 + 26) % 26) + 97;
      }
  
      textoDesencriptado += String.fromCharCode(charCode);
    }
  
    const textarea = document.querySelector('.text-area');
    textarea.value = textoDesencriptado;
  }
  
  // Función para copiar el texto encriptado
  function copiarTexto() {
    const mensajeTextArea = document.querySelector('.mensaje');
    mensajeTextArea.select();
    document.execCommand('copy');
  }
  
  // Obtener referencia a los elementos del DOM
  const btnEncriptar = document.querySelector('.btn-encriptar');
  const btnDesencriptar = document.querySelector('.btn-desencriptar');
  const btnCopiar = document.querySelector('.copiar');
  
  // Manejador de evento para el botón "Encriptar"
  btnEncriptar.addEventListener('click', encriptarTexto);
  
  // Manejador de evento para el botón "Desencriptar"
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  
  // Manejador de evento para el botón "Copiar"
  btnCopiar.addEventListener('click', copiarTexto);
  