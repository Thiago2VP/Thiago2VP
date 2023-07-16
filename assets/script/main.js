let initalTyper = 0;
let secondTyper = 0;
let speed = 100;
let mainTitle = "Thiago Pereira";
let mainSubTitle = "Portifólio";
let actualFramework = "initial";
let actualProjPage = 0;
const nodeProjects = [
    {
        title: "FacilCode",
        description: 'Projeto FullStack com função de gerar QR Codes estilizáveis para pagamentos PIX. Nele foram usados pricipalmente Express e MariaDb para o backend e React para o frontend. O repositório é privado mas algumas imagens podem ser vistas <a href="https://pt.linkedin.com/posts/thiago-vasconcelos-pereira_qrcodepix-awesomeqr-express-activity-7082775601828216832-YrbQ" target="_blank">nesse post</a> e apenas o frontend <a href="https://facilcode-prototype.netlify.app/" target="_blank">aqui</a>.',
        element: '<iframe src="https://facilcode-prototype.netlify.app/" title="FacilCode Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "KeyManager",
        description: 'Projeto FullStack com função de armazenar informações de conta, como login e senha, para um usuário criado. Nele foram usados pricipalmente Express e MariaDb para o backend e React para o frontend. O projeto pode ser conferido no Github com <a href="https://github.com/Thiago2VP/keymanagerbackend" target="_blank">backend</a> e <a href="https://github.com/Thiago2VP/keymanagerfrontend" target="_blank">frontend</a> separados, além desse <a href="https://pt.linkedin.com/posts/thiago-vasconcelos-pereira_express-axios-cors-activity-7082787857345449984-9F4N" target="_blank">post</a>.',
        element: '<iframe src="https://keymanager-prototype.netlify.app/" title="KeyManager Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "KeyManager Lite",
        description: 'Projeto FullStack com função de armazenar informações de conta, como login e senha, para um usuário criado. Nele foram usados pricipalmente Express e Lowdb para o backend e React para o frontend, neste a informação é armazena em um arquivo JSON. O backend pode ser conferido no <a href="https://github.com/Thiago2VP/keymanagerlitebackend" target="_blank">Github</a> e o frontend é o mesmo da outra versão, há um post com imagens <a href="https://pt.linkedin.com/posts/thiago-vasconcelos-pereira_express-cors-lowdb-activity-7082810022614712320-U38T" target="_blank">aqui</a>.',
        element: '<iframe src="https://keymanager-prototype.netlify.app/" title="KeyManager Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "Cards Collection",
        description: 'Projeto em React com uma exibição de coleções de cartas da Elmachips. Pode conferir o projeto no <a href="https://github.com/Thiago2VP/cards_collection" target="_blank">Github</a> e na <a href="https://cards-collection.netlify.app/" target="_blank">página web</a>.',
        element: '<iframe src="https://cards-collection.netlify.app/" title="CardsCollection Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "Leitura",
        description: 'Projeto FullStack para não se perder na leitura de algo com lançamento contínuo, registrando capítulo lido e com link para página da leitura. Nele foram usados pricipalmente Express e Lowdb para o backend e React para o frontend. Pode ser conferido no Github com <a href="https://github.com/Thiago2VP/leiturabackend" target="_blank">backend</a> e <a href="https://github.com/Thiago2VP/leiturafrontend" target="_blank">frontend</a> separados.',
        element: '<iframe src="https://leitura-prototype.netlify.app/" title="Leitura Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    }
];
const hcjProjects = [
    {
        title: "FacilCode",
        description: 'Site estático com função de gerar QR Codes estilizáveis para pagamentos PIX. Nele foram usados HTML, CSS e JavaScript. O repositório é privado mas o site pode ser visitado <a href="https://facilcode.com.br/" target="_blank">aqui</a>.',
        element: '<iframe src="https://facilcode.com.br/" title="FacilCode Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "Tierlist",
        description: 'Site estático usando HTML, CSS e JavaScript para criar tierlists. O projeto pode ser conferido no <a href="https://github.com/Thiago2VP/tierList" target="_blank">Github</a> e na <a href="https://tier-list-t2vp.netlify.app/" target="_blank">página web</a>.',
        element: '<iframe src="https://tier-list-t2vp.netlify.app/" title="TierList Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "Suburban",
        description: 'Simulação de uma Landing Page de loja de roupas, com o nome da loja do GTA, usa quase puramente HTML e CSS, é de antes do meu aprendizado de JavaScript. Pode conferir o projeto no <a href="https://github.com/Thiago2VP/SuburbanLandingPage" target="_blank">Github</a> e na <a href="https://thiago2vp.github.io/SuburbanLandingPage/" target="_blank">página web</a>.',
        element: '<iframe src="https://thiago2vp.github.io/SuburbanLandingPage/" title="Suburban Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "E-Corp",
        description: 'Simulação de uma Landing Page de empresa de tecnologia, com o nome da empresa do Mr Robot, usa quase puramente HTML e CSS, é de antes do meu aprendizado de JavaScript. Pode conferir o projeto no <a href="https://github.com/Thiago2VP/E-corp-LandingPage" target="_blank">Github</a> e na <a href="https://thiago2vp.github.io/E-corp-LandingPage/" target="_blank">página web</a>.',
        element: '<iframe src="https://thiago2vp.github.io/E-corp-LandingPage/" title="E-Corp Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "Pizza Planet",
        description: 'Simulação de uma Landing Page de lanchonete, com o nome da empresa das animações da Pixar, usa quase puramente HTML e CSS, é de antes do meu aprendizado de JavaScript. Pode conferir o projeto no <a href="https://github.com/Thiago2VP/PizzaPlanet-LandingPage" target="_blank">Github</a> e na <a href="https://thiago2vp.github.io/PizzaPlanet-LandingPage/" target="_blank">página web</a>.',
        element: '<iframe src="https://thiago2vp.github.io/PizzaPlanet-LandingPage/" title="Pizza Planet Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    },
    {
        title: "Daily Planet",
        description: 'Imitação da página do New York Times no momento da criação desta página, usando o nome da empresa das HQs do Superman, usa quase puramente HTML e CSS, é de antes do meu aprendizado de JavaScript. Pode conferir o projeto no <a href="https://github.com/Thiago2VP/DailyPlanetLandingPage" target="_blank">Github</a> e na <a href="https://thiago2vp.github.io/DailyPlanetLandingPage/" target="_blank">página web</a>.',
        element: '<iframe src="https://thiago2vp.github.io/DailyPlanetLandingPage/" title="Daily Planet Site" style="width: 100%;min-height: 80vh;border: 1px solid black;background-color: white;"></iframe>'
    }
];
const pythonProjects = [
    {
        title: "Key Manager",
        description: 'Projeto desktop em python para armazenar informações de conta, como login e senha, em um banco de dados Mariadb. Usa o PyQt5 para a interface. Pode ser conferido no <a href="https://github.com/Thiago2VP/desktop_key_manager" target="_blank">Github</a> e há um <a href="https://pt.linkedin.com/posts/thiago-vasconcelos-pereira_crypto-base64-mariadb-activity-7082856337948221440-2utX" target="_blank">post</a> sobre.',
        element: '<img style="max-width: 95%;" src="https://media.licdn.com/dms/image/D4D22AQFjfoq-73EaJg/feedshare-shrink_2048_1536/0/1688684541986?e=1692230400&v=beta&t=ybfnOKWQ5bggHvxPFz9_WLLFQcXcgfyt6pNdYMwOM6g" alt="Apresentação do Projeto">'
    },
    {
        title: "Calculadora",
        description: 'Projeto desktop de uma simples calculadora em python feita para treinar o uso do Tkinter, pode ser conferida no <a href="https://github.com/Thiago2VP/Calculadora" target="_blank">Github</a>.',
        element: '<img style="max-width: 95%;" src="https://raw.githubusercontent.com/Thiago2VP/Calculadora/main/assets/imagem.png" alt="Imagem da Calculadora">'
    }
];

function typeWriter() {

    if (initalTyper < mainTitle.length) {
        document.querySelector("#mainTittle").innerHTML += mainTitle.charAt(initalTyper);
        initalTyper++;
        setTimeout(typeWriter, speed);
    }
    if (initalTyper == mainTitle.length) {
        if (secondTyper < mainSubTitle.length) {
            document.querySelector("#mainSubTittle").innerHTML += mainSubTitle.charAt(secondTyper);
            secondTyper++;
            setTimeout(typeWriter, speed);
        }
    }
}

function showElement(id) {
    document.querySelector(id).style.visibility = "visible";
}

function changeProject(frameWorkVec, Page, frameWork) {
    let documenntTitle = document.querySelector("#projectTitle");
    let documenntDescription = document.querySelector("#projectDescription");
    let documenntElement = document.querySelector("#projectPresEl");
    documenntTitle.innerHTML = frameWorkVec[Page].title;
    documenntDescription.innerHTML = frameWorkVec[Page].description;
    documenntElement.innerHTML = frameWorkVec[Page].element;
    actualFramework = frameWork;
}

function setProjectInitial(e) {
    let target = e.target;
    if (!target.id) {
        target = target.parentNode;
    }
    actualProjPage = 0;
    if (target.id == "node") {
        changeProject(nodeProjects, actualProjPage, "node");
    } else if (target.id == "hcj") {
        changeProject(hcjProjects, actualProjPage, "hcj");
    } else if (target.id == "python") {
        changeProject(pythonProjects, actualProjPage, "python");
    }
    document.getElementById("specificProject").scrollIntoView();
}

function projectRouter() {
    if (actualFramework === "node") {
        project = {
            vector: nodeProjects,
            nameOf: "node"
        }
        return project;
    } else if (actualFramework === "hcj") {
        project = {
            vector: hcjProjects,
            nameOf: "hcj"
        }
        return project;
    } else if (actualFramework === "python") {
        project = {
            vector: pythonProjects,
            nameOf: "python"
        }
        return project;
    } else {
        return false;
    }
}

function projectBef() {
    projects = projectRouter();
    if (projects) {
        if (actualProjPage === 0) {
            actualProjPage = projects.vector.length - 1;
        } else {
            actualProjPage--;
        }
        changeProject(projects.vector, actualProjPage, projects.nameOf);
    }
    document.getElementById("specificProject").scrollIntoView();
}

function projectAft() {
    projects = projectRouter();
    if (projects) {
        if (actualProjPage === projects.vector.length - 1) {
            actualProjPage = 0;
        } else {
            actualProjPage++;
        }
        changeProject(projects.vector, actualProjPage, projects.nameOf);
    }
    document.getElementById("specificProject").scrollIntoView();
}

typeWriter();

setTimeout(() => {showElement("#indexSection")}, 2500);
setTimeout(() => {showElement("#projectsSection")}, 2600);

document.querySelector("#node").addEventListener("click", setProjectInitial);
document.querySelector("#hcj").addEventListener("click", setProjectInitial);
document.querySelector("#python").addEventListener("click", setProjectInitial);

document.querySelector("#projectBef").addEventListener("click", projectBef);
document.querySelector("#projectAft").addEventListener("click", projectAft);
