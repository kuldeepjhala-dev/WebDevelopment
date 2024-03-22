let heroes = [["hero1", "hero2", "hero3"], ["heroine1", "heroine2", "heroine3"]];
for (let i = 0; i < heroes.length; i++) {
    console.log("list", i)
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
    console.log();
}
// op:
// list-0
// hero1
// hero2
// hero3

// list-1
// heroine1
// heroine2
// heroine3