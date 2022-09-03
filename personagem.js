function som_rolar_dados() {
    const dado = new Audio('roll_dice.wav');
    dado.play();
}

function som_pegar_dados() {
    const dado = new Audio('get_dice.wav');
    dado.play();
}

function gerar_atributo() {
    return d6() + d6();
}

function d6() {
    const number = Math.random() * 6 + 1;
    return parseInt(number);
}

function d100() {
    const number = Math.random() * 100 + 1;
    return parseInt(number);
}

function traco_de_personalidade() {
    const tracos = [
        'A melhor forma de me forçar a fazer algo é me dizer que eu não consigo.',
        'A primeira coisa que faço num local é notar a localização de coisas valiosas - ou onde poderiam estar escondidas.',
        'Apesar de meu nascimento nobre eu não me boto acima de outras pessoas.Temos todos o mesmo sangue.',
        'Eu abertamente digo o que outras pessoas apenas indicam.',
        'Eu acho que todo mundo que é legal comigo tem intenções malignas.',
        'Eu acredito que se algo vale a pena ser feito, deve ser feito bem.Não há fuga, eu sou um perfeccionista mesmo.',
        'Eu amo um bom insulto, mesmo os voltados contra mim.',
        'Eu como feito um porco, e possuo péssimos hábitos.',
        'Eu confio em minhas habilidades e faço o que posso para instigar confiança nos outros.',
        'Eu conheço uma história relevante para quase toda situação.',
        'Eu consigo simpatizar mesmo com o pior inimigo, tendo empatia para com ele e me esforçando para alcançar paz.',
        'Eu costume me perder em meus pensamentos e contemplação, desatento a minha volta.',
        'Eu cuido de meus amigos como se fosse uma ninhada de filhotes.',
        'Eu demoro pra confiar.Aqueles que parecem os melhores geralmente são os com mais a esconder.',
        'Eu durmo com as costas para uma parede e com tudo o que tenho entre meus braços.',
        'Eu emprego vocábulos prolixos de modo inexato, em diligência de bacorejar - me astuto.',
        'Eu encaro problemas de frente. Uma solução simples e direta é o melhor caminho para o sucesso.',
        'Eu estico a verdade para conseguir uma boa história.',
        'Eu estou acostumado a ajudar aqueles que não são tão espertos quanto eu e explico tudo pacientemente.',
        'Eu estou disposto a ouvir todos os lados de um argumento antes de julgar.',
        'Eu estou sempre calmo, independentemente da situação.Eu nunca ergo minha voz ou deixo minhas emoções me controlarem.',
        'Eu estou trabalhando em uma grande teoria, e amo dividir minhas ideais.',
        'Eu explodo ao menor insulto.',
        'Eu faço muitas perguntas.',
        'Eu favoreço um herói particular, e constantemente falo de seus feitos como exemplo.',
        'Eu fiquei isolado por tempo demais, raramente falando.',
        'Eu flerto abertamente, e amo ser o centro das atenções.',
        'Eu furto qualquer coisa que pode ter algum valor.',
        'Eu gosto de discorrer longamente sobre minha profissão.',
        'Eu gosto de ir a novos lugares e fazer novos amigos em volta de uma garrafa de cerveja.',
        'Eu gosto de ser forte e quebrar coisas.',
        'Eu gosto de ter o que eu quero, quando eu quiser.Eu odeio que me digam não.',
        'Eu gosto de um trabalho bem feito, especialmente se eu puder convencer alguém a fazê - lo.',
        'Eu gosto de usar muitas(ou poucas) roupas e acessórios.',
        'Eu já li livros das maiores bibliotecas do mundo, ou ao menos eu gosto de dizer que o fiz.',
        'Eu julgo as pessoas por suas ações, não suas palavras.',
        'Eu ligo tudo o que ocorre comigo a um grande plano cósmico.',
        'Eu mantenho diversos símbolos sagrados e invoco qualquer deus que for útil no momento.',
        'Eu me apaixono facilmente, e sempre estou atrás de alguém.',
        'Eu me esforço muito para sempre estar no meu melhor e seguir as últimas modas.',
        'Eu me seguro a meu dinheiro e regateio incansavelmente.',
        'Eu me sinto muito mais confortável em volta de animais do que de pessoas.',
        'Eu menciono(ou menciono errado) textos sagrados constantemente.',
        'Eu minto sobre quase tudo, mesmo quando não há boa razão para tal.',
        'Eu mudo de humor ou de ideia tão rápido quanto mudo de roupas.',
        'Eu não dou valor a pessoas ricas ou elegantes; dinheiro e boas maneiras não vão lhe salvar de uma fera faminta.',
        'Eu não entendo de etiqueta e expectativas sociais.',
        'Eu não gosto de sujar minhas mãos, e não serei pego em acomodações impróprias.',
        'Eu não gosto de tomar banho.',
        'Eu não presto atenção aos riscos de uma situação.Nunca me diga as chances.',
        'Eu nunca digo não a uma aposta amistosa.',
        'Eu perdi amigos demais, e demoro para criar novos.',
        'Eu permaneço alegre e otimista, como se meu coração fosse feito de ouro.',
        'Eu preferiria fazer um novo amigo a um novo inimigo.',
        'Eu sempre estou pegando coisas, mexendo com elas e as vezes as quebrando.',
        'Eu sempre quero saber como as coisas e pessoas funcionam.',
        'Eu sempre tenho um plano para quando as coisas derem errado.',
        'Eu sinto uma simpatia tremenda por todos os sofredores.',
        'Eu sou amargo por causa de experiências ruins, o que falo soa sarcástico ou cínico.',
        'Eu sou bem conhecido pelo meu trabalho e gosto de saber que as pessoas gostam dele.Eu fico abalado quando pessoas não ouviram falar de mim.',
        'Eu sou cheio de aforismos e tenho um provérbio para cada ocasião.',
        'Eu sou cuidadoso, com medo de ser traído ou atacado.',
        'Eu sou movido por uma natureza aventureira que me levou para longe de casa.',
        'Eu sou perseguido pode memórias da guerra, e não consigo tirar as imagens de violência de minha cabeça.',
        'Eu sou quieto, sempre ouvindo e prestando atenção aos meus arredores.',
        'Eu sou repleto de contos inspiradores ou de cautela sobre quase toda situação de combate.',
        'Eu sou rude com pessoas que não tem minha dedicação a trabalho duro.',
        'Eu sou sempre educado e respeitoso.',
        'Eu sou terrivelmente sem jeito em situações sociais.',
        'Eu sou tolerante(ou intolerante) com outras religiões, e respeito(ou condeno) o louvor de outros deuses.',
        'Eu sou um camaleão, mudando minha personalidade conforme a situação exige.',
        'Eu sou um esnobe que menospreza quem não sabe apreciar boa arte.',
        'Eu sou um jogador nato que não consegue resistir a correr um risco para o potencial de pagamento.',
        'Eu sou um romântico incurável, sempre procurando por aquele “alguém especial”.',
        'Eu tenho uma lição para cada situação, tiradas de observação da natureza.',
        'Eu tenho uma noção forte de fair play e sempre tento achar um meio termo em discussões.',
        'Eu tenho uma piada para cada ocasião, especialmente onde humor é inapropriado.',
        'Eu tive boa comida, bebida e companhia entre a elite antes. Vida simples me afeta.',
        'Eu trabalho muito para poder me divertir ainda mais quando o trabalho terminar.',
        'Eu utilizo expressões polissilábicas que insinuam uma impressão de evidentemente vasta erudição.',
        'Eu vejo sinais em todo evento e ação.Os deuses tentam falar conosco, nós apenas precisamos ouvir.',
        'Eu… preciso… falar… lentamente… quando...falando...com...idiotas...o que é...quase...todo mundo...comparado...comigo.',
        'Independente da situação eu mantenho um ar de graça e classe, e sempre sou cuidadoso com meus modos.',
        'Meu apoio uma vez perdido, é perdido para sempre.',
        'Meu palavreado é tão sujo quanto um galinheiro.',
        'Meus amigos sabem que podem confiar em mim.',
        'Minha bajulação eloquente faz com que qualquer pessoa com quem converso se sinta a mais importante do mundo.',
        'Na verdade eu fui realmente criado por lobos.',
        'Não há nada que eu goste mais do que um bom mistério.',
        'Ninguém fica bravo perto de mim por muito tempo, pois eu sempre consigo acalmar ânimos.',
        'O líder de minha comunidade tinha algo sábio a dizer sobre todo tópico, e eu me esforço em dividir essa sabedoria.',
        'O povo comum me ama por minha bondade e generosidade.',
        'Para mim uma briga de taverna é uma boa forma de conhecer uma nova cidade.',
        'Pela minha aparência elegante ninguém pode duvidar que estou acima das massas sujas.',
        'Pensar é para os outros.Eu prefiro ação.',
        'Quando eu me foco em algo eu vou até o fim, independente do que esteja no caminho.',
        'Sarcasmo e insultos são minha arma de escolha.',
        'Se alguém está com problemas, eu sempre estou pronto para ajudar.',
        'Se você me ferir eu irei esmagar você, arruinar seu nome e salgar seus campos.',
        'Sempre que eu chego num lugar novo eu coleto rumores e espalho fofocas.',
    ];

    return tracos[Math.floor((Math.random() * tracos.length))];
}

