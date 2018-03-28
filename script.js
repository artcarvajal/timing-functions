$('input').change(function(){
  if ($('input:checked').val() == 'cubic-bezier') {
    $('.subcontrols').slideDown();
  } else {
    $('.subcontrols').slideUp();
    $('.container-3d thead td').css('animation-timing-function', $(this).val());
  }
})

$('input[type="text"]').keyup(setCubicBezier);
$('#rand-bez').click(setRandomCubicBezier);
$('#ltz').click(setRandomCubicBezier);

function setCubicBezier() {
  let vals = $(this).val().split(',');
  while (vals.length < 4) {
    vals.push(0);
  }
  vals.forEach((val, ind)=>{
    if (val !== "") {
      vals[ind] = parseFloat(val);
    } else {
      vals[ind] = 0;
    }
  });
  
  $('.container-3d thead td').css('animation-timing-function', 'cubic-bezier('+vals[0]+','+vals[1]+','+vals[2]+','+vals[3]+')');
}

function setRandomCubicBezier() {
  if ($('#ltz').prop('checked')) {
  $('.subcontrols input').val(
    (1 - (2 * Math.random())).toFixed(1)+', '+
    (1 - (2 * Math.random())).toFixed(1)+', '+
    (1 - (2 * Math.random())).toFixed(1)+', '+
    (1 - (2 * Math.random())).toFixed(1));
  } else {
    $('.subcontrols input').val(
      Math.random().toFixed(1)+', '+
      Math.random().toFixed(1)+', '+
      Math.random().toFixed(1)+', '+
      Math.random().toFixed(1));
  }
  setCubicBezier.bind($('.subcontrols input')[0]).call();
}