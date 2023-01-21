$(function() {
 const dataSkills = [
{
    skill: "HTML",
    description: "HTML é uma linguagem de marcação para criar páginas web. Ele usa tags para dar estrutura e           significado ao conteúdo da página, como texto, imagens, vídeos e formulários. As tags podem ter atributos que      fornecem mais informações sobre o elemento. O HTML é usado com o CSS e o JavaScript para criar páginas         interativas e com aparência agradável.",
    incon: '<i class="fa-brands fa-html5"></i>'
},
{
    skill: "CSS",
    description: "O CSS é uma linguagem de estilo que permite que você aplique estilos, como fontes, cores, e espaçamento para os elementos em um documento HTML. Ele funciona da seguinte maneira: você escreve regras que dizem como os elementos em um documento devem ser exibidos.",
    incon: '<i class="fa-brands fa-css3-alt"></i>'
},
{
    skill: "Java-script",
    description: "JavaScript é uma linguagem de programação usada para adicionar interatividade e funcionalidades dinâmicas às páginas da web. É geralmente usada junto com HTML e CSS. Alguns exemplos de coisas que podem ser feitas com JavaScript incluem: validar formulários, mostrar mensagens de alerta e adicionar animações à página. É uma linguagem muito versátil e poderosa.",
    incon: '<i class="fa-brands fa-square-js"></i>'
},
{
    skill: "React",
    description: "React é uma biblioteca JavaScript para criar interfaces de usuário de aplicativos da web. Ele usa componentes e o Virtual DOM para atualizar de forma eficiente a interface do usuário. É muito popular e amplamente utilizado por desenvolvedores de aplicativos da web.",
    incon: '<i class="fa-brands fa-react"></i>'
},
{
    skill: "Bootstrap",
    description: "Bootstrap é uma ferramenta de design de código aberto para desenvolvimento de aplicações da web. Ele oferece estilos pré-definidos, uma grade responsiva e componentes de JavaScript prontos para uso. É amplamente utilizado para criar sites e aplicativos da web.",
    incon: '<i class="fa-brands fa-bootstrap"></i>'
},
{
    skill: "Jquery",
    description: "jQuery é uma biblioteca de JavaScript que facilita a manipulação do HTML, a manipulação de eventos e a realização de requisições HTTP. Ele oferece uma sintaxe simples e intuitiva para acessar e manipular elementos HTML e adicionar funcionalidades às páginas da web. É amplamente utilizado em aplicações da web.",
    incon: '<i class="fa-solid fa-folder-open"></i>'
},
{
    skill: "git",
    description: "Git é um programa que ajuda a controlar as mudanças no código de um projeto. Ele guarda as versões antigas e permite trabalhar em equipe no mesmo projeto.",
    incon: '<i class="fa-brands fa-git-alt"></i>'
},
{
    skill: "Design Canva",
    description: "Canva é uma plataforma de design gráfico que permite criar imagens personalizadas e editar imagens com efeitos. Ele oferece modelos pré-projetados, ferramentas de desenho e uma biblioteca de imagens, fontes e elementos gráficos. Canva é fácil de usar e amplamente utilizado por profissionais e amadores.",
    incon: '<i class="fa-solid fa-wand-magic-sparkles"></i>'
}]
//Objeto

$.each(dataSkills, function(index, element) {
    $('.skills-group').append(`<div class="skill-single"><h1>${element.incon}</h1></div>`)
    console.log(index)

    $('.skills-group-cll').append(`<div class="skill-single"><h1>${element.incon}</h1></div>`)
    console.log(index)

    $('.skill-single').click(function() {
        $('.text-skill').html(`<h3>${element.skill}</h3>
        <p>${element.description}</p>`)
        $('.skill-single').css('color','#F26800')
        $(this).css('color','#A3CCAB')
        $(this).break();
    })
  });
})
