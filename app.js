var question = {42: true};

(function answer(question) {
  
  /*  можно и так(более подробно):
  let num = +Object.keys(question)[0];
  console.log(num);*/

  console.log(+Object.keys(question)[0]);
})(question);

