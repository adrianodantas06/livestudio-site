(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('livestudio-theme')||'auto';
  function apply(mode){
    let resolved=mode;
    if(mode==='auto'){
      const h=new Date().getHours();
      resolved=(h>=6&&h<18)?'light':'dark';
    }
    root.dataset.theme=resolved;
    const b=document.querySelector('[data-theme-button]');
    if(b) b.textContent=mode==='auto'?'◐ Auto':(resolved==='light'?'☀ Claro':'☾ Escuro');
  }
  let mode=saved;
  apply(mode);
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-theme-button]'); if(!b)return;
    mode=mode==='auto'?'dark':mode==='dark'?'light':'auto';
    localStorage.setItem('livestudio-theme',mode); apply(mode);
  });
})();