function ideais() {
    const ideais = [
        'Adaptação: A vida é como as estações, em constante mudança, e nós precisamos nos adaptar.',
        'Ajuda: Eu sempre tento ajudar os necessitados, custe o que custar.',
        'Altruísmo: Meus dons são para ser divididos com todos, não para serem usados em meu benefício.',
        'Amizade: Bens materiais vêm a vão. Elos de amizade ficam para sempre.',
        'Anarquismo: Todo mundo deve ser livre para escolher sua vida.',
        'Aprimoramento: Eu trabalho duro para ser o melhor que há em minha profissão.',
        'Aspiração: Eu vou provar que sou digno de uma vida melhor e de fazer meu destino.',
        'Autoconhecimento: Se você conhece a si, não há mais nada para conhecer.',
        'Beleza: O que é belo nos aponta para o que é verdadeiro.',
        'Bem dos Meus: É o dever de todos trazerem a maior quantidade de felicidade para os seus.',
        'Bem Maior: Nosso dever é dar nossas vidas em defesa dos outros.',
        'Camaradagem: Eu trato com honra meus parceiros de profissão.',
        'Caridade: Eu distribuo o dinheiro que consigo a quem precisa.',
        'Civilidade: É o dever de todo povo civilizado a reforçar os elos de comunidade e segurança da civilização.',
        'Companheirismo: Eu sou dedicado às pessoas com quem me importo, não a ideais.',
        'Comunidade: Nós temos que cuidar uns dos outros, por que ninguém mais vai fazê-lo.',
        'Conhecimento: O caminho para o poder e melhoria pessoal é através de conhecimento.',
        'Crescimento: Eu anseio um dia chegar ao topo da hierarquia.',
        'Criatividade: Eu nunca repito uma ideia duas vezes.',
        'Destino: Nada pode evitar que eu encontre meu destino.',
        'Devoção: Eu tento me provar digno de meu deus ao basear minhas ações em seus ensinamentos.',
        'Dinheiro: Existem coisas que eu não farei por dinheiro, mas não muitas.',
        'Equivalência: Ninguém deveria ser tratado preferencialmente pela lei, e ninguém está acima dela.',
        'Eremitismo: Solidão e contemplação são caminhos para o poder.',
        'Família: Sangue é mais grosso que água.',
        'Fé: Eu confio que minha divindade irá guiar minhas ações. Se eu me esforçar, tudo ocorrerá bem.',
        'Ferocidade: Eu sou um predador, e os outros são minhas presas.',
        'Ganância: Eu roubo dos ricos para dar a mim mesmo.',
        'Generosidade: Meus talentos foram dados a mim para que eu os use em benefício do mundo.',
        'Glória: Eu devo alcançar glória, para mim e para os meus.',
        'Honestidade: Nossas ações devem vir de dentro e refletir quem nós realmente somos.',
        'Honra: Honra em todas as coisas.',
        'Igualdade: Todas as pessoas, ricas ou pobres, merecem ser tratadas igual.',
        'Iluminação: Conhecimento é o caminho para o poder.',
        'Independência: Eu sou um espírito livre. Ninguém me diz o que fazer.',
        'Inovação: O mundo precisa de novos ideais e ações.',
        'Justiça: Eu sou justo com os inferiores a mim.',
        'Lei: Eu faço o que preciso, e obedeço a autoridade justa.',
        'Lendas: As histórias, lendas e canções do passado não devem ser esquecidas nunca, pois nos ensinam quem somos.',
        'Liberdade: Pessoas seguindo ordens cegamente abraçam um tipo de tirania.',
        'Libertação: Correntes foram feitas para serem quebradas, bem como quem as forjou.',
        'Lógica: Emoções não devem nublar nossas noções de certo e errado ou nosso pensamento lógico.',
        'Mais Forte: Tanto na guerra quanto na vida o mais forte vence.',
        'Melhoramento Pessoal: O objetivo da vida é melhorar a si mesmo.',
        'Moral: O que é certo é certo.',
        'Mudança: Os pequenos são erguidos e os grandes caem. Mudança é a natureza das coisas.',
        'Nação: Minha cidade, nação ou povo são tudo o que importa.',
        'Não se Envolver: Se meter nos assuntos dos outros só causa problemas.',
        'Natureza: O mundo natural é mais forte do que todos os construtos da civilização.',
        'Nobreza: Respeito me é devido por causa de minha posição, mas todo mundo merece ser tratado com dignidade.',
        'Número Um: Eu só me preocupo comigo mesmo.',
        'Obrigação: É meu dever cuidar e proteger aqueles abaixo de mim.',
        'Pensamento Livre: Questionamento e curiosidade são os pilares do progresso.',
        'Pessoas: Eu ajudo as pessoas que me ajudam, é isso que nos mantém vivo.',
        'Poder: Se eu conseguir mais poder, ninguém vai me dizer o que fazer.',
        'Prazer: Encontre alegria na vida sempre que puder, com quem puder.',
        'Predador: Se eu me tornar forte poderei tomar o que eu quiser.',
        'Profissionalismo: Você deve respeitar seus acordos e cumprir o que foi pago para fazer.',
        'Recompensa: Eu só estou nessa pela fama e dinheiro.',
        'Redenção: Eu sou determinado a me tornar alguém melhor.',
        'Redenção: Há uma fagulha de bem em todo mundo.',
        'Respeito: As pessoas merecem ser tratadas com dignidade e respeito.',
        'Responsabilidade: É meu dever respeitar a autoridade daqueles acima de mim, bem como os abaixo devem me respeitar.',
        'Retribuição: Os ricos tem que ser mostrados como é a vida e morte nas regiões pobres.',
        'Revolução: Tiranos não podem ser permitidos a oprimir o povo.',
        'Segredos: Conhecer os segredos de alguém me dá poder sobre ele.',
        'Sem Limites: Nada deve parar as possibilidades infinitas da existência.',
        'Sinceridade: Não há razão em fingir ser algo que não sou.',
        'Tirania: Os mais fortes devem governar.',
        'Tradição: As antigas tradições devem ser preservadas e seguidas.',
        'Viva e Deixe Viver: Não vale a pena matar ou guerrear por ideais.',
    ];

    return ideais[Math.floor((Math.random() * ideais.length))];
}

