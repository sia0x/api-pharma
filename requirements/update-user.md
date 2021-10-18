# Atualizar um usuário

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/users/{id}**
2. ✅ Valida se a requisição foi feita por um **usuário**
3. ✅ Retorna **200** com os dados do usuário atualizado

> ## Exceções

1. ✅ Retorna erro **404** se o usuário não existir
2. ✅ Retorna erro **403** se não for um usuário
3. ✅ Retorna erro **500** se der erro ao tentar pesquisar o usuário
