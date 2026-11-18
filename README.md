# Arquitetura Limpa e Hexagonal

Repositório destinado aos projetos práticos desenvolvidos durante o curso **Arquitetura Limpa + Hexagonal**, com o objetivo de estudar e aplicar princípios de arquitetura de software, boas práticas de desenvolvimento e padrões de organização de código.

Os projetos exploram a separação entre regras de negócio e detalhes de implementação, utilizando conceitos de Clean Architecture e Arquitetura Hexagonal (Ports and Adapters).

## Projetos

### 1. Clean Architecture

Primeiro projeto, voltado à exploração dos fundamentos de arquitetura e princípios de desenvolvimento de software.

**Conceitos explorados:**
- Separação de responsabilidades;
- Inversão de Dependência (DIP);
- Polimorfismo;
- Interfaces e abstrações;
- Casos de uso (Use Cases);
- Separação entre núcleo de negócio e adaptadores externos;
- Abstração de persistência e criptografia.

**Implementações práticas:**
- Exemplos de polimorfismo utilizando diferentes tipos de veículos;
- Demonstração do princípio de inversão de dependência;
- Fluxo de cadastro de usuários;
- Implementações alternativas de repositórios e provedores de criptografia.

### 2. Backend com Arquitetura Hexagonal

Segundo projeto, com aplicação dos conceitos estudados na construção de um backend utilizando API REST.

**Funcionalidades implementadas:**
- Cadastro de usuários;
- Autenticação de usuários;
- Criptografia de senhas utilizando bcrypt;
- Geração e validação de tokens JWT;
- Middleware de autenticação;
- Consulta de produtos por identificador;
- Persistência de usuários utilizando PostgreSQL.

**Conceitos arquiteturais aplicados:**
- Organização entre Core e Adapters;
- Ports and Adapters;
- Inversão de dependência;
- Encapsulamento das regras de negócio em casos de uso;
- Abstração de repositórios;
- Separação entre controllers e regras de negócio.

## Tecnologias utilizadas

- **TypeScript** — Linguagem de programação;
- **Node.js** — Ambiente de execução;
- **Express** — Construção da API REST;
- **PostgreSQL** — Banco de dados relacional;
- **pg-promise** — Integração com PostgreSQL;
- **bcrypt** — Criptografia de senhas;
- **JWT** — Autenticação baseada em tokens;
- **Jest** — Testes automatizados.

## Objetivo

Consolidar conhecimentos sobre arquitetura de software, compreendendo como estruturar aplicações com baixo acoplamento, maior coesão, facilidade de manutenção e testabilidade.

Mais do que reproduzir estruturas arquiteturais, a proposta é compreender os princípios por trás dessas abordagens e desenvolver a capacidade de aplicá-los em projetos reais.

---

📚 **Origem:** Curso Arquitetura Limpa + Hexagonal — Udemy.