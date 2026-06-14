window.addEventListener('DOMContentLoaded',function(){
const info=new URLSearchParams(window.location.search);
if(localStorage.getItem('devdebugmode')=='insreplace'){
    window.location.replace(`https://tromosm.github.io/FluxLAN-welcome-page/?r=${info.get('o')}`)
}
else{
if(localStorage.getItem('last-fill')){window.location.replace(`https://tromosm.github.io/FluxLAN-welcome-page/?r=${info.get('o')}`)}
else{
const SUPABASE_URL="https://unalxdcdbgrqvveetxsn.supabase.co"
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYWx4ZGNkYmdycXZ2ZWV0eHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MDkyNTUsImV4cCI6MjA4NjE4NTI1NX0.8o5IZ_bs-8HaX70sP-e5_OUQfm5jyzXP6XMII1BoGSw"
let tempdocs='tempdoc'
window.supabase=supabase.createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
)
if(!info.get('v')){
    window.location.replace(`https://tromosm.github.io/FluxLAN-welcome-page/?r=${info.get('o')}`)
}
(async()=>{
 const {error}=await supabase
 .from("fluxlan users")
 .insert([{
 "version":info.get('v'),"release type":info.get('r'),"platform":info.get('p'),"tempio":tempdocs,"release_type_web":info.get('t')}])
 if(error){
  console.log(error)
 }
 else{localStorage.setItem('last-fill',tempdocs);window.location.replace(`https://tromosm.github.io/FluxLAN-welcome-page/?r=${info.get('o')}`)}})()}}})