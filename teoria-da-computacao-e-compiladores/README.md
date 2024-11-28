#  Projeto: Desenvolvimento de Compilador

##  Descrição
Este projeto tem como objetivo desenvolver um compilador que permita a análise e a execução de códigos baseados em uma linguagem definida por palavras-chave específicas, árvores abstratas e regras de produção. O projeto será inteiramente desenvolvido em **TypeScript**, garantindo um código robusto, escalável e legível.

##  Ferramentas Utilizadas
- **TypeScript**: Linguagem principal para o desenvolvimento do compilador, proporcionando tipagem estática e maior confiabilidade no código.
- **Visual Studio Code**: IDE utilizada para a escrita, organização e depuração do código.

##  Objetivo
Criar um compilador funcional que seja capaz de processar códigos escritos em uma linguagem específica, analisando sua sintaxe e semântica, e gerando saídas baseadas em regras definidas. Este projeto visa introduzir conceitos fundamentais de linguagens formais e compiladores, proporcionando uma experiência prática e educacional.

##  Principais Funcionalidades
- **Palavras-chave Personalizadas**: Definição e reconhecimento de palavras-chave específicas para a linguagem.
- **Árvore Sintática Abstrata (AST)**: Construção e manipulação de uma representação hierárquica do código, facilitando sua análise e execução.
- **Regras de Produção**: Implementação de regras formais que guiam a estruturação e validação do código.
- **Análise Sintática e Semântica**: Verificação do código para garantir conformidade com as regras definidas.
- **Execução e Geração de Saída**: Transformação do código em resultados, simulando o comportamento de linguagens de programação reais.

##  Execução

### Passo 1: Clonar o Repositório  
Clone o repositório para o seu computador utilizando o comando:  
```bash
git clone <URL_DO_REPOSITORIO>
```
Entre no diretório do projeto:  
```bash
cd <NOME_DO_REPOSITORIO>
```

### Passo 2: Instalar as Dependências  
Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, instale as dependências necessárias executando:  
```bash
npm install
```

### Passo 3: Executar o Código  
Para compilar um arquivo `.progol`, utilize o seguinte comando:  
```bash
npx ts-node main.ts nome_do_seu_arquivo.progol
```

Pronto! Agora você pode executar o compilador com seus arquivos.
