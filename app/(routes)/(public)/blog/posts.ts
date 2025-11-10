'use client';

export type BlogDetail = {
  id: number;
  title: string;
  date: string;
  excerpt?: string;
  readTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: string;
  sections: Array<
    | { type: 'h2' | 'h3'; text: string }
    | { type: 'p'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'strong'; text: string }
    | { type: 'date'; text: string }
    | { type: 'img'; src: string; alt?: string }
  >;
};

export const posts: Record<number, BlogDetail> = {
  1: {
    id: 1,
    title: 'Fruit Series (14) - Guava',
    date: '2nd July, 2025',
    excerpt:
      'Native to Central America and now cultivated worldwide, the guava has been a staple of traditional diets for centuries. In many cultures...',
    image: 'https://medexer.com.ng/wp-content/uploads/2025/07/3-1024x819.jpg',
    sections: [
      { type: 'h2', text: 'Fruit Series (13) - Feijoa' },
      { type: 'h2', text: 'Guava Goodness: Small Fruit, Big Impact' },
      { type: 'p', text: "Guava doesn’t need to shout to be powerful. It’s one of those fruits that quietly does it all, refreshing, nourishing, and surprisingly helpful after something as generous as donating blood. If you’ve overlooked guava before, it’s time to give this tropical all-rounder the credit it deserves." },
      { type: 'strong', text: 'Small Fruit, Big Story' },
      { type: 'p', text: 'You’ve probably seen guava at a fruit stand or in a smoothie, but it’s more than just a tropical treat. Native to Central America and now cultivated worldwide, the guava has been a staple of traditional diets for centuries. In many cultures, it’s not just a snack. It’s a go-to for strength and healing. And once you know what’s inside, it’s easy to see why.' },
      { type: 'h3', text: 'What’s Inside Matters' },
      { type: 'p', text: 'Bite into a guava and you’re getting a hit of vitamin C (more than an orange, by the way), plus fiber, potassium, antioxidants, and even a bit of iron. That combination makes it great for your immune system, digestion, and overall energy. And here’s where it gets interesting — these same nutrients are exactly what your body needs after giving blood.' },
      { type: 'strong', text: 'Guava and Blood Donation: A Smart Combo' },
      { type: 'p', text: 'Donating blood is a powerful act, but it also takes a toll on your body. You’ll need to rebuild red blood cells, restore energy, and stay hydrated. Guava helps on all fronts. The vitamin C boosts iron absorption, helping you recover faster. The natural sugars give you a light energy kick without the crash. And it tastes way better than most recovery snacks out there.' },
      { type: 'h3', text: 'Easy Ways to Eat More Guava' },
      { type: 'p', text: 'You don’t need to get fancy. Guava works in all kinds of ways:' },
      { type: 'ul', items: [
        'Slice and snack. Eat it raw, seeds and all (yes, they’re edible).',
        'Blend into a smoothie with banana, ginger, and lime.',
        'Add to a fruit salad with pineapple, watermelon, and a squeeze of lemon.',
        'Make guava tea from the leaves (yes, even the leaves are useful).',
      ] },
      { type: 'strong', text: 'Real Nourishment, Real Impact' },
      { type: 'p', text: 'Guava isn’t a miracle cure. But it is a smart, delicious, and natural way to take care of your body, especially when you’re giving a part of yourself to help others. It’s food that fuels something bigger.' },
      { type: 'p', text: 'So the next time you donate blood or just want to eat with purpose, grab a guava. Quietly powerful. Just like you.' },
    ],
  },
  2: {
    id: 2,
    title: 'Fruit Series (12) - Fiji Apple',
    date: '2025',
    excerpt:
      'Fuji apples are packed with water, aiding in hydration – a critical aspect for blood donors to...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2024/06/app-768x595.jpg',
    sections: [
      { type: 'date', text: '2025' },
      { type: 'p', text: 'Rich in vitamin C, feijoa helps your body absorb iron more efficiently, which is crucial for restoring hemoglobin levels...' },
    ],
  },
  3: {
    id: 3,
    title: 'Fruit Series (10) - (Garden) Egg',
    date: '2025',
    excerpt:
      'From the heart of African cuisines to kitchens worldwide, let’s dive into the world of garden eggs, exploring...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2024/01/gardenegg.jpg',
    sections: [ { type: 'p', text: 'From the heart of African cuisines to kitchens worldwide, let’s dive into the world of garden eggs, exploring...' } ],
  },
  4: {
    id: 4,
    title: 'Fruit Series (7) - Date',
    date: '2025',
    excerpt:
      'Prepare to be amazed at how these little natural sweets can make your donation journey healthier, heartier, and...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/10/date-1024x682.jpg',
    sections: [ { type: 'p', text: 'Prepare to be amazed at how these little natural sweets can make your donation journey healthier, heartier, and...' } ],
  },
  5: {
    id: 5,
    title: 'Champions of Change',
    date: '2025',
    excerpt:
      'The cheers, the goals, the teamwork—it all came to an electrifying conclusion as the Medexer, Gilead Medical Center...',
    readTime: '2 min read',
    author: 'Medexer',
    category: 'News',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/08/IMG-20230815-WA0009-768x766.jpg',
    sections: [ { type: 'p', text: 'The cheers, the goals, the teamwork—it all came to an electrifying conclusion as the Medexer, Gilead Medical Center...' } ],
  },
  6: {
    id: 6,
    title: 'Fruit Series (2) - Avocados',
    date: '2025',
    excerpt:
      'Avocados are a nutrient-rich fruit that has been linked to a number of health benefits, including improved...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/07/avocado.png',
    sections: [ { type: 'p', text: 'Avocados are a nutrient-rich fruit that has been linked to a number of health benefits, including improved...' } ],
  },
  7: {
    id: 7,
    title: 'Fruit Series (13) - Feijoa',
    date: '2025',
    excerpt:
      'Rich in vitamin C, feijoa helps your body absorb iron more efficiently, which is crucial for restoring hemoglobin levels...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2024/08/picc-removebg-preview.png',
    sections: [ { type: 'p', text: 'Fuji apples are packed with water, aiding in hydration – a critical aspect for blood donors to' } ],
  },
  8: {
    id: 8,
    title: 'Fruit Series (9) - Eggplant',
    date: '2025',
    excerpt:
      ' surprise, surprise! This unassuming vegetable has a few tricks up its sleeve that can actually enhance your...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/12/vegetables-4752784_640.jpg',
    sections: [ { type: 'p', text: 'surprise, surprise! This unassuming vegetable has a few tricks up its sleeve that can actually enhance your...' } ],
  },
  9: {
    id: 9,
    title: 'Fruit Series (4) - Black Currant',
    date: '2025',
    excerpt:
      'Blood donation and organ transplantation can sometimes lead to a bit of inflammation, like the aftermath of an epic battle. But...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/08/black-currant.jpg',
    sections: [ { type: 'p', text: 'Blood donation and organ transplantation can sometimes lead to a bit of inflammation, like the aftermath of an epic battle. But...' } ],
  },
  10: {
    id: 10,
    title: 'Fruit Series (6) - Coconut',
    date: '2025',
    excerpt:
      'Get ready to explore how this versatile fruit can make your donation journey healthier, more refreshing...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/09/coconut-1-768x512.jpg',
    sections: [ { type: 'p', text: 'Get ready to explore how this versatile fruit can make your donation journey healthier, more refreshing...' } ],
  },
 
  11: {
    id: 11,
    title: 'Fruit Series (1) - Apples',
    date: '2025',
    excerpt:
      'So, eating an apple before or after donating blood can help to ensure that your body gets the nutrients it needs to replace the blood...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2024/06/appppp.jpg',
    sections: [ { type: 'p', text: 'So, eating an apple before or after donating blood can help to ensure that your body gets the nutrients it needs to replace the blood...' } ],
  },
  12: {
    id: 12,
    title: 'Fruit Series (11) - Figs',
    date: '2025',
    excerpt:
      'Join us on a unique journey as we explore the captivating tale of figs, their sun-kissed origins, and the delightful dishes they inspire...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2024/02/figs-1024x683.jpg',
    sections: [ { type: 'p', text: 'Join us on a unique journey as we explore the captivating tale of figs, their sun-kissed origins, and the delightful dishes they inspire...' } ],
  },
  13: {
    id: 13,
    title: 'Fruit Series (8) - Dacryodes edulis',
    date: '2025',
    excerpt:
      'In the heart of Nigeria, a purple delight known as Dacryodes Edulis, or Ube (also called Elumi), is making waves...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/11/ube2.jpg',
    sections: [ { type: 'p', text: 'In the heart of Nigeria, a purple delight known as Dacryodes Edulis, or Ube (also called Elumi), is making waves...' } ],
  },
  14: {
    id: 14,
    title: 'Fruit Series (5) - Cashews',
    date: '2025',
    excerpt:
      'Don’t let their small size fool you—cashews are packed with nutrients that can make a big difference in your...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/08/Cashew.png',
    sections: [ { type: 'p', text: 'Don’t let their small size fool you—cashews are packed with nutrients that can make a big difference in your...' } ],
  },
  15: {
    id: 15,
    title: 'Fruit Series (3) - Banana',
    date: '2025',
    excerpt:
      'In addition to potassium, bananas also contain vitamin B6, which is essential for the production of red blood cells...',
    readTime: '3 min read',
    author: 'Medexer',
    category: 'Fruit Series',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/08/Untitled-design-768x607.jpg',
    sections: [ { type: 'p', text: 'In addition to potassium, bananas also contain vitamin B6, which is essential for the production of red blood cells...' } ],
  },
  16: {
    id: 16,
    title: 'Grassroot Football Tournament',
    date: '2024',
    excerpt:
      'Medexer is excited to announce its partnership with Gilead Medical Center and Life Bank to co-sponsor...',
    readTime: '2 min read',
    author: 'Medexer',
    category: 'News',
    image: 'https://medexer.com.ng/wp-content/uploads/2023/07/360fc-768x576.jpeg',
    sections: [ { type: 'p', text: 'Medexer is excited to announce its partnership with Gilead Medical Center and Life Bank to co-sponsor...' } ],
  },
};


