window.addEventListener("load", function(){
	save_All();
}, false);

function save_All(){
	Preparation();
	addEventListeners();
}

function Preparation(){
	Content_Wrapper = document.getElementById("Content_Wrapper");
	Name_Field = document.getElementById("Name_Field");
	URL_Field = document.getElementById("URL_Field");
	Button = document.getElementById("Download_Button");
	button_Shortcut_Download = document.getElementById("Download_Button_Label");
	
	chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
		var tab = tabs[0];
		page_Title = tab.title;
		page_URL = tab.url;
		Inject_Page_Values(page_Title, page_URL);
	});
}

function addEventListeners(){
	document.getElementById("Download_Button").addEventListener("click", function(){
		save_Generate();
	}, false);
	
}
function save_Generate(){
	alert("ca va enregistrer ");
}

function Inject_Page_Values(page_Title, page_URL){
	Name_Field.value = page_Title;
	URL_Field.value = page_URL;
	Name_Field.focus();
}