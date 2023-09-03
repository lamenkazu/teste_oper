# Getting Started

Para rodar o servidor:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Então abra no browser [http://localhost:3000](http://localhost:3000) para ver o resultado

# Fluxo do usuário
Este é um miniblog de Fake News.
Há 4 paginas: Home, Article, SignIn, SignUp
- SignIn: Loga um usuário já existente
- SignUp: Cadastra um novo usuário no Miniblog para que possa comentar e curtir comentários.
- Header: Header distribuido entre todas as paginas possui a Logo do site que leva de volta para a Home e um botão reativo, que caso esteja logado, mostra SignOut para sair da conta, e SignIn, caso não tenha usuário logado. Além não ser exibido nas paginas SignIn e SignUp, as quais só podem ser acessadas caso não tenha um usuário logado.
- Home: Lista algumas infos pegas da News API, quando clica em um artigo é redirecionado para a pagina do artigo.
- Article: Informações completas dos artigos com lista de comentários e opção para comentar caso tenha um cadastro.
- Comentarios: Cada comentário possui uma lista de respostas; isso foi feito intencionalmente, mas poderia ser possível realizar respostas de respostas se uma Resposta de comentário fosse do mesmo tipo que um Comentário, porém foi uma decisão de projeto não aninhar os comnetários dessa forma.


# Pros
Todos os requisitos cumpridos:
- Feito em NextJs
- Obtenção de dados da News API
- Requisitos de paginas realizados
- Feito em Typescript
- Banco de dados Firebase para comentários e usuários
- Uso de bibliotecas auxiliares: dayjs, tailwind
- Código claro, comentado e identado
- Criação de UIState para localização da pagina atual

# Contras
- Não consegui utilizar o GitHubPages corretamente com o NextJs
- Falhas de responsividade no código nos comentários e na disponibilização de notícias na Home.
- API Keys do Firebase Publicas (Sem utilização de um env.local ou algo do tipo, pois pretendia tentar liberar esse acesso para a GithubPage, e como ela já seria visível pelos commits anteriores, não optei por modificar isso. Pode usar essa mesma chave para testar o código, não há problema.)
- As tipagens do typescript (Com Type ou Interface) deveriam ter sido alocadas em um único local e ser exportadas para onde fossem necessárias, porém elas estão nos arquivos que foram criadas pela primeira vez, tornando o código menos claro. Isso foi aplicado para outras coisas no código, mas isso é uma coisa que poderia ter sido melhor implementada.

# Melhorias Possíveis/Futuras
Estas são melhorias que, dado o tempo, não foram implementadas, mas foram pensadas. (Infelizmente Segunda Feira não tenho tempo para fazer, então não vou tentar sobrecarregar e enviar coisas incompletas, apenas aperfeiçoar o que já foi feito.)
- A implementação de Testes foi pensada, porém outras coisas foram priorizadas para serem mais efetivas e mostrar conhecimentos do React.
- Adicionar opção para Excluir comentário (ou respostas à um comentario)
- Adicionar Recuperação de senha para usuários.
- Organização da Home:
  - Listar todas as notícias de modo que aproximadamente 12 delas sejam exibidas de uma vez, com opção de passar para as próximas.
  - Adicionar Filtros para ordenação das notícias, como Exibir por data, etc.

# Visualização Geral

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/6a400dcc-9878-472c-840a-df13e32dd7e3)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/2bfe41ee-8030-4c58-8930-b90c9af84f5a)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/54f6828e-c1fb-4b54-a4df-69a9b9520fc2)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/6533fbbe-1c8a-4ed4-b347-ad24005933d0)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/f893d98d-1691-4a35-afd4-edc799173e64)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/da5e63aa-caba-4334-8410-c01e7e84d76d)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/e3c985c9-3e15-437c-8baa-dfb3088e03e9)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/a552eaae-7325-4ece-ab65-3d1aedf1cd28)

![image](https://github.com/lamenkazu/teste_oper/assets/23318318/e2c54303-c9f9-4e39-9f64-8feef8d03f44)

neste ultimo caso, uma conta está logada e ela pode ver quais comentários ela deu Like.







