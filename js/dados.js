// Gerando uma lista de objetos
const dados = [
    {
        image: "assets/clark-kent.png",
        titulo: "Clark Kent",
        descricao: 'Ao longo da minha vida, busquei um lugar aonde pertenço. A Krypton, meu planeta natal, foi destruída. A Terra, embora seja meu lar adotivo, nunca me senti completamente parte dela. A solidão é uma companheira constante em minha jornada.',
        link: "https://www.imdb.com/title/tt0770828/characters/nm0147147?ref_=tt_cl_c_1",
        tags: "kal kalel kal-el escoteiro superman super super-homem herói heroi último filho krypton"
    },
    {
        image: "assets/lara-lor-van.png",
        titulo: "Lara Lor-Van",
        descricao: 'A maternidade é um instinto universal, independentemente da origem. Sentir o coração de meu filho batendo dentro de mim foi uma experiência indescritível. A dor da separação foi quase insuportável, mas a esperança de um futuro melhor para ele me fortalecia.',
        link: "https://www.imdb.com/title/tt0770828/characters/nm0957909?ref_=tt_cl_c_11",
        tags: "cientista mãe mae"
    },
    {
        image: "assets/jor-el.png",
        titulo: "Jor-El",
        descricao: 'Ao olhar para o céu estrelado, imaginava as infinitas possibilidades que o futuro reservava para meu filho. Sonhava com um dia em que Kal-El se tornaria um símbolo de esperança para toda a humanidade, um farol em meio à escuridão.',
        link: "https://www.imdb.com/title/tt0770828/characters/nm0000128?ref_=tt_cl_c_5",
        tags: "cientista pesquisador explorador pai"
    },
    {
        image: "assets/lois-lane.png",
        titulo: "Lois Lane",
        descricao: "A verdade é minha arma. Como jornalista, busco sempre desvendar os mistérios que cercam o mundo. Quando cruzei o caminho de Clark Kent, senti uma conexão instantânea. Há algo de diferente nele, algo que me intriga e me atrai. Descobrir seus segredos é a maior história que já investiguei.",
        link: "https://www.imdb.com/title/tt0770828/characters/nm0010736?ref_=tt_cl_c_2",
        tags: "jornalista investigativa apaixonada curiosa louise"
    },
    {
        image: "assets/martha-kent.png",
        titulo: "Martha Kent",
        descricao: "Meu filho é um presente do universo. Sua chegada transformou nossas vidas. Acompanhei seu crescimento e vi a pessoa incrível que ele se tornou. Sei que ele fará a diferença no mundo.",
        link: "https://www.imdb.com/title/tt0770828/characters/nm0000178?ref_=tt_cl_c_4",
        tags: "mãe adotiva amorosa protetora marta"
    },
    {
        image: "assets/jonathan-kent.png",
        titulo: "Jonathan Kent",
        descricao: "Clark não é um extraterrestre para mim, mas sim meu filho. Ensinei-lhe os valores da humildade e da justiça. Ele tem o poder de mudar o mundo, mas a escolha é dele. Espero que ele use seus dons para o bem.",
        link: "https://www.imdb.com/title/tt0770828/characters/nm0000126?ref_=tt_cl_c_10",
        tags: "pai adotivo agricultor sábio mentor jhon jonatan"
    },
    {
        image: "assets/general-zod.png",
        titulo: "General Zod",
        descricao: "Krypton era a civilização mais avançada do universo. Sua destruição foi um crime imperdoável. A Terra será reconstruída sob a nossa lei, e aqueles que se opuserem serão eliminados. Kal-El, é um traidor e será punido por sua covardia.",
        link: "https://www.imdb.com/title/tt0770828/characters/nm0788335?ref_=tt_cl_c_3",
        tags: "kryptoniano militar fanático implacável vilão"
    },
    {
        image: "assets/faora-ul.png",
        titulo: "Faora-Ul",
        descricao: "Sou uma guerreira de Krypton. A lealdade ao General Zod é a minha honra. A Terra será nossa e aqueles que se opuserem serão esmagados.",
        link: "https://www.imdb.com/title/tt0770828/characters/nm1662644?ref_=tt_cl_c_6",
        tags: "guerreira kryptoniana leal vilã"
    },
];

const perguntas = [
    {
        pergunta: "Qual o nome do planeta natal do Superman?",
        opcoes: ["Krypton", "Xandar", "Asgard"],
        resposta: "Krypton"
    },
    {
        pergunta: "Com o que as naves kryptonianas são acionadas?",
        opcoes: ["Disco Octagonal", "Chave de comando", "Comando de voz"],
        resposta: "Chave de comando"
    },
    {
        pergunta: "Qual o objetivo de Zod ao chegar à Terra?",
        opcoes: ["Dominar o planeta e transformá-lo em um novo Krypton", "Destruir a Terra para vingar a queda de Krypton", "Encontrar a Fortaleza da Solidão"],
        resposta: "Dominar o planeta e transformá-lo em um novo Krypton"
    },
    {
        pergunta: 'Quem dirigiu "O Homem de Aço"?',
        opcoes: ["Christopher Nolan", "Joss Whedon", "Zack Snyder"],
        resposta: "Zack Snyder"
    },
    {
        pergunta: "Qual o nome do ator que interpreta o protagonista?",
        opcoes: ["Ben Affleck", "Henry Cavill", "Tom Welling"],
        resposta: "Henry Cavill"
    },
    {
        pergunta: "Qual o motivo de Jor-El enviar seu filho, Kal-El, para a Terra?",
        opcoes: ["Para escapar de uma guerra civil em Krypton", "Para salvar a humanidade de uma invasão alienígena", "Para garantir a sobrevivência da espécie kryptoniana"],
        resposta: "Para garantir a sobrevivência da espécie kryptoniana"
    },
    {
        pergunta: "Onde Clark Kent encontra a Fortaleza da Solidão pela primeira vez?",
        opcoes: ["No Polo Sul", "No Himalaia", "No Ártico"],
        resposta: "No Ártico"
    },
    {
        pergunta: "Qual evento desencadeia a chegada de Zod e seus seguidores à Terra?",
        opcoes: ["A ativação de uma nave kryptoniana escondida na Terra", "A descoberta da localização da Fortaleza da Solidão", "Um sinal de socorro enviado por Jor-El"],
        resposta: "A ativação de uma nave kryptoniana escondida na Terra"
    },
    {
        pergunta: "Qual a principal razão pela qual Superman decide se revelar ao mundo?",
        opcoes: ["Para provar sua superioridade aos outros super-heróis", "Para encontrar seu lugar no mundo e fazer a diferença", "Para proteger a humanidade de uma ameaça maior"],
        resposta: "Para proteger a humanidade de uma ameaça maior"
    },
    {
        pergunta: 'Qual o significado do símbolo "S" no peito do uniforme do Superman?',
        opcoes: ['Significa "esperança" em kryptoniano', "Representa a casa de El, a última casa de Krypton.", "É apenas um símbolo aleatório escolhido por Jor-El."],
        resposta: 'Significa "esperança" em kryptoniano'
    },
];