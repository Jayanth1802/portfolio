document.addEventListener('DOMContentLoaded', () => {
  // footer year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav ul');
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      if(nav.style.display==="flex"){nav.style.display="none";}
      else{nav.style.display="flex";nav.style.flexDirection="column";}
    });
  }

  // contact form validation
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const msg=document.getElementById('message').value.trim();
      const out=document.getElementById('form-output');
      if(!name||!email||!msg){
        out.textContent="Please fill all fields."; out.style.color="orange"; return;
      }
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        out.textContent="Invalid email."; out.style.color="red"; return;
      }
      out.textContent="Message ready to send (demo only)."; out.style.color="lightgreen";
      form.reset();
    });
  }
});
   