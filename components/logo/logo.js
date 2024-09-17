export function logo(textLogo) {
  const logo = document.querySelector('.logo');

  const newLogo = textLogo.split("")
   .map((char) => `<span class="letter">${char}</span>`);
   logo.innerHTML = newLogo.join("");
}