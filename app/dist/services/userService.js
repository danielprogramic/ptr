/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Sobre mim',
                    avatar: 'person',
                    url: 'dist/view/sobremim.html',
                    bio: 'I have, have together. Day green own divide wherein. Seas the make days him fish night their don\'t a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn\'t a Fly, form bring land, heaven great. Isn\'t upon. Dominion moving day. So first firmament give spirit every.',
                    notes: [
                        { title: 'JAVASCRIPT', content: "Linguagem que mais uso em diversos projetos seja front ou back.", porcentagem: "80%" },
                        { title: 'CSS', content: "As vezes meio chato lidar, só que é essencial em qualquer projeto.", porcentagem: "20%" },
                        { title: 'NODEJS', content: "Tive a experiência em algumas vezes, gosto muito de usá-lo para aplicações REST.", porcentagem: "20%" },
                        { title: 'LINUX', content: "Meu SO favorito!", porcentagem: "20%" },
                        { title: 'MICROFOST', content: "Quero largar mas sempre preciso de algo", porcentagem: "20%" },
                        { title: 'SQL', content: "Não trabalho direto com ele, mas tenho uma boa experiência.", porcentagem: "20%" },
                        { title: 'ASPNET', content: "Atuei na arquitetura e desenvolvimento de sistemas para internet.", porcentagem: "20%" },
                        { title: 'ANGULARJS', content: "Sempre uso no desenvolvimento client-side.", porcentagem: "20%" },
                        { title: 'JQUERY', content: "Em 2012, em umas das empresas que trabalhei usei muito, até o ano passado usava um pouco, hoje em dia procuro evitá-lo", porcentagem: "20%" },
                        { title: 'C#', content: "Sempre bem vindo quando o assunto plataforma NET.", porcentagem: "20%" },
                        { title: 'JAVA', content: "Nada ve com javascript, já mexi muito na faculdade e tive o prazer em trabalhar com GWT e JSP. Hoje na startup a plataforma é toda feita nele com seu SPRING, Estou estudando para minha certificação Associate.", porcentagem: "20%" },
                        { title: 'MONGODB', content: "Freneticamente estou usando.", porcentagem: "20%" },
                        { title: 'IONIC', content: "Usei no desenvolvimento de um aplicativo virtual para catálogo de roupas e fiz varias experiências.", porcentagem: "20%" }
                    ],
                },
                {
                    name: 'Portfolio',
                    avatar: 'port',
                    url: 'dist/view/portfolio.html',
                    bio: 'Won\'t light from great first years without said creepeth a two and fly forth subdue the, don\'t our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won\'t Dry. Moved. Sea fowl earth fourth.',
                    notes: []
                },
                {
                    name: 'Dicas',
                    avatar: 'dicas',
                    url: '',
                    bio: 'Won\'t light from great first years without said creepeth a two and fly forth subdue the, don\'t our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won\'t Dry. Moved. Sea fowl earth fourth.',
                    notes: []
                },
                {
                    name: 'Contato',
                    avatar: 'contato',
                    url: 'dist/view/contato.html',
                    bio: 'Won\'t light from great first years without said creepeth a two and fly forth subdue the, don\'t our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won\'t Dry. Moved. Sea fowl earth fourth.',
                    notes: []
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    })();
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map