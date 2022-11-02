const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("================= First Element ========================");
    const element=fruit_seasonal[0];
    console.log(element);
    console.log("================= last Element ========================");
    const element2=fruit_seasonal[fruit_seasonal.length-1];
    console.log(element2);
    console.log("=======================================================");
    fruit_seasonal.unshift("Papaya");
    console.log(fruit_seasonal);
    console.log("===================== Removed 'Mango' =========================");
    for(let i=0;i<fruit_seasonal.length;i++){
        if(fruit_seasonal[i]==="Mango"){
            let element4=fruit_seasonal.splice(i,1);
            console.log(fruit_seasonal);
        }

    }
    console.log("==================== Added 'Pineapple' to last ========================");
    fruit_seasonal.push("Pineapple");
    console.log(fruit_seasonal);
    console.log("==================== Added 'Dragon Fruit' before 'Water Melon' ========================");
    fruit_seasonal.splice(4,0,"Dragon fruit")
    console.log(fruit_seasonal);
    console.log("====================  Replaced 'orange' with 'Kiwi' ========================");
    fruit_seasonal.splice(2,1,"Kiwi");
    console.log(fruit_seasonal);
    console.log("======================== Element from index 1 to 4 ====================================");
    fruit_seasonal.pop(1,4);
    console.log(fruit_seasonal);

    
