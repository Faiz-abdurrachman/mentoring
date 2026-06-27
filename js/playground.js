let skulptLoaded=false;

function loadSkulpt(cb){
  if(skulptLoaded){cb();return;}
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js';
  s.onload=()=>{const s2=document.createElement('script');s2.src='https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js';s2.onload=()=>{skulptLoaded=true;cb();};document.head.appendChild(s2);};
  document.head.appendChild(s);
}

function builtinRead(x){
  if(Sk.builtinFiles===undefined||Sk.builtinFiles["files"][x]===undefined)throw"File not found: '"+x+"'";
  return Sk.builtinFiles["files"][x];
}

function playgroundInit(presetCode){
  const slot=document.getElementById('playgroundSlot');
  const code=presetCode||'print("Hello, HerAI!")\n';
  slot.innerHTML='<div class="playground"><div class="playground-header"><span class="pg-title"><i class="fas fa-terminal"></i> Code Playground</span><span>Ctrl+Enter = Run</span></div><div class="playground-body"><textarea id="playgroundInput" spellcheck="false">'+code+'</textarea><div class="playground-actions"><button class="btn-run" id="btnRun"><i class="fas fa-play"></i> Run</button><button class="btn-reset" id="btnReset"><i class="fas fa-undo"></i> Reset</button></div><div class="playground-output" id="playgroundOutput"></div></div></div>';

  document.getElementById('btnRun').addEventListener('click',playgroundRun);
  document.getElementById('btnReset').addEventListener('click',function(){document.getElementById('playgroundInput').value=code;document.getElementById('playgroundOutput').textContent='';document.getElementById('playgroundOutput').classList.remove('output-error');});
}

function playgroundRun(){
  const output=document.getElementById('playgroundOutput');
  const code=document.getElementById('playgroundInput').value;
  output.textContent='';
  output.classList.remove('output-error');

  loadSkulpt(function(){
    Sk.configure({output:function(t){output.textContent+=t;},read:builtinRead});
    Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",false,code,true);}).then(
      function(){},
      function(err){output.textContent=err.toString();output.classList.add('output-error');}
    );
  });
}

window.playgroundInit=playgroundInit;
window.playgroundRun=playgroundRun;