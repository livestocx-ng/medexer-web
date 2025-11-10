"use client";

import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";


// ✅ BlogDetail type
type BlogSection = {
  title?: string;
  // date: string;
  text: string;
  image?: string;
};

type BlogDetail = {
  id: number;
  title: string;
  date?: string;
  sections: BlogSection[];
  image?: string;
};

// ✅ Blog records (1–16)
// const posts: Record<number, BlogDetail> = {
//   1: {
//     id: 1,
//     title: "Fruit Series (1) - Guava",
//     date: "2nd July, 2025",
//     image: "/images/guava.jpg",
//     sections: [
//       {
//         title: "Guava Goodness",
//         date: "2nd July, 2025",
//         text: "Guava is a tropical fruit known for its high vitamin C content and antioxidant properties. It’s great for skin, immunity, and digestion.",
//         image: "/images/guava-section.jpg",
//       },
//     ],
//   },
//   2: {
//     id: 2,
//     title: "Fruit Series (2) - Pineapple",
//     date: "3rd July, 2025",
//     image: "/images/pineapple.jpg",
//     sections: [
//       {
//         title: "Pineapple Perks",
//         date: "3rd July, 2025",
//         text: "Pineapple contains bromelain, an enzyme that aids digestion and reduces inflammation. A sweet tropical treat with health benefits.",
//         image: "/images/pineapple-section.jpg",
//       },
//     ],
//   },
//   3: {
//     id: 3,
//     title: "Fruit Series (3) - Mango",
//     date: "4th July, 2025",
//     image: "/images/mango.jpg",
//     sections: [
//       {
//         title: "The King of Fruits",
//         date: "4th July, 2025",
//         text: "Mangoes are packed with vitamin A and beta-carotene, great for vision and skin health. A delicious symbol of summer.",
//         image: "/images/mango-section.jpg",
//       },
//     ],
//   },
//   4: {
//     id: 4,
//     title: "Fruit Series (4) - Orange",
//     date: "5th July, 2025",
//     image: "/images/orange.jpg",
//     sections: [
//       {
//         title: "Citrus Strength",
//         date: "5th July, 2025",
//         text: "Oranges boost immunity, hydration, and collagen production. A classic vitamin C powerhouse.",
//         image: "/images/orange-section.jpg",
//       },
//     ],
//   },
//   5: {
//     id: 5,
//     title: "Fruit Series (5) - Watermelon",
//     date: "6th July, 2025",
//     image: "/images/watermelon.jpg",
//     sections: [
//       {
//         title: "Hydration Hero",
//         date: "6th July, 2025",
//         text: "Watermelon is over 90% water, perfect for hydration and post-workout recovery.",
//         image: "/images/watermelon-section.jpg",
//       },
//     ],
//   },
//   6: {
//     id: 6,
//     title: "Fruit Series (6) - Papaya",
//     date: "7th July, 2025",
//     image: "/images/papaya.jpg",
//     sections: [
//       {
//         title: "Papaya Power",
//         date: "7th July, 2025",
//         text: "Papaya supports digestion and skin rejuvenation. Its enzyme papain aids nutrient absorption.",
//         image: "/images/papaya-section.jpg",
//       },
//     ],
//   },
//   7: {
//     id: 7,
//     title: "Fruit Series (7) - Banana",
//     date: "8th July, 2025",
//     image: "/images/banana.jpg",
//     sections: [
//       {
//         title: "Potassium Packed",
//         date: "8th July, 2025",
//         text: "Bananas fuel your body with natural sugars and essential minerals for energy and recovery.",
//         image: "/images/banana-section.jpg",
//       },
//     ],
//   },
//   8: {
//     id: 8,
//     title: "Fruit Series (8) - Apple",
//     date: "9th July, 2025",
//     image: "/images/apple.jpg",
//     sections: [
//       {
//         title: "An Apple a Day",
//         date: "9th July, 2025",
//         text: "Apples are high in fiber and antioxidants — supporting gut health and heart wellness.",
//         image: "/images/apple-section.jpg",
//       },
//     ],
//   },
//   9: {
//     id: 9,
//     title: "Fruit Series (9) - Pear",
//     date: "10th July, 2025",
//     image: "/images/pear.jpg",
//     sections: [
//       {
//         title: "Gentle Sweetness",
//         date: "10th July, 2025",
//         text: "Pears are gentle on digestion and rich in soluble fiber — a light, refreshing fruit option.",
//         image: "/images/pear-section.jpg",
//       },
//     ],
//   },
//   10: {
//     id: 10,
//     title: "Fruit Series (10) - Coconut",
//     date: "11th July, 2025",
//     image: "/images/coconut.jpg",
//     sections: [
//       {
//         title: "Nature’s Electrolyte",
//         date: "11th July, 2025",
//         text: "Coconut water is a natural electrolyte drink, perfect for hydration and nutrient balance.",
//         image: "/images/coconut-section.jpg",
//       },
//     ],
//   },
//   11: {
//     id: 11,
//     title: "Fruit Series (11) - Grape",
//     date: "12th July, 2025",
//     image: "/images/grape.jpg",
//     sections: [
//       {
//         title: "Tiny Antioxidant Bombs",
//         date: "12th July, 2025",
//         text: "Grapes are loaded with resveratrol and flavonoids, promoting heart and brain health.",
//         image: "/images/grape-section.jpg",
//       },
//     ],
//   },
//   12: {
//     id: 12,
//     title: "Fruit Series (12) - Lemon",
//     date: "13th July, 2025",
//     image: "/images/lemon.jpg",
//     sections: [
//       {
//         title: "Zesty Cleanser",
//         date: "13th July, 2025",
//         text: "Lemons detoxify the body, aid digestion, and brighten the skin — all in one squeeze.",
//         image: "/images/lemon-section.jpg",
//       },
//     ],
//   },
//   13: {
//     id: 13,
//     title: "Fruit Series (13) - Avocado",
//     date: "14th July, 2025",
//     image: "/images/avocado.jpg",
//     sections: [
//       {
//         title: "Healthy Fats King",
//         date: "14th July, 2025",
//         text: "Avocados are rich in monounsaturated fats and vitamin E — perfect for heart and skin health.",
//         image: "/images/avocado-section.jpg",
//       },
//     ],
//   },
//   14: {
//     id: 14,
//     title: "Fruit Series (14) - Kiwi",
//     date: "15th July, 2025",
//     image: "/images/kiwi.jpg",
//     sections: [
//       {
//         title: "Tiny Vitamin C Giant",
//         date: "15th July, 2025",
//         text: "Kiwi offers more vitamin C than oranges — an immune-boosting superfruit.",
//         image: "/images/kiwi-section.jpg",
//       },
//     ],
//   },
//   15: {
//     id: 15,
//     title: "Fruit Series (15) - Strawberry",
//     date: "16th July, 2025",
//     image: "/images/strawberry.jpg",
//     sections: [
//       {
//         title: "Berry Beauty",
//         date: "16th July, 2025",
//         text: "Strawberries are rich in antioxidants and vitamin C, great for skin and immune support.",
//         image: "/images/strawberry-section.jpg",
//       },
//     ],
//   },
//   16: {
//     id: 16,
//     title: "Fruit Series (16) - Blueberry",
//     date: "17th July, 2025",
//     image: "/images/blueberry.jpg",
//     sections: [
//       {
//         title: "Brain-Boosting Blue",
//         date: "17th July, 2025",
//         text: "Blueberries enhance memory and brain function, while protecting cells from oxidative stress.",
//         image: "/images/blueberry-section.jpg",
//       },
//     ],
//   },
// };