function vinculos() {
    const vinculos = [
        'A aliança de minha família com outra deve ser sustentada a todo custo.',
        'O local onde aprendi minha profissão é o lugar mais importante do mundo pra mim.',
        'Algo importante foi tomado de mim e eu busco pegá-lo de volta.',
        'Alguém que eu amava morreu por causa de um erro que cometi. Isso nunca vai acontecer de novo.',
        'Alguém roubou algo precioso para mim, e um dia eu vou recuperá-lo.',
        'Alguém salvou minha vida no campo de batalha. Até hoje eu nunca deixarei um amigo para trás.',
        'Aqueles que lutam ao meu lado são aqueles dignos de morrer por.',
        'É meu dever proteger meus estudantes.',
        'É meu dever providenciar crianças para sustentar meu povo ou família.',
        'Em algum lugar eu tenho um filho que não me conhece. Eu estou fazendo isso por ele.',
        'Em um local eu tenho um amor cujos olhos quase me roubaram da aventura.',
        'Eu ainda busco a iluminação que procurei no afastamento.',
        'Eu arei a terra, eu amo a terra, e irei proteger a terra.',
        'Eu busco riqueza para conseguir o amor de alguém.',
        'Eu criei um grande trabalho para alguém, e então descobri que ela não era digno dele. Ainda estou procurando alguém digno.',
        'Eu daria minha vida pelas pessoas com quem lutei.',
        'Eu devo minha sobrevivência a outra criança de rua que me ensinou a viver nas ruas.',
        'Eu devo minha vida ao sacerdote que cuidou de mim quando meus pais morreram.',
        'Eu devo muito à minha guilda por me forjar em quem sou hoje.',
        'Eu devo tudo a meu mentor.',
        'Eu devo um valor significante a meu chefe.',
        'Eu enganei a pessoa errada e preciso ter certeza que ele nunca cruze meu caminho ou das pessoas com quem me importo.',
        'Eu enganei e arruinei uma pessoa que não merecia. Eu me esforço em redimir meus erros, mas acho que nunca me perdoarei.',
        'Eu escapei de minha vida de pobreza ao roubar alguém importante, e agora eu sou procurado por isso.',
        'Eu estou apaixonado pelo herdeiro e uma família que odeia a minha.',
        'Eu estou tentando pagar uma dívida que devo a um benfeitor generoso.',
        'Eu farei de tudo para proteger o templo em que servi.',
        'Eu faria de tudo pelos membros da minha vida anterior.',
        'Eu fui roubado de minha parte justa nos lucros, e pretendo conseguir o que é meu.',
        'Eu irei encarar qualquer desafio para receber aprovação de minha família.',
        'Eu luto por aqueles que não podem lutar.',
        'Eu me afastei para me esconder dos que me caçavam.Um dia terei que enfrentá - los.',
        'Eu me afastei por que amava alguém que não podia ter.',
        'Eu me esforço para preservar uma biblioteca, universidade ou monastério.',
        'Eu morreria para recuperar um artefato de minha fé perdido há muito tempo.',
        'Eu nunca esquecerei uma derrota esmagadora que minha companhia sofreu, nem os inimigos que a fizeram.',
        'Eu protejo a identidade e segredos de meus clientes.',
        'Eu protejo aqueles que não podem se proteger.',
        'Eu protejo um orfanato para evitar que outros sejam forçados a passar pelo que passei.',
        'Eu queria que meu amor de infância tivesse vindo comigo atrás de meu destino.',
        'Eu quero ser famoso, custe o que custar.',
        'Eu sofro terríveis visões de desastres por vir, e farei de tudo para evitá-los.',
        'Eu sou culpado de um crime terrível.Eu espero que possa me redimir.',
        'Eu sou leal a meu líder primeiro, tudo o mais vem em segundo.',
        'Eu sou o ultimo de meu povo, e devo garantir que seu nome vire lenda.',
        'Eu tenho procurado minha vida toda a resposta para uma certa questão.',
        'Eu tenho um texto antigo com conhecimentos secretos que não devem cair em mãos erradas.',
        'Eu tenho uma dívida que não tenho como pagar para com a pessoa que teve piedade de mim.',
        'Eu tenho uma família que trabalho para ajudar.',
        'Eu tenho uma família, mas não faço ideia de onde esteja.Eu espero vê-la de novo um dia.',
        'Eu tento proteger um texto sagrado que meus inimigos consideram herege e tentam destruir.',
        'Eu trarei ira terrível sobre os destruidores de minha terra natal.',
        'Eu valorizo um herói de eras passadas e meço meus feitos contra os dele.',
        'Eu vendi minha alma por conhecimento.Eu espero fazer grandes feitos e recuperá - la.',
        'Eu venho de uma família nobre, e um dia vou recuperar minhas terras e títulos daqueles que os tiraram de mim.',
        'Eu vou conseguir vingança contra as forces que destruíram minha vida anterior.',
        'Eu vou fazer de tudo para me provar superior a meu odiado rival.',
        'Eu vou me tornar o maior que já existiu no que faço.',
        'Eu vou sempre me lembrar de meu primeiro navio.',
        'Tenho uma posse estimada, que me lembra de alguém que eu amo.',
        'Meu isolamento me trouxe grande conhecimento sobre um grande mal que apenas eu posso destruir.',
        'Meus ganhos vão para minha família.',
        'Minha cidade é meu lar, e eu irei lutar para defendê - la.',
        'Minha família, clã ou tribo é a coisa mais importante em minha vida, mesmo que estejam longe de mim.',
        'Minha honra é minha vida.',
        'Minha lealdade ao soberano é infalível.',
        'Minha reputação determina meu valor, e precisa ser mantida.',
        'Minhas ferramentas são símbolos de minha vida passada, e eu os carrego para que eu nunca esqueça minhas raízes.',
        'Nada é mais importante do que membros de minha cabala, ordem ou associação.',
        'Nada é mais importante do que os outros membros de minha família.',
        'Ninguém deveria ter que passar pelas dificuldades que passei.',
        'O dever é a coisa mais importante - companheiros vêm e vão.',
        'O povo comum deve me ver como um herói do povo.',
        'O trabalho de minha vida é uma série de tomos relacionados a um campo específico.',
        'Bandidos mataram os meus e me deixaram para morrer.Eu terei minha vingança.',
        'Se minha descoberta for revelada pode trazer ruína ao mundo.',
        'Todas as pessoas da minha vila são meus irmãos e irmãs, e eu preciso defendê - los.',
        'Tudo o que eu faço é pelo povo comum.',
        'Um dia irei conseguir vingança contra a hierarquia corrupta que me declarou um herege.',
        'Um dia vou retornar à minha guilda e provar que sou o melhor artista de todos eles.',
        'Um ferimento no ermo de meu lar é um ferimento em mim.',
        'Um nobre orgulhoso uma vez me surrou, e por causa disso eu vou me vingar em todos os fortões que encontrar.',
        'Uma casa de prazeres um dia foi meu lar, e eu irei protegê - lo com minha vida.',
        'Uma pessoa poderosa matou alguém que eu amava.Em breve terei minha vingança.'
    ];

    return vinculos[Math.floor((Math.random() * vinculos.length))];
}

