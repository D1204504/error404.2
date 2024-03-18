countDown = 10;  //標題倒數十秒
countdownEl = document.getElementById("countdown");
countdownInterval = setInterval(function()
{if (countDown > 0) {
    countdownEl.innerHTML =  + countDown + " 秒" + " 重新載入";countDown--
} else {
    clearInterval(countdownInterval);
    countdownEl.innerHTML = "載入中";}}, 2000); //以毫秒計算 為了配合gif畫面實際其實是20秒
