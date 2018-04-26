window.addEventListener("load", function(){
	save_All();
}, false);

var callback = function (results) {
    for (var i in results[0]) {
			var img = document.createElement('img');
			img.width =150;
			img.height=150;
			img.src = results[0][i];
			document.getElementById("sources").appendChild(img);
    }
	
};

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
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		chrome.tabs.executeScript(tabs[0].id, {
			code: 'Array.prototype.map.call(document.images, function (i) { return i.src; });'
		}, callback);
		page_Title = tabs[0].title;
		page_URL = tabs[0].url;
		Inject_Page_Values(page_Title, page_URL);
	});
}


function addEventListeners(){
	document.getElementById("Label").addEventListener("click", function(){
		save_Generate();
	}, false);
	
}
function save_Generate(){
}

function Inject_Page_Values(page_Title, page_URL){
	Name_Field.value = page_Title;
	URL_Field.value = page_URL;
	Name_Field.focus();
}


