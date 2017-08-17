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
                        { title: 'JAVASCRIPT', content: "Tabs will become paginated if there isn't enough room for them.", porcentagem: "20%" },
                        { title: 'CSS', content: "You can swipe left and right on a mobile device to change tabs.", porcentagem: "20%" },
                        { title: 'NODEJS', content: "You can bind the selected tab via the selected attribute on the md-tabs element.", porcentagem: "20%" },
                        { title: 'LINUX', content: "If you set the selected tab binding to -1, it will leave no tab selected.", porcentagem: "20%" },
                        { title: 'MICROFOST', content: "If you remove a tab, it will try to select a new one.", porcentagem: "20%" },
                        { title: 'SQL', content: "There's an ink bar that follows the selected tab, you can turn it off if you want.", porcentagem: "20%" },
                        { title: 'ASPNET', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab.", porcentagem: "20%" },
                        { title: 'ANGULARJS', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!", porcentagem: "20%" },
                        { title: 'JQUERY', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs.", porcentagem: "20%" },
                        { title: 'C#', content: "If you're still reading this, you should just go check out the API docs for tabs!", porcentagem: "20%" }
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