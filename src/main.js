hero = {
    Name: undefined,
    XP: undefined,
    Level: undefined
};

hero.Name = "Somebody to love";
hero.XP = 10001;

if(hero.XP < 1000){
    hero.Level = "Ferro";
}else if(hero.XP <= 2000){
    hero.Level = "Bronze";
}else if(hero.XP <= 5000){
    hero.Level = "Prata";
}else if(hero.XP <= 7000){
    hero.Level = "Ouro";
}else if(hero.XP <= 8000){
    hero.Level = "Platina";
}else if(hero.XP <= 9000){
    hero.Level = "Ascendente";
}else if(hero.XP <= 10000){
    hero.Level = "Imortal";
}else{
    hero.Level = "Radiante"
}

console.log(`O Herói de nome ${hero.Name} está no nível de ${hero.Level}`);
