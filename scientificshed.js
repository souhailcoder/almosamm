<style amp-custom="amp-custom">
/*<![CDATA[*/
/*-------------------- font --------------------*/
@font-face {
font-family: "Ta3alamFont";
font-weight: normal;
font-style: normal;
src: url(https://dl.dropboxusercontent.com/s/l0mqm6g2vwflxp2/Ta3alamFont.eot);
src: url(https://dl.dropboxusercontent.com/s/l0mqm6g2vwflxp2/Ta3alamFont.eot?#iefix) format('embedded-opentype'),
url(https://dl.dropboxusercontent.com/s/gjkkuvnfze5ii1l/Ta3alamFont.woff) format('woff'),
url(https://dl.dropboxusercontent.com/s/mjj8mvkq7jgihhn/Ta3alamFont.ttf) format('truetype');
}
body{margin:0;padding:0}
#ss-form input:focus ~ label,
#ss-form textarea:focus ~ label,
#ss-form input:valid ~ label,
#ss-form textarea:valid ~ label {
    font-size: 10px;
    color: #4d90fe;
    top: -10px;
    -webkit-transition: all 0.125s ease;
    transition: all 0.125s ease;
}
#ss-form .styled-input {
    width: 46.333%;
    margin: 5px 0px;
    padding: 0;
    position: relative;
    float: right;
    margin-left: 20px;
}
#ss-form .styled-input-in {
  position: relative;
}
#ss-form .styled-input label {
color: #999;
    padding: 1rem;
    position: absolute;
    top: 4px;
    right: 3px;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
    line-height: 1;
    font-family: Ta3alamFont;
  font-size: 13px;
}
#ss-form .styled-input.wide {
  width: 96%;
}
#ss-form input,
#ss-form textarea {
    border-radius: 2px;
    padding: 12px 15px;
    border: 1px solid #cad3df;
    width: 100%;
    font-size: 1rem;
    background: #ffffff;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
font-family: Ta3alamFont;
}
#ss-form input ~ .span1,
#ss-form textarea ~ .span1 {
  display: block;
  width: 0;
  height: 3px;
  background: #4d90fe;
  position: absolute;
  left: 49%;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
#ss-form input ~ .span2,
#ss-form textarea ~ .span2 {
  display: block;
  width: 0;
  height: 3px;
  background: #4d90fe;
  position: absolute;
  right: 49%;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
