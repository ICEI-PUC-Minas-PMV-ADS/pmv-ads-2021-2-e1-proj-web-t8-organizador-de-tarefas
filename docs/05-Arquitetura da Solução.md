# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução. 

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue. 

![image](https://user-images.githubusercontent.com/90807404/138004500-7b8380df-6037-47f3-809c-6367fd6bcdac.png)

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON.
 - **News API** - plataforma que permite o compartilhamento das tarefas no Facebook.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

O site utiliza a plataforma do Microsoft Azure como ambiente de hospedagem do site do projeto. O site é mantido no ambiente desta [URL](https://portal.azure.com/#blade/HubsExtension/ArgQueryBlade/query/%2F%2F%20Execute%20a%20consulta%20para%20ver%20os%20resultados.%0A/formatResults/true/).

A publicação do site no Microsoft Azure é feita por meio de uma submissão do projeto (push) via GitHub para o repositório remoto que se encontra [neste](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t8-organizador-de-tarefas/) endereço.
