import StorageDefault from "./storage.js";
const Storage = StorageDefault;

export function createLearnFlashcard(f={front:"", back:""}) {
  const wrapper = document.createElement("article");
  wrapper.className="flashcard-wrapper mb-2";
  wrapper.tabIndex=0;
  wrapper.style.perspective="1000px";

  const card=document.createElement("div");
  card.className="flashcard";

  const front=document.createElement("div");
  front.className="flashcard-front"; front.textContent=f.front;

  const back=document.createElement("div");
  back.className="flashcard-back"; back.textContent=f.back;

  card.append(front, back); wrapper.appendChild(card);

  const flip=()=>card.style.transform=card.style.transform.includes("180")?"rotateY(0deg)":"rotateY(180deg)";
  wrapper.addEventListener("click", flip);
  wrapper.addEventListener("keydown", e=>{if(e.code==="Space"){e.preventDefault();flip();}});
  return wrapper;
}

export function createLearnQuizCard(q={question:"", choices:[], correctIndex:0, explanation:""}, index=0){
  const card=document.createElement("article");
  card.className="card card-body mb-2";
  const h6=document.createElement("h6"); h6.textContent=`${index+1}. ${q.question}`;
  card.appendChild(h6);

  const container=document.createElement("div");
  container.className="d-flex flex-column gap-1";
  q.choices.forEach((c,i)=>{
    const btn=document.createElement("button");
    btn.className="btn btn-light btn-sm text-start";
    btn.textContent=c; btn.dataset.index=i;
    btn.addEventListener("click",()=>{
      container.querySelectorAll("button").forEach(b=>b.disabled=true);
      if(i===q.correctIndex) btn.classList.add("btn-success");
      else{
        btn.classList.add("btn-danger");
        container.querySelector(`button[data-index='${q.correctIndex}']`)?.classList.add("btn-success");
      }
      if(q.explanation){
        const p=document.createElement("p"); p.className="mt-1 text-muted"; p.textContent=q.explanation;
        card.appendChild(p);
      }
    });
    container.appendChild(btn);
  });
  card.appendChild(container);
  return card;
}
