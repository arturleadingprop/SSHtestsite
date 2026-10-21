
const pageConfig={
 "/":{key:"home",title:"Specialist Supported Housing",description:"Property investment. Purpose with potential.",kicker:"UK PROPERTY INVESTMENT"},
 "/about/":{key:"about",title:"About Specialist Supported Housing",description:"Understand the supported housing model and how we help investors assess opportunities.",kicker:"ABOUT US"},
 "/why-ssh/":{key:"why-ssh",title:"Why Consider Specialist Supported Housing?",description:"Explore the property model, agreements and purpose-led housing considerations.",kicker:"WHY SSH"},
 "/investment-process/":{key:"investment-process",title:"Your Investment Journey",description:"A clear process from initial conversation through opportunity review and due diligence.",kicker:"HOW IT WORKS"},
 "/calculator/":{key:"calculator",title:"25-Year Returns Calculator",description:"Model illustrative rent using purchase price, net yield and assumed annual CPI-linked increases.",kicker:"PLAN YOUR INVESTMENT"},
 "/properties/":{key:"properties",title:"Property Gallery",description:"Explore examples of residential settings and contemporary interiors.",kicker:"PROPERTY IMAGES"},
 "/articles/":{key:"articles",title:"Articles & Property Insights",description:"Guidance on supported housing, lease structures and property investment due diligence.",kicker:"INSIGHTS"},
 "/faq/":{key:"faq",title:"Frequently Asked Questions",description:"Answers to common questions about the model and investment due diligence.",kicker:"HELP & GUIDANCE"},
 "/contact/":{key:"contact",title:"Book a Call",description:"Tell us about your objectives and arrange an introductory conversation with our team.",kicker:"CONTACT"}
};
const path = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";
const config = pageConfig[path] || pageConfig["/"];
document.body.classList.add("route-page");
document.body.dataset.page = config.key;
document.title = config.title + " | Specialist Supported Housing";
const intro = document.getElementById("pageIntro");
if(config.key !== "home" && intro){
  intro.style.display="block";
  document.getElementById("pageTitle").textContent=config.title;
  document.getElementById("pageDescription").textContent=config.description;
  document.getElementById("pageKicker").textContent=config.kicker;
}
document.querySelectorAll("#navlinks a").forEach(a=>{
  const href=a.getAttribute("href");
  if(href===path){a.classList.add("active");a.setAttribute("aria-current","page")}
});



const money=n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:0}).format(n);
function updateCalc(){
 const price=Number(document.getElementById('priceRange').value), y=Number(document.getElementById('yieldRange').value)/100, cpi=Number(document.getElementById('cpiRange').value)/100, rate=cpi+.01, first=price*y;
 document.getElementById('priceOut').textContent=money(price);document.getElementById('yieldOut').textContent=(y*100).toFixed(1)+'%';document.getElementById('cpiOut').textContent=(cpi*100).toFixed(1)+'%';
 document.getElementById('year1').textContent=money(first);document.getElementById('monthly').textContent=money(first/12)+' / month';document.getElementById('increase').textContent=(rate*100).toFixed(1)+'%';
 let cumulative=0, rows='', year25=first*Math.pow(1+rate,24);
 for(let i=1;i<=25;i++){let annual=first*Math.pow(1+rate,i-1);cumulative+=annual;rows+=`<tr><td>${i}</td><td>${money(annual)}</td><td>${money(annual/12)}</td><td>${money(cumulative)}</td></tr>`}
 document.getElementById('year25').textContent=money(year25);document.getElementById('cumulative').textContent=money(cumulative);document.getElementById('multiple').textContent=(cumulative/price).toFixed(2)+'×';document.getElementById('yearRows').innerHTML=rows;
}
['priceRange','yieldRange','cpiRange'].forEach(id=>document.getElementById(id).addEventListener('input',updateCalc));updateCalc();
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{const item=b.closest('.faq-item');item.classList.toggle('open');b.setAttribute('aria-expanded',item.classList.contains('open')?'true':'false')}));
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('navlinks').classList.toggle('open'));
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navlinks').classList.remove('open')));
document.getElementById('yearNow').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const subject=encodeURIComponent('Website enquiry - Specialist Supported Housing');const body=encodeURIComponent(`New website enquiry\\n\\nName: ${data.get('firstName')} ${data.get('lastName')}\\nEmail: ${data.get('email')}\\nPhone: ${data.get('phone')}\\nBudget: ${data.get('budget')||'Not specified'}\\nMessage: ${data.get('message')||'Not provided'}`);document.getElementById('formStatus').textContent='Opening your email app to send the enquiry…';window.location.href=`mailto:info@specialistssupportedhousing.com?subject=${subject}&body=${body}`});
