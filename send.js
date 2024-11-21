function sendMsg(txt) {
	var el = document.querySelector('div.im_editable.im-chat-input--text._im_text');
	el.innerText = txt;
	el.dispatchEvent(new Event('focus'));
	el.dispatchEvent(new Event('keydown'));
	setTimeout( function(){
		var btn = document.querySelector('button.im-send-btn.im-chat-input--send._im_send.im-send-btn_send');
		console.log("btn:", btn);
		if( btn) {
			btn.dispatchEvent(new Event('click'));
		} else {
			console.log("no button");
		}		
	}, 0);
}
setInterval( () => {sendMsg("ТЕстовое сообщение")},5000)
