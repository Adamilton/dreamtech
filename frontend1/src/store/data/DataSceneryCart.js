const APIURL = 'http://localhost:2000/services/all';

export async function getCategories() {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data)

    return data;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}
getCategories()

export const Data = [
  {
    id: 1,
    img: "images/background_samurai.png",
    title: "Guerreiros Samurais",
    price: "1500",
    details:
      "A Idade Média se estendeu do século V ao século XV.",
    count: 1,
    isInCart: false,
  },

  {
    id: 2,
    img: "images/background_middle_ages.png",
    title: "Idade Média",
    price: "2500",
    details:
      "Entre os séculos 12 e 19, famílias de guerreiros formavam os soldadosde elite do Japão.",
    count: 1,
    isInCart: false,
  },

  {
    id: 3,
    img: "images/background_inverted_dream.png",
    title: "Sonho Invertido",
    price: "3000",
    details:
      "Viva está grande experiência. Onde o mundo será invertido e você terá uma nova perspectiva.",
    count: 1,
    isInCart: false,
  },

  {
    id: 4,
    img: "images/background_delete_memory.png",
    title: "Delete Memórias Indesejadas",
    price: "5000",
    details:
      "Ao voltar a realidade não terá mais está memória indesejada.",
    count: 1,
    isInCart: false,
  },

  {
    id: 5,
    img: "images/gladiadores.jpg",
    title: "Gladiador",
    price: "2000",
    details:
      "O Gladiador era um escravo lutador na Roma Antiga. O termo utilizado para definir os escravos que eram forçados a lutar por suas vidas no antigo Império Romano é proveniente de uma espada que utilizavam em combate, o gládio. Os primeiros registros existentes sobre lutas de gladiadores em Roma são datados de 286 a.C.",
    count: 1,
    isInCart: false,
  },

  {
    id: 6,
    img: "images/caverna.jpg",
    title: "Idade da pedra",
    price: "2300",
    details:
      "Num tempo remoto, o ser humano habitou as cavernas buscando sua proteção num mundo em que predominava a força dos animais gigantes e ferozes, que nos tratavam como presas suculentas. O homem saía dos seus domínios para caçar seus alimentos, e por vezes sucumbia diante da lei do mais forte, perdendo sua vida. Pouco se relacionava com outros de mesma espécie, que vez ou outra se envolvia em disputas.",
    count: 1,
    isInCart: false,
  },

  {
    id: 7,
    img: "images/brasil.jpg",
    title: "Descobrimento do Brasil",
    price: "2800",
    details:
      "O dia 22 de abril de 1500 marcou oficialmente a chegada dos portugueses ao território brasileiro, e esse evento é muito conhecido como “descobrimento do Brasil”. A chegada dos portugueses aqui foi um dos momentos mais marcantes das grandes navegações, realizadas por eles durante todo o século XV. A partir desse acontecimento, a presença portuguesa no território foi constante, embora diminuta no início. A partir da década de 1530, medidas colonizatórias foram implantadas aqui.",
    count: 1,
    isInCart: false,
  },

  {
    id: 8,
    img: "images/bob-marley.jpg",
    title: "Conhecendo Bob Marley",
    price: "4000",
    details:
      "Robert Nesta Marley, mais conhecido como Bob Marley, nasceu em 6 de fevereiro de 1945 em Nine Miles na Jamaica, filho de Norval Sinclair Marley e Cedella Booker. Mudou-se com a mãe e o padrasto Toddy Livingstone para  favela de Kingston.",
    count: 1,
    isInCart: false,
  },
];