function defeitos() {
    const defeitos = [
        'Ganância: Descobrir um segredo antigo vale o preço de uma civilização.',
        'Ganância: Eu farei qualquer coisa para por minhas mãos em algo raro ou sem preço.',
        'Ganância: Eu farei qualquer coisa para subir na vida.',
        'Ganância: Eu julgo as pessoas pelo o que elas podem fazer por mim.',
        'Ganância: Eu mataria por um título de nobreza.',
        'Ganância: Eu não resisto a golpear pessoas mais poderosas do que eu.',
        'Ganância: Eu nunca estou satisfeito com o que tenho, sempre quero mais.',
        'Ganância: Eu sou facilmente distraído pela promessa de informação.',
        'Ganância: Não é roubo se eu preciso mais do que a pessoa.',
        'GGanância: Não há espaço para cautela em uma vivida ao máximo.',
        'Ganância: Uma vez que eu escolha um objetivo eu me obceco nele em exclusão a tudo o mais na minha vida.',
        'Ira: Eu deixo minha necessidade de vencer argumentos superar amizades e harmonia.',
        'Ira: Eu me lembro de cada insulto sofrido e tenho um rancor silencioso em relação a quem me causou mal.',
        'Ira: Eu não consigo esquecer o passado e reajo mal ao que me lembra de minha antiga vida.',
        'Ira: Eu sou inflexível.',
        'Ira: Eu tenho pensamentos ruins que não consigo afogar.',
        'Ira: Eu tenho pouco respeito por quem não é um bom guerreiro.',
        'Ira: Eu vejo insultos e ameaçada veladas em tudo que me é dito, e me irrito fácil.',
        'Ira: Eu vim de um lar desestruturado, e odeio ser lembrado disso.',
        'Ira: Meu ódio por meus inimigos é cego.',
        'Ira: Um inimigo monstruoso que enfrentei em campo ainda me faz tremer.',
        'Ira: Violência é minha resposta para quase todo desafio.',
        'Luxúria: Eu adoro um rosto bonito, e só dou espaço e atenção à gente bonita.',
        'Luxúria: Eu aproveito um certo prazer do mundo um pouco demais.',
        'Luxúria: Eu costumo trazer vergonha a minha família através de minhas palavras e ações.',
        'Luxúria: Eu estou lutando contra o vício de uma substância ilícita, com sucesso variado.',
        'Luxúria: Eu farei qualquer coisa por fama e renome.',
        'Luxúria: Eu não resisto a um flerte.',
        'Luxúria: Eu sempre estou devendo. Eu gasto meus ganhos mais rápido do que os obtenho.',
        'Luxúria: Eu tenho dificuldade em esconder minhas intenções verdadeiras. Minha língua afiada me causa problemas.',
        'Luxúria: Eu tenho um desejo insaciável por prazeres carnais.',
        'Luxúria: Um escândalo me proíbe de voltar para casa. Esse tipo de problema parece me seguir.',
        'Luxúria: Uma vez eu provoquei um nobre que ainda quer minha cabeça. Foi um erro que provavelmente vai se repetir.',
        'Orgulho: Em acredito que as coisas seriam melhores se eu fosse o tirano.',
        'Orgulho: Eu cometi um engano terrível, e eu faria de tudo para mantê-lo em segredo.',
        'Orgulho: Eu estou convencido de que ninguém pode me enganar do jeito que engano os outros.',
        'Orgulho: Eu estou convencido do significado do meu destino, e cego para as chances de falha.',
        'Orgulho: Eu ignoro soluções simples e favoreço as complexas.',
        'Orgulho: Eu julgo os outros de forma muita dura, e eu ainda mais severamente.',
        'Orgulho: Eu preferiria comer minha armadura a admitir que estou errado.',
        'Orgulho: Eu secretamente acredito que todos estão abaixo de mim.',
        'Orgulho: Eu sou dogmático em meus pensamentos e filosofia.',
        'Orgulho: Não espere que eu salve quem não consegue se salvar; é o certo que os fortes vivam e os fracos pereçam.',
        'Orgulho: Uma vez que alguém questiona minha coragem eu não volto atrás, não importa quão perigoso.',
        'Preguiça: Eu confio demais naqueles que possuem poder dentro da hierarquia.',
        'Preguiça: Eu direi qualquer coisa para evitar trabalho extra.',
        'Preguiça: Eu não acredito mais em amor.',
        'Preguiça: Eu não conseguiria manter um segredo nem que minha vida, ou de alguém, dependesse disso.',
        'Preguiça: Eu obedeço a lei, mesmo que ela cause miséria.',
        'Preguiça: Eu preferiria matar alguém dormindo a encarar uma luta justa.',
        'Preguiça: Eu sigo os planos, sem nunca questionar.',
        'Preguiça: Eu suspeito de estranhos e espero o pior deles.',
        'Preguiça: Eu tenho dificuldade em confiar nos meus aliados.',
        'Preguiça: Se tem um plano, eu vou esquecê-lo. Se eu não esquecer, eu vou ignorá-lo.',
        'Preguiça: Uma pessoa inocente está na prisão por causa de algo que eu fiz. Eu não tenho problema com isso.',
    ];

    return defeitos[Math.floor((Math.random() * defeitos.length))];
}

