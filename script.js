//Fun facts

function visaSvar() {
    const svar = [
        "Dntden här webbplatsen inte är uppbyggd i något färdigt webbhotell. Hela lösningen är utvecklad och underhållen av mig, från frontend-kod till publicering och domänhantering. HTML, CSS, JavaScript → Versionshantering → Hostingplattform → DNS-tjänst → Eget domännamn → Besökare",
        "under min masteruppsats gick det åt mer än 1060 koppar kaffe.",
        "jag älskar Lord of the rings så mycket att jag läst böckerna minst en gång vartannat år sedan högstadiet.",
        "jag gärna lär mig nya tekniska verktyg bara för att förstå hur de fungerar. Precis som jag gjorde under mitt webbplats-bygge.",
        "jag är team mörkt tema.",
        "jag har läst färdigt 405 hp på universitetet, vilket motsvarar ungefär 10 800 timmar.",
        "min favoritårstid är vinter.",
        "webbplatsen började som ett privat sidoprojekt. Jag byggde den själv med målet att lära mig mer om digital utveckling, kod och systemarkitektur. För mig visar projektet min nyfikenhet och intresse för teknik, kontinuerligt lärande och problemlösning.",
        "när andra samlar frimärken, samlar jag på artiklar att läsa senare (och senare glömt varför jag sparat den).",
        "jag brukar läsa recensionerna innan jag bestämmer mig för något."
    ];

    const slump = Math.floor(Math.random() * svar.length);

    document.getElementById("svar").textContent = svar[slump];
}

// Achievements

let klick = 0;

console.log("Achievement-system startat");

document.addEventListener("click", function() {
    klick++;

    if (klick === 20) {
        visaAchievement("🏆 Achievement unlocked: Nyfiken besökare");
    }

    if (klick === 30) {
        visaAchievement("🕵️ Achievement unlocked: Digital detektiv");
    }

    if (klick === 50) {
        visaAchievement("👑 Achievement unlocked: Klickmästare");
    }

    if (klick === 100) {
        visaAchievement("☕ Achievement unlocked: Koffeinklassad användare");
    }
    
    if (klick === 200) {
        visaAchievement("🚀 Achievement unlocked: Explorer Mode");
    }
    
    if (klick === 300) {
        visaAchievement("🐉 Secret achievement unlocked: Här finns inga fler achievements... Eller?");
    }
    
    if (klick === 400) {
        visaAchievement("🥔 Secret achievement unlocked: Grattis. Du klickade 400 gånger för en potatis");
    }

    if (klick === 500) {
        visaAchievement("🕳️ Achievement unlocked: Alice, du följde kaninhålet hela vägen ner");
    }
    
    if (klick === 800) {
        visaAchievement("🦄 Secret achievement unlocked: Ingen förväntade sig att du skulle komma hit");
    }
    
    if (klick === 1400) {
        visaAchievement("👸 Achievement unlocked: Tack Mario! Din strävan är över");
    }
    });

function visaAchievement(text) {
    const achievement = document.getElementById("achievement");

    achievement.textContent = text;
    achievement.style.display = "block";
    
    setTimeout(() => {
        achievement.style.display = "none";
    }, 7000);
}