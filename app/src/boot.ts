/// <reference path="_all.ts" />

module ContactManagerApp {
  
  angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons'])
    .service('userService', UserService)
    .controller('mainController', MainController)
    .config(($mdIconProvider: angular.material.IIconProvider,
             $mdThemingProvider: angular.material.IThemingProvider) => {
      $mdIconProvider
        .defaultIconSet('./assets/svg/avatars.svg'                    , 128)
        .icon("google_plus" , "./assets/svg/google_plus.svg"          , 512)
        .icon("hangouts"    , "./assets/svg/hangouts.svg"             , 512)
        .icon("twitter"     , "./assets/svg/twitter.svg"              , 512)
        .icon("share"       , "./assets/svg/ic_share_white_24px.svg"  , 512)
        .icon("phone"       , "./assets/svg/phone.svg"                , 512)
        .icon("person"      , "./assets/svg/customer-service.svg"     , 512)
        .icon("port"        , "./assets/svg/portfolio.svg"            , 512)
        .icon("dicas"       , "./assets/svg/brain.svg"                , 512)
        .icon("contato"     , "./assets/svg/agenda.svg"               , 512)
        .icon('menu'        , './assets/svg/menu.svg'                 , 24);
        
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
    });
    
}