class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome=nome
        this.endereco=endereco
        this.telefones=new Set()
        this.#cpf=cpf
    }

    get getCpf(){
        return this.#cpf
    }

    adicionarTelefone(telefone){
        this.telefones.add(telefone)
    }

    nomeAlta(){
        return this.nome.toUpperCase()
    }
    nomeBaixa(){
        return this.nome.toLowerCase()
    }
}

class Telefone {
    constructor(ddd, numero){
        this.ddd=ddd
        this.numero=numero
    }

    detalhes(){
        return `
        ddd: ${this.ddd} numero: ${this.numero}
        `
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero){
        this.estado=estado
        this.cidade=cidade
        this.rua=rua
        this.numero=numero
    }

    estadoAlta(){
        return this.estado.toUpperCase()
    }
    cidadeAlta(){
        return this.cidade.toUpperCase()
    }
    ruaAlta(){
        return this.rua.toUpperCase()
    }
    estadoBaixa(){
        return this.estado.toLowerCase()
    }
    cidadeBaixa(){
        return this.cidade.toLowerCase()
    }
    ruaBaixa(){
        return this.rua.toLowerCase()
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco=endereco
        this.nomeFantasia=nomeFantasia
        this.razaoSocial=razaoSocial
        this.#cnpj=cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    adicionarTelefone(telefone){
        this.telefones.add(telefone)
    }
    adicionarCliente(cliente){
        this.clientes.add(cliente)
    }

    get getCnpj(){
        return this.#cnpj
    }

    razaoSocialAlta(){
        return this.razaoSocial.toUpperCase()
    }
    nomeFantasiaAlta(){
        return this.nomeFantasia.toUpperCase()
    }
    razaoSocialBaixa(){
        return this.razaoSocial.toLowerCase()
    }
    nomeFantasiaBaixa(){
        return this.nomeFantasia.toLowerCase()
    }

    detalhes(){
        return `
        Razão social: ${this.razaoSocial}
        Nome fantasia: ${this.nomeFantasia}
        ----------------
        ${[...this.clientes].map(cliente => `
        Nome: ${cliente.nome}
        Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero}
        ${[...cliente.telefones].map(telefone => `
        ddd: ${telefone.ddd} número: ${telefone.numero}`).join('')}
        `).join('')}
        `
    }
}

tel1Cli1 = new Telefone('12', '3872327')
tel2Cli1 = new Telefone('12', '288409409')
endCli1 = new Endereco('sp', 'sjc', 'rua a', '123')
cli1 = new Cliente('juju', '123288832', endCli1)
cli1.adicionarTelefone(tel1Cli1)
cli1.adicionarTelefone(tel2Cli1)

tel1Cli2 = new Telefone('12', '32445455')
tel2Cli2 = new Telefone('12', '23843984398')
endCli2 = new Endereco('sp', 'sjc', 'rua b', '439')
cli2 = new Cliente('maria', '8392982838', endCli2)
cli2.adicionarTelefone(tel1Cli2)
cli2.adicionarTelefone(tel2Cli2)

tel1Cli3 = new Telefone('12', '389823938')
tel2Cli3 = new Telefone('12', '8787328090')
endCli3 = new Endereco('sp', 'sjc', 'rua c', '938')
cli3 = new Cliente('joao', '78727932', endCli3)
cli3.adicionarTelefone(tel1Cli3)
cli3.adicionarTelefone(tel2Cli3)

tel1Cli4 = new Telefone('12', '132489348')
tel2Cli4 = new Telefone('12', '1832238983')
endCli4 = new Endereco('sp', 'sjc', 'rua z', '561')
cli4 = new Cliente('caio', '87832298328', endCli4)
cli4.adicionarTelefone(tel1Cli4)
cli4.adicionarTelefone(tel2Cli4)

tel1Cli5 = new Telefone('12', '82198282')
tel2Cli5 = new Telefone('12', '873872722')
endCli5 = new Endereco('sp', 'sjc', 'rua w', '728')
cli5 = new Cliente('lele furtado', '8737823298', endCli5)
cli5.adicionarTelefone(tel1Cli5)
cli5.adicionarTelefone(tel2Cli5)

telEmp1 = new Telefone('12', '29819892')
telEmp2 = new Telefone('12', '893282893')
endEmp = new Endereco('sp', 'sjc', 'rua l', '829')
emp = new Empresa('Coca-cola ltda', 'Coca-cola', '98398329898', endEmp)
emp.adicionarTelefone(telEmp1)
emp.adicionarTelefone(telEmp2)
emp.adicionarCliente(cli1)
emp.adicionarCliente(cli2)
emp.adicionarCliente(cli3)
emp.adicionarCliente(cli4)
emp.adicionarCliente(cli5)

console.log(emp.detalhes())