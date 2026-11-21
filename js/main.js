/* Scroll story: switches scenes, headings and dots as you scroll */
(function(){
 var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 var story=document.getElementById('story'),scenes=[0,1,2,3].map(function(i){return document.getElementById('s'+i)}),
 chaps=document.querySelectorAll('.chap'),dots=document.querySelectorAll('.dots b'),cue=document.getElementById('cue'),cur=-1;
 function update(){
  var r=story.getBoundingClientRect(),h=story.offsetHeight-innerHeight,p=Math.min(1,Math.max(0,-r.top/h));
  var idx=Math.min(3,Math.floor(p*4));
  if(idx!==cur){cur=idx;scenes.forEach(function(s,i){s.classList.toggle('on',i===idx)});
   chaps.forEach(function(c,i){c.classList.toggle('on',i===idx)});dots.forEach(function(d,i){d.classList.toggle('on',i===idx)});}
  cue.style.opacity=p>.03?0:1;
 }
 addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
})();
