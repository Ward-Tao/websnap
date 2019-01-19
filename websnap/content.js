function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  }

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
	if(request.cmd == 'test') {
        console.log(request.value);
        sendResponse([window.location.href,document.documentElement.scrollTop]);}
    if(request.cmd == 'test2') {
        console.log(request.value.url);
        window.location.href = request.value.url;

        sendResponse(0);}
    if(request.cmd == 'test3') {
        console.log(request.value.location);


        $('html,body').animate({scrollTop:request.value.location}, 800);

        sendResponse(0);}
});