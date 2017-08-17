/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var User = (function () {
        function User(name, avatar, url, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.url = url;
            this.bio = bio;
            this.notes = notes;
        }
        return User;
    })();
    ContactManagerApp.User = User;
    var Note = (function () {
        function Note(title, content, porcentagem) {
            this.title = title;
            this.content = content;
            this.porcentagem = porcentagem;
        }
        return Note;
    })();
    ContactManagerApp.Note = Note;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=models.js.map