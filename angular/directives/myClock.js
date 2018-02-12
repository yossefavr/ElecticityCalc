angular.module('eCalc',[]).directive('myClock', function($interval){
    return{
      scope: true, // isolate
      transclude: true, // bring in any text or elements
      template: "<span>kaka<span ng-transclude></span><span>{{date.now() | date: timeFormat}}</span></span>",
      /**
       * $s scope
       * $e element
       * $a attributes
       */
      link: function ($s, $e, $a) {
            $s.timeFormat = ($a.format === '12') ? 'hh:mm:ss a' : 'HH:mm:ss';
          $s.date = Date;
          $interval(null, 1000);
      }
    };
  });