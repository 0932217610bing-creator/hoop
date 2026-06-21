console.log('Javascript已連結，準備進行互動...');

letvisitorname = prompt('你好，我是你的助理，請問我應該要怎麼稱呼您：');

if (visitorname === '' || visitorname === null){
    visitorname = '訪客';
}

window.alert('Hello ' + visitorname + ', 歡迎來到我的網站！');

const logoElement = document.getElementById('main-logo');
logoElement.innerText = visitorname + "'s Website";

const titleElement = document.getElementById('hero-title');
titleElement.innerHTML = `我的未來，由 <span class="highlight" style="color: #38bdf8;">
${visitorname}
function changeColor(){
    const highlight = document.querySelector('.highlight');

    if (highlight.style.color === 'red'){
        highlight.style.color = '#38bdf8';
    } else {
        highlight.style.color = 'red';
    }
}

const SendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const aiResponse = document.getElementById('ai-response');

SendBtn.addEventListener('click', function(){
    const userMessage = userInput.value;

    if (userMessage === ""){
        alert('請先輸入指令唷！')
        return;
    }

    if (userMessage.includes('你好') || userMessage.includes('哈囉')){
        aiResponse.innerText="AI 助理:您好，今天過得如何?"
    } else if (userMessage.includes('功能') || userMessage.includes('做什麼')){
        aiResponse.innerText="AI 助理:我可以陪你聊天，幫你變換標題顏色，下周還能串接雲端大腦喔";
    } else if (userMessage.includes('學校') || userMessage.includes('東吳')){
        aiResponse.innerText="AI 助理:東吳大學士個學習網頁設計最棒的地方";
    
    } else {
        aiResponse.innerText="AI 助理:我收到你的訊息「" + userMessage + "」了，不過我目前還沒有開通這樣的功能";
    } 


userInput.value ="" 

});/span>主宰`;
