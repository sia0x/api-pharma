# Listar usuários

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/users**
2. ✅ Valida se a requisição foi feita por um **usuário**
3. ✅ Retorna **204** com um array vazio se não tiver nenhum usuário
4. ✅ Retorna **200** com os dados dos usuários

> ## Exceções

1. ✅ Retorna erro **403** se não for um usuário
2. ✅ Retorna erro **500** se der erro ao tentar listar os usuários
