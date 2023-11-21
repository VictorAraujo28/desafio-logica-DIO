// Variáveis de nome e experiência do Heroi
let nomeDoHeroi = "Victor";
let XP = 7500;

// Variável do level com base na experiência
let level;

if (XP < 1000) {
  level = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
  level = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
  level = "Prata";
} else if (XP >= 6001 && XP <= 7000) {
  level = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
  level = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
  level = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}
// Mensagem de saída
console.log(" O Herói " + nomeDoHeroi + " Está no level " + level)