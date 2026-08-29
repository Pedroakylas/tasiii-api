function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim().length === 0) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (titulo.trim().length < 5) {
        throw new Error("O título do chamado deve possuir no mínimo 5 caracteres.");
    }

    if (titulo.trim().length > 100) {
        throw new Error("O título do chamado deve possuir no máximo 100 caracteres.");
    }

    return true;
}

export default validarChamado;
console.log(validarChamado("teste"));