const posts: Record<number, BlogDetail> = {
  1: {
    id: 1,
    title: 'Fruit Series (14) - Guava',
    date: '2nd July, 2025',
    sections: [
      {
        title: 'Guava Goodness: Small Fruit, Big Impact',
        text: "Guava doesn’t need to shout to be powerful. It’s one of those fruits that quietly does it all, refreshing, nourishing, and surprisingly helpful after something as generous as donating blood. If you’ve overlooked guava before, it’s time to give this tropical all-rounder the credit it deserves.Small Fruit, Big Story You’ve probably seen guava at a fruit stand or in a smoothie, but it’s more than just a tropical treat. Native to Central America and now cultivated worldwide, the guava has been a staple of traditional diets for centuries. In many cultures, it’s not just a snack. It’s a go-to for strength and healing. And once you know what’s inside, it’s easy to see why.",
        image: 'https://medexer.com.ng/wp-content/uploads/2025/07/1.jpg',
      },
      {
        title: 'What’s Inside Matters',
        text: 'Bite into a guava and you’re getting a hit of vitamin C (more than an orange, by the way), plus fiber, potassium, antioxidants, and even a bit of iron. That combination makes it great for your immune system, digestion, and overall energy. And here’s where it gets interesting — these same nutrients are exactly what your body needs after giving blood.',
      },

      {
        title: "Guava and Blood Donation: A Smart Combo",
        text: "Donating blood is a powerful act, but it also takes a toll on your body. You’ll need to rebuild red blood cells, restore energy, and stay hydrated. Guava helps on all fronts. The vitamin C boosts iron absorption, helping you recover faster. The natural sugars give you a light energy kick without the crash. And it tastes way better than most recovery snacks out there.",
        image:'https://medexer.com.ng/wp-content/uploads/2025/07/3-768x614.jpg'
      },
      {
        title: 'Real Nourishment, Real Impact',
        text: 'Guava isn’t a miracle cure. But it is a smart, delicious, and natural way to take care of your body, especially when you’re giving a part of yourself to help others. It’s food that fuels something bigger. So the next time you donate blood or just want to eat with purpose, grab a guava. Quietly powerful. Just like you.',
      
      },
    ],
  },
  2: {
    id: 2,
    title: 'Fruit Series (12) - Fiji Apple',
    date: '6th June, 2024.',
    sections: [
      {
        title: "Everyone's Favourite! Fiji Apples",
        text: 'Fuji apples, developed in Japan in the late 1930s, have swiftly become one of the most popular apple varieties worldwide due to their sweet flavor, crisp texture, and extended storage life. These apples are not only delicious but also packed with numerous health benefits that make them an excellent choice for blood donors.',
      },
      {
        title: 'Benefits for Blood Donors.',
        text: '1. Enhanced Recovery: – The high vitamin C content in Fuji apples helps enhance white blood cell function, which is crucial for a quick recovery post-donation. Enhanced white blood cell function means a stronger immune response, reducing the risk of post-donation infections.',
      },
      {
        
        text: '2. Improved Circulation:– Antioxidants like quercetin promote better blood circulation by preventing oxidative damage to blood vessels, thereby ensuring a healthier cardiovascular system. This is particularly beneficial for blood donors, as healthy blood circulation is crucial for replenishing blood supply effectively.',
        
      },
      {
        
        text: '3. Energy Boost:– The natural sugars and carbohydrates in Fuji apples provide a quick energy boost, which can be particularly beneficial before and after donating blood. This helps in countering any feelings of weakness or fatigue that donors might experience..',
        image: "https://medexer.com.ng/wp-content/uploads/2024/06/appppp-768x513.jpg"
      },
      {
        
        text: 'Blood donors play a vital role in healthcare, and maintaining good health is essential for them to continue their generous contributions. Fuji apples can be a fantastic dietary choice for blood donors, offering a range of benefits. Firstly, their substantial vitamin C content strengthens the immune system, crucial for a quick recovery and fighting off infections after donation. Additionally, the peel boasts quercetin, a powerful antioxidant that helps reduce the risk of heart attack, a concern for many.',
        image: "https://medexer.com.ng/wp-content/uploads/2024/06/app-768x595.jpg"
      },
      {
        
        text: 'Furthermore, Fuji apples are packed with water, aiding in hydration – a critical aspect for blood donors to ensure proper blood volume. Their rich dietary fiber content promotes a healthy digestive system and regular bowel movements, contributing to overall well-being. Don’t forget the essential minerals like magnesium, potassium, and calcium found in Fuji apples.',
        image: "https://medexer.com.ng/wp-content/uploads/2024/06/apppp-768x512.jpg"
      },
      {
        
        text: 'These minerals are vital for maintaining healthy bones, muscle function, and nerve function, all of which support the physical health blood donors need for continued donations. Finally, with their low-calorie profile, Fuji apples make a perfect guilt-free snack, allowing blood donors to manage their weight while maintaining a balanced and nutritious diet for optimal body function. So, the next time you’re looking for a healthy and delicious snack, consider reaching for a Fuji apple – your body and fellow blood recipients will thank you!',
       
      },

      
    ],
  },
  3: {
    id: 3,
    title: 'Fruit Series (10) - Garden Egg',
    date: '8th January, 2024.',
    sections: [
      {
        title: 'Garden Egg Chronicles: A Nutrient Symphony for the Blood Donation Overture',
        text: 'Embark on a journey through the lush landscapes of Africa and beyond as we unravel the delightful story of garden eggs—a versatile vegetable that not only paints our plates with vibrant colors but also showers us with a myriad of health benefits. From the heart of African cuisines to kitchens worldwide, let’s dive into the world of garden eggs, exploring their origin, nutritional richness, and the numerous ways they can be savored.',
        image: 'https://medexer.com.ng/wp-content/uploads/2024/01/gardenegg.jpg',
      },
      {
        title: 'Unveiling the Garden Egg Canvas',
        text: 'Garden eggs, also known as African eggplants, are the colorful stars of this culinary show. Originating from Africa, thesevegetables, with their smooth texture and slightly sweet flavor, have transcended borders and become a staple in many global cuisines. From white and green to yellow and red, the garden egg palette is a feast for the eyes.',
      },
      {
        title: 'The Nutritional Ballet of Garden Eggs',
        text: 'The nutritional dance of garden eggs is a spectacle to behold. Packed with vitamins A, C, and K, along with essential minerals like potassium, magnesium, and iron, these vegetables are a nutrient powerhouse. Low in calories and fat but rich in dietary fiber, they offer a symphony of nutrients that promote overall well-being.',
      },

      {
        title: 'Health Benefits Unveiled',
        text: 'Garden eggs take a bow as we unravel their health benefits. Beyond the culinary charm, they play a vital role in blood sugar control and cholesterol reduction. Their antioxidants stand guard, shielding cells from damage. With a good dose of dietary fiber, garden eggs support gut health, leaving you satisfied and preventing overindulgence.',
        image: 'https://medexer.com.ng/wp-content/uploads/2024/01/garden-egg-1-768x768.jpg'
      },
      {
        title: 'Interlude: A Nutritional Sonata – Garden Eggs by the Numbers:',
        text: 'Let’s break down the nutritional brilliance of garden eggs per serving, showcasing their vitamin and mineral content: \n– Vitamin A: 15% of the Daily Value (DV) \n– Vitamin C: 20% of the DV \n– Vitamin K: 25% of the DV\n– Potassium: 12% of the DV\n– Magnesium: 11% of the DV\n– Iron: 15% of the DV\n– Dietary Fiber: 11% of the DV\n– Calories: 74\n– Fat: 0.39 grams',   
      },
      {
        title: 'Versatility Unleashed – Garden Eggs in Culinary Harmony',
        text: 'Garden eggs take center stage in the kitchen, offering a versatile repertoire for culinary creation. From stews and soups to salads, curries, and even roasting or grilling, these vegetables elevate every dish they grace. Let’s explore some delightful recipes that allow garden eggs to shine.', 
      },
      {
        title: 'Recipes to Try:',
        text: '1. Garden Egg Salad Burst: A refreshing salad featuring diced garden eggs, cherry tomatoes, cucumbers, and a zesty vinaigrette.\n2. Spiced Garden Egg Stew: A hearty stew combining garden eggs, tomatoes, onions, and a medley of aromatic spices for a flavorful experience.\n3. Grilled Garden Egg Delight: Sliced garden eggs lightly grilled and drizzled with olive oil, creating a smoky, succulent treat.',   
      },
      {
        text:"As the curtain falls on this gastronomic journey, garden eggs emerge not just as a culinary delight but as nutritional maestros. From their vibrant origins in Africa to global kitchens, these vegetables continue to captivate taste buds while offering a nutritional symphony that promotes health and wellness. So, let the garden egg extravaganza commence, and may your culinary adventures be as colorful and nutritious as the garden egg itself!"
      }
    ],
  },
  4: {
    id: 4,
    title: 'Fruit Series (7) - Date',
    date: '23rd October, 2023',
    sections: [
      {
        title: 'Date Delights: The Sweet Secret to a Successful Blood Donation!',
        text: 'In the heart of the Northern part of Nigeria, they have a special name for it—Dabino. But no matter where you are, date fruits have a universally cherished sweetness and a hidden secret: their unique connection to blood donation. In this blog post, we’ll uncover the delightful relationship between date fruits and the act of donating blood. Prepare to be amazed at how these little natural sweets can make your donation journey healthier, heartier, and wonderfully delicious.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/10/date-1024x682.jpg',
      },
      {
        title: "Date Fruits: Nature's Sweet Gems",
        text: 'Date fruits are a timeless delight, celebrated for their deliciously sweet taste and rich nutritional profile. They are more than just a tasty snack; they have a unique role to play in your blood donation experience. Let’s dive into the goodness of date fruits!',
       
      },
      {
        title: 'The Energy Boost You Need',
        text: 'Donating blood, while a noble act, can sometimes leave you feeling a bit drained. That’s where dates come to the rescue! Date fruits are a natural source of quick and sustainable energy. Packed with natural sugars, dietary fiber, and essential vitamins, they can give you the boost you need before or after your donation, helping you stay energetic and feel good.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/10/yellow-date.jpg',
      },
      {
        title: 'Iron, the Blood’s Best Friend',
        text: 'One of the key elements in blood health is iron and date fruits have a surprising iron content that can support your iron levels. Iron is vital for hemoglobin production, which carries oxygen in your blood. Including dates in your diet can help maintain healthy iron levels and ensure your body has the resources it needs to replenish after donating.',
      },
      {
        title: 'Nutrient Powerhouse',
        text: 'Dates are not just a source of energy and iron. They also contain a range of essential nutrients, including potassium, magnesium, and B vitamins. These nutrients can help maintain electrolyte balance, support muscle and nerve function, and keep your energy levels steady during and after your blood donation.',
      },
      {
        title: 'Mood-Boosting Magic',
        text: 'Blood donation can sometimes affect your mood, but date fruits have a secret mood-boosting power. They contain tryptophan, a precursor to serotonin, the “feel-good” neurotransmitter. Enjoying a few dates can help lift your spirits and maintain a positive mindset during and after your donation.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/10/date-tree.jpg'
      },
      {
        title: 'Versatility in the Kitchen',
        text: 'Dates are incredibly versatile in the kitchen. You can eat them fresh, incorporate them into smoothies, or use them in baking for a naturally sweet flavor. Their natural sweetness and chewy texture make them a delightful addition to a wide range of dishes.',
        
      },
      {
        title: 'Sweeten Your Blood Donation Journey!',
        text: 'As you embark on your blood donation journey, consider date fruits your sweet allies. They’re your natural energy boost, your iron support, and your mood enhancer. Whether you’re enjoying them as a snack or adding them to your favorite recipes, dates can make your blood donation experience not just healthier but sweeter too. So, embrace the sweet secret of date fruits, and let them add a delightful twist to your blood donation journey, leaving you feeling nourished, energetic, and in high spirits!',
        
      },

    ],
  },
  5: {
    id: 5,
    title: 'Champions of Change: Ambassadors FC Triumphs in the Medexer, Gilead Medical Center, and LifeBank Football Tournament',
    date: '15th August, 2023',
    sections: [
      {
        title: 'Uniting Through Sport',
        text: 'The cheers, the goals, the teamwork—it all came to an electrifying conclusion as the Medexer, Gilead Medical Center, and LifeBank grassroots football tournament reached its pinnacle. With a thrilling final match between Ambassadors FC and 360 FC, the event proved to be a resounding success in fostering community, promoting healthy living, and championing the noble cause of blood donation.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/IMG-20230815-WA0009.jpg',
      },
      {
        title: 'A Grand Finale: Ambassadors FC Takes the Crown',
        text: 'After weeks of fierce competition, the final showdown took center stage. Ambassadors FC and 360 FC faced off in a match that was more than just about football—it was a display of determination, skill, and the shared values of the tournament’s partners. In a gripping display of sportsmanship and talent, Ambassadors FC emerged victorious, securing the coveted championship title.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/field.jpg',
      },
      {
        title: 'The Trophy and Beyond: Celebrating Success',
        text: 'The trophy wasn’t just a symbol of victory; it represented something larger—the embodiment of dedication, teamwork, and a commitment to making a positive impact. As Ambassadors FC lifted the trophy, the stadium erupted in applause. The cheers weren’t just for the victory on the field; they were for the victory off the field too—the victory of community engagement, healthy living promotion, and raising awareness about blood donation.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/IMG-20230814-WA0005.jpg',
      },
      {
        title: 'A Special Package from Medexer: Inspiring Change',
        text: 'But that’s not all that Ambassadors FC took home. Medexer had a surprise in store—a special package that embodied their mission of better health and well-being. This package wasn’t just a token; it was a reminder that Ambassadors FC were now ambassadors of change. In collaboration with Gilead Medical Center and LifeBank, Medexer celebrated the team’s triumph and commitment to healthy living by presenting them with a package that encouraged continued positive action.',
        
      },
      {
        title: 'A Symbol of Unity: Beyond the Trophy',
        text: 'As the stadium lights dimmed and the celebrations subsided, the impact of the tournament continued to reverberate. The partnership between Medexer, Gilead Medical Center, and LifeBank transcended the realm of sports, leaving behind a legacy of community unity, health awareness, and the spirit of giving back. The final match might have marked the end of the tournament, but it was just the beginning of a collective journey toward a healthier society.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/IMG-20230814-WA0008.jpg'
      },
      {
        title: 'A Victory for All.',
        text: 'The Medexer, Gilead Medical Center, and LifeBank grassroots football tournament has concluded, leaving behind a trail of unforgettable moments and meaningful connections. Ambassadors FC emerged as the champions of change, not only for their victory on the field but also for their role in inspiring healthier lives and promoting blood donation. The tournament’s impact extended beyond the trophy; it left a mark on hearts and minds, reminding us that sports can be a powerful catalyst for positive transformation. As the cheers fade and the celebrations settle, the legacy of this tournament will continue to remind us that when communities come together, amazing things happen. Here’s to Ambassadors FC, and all participating teams; the embodiment of triumph and change!',
      },
    ],
  },
  6: {
    id: 6,
    title: 'Fruit Series (2) - Avocados',
    date: '15th July, 2023',
    sections: [
      {
        title: 'Uniting Through SporAvocados for Blood Donations: A Nutritious and Delicious Way to Make Impact',
        text: 'Avocados are a nutrient-rich fruit that has been linked to a number of health benefits, including improved heart health, weight loss, and skin health. But did you know that avocados can also improve blood donation?',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/avocado.png',
      },
      {
        text: 'That’s right, avocados are a good source of iron, vitamin C, and folate, all of which are essential for blood donation. Iron is needed to produce red blood cells, vitamin C helps the body absorb iron, and folate is essential for the production of new blood cells. In addition to these nutrients, avocados also contain fiber, which can help to keep blood sugar levels stable. This is important for blood donors, as low blood sugar levels can make it difficult to donate blood. If you are planning to donate blood, it is a good idea to eat an avocado beforehand. This will help to ensure that you have adequate iron levels and that your blood sugar levels stay stable. You should also avoid eating avocados on the day of your donation, as they can interfere with the blood donation process.',
      },
      {
        text: 'Here are some additional tips for blood donors: \n 1. Get a good night’s sleep before your donation.\n 2. Eat a healthy breakfast on the day of your donation. \n 3. Drink plenty of fluids before and after your donation. \n 4. Take a break if you feel lightheaded or dizzy. \n 5. Let the blood donation staff know if you have any health concerns. \n\n Blood donation is a safe and important way to help others. By following these tips, you can help to ensure that your blood donation is a success.', 
      },
      {
        text: 'Here are some recipes that include avocados that are perfect for blood donors:', 
      },
      {
        title: 'Avocado toast',
        text: 'This is a classic breakfast that is both healthy and delicious. Simply spread avocado on a piece of toast and top with your favorite toppings, such as eggs, cheese, or sprouts.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/toast-1024x724.jpg'
      },
      {
        title: 'Avocado smoothie',
        text: 'This is a great way to get a quick and easy dose of nutrients. Blend together an avocado, banana, milk, and your favorite fruit for a delicious and nutritious smoothie.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/smoothie.jpg'
      },
      {
        title: 'Avocado salad',
        text: 'This is a light and refreshing salad that is perfect for a summer day. Toss together some avocado, tomatoes, cucumbers, and your favorite greens for a delicious and healthy meal.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/salad-768x768.jpg'
      },
      { 
        text: 'If you are planning to donate blood, be sure to eat an avocado beforehand to help ensure that your donation is a success. In addition to the benefits mentioned above, avocados have also been shown to reduce inflammation, improve cholesterol levels, and protect against cancer. So, not only are avocados good for your blood, they are also good for your overall health.', 
      },
      { 
        text: 'Next time you are planning to donate blood, be sure to add an avocado to your diet. Your body and the people who receive your blood will thank you for it.', 
      },
    ],
  },
 
  7: {
    id: 7,
    title: 'Fruit Series (13) - Feijoa',
    date: '26th August, 2024.',
    sections: [
      {
        title: "Feijoa Fables: A Journey Through Flavor, Wellness, and the Power of Giving",
        text: 'Take a step into the enchanting world of feijoa, a fruit that’s as mysterious as it is delicious. This little green gem, with its unique taste and myriad health benefits, is more than just a tasty snack—it’s a hero in the story of wellness and giving. Join us as we explore the captivating tale of feijoa, from its exotic origins to its role in nourishing the body and supporting life-saving causes like blood donation.',
        // image: "https://medexer.com.ng/wp-content/uploads/2023/12/eggplant-5902351_640.jpg"
      },
      {
        title: "The Exotic Allure of Feijoa: From the Tropics to Your Table",
        text: 'Imagine wandering through the lush, verdant landscapes of South America, where feijoa trees stand with their glossy leaves and fragrant blossoms. Native to Brazil, Paraguay, Uruguay, and northern Argentina, feijoa—also known as the pineapple guava—has long been cherished for its aromatic flavor that combines the tropical sweetness of pineapple with the tartness of guava. With every bite, feijoa brings a taste of the tropics to your table, offering not just a unique flavor but a world of benefits.',
      },
      {
        title: 'Nutritional Magic: Feijoa’s Dance of Flavor and Vitality',
        text: 'After donating blood, your body needs a nutritious boost to replenish its strength. Enter feijoa, a fruit that pairs deliciously with the act of giving. Rich in vitamin C, feijoa helps your body absorb iron more efficiently, which is crucial for restoring hemoglobin levels after a donation. Its natural sugars provide a quick energy lift, while fiber keeps you feeling satisfied. Feijoa becomes a delightful partner in your recovery waltz, supporting your health as you support others.', 
      },
      {
        title: 'Wellness Waltz: Feijoa, Blood Donation, and the Art of Recovery',
        text: 'After donating blood, your body needs a nutritious boost to replenish its strength. Enter feijoa, a fruit that pairs deliciously with the act of giving. Rich in vitamin C, feijoa helps your body absorb iron more efficiently, which is crucial for restoring hemoglobin levels after a donation. Its natural sugars provide a quick energy lift, while fiber keeps you feeling satisfied. Feijoa becomes a delightful partner in your recovery waltz, supporting your health as you support others.',  
      },
      {
        title: 'The Feijoa Serenade: A Symphony of Flavor, Health, and Giving Back',
        text: 'Feijoa isn’t just a treat for your taste buds; it’s a symphony of flavor and health benefits that contribute to a larger story of wellness and generosity. Whether you’re savoring the fresh, floral notes of feijoa in a smoothie or enjoying it as a refreshing snack, you’re part of a narrative that blends personal health with the act of giving. Feijoa celebrates both the joy of eating well and the importance of making a difference through actions like blood donation.',
        image: 'https://medexer.com.ng/wp-content/uploads/2024/08/picc-removebg-preview.png'
      },
      {
       title: 'DELICIOUS FEIJOA RECIPES TO ENJOY:',
       text:''
      },
      {
        title: '1. Feijoa Vitality Smoothie:',
        text:'Blend fresh feijoa with banana, spinach, and a splash of orange juice for a vibrant, vitamin-rich smoothie that energizes and replenishes.'
      },
      {
        title: '2. Eggplants – Your Blood Buddy!',
        text:'Puree feijoa with a hint of lime and freeze for a zesty sorbet that cools and invigorates, perfect for a post-donation pick-me-up.'
      },

      {
        title: '3. Feijoa Delight Salad:',
        text:'   Toss sliced feijoa with mixed greens, avocado, walnuts, and a drizzle of honey-lime dressing for a refreshing salad that combines textures and flavors while supporting recovery.'
      },
      {
        title: 'Feijoa’s Tale of Taste and Giving',
        text:'As our journey through the world of feijoa comes to a close, let’s embrace the magic of this extraordinary fruit. Feijoa is more than just a delicious snack; it’s a symbol of vitality, health, and the power of giving. Whether you’re enjoying it for its exotic flavor or its health benefits, remember that feijoa plays a role in a bigger story—one where nourishing yourself goes hand-in-hand with nourishing your community. So next time you bite into a feijoa, relish not only its taste but also the impact you can make by pairing good nutrition with the gift of life through blood donation. Let your adventures with feijoa be as fulfilling and meaningful as the lives you touch!'
      },
    ],
  },
  8: {
    id: 8,
    title: 'Fruit Series (9) - Eggplant',
    date: '13th December, 2023',
    sections: [
      {
        title: "The Unlikely Hero: How Eggplants Add a Healthy Twist to Blood Donation",
        text: 'When you think of blood donation, eggplants might not be the first thing that comes to mind. But surprise, surprise! This unassuming vegetable has a few tricks up its sleeve that can actually enhance your blood donation experience. In this blog post, we’re diving into the world of eggplants and uncovering how they contribute to a healthier, heartier, and more delicious blood donation journey.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/12/eggplant-5902351_640.jpg'
      },
      {
        title: "Folate for Red Blood Cell Production",
        text: 'Eggplants are a good source of folate, a B-vitamin that plays a crucial role in the production of red blood cells. When you donate blood, your body needs to replenish these cells, and folate steps in as a supportive ally. Including folate-rich foods like eggplants in your diet ensures your body has the necessary building blocks for robust blood cell regeneration.',
        
      },
      {
        title: 'Hydration Hero: Coconut Water',
        text: 'Staying hydrated is key before and after blood donation. And when it comes to hydration, coconut water is the ultimate thirst quencher. It’s packed with electrolytes like potassium and sodium, which help maintain fluid balance in your body. Sip on some coconut water before your donation to ensure you’re well-hydrated, and it’ll make the process smoother.', 
        image: 'https://medexer.com.ng/wp-content/uploads/2023/12/vegetables-4752784_640.jpg'
      },
      {
        title: 'Iron Absorption Assistance',
        text: 'While eggplants themselves aren’t high in iron, they contain vitamin C, which plays a role in enhancing iron absorption. Pairing iron-rich foods with vitamin C helps your body make the most of this essential mineral. Consider adding eggplants to meals with iron sources to maximize the absorption of this vital nutrient.', 
      },
      {
        title: 'Deliciously Versatile in the Kitchen',
        text: 'One of the best things about eggplants is their versatility in the kitchen. From grilled and roasted eggplant slices to the rich flavors of eggplant in curries, moussakas, or ratatouilles, there are countless ways to incorporate this vegetable into your diet. Experiment with eggplant recipes to find delicious ways to prepare it before or after your blood donation.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/12/versatility-768x768.jpg'
      },
      {
        title: 'Eggplants – Your Blood Buddy!',
        text: 'In the world of blood donation, eggplants might be the unexpected hero you didn’t know you needed. Whether they’re providing folate for red blood cell production, contributing to hydration, or supporting heart health, eggplants bring more to the table than meets the eye. So, the next time you’re preparing for a blood donation, consider adding a dash of purple to your plate and let eggplants be your nutritious and tasty companions on your blood donation journey.',
      },
    ],
  },
  10: {
    id: 10,
    title: 'Fruit Series (4) - Black Currant',
    date: '4th August, 2023',
    sections: [
      {
        title: "Berry Boost: Black Currants and the Bloomin’ Marvel of Blood Donation",
        text: 'Imagine a superhero in a cape, ready to save the day, one drop at a time. This is not your friendly neighborhood superhero, but rather the unsung champion of life-saving acts: blood donation. And now, a new superhero is joining the ranks: the unassuming black currant. These tiny powerhouses are packed with nutrients that can enhance the impact of blood donation in ways that will amaze you.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/hero.png'
              },
      {
       
        text: 'Black currants are a good source of vitamin C, anthocyanins, and bioflavonoids. Vitamin C is essential for the production of red blood cells, anthocyanins are antioxidants that can help reduce inflammation, and bioflavonoids can help strengthen blood vessels. All of these nutrients can help improve the quality of blood donations and reduce the risk of complications.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/blueberries-2546161_640.jpg'
      },
      {
        
        text: 'Hold on to your taste buds, folks, because we’re about to introduce you to the nutritional dynamo that is the black currant. These little berries might be small, but they’re loaded with an impressive arsenal of vitamins and minerals. ', 
      },
      {
        
        text: 'We’re talking vitamins C, A, E, and K, along with essential minerals like potassium and magnesium. But that’s not all—here’s where the real party starts: anthocyanins. These naturally occurring pigments give black currants their vibrant purple hue and pack a punch with their antioxidant powers. Think of them as the defenders of health, swooping in to shield your body from harm.', 
      },
      {
        title: 'Iron’s Sidekick: Vitamin C and Iron Absorption: ',
        text: 'Ever wonder why Popeye reached for spinach? It’s all about iron, baby! Iron is the life of the party when it comes to healthy blood, as it’s a key ingredient in hemoglobin—the protein responsible for delivering oxygen to every nook and cranny of your body. But here’s where black currants step in as the ultimate sidekick.\n\nTheir high vitamin C content isn’t just for show—it’s a mastermind move. Vitamin C teams up with iron, making it more accessible and absorbable for your body. So, the next time you’re munching on black currants, just remember: it’s like a rockstar duet, creating harmony in your bloodstream.',
      },
      {
       title: 'Power Up the Immune Shields:',
        text: 'Cue the heroic music, because it’s time to talk immunity! Blood donors and organ recipients alike need robust immune systems to fight off the forces of evil—read: infections. When you donate blood, your immune system takes a temporary vacation, leaving you a tad vulnerable.',
              },
      {
        text: 'Enter black currants, stage left. With their army of anthocyanins and antioxidants, these berries are like the Avengers of the fruit world, boosting your immune defenses and giving you an extra shield against those pesky invaders. Organ transplant recipients also benefit from this immunity boost, which helps them recover like champs.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/black-currant.jpg'
      },

      {
        title: 'Zap Inflammation and Feel the Relief:',
        text: 'Blood donation and organ transplantation can sometimes lead to a bit of inflammation, like the aftermath of an epic battle. But don’t worry, black currants are here to soothe the aftermath. Their anti-inflammatory prowess can help ease the redness and swelling, making your post-donation or post-transplant experience smoother than ever. It’s like having a spa day for your insides, all thanks to these berrylicious wonders.',
      },
      {
        title: 'The Berry Tale’s Sweet Conclusion:',
        text: 'So there you have it, the berry tale of how black currants step up and add an extra punch to the already amazing act of blood donation. From teaming up with iron to enhance its absorption to boosting immunity and calming inflammation, these little marvels play a vital role in making the world a healthier place, one berry at a time.\n\nAs you relish the next handful of these juicy, purple gems, take a moment to appreciate the unsung heroes they are. They might not wear capes, but black currants are certainly champions in their own right, supporting the brave souls who give the gift of life through blood donation. So here’s to the black currants—the ultimate sidekicks that prove even the tiniest berry can make a big impact!',
      },
    ],
  },
  9: {
    id: 9,
    title: 'Fruit Series (6) - Coconut',
    date: '15th September, 2023.',
    sections: [
      {
        title: "The Tropical Twist: How Coconut Elevates Your Blood Donation Game!",
        text: 'What if we told you that a tropical treasure, the coconut, can play a unique role in enhancing your blood donation experience? In this blog post, we’ll unveil the surprising connection between coconuts and blood donation. Get ready to explore how this versatile fruit can make your donation journey healthier, more refreshing, and absolutely delightful.',
       
              },
      {
       title: 'Coconuts: Nature’s Tropical Marvel:',
        text: 'Black currants are a good source of vitamin C, anthocyanins, and bioflavonoids. Vitamin C is essential for the production of red blood cells, anthocyanins are antioxidants that can help reduce inflammation, and bioflavonoids can help strengthen blood vessels. All of these nutrients can help improve the quality of blood donations and reduce the risk of complications.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/09/coconut-1-1024x682.jpg'
      },
      {
        title: 'Hydration Hero: Coconut Water',
        text: 'Staying hydrated is key before and after blood donation. And when it comes to hydration, coconut water is the ultimate thirst quencher. It’s packed with electrolytes like potassium and sodium, which help maintain fluid balance in your body. Sip on some coconut water before your donation to ensure you’re well-hydrated, and it’ll make the process smoother.', 
      },
      {
        title: 'Energy Boost from Coconut Meat',
        text: 'Donating blood can sometimes leave you feeling a bit drained, but coconut meat is here to the rescue. It’s rich in healthy fats and natural sugars, providing a quick energy boost without the sugar crash. Munching on some coconut meat post-donation is like refueling your body with tropical goodness.', 
      },
      {
        title: 'Blood Health Support: Iron and Copper Combo',
        text: 'Coconuts may not be iron-rich, but they do contain a good amount of copper. Copper is a trace mineral that plays a role in iron absorption and utilization. When you consume copper alongside iron-rich foods, it can enhance your body’s ability to use iron efficiently. So, consider incorporating coconut into your diet as a complement to iron-rich foods.',
      image: 'https://medexer.com.ng/wp-content/uploads/2023/09/coconuts.png'
      },
      {
       title: 'Mood Enhancement with MCTs',
        text: 'Coconut oil is renowned for its medium-chain triglycerides (MCTs). These fatty acids are not only great for your brain but also have mood-enhancing properties. After a blood donation, you might experience a slight dip in mood; coconut oil can help counteract this by providing a cognitive boost and promoting a positive mindset.',
              },
      {
        title: 'Versatility in the Kitchen',
        text: 'Coconuts are incredibly versatile in the kitchen. You can use coconut water in smoothies, coconut meat in salads, and coconut oil in cooking. The variety of ways you can enjoy coconuts makes it easy to incorporate them into your diet as part of your blood donation preparation and recovery plan.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/09/cocnut-tree.jpg'
      },

      {
        title: 'Your Blood Donation Pal!',
        text: 'Next time you’re gearing up for a blood donation, consider coconuts your trusty companions. Whether you’re sipping on refreshing coconut water for hydration, munching on energy-boosting coconut meat, or cooking with nourishing coconut oil, coconuts can be your go-to allies. They’ll help you stay energized, hydrated, and in good spirits throughout your donation journey. So, embrace the tropical twist, and let coconuts make your blood donation experience healthier, more delightful, and oh-so-refreshing!',
      },
    ],
  },
  11: {
    id: 11,
    title: 'Fruit Series (1) - Apples',
    date: '8th, July 2023.',
    sections: [
      {
        title: "The Impact and Importance of Apples in Blood Donation",
        text: 'Apples are a healthy and delicious fruit that can have a number of benefits for blood donors. They are a good source of iron, which is an important mineral that helps the body produce red blood cells. Red blood cells carry oxygen throughout the body, so having enough iron is essential for maintaining good health and preventing anemia.',
              },
      {
       
        text: 'In addition to iron, apples are also a good source of vitamin C. Vitamin C is an antioxidant that helps protect the body’s cells from damage. It is also important for the absorption of iron from food. So, eating an apple before or after donating blood can help to ensure that your body gets the nutrients it needs to replace the blood that you have donated.',
      },
      { 
        text: 'In addition to their nutritional benefits, apples can also help to improve the overall well-being of blood donors. They are a good source of fiber, which can help to regulate digestion and promote regularity. This can be especially important for blood donors, who may experience some digestive discomfort after donating blood.', 
      },
      {  
        text: 'Apples are also a good source of potassium, which is an important mineral that helps to regulate blood pressure. This can be beneficial for blood donors, as low blood pressure can sometimes occur after donating blood.', 
      },
      {
        title: 'Here are some of the specific ways that apples can help blood donors:',
        text : "1. Increase iron absorption: Apples contain pectin, a type of fiber that helps to bind to iron in the gut and increase its absorption. This is important for blood donors, as iron is a key nutrient for producing red blood cells."
      },
      {
        text: '2. Reduce inflammation: Apples contain quercetin, a flavonoid that has anti-inflammatory properties. This can be beneficial for blood donors, as inflammation can damage blood vessels and increase the risk of blood clots.',
              },
      {
        text: 'Boost immunity: Apples contain vitamin C, which is an antioxidant that helps to boost the immune system. This can be beneficial for blood donors, as they are more likely to get sick after donating blood',
      },

      {
        text: 'Improve digestion: Apples contain fiber, which can help to regulate digestion and promote regularity. This can be especially important for blood donors, who may experience some digestive discomfort after donating blood.',
      },
      {
        text: 'Lower blood pressure: Apples contain potassium, which is a mineral that helps to lower blood pressure. This can be beneficial for blood donors, as low blood pressure can sometimes occur after donating blood.',
      },
      {
        text: 'Apples are a healthy and nutritious fruit that can have a number of benefits for blood donors. They are a good source of iron, vitamin C, potassium, and other important nutrients. Apples can also help to improve the overall well-being of blood donors by regulating digestion, promoting regularity, and lowering blood pressure.',
      },
      {
        title: 'Here are some tips for eating apples before and after donating blood:',
        text: '1. Eat an apple at least 30 minutes before donating blood. This will give your body time to absorb the nutrients from the apple.'
      },
      {
        text: '2. Drink plenty of fluids after donating blood, especially water. This will help to replace the fluids that you have lost.'
      },
      {
        text: '3. If you are feeling lightheaded or dizzy after donating blood, eat a snack or drink some juice. This will help to raise your blood sugar levels.'
      },
      {
        text: '4. Avoid alcoholic beverages for at least 24 hours after donating blood. Alcohol can dehydrate you and make you feel worse.'
      },
      {
        title: 'In addition to the information above, here are some other interesting facts about apples and blood donation:',
        text: 'Vitamin C helps the body absorb iron from food, so eating an apple with a meal that contains iron can help to increase iron absorption.'
      },
      {
        text: 'Apples are a good source of fiber, which can help to regulate digestion and promote regularity. This can be especially important for blood donors, who may experience some digestive discomfort after donating blood.'
      },
      {
        text: 'Apples are a good source of potassium, which is an important mineral that helps to regulate blood pressure. This can be beneficial for blood donors, as low blood pressure can sometimes occur after donating blood.',
      image: 'https://medexer.com.ng/wp-content/uploads/2023/08/red-or-green-apples.jpg'
      },
      {
        title: "Well, it isn't a This or That answer.",
        text: "Red and green apples are both nutritious fruits, but they have some key differences."
      },
      {
        text: '1. Color: The main difference between red and green apples is their color. Red apples get their color from anthocyanins, which are antioxidants that give them their red or pink hue. Green apples, on the other hand, get their color from chlorophyll, which is a green pigment that is essential for photosynthesis.'
      },
      {
        text: '2. Taste: Red apples are typically sweeter than green apples. This is because they contain more sugar and less acidity. Green apples, on the other hand, have a more tart taste.'
      },
       {
        text: '3. Nutritional content: Red and green apples have similar nutritional profiles, but there are some minor differences. Red apples contain more vitamin C and beta-carotene, while green apples contain more vitamin A and potassium.'
       },
       {
        text: '4. Calories: Red apples have slightly more calories than green apples. A medium-sized red apple (about 180 grams) contains about 95 calories, while a medium-sized green apple (about 190 grams) contains about 90 calories.'
       },
       {
        text: '5. Storage: Red apples and green apples can both be stored at room temperature for a few days. However, red apples will keep longer if they are stored in the refrigerator.'
       },
       {
        text: 'Ultimately, the best type of apple for you depends on your personal preferences. If you prefer a sweeter apple, then red apples are a good choice. If you prefer a tart apple, then green apples are a good choice. And if you are looking for an apple with the highest nutritional content, then red apples are a better choice.'
       }
    ],
  },
  12: {
    id: 12,
    title: 'Fruit Series (11) - Figs',
    date: '13th February, 2024.',
    sections: [
      {
        title: "Fig Tales: A Journey Through Flavor, Nutrition, and Giving Back",
        text: 'Step into the enchanting world of figs, where each bite not only tells a story of sweetness and nourishment but also echoes the spirit of giving. Join us on a unique journey as we explore the captivating tale of figs, their sun-kissed origins, and the delightful dishes they inspire, all while weaving in the theme of blood donation—an act that, like figs, nourishes and sustains life.',
        image: 'https://medexer.com.ng/wp-content/uploads/2024/02/figs-1024x683.jpg'
      },
      {
       title: 'Fig Fantasia: Embracing Mediterranean Sunshine',
        text: 'Begin your journey by immersing yourself in the picturesque orchards of the Mediterranean, where figs bask in the golden glow of the sun. These fruits, with their ancient elegance and timeless charm, are not just culinary delights but symbols of vitality and goodness.',
      },
      { 
        title: 'Nutritional Harmony: Figs Dance Between Flavor, Wellness, and Generosity',
        text: 'Watch as figs take center stage in a symphony of nutrition and flavor. Bursting with fiber, vitamins, and minerals, these fruits become the virtuosos of health, offering not just deliciousness but also a bounty of wellness benefits. In this act, we intertwine the theme of generosity, drawing parallels between the nourishment figs provide and the act of giving through blood donation.', 
        image: 'https://medexer.com.ng/wp-content/uploads/2024/02/fig2-1024x683.jpg'
      },
      {  
        title: 'Healthful Waltz: Figs and Wellness in Perfect Harmony',
        text: 'The spotlight shifts to the healthful virtues of figs as they gracefully waltz into the limelight. Just as figs support digestion, aid in weight management, and stand as guardians of heart health, blood donation becomes a parallel dance—a waltz of wellness for both the donor and the recipient. The act of giving blood is a vital contribution to community health, fostering a sense of collective well-being.', 
      },
      {
        title: 'Savoring the Fig Sonata: A Melody of Flavor, Goodness, and Community',
        text : "Indulge your senses in the rich tapestry of flavors that figs offer, from delectable salads to sumptuous desserts. As we explore whimsical recipes, we draw connections to the communal aspect of blood donation. Sharing fig-infused delights becomes a metaphor for the shared responsibility of sustaining and nourishing our communities through acts of kindness."
      },
      {
        title: 'Whimsical Recipes to Try:',
        text: '1. Figgy Bliss Smoothie: Blend fresh figs with yogurt and a splash of honey for a creamy concoction that delights the senses. Share it with a friend as you discuss the importance of community well-being.',
      },
      {
        text: '2. Figgy Dream Sorbet: Freeze ripe figs with a touch of lemon juice for a refreshing treat that captures the essence of summer. Enjoy it with those who have donated blood together, celebrating the collective effort.',
      },

      {
        text: '3. Savory Fig Symphony: Roast figs with balsamic glaze and serve alongside creamy goat cheese for a savory sensation. Use this dish as a centerpiece for a gathering of blood donors, fostering a sense of community and shared commitment.',
      },
      {
        title: 'A Fig-Filled Adventure of Flavor, Generosity, and Wellness',
        text: 'As we bid farewell to this culinary and philanthropic odyssey, may the magic of figs inspire not only delightful culinary adventures but also a spirit of giving. Let the sweetness of figs be a reminder that, like these fruits, the act of donating blood is a gesture of kindness that enriches both the giver and the receiver.',
      },
     
    ],
  },
  13: {
    id: 13,
    title: 'Fruit Series (8) - Dacryodes edulis',
    date: '16th November, 2023.',
    sections: [
      {
        title: "Ube Delight: How Dacryodes Edulis Boosts Your Blood Donation Experience!",
        text: 'In the heart of Nigeria, a purple delight known as Dacryodes Edulis, or Ube (also called Elumi), is making waves not just in local markets but also in the world of blood donation. In this blog post, we’ll unravel the unique qualities of this tropical gem and explore how Ube can add a delicious and nutritious touch to your blood donation journey, making it an experience to savor.',
      },
      {
       title: 'Dacryodes edulis: Nigeria’s Purple Treasure',
        text: 'Ube, with its vibrant purple hue and delectable flavor, is more than just a fruit—it’s a symbol of Nigerian richness and biodiversity. Loaded with nutrients, including vitamins, minerals, and antioxidants, this indigenous delight is making its mark in the world of healthy living. Let’s see how it can play a role in enhancing your blood donation adventure!',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/11/ube2.jpg'
      },
      { 
        title: 'Antioxidant Boost for Vitality',
        text: 'Antioxidants are like the superheroes of nutrition, and Ube is their secret lair. Packed with these powerful compounds, Ube helps combat oxidative stress in the body. For blood donors, this means promoting overall health and vitality, making sure you’re in prime condition for your generous act.', 
      },
      {  
        title: 'Iron Infusion for Blood Health',
        text: 'Iron deficiency can be a concern, especially for regular blood donors. Ube steps in as a delicious solution. It contains iron, a crucial component for red blood cell production. Incorporating Ube into your diet, especially alongside other iron-rich foods, can contribute to maintaining healthy iron levels, ensuring you’re ready for your next donation.', 
      },
      {
        title: 'Energy from Natural Sugars',
        text : "Need an energy boost without the crash? Ube’s got your back. With natural sugars that provide a steady release of energy, Ube can be the perfect pre-donation snack. Whether you enjoy it fresh or as part of a nutritious meal, Ube keeps your energy levels steady, ensuring you’re all set to be a blood donation hero.",
        image: "https://medexer.com.ng/wp-content/uploads/2023/11/ube1.jpg"
      },
      {
        title: 'Mood-Boosting Goodness',
        text: 'Ube isn’t just good for the body; it’s a mood-enhancing treat. Rich in nutrients that support brain health, including vitamin B6, Ube contributes to cognitive function and may help lift your spirits after a blood donation. A happy donor is a healthy donor, and Ube adds a touch of joy to the experience.',
      },
      {
        title: "Versatility in Nigerian Cuisine",
        text: 'One of the joys of Ube is its versatility in Nigerian cuisine. From Ube jam to Ube ice cream, the possibilities are endless. Incorporating this purple delight into your meals not only adds a burst of flavor but also a nutritional boost. It’s a delightful way to celebrate the richness of Nigerian culture and support your blood donation goals.',
      },
      {
        title: 'Ube – A Taste of Health and Generosity',
        text: 'As you embark on your blood donation journey, consider Ube your flavorful companion. With its antioxidant-rich, iron-infused, and mood-boosting qualities, Ube brings a unique twist to the experience. So, indulge in the richness of Dacryodes edulis, savor the purple delight, and let Ube be your delicious partner in health and generosity. After all, every drop counts and every bite of Ube adds a touch of Nigerian goodness to your blood donation adventure!',
      }, 
    ],
  },

  15: {
    id: 15,
    title: 'Fruit Series (3) - Banana',
    date: '2nd August, 2023',
    sections: [
      {
        title: "Banana: A Nutrient-Packed Ally in Blood Donation",
        text: 'While the importance of donating blood cannot be emphasized enough, did you know that a simple banana can play a crucial role in supporting blood donors during and after their noble act? Yes, this humble and delicious fruit offers a range of benefits that can aid blood donors in their contribution to saving lives.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/Untitled-design-768x607.jpg'
      },
      {
        text: 'Bananas are a delicious and nutritious fruit that is packed with vitamins, minerals, and antioxidants. They are also a good source of potassium, which is an important mineral for blood donation. Potassium helps to regulate blood pressure and heart rate. It also helps to prevent muscle cramps, which can be a common side effect of blood donation. In addition to potassium, bananas also contain vitamin B6, which is essential for the production of red blood cells. Red blood cells carry oxygen throughout the body, so it is important to have a healthy supply of them. Here are some other benefits of eating bananas for blood donors:',
       image: 'https://medexer.com.ng/wp-content/uploads/2023/08/banana-1024x801.jpg'
      },
      { 
        text: '1. They provide a quick and easy source of energy.\n2. They help to prevent dehydration. \n3. They can improve moods.\n4. They can boost the immune system.\n5. They can help reduce the risk of anemia.', 
      },
      {  
        title: 'Here are some tips for eating bananas before or after donating blood:',
        text: 'We all know the feeling—donating blood can leave you a little low on energy. Fear not, because cashews are your energy-boosting allies! These nuts are rich in healthy fats and complex carbohydrates that provide a sustained energy release. Munch on some cashews before your donation, and you’ll be ready to conquer the day like a true blood donation ninja.', 
      },
      {
        title: 'Happy Nut, Happy Mood',
        text : "1. Choose a ripe banana. Ripe bananas are easier to digest and will provide more nutrients.",
      },
      {
        text: '2. Eat the banana at least 30 minutes before or after donating blood. This will give your body time to absorb the nutrients.',
      },
      {
        text: '3. If you are feeling nauseous, you can mash the banana and mix it with water or milk. This will make it easier to digest.',
      },
      {
        text: '4. If you are donating blood in the morning, you can eat a banana as part of your breakfast.'
      },
      {
        text: '5. If you are donating blood in the afternoon or evening, you can eat a banana as a snack.'
      },
      {
        title: 'Why is it important to eat bananas before or after donating blood?',
        text: '1. Replenishing Nutrients: Bananas are a fantastic source of essential nutrients like potassium, vitamin C, iron, vitamin B6, and dietary fiber. When you donate blood, you lose some of the nutrients that are important for your body; hence, they provide a quick and natural energy boost, making them an ideal snack for donors post-donation. \n Potassium is important for regulating blood pressure and heart rate. It also helps to prevent muscle cramps, which can be a common side effect of blood donation. Vitamin B6 is essential for the production of red blood cells. Red blood cells carry oxygen throughout the body, so it is important to have a healthy supply of them. Iron is also important for the production of red blood cells.'
      },
      {
        text: '2. Hydration Support: Staying well-hydrated is vital for blood donors, as it helps maintain blood volume and prevents dizziness or lightheadedness after donating. Bananas are not only rich in water content but also contain electrolytes like potassium, which aid in maintaining the body’s fluid balance.'
      },
      {
        text: '3. Natural Antioxidants: Blood donation, while beneficial, can trigger oxidative stress in the body due to the removal of red blood cells. Bananas contain potent antioxidants like dopamine and catechins, which help combat oxidative stress and protect the body’s cells from damage.'
      },
      {
        text: '4. Mood Enhancement: Blood donation can be a positive and fulfilling experience, but some donors may feel anxious or nervous beforehand. Bananas come to the rescue again, containing the amino acid tryptophan, which the body converts to serotonin – the “happy hormone.” Enjoying a banana before donating can help ease nerves and boost your mood.'
      },
      {
        text: '5. Easy and Portable: Donating blood often involves [going to a donation center or hospital. Bananas are a convenient snack that can be easily carried in a bag or even a pocket. Their natural packaging makes them an excellent on-the-go option for busy donors.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/banana-316648_640.jpg' 
      },
      {
        title: 'How many bananas should I eat before or after donating blood?',
        text: 'The number of bananas you should eat before or after donating blood depends on your individual needs. If you are feeling tired or weak, you may want to eat two bananas. If you are feeling fine, you may only need to eat one banana. \nIt is important to listen to your body and eat as many bananas as you need to feel your best. If you are not sure how many bananas to eat, you can always ask a healthcare professional for advice.'
      },
      {
        title: 'I am allergic to bananas. What should I eat instead?',
        text: 'If you are allergic to bananas, there are other fruits that you can eat before or after donating blood. Some good alternatives include:\n 1. Oranges \n 2. Grapefruit \n 3. Strawberries \n 4. Watermelon \n 5. Dates \n 6. Raisins \n 7. Nuts '
      }, {
        text: 'These fruits are all good sources of potassium and vitamin B6. They can help replenish the nutrients that are lost during blood donation and help you feel better overall.'
      },
      {
        title: 'I am not sure if I am allergic to bananas. What should I do?',
        text:  'If you are not sure if you are allergic to bananas, it is best to avoid them before or after donating blood. You can always try eating a small amount of banana and see how you react. If you have any concerns, you can always ask a healthcare professional for advice. \n\nIncluding bananas in your pre- and post-donation routine can contribute to a smoother and more satisfying experience while supporting your health and the well-being of others.'
      }
    ],
  },
  14: {
    id: 14,
    title: 'Fruit Series (5) - Cashews',
    date: '25th August, 2023.',
    sections: [
      {
        title: "Nutrient Ninjas: How Cashews Elevate Your Blood Donation Game!",
        text: 'Blood donation isn’t just a life-saving act—it’s a chance to make a difference, and cashews are here to play a surprisingly delicious role in enhancing that impact. In this blog post, we’re putting the spotlight on cashews and their exciting connection to blood donation. Get ready to discover how these nutty powerhouses can elevate your blood donation experience while adding a tasty twist to the process.',
      },
      {
       title: 'Cashews: Tiny Packages of Nutritional Goodness:',
        text: 'Don’t let their small size fool you—cashews are packed with nutrients that can make a big difference in your health. From heart-healthy fats to essential vitamins and minerals, these nuts are a nutrient powerhouse. But did you know they have a unique way of supporting blood donation? Let’s dive in!',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/08/Cashew.png'
      },
      { 
        title: 'Boosting Blood Health with Iron',
        text: 'Iron is like the MVP of blood health, and cashews are its trusty sidekick. Cashews contain iron, which is crucial for the production of hemoglobin—the protein that transports oxygen in your blood. When you donate blood, your body needs to regenerate these red blood cells, and that’s where cashews come into play. Snacking on these nutty delights helps replenish your iron levels, ensuring you bounce back from donation with gusto.', 
      },
      {  
        title: 'Steady Energy for Heroic Deeds',
        text: 'We all know the feeling—donating blood can leave you a little low on energy. Fear not, because cashews are your energy-boosting allies! These nuts are rich in healthy fats and complex carbohydrates that provide a sustained energy release. Munch on some cashews before your donation, and you’ll be ready to conquer the day like a true blood donation ninja.', 
      },
      {
        title: 'Happy Nut, Happy Mood',
        text : "Cashews have a secret weapon: tryptophan. This amino acid is a mood enhancer that boosts serotonin levels, helping you feel more positive and relaxed. After donating blood, it’s natural to experience a slight dip in mood, but a handful of cashews can help counteract that effect, leaving you with a smile on your face and a sense of accomplishment.",
        image: "https://medexer.com.ng/wp-content/uploads/2023/08/cashew-1.png"
      },
      {
        title: 'Crunch Your Way to a Healthier You',
        text: 'Snacking on cashews isn’t just beneficial for your blood donation journey—it’s also a flavorful adventure. It’s versatile nuts can be added to salads, stir-fries, or enjoyed on their own. With their satisfying crunch and delightful taste, they’re a treat for your taste buds and a boon for your overall well-being.',
      },
      {
        title: "Conclusion: Cashews: Your Blood Donation BFFs!",
        text: 'As you embark on your blood donation journey, consider cashews your trusty companions. These nutrient-rich nuts are more than just a tasty snack—they’re your allies in maintaining iron levels, boosting energy, and lifting your mood. So, whether you’re a seasoned blood donor or considering your first donation, make sure you’ve got a stash of cashews on hand. It’s a nutty partnership that’s all about making your blood donation experience healthier, happier, and, of course, nuttier!',
      }, 
    ],
  },
  // 15: {
  //   id: 15,
  //   title: 'Fruit Series (3) - Banana',
  //   date: '2nd August, 2023',
  //   sections: [
  //     {
  //       title: "Banana: A Nutrient-Packed Ally in Blood Donation",
  //       text: 'While the importance of donating blood cannot be emphasized enough, did you know that a simple banana can play a crucial role in supporting blood donors during and after their noble act? Yes, this humble and delicious fruit offers a range of benefits that can aid blood donors in their contribution to saving lives.',
  //       image: 'https://medexer.com.ng/wp-content/uploads/2023/08/Untitled-design-768x607.jpg'
  //     },
  //     {
  //       text: 'Bananas are a delicious and nutritious fruit that is packed with vitamins, minerals, and antioxidants. They are also a good source of potassium, which is an important mineral for blood donation. Potassium helps to regulate blood pressure and heart rate. It also helps to prevent muscle cramps, which can be a common side effect of blood donation. In addition to potassium, bananas also contain vitamin B6, which is essential for the production of red blood cells. Red blood cells carry oxygen throughout the body, so it is important to have a healthy supply of them. Here are some other benefits of eating bananas for blood donors:',
  //      image: 'https://medexer.com.ng/wp-content/uploads/2023/08/banana-1024x801.jpg'
  //     },
  //     { 
  //       text: '1. They provide a quick and easy source of energy.\n2. They help to prevent dehydration. \n3. They can improve moods.\n4. They can boost the immune system.\n5. They can help reduce the risk of anemia.', 
  //     },
  //     {  
  //       title: 'Here are some tips for eating bananas before or after donating blood:',
  //       text: 'We all know the feeling—donating blood can leave you a little low on energy. Fear not, because cashews are your energy-boosting allies! These nuts are rich in healthy fats and complex carbohydrates that provide a sustained energy release. Munch on some cashews before your donation, and you’ll be ready to conquer the day like a true blood donation ninja.', 
  //     },
  //     {
  //       title: 'Happy Nut, Happy Mood',
  //       text : "1. Choose a ripe banana. Ripe bananas are easier to digest and will provide more nutrients.",
  //     },
  //     {
  //       text: '2. Eat the banana at least 30 minutes before or after donating blood. This will give your body time to absorb the nutrients.',
  //     },
  //     {
  //       text: '3. If you are feeling nauseous, you can mash the banana and mix it with water or milk. This will make it easier to digest.',
  //     },
  //     {
  //       text: '4. If you are donating blood in the morning, you can eat a banana as part of your breakfast.'
  //     },
  //     {
  //       text: '5. If you are donating blood in the afternoon or evening, you can eat a banana as a snack.'
  //     },
  //     {
  //       title: 'Why is it important to eat bananas before or after donating blood?',
  //       text: '1. Replenishing Nutrients: Bananas are a fantastic source of essential nutrients like potassium, vitamin C, iron, vitamin B6, and dietary fiber. When you donate blood, you lose some of the nutrients that are important for your body; hence, they provide a quick and natural energy boost, making them an ideal snack for donors post-donation. \n Potassium is important for regulating blood pressure and heart rate. It also helps to prevent muscle cramps, which can be a common side effect of blood donation. Vitamin B6 is essential for the production of red blood cells. Red blood cells carry oxygen throughout the body, so it is important to have a healthy supply of them. Iron is also important for the production of red blood cells.'
  //     },
  //     {
  //       text: '2. Hydration Support: Staying well-hydrated is vital for blood donors, as it helps maintain blood volume and prevents dizziness or lightheadedness after donating. Bananas are not only rich in water content but also contain electrolytes like potassium, which aid in maintaining the body’s fluid balance.'
  //     },
  //     {
  //       text: '3. Natural Antioxidants: Blood donation, while beneficial, can trigger oxidative stress in the body due to the removal of red blood cells. Bananas contain potent antioxidants like dopamine and catechins, which help combat oxidative stress and protect the body’s cells from damage.'
  //     },
  //     {
  //       text: '4. Mood Enhancement: Blood donation can be a positive and fulfilling experience, but some donors may feel anxious or nervous beforehand. Bananas come to the rescue again, containing the amino acid tryptophan, which the body converts to serotonin – the “happy hormone.” Enjoying a banana before donating can help ease nerves and boost your mood.'
  //     },
  //     {
  //       text: '5. Easy and Portable: Donating blood often involves [going to a donation center or hospital. Bananas are a convenient snack that can be easily carried in a bag or even a pocket. Their natural packaging makes them an excellent on-the-go option for busy donors.',
  //       image: 'https://medexer.com.ng/wp-content/uploads/2023/08/banana-316648_640.jpg' 
  //     },
  //     {
  //       title: 'How many bananas should I eat before or after donating blood?',
  //       text: 'The number of bananas you should eat before or after donating blood depends on your individual needs. If you are feeling tired or weak, you may want to eat two bananas. If you are feeling fine, you may only need to eat one banana. \nIt is important to listen to your body and eat as many bananas as you need to feel your best. If you are not sure how many bananas to eat, you can always ask a healthcare professional for advice.'
  //     },
  //     {
  //       title: 'I am allergic to bananas. What should I eat instead?',
  //       text: 'If you are allergic to bananas, there are other fruits that you can eat before or after donating blood. Some good alternatives include:\n 1. Oranges \n 2. Grapefruit \n 3. Strawberries \n 4. Watermelon \n 5. Dates \n 6. Raisins \n 7. Nuts '
  //     }, {
  //       text: 'These fruits are all good sources of potassium and vitamin B6. They can help replenish the nutrients that are lost during blood donation and help you feel better overall.'
  //     },
  //     {
  //       title: 'I am not sure if I am allergic to bananas. What should I do?',
  //       text:  'If you are not sure if you are allergic to bananas, it is best to avoid them before or after donating blood. You can always try eating a small amount of banana and see how you react. If you have any concerns, you can always ask a healthcare professional for advice. \n\nIncluding bananas in your pre- and post-donation routine can contribute to a smoother and more satisfying experience while supporting your health and the well-being of others.'
  //     }
  //   ],
  // },
  16: {
    id: 16,
    title: 'Medexer Unites with Gilead Medical Center, and Life Bank to Promote Blood Donation and Healthy Living.',
    date: '1st July, 2023',
    sections: [
      {
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/partnerships.png',
        text: 'Medexer is excited to announce its partnership with Gilead Medical Center and Life Bank to co-sponsor a grassroots football tournament in support of blood donation and healthy living. This exciting event will bring together sports enthusiasts and advocates for a healthier society, and will serve as a platform for Medexer to promote its mission of improving the health and well-being of individuals and communities.',
      },
      {
       title: 'Promoting Blood Donation',
        text: 'Blood donation is a crucial act of generosity that saves countless lives. Medexer is committed to raising awareness about the importance of blood donation, and believes that by combining the spirit of sports with a noble cause, it can inspire individuals to become regular blood donors and make a positive impact on their communities.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/banner-862x1024.jpeg'
      },
      { 
        title: 'Empowering Healthy Living:',
        text: 'Sports play a significant role in promoting a healthy lifestyle. Medexer is passionate about empowering individuals to embrace a healthy lifestyle and make informed choices about their well-being.',
        image: 'https://medexer.com.ng/wp-content/uploads/2023/07/all-stars.jpeg' 
      },
      {  
       image: 'https://medexer.com.ng/wp-content/uploads/2023/07/all-stars.jpeg',
       text: 'Through this event, Medexer aims to inspire participants to prioritize their health, engage in regular exercise, and adopt healthy habits. The kick off of the tournament was between All Stars Academy and 360 FC on the 30th of June, 2023.'
      },
      {
        title: 'Community Engagement:',
        text : "Community engagement is at the heart of Medexer’s mission. The grassroots football tournament provides an opportunity for Medexer to connect with the local community and spread awareness about the importance of blood donation. Medexer envisions this event as a catalyst for meaningful conversations, where participants and spectators can learn about the impact of blood donation on patient care and understand the role they can play in saving lives.",
      },
      {
        text: 'Medexer is proud to be a part of this important event, and is committed to making a difference in the lives of others through blood donation and healthy living. Medexer invites everyone to join them in this exhilarating event, be it as participants, supporters, or volunteers, as they come together to make a difference, one kick at a time. Together, we can create a healthier future for all.',
      },  
    ],
  },
};