function antecedentes() {
    const antecedentes = [
        'Artesão: O personagem foi treinado em alguma profissão ou oficio, como padeiro, forjador, carpinteiro ou moleiro? Qual era essa profissão? Ele apreciava seu trabalho ou era apenas um meio de subsistência? Qual foi sua maior criação e o que aconteceu com ela? Ele ainda trabalha como tal?',
        'Criminoso: O personagem viveu "do outro lado da lei". Que tipo de crimes ele cometeu? Ele entrou na vida de crimes por necessidade ou por escolha? Ele fazia parte de uma gangue ou quadrilha? Ele ainda participa de golpes ocasionais ou deixou essa vida para trás? Se deixou, o que fez com ele abandonasse a vida de crimes? Ele ainda mantém contato com o submundo do crime? Seus antigos parceiros agora o consideram como inimigo? ',
        'Erudito: A vida do personagem girava em torno do conhecimento. Em que área de erudição ele se especializou? Era um professor ou um escriba, um arquiteto ou astrólogo, um advogado ou sábio? Outros respeitavam suas teorias ou as desprezavam? Ele ainda tenta aprender e ensinar ou desistiu da vida acadêmica por uma de aventureiro?',
        'Fazendeiro: O personagem trabalhava numa fazenda, aprendendo com o mundo natural. Ele possuía gado, cultivava safras ou ambos? Sua fazenda era especializada? A fazenda era de sua família ou ele era contratado? Ele sente falta dessa vida ou sempre desejou escapar dessa rotina árdua?',
        'Marinheiro: O personagem trabalhou a bordo de uma embarcação. Era um barco de rio ou um navio? Ele auxiliava o tombadilho, era um piloto, navegador ou um oficial graduado? Com que frequência ele viajava? Para onde ia? A navegação era mercante, um transportador ou um barco pirata?',
        'Mercador: O personagem participava na compra e venda de produtos. Quais produtos ele negociava? Era um mercador honesto ou tirava vantagem de seus clientes e consumidores? Sua família era dona do negócio ou ele trabalhava para alguém? Ele costumava viajar ou trabalhava em algum local fixo, como uma taverna ou loja?',
        'Militar: O personagem serviu numa organização militar, como um exército ou guarda da cidade. Ele foi alistado ou era voluntário? Qual sua patente? Como deixou o serviço? Se ainda não deixou, descreva as circunstâncias sob as quais ele ainda serve como militar ao mesmo tempo em que atua como aventureiro.',
        'Caçador: O personagem vive da caça de animais selvagens. Ele consome aquilo que caça ou vende a carne para o taberneiro e o couro para o artesão? Porque ele resolveu se tornar um caçador? Ele retira o necessário da natureza ou sempre explora dela o que pode para ganhar mais lucro?',
        'Caçador Urbano: Mesmo antes de ser aventureiro, sua vida era repleta de conflito, por que você capturava pessoas em troca de pagamento, especialmente em um ambiente urbano. De pegador de ladrões à "máscara de veludo" que caça bandidos de alta classe, você sabe como encontrar sua presa.',
    ];

    return antecedentes[Math.floor((Math.random() * antecedentes.length))];
}