#ss-form input ~ span {
  bottom: 0;
}
#ss-form input:focus,
#ss-form textarea:focus {
  outline: 0;
}
#ss-form input:focus ~ .span1,
#ss-form textarea:focus ~ .span1,
#ss-form input:focus ~ .span2,
#ss-form textarea:focus ~ .span2 {
  width: 50%;
}
#ss-form textarea {
    width: 100%;
    min-height: 15em;
}
#ss-form .btn {
    font-family: Ta3alamFont;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 2px;
    padding: 0 25px;
    height: 52px;
    line-height: 50px;
    color: #FFF;
    background-color: #543c8a;
    border: 1px solid #fff;
    cursor: pointer;
    margin: 10px 0 0;
    background-image: none;
    float: right;
    width: 96%;
}
#ss-form .btn-default:hover,
#ss-form .btn-default:focus {
  background-color: #4d90fe;
  color: white;
  outline: 0;
}
#fade {
    opacity: 0;
  display: none;
}
.thanks_layout{text-align: center; position: fixed; top:0; left:0; bottom:0; right:0; background:rgba(255,255,255,.8);z-index:99999}
.thanks_message{font-family: Ta3alamFont;width:50%;background:#fff;border-radius:5px;padding:20px;border:1px solid #DEDEDE;text-align: center; color:#333; position: absolute; top: 10%; left: 50%;margin-left:-25%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
.thanks_message .close a{position:absolute; top:-15px; right: -15px; width:20px; height:20px; line-height:20px; text-align:center; background:#fff; border:1px solid #ccc; border-radius:100%;color:#333;font-family: Ta3alamFont;font-size:18px;text-decoration:none}
@media screen and (max-width:768px){.thanks_message{width:90%!important;margin-left:-45%!important;}
}
@media screen and (max-width:414px){#ss-form .styled-input {
  width: 100%;
}
}
</style>
<script type="text/javascript">
var submitted=false;
var fadeEffect=function(){
 return{
  init:function(id, flag, target){
   this.elem = document.getElementById(id);
   clearInterval(this.elem.si);
   this.target = target ? target : flag ? 100 : 0;
   this.flag = flag || -1;
   this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
   this.elem.si = setInterval(function(){fadeEffect.tween()}, 20);
  },
  tween:function(){
   if(this.alpha == this.target){
    clearInterval(this.elem.si);
   }else{
    var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
    this.elem.style.opacity = value / 100;
    this.elem.style.filter = 'alpha(opacity=' + value + ')';
    this.alpha = value
   }
  }
 }
}();
function myFunction() {
    location.reload();
}
</script>
<iframe id="hidden_iframe" name="hidden_iframe" onload="if(submitted){);}" style="display: none;"></iframe>
            </b:if>

<form action="https://docs.google.com/forms/d/e/1FAIpQLSfxTI45ZXptyA19frKvKQL1ETfdgRkXZVJZ0wnaf7tWw5tGDw/formResponse" id="ss-form" method="POST" onsubmit="fadeEffect.init('fade', 1);document.getElementById('fade').style.display = 'block'" target="hidden_iframe">
<div class="styled-input">
<div class="styled-input-in">
<input aria-label="الاسم" dir="auto" id="i.desc.2078104957" name="entry.1230635533" required="required" title="" type="text" value="" />
                                <label> : (*)  الاسم </label>
                                <span class="span1"></span><span class="span2"></span>
            </div>
</div>
<div class="styled-input">
<div class="styled-input-in">
<input aria-label="البريد الإلكتروني" dir="auto" id="i.desc.1500845533" name="entry.339992267" required="required" title="من فضلك أدخل بريد إلكتروني صحيح" type="email" value="" />
                                <label> : (*)  البريد الإلكتروني</label>
                                <span class="span1"></span><span class="span2"></span>
            </div>
</div>
    <div class="styled-input">
<div class="styled-input-in">
<input aria-label="الدولة" dir="auto" id="i.desc.1578546177" name="entry.874462343" title="" type="text" value=""  required="required"/>
                                <label>: (*)  الدولة</label>
                                <span class="span1"></span><span class="span2"></span>
            </div>
</div>
    <div class="styled-input">
<div class="styled-input-in">
<input aria-label="عنوان الرسالة" dir="auto" id="i.desc.1692910035" name="entry.1858745636" required="required" title="" type="text" value="" />
                                <label> : (*)  عنوان الرسالة</label>
                                <span class="span1"></span><span class="span2"></span>
            </div>
</div>
<div class="styled-input wide">
<div class="styled-input-in">
<textarea aria-label="رسالتك أو استفسارك" aria-required="true" cols="0" dir="auto"  id="i.desc.1374678256" name="entry.1207818427" required="required" rows="8"></textarea>
                                <label> : (*)  رسالتك</label>
                                <span class="span1"></span><span class="span2"></span>
            </div>
</div>
<input name="draftResponse" type="hidden" value="[null,null,"-597224231344312906"]" />
                    <input name="pageHistory" type="hidden" value="0" />
                    <input name="fbzx" type="hidden" value="-597224231344312906" />
          <button class="btn btn-default" name="submit" type="submit">إرسال</button>
          </form>
<div id="fade">
<div class="thanks_layout">
<div class="thanks_message">
<img alt="Thumb" height="48" src="http://1.bp.blogspot.com/-ifYrQPpVoEY/XA-yhUcimSI/AAAAAAAACXc/CuZaH78INYAkAIm08ZTbHkEpUCDHoFXxwCK4BGAYYCw/s1600/thumbs-up%2B%25281%2529.png" width="48" />
        

<h2>
تم ارسال الرسالة بنجاح</h2>
<div>
سيتم الرد عليك خلال ال 12 ساعه القادمة</div>
<div class="close">
<a href="javascript:void(0)" onclick="document.getElementById('fade').style.display = 'none' ;myFunction()" title="Close">×</a></div>
</div>
</div>
</div>
