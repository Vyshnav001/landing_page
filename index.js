let feature_btn = document.querySelector(".feature");
let company_Btn= document.querySelector(".company");
let boder_Class = document.querySelector(".div_border_fea");
let border_Class_comp = document.querySelector(".div_border_comp")



feature_btn.addEventListener('click', dropDown)
company_Btn.addEventListener('click', dropDown_Comp)


function dropDown (){
    boder_Class.classList.toggle("display_none")
    feature_btn.classList.toggle("change")
   
}
function dropDown_Comp (){
    border_Class_comp.classList.toggle("display_none")
    company_Btn.classList.toggle("change")
}