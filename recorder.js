const recordBtn = document.querySelector(".record-btn");
const player = document.querySelector(".audio-player");

if (navigator.mediaDevices.getUserMedia) {
  var chunks = [];
  const constraints = { audio: true };
  navigator.mediaDevices.getUserMedia(constraints).then(
    stream => {
      console.log("授權成功！");

      const mediaRecorder = new MediaRecorder(stream);

      recordBtn.onclick = () => {
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
          recordBtn.textContent = "錄音";
          console.log("錄音結束");
        } else {
          mediaRecorder.start();
          console.log("錄音中...");
          recordBtn.textContent = "停止";
        }
        console.log("錄音器狀態：", mediaRecorder.state);
      };

      mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = e => {
        var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        player.src = audioURL;
      };
    },
    () => {
      console.error("授權失敗！");
    }
  );
} else {
  console.error("瀏覽器不支援 getUserMedia");
}