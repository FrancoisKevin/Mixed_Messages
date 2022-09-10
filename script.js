function horoscope() {
    const signes = ["Bélier: ","Taureau: ","Gémeaux: ","Cancer: ","Lion: ","Vierge: ","Balance: ",
    "Scorpion: ","Capricorne: ","Verseau: ","Poisson: "];
    const journee = ["Une belle journée en prévision!","Faites attention aux autre, vous vous sentirez mieux !",
"Vénus est de votre côté!","Uranus est dans l'anus, restez chez vous aujourd'hui.","Neptune t'encule.",
"Mercure a besoin d'une petite cure, ne comptez pas sur ses bienfaits pour cette journée.",
"Croyez-vous aux pouvoirs sacrés de Mars ? Il n'en est rien.","Jupiter est de votre côté : ouvrez une Jupiler.",
"La Terre est ses pouvoirs vous transmettent une énergie absolue ! AVANCEZ !",
"Ce signe a-t-il vraiment besoin d'un horoscope ? Ta journée sera merdique."];

const phraseFinale = signes[Math.floor(Math.random()* signes.length)];
const finDePhraseFinale = journee[Math.floor(Math.random()* journee.length)];

console.log(phraseFinale+finDePhraseFinale);
return phraseFinale+finDePhraseFinale;

}

horoscope();