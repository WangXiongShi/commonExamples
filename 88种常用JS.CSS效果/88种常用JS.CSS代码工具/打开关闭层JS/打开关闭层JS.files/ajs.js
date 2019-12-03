<!--  AD rotator script written entirely in JavaScript  -->
<!--  Written by WenWei, 2002/03/03. E-mail: wenwei#blueidea.com  -->
<!--  ASP 2 JS Written by 小荷, 2003/05/28. E-mail: aston314#sohu.com  -->
<!--  Member Of Blueidea Web Team. -->
<!--  Welcome to www.blueidea.com. -->
// AD Banner object
function ADBanner(){
  this.htmlcode  = "";// Non image banner's html code
  this.href      = "";// Link's href attrib
  this.imgsrc    = "";// Image's src attrib
  this.imgwidth  = "";// Image's width attrib
  this.imgheight = "";// Image's height attrib
  this.imgalt    = "";// Image's alt attrib
  this.imgborder = "";// Image's border attrib
  this.weight    = 1;// Banner's show weight
  this.place     = 1// Banner's place
  this.type      = 1;// Banner's type
  this.id      = 0;// Banner's ID
}

// Make Banner objects array
function CreatBanners(aBanners, aNum){
  for( var i=0; i<aNum; i++ ){
    aBanners[i] = new ADBanner();
  }
}

// Show banner
function showbber(aPlace, aType, aBannerID)
{
  var amount = ADBanners.length;
  var includeList = new Array(amount);

  if (!document.usedBanners){
    document.usedBanners = new Array(amount);
for (var i=0; i<amount; i++)
      document.usedBanners[i] = -1;
  }
 
  var usedList = document.usedBanners;

  if (arguments.length == 2){
    var j = 0;
    var sum = 0;
for(var i=0; i<amount; i++){
if (ADBanners[i].place == aPlace && ADBanners[i].type == aType){
if (usedList[i] != i){
  includeList[j] = i;
      j++;
          sum = sum + ADBanners[i].weight;
    }
  }
 }
    if (sum <= 0)
  return;
    var rndNum = Math.round(Math.random() * sum);

    i = 0;
    j = 0;
    while (true) {
      j = j + ADBanners[includeList[i]].weight;
      if (j >= rndNum)
        break;
      i++;
    }

    i = includeList[i];
  }
  else{
if (aBannerID >= 0 && aBannerID < amount)
      i = aBannerID;
else
  return;
  }

  usedList[i] = i;

  if (ADBanners[i].htmlcode == "")
    document.write('<A HREF="'+ ADBanners[i].href +'" target=_blank><IMG SRC="'+ ADBanners[i].imgsrc +'" WIDTH="'+ ADBanners[i].imgwidth +'" HEIGHT="'+ ADBanners[i].imgheight +'" ALT="'+ ADBanners[i].imgalt +'" BORDER="'+ ADBanners[i].imgborder +'"></A>');
  else
    document.write(ADBanners[i].htmlcode);
}

var ADBanners = new Array();

CreatBanners(ADBanners, 6);

ADBanners[0].htmlcode  = '<classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="766" height="90"><param name=movie value="http://gg.blueidea.com/2009/jingdong/B_766×90.swf"><PARAM NAME=wmode VALUE=opaque><param name=quality value=autohigh><embed src="http://gg.blueidea.com/2009/jingdong/B_766×90.swf" quality=autohigh pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="766" height="90" wmode="opaque"></embed></object>';
ADBanners[0].weight    = 10;
ADBanners[0].place= 2;
ADBanners[0].type = 1;
ADBanners[0].id = 38;

ADBanners[1].imgsrc    = "http://gg.blueidea.com/2009/blueidea/pages.gif";
ADBanners[1].href = "http://home.blueidea.com/apps.php?do=pages";
ADBanners[1].imgwidth  = "533";
ADBanners[1].imgheight = "104";
ADBanners[1].imgalt    = "品网";
ADBanners[1].weight    = 10;
ADBanners[1].place= 2;
ADBanners[1].type = 9;
ADBanners[1].id = 51;

ADBanners[2].htmlcode  = '<table border=0 cellspacing=0 cellpadding=3><tr><td><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="730" height="90"><param name=movie value="http://gg.blueidea.com/2009/anta/730-90-25K.swf"><PARAM NAME=wmode VALUE=opaque><param name=quality value=autohigh><embed src="http://gg.blueidea.com/2009/anta/730-90-25K.swf" quality=autohigh pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="730" height="90" wmode="opaque"></embed></object></td></table>';
ADBanners[2].weight    = 10;
ADBanners[2].place= 2;
ADBanners[2].type = 9;
ADBanners[2].id = 59;

/* bbs 内容*/
ADBanners[3].htmlcode  = '<table cellpadding="3" border="0"><tr><td><A HREF="http://ad.cn.doubleclick.net/clk;212556693;33956674;v" target="_blank"><IMG SRC="http://gg.blueidea.com/2009/oracle/CNBI208APP760x90.gif" BORDER=0 WIDTH=760 HEIGHT=90 ALT="Click Here"></A></td></tr><tr><td><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="760" height="90"><param name=movie value="http://gg.blueidea.com/2009/jingdong/B_766×90.swf"><PARAM NAME=wmode VALUE=opaque><param name=quality value=autohigh><embed src="http://gg.blueidea.com/2009/anta/730-90-25K.swf.swf" quality=autohigh pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="760" height="90" wmode="opaque"></embed></object></td></tr></table>';
ADBanners[3].weight    = 10;
ADBanners[3].place= 2;
ADBanners[3].type = 3;
ADBanners[3].id = 60;

/* bbs 首页*/
ADBanners[4].htmlcode  = '<table cellpadding="3" border="0"><tr><td><A HREF="http://ad.cn.doubleclick.net/clk;212556675;33956673;u" target="_blank"><IMG SRC="http://gg.blueidea.com/2009/oracle/CNBI208APP760x90.gif" BORDER=0 WIDTH=760 HEIGHT=90 ALT="Click Here"></A></td></tr><tr><td><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="760" height="90"><param name=movie value="http://gg.blueidea.com/2009/jingdong/A_766×90.swf"><PARAM NAME=wmode VALUE=opaque><param name=quality value=autohigh><embed src="http://gg.blueidea.com/2009/jingdong/A_766×90.swf" quality=autohigh pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="760" height="90" wmode="opaque"></embed></object></td></tr></table>';
ADBanners[4].weight    = 10;
ADBanners[4].place= 2;
ADBanners[4].type = 2;

ADBanners[5].imgsrc    = "http://gg.blueidea.com/2008/blueidea/start.gif";
ADBanners[5].href = "http://home.blueidea.com";
ADBanners[5].imgwidth  = "533";
ADBanners[5].imgheight = "132";
ADBanners[5].imgalt    = "蓝色理想家园";
ADBanners[5].weight    = 10;
ADBanners[5].place= 2;
ADBanners[5].type = 9;
