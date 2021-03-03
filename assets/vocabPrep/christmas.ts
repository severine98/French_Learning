type FrenchVocab = {
  wordFrench: string;
  wordEnglish: string;
  sentenceFrench: string;
  sentenceEnglish: string;
};

const vocab: FrenchVocab[] = [
  {
    wordFrench: 'Le Noel',
    wordEnglish: 'Christmas',
    sentenceFrench: "C'est le jour de Noel",
    sentenceEnglish: "It's Christmas day",
  },
  {
    wordFrench: 'Le Cadeau',
    wordEnglish: 'Present',
    sentenceFrench: "J'ai recu un cadeau",
    sentenceEnglish: 'I received a present',
  },
  {
    wordFrench: 'La Dinde',
    wordEnglish: 'Turkey',
    sentenceFrench: 'Vas-tu manger de la dinde le 25?',
    sentenceEnglish: 'Are you going to have some turkey on the 25th?',
  },
  {
    wordFrench: 'Le Sapin de Noel',
    wordEnglish: 'Christmas tree',
    sentenceFrench: 'Nous devons acheter un sapin de noel ',
    sentenceEnglish: 'We need to buy a chritsmas tree',
  },
  {
    wordFrench: 'La Messe',
    wordEnglish: 'Mass',
    sentenceFrench: 'Nous allons a la messe pour Noel',
    sentenceEnglish: 'We are going to mass for christmas',
  },
  {
    wordFrench: 'Le pere Noel',
    wordEnglish: 'Father christmas',
    sentenceFrench: 'Le pere noel passe par la cheminee',
    sentenceEnglish: 'Father chritmas comes though the chimnee',
  },
];

const christmas = {
  noel: {
    id: 'noel',
    translation: 'christmas',
    exampleEnglish: 'Merry christmas',
    exampleFrench: 'Joyeux Noel',
    sentences: [
      {
        French: "Noel est le meilleur jour de l' annee",
        English: 'Chritmas is the best day of the year',
      },
      {French: 'Papa noel, est-il passe?', English: 'Has father xmas come?'},
      {
        French: 'Tu as demander quoi pour Noel?',
        English: 'What did you ask for xmas?',
      },
      {
        French: 'Je te souhaite un joyeux Noel',
        English: 'I am wishing you a merry xmas',
      },
    ],
  },
  cadeau: {
    id: 'cadeau',
    translation: 'present',
    sentenceFrench: 'Je lui offre un cadeau',
    sentenceEnglish: 'I am giving him/her a present',
    sentences: [
      {
        French: 'Tu as recu quoi comme cadeaux cette annee?',
        English: 'What presents have you received this year?',
      },
      {
        French: 'Quel est ton cadeau prefere',
        English: 'Which is your favourite present?',
      },
      {
        French: 'Combien de cadeaux as-tu recu??',
        English: 'How many presents have you received??',
      },
      {
        French: 'Le plus gros de cadeaux',
        English: 'The biggest of presents',
      },
    ],
  },
};
