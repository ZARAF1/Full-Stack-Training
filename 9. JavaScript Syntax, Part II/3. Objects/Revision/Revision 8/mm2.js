const menu ={
    courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name:dishName,
            price:dishPrice
        }
        this.courses[courseName].push(dish)
    },
    getRandomDish(courseName){
        return this.courses[courseName][Math.floor(Math.random()*this.courses[courseName].length)]
    },
    generateRandomMeal(){
        let appetizer=this.getRandomDish('appetizers');
        let main=this.getRandomDish('mains');
        let dessert=this.getRandomDish('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`
    }

}



menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Russian Salad', 4.5);
menu.addDishToCourse('appetizers', 'Pakistani Salad', 5);

menu.addDishToCourse('mains', 'Chicken Curry', 10);
menu.addDishToCourse('mains', 'Tandori Chicken', 15);
menu.addDishToCourse('mains', 'Biryani', 25);

menu.addDishToCourse('desserts', 'Ice Cream', 2);
menu.addDishToCourse('desserts', 'Lassi', 3);
menu.addDishToCourse('desserts', 'Biryani', 4);

console.log(menu.generateRandomMeal())
