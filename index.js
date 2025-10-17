
'use strict';

//capsules
const capsuleContainer = document.getElementById('capsuleContainer');
const newCapsBtn = document.getElementById('newCapsBtn');
const boxContainer = document.getElementById('boxContainer');
const capsuleInput = document.getElementById('capsuleInput');
const noCapsMsg = document.getElementById('noCapsulesMsg');
const importJsonBtn = document.getElementById('jsonEntering');


let inputVisible = false;

function createCapsule(text) {
  if (!text) return;
  if (noCapsMsg) noCapsMsg.style.display = 'none';

  const capsule = document.createElement('div');
  capsule.classList.add('newCapsules_1', 'p-4', 'bg-light', 'rounded-3','mb-3');
  capsule.style.setProperty('box-shadow', '2px 2px 10px rgba(255, 27, 148, 0.8)', 'important');



  const capsuleText = document.createElement('div');
  capsuleText.classList.add('capsule-text');
  capsuleText.textContent = text;
  capsule.appendChild(capsuleText);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('d-flex', 'justify-content-center', 'mt-3');

  const buttonNames = ['Learn', 'Edit', 'Delete', 'Export'];

  buttonNames.forEach(name => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.classList.add('btn', 'btn-sm', );

    if (name === 'Learn') btn.classList.add('btn-pink', 'mx-1');
    else if (name === 'Edit') btn.classList.add('btn-lightblue', 'mx-1');
    else if  (name === 'Delete') btn.classList.add('btn-salmon', 'mx-1');
    else if  (name === 'Export') btn.classList.add('btn-lightgreen', 'mx-1');
    
    btn.addEventListener('click', () => {
      if (name === 'Delete') {
        capsule.remove();
        if (!capsuleContainer.children.length && noCapsMsg)
          noCapsMsg.style.display = '';
      } else if(name === 'Edit') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = capsuleText.textContent;
        input.classList.add('form-control', 'mb-2');
        capsule.replaceChild(input, capsuleText);
        input.focus();

        input.addEventListener('blur', () =>{
          capsuleText.textContent = input.value.trim() || 'Empty Capsule';
          capsule.replaceChild(capsuleText, input);
        });

        input.addEventListener('keydown', e => {
          if (e.key === "Enter") input.blur();
        });
      } else {
        alert (`${name} clicked on capsule: "${capsuleText.textContent}"`);
      }
    });
    buttonsContainer.appendChild(btn);
  });

  capsule.appendChild(buttonsContainer);
  capsuleContainer.appendChild(capsule);
}

//toggling the input box
newCapsBtn.addEventListener('click', () => {
  const existingInput = document.getElementById('dynamicBox');

  if (!inputVisible) {
    // Create and show input box
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter text for ur capsule...';
    input.id = 'dynamicBox';
    input.classList.add('form-control', 'mt-3', 'py-auto', 'px-5', 'my-auto');
    boxContainer.appendChild(input);
    input.focus();

     // Add capsule when pressing Enter
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const text = input.value.trim();
        if (text) createCapsule(text);
        input.remove();
        inputVisible = false;
      }
    });

    inputVisible = true;
  } else {
    // If input is visible and button clicked again
    if (existingInput) {
      const text = existingInput.value.trim();
      if (text) {
        createCapsule(text);
      }
      existingInput.remove();
    }
    inputVisible = false;
  }
});

// Just a placeholder for future functionality
importJsonBtn.addEventListener('click', () => {
  alert('Import JSON functionality will be added here.');
});

// function createCapsule(text) {
//   if (!text) return;

//   // Hide "No capsules yet" message
//   if (noCapsMsg) noCapsMsg.style.display = 'none';

//   const capsule = document.createElement('div');
//   capsule.classList.add('newCapsules_1', 'p-4', 'bg-light', 'rounded-3', 'shadow-sm', 'mb-3');

//   const capsuleText = document.createElement('div');
//   capsuleText.classList.add('capsule-text');
//   capsuleText.textContent = text;
//   capsule.appendChild(capsuleText);


//   //Other btns:
//   const buttonsContainer = document.createElement('div');
//   buttonsContainer.classList.add('d-flex', 'justify-content-around', 'mt-3');

//   const buttonNames = ['Learn', 'Edit', 'Delete', 'Export'];

//   buttonNames.forEach(name => {
//     const btn = document.createElement('button');
//     btn.textContent = name;
//     btn.classList.add('btn', 'btn-sm');

//     if (name === 'Learn') btn.classList.add('btn-pink');
//     else if (name === 'Edit') btn.classList.add('btn-lightblue');
//     else if (name === 'Delete') btn.classList.add('btn-salmon');
//     else if (name === 'Export') btn.classList.add('btn-lightgreen');

//     btn.addEventListener('click', () => {
//       if (name === 'Delete') {
//         capsule.remove();
//         if (!capsuleContainer.children.length && noCapsMsg) noCapsMsg.style.display = '';
//       } else if (name === 'Edit') {
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = capsuleText.textContent;
//         input.classList.add('form-control', 'mb-2');
//         capsule.replaceChild(input, capsuleText);
//         input.focus();
//         input.addEventListener('blur', () => {
//           capsuleText.textContent = input.value.trim() || 'Empty Capsule';
//           capsule.replaceChild(capsuleText, input);
//         });
//         input.addEventListener('keydown', e => {
//           if (e.key === 'Enter') input.blur();
//         });
//       } else {
//         alert(`${name} clicked on capsule: "${capsuleText.textContent}"`);
//       }
//     });

//     buttonsContainer.appendChild(btn);
//   });

//   capsule.appendChild(buttonsContainer);
//   capsuleContainer.appendChild(capsule);
// }

// newCapsBtn.addEventListener('click', () => {
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.placeholder = 'Enter text for ur capsule...';
//   input.id = 'dynamicBox';
//   capsuleContainer.appendChild(input);

// });

// importJsonBtn.addEventListener('click', () => {
//   alert('Import JSON functionality will be added here.');
// });
