/*let user = {
firstName : "Yeppy",
lastName : "Yep",
};
user.firstName = "Yeppidy";   // on modifie le first name par "yeppidy"
console.log(user.firstName);    //on fait apparaitre dans la console le firstName
console.log(user.lastName);     //on fait apparaitre dans la console le lastName
console.log(user.firstName);    //on fait apparaitre le nouveau firstName dans la console                            
*/

/*let users = [
    {
        firstName : "Teddy",
        lastName : "Roosevelt"
    },
    {
        firstName : "Barack",
        lastName : "Obama"
    },
    {
        firstName : "Donald",
        lastName : "Trump"
    }
];

for(user of users){                 //on navigue dans le tableau
    console.log(user.firstName);    //on fait apparaitre dans la console les firstName du tableau
}*/

/*
let pizzas = [
    {
        name : "Veggie",
        ingredients : [
            "Tomato",
            "Cheese",
            "Mushrooms"
        ],
        price : null
    },
    {
        name : "Meattie",
        ingredients : [
            "Tomato",
            "Cheese",
            "Meat"
        ],
        price : null
    },
    {
        name : "Fishie",
        ingredients : [
            "Tomato",
            "Cheese",
            "Fish"
        ],
        price : null
    },
    {
        name : "Supreme",
        ingredients : [
            "Tomato",
            "Cheese",
            "Meat",
            "Olive"
        ],
        price : null
    }
];
for(let i = 0; i < pizzas.length; i++){             // on parcour le tableau

    if(pizzas[i].ingredients.length <= 3){          //si les ingrédients des pizzas sont inférieurs ou égal à 3
        pizzas[i].price = 7.99;                     //le prix sera de 7.99
    }
    else if(pizzas[i].ingredients.length > 3){      //si les ingrédients des pizzas sont inférieurs ou égal à 3
        pizzas[i].price = 8.99;                     //le prix sera de 8.99
    }
    console.log(pizzas[i].price)
}

*/

/*let relationships = [
    {
        name : "Sarah",
        friends : ["John", "Sophie"]
    },
    {
        name : "John",
        friends : ["Sophie", "Simon"]
    },
    {
        name : "Simon",
        friends : ["John", "Sophie", "Sarah"]
    },
    {
        name : "Sophie",
        friends : ["John", "Sarah"]
    }
];

for(let i = 0; i < relationships.length; i++)
{
    console.log(relationships[i].name);
    for(let j = 0; j < relationships[i].friends.length; j++)
    {
        console.log(relationships[i].friends[j]);
    }
}*/

let relationships = [
    {
        name : "Sarah",
        friends : ["John", "Sophie"]
    },
    {
        name : "John",
        friends : ["Sophie", "Simon"]
    },
    {
        name : "Simon",
        friends : ["John", "Sophie", "Sarah"]
    },
    {
        name : "Sophie",
        friends : ["John", "Sarah"]
    }
];

for(let i = 0; i < relationships.length; i++)
{
    console.log(relationships[i].name);

    for(let j = 0; j < relationships[i].friends.length; j++)
    {
        let friend = relationships[i].friends[j];
        let person = relationships[i].name;
    
        for(let k = 0; k < relationships.length; k++)
        {
            if(relationships[k].name === friend)
            {
                for(let l = 0; l < relationships[k].friends.length; l++)
                {
                    if(relationships[k].friends[l] === person)
                    {
                        console.log(friend);
                    }
                }
            }
        }
    }
}