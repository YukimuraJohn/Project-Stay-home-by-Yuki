// Um pouco do básico da programação Javascript 
const express = require("express") 
const server =express()

//configurar os arquivos estáticos(css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks   >> nunjucks serve para adicionar variáveis no html
const nunjucks=require("nunjucks")
nunjucks.configure("views", { 
    express: server,
    noCache: true,   //boolean
})

const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title:"Cursos de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam aspernatur quam beatae, codding",
        url:"https://www.udemy.com/" 
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title:"Karaoke",
        category:"Lazer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam aspernatur quam beatae, canta",
        url:"KaraokeParty.com" 
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title:"Jogos",
        category:"Diversão",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam aspernatur quam beatae, plays",
        url:"https://nuuvem.com" 
    },
    {
        img:"https://image.flaticon.com/icons/svg/2793/2793887.svg",
        title:"Roupas",
        category:"Beleza",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam aspernatur quam beatae, facilis roupa",
        url:"https://www.kanui.com.br/" 
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729069.svg",
        title:"Yoga",
        category:"Meditação",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam aspernatur quam beatae, facilis roupa",
        url:"https://www.minhavida.com.br/bem-estar/tudo-sobre/1042-meditacao" 
    },
    {
        img:"https://www.flaticon.com/premium-icon/icons/svg/2574/2574817.svg",
        title:"Produtos",
        category:"Compras",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam aspernatur quam beatae, facilis roupa",
        url:"https://pt.aliexpress.com/" 
    },
]

//criei uma rota /
//capturo o pedido do cliente para responder
server.get("/", function (req, res){
    const revesedIdeas =[...ideas].reverse()
    let lastIdeas =[] 
    for (let idea of revesedIdeas)  {
        if(lastIdeas.length < 3) {
            lastIdeas.push(idea)
        } 
    }
    return res.render("Start.html", {ideas: lastIdeas})
})

server.get("/ideais", function (req, res){
    
    const revesedIdeas =[...ideas].reverse()

    return res.render("ideias.html", {ideas: revesedIdeas})
})

//servidor está ligado na porta 3000
server.listen(3000)