export default function BlogDetailPage() {
  const params = useParams();
  const id = Number(params?.blogId);
  const post = posts[id];

  if (!post) {
    return (
      <Container>
        <Title order={2}>Post not found</Title>
      </Container>
    );
  }

  return (
    <Container py="xl" w="100%" maw={900} px="md">
      {/* Main post */}
      <Stack gap="md">
        <Title order={1}>{post.title}</Title>
        <Text size="sm" c="dimmed">
          {post.date}
        </Text>

        {/* <Image
          src={post.image || "/images/default.jpg"}
          alt={post.title}
          radius="md"
          h={300}
          fit="cover"
        /> */}

        {post.sections.map((section, index) => (
          <Box key={index} mt="md">
            <Title order={3} mb="xs">
              {section.title}
            </Title>
            
              <Text mt="sm" style={{ lineHeight: 1.9 }}>{section.text}</Text>
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.title}
                mt="sm"
                radius="md"
                h={220}
                fit="cover"
              />
            )}
          </Box>
        ))}
      </Stack>

      {/* Read Next Section */}
      {/* <Box mt={50}>
        <Title order={2} mb="md">
          Read Next
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
          {Object.values(posts)
            .filter((p) => p.id !== post.id)
            .slice(0, 4)
            .map((p) => (
              <Group key={p.id} gap={10} wrap="nowrap">
                <Box
                  style={{
                    width: 120,
                    height: 120,
                    overflow: "hidden",
                    borderRadius: 8,
                  }}
                >
                  <Image
                    src={p.image || "/images/default.jpg"}
                    alt={p.title}
                    height={120}
                    fit="cover"
                  />
                </Box>
                <Stack gap={2} style={{ minWidth: 0 }}>
                  <Link href={`/blog/${p.id}`} style={{ textDecoration: "none" }}>
                    <Text size="sm" fw={500} lineClamp={2}>
                      {p.title}
                    </Text>
                  </Link>
                </Stack>
              </Group>
            ))}
        </SimpleGrid>
      </Box> */}
    </Container>
  );
}
