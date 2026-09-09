/**
 * ARCHIVO DE CONFIGURAÇÃO DE PROJETOS DO PORTFÓLIO
 * 
 * Como utilizar/editar:
 * 1. Para adicionar um novo projeto, adicione um novo objeto na lista "graphicDesign" ou "productDesign".
 * 2. Para alterar a ORDEM das fotos exibidas no detalhe do projeto, basta alterar a sequência das URLs no array "images".
 * 3. Para definir/alterar o ano de realização do projeto, edite a propriedade "year" (ex: year: "2023" ou year: { pt: "2023", en: "2023" }).
 * 4. Opcionalmente adicione descrições ("caption") ou textos bilíngues (pt/en).
 * 5. Para adicionar tradução de textos contidos DENTRO da própria imagem, adicione a propriedade "imageText": { pt: "Texto em português...", en: "Text in English..." } ao objeto da foto em "images".
 * 6. Para adicionar um botão de link externo ao final do projeto, adicione a propriedade "externalLink": { url: "https://...", text: { pt: "Texto do botão (PT)", en: "Button text (EN)" } }. (Projetos sem essa propriedade não exibirão o botão).
 */

const PROJECTS_DATA = {
  graphicDesign: [
    /*Foco no Game*/
    {
      id: "foco-no-game",
      year: "2024",
      externalLink: {
        url: "https://github.com/LeopoldoStanula/Foco-No-Game",
        text: {
          pt: "Checar repositório GitHub",
          en: "Check GitHub repository"
        }
      },
      title: {
        pt: "Foco no Game",
        en: "Foco no Game"
      },
      subtitle: {
        pt: "Manual de Acessibilidade Visual para Interfaces de Jogos Digitais",
        en: "Visual Accessibility Guidelines for Digital Game Interfaces"
      },
      shortDescription: {
        pt: "Desenvolvimento de manual para acessibilidade visual para interfaces em jogos digitais.",
        en: "Development of a visual accessibility manual for digital game interfaces."
      },
      fullDescription: {
        pt: "Projeto editorial desenvolvido para tornar as diretrizes de acessibilidade visual mais acessíveis e orientar designers, desenvolvedores e game designers na criação de jogos digitais mais inclusivos. Foram aplicadas metodologias de pesquisa exploratória e estudos de caso, permitindo uma maior imersão no objeto de estudo e uma compreensão aprofundada de seus desafios e possíveis soluções.",
        en: "Editorial project developed to make visual accessibility guidelines more accessible and to guide designers, developers, and game designers in creating more inclusive digital games. Exploratory research methodologies and case studies were applied, enabling greater immersion in the subject and a deeper understanding of its challenges and possible solutions."
      },
      thumbnail: "assets/GraphicDesign/FocoNoGame/Thumb.jpg",
      // 👇 ORDEM DAS FOTOS EXIBIDAS NO PROJETO (Altere a ordem aqui conforme preferir):
      images: [
        {
          url: "assets/GraphicDesign/FocoNoGame/FotoPoster3.png",
          imageText: {
            en: "Focus on the Game | A visual accessibility manual for digital games | Leopoldo Leineker Stanula"
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/TccApresentacao_pages-to-jpg-0003.jpg",
          caption: { pt: "Após a realização do desk research, o problema foi definido com base em estatísticas recentes do IBGE e da PGB 2022, além de pesquisas sobre o cenário de desenvolvimento de jogos digitais no Brasil. Foram identificados dois problemas principais que o manual deveria abordar: 1) A maioria dos jogos digitais não incorpora a acessibilidade como parte fundamental do desenvolvimento desde o início. 2) A acessibilidade é frequentemente tratada como um complemento, algo a ser adicionado apenas ao final do desenvolvimento.", en: "After conducting the desk research, the problem was defined based on recent statistics from IBGE and PGB 2022, as well as research into the digital game development landscape in Brazil. Two main issues that the manual should address were identified: 1) Most digital games do not incorporate accessibility as a fundamental part of the development process from the beginning. 2) Accessibility is often treated as an add-on, something to be addressed only at the end of the development process." },
          imageText: {
            en: "People aged 40 to 49 represent 12.5%, and players over 50 make up 6.5% | Approximately 10.4% of gamers in Brazil report limitations in playing video games due to a disability | One-third of players use some accessibility feature, regardless of their limitations."
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/TccApresentacao_pages-to-jpg-0005.jpg",
          caption: { pt: "A fase de pesquisa concentrou-se em um amplo levantamento sobre deficiência sob as perspectivas da medicina, do dicionário e da legislação, além de abordar acessibilidade digital, análises qualitativas relacionadas à ergonomia visual, normas para a construção de materiais editoriais e diretrizes para a construção de interfaces tipográficas. Também foram estudados conceitos relacionados às deficiências visuais e possíveis soluções para problemas de acessibilidade visual em jogos digitais.", en: "The research phase focused on an extensive investigation into disability from medical, dictionary, and legal perspectives. It also covered digital accessibility, qualitative analyses related to visual ergonomics, standards for the development of editorial materials, and guidelines for designing typographic interfaces. Concepts related to visual impairments and possible solutions to visual accessibility issues in digital games were also explored." },
          imageText: {
            en: "Research Methodology: An exploratory research and case study approach is employed, focusing on a bibliographic review of standards, definitions, insights, quantitative and qualitative data, statistics, approaches, and relevant terminology. | Objective: To facilitate the development of a best-practices manual for visual accessibility in digital games and enable greater immersion in the subject, providing an in-depth understanding of its challenges and solutions."
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/TccApresentacao_pages-to-jpg-0012.jpg",
          caption: { pt: "Na fase de desenvolvimento, foi adaptada a metodologia de Design Thinking, contemplando as etapas de imersão, análise e ideação. Também foram utilizados os materiais obtidos durante a pesquisa exploratória.", en: "During the development phase, the Design Thinking methodology was adapted to include the stages of immersion, analysis, and ideation. The materials gathered during the exploratory research were also used throughout the process." },
          imageText: {
            en: "Development methodology: An adaptation of the Design Thinking methodology is used | Material gathered during the exploratory methodology is used | Phase -> Immersion -> How-to -> Reviewing existing solutions; researching similar examples; brainstorming; mind mapping; defining logical content structure. | Analysis -> Selection of color scheme/fonts; first phase of the written component (summary table); definition of the Design System; definition of page harmony and grid. | Ideation -> Generate concrete ideas based on research conducted during the analysis phase (prototypes); finalize texts to be used in the manual."
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/Manual Desn - Soluções já existentes.jpg",
          caption: { pt: "Análise de plataformas com diretrizes: Foi realizada uma busca por plataformas, sites e artigos que oferecem conteúdos relacionados a diretrizes de acessibilidade em jogos digitais. Esses conteúdos foram listados e avaliados com base no número de diretrizes disponíveis, na relevância dessas diretrizes, na presença de exemplos visuais e no potencial de utilização no manual. A avaliação foi dividida em quatro níveis, representados por cores entre verde e vermelho: o verde indica maior potencial de utilização, enquanto o vermelho indica menor aderência aos objetivos da pesquisa.", en: "Platform Analysis with Guidelines: A search was conducted for platforms, websites, and articles offering content related to accessibility guidelines for digital games. These resources were listed and evaluated based on the number of available guidelines, their relevance, the presence of visual examples, and their potential use in the manual. The evaluation was divided into four levels, represented by colors ranging from green to red: green indicates greater potential for use, while red indicates lower alignment with the research objectives." },
          imageText: {
            en: "Circles (top to bottom): good; good/average; average/poor; poor | Columns (left to right): platforms; number of guidelines; relevance of visual guidelines; visual examples; potential for application in the manual; justifications."
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/Manual Desn - Frame 1.jpg",
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/Manual Desn - Estruturacao.png",
          caption: { pt: "Mapa mental para decisões lógicas e criativas: A terceira etapa da fase de imersão consiste na criação de mapas mentais iniciais para orientar o processo criativo e lógico de definição do conteúdo do manual. Primeiramente, é realizada uma sessão para definir o estilo geral do manual, tanto gráfico quanto textual. Essa etapa também marca o início da estruturação do conteúdo escrito, dividida em duas etapas. A primeira busca definir a estrutura-base do conteúdo e as seções que poderão ser incluídas no manual. Em seguida, são formuladas perguntas sobre essas versões e, a partir das respostas, desenvolve-se uma nova versão com base nas modificações realizadas nas versões anteriores.", en: "Mind Mapping for Logical and Creative Decisions: The third stage of the immersion phase involves creating initial mind maps to guide the creative and logical process of defining the manual's content. Initially, a session is held to determine the manual's overall style, both graphic and textual. This stage also marks the beginning of the written content structure, which is divided into two steps. The first step focuses on establishing the basic content structure and the sections that may be included in the manual. Subsequently, questions are formulated about these versions, and a new version is developed based on the modifications made in the previous ones." },
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/TabelaResumo.png",
          caption: { pt: "Resumo de conteúdo do manual: É criado um quadro-resumo dos conteúdos abordados para definir o nível de importância e relevância de cada assunto e estabelecer uma estrutura hierárquica a ser distribuída ao longo do manual. Esse resumo também permite validar a qualidade da estrutura proposta durante a fase de imersão.", en: "Manual Content Summary: A content summary chart is created to define the level of importance and relevance of each topic and establish a hierarchical structure to be distributed throughout the manual. This summary also helps validate the quality of the structure proposed during the immersion phase." },
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/PrintContrasteCoresPrincipaisDaltonismo.jpg",
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/PrintContrasteCoresSecundariasDaltonismo copiar.jpg",
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/CoresfinaisManual.png",
          caption: { pt: "Escolha de cores: São selecionadas paletas de cores capazes de abranger a identidade visual geral e separar as três partes principais do manual: ergonomia, interface e diretrizes, estando em conformidade com as diretrizes de contraste da WCAG 2.0.", en: "Color Selection: Color palettes are chosen to encompass the general visual identity and separate the three parts of the manual: ergonomics, interface, and guidelines, in compliance with WCAG 2.0 contrast guidelines." },
          imageText: {
            en: "White | Black | Primary | Secondary | Manual Identity | Ergonomics | Interface | Guidelines."
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/PrototipoV1_1.jpeg"
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/PrototipoV1_2.jpeg",
          caption: {
            pt: "Primeiros protótipos impressos para testes A/B de legibilidade e leiturabilidade.", en: "First printed prototypes for A/B readability and legibility testing."
          }
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/MockuposPortfolio1.png"
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/MockuposPortfolio2.png"
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/MockuposPortfolio3.png"
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/IMG_5671.jpeg"
        },
        {
          url: "assets/GraphicDesign/FocoNoGame/195a6adf-013b-4002-831d-a9b74ff60746.jpeg"
        },
      ]
    },
    /*ExpressãoGráfica*/
    {
      id: "expressao-grafica",
      year: "2022",
      externalLink: {
        url: "https://www.behance.net/gallery/146898085/Expressao-Grafica?platform=direct",
        text: {
          pt: "Checar mais detalhes no Behance",
          en: "Check more details on Behance"
        }
      },
      title: {
        pt: "Expressão Gráfica",
        en: "Graphic Expression"
      },
      subtitle: {
        pt: "Identidade Visual, Branding e Modelagem 3D",
        en: "Visual Identity, Branding and 3D Modeling"
      },
      shortDescription: {
        pt: "Desenvolvimento de conceito de marca, composição tipográfica e renderizações 3D.",
        en: "Brand concept development, typographic composition, and 3D renders."
      },
      fullDescription: {
        pt: "Este projeto foi enviado para um concurso da Universidade Federal do Paraná. O briefing enfatizava formas tridimensionais, levando a explorações em modelagem 3D usando Photoshop e Blender, com renderizações feitas no Keyshot. Embora esta não seja a entrega final do concurso, ela representa um conceito expandido e a direção que eu sugeriria para a marca.",
        en: "This project was submitted for a competition at the Federal University of Paraná. The brief emphasized three-dimensional forms, leading to explorations in 3D modeling using Photoshop and Blender, with renders created in Keyshot. While this is not the final submission for the competition, it represents an expanded concept and the direction I would suggest for the brand."
      },
      thumbnail: "assets/GraphicDesign/Expressao grafica/nice2.png",
      // 👇 ORDEM DAS FOTOS EXIBIDAS NO PROJETO (Altere a ordem aqui conforme preferir):
      images: [
        {
          url: "assets/GraphicDesign/Expressao grafica/nice2.png",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/IMG_0375.jpg",
          caption: { pt: "Para realçar ainda mais a tridimensionalidade da marca, foi desenvolvida uma versão impressa em 3D do logotipo", en: "To further enhance the brand's three-dimensionality, a 3D printed version of the logo was developed." }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Animacao4.gif",
          caption: { pt: "Foram desenvolvidos diversos materiais animados para reforçar as qualidades da identidade visual proposta.", en: "Various animated materials were developed to reinforce the qualities of the proposed visual identity." }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Mockup_06_papelaria.png",
          imageText: {
            en: "Graphic Expression"
          },
          caption: { pt: "Esta identidade visual combina criatividade e design inovador com uma abordagem moderna em 3D. Inspirado nas letras dinâmicas 'E' e 'G' (de Expressão Gráfica).", en: "This visual identity combines creativity and innovative design with a modern 3D approach. Inspired by the dynamic letters 'E' and 'G' (from Graphic Expression)." }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/animacao3.gif",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Mockup_011_cracha2.png",
          imageText: {
            en: "Melissa Gomes | Student | Graphic Expression | Curitiba Campus"
          },
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/33cd16146898085.62e6c7c6b8249.png",
          caption: {
            pt: "O símbolo ganha vida através de um grid modular flexível, tornando-o perfeito para a criação de padrões dinâmicos e adaptável para diversas aplicações.",
            en: "The symbol comes to life through a flexible modular grid, making it perfect for creating dynamic patterns and adaptable for various applications."
          }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/f530c3146898085.62c633e266157.png",
          imageText: {
            en: "Creativity | Modeling | Innovation | Design"
          },
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Animacao1.gif",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/dff993146898085.62c8a6a12825c.png",
          imageText: {
            en: "Viscosity | Elasticity | Tackiness | Malleability"
          },
          caption: {
            pt: "Com um toque de elasticidade em sua forma, o logotipo é tanto ousado quanto fluido, capturando o espírito de criatividade e design de ponta do curso.",
            en: "With a touch of elasticity in its form, the logo is both bold and fluid, capturing the spirit of creativity and cutting-edge design of the course."
          }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Mockup_10_camisa03.png",
          caption: {
            pt: "Um símbolo exclusivo para o estudante e uma fonte personalizada completam a identidade, adicionando um toque pessoal e cuidadoso.",
            en: "A unique symbol for the student and a custom font complete the identity, adding a personal and thoughtful touch."
          }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/posts_inst.png",
          imageText: {
            en: "Extension | Research | Department | Gallery | Final Projects"
          }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Animacao2.gif",
        },
      ]
    },
    /*Someliê*/
    {
      id: "editorial-poster-series",
      year: "2022",
      title: {
        pt: "Someliê",
        en: "Someliê"
      },
      subtitle: {
        pt: "Branding, Identidade Visual e Design de Produto",
        en: "Branding, Visual Identity and Product Design"
      },
      shortDescription: {
        pt: "Branding de produto: o vinho perfeito para qualquer ocasião.",
        en: "Product branding: the perfect wine for any occasion."
      },
      fullDescription: {
        pt: "Este projeto foi desenvolvido para a disciplina de Design de Embalagens na Universidade Tecnológica Federal do Paraná. Ele combina a criação de uma identidade visual com o desenvolvimento de uma embalagem personalizada. Someliê reinventa o consumo de vinho: leve, descontraído e perfeito para qualquer ocasião",
        en: "This project was developed for the Packaging Design course at the Federal University of Technology – Paraná. Someliê reinvents wine consumption: light, casual, and perfect for any occasion"
      },
      thumbnail: "assets/GraphicDesign/Somelie/Animado.gif",
      images: [
        {
          url: "assets/GraphicDesign/Somelie/MockupRua.jpg",
          imageText: {
            pt: "Cerveja? Não. A verdadeira majestade bebe vinho. | Someliê, redefinindo o casual."
          },
        },
        {
          url: "assets/GraphicDesign/Somelie/Ambientada1.jpg",
          caption: {
            pt: "O nome 'Someliê' é a pronúncia em português do termo francês 'sommelier', que se refere a especialistas em degustação de vinhos.",
            en: "The name 'Someliê' is the Portuguese pronunciation of the French term 'sommelier', which refers to wine tasting specialists."
          }
        },
        {
          url: "assets/GraphicDesign/Somelie/Animado.gif",
          caption: {
            pt: "Criada para transformar o vinho em um companheiro casual para happy hours, churrascos e encontros, a garrafa long neck de 275ml se encaixa perfeitamente ao lado de uma cerveja – sem julgamentos, apenas boas vibrações.",
            en: "Created to turn wine into a casual companion for happy hours, barbecues, and gatherings, the 275ml long-neck bottle fits perfectly alongside a beer – no judgments, just good vibes."
          }
        },
        {
          url: "assets/GraphicDesign/Somelie/Animação.gif",
        }
      ]
    },
    /*Resiverso*/
    {
      id: "editorial-poster-series-2",
      year: "2022",
      title: {
        pt: "Resiverso",
        en: "Resiverso"
      },
      subtitle: {
        pt: "Branding",
        en: "Branding"
      },
      shortDescription: {
        pt: "Branding para uma empresa de impressão 3D baseadas no mundo geek.",
        en: "Branding for a 3D printing company based on the geek world."
      },
      fullDescription: {
        pt: "Esse projeto foi um freelance para uma empresa de impressão 3D, onde desenvolvi a identidade visual, materiais para redes sociais, o design de uma loja virtual e templates personalizáveis para que o lojista pudesse produzir seus próprios materiais de marketing, mantendo a consistência da marca.",
        en: "This project was a freelance collaboration with a 3D printing company. I developed their visual identity, social media materials, an e-commerce store design, and customizable templates that enabled the shop owner to create their own marketing materials while maintaining brand consistency."
      },
      thumbnail: "assets/GraphicDesign/Resiverso/Banner_perfil.png",
      images: [
        {
          url: "assets/GraphicDesign/Resiverso/918231593543075.png",
        },
        {
          url: "assets/GraphicDesign/Resiverso/Foto_perfil.png",
          caption: {
            pt: "O logotipo apresenta o planeta Saturno, com seus anéis formando um portal que materializa um android, simbolizando a conexão entre criatividade e realidade.",
            en: "The logo features the planet Saturn, with its rings forming a portal that materializes an android, symbolizing the connection between creativity and reality."
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Resiverso_folder3_page-0001.jpg",
          imageText: {
            en: "Check out the coolest 3D printing shop in Curitiba. | Resin prints; custom figures; busts, keychains, keycaps, and more! | Point the camera, check it, and GG!"
          },
          caption: {
            pt: "O conceito gira em torno do mundo imaginário que existe dentro de cada um de nós – frequentemente chamado de 'viver no mundo da lua' – e se conecta aos temas de espaço e universo.",
            en: "The concept revolves around the imaginary world that exists within each of us – often referred to as 'living in the moon' – and connects to themes of space and the universe."
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banner_01_01.png",
          imageText: {
            en: "Print the Star Wars universe | Check it out now!"
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banner_01_02.png",
          imageText: {
            en: "Print the Marvel universe | Discover!"
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banner_01_03.png",
          imageText: {
            en: "Print the One Piece universe | See more!"
          },
          caption: {
            pt: "A loja atua como um portal entre o mundo tangível e a imaginação sem limites, trazida à vida por personagens fictícios.",
            en: "The store acts as a portal between the tangible world and limitless imagination, brought to life by fictional characters."
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banners_quadrados_01.png",
          imageText: {
            en: "Supercharge your gameplay with CS:GO keycaps | Check them out!"
          }
        }

      ]
    },
    /*Focusrite*/
    {
      id: "Focusrite Rebranding",
      year: "2021",
      title: {
        pt: "Focusrite Rebranding",
        en: "Focusrite Rebranding"
      },
      subtitle: {
        pt: "Branding e Design de Produto",
        en: "Branding and Product Design"
      },
      shortDescription: {
        pt: "Rebranding e recriação de um produto voltado para músicos profissionais.",
        en: "Rebranding and interface design for a product aimed at professional musicians."
      },
      fullDescription: {
        pt: "Esse projeto consiste em um rebranding simples. O objetivo foi tornar a marca mais jovem e alinhada com seu público-alvo. Também foi desenvolvido um protótipo para uma das interfaces de áudio da marca, destacando novas funcionalidades por meio de modelagem 3D.",
        en: "This project consists of a simple rebranding. The objective was to make the brand younger and more aligned with its target audience. A prototype was also developed for one of the brand's audio interfaces, highlighting new features through 3D modeling."
      },
      thumbnail: "assets/GraphicDesign/Redesign Focusrite/Animado.gif",
      images: [
        {
          url: "assets/GraphicDesign/Redesign Focusrite/Animado.gif",
        },
        {
          url: "assets/GraphicDesign/Redesign Focusrite/Ativo 11.png",
          imageText: {
            pt: "Knobs não projetam sombras nos indicadores | Botões-Switchs fáceis de usar | Entradas p2 e p10 | Cantos arredondados, feitos com a segurança do usuário em mente."
          },
          caption: {
            pt: "O trabalho incluiu a identificação de problemas de UX no produto atual e a proposição de melhorias, tudo demonstrado através de modelagem 3D.",
            en: "The work included identifying UX problems in the current product and proposing improvements, all demonstrated through 3D modeling."
          }
        },
        {
          url: "assets/GraphicDesign/Redesign Focusrite/default6.png",
          caption: {
            pt: "As modelagens 3D foram feitas no SketchUp, com renderizações produzidas no Indigo Render e Keyshot para dar vida ao conceito.",
            en: "The 3D models were created in SketchUp, with renderings produced in Indigo Render and Keyshot to bring the concept to life."
          }
        },
        {
          url: "assets/GraphicDesign/Redesign Focusrite/default10.jpg",
        },
        {
          url: "assets/GraphicDesign/Redesign Focusrite/9fa3d3b4-8b3b-4549-bfd5-721583778a55.jfif",
        }
      ]
    },
    /*Croma Studio*/
    {
      id: "Croma Studio",
      year: "2024",
      title: {
        pt: "Croma Studio",
        en: "Croma Studio"
      },
      subtitle: {
        pt: "Branding Pessoal",
        en: "Personal Branding"
      },
      shortDescription: {
        pt: "Criação de identidade visual para o meu estudio de design.",
        en: "Branding identity for my design studio."
      },
      fullDescription: {
        pt: "Croma é o meu estúdio de design. Uma abordagem criativa, conceitual e ousada para o design.",
        en: "Croma is my design studio. A creative, conceptual and bold approach to design."
      },
      thumbnail: "assets/GraphicDesign/CromaStudio/MockupMulher.png",
      images: [
        {
          url: "assets/GraphicDesign/CromaStudio/MockupMulher.png",
          imageText: {
            pt: "Uma abordagem de design reflexiva, conceitual e ousada."
          },
        },
        {
          url: "assets/GraphicDesign/CromaStudio/LogoHorizonta_Color_1.png",
        },
        {
          url: "assets/GraphicDesign/CromaStudio/LogoVertica_Color_1.png",
        },
      ]
    },
    /*Social Media*/
    {
      id: "Social Media",
      title: {
        pt: "Social Media",
        en: "Social Media"
      },
      subtitle: {
        pt: "Peças para mídias sociais",
        en: "Social Media Posts"
      },
      shortDescription: {
        pt: "Peças para mídias sociais desenvolvidas para diferentes clientes.",
        en: "Social Media Posts for different clients."
      },
      fullDescription: {
        pt: "Uma seleção de peças para mídias sociais desenvolvidas ao longo do tempo para diversos clientes, demonstrating versatilidade em diferentes estilos e necessidades.",
        en: "A selection of social media posts developed over time for various clients, demonstrating versatility across different styles and needs."
      },
      thumbnail: "assets/GraphicDesign/SocialMedia/Prancheta 3.png",
      images: [
        {
          url: "assets/GraphicDesign/SocialMedia/Prancheta 1.png",
        },
        {
          url: "assets/GraphicDesign/SocialMedia/Prancheta 2.png",
        },
        {
          url: "assets/GraphicDesign/SocialMedia/Prancheta 3.png",
        },
        {
          url: "assets/GraphicDesign/SocialMedia/Prancheta 4.png",
        },
        {
          url: "assets/GraphicDesign/SocialMedia/Prancheta 5.png",
        },

      ]
    },
    /*Variadas*/
    {
      id: "Variadas",
      title: {
        pt: "Artes Variadas",
        en: "Various Arts"
      },
      subtitle: {
        pt: "Peças gráficas variadas",
        en: "Various Graphic Arts"
      },
      shortDescription: {
        pt: "Explorações criativas e peças gráficas variadas.",
        en: "Creative explorations and various graphic arts."
      },
      fullDescription: {
        pt: "Esses trabalhos incluem materiais isolados e explorações criativas que não estão vinculados a um projeto específico, destacando um lado mais experimental e expressivo do meu processo de design.",
        en: "These works include isolated materials and creative explorations not tied to a specific project, highlighting a more experimental and expressive side of my design process."
      },
      thumbnail: "assets/GraphicDesign/ArtesVariadas/paint5.png",
      images: [
        {
          url: "assets/GraphicDesign/ArtesVariadas/paint5.png",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/liquid_by_leopoldostanula_ddvgrmi.png",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/LeopoldoStanula_ DI83E_Trabalho02.png",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/Produto_Matheus.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/ProdutoGabi.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/Postais.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/banner_insta_by_leopoldostanula_ddxnnze.png",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/Cartaz construtivismo.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/KV_CacaAosOvos.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/jogo.JPG",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/Infográfico Bauhaus_Leopoldo Leineker Stanula_page-0001.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/frog_playing_guitar_by_leopoldostanula_ddvcesi (1).png",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/Ilustracao.png",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/the brighter.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/arquivo-marinês_02.jpg",
        },
        {
          url: "assets/GraphicDesign/ArtesVariadas/those_nights_by_leopoldostanula_ddqkg33.png",
        },
      ]
    }
  ],
  productDesign: [
    {
      id: "MIX",
      year: "2024",
      title: {
        pt: "MIX",
        en: "MIX"
      },
      subtitle: {
        pt: "Product Design & Design System",
        en: "Product Design & Design System"
      },
      shortDescription: {
        pt: "Mapeamento da jornada do usuário, arquitetura de informação e prototipagem interativa.",
        en: "User journey mapping, information architecture, and interactive prototyping."
      },
      fullDescription: {
        pt: "MIX é uma plataforma para pedidos de comidas focada em pessoas que buscam uma maior personalização do seu pedido e escolhas mais saudáveis. ",
        en: "MIX is a food ordering platform focused on people seeking greater personalization of their order and healthier choices."
      },
      thumbnail: "assets/ProductDesign/AppMix/thumb.png",
      images: [
        {
          url: "assets/ProductDesign/AppMix/thumb.png",
        },
        {
          url: "assets/ProductDesign/AppMix/Montagem.png",
          caption: { pt: "A principal funcionalidade do aplicativo é a função 'MIX' onde o usuário salva e seus pratos personalizados para pedir novamente com facilidade mais tarde", en: "The main functionality of the application is the 'MIX' function where the user saves their personalized dishes to order again easily later" }
        },
        { url: "assets/ProductDesign/AppMix/WireFrame4.png" },
      ]
    }
  ]
};
