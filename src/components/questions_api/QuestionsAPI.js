const api = {
  questionsData: [
    {
      id: 1,
      question: "Nina went to the same school __ I did.",
      answers: [
        {
          id: 1,
          answer: "like",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "as",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "then",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "so",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "When Tina was a little girl she used to ___ small glass animals.",
      answers: [
        {
          id: 1,
          answer: "collect",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "pick",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "play",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "choose",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      question: "Please don't forget to ring me when you ___ home.",
      answers: [
        {
          id: 1,
          answer: "get",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "are going to get",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "will get",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "are getting",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      question: "the police are ___ investigation into the robbery.",
      answers: [
        {
          id: 1,
          answer: "working out",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "searching out",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "making out",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "carrying out",
          isCorrect: true,
        },
      ],
    },
    {
      id: 5,
      question: "flona is very angry ___ her sister's decision.",
      answers: [
        {
          id: 1,
          answer: "about",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "for",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "aganist",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "by",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      question: "it's hot in here -- would you mind ____ the window?",
      answers: [
        {
          id: 1,
          answer: "open",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "opened",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "opening",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "to open",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      question: "One of my grandparents ___ born in South Africa.",
      answers: [
        {
          id: 1,
          answer: "was",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "is",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "were",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "are",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      question: "Jack loves working in Tokyo but he can't ___ japanese yet.",
      answers: [
        {
          id: 1,
          answer: "talk",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "tell",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "say",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "speak",
          isCorrect: true,
        },
      ],
    },
    {
      id: 9,
      question: "Would you like to ___ shopping this aftermoon?",
      answers: [
        {
          id: 1,
          answer: "do",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "make",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "get",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "go",
          isCorrect: true,
        },
      ],
    },
    {
      id: 10,
      question: "The teacher asked if ___ to bring our textbooxs to class.",
      answers: [
        {
          id: 1,
          answer: "all we had remembered",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "we had all remembered",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "had all we remembered",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "had we all remembered",
          isCorrect: false,
        },
      ],
    },
    {
      id: 11,
      question: "I must ___ for being so late.",
      answers: [
        {
          id: 1,
          answer: "apologise",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "excuse",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "regret",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "pardon",
          isCorrect: false,
        },
      ],
    },
    {
      id: 12,
      question: "Did you have any problems ___ our house?",
      answers: [
        {
          id: 1,
          answer: "find",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "to find",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "finding",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "fot finding",
          isCorrect: false,
        },
      ],
    },
    {
      id: 13,
      question: "i ___ have arrived in Tokyo by now.",
      answers: [
        {
          id: 1,
          answer: "would",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "will",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "can't",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "was meant to",
          isCorrect: false,
        },
      ],
    },
    {
      id: 14,
      question: "i hope you don't mind ___ joining you.",
      answers: [
        {
          id: 1,
          answer: "my",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "I had been",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "to be",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "that I may",
          isCorrect: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "When sam was a small child he ___ spend hours every day playing with the stones",
      answers: [
        {
          id: 1,
          answer: "should",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "used",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "would",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "was",
          isCorrect: false,
        },
      ],
    },
    {
      id: 16,
      question: "We ___ a lovely three weeks in China last year.",
      answers: [
        {
          id: 1,
          answer: "spent",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "did",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "passed",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "took",
          isCorrect: false,
        },
      ],
    },
    {
      id: 17,
      question:
        "If you do well at school you will have the ___ to go to the university.",
      answers: [
        {
          id: 1,
          answer: "luck",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "change",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "home",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "chance",
          isCorrect: true,
        },
      ],
    },
    {
      id: 18,
      question: "these cars are expensive ___ my car",
      answers: [
        {
          id: 1,
          answer: "than",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "instead of",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "then",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "as",
          isCorrect: false,
        },
      ],
    },
    {
      id: 19,
      question: "I don't understand why _______ me you were so sick.",
      answers: [
        {
          id: 1,
          answer: "didn't you say",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "didn't you tell",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "you didn't say",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "you didn't tell",
          isCorrect: false,
        },
      ],
    },
    {
      id: 20,
      question: "___ is your brother like?",
      answers: [
        {
          id: 1,
          answer: "How",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "Why",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "What",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "Which",
          isCorrect: false,
        },
      ],
    },
  ],
};
export default api;
