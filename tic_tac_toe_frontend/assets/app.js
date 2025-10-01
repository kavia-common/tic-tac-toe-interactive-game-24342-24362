(function(){
  function byAttr(attr, val){
    return document.querySelector(`[${attr}="${val}"]`);
  }

  function toggleDropdown(key){
    const el = byAttr('data-dropdown', key);
    if(!el) return;
    const expanded = el.getAttribute('aria-expanded') === 'true';
    el.setAttribute('aria-expanded', String(!expanded));
  }

  function onClick(e){
    const t = e.target.closest('[data-dropdown]');
    if(t){
      toggleDropdown(t.getAttribute('data-dropdown'));
      return;
    }
    const prev = e.target.closest('[data-action="prev-month-light"],[data-action="prev-month-dark"]');
    const next = e.target.closest('[data-action="next-month-light"],[data-action="next-month-dark"]');
    if(prev){
      console.log('Prev month clicked', prev.getAttribute('data-action'));
    }
    if(next){
      console.log('Next month clicked', next.getAttribute('data-action'));
    }
  }

  document.addEventListener('click', onClick);
})();
