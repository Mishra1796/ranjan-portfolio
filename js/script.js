document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href'); if(href && href.startsWith('#')){ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
  const toggle=document.querySelector('.nav-toggle'); const list=document.querySelector('.nav-list');
  toggle?.addEventListener('click',()=>list?.classList.toggle('open'));
  const reveal=()=>{ document.querySelectorAll('.reveal,.card').forEach(el=>{ const r=el.getBoundingClientRect(); if(r.top<window.innerHeight*.85){ el.classList.add('visible'); } }); };
  window.addEventListener('scroll',reveal); reveal();
});