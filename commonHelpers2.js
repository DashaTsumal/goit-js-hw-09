import"./assets/styles-e5c67daa.js";const a={email:"",message:""},o="feedback-form-state",m=document.querySelector(".feedback-form"),l=document.querySelector('.feedback-form input[name="email"]'),r=document.querySelector('.feedback-form textarea[name="message"]');document.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem(o));e&&(l.value=e.email||"",r.value=e.message||"",a.email=e.email||"",a.message=e.message||"")});m.addEventListener("input",e=>{const{name:t,value:s}=e.target;a[t]=s,localStorage.setItem(o,JSON.stringify(a))});m.addEventListener("submit",e=>{e.preventDefault();const{email:t,message:s}=a;if(t===""||s===""){alert("Fill please all fields");return}console.log("Form Data:",a),localStorage.removeItem(o),m.reset(),a.email="",a.message=""});
//# sourceMappingURL=commonHelpers2.js.map