function arquetipos() {
    const arquetipos = [
        'Bruto',
        'Cético',
        'Filósofo',
        'Generoso',
        'Hedonista',
        'Idealista',
        'Imaturo',
        'Independente',
        'Jogador',
        'Líder',
        'Malandro',
        'Misterioso',
        'Místico',
        'Político',
        'Revoltado',
        'Romântico',
        'Princesa',
        'Puro',
        'Racional',
        'Sedutor',
        'Seguidor',
        'Selvagem',
        'Sofredor',
        'Teatral',
        'Vingativo',
    ];

    return arquetipos[Math.floor((Math.random() * arquetipos.length))];
}

function racas() {
    const racas = [
        'Android',
        'Anão',
        'Elfo',
        'Faunos',
        'Kobold',
        'Drow',
        'Gem',
        'Humanos',
        'Halfling',
        'Orc',
        'Selvagens',
    ];

    return racas[Math.floor((Math.random() * racas.length))];
}

function profissao() {
    const profissoes = [
        'Aventureiro',
        'Bardo',
        'Guerreiro',
        'Ladino',
        'Sábio',
        'Mecânico',
        'Druida',
        'Trapaceiro',
        'Patrulheiro',
    ];

    return profissoes[Math.floor((Math.random() * profissoes.length))];
}

