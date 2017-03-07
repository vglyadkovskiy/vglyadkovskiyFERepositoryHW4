var rad11 = $("#rad11");
var rad23 = $("#rad23");
var rad34 = $("#rad34");
var bres = $("#buttonResult");
var chb11 = $("#chb11");
var chb12 = $("#chb12");
var chb13 = $("#chb13");
var chb14 = $("#chb14");
var chb21 = $("#chb21");
var chb22 = $("#chb22");
var chb23 = $("#chb23");
var chb24 = $("#chb24");

function chekRadio(){
   var radRes = 0;
   if (rad11.prop("checked") == true){
      radRes += 1;
   }
   if (rad23.prop("checked") == true){
      radRes += 1;
   }
   if (rad34.prop("checked") == true){
      radRes += 1;
   }
   return radRes;
}

function chekChekBox(){
   var chbRes = 0;
   if ((chb12.prop("checked") == true)&&(chb11.prop("checked") == false)&&(chb13.prop("checked") == false)&&(chb14.prop("checked") == false)){
      chbRes += 0.5;
   }
   if ((chb13.prop("checked") == true)&&(chb11.prop("checked") == false)&&(chb12.prop("checked") == false)&&(chb14.prop("checked") == false)){
      chbRes += 0.5;
   }
   if ((chb12.prop("checked") == true)&&(chb13.prop("checked") == true)&&(chb11.prop("checked") == false)&&(chb14.prop("checked") == false)){
      chbRes += 1;
   }
   if ((chb21.prop("checked") == true)&&(chb22.prop("checked") == false)&&(chb23.prop("checked") == false)&&(chb24.prop("checked") == false)){
      chbRes += 0.5;
   }
   if ((chb22.prop("checked") == true)&&(chb21.prop("checked") == false)&&(chb23.prop("checked") == false)&&(chb24.prop("checked") == false)){
      chbRes += 0.5;
   }
   if ((chb21.prop("checked") == true)&&(chb22.prop("checked") == true)&&(chb23.prop("checked") == false)&&(chb24.prop("checked") == false)){
      chbRes += 1;
   }
   return chbRes;
}

function clickResultButton(){
   
            bres.click(function(){
               
               alert("Your RESULT: You score: " + (Number(chekRadio()) + Number(chekChekBox())) + " points. " + "You have " + (Number(chekRadio()) + Number(chekChekBox()))/5*100 + " % correct answers.");
            })
}

clickResultButton();