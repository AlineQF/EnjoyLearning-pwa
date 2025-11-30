# EnjoyLearning PWA: ODS 4 — Educação de Qualidade 

## Apresentação do Projeto

| | Detalhe |
| :--- | :--- |
| **Estudante** | Aline Queiroz Felipe |
| **Disciplina** | Programação para Dispositivos Móveis |
| **Tema Central** | **ODS 4: Educação de Qualidade** |
| **Tecnologia** | Progressive Web App (PWA) |

---

## 🚀 Demonstração e Status

| Item | URL / Status |
| :--- | :--- |
| **Repositório GitHub** | `https://github.com/AlineQF/EnjoyLearning-pwa.git` |
| **Status do PWA** | ✔️ **100% Funcional e Instalável** |

---

## 1. Problema e Justificativa (Por que este App?)

Ao escolher esse projeto: o ODS 4; percebi que hoje é extremamente difícil meninos e meninas completarem o ensino primário, ou chegar até o ensino fundamental, e isso exige soluções que superem barreiras de acesso. O desafio é oferecer **educação de qualidade** para crianças (5 a 9 anos) em cenários de **conexão limitada** e garantir alto **engajamento**.

Este projeto resolve isso através da arquitetura PWA, que oferece:

* **Acessibilidade:** Instalação direta no celular e funcionalidade **Offline**.

* **Motivação:** Um sistema de **Gamificação** simples e imediato que transforma lições de alfabetização em missões de forma divertida e intuitiva.

## 2. Objetivos do Projeto

### Objetivo Geral

Desenvolver e entregar um PWA acessível e gamificado para alfabetização, demonstrando a implementação de Service Worker e a persistência de dados.

### Objetivos Específicos e Comprovação

| Objetivo | Status | Prova Técnica |
| :--- | :--- | :--- |
| **Instalabilidade PWA** | ✔️ Concluído | Arquivo `manifest.json` com ícones e metadados. |
| **Modo Offline** | ✔️ Concluído | Arquivo `sw.js` (Service Worker) para caching de ativos. |
| **Persistência de Dados** | ✔️ Concluído | Uso de `localStorage` para salvar o placar do usuário. |
| **UX Infantil** | ✔️ Concluído | Interface com design lúdico, cores vivas e navegação por seções. |
| **Estrutura de Módulos** | ✔️ Concluído | Apresentação de módulos de alfabetização (Sílabas, Palavras). |

## 3. Arquitetura e Detalhes Técnicos

O projeto utiliza uma arquitetura **Monolítica** em um único `index.html` para otimizar o carregamento e simplificar o *caching* do Service Worker.

| Categoria | Detalhes Técnicos |
| :--- | :--- |
| **Tipo Principal** | Progressive Web App (PWA) |
| **Linguagens** | HTML5, CSS3 (Tailwind CSS - CDN), JavaScript |
| **Estrutura de Código** | `index.html` (UI, Lógica JS, Controle de Páginas) |
| **Armazenamento** | `localStorage` (para pontuação acumulada) |
| **Funções PWA** | `sw.js` (Estratégia Cache-First), `manifest.json` |

## 4. Estrutura do Repositório (Requisitos para PWA)

Os arquivos essenciais para o funcionamento do PWA estão na raiz:

| Arquivo | Função |
| :--- | :--- |
| **`index.html`** | Estrutura principal, design (Dashboard), lógica de navegação e gamificação. |
| **`sw.js`** | O Service Worker. Responsável por armazenar o aplicativo em cache para funcionar offline. |
| **`manifest.json`** | Define metadados (ícones, nome, tema) para a instalação no dispositivo. |

## 5. Instalação e Execução

Para rodar e testar a funcionalidade offline:

1. **Baixe o Projeto:**

   ```bash
   git clone [https://github.com/AlineQF/EnjoyLearning-pwa.git](https://github.com/AlineQF/EnjoyLearning-pwa.git)
   cd EnjoyLearning-PWA



## 6. Evidências Visuais
<img width="1285" height="708" alt="image" src="https://github.com/user-attachments/assets/fa95b5db-434f-4adc-89d0-43d0da0989a9" />

<img width="1285" height="708" alt="image" src="https://github.com/user-attachments/assets/a772054d-87d9-4ce1-9db4-104a601dfb53" />

<img width="1285" height="708" alt="image" src="https://github.com/user-attachments/assets/c368f936-24fd-4c4b-8783-58d24343bf2b" />

<img width="1285" height="708" alt="image" src="https://github.com/user-attachments/assets/3d5b6a35-505d-4ff2-9e35-ed2ef8d83635" />