function habilidades() {
    const passivas = [
        'Acerto Automático (P)',
        'Adaga Sorrateira (P)',
        'Alvo Marcado (P)',
        'Ambidestria (P)',
        'Aprender Ponto Fraco (P)',
        'Armas Improvisadas (P)',
        'Arremesso de Segurança (P)',
        'Combate em Equipe (P)',
        'Coragem de Batalha (P)',
        'Couraça (P)',
        'Duro de Ferir (P)',
        'Equilíbrio Perfeito (P)',
        'Inimigo Favorito (P)',
        'Intimidação em Combate (P)',
        'Liderança em Combate (P)',
        'Lutar às Cegas (P)',
        'Lutar Caído (P)',
        'Mãos Leves (P)',
        'Mira Perfeita (P)',
        'Momento Crítico (P)',
        'Perito em Arremesso(P)',
        'Recarregamento Rápido(P)',
        'Ser Sombra(P)',
        'Sintonia(P)',
        'Tática de Combate(P)',
    ];

    const ativas = [
        'Afastar (A)',
        'Alvo Trocado (A)',
        'Ataque Duplo (A)',
        'Ataque Surpreso (A)',
        'Ataque Total (A)',
        'Ato de Desespero (A)',
        'Bloqueio Extra (A)',
        'Combate Defensivo (A)',
        'Combate Tático (A)',
        'Contra Ataque (A)',
        'Desarmar (A)',
        'Dilacerar (A)',
        'Fuga (A)',
        'Fúria corporal (A)',
        'Golpe Cruel (A)',
        'Golpe Duro (A)',
        'Golpe Giratório (A)',
        'Golpe Improvisado (A)',
        'Golpes Rápidos (A)',
        'Grito de Guerra (A)',
        'Guarda Costas (A)',
        'Iniciativa em Combate (A)',
        'Insistência (A)',
        'Mestre em Arremesso (A)',
        'Movimentos Rápidos (A)',
        'Otimista (A)',
        'Posição de Combate(A)',
        'Prodígio com[Arma](A)',
        'Quebrar Defesa(A)',
        'Raspão(A)',
        'Reação de Defesa(A)',
        'Saque Rápido(A)',
        'Soco Potente(A)',
        'Socorro em Combate(A)',
        'Sucesso Extra(A)',
    ];

    let tem_passsiva = d6();
    tem_passsiva = tem_passsiva <= 3;

    let habilidade_1;
    let habilidade_2;
    let habilidade_3;

    habilidade_1 = ativas[Math.floor((Math.random() * ativas.length))];
    habilidade_2 = ativas[Math.floor((Math.random() * ativas.length))];

    if (tem_passsiva) {
        habilidade_3 = passivas[Math.floor((Math.random() * passivas.length))];
    } else {
        habilidade_3 = ativas[Math.floor((Math.random() * ativas.length))];
    }

    return habilidade_1 + ', ' + habilidade_2 + ', ' + habilidade_3 + '.';
}

function pericias() {
    let lista_de_pericias = [];

    const percias = [
        'Arquitetura (CIE)',
        'Avaliação de objetos (CIE)',
        'Cartografia (CIE)',
        'Conhecimento de veneno (CIE)',
        'Conhecimento histórico(CIE)',
        'Conhecimento militar(CIE)',
        'Conhecimento musical(CIE)',
        'Conhecimento natural(CIE)',
        'Conhecimento religioso(CIE)',
        'Criptografia(CIE)',
        'Cultura Popular(CIE)',
        'Cuidados Médicos(CIE)',
        'Sobrevivência(CIE)',
        'Engenharia(CIE)',
        'Falar Linguagem(CIE)',
        'Falsificação(CIE)',
        'Mensagem Secreta(CIE)',
        'Decifrar Escrita(CIE)',
        'Escrita(CIE)',
        'Navegação(CIE)',
        'Pesquisa(CIE)',
        'Condução(CIE)',
        'Ofícios(CIE)',
        'Armas de Fogo (DES)',
        'Acrobacia (DES)',
        'Artesanato (DES)',
        'Arrombamento (DES)',
        'Arremessar (DES)',
        'Briga (DES)',
        'Caligrafia (DES)',
        'Cavalgar (DES)',
        'Furtividade (DES)',
        'Iniciativa (DES)',
        'Mecânica (DES)',
        'Prestidigitação (DES)',
        'Escapismo (DES)',
        'Camuflagem (DES)',
        'Barganha (SOC)',
        'Disfarce (SOC)',
        'Enganação (SOC)',
        'Etiqueta (SOC)',
        'Investigação (SOC)',
        'Jogatina (SOC)',
        'Liderança (SOC)',
        'Performance (SOC)',
        'Persuasão (SOC)',
        'Sedução (SOC)',
        'Audição (SOC)',
        'Empatia (SOC)',
        'Olfato (SOC)',
        'Procurar (SOC)',
        'Rastrear (SOC)',
        'Sentir Motivação (SOC)',
        'Diplomacia (SOC)',
        'Corrida (VIG)',
        'Natação (VIG)',
        'Remo (VIG)',
    ];

    for (let i = 0; i < 10; i++) {
        let p = percias[Math.floor((Math.random() * percias.length))];
        lista_de_pericias.push(p);
    }

    return lista_de_pericias;
}

