angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page3', {
    url: '/page3',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('1', {
    url: '/page4',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('2', {
    url: '/page5',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('page8', {
    url: '/page8',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('12', {
    url: '/page9',
    templateUrl: 'templates/12.html',
    controller: '12Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/page13',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('3', {
    url: '/page14',
    templateUrl: 'templates/3.html',
    controller: '3Ctrl'
  })

  .state('4', {
    url: '/page15',
    templateUrl: 'templates/4.html',
    controller: '4Ctrl'
  })

  .state('5', {
    url: '/page16',
    templateUrl: 'templates/5.html',
    controller: '5Ctrl'
  })

  .state('6', {
    url: '/page17',
    templateUrl: 'templates/6.html',
    controller: '6Ctrl'
  })

  .state('7', {
    url: '/page18',
    templateUrl: 'templates/7.html',
    controller: '7Ctrl'
  })

  .state('8', {
    url: '/page19',
    templateUrl: 'templates/8.html',
    controller: '8Ctrl'
  })

  .state('9', {
    url: '/page20',
    templateUrl: 'templates/9.html',
    controller: '9Ctrl'
  })

  .state('22', {
    url: '/page22',
    templateUrl: 'templates/22.html',
    controller: '22Ctrl'
  })

  .state('13', {
    url: '/1',
    templateUrl: 'templates/13.html',
    controller: '13Ctrl'
  })

  .state('23', {
    url: '/page24',
    templateUrl: 'templates/23.html',
    controller: '23Ctrl'
  })

  .state('32', {
    url: '/page25',
    templateUrl: 'templates/32.html',
    controller: '32Ctrl'
  })

  .state('42', {
    url: '/page26',
    templateUrl: 'templates/42.html',
    controller: '42Ctrl'
  })

  .state('52', {
    url: '/page27',
    templateUrl: 'templates/52.html',
    controller: '52Ctrl'
  })

  .state('62', {
    url: '/page28',
    templateUrl: 'templates/62.html',
    controller: '62Ctrl'
  })

  .state('72', {
    url: '/page29',
    templateUrl: 'templates/72.html',
    controller: '72Ctrl'
  })

  .state('82', {
    url: '/page30',
    templateUrl: 'templates/82.html',
    controller: '82Ctrl'
  })

  .state('92', {
    url: '/page31',
    templateUrl: 'templates/92.html',
    controller: '92Ctrl'
  })

  .state('14', {
    url: '/page33',
    templateUrl: 'templates/14.html',
    controller: '14Ctrl'
  })

  .state('24', {
    url: '/page34',
    templateUrl: 'templates/24.html',
    controller: '24Ctrl'
  })

  .state('33', {
    url: '/page35',
    templateUrl: 'templates/33.html',
    controller: '33Ctrl'
  })

  .state('43', {
    url: '/page36',
    templateUrl: 'templates/43.html',
    controller: '43Ctrl'
  })

  .state('53', {
    url: '/page37',
    templateUrl: 'templates/53.html',
    controller: '53Ctrl'
  })

  .state('63', {
    url: '/page38',
    templateUrl: 'templates/63.html',
    controller: '63Ctrl'
  })

  .state('73', {
    url: '/page39',
    templateUrl: 'templates/73.html',
    controller: '73Ctrl'
  })

  .state('83', {
    url: '/page40',
    templateUrl: 'templates/83.html',
    controller: '83Ctrl'
  })

  .state('93', {
    url: '/page41',
    templateUrl: 'templates/93.html',
    controller: '93Ctrl'
  })

  .state('34', {
    url: '/page42',
    templateUrl: 'templates/34.html',
    controller: '34Ctrl'
  })

  .state('page43', {
    url: '/page43',
    templateUrl: 'templates/page43.html',
    controller: 'page43Ctrl'
  })

  .state('page44', {
    url: '/page44',
    templateUrl: 'templates/page44.html',
    controller: 'page44Ctrl'
  })

  .state('11', {
    url: '/page45',
    templateUrl: 'templates/11.html',
    controller: '11Ctrl'
  })

  .state('15', {
    url: '/page46',
    templateUrl: 'templates/15.html',
    controller: '15Ctrl'
  })

  .state('25', {
    url: '/page48',
    templateUrl: 'templates/25.html',
    controller: '25Ctrl'
  })

  .state('35', {
    url: '/page49',
    templateUrl: 'templates/35.html',
    controller: '35Ctrl'
  })

  .state('44', {
    url: '/page50',
    templateUrl: 'templates/44.html',
    controller: '44Ctrl'
  })

  .state('54', {
    url: '/page51',
    templateUrl: 'templates/54.html',
    controller: '54Ctrl'
  })

  .state('64', {
    url: '/page52',
    templateUrl: 'templates/64.html',
    controller: '64Ctrl'
  })

  .state('74', {
    url: '/page53',
    templateUrl: 'templates/74.html',
    controller: '74Ctrl'
  })

  .state('84', {
    url: '/page54',
    templateUrl: 'templates/84.html',
    controller: '84Ctrl'
  })

  .state('94', {
    url: '/page55',
    templateUrl: 'templates/94.html',
    controller: '94Ctrl'
  })

  .state('21', {
    url: '/page56',
    templateUrl: 'templates/21.html',
    controller: '21Ctrl'
  })

  .state('22', {
    url: '/page57',
    templateUrl: 'templates/22.html',
    controller: '22Ctrl'
  })

  .state('23', {
    url: '/page58',
    templateUrl: 'templates/23.html',
    controller: '23Ctrl'
  })

  .state('24', {
    url: '/page59',
    templateUrl: 'templates/24.html',
    controller: '24Ctrl'
  })

  .state('25', {
    url: '/page60',
    templateUrl: 'templates/25.html',
    controller: '25Ctrl'
  })

  .state('26', {
    url: '/page61',
    templateUrl: 'templates/26.html',
    controller: '26Ctrl'
  })

  .state('28', {
    url: '/page62',
    templateUrl: 'templates/28.html',
    controller: '28Ctrl'
  })

  .state('27', {
    url: '/page63',
    templateUrl: 'templates/27.html',
    controller: '27Ctrl'
  })

  .state('29', {
    url: '/page64',
    templateUrl: 'templates/29.html',
    controller: '29Ctrl'
  })

  .state('31', {
    url: '/page32',
    templateUrl: 'templates/31.html',
    controller: '31Ctrl'
  })

  .state('32', {
    url: '/page47',
    templateUrl: 'templates/32.html',
    controller: '32Ctrl'
  })

  .state('33', {
    url: '/page65',
    templateUrl: 'templates/33.html',
    controller: '33Ctrl'
  })

  .state('34', {
    url: '/page66',
    templateUrl: 'templates/34.html',
    controller: '34Ctrl'
  })

  .state('35', {
    url: '/page67',
    templateUrl: 'templates/35.html',
    controller: '35Ctrl'
  })

  .state('36', {
    url: '/page68',
    templateUrl: 'templates/36.html',
    controller: '36Ctrl'
  })

  .state('37', {
    url: '/page69',
    templateUrl: 'templates/37.html',
    controller: '37Ctrl'
  })

  .state('38', {
    url: '/page70',
    templateUrl: 'templates/38.html',
    controller: '38Ctrl'
  })

  .state('39', {
    url: '/page71',
    templateUrl: 'templates/39.html',
    controller: '39Ctrl'
  })

$urlRouterProvider.otherwise('/page8')


});