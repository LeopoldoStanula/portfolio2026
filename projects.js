/**
 * ARCHIVO DE CONFIGURAÇÃO DE PROJETOS DO PORTFÓLIO
 * 
 * Como utilizar/editar:
 * 1. Para adicionar um novo projeto, adicione um novo objeto na lista "graphicDesign" ou "productDesign".
 * 2. Para alterar a ORDEM das fotos exibidas no detalhe do projeto, basta alterar a sequência das URLs no array "images".
 * 3. Opcionalmente adicione descrições ("caption") ou textos bilíngues (pt/en).
 */

const PROJECTS_DATA = {
  graphicDesign: [
    /*ExpressãoGráfica*/
    {
      id: "expressao-grafica",
      title: {
        pt: "Expressão Gráfica",
        en: "Graphic Expression"
      },
      subtitle: {
        pt: "Identidade Visual & Branding",
        en: "Visual Identity & Three-Dimensional Rendering"
      },
      shortDescription: {
        pt: "Desenvolvimento de conceito de marca, composição tipográfica e renderizações 3D em alta resolução.",
        en: "Brand concept development, typographic composition, and high-resolution 3D renders."
      },
      fullDescription: {
        pt: "Este projeto foi enviado para um concurso da Universidade Federal do Paraná. O briefing enfatizava formas tridimensionais, levando a explorações em modelagem 3D usando Photoshop e Blender, com renderizações feitas no Keyshot. Para realçar ainda mais a tridimensionalidade da marca, foi desenvolvida uma versão impressa em 3D do logotipo. Embora esta não seja a entrega final do concurso, ela representa um conceito expandido e a direção que eu sugeriria para a marca.",
        en: "This project was submitted for a competition at the Federal University of Paraná. The brief emphasized three-dimensional forms, leading to explorations in 3D modeling using Photoshop and Blender, with renders created in Keyshot. To further enhance the brand's three-dimensionality, a 3D printed version of the logo was developed. While this is not the final submission for the competition, it represents an expanded concept and the direction I would suggest for the brand."
      },
      thumbnail: "assets/GraphicDesign/Expressao grafica/nice2.png",
      tags: ["Branding", "3D Render", "Graphic Design", "Logo Design"],
      // 👇 ORDEM DAS FOTOS EXIBIDAS NO PROJETO (Altere a ordem aqui conforme preferir):
      images: [
        {
          url: "assets/GraphicDesign/Expressao grafica/nice2.png",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Animacao4.gif",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Mockup_06_papelaria.png",
          caption: { pt: "Esta identidade visual para o curso de Expressão Gráfica da Universidade Federal do Paraná combina criatividade e design inovador com uma abordagem moderna em 3D. Inspirado nas letras dinâmicas 'E' e 'G' (de Expressão Gráfica).", en: "This visual identity for the Graphic Expression course at the Federal University of Paraná combines creativity and innovative design with a modern 3D approach. Inspired by the dynamic letters 'E' and 'G' (from Graphic Expression)." }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Mockup_011_cracha2.png",
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
          caption: {
            pt: "Com um toque de elasticidade em sua forma, o logotipo é tanto ousado quanto fluido, capturando o espírito de criatividade e design de ponta do curso. Um símbolo exclusivo para o estudante e uma fonte personalizada completam a identidade, adicionando um toque pessoal e cuidadoso.",
            en: "With a touch of elasticity in its form, the logo is both bold and fluid, capturing the spirit of creativity and cutting-edge design of the course. A unique symbol for the student and a custom font complete the identity, adding a personal and thoughtful touch."
          }
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/dff993146898085.62c8a6a12825c.png",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Mockup_10_camisa03.png",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/posts_inst.png",
        },
        {
          url: "assets/GraphicDesign/Expressao grafica/Animação2.gif",
        },



      ]
    },
    /*Someliê*/
    {
      id: "editorial-poster-series",
      title: {
        pt: "Someliê",
        en: "Someliê"
      },
      subtitle: {
        pt: "Design Gráfico & Tipografia",
        en: "Graphic Design & Typography"
      },
      shortDescription: {
        pt: "Composições tipográficas e exploração de grids para mídias impressas e digitais.",
        en: "Typographic compositions and grid explorations for print and digital media."
      },
      fullDescription: {
        pt: "Exploração de hierarquia visual, uso expressivo de fontes e equilíbrio entre espaço em branco e imagens para materiais promocionais e editoriais.",
        en: "Exploration of visual hierarchy, expressive typography, and balance between whitespace and imagery for editorial materials."
      },
      thumbnail: "assets/GraphicDesign/Somelie/Animado.gif",
      tags: ["Editorial", "Posters", "Typography"],
      images: [
        {
          url: "assets/GraphicDesign/Somelie/MockupRua.jpg",
          caption: {
            pt: "Este projeto foi desenvolvido para a disciplina de Design de Embalagens na Universidade Tecnológica Federal do Paraná. Ele combina a criação de uma identidade visual com o desenvolvimento de uma embalagem personalizada. Os modelos 3D foram adaptados de templates existentes e ajustados para atender ao conceito do projeto. Um protótipo foi produzido por meio de impressão 3D, dando vida à ideia.",
            en: "This project was developed for the Packaging Design course at the Federal University of Technology – Paraná. It combines visual identity design with the creation of a custom package. The 3D models were adapted from existing templates and refined to suit the project. A prototype was created using 3D printing, bringing the concept to life."
          }
        },
        {
          url: "assets/GraphicDesign/Somelie/Ambientada1.jpg",
          caption: {
            pt: "Someliê reinventa o consumo de vinho: leve, descontraído e perfeito para qualquer ocasião. O nome 'Someliê' é a pronúncia em português do termo francês 'sommelier', que se refere a especialistas em degustação de vinhos.",
            en: "This project was developed for the Packaging Design course at the Federal University of Technology – Paraná. It combines visual identity design with the creation of a custom package. The 3D models were adapted from existing templates and refined to suit the project. A prototype was created using 3D printing, bringing the concept to life."
          }
        },
        {
          url: "assets/GraphicDesign/Somelie/Animado.gif",
          caption: {
            pt: "Criada para transformar o vinho em um companheiro casual para happy hours, churrascos e encontros, a garrafa long neck de 275ml se encaixa perfeitamente ao lado de uma cerveja – sem julgamentos, apenas boas vibrações.",
            en: "This project was developed for the Packaging Design course at the Federal University of Technology – Paraná. It combines visual identity design with the creation of a custom package. The 3D models were adapted from existing templates and refined to suit the project. A prototype was created using 3D printing, bringing the concept to life."
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
      title: {
        pt: "Resiverso",
        en: "Resiverso"
      },
      subtitle: {
        pt: "Design Gráfico & Tipografia",
        en: "Graphic Design & Typography"
      },
      shortDescription: {
        pt: "Composições tipográficas e exploração de grids para mídias impressas e digitais.",
        en: "Typographic compositions and grid explorations for print and digital media."
      },
      fullDescription: {
        pt: "Exploração de hierarquia visual, uso expressivo de fontes e equilíbrio entre espaço em branco e imagens para materiais promocionais e editoriais.",
        en: "Exploration of visual hierarchy, expressive typography, and balance between whitespace and imagery for editorial materials."
      },
      thumbnail: "assets/GraphicDesign/Resiverso/Banner_perfil.png",
      tags: ["Editorial", "Posters", "Typography"],
      images: [
        {
          url: "assets/GraphicDesign/Resiverso/918231593543075.png",
          caption: {
            pt: "Este projeto envolveu o desenvolvimento de uma identidade visual completa para uma loja, incluindo materiais para redes sociais, o design de uma loja virtual e templates personalizáveis. Os templates foram criados para capacitar o lojista a produzir seus próprios materiais de marketing, mantendo a consistência da marca.",
            en: "This project involved developing a complete visual identity for a store, including social media materials, the design of an online store, and customizable templates. The templates were created to empower the store owner to produce their own marketing materials while maintaining brand consistency."
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Foto_perfil.png",
          caption: {
            pt: "O logotipo apresenta o planeta Saturno, com seus anéis formando um portal que materializa um android, simbolizando a conexão entre criatividade e realidade. A loja atua como um portal entre o mundo tangível e a imaginação sem limites, trazida à vida por personagens fictícios.",
            en: "The logo features the planet Saturn, with its rings forming a portal that materializes an android, symbolizing the connection between creativity and reality. The store acts as a portal between the tangible world and limitless imagination, brought to life by fictional characters."
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Resiverso_folder3_page-0001.jpg",
          caption: {
            pt: "O conceito gira em torno do mundo imaginário que existe dentro de cada um de nós – frequentemente chamado de 'viver no mundo da lua' – e se conecta aos temas de espaço e universo.",
            en: "The concept revolves around the imaginary world that exists within each of us – often referred to as 'living in the moon' – and connects to themes of space and the universe."
          }
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banner_01_01.png",
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banner_01_02.png",
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banner_01_03.png",
        },
        {
          url: "assets/GraphicDesign/Resiverso/Banners_quadrados_01.png",
        }

      ]
    },
    /*Focusrite*/
    {
      id: "Focusrite Rebranding",
      title: {
        pt: "Focusrite Rebranding",
        en: "Focusrite Rebranding"
      },
      subtitle: {
        pt: "Design Gráfico & Tipografia",
        en: "Graphic Design & Typography"
      },
      shortDescription: {
        pt: "Composições tipográficas e exploração de grids para mídias impressas e digitais.",
        en: "Typographic compositions and grid explorations for print and digital media."
      },
      fullDescription: {
        pt: "Este projeto foi desenvolvido durante minha graduação e consiste em um rebranding simples. O objetivo foi tornar a marca mais jovem e alinhada com seu público-alvo. As modelagens 3D foram feitas no SketchUp, com renderizações produzidas no Indigo Render e Keyshot para dar vida ao conceito.",
        en: "This project was developed during my undergraduate studies and consists of a simple rebranding. The goal was to make the brand younger and more aligned with its target audience. The 3D models were created in SketchUp, with renderings produced in Indigo Render and Keyshot to bring the concept to life."
      },
      thumbnail: "assets/GraphicDesign/Redesign Focusrite/Animado.gif",
      tags: ["Editorial", "Posters", "Typography"],
      images: [
        {
          url: "assets/GraphicDesign/Redesign Focusrite/Animado.gif",
          caption: {
            pt: "Também foi desenvolvido um design protótipo para uma das interfaces de áudio da marca, destacando novas funcionalidades por meio de modelagem 3D.",
            en: "A design prototype was also developed for one of the brand's audio interfaces, highlighting new features through 3D modeling."
          }
        },
        {
          url: "assets/GraphicDesign/Redesign Focusrite/Ativo 11.png",
          caption: {
            pt: "O trabalho incluiu a identificação de problemas de UX no produto atual e a proposição de melhorias, tudo demonstrado através de modelagem 3D.",
            en: "The work included identifying UX problems in the current product and proposing improvements, all demonstrated through 3D modeling."
          }
        },
        {
          url: "assets/GraphicDesign/Redesign Focusrite/default6.png",
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
      title: {
        pt: "Croma Studio",
        en: "Croma Studio"
      },
      subtitle: {
        pt: "Design Gráfico & Tipografia",
        en: "Graphic Design & Typography"
      },
      shortDescription: {
        pt: "Composições tipográficas e exploração de grids para mídias impressas e digitais.",
        en: "Typographic compositions and grid explorations for print and digital media."
      },
      fullDescription: {
        pt: "Croma é o meu estúdio de design. Uma abordagem criativa, conceitual e ousada para o design.",
        en: "Croma is my design studio. A creative, conceptual and bold approach to design."
      },
      thumbnail: "assets/GraphicDesign/CromaStudio/MockupMulher.png",
      tags: ["Editorial", "Posters", "Typography"],
      images: [
        {
          url: "assets/GraphicDesign/CromaStudio/MockupMulher.png",
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
        pt: "Design Gráfico & Tipografia",
        en: "Graphic Design & Typography"
      },
      shortDescription: {
        pt: "Composições tipográficas e exploração de grids para mídias impressas e digitais.",
        en: "Typographic compositions and grid explorations for print and digital media."
      },
      fullDescription: {
        pt: "Esses trabalhos incluem materiais isolados e explorações criativas que não estão vinculados a um projeto específico, destacando um lado mais experimental e expressivo do meu processo de design.",
        en: "These works include isolated materials and creative explorations not tied to a specific project, highlighting a more experimental and expressive side of my design process."
      },
      thumbnail: "assets/GraphicDesign/SocialMedia/Prancheta 3.png",
      tags: ["Editorial", "Posters", "Typography"],
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
        pt: "Variadas",
        en: "Variadas"
      },
      subtitle: {
        pt: "Design Gráfico & Tipografia",
        en: "Graphic Design & Typography"
      },
      shortDescription: {
        pt: "Composições tipográficas e exploração de grids para mídias impressas e digitais.",
        en: "Typographic compositions and grid explorations for print and digital media."
      },
      fullDescription: {
        pt: "Esses trabalhos incluem materiais isolados e explorações criativas que não estão vinculados a um projeto específico, destacando um lado mais experimental e expressivo do meu processo de design.",
        en: "These works include isolated materials and creative explorations not tied to a specific project, highlighting a more experimental and expressive side of my design process."
      },
      thumbnail: "assets/GraphicDesign/SocialMedia/Prancheta 3.png",
      tags: ["Editorial", "Posters", "Typography"],
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
    }
  ],
  productDesign: [
    {
      id: "MIX",
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
        pt: "Projeto focado na experiência do usuário para plataformas digitais complexas. Incluiu pesquisa quantitativa e qualitativa, personas, fluxos de navegação e componentes reutilizáveis para o Design System.",
        en: "Project focused on user experience for complex digital platforms. Included research, personas, navigation flows, and reusable Design System components."
      },
      thumbnail: "assets/ProductDesign/appMIX/thumb.png", // Imagem temporária enquanto novas são adicionadas em Assets/ProductDesign
      tags: ["UX Research", "UI Design", "Design System", "Mobile App"],
      images: [
        {
          url: "assets/images/designer.png",
          caption: { pt: "Visão geral do projeto UX", en: "UX Project Overview" }
        }
      ]
    }
  ]
};
