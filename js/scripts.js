// Setup iScroll
var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper', { checkDOMChanges: true });
	
	setInterval(function () {
		if (myScroll.isReady())
			document.getElementById('thelist');
	}, 2000);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


// Next Function
$(document).ready(function() {
	$('.content').hide();
	$('#new-detail').hide();
	$('#nav-expenses').click(function () {
		$('#main').hide('fast');
		$('.content').attr('id', 'expenses').show('slow');
		$('#special').text('Expenses');
		$('#scroller').load('expenses.html');
		$('.plus').click(function(){
			$('#new-detail').show('fast');
		});

		$('button#add').click(function(){
		var expense = $('form#addexpense').serializeObject();
		var html = '<li><div class="form-block clearfix"><input type="date" name="date" value="'+expense.date+'" disabled="disabled" /><span>$<input type="number" name="amount" value="'+expense.amount+'" disabled="disabled" /></span></div><div class="form-block clearfix"><select name="type" disabled="disabled" ><option value="Hotel">Hotel Room Plus Tax</option><option value="Meal">Meal &amp; Tip</option><option value="Beverage">Beverages &amp; Tip</option><option value="Porter">Porters - Bellmen</option>  <option value="Transportation">Limos-Taxis-Buses</option> <option value="Other">Other (detail in Notes)</option></select><h4>Notes:</h4><textarea name="note" disabled="disabled" >'+expense.note+'</textarea></div></li>'  ;
		$('ul#thelist').append(html);
		$('#new-detail').hide('fast');
		$('button#send').click(function(){
			var allexpenses = $('form#allexpenses').serializeObject();
			$.post('svc/appsubmit.php',allexpenses,function(){
					alert('Your expenses have been submitted. Thank you.');
					$('ul#thelist').empty();
			},'json');
		});
		});

	});
	$('#nav-calendar').click(function () {
		alert("This feature will be fully-functional in the final FTI app. Please take a look at the screen design, hit Back and click on Expenses or About for the fully-functional sections.");
		$('#main').hide('fast');
		$('.content').attr('id', 'calendar').show('slow');
		$('#special').text('calendar');
		$('#scroller').load('calendar.html');
	});
	$('#nav-flights').click(function () {
		alert("This feature will be fully-functional in the final FTI app. Please take a look at the screen design, hit Back and click on Expenses or About for the fully-functional sections.");
		$('#main').hide('fast');
		$('.content').attr('id', 'flights').show('slow');
		$('#special').text('flights');
		$('#scroller').load('flights.html');
	});
	$('#nav-attractions').click(function () {
		alert("This feature will be fully-functional in the final FTI app. Please take a look at the screen design, hit Back and click on Expenses or About for the fully-functional sections.");	
		$('#main').hide('fast');
		$('.content').attr('id', 'attractions').show('slow');
		$('#special').text('attractions');
		$('#scroller').load('attractions.html');
	});
	$('#nav-about').click(function () {
		$('#main').hide('fast');
		$('.content').attr('id', 'about').show('slow');
		$('#special').text('About');
		$('#scroller').load('about.html');
	});
	$('.content header h1').click(function () {
		$('.content').hide('fast');
		$('#special').empty();
		$('#main').show('slow');
	});
	$('.content footer span.back').click(function () {
		$('.content').hide('fast');
		$('#main').show('slow');
		$('#new-detail').hide('fast');

	});
	$('span.close').click(function () {
		$('#new-detail').hide('fast');
	});
});
