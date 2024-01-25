$(document).ready(function() {
  $("#calculator").tabs();
        
  $(".calcsymbole, .calcoperators, .calcdeleter, #calc2 button, .dual_calcsymbole, .hexa_calcsymbole").on("mouseenter", function() {
    $(this).css("background","rgb(50,50,50)");
  		});
   
  $(".calcsymbole, .calcoperators, .calcdeleter, #calc2 button, .dual_calcsymbole, .hexa_calcsymbole").on("mouseleave", function() {
    $(this).css("background","#151515");
  		});
  
  $("#resularea").attr("contentEditable","true");
  
  $(".calcsymbole").click(function() {
    var ctext = $(this).text();
    
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(ctext);
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text($("#resularea").text() + ctext);
        }
  		});
  
  $(".calcoperators").click(function() {
    var ctext = $(this).text();
    $("#resularea").text($("#resularea").text() + ctext);
    $("#calcvalid").removeClass("calcpress");
  		});
  
  $("#calcvalid").click(function() {
    var result = $("#resularea").text();
    var result2 = eval(result);
    $("#resularea").text(result2);
    $(this).addClass("calcpress");
  		});
  
    $("#calc1 button:eq(13)").click(function() {
    var result = $("#resularea").text();
    $("#resularea").text(result.slice(0,-1));
  		});
  
   $("#calc1 button:eq(19)").click(function() {
    $("#resularea").text("");
  		});
  
    $("#calcbtn1").click(function() {
    $("#resularea").text($("#resularea").text() + "**2");
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn2").click(function() {
    $("#resularea").text($("#resularea").text() + "**3");
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn3").click(function() {
    $("#resularea").text($("#resularea").text() + "**");
    $("#calculator li:eq(0) a").click();
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn4").click(function() {
    $("#resularea").text($("#resularea").text() + "**-1");
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn6").click(function() {
    var result = $("#resularea").text();
    $("#resularea").text(result + "**0.5");
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn7").click(function() {
    var result = $("#resularea").text();
    $("#resularea").text(result + "**(1/3)");
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn8").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.exp(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
          $("#resularea").text(result + "Math.exp(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn9").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.log(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.log(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn10").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.sinh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.sinh(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn5").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.atanh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.atanh(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn11").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.log10(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.log10(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn12").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.log2(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.log2(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn13").click(function() {
    var result = $("#resularea").text();
      
   if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.sin(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.sin(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn14").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.cos(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.cos(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn15").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.cosh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.cosh(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn16").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.tan(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.tan(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn17").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.tan(-1*result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.tan(-1");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn18").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.asin(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.asin(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn19").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.acos(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.acos(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn20").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.atan(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.atan(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn21").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.tanh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.tanh("); 
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn22").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.asinh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.asinh(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn23").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.acosh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.acosh(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn24").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.atanh(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.atanh(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn25").click(function() {
    var result = $("#resularea").text();
    var result4 = Math.PI.toFixed(6);
    $("#resularea").text(result + result4);
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn26").click(function() {
    var result = $("#resularea").text();
    var result5 = Math.E;
    $("#resularea").text(result + result5);
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn27").click(function() {
    var result = $("#resularea").text();
    var result6 = Math.SQRT2;
    $("#resularea").text(result + result6);
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn28").click(function() {
    var result = $("#resularea").text();
    var result7 = "*10**";
    $("#resularea").text(result + result7);
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
    $("#calcbtn29").click(function() {
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(Math.abs(result));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + "Math.abs(");
        }
      $("#calculator li:eq(0) a").click();
  		});
  
    var toexp = 0;

    $("#calcbtn30").click(function() {
    var result = $("#resularea").text();
    toexp = eval(result);
    var result8 = toexp.toExponential();
    $("#resularea").text(result8);
  		});
  
  	$("#calcbtn31").click(function() {
    var result = $("#resularea").text();
     $("#resularea").text(-1*result);
  		});
  
  	$("#calcbtn32").click(function() {
    var result = $("#resularea").text();
     $("#resularea").text(Math.ceil(result));
  		});
  
  	$("#calcbtn33").click(function() {
    var result = $("#resularea").text();
      $("#resularea").text(Math.floor(result));
  		});
  
    $("#calcbtn34").click(function() {
    var result = $("#resularea").text();
    var result7 = "*2**";
    $("#resularea").text(result + result7);
    $("#calcvalid").removeClass("calcpress");
    $("#calculator li:eq(0) a").click();
  		});
  
  	$("#calcbtn35").click(function() {
  	var result = $("#resularea").text();
  	var stnumb = eval(result);
  	
    if (stnumb < 171) {
  		for (var i = stnumb; i>=2; i--) {
			stnumb *= (i-1);
  					}
  		   $("#resularea").text(stnumb);
      			} else {
            $("#resularea").text("Infinity");
                }
  			});
  
    $(".hexa_calcsymbole").click(function() {
    var hxdtext = $(this).text();
    
    if ($("#hexdezvalid").hasClass("calcpress")) {
      $("#resularea").text(hxdtext);
      $("#hexdezvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text($("#resularea").text() + hxdtext);
        }
  		});
  
    $("#hexdezvalid").click(function() {
    var result11 = $("#resularea").text();
    var result22 = parseInt(result11, 16);
    $("#resularea").text(result22);
    $(this).addClass("calcpress");
  		});
  
  	$(".dual_calcsymbole").click(function() {
    var dudtext = $(this).text();
    
    if ($("#dualdezvalid").hasClass("calcpress")) {
      $("#resularea").text(dudtext);
      $("#dualdezvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text($("#resularea").text() + dudtext);
        }
  		});
  
    $("#dualdezvalid").click(function() {
    var result11 = $("#resularea").text();
    var result33 = parseInt(result11, 2);
    $("#resularea").text(result33);
    $(this).addClass("calcpress");
  		});
  
  	$("#btn1").click(function() {
    var result = $("#resularea").text();
    var stitem = $("#saveval").val();
    $("#calcstore").append("<option value='"+result+"'>"+stitem+"</option>");
    saveItems();
  		});
  
  	$("#calcstore").on("click", function() {
    var storeItem = $(this).val();
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(storeItem);
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + storeItem);
        }
      $("#calculator li:eq(0) a").click();
    	});
  
    $("#calcConst").on("click", function() {
    var phItem = $(this).val();
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(phItem);
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + phItem);
        }
      $("#calculator li:eq(0) a").click();
    	});
  
  	$("#metalle tr:gt(0)").find("td:eq(1)").on("mouseenter", function() {
      $(this).css({"background":"red", "color":"yellow"});
    	});
  
  	$("#metalle tr:gt(0)").find("td:eq(1)").on("mouseleave", function() {
      $(this).css({"background":"black", "color":"white"});
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(3)").on("mouseenter", function() {
      $(this).css({"background":"green", "color":"yellow"});
    	});
  
  	$("#metalle tr:gt(0)").find("td:eq(3)").on("mouseleave", function() {
      $(this).css({"background":"black", "color":"white"});
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(5)").on("mouseenter", function() {
      $(this).css({"background":"navy", "color":"yellow"});
    	});
  
  	$("#metalle tr:gt(0)").find("td:eq(5)").on("mouseleave", function() {
      $(this).css({"background":"black", "color":"white"});
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(7)").on("mouseenter", function() {
      $(this).css({"background":"purple", "color":"yellow"});
    	});
  
  	$("#metalle tr:gt(0)").find("td:eq(7)").on("mouseleave", function() {
      $(this).css({"background":"black", "color":"white"});
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(1)").on("click", function() {
    var metall1 = $(this).text();
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(metall1);
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + metall1);
        }
      $("#calculator li:eq(0) a").click();
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(3)").on("click", function() {
    var metall2 = $(this).text();
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(metall2*Math.pow(10,3));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + metall2*Math.pow(10,3));
        }
      $("#calculator li:eq(0) a").click();
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(5)").on("click", function() {
    var metall3 = $(this).text();
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(metall3*Math.pow(10,3));
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + metall3*Math.pow(10,3));
        }
      $("#calculator li:eq(0) a").click();
    	});
  
    $("#metalle tr:gt(0)").find("td:eq(7)").on("click", function() {
    var metall4 = $(this).text();
    var result = $("#resularea").text();
      
    if ($("#calcvalid").hasClass("calcpress")) {
      $("#resularea").text(metall4);
      $("#calcvalid").removeClass("calcpress");
    	} else {
      $("#resularea").text(result + metall4);
        }
      $("#calculator li:eq(0) a").click();
    	});
  
  	$("#btn2").click(function() {
    $("#calcstore option:selected").each(function() {
      $(this).remove();
    		});
    	});
  
    $("#btn3").click(function() {
      var convVal = $("#umrechner").val();
      var result = $("#resularea").text();
      var convRes = result*convVal;
      $("#resularea").text(convRes);
    });
    
  	function saveItems() {
   	localStorage.setItem("saving", $("#calcstore").html());
    loadItems();
  		}
  
  	function loadItems() {
    var itemnumb = localStorage.getItem("saving");
    $("#calcstore").html(itemnumb);
    	}
  
  if (!localStorage.getItem("saving")) {
    saveItems();
  		} else {
    loadItems();
        }
});
