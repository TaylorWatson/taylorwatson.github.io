$('.changing.example .demo.segment')
.visibility({
  once       : false,
  continuous : true,
  onPassing  : function(calculations) {
    var newColor = 'rgba(0, 0, 0, ' + calculations.percentagePassed +')';
    $(this)
      .css('background-color', newColor)
    ;
  }
})
;