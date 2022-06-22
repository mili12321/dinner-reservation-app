import { IMenuItem } from "../interfaces/menuItem.interface";
import bacon_King_Burger from '../assets/imgs/Bacon_King_Burger.png'
import cheesecake from '../assets/imgs/cheesecake.png'
import creme_brulee from '../assets/imgs/creme_brulee.png'
import miso_Soup from '../assets/imgs/Miso_Soup.png'
import pancakes from '../assets/imgs/pancakes.png'
import spaghetti_bolognese from '../assets/imgs/spaghetti_bolognese.png'
import steamed_Buns from '../assets/imgs/Steamed_Buns.png'
import sweet_potato_fries from '../assets/imgs/Sweet_potato_fries.png'
import chocolate_cake from '../assets/imgs/chocolate_cake.jpg'
import beef_sashimi from '../assets/imgs/beef_sashimi.jpg'
import teriyaki_salmon from '../assets/imgs/Teriyaki_salmon.jpg'

export const menuItems: {[key:string]:IMenuItem[]} = {
    first: [
        {
            id: 1,
            title: "Beef sashimi",
            image: beef_sashimi,
            calories:'1040 Cal',
            rate:'4.9',
            price:'5.99',
            prepTime:'8-10 Min',
            desc:'served with a citrus-soy dipping sauce with Asian salad leaves such as shiso and mizuna.'
        },
        {
            id: 2,
            title: "Miso Soup",
            image: miso_Soup,
            calories:'40 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'traditional Japanese soup made primarily of miso paste, dashi (broth), and additional ingredients such as vegetables, seaweed, and tofu.'
        },
        {
            id: 3,
            title: "Steamed Buns",
            image: steamed_Buns,
            calories:'1190 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'vegan Chinese steamed buns filled with juicy simmered daikon and shiitake mushrooms along with a spicy mayonnaise and pickled mung bean sprouts.'
        },
        {
            id: 4,
            title: "Sweet potato fries",
            image: sweet_potato_fries,
            calories:'58 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'These sweet potato fries are perfectly crispy and crunchy'
        }
    ],
    main: [
        {
            id: 5,
            title: "Bacon King Burger",
            image: bacon_King_Burger,
            calories:'1040 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'Our Bacon King Sandwich features two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise all on a soft sesame seed bun.'
        },
        {
            id: 6,
            title: "spaghetti bolognese",
            image: spaghetti_bolognese,
            calories:'297 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'An aromatic dish that’s packed with flavor'
        },
        {
            id: 7,
            title: "Teriyaki salmon",
            image: teriyaki_salmon,
            calories:'297 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'seared salmon fillets covered with a homemade teriyaki sauce and finished off with sesame seeds.'
        },
    ],
    desert: [
        {
            id: 8,
            title: "cheesecake",
            image: cheesecake,
            calories:'297 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'A classic New York-style cheesecake with a buttery graham cracker crust and rich, dense filling made from cream cheese, eggs, sugar, sour cream, vanilla, a hint of lemon, and a few tablespoons of flour.'
        },
        {
            id: 9,
            title: "chocolate cake",
            image: chocolate_cake,
            calories:'297 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'For the real hard-core chocolate lovers. This Cake combines rich chocolate cake layers with fresh cherries, cherry liqueur, and a simple whipped cream frosting.'
        },
        {
            id: 10,
            title: "pancakes",
            image: pancakes,
            calories:'297 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'Cinnamon pancakes with flax, Greek yogurt and vanilla with sauteed apples and maple syrup'
        },
        {
            id: 11,
            title: "creme brulee",
            image: creme_brulee,
            calories:'297 Cal',
            prepTime:'8-10 Min',
            rate:'4.9',
            price:'5.99',
            desc:'A creamy, pudding-like, baked custard with a brittle top of melted sugar that cracks when you gently tap it with a spoon. The custard is made with heavy cream, eggs, sugar'
        },
    ],
}