let heroes = [["hero1", "hero2", "hero3"], ["heroine1", "heroine2", "heroine3"]];

for (innerList of heroes) {
    console.log("allHeroes: ", innerList)
    for (hero of innerList) {
        console.log("hero: ", hero);
    }
}
// op:
// allHeroes: ['hero1', 'hero2', 'hero3']
// hero: hero1
// hero: hero2
// hero: hero3
// allHeroes: ['heroine1', 'heroine2', 'heroine3']
// hero: heroine1
// hero: heroine2
// hero: heroine3