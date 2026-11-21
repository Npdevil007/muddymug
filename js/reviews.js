/* Renders REVIEWS (from admin/reviews-data.js) and handles the review form */
(function(){
 var list=document.getElementById('rvList');
 if(!REVIEWS.length){var e=document.createElement('div');e.className='rv-empty';
  var b=document.createElement('b');b.textContent='Be the first to write one.';e.appendChild(b);
  e.appendChild(document.createTextNode('Been for a coffee, a cake or a class? A few lines from you helps the next person decide.'));list.appendChild(e);}
 REVIEWS.forEach(function(r){var d=document.createElement('div');d.className='rev';
  var st=document.createElement('div');st.className='st';st.textContent='★★★★★'.slice(0,r.stars)+'☆☆☆☆☆'.slice(0,5-r.stars);
  var p=document.createElement('p');p.textContent=r.text;var m=document.createElement('small');m.textContent=r.name;
  d.appendChild(st);d.appendChild(p);d.appendChild(m);list.appendChild(d);});
 document.getElementById('rf').addEventListener('submit',function(ev){ev.preventDefault();
  var c=document.querySelector('input[name=r]:checked'),n=document.getElementById('rn').value.trim(),t=document.getElementById('rt').value.trim();
  var body='Review for Muddy Mug'+(c?' ('+c.value+'/5)':'')+': '+t+(n?' — '+n:'');
  location.href='sms:+9779811759805?&body='+encodeURIComponent(body);});
})();