function gerar_nome() {
    const comeco = [
        'A', 'Aki', 'Ga', 'Lu', 'Fa', 'Ana', 'Ani', 'Ba', 'Be', 'Bra',
        'Ca', 'Ki', 'Da', 'De', 'Do', 'Eki', 'Eri', 'Ele', 'Elo', 'Fe',
        'Fi', 'Fo', 'Gla', 'Jo', 'Jan', 'Ba', 'Te', 'Og', 'Bre', 'She',
        'Ta', 'To', 'Ti', 'Tri', 'Tra', 'Ur', 'Va', 'Vla', 'Vo', 'Ana',
        'Ori', 'Felia', 'Go', 'Ero', 'Taru', 'Koli', 'Mate', 'Sali', 'Tu', 'Pa',
        'Lo', 'Le', 'Ma', 'Me', 'Mi', 'Na', 'Ne', 'O', 'Ol', 'Pa',
        'Pe', 'Po', 'Qua', 'Ra', 'Re', 'Ri', 'Ro', 'Ru', 'Sa', 'Se',
        'Si', 'So', 'Su', 'Ska', 'Sha', 'Seti', 'Lui', 'Zan', 'Baka', 'Yule',
        'Jan', 'Ye', 'Ya', 'Kra', 'Sko', 'Bu', 'Bea', 'Pa', 'Jani', 'Aku',
        'Dane', 'Dene', 'Rane', 'Rina', 'Pari', 'Bava', 'Me', 'Oro', 'Zi', 'Zo',
    ];

    const meio = [
        'las', 'su', 'uri', 'ci', 'da', 'de', 'di', 'do', 'du', 'ca',
        'li', 'ci', 'ta', 'to', 'te', 'fa', 'fe', 'fi', 'fo', 'ga',
        'gue', 'ta', 'bran', 'gord', 'lord', 'ku', 'na', 'ma', 'te', 'ni',
        'ka', 'van', 'ri', 'man', 'ju', 'ra', 'ta', 'di', 'za', 'da',
        'sha', 'ta', 'ra', 'mi', 'ta', 'ma', 'va', 'ne', 'li', 'va',
        'tak', 'yang', 'part', 'na', 'na', 'na', 'dovi', 'nar', 'tera', 'ta',
        'li', 'la', 'va', 've', 're', 'ja', 'to', 'te', 'za', 'zi',
        'zo', 'zu', 're', 'ro', 're', 'ta', 'za', 'bar', 'no', 'vi',
        'ua', 'man', 'ra', 'to', 'li', 'ara', 'tri', 'tra', 'la', 'ra',
        'ri', 'ra', 'va', 'ra', 'za', 'ra', 'lin', 'shi', 'da', 'zi',
    ];

    const fim = [
        'tar', 'na', 'dur', 'an', 'li', 'lian', 'ra', 'no', 'vanis', 'lin',
        'man', 'men', 'ur', 'ar', 'er', 'ni', 'na', 'ierre', 'ug', 'eg',
        'ene', 'ri', 'do', 'us', 'es', 'vir', 'ni', 'di', 'va', 'lan',
        'ni', 'nal', 'nas', 'nes', 'lin', 'lian', 'mir', 'ma', 'so', 'far',
        'zur', 'lis', 'zil', 'ra', 'li', 'ka', 'nis', 'van', 'lo', 'danis',
        'is', 'da', 'de', 'di', 'do', 'du', 'ka', 'ke', 'ki', 'res',
        'ras', 'ros', 'ana', 'ani', 'ziz', 'zaz', 'nel', 'nol', 'nil', 'nul',
        'dor', 'dar', 'van', 'von', 'kan', 'le', 'lina', 'lo', 'line', 'tar',
        'rio', 'ja', 'manis', 'san', 'vor', 'vanis', 'za', 'lis', 'vis', 'ko',
        'za', 'ra', 'nir', 'lis', 'dor', 'nu', 'da', 'ru', 'ni', 'mo',
    ];

    let c = d100();
    let m = d100();
    let f = d100();

    console.log(c);
    console.log(m);
    console.log(f);

    return comeco[c] + meio[m] + fim[f];
}