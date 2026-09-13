"use strict";

const QUIZ_TIME = 20;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 27;
const ANSWER_LETTERS = ["A", "B", "C", "D"];

const questions = [
  {
    question: "Trong Tuyên ngôn Độc lập (1945), Chủ tịch Hồ Chí Minh đã khẳng định chân lý lịch sử nào về quyền dân tộc của Việt Nam?",
    answers: [
      "Nước Việt Nam là một bộ phận không thể tách rời của Liên bang Đông Dương.",
      "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do và độc lập.",
      "Việt Nam chỉ có thể có độc lập sau khi kinh tế phát triển ngang bằng các nước phương Tây.",
      "Độc lập của Việt Nam phụ thuộc vào sự hoàn toàn công nhận của các cường quốc."
    ],
    correct: 1
  },
  {
    question: "Sau thắng lợi của Cách mạng Tháng Tám năm 1945, Hồ Chí Minh đã chỉ ra mối quan hệ giữa độc lập dân tộc với tự do, hạnh phúc của nhân dân bằng câu nói nổi tiếng nào?",
    answers: [
      "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.",
      "Không có gì quý hơn độc lập, tự do.",
      "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.",
      "Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi."
    ],
    correct: 0
  },
  {
    question: "Trong tác phẩm Đường cách mệnh (1927), Hồ Chí Minh xác định hai giai cấp nào là \"gốc cách mệnh\"?",
    answers: [
      "Tư sản dân tộc và địa chủ yêu nước.",
      "Công nhân và nông dân.",
      "Trí thức và tiểu tư sản.",
      "Học sinh, sinh viên và thương nhân."
    ],
    correct: 1
  },
  {
    question: "Theo tư tưởng Hồ Chí Minh, sự tiến lên chủ nghĩa xã hội của loài người mang tính chất gì?",
    answers: [
      "Là một sự lựa chọn ngẫu nhiên, chủ quan của từng nhà lãnh đạo.",
      "Là một tiến trình tất yếu khách quan tuân theo quy luật phát triển của lịch sử.",
      "Là mô hình được áp đặt duy nhất từ các nước phát triển.",
      "Là giai đoạn không bắt buộc và có thể bỏ qua đối với các nước phương Đông."
    ],
    correct: 1
  },
  {
    question: "Theo Hồ Chí Minh, đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
    answers: [
      "Từ một nước tư bản phát triển tiến thẳng lên chủ nghĩa xã hội.",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa.",
      "Từ một xã hội phong kiến thuần túy đi lên chủ nghĩa tư bản rồi mới lên chủ nghĩa xã hội.",
      "Từ một nước công nghiệp hiện đại tiến lên chủ nghĩa cộng sản."
    ],
    correct: 1
  },
  {
    question: "Luận điểm sáng tạo xuất sắc của Hồ Chí Minh về mối quan hệ giữa cách mạng giải phóng dân tộc ở thuộc địa và cách mạng vô sản ở chính quốc là gì?",
    answers: [
      "Cách mạng thuộc địa hoàn toàn phụ thuộc và chỉ thắng lợi sau khi cách mạng vô sản ở chính quốc thành công.",
      "Cách mạng giải phóng dân tộc ở thuộc địa có tính chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc.",
      "Cách mạng thuộc địa không có mối liên hệ nào với phong trào cách mạng vô sản thế giới.",
      "Cách mạng thuộc địa chỉ đóng vai trò phụ trợ, chờ sự can thiệp quân sự từ bên ngoài."
    ],
    correct: 1
  },
  {
    question: "Điểm khác biệt mang tính sáng tạo trong việc xác định tiến trình giải phóng của Hồ Chí Minh so với lý luận Mác - Ăngghen ở Châu Âu là gì?",
    answers: [
      "Ở Châu Âu: Giải phóng dân tộc → Giải phóng giai cấp; Ở Việt Nam: Giải phóng giai cấp → Giải phóng dân tộc.",
      "Ở Châu Âu: Giải phóng giai cấp → Giải phóng dân tộc → Giải phóng xã hội → Giải phóng con người; Ở Việt Nam: Giải phóng dân tộc → Giải phóng xã hội → Giải phóng giai cấp → Giải phóng con người.",
      "Cả Châu Âu và Việt Nam đều đặt nhiệm vụ giải phóng giai cấp lên hàng đầu, trước hết.",
      "Ở Việt Nam chỉ cần giải phóng con người mà không cần giải phóng dân tộc."
    ],
    correct: 1
  },
  {
    question: "Hồ Chí Minh đã bổ sung, phát triển sáng tạo lý luận Mác - Lênin về bản chất giai cấp của Đảng Cộng sản Việt Nam như thế nào?",
    answers: [
      "Khẳng định Đảng chỉ đơn thuần là đội tiên phong của giai cấp tư sản dân tộc.",
      "Khẳng định Đảng Cộng sản Việt Nam vừa là đội tiên phong của giai cấp công nhân, vừa là đội tiên phong của nhân dân lao động và của toàn dân tộc Việt Nam.",
      "Xem Đảng là tổ chức liên minh bình đẳng giữa tất cả các giai cấp trong xã hội.",
      "Coi Đảng là đội tiên phong riêng biệt của tầng lớp trí thức."
    ],
    correct: 1
  },
  {
    question: "Khi giải quyết mối quan hệ giữa lợi ích cá nhân và lợi ích tập thể trong chủ nghĩa xã hội, quan niệm của Hồ Chí Minh thể hiện như thế nào?",
    answers: [
      "Xóa bỏ hoàn toàn lợi ích cá nhân để phục vụ lợi ích tập thể.",
      "Đặt lợi ích cá nhân lên trên và tuyệt đối hóa so với lợi ích cộng đồng.",
      "Lợi ích cá nhân nằm trong lợi ích tập thể; chế độ XHCN tôn trọng, bảo đảm lợi ích cá nhân chính đáng và tạo điều kiện phát triển tài năng riêng.",
      "Lợi ích tập thể và lợi ích cá nhân luôn đối lập gay gắt, không thể thống nhất."
    ],
    correct: 2
  },
  {
    question: "Theo Hồ Chí Minh, trong hệ thống các động lực phát triển chủ nghĩa xã hội ở Việt Nam, động lực nào giữ vai trò quyết định nhất?",
    answers: [
      "Nguồn vốn hỗ trợ và viện trợ tài chính từ các quốc gia tư bản.",
      "Sự phát triển tự phát của các thành phần kinh tế cá thể.",
      "Nội lực dân tộc, sức mạnh của nhân dân dưới sự lãnh đạo của Đảng.",
      "Các tài nguyên thiên nhiên chưa được khai phá."
    ],
    correct: 2
  }
];

const elements = {
  startCard: document.querySelector("#startCard"),
  quizCard: document.querySelector("#quizCard"),
  resultCard: document.querySelector("#resultCard"),
  questionText: document.querySelector("#questionText"),
  answers: document.querySelector("#answers"),
  currentQuestion: document.querySelector("#currentQuestion"),
  totalQuestions: document.querySelector("#totalQuestions"),
  progressBar: document.querySelector("#progressBar"),
  progressPercent: document.querySelector("#progressPercent"),
  timer: document.querySelector("#timer"),
  timerValue: document.querySelector("#timerValue"),
  timerProgress: document.querySelector("#timerProgress"),
  feedback: document.querySelector("#feedback"),
  wrongCount: document.querySelector("#wrongCount"),
  completedCount: document.querySelector("#completedCount"),
  playButton: document.querySelector("#playButton"),
  restartButton: document.querySelector("#restartButton"),
  twinkleField: document.querySelector("#twinkleField"),
  celebrationLayer: document.querySelector("#celebrationLayer"),
  soundToggle: document.querySelector("#soundToggle"),
  soundIcon: document.querySelector("#soundIcon"),
  soundLabel: document.querySelector("#soundLabel"),
  volumeControl: document.querySelector("#volumeControl")
};

let currentQuestionIndex = 0;
let timeLeft = QUIZ_TIME;
let timerId = null;
let wrongAttempts = 0;
let isTransitioning = false;
let audioContext = null;
let musicGain = null;
let musicTimerId = null;
let musicNoteIndex = 0;
let isSoundEnabled = true;
let musicVolume = 0.104;
let hasQuizStarted = false;

const musicNotes = [261.63, 329.63, 392, 523.25, 392, 329.63, 293.66, 392];

function ensureAudio() {
  if (!isSoundEnabled) return;

  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext = new AudioContextClass();
    musicGain = audioContext.createGain();
    musicGain.gain.value = musicVolume;
    musicGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  startBackgroundMusic();
}

function startBackgroundMusic() {
  if (!audioContext || !isSoundEnabled || musicTimerId !== null) return;

  playMusicNote();
  musicTimerId = window.setInterval(playMusicNote, 720);
}

function stopBackgroundMusic() {
  if (musicTimerId !== null) {
    window.clearInterval(musicTimerId);
    musicTimerId = null;
  }
}

function playMusicNote() {
  if (!audioContext || !musicGain || !isSoundEnabled) return;

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const noteGain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = musicNotes[musicNoteIndex % musicNotes.length];
  noteGain.gain.setValueAtTime(0.0001, now);
  noteGain.gain.exponentialRampToValueAtTime(0.75, now + 0.08);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.68);
  oscillator.connect(noteGain);
  noteGain.connect(musicGain);
  oscillator.start(now);
  oscillator.stop(now + 0.72);
  musicNoteIndex += 1;
}

function playTone(frequency, startDelay, duration, volume, type = "sine") {
  if (!audioContext || !isSoundEnabled) return;

  const startAt = audioContext.currentTime + startDelay;
  const oscillator = audioContext.createOscillator();
  const toneGain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  toneGain.gain.setValueAtTime(0.0001, startAt);
  toneGain.gain.exponentialRampToValueAtTime(volume, startAt + 0.025);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(toneGain);
  toneGain.connect(audioContext.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.03);
}

function playCorrectSound() {
  ensureAudio();
  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    playTone(frequency, index * 0.075, 0.28, 0.1, "sine");
  });
}

function playWrongSound() {
  ensureAudio();
  playTone(220, 0, 0.2, 0.075, "triangle");
  playTone(174.61, 0.11, 0.25, 0.07, "triangle");
}

function updateSoundButton() {
  elements.soundToggle.setAttribute("aria-pressed", String(isSoundEnabled));
  elements.soundToggle.setAttribute("aria-label", isSoundEnabled ? "Tắt âm thanh" : "Bật âm thanh");
  elements.soundIcon.textContent = isSoundEnabled ? "🔊" : "🔇";
  elements.soundLabel.textContent = isSoundEnabled ? "Âm thanh" : "Đã tắt";
}

function toggleSound() {
  isSoundEnabled = !isSoundEnabled;

  if (isSoundEnabled && hasQuizStarted) {
    ensureAudio();
  } else {
    stopBackgroundMusic();
  }

  updateSoundButton();
}

function updateMusicVolume(event) {
  const sliderValue = Number(event.currentTarget.value);
  musicVolume = (sliderValue / 100) * 0.16;

  if (musicGain && audioContext) {
    musicGain.gain.setTargetAtTime(musicVolume, audioContext.currentTime, 0.04);
  }

  elements.volumeControl.setAttribute("aria-valuetext", `${sliderValue}%`);
}

function createTwinkles() {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 26; index += 1) {
    const star = document.createElement("i");
    const size = 5 + Math.random() * 10;
    star.className = "twinkle";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--duration", `${1.8 + Math.random() * 2.6}s`);
    star.style.setProperty("--delay", `${Math.random() * -4}s`);
    fragment.appendChild(star);
  }

  elements.twinkleField.appendChild(fragment);
}

function renderQuestion() {
  const item = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  isTransitioning = false;
  elements.currentQuestion.textContent = currentQuestionIndex + 1;
  elements.totalQuestions.textContent = questions.length;
  elements.progressBar.style.width = `${progress}%`;
  elements.progressPercent.textContent = `${Math.round(progress)}%`;
  elements.questionText.textContent = item.question;
  elements.feedback.textContent = "Chọn đáp án đúng để đi tiếp nhé!";
  elements.feedback.className = "feedback";
  elements.answers.replaceChildren();

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.dataset.index = index;
    button.setAttribute("aria-label", `Đáp án ${ANSWER_LETTERS[index]}: ${answer}`);
    button.innerHTML = `
      <span class="answer-button__letter" aria-hidden="true">${ANSWER_LETTERS[index]}</span>
      <span class="answer-button__text">${answer}</span>
      <span class="answer-button__status" aria-hidden="true"></span>
    `;
    button.addEventListener("click", handleAnswer);
    elements.answers.appendChild(button);
  });

  elements.quizCard.classList.remove("is-entering");
  void elements.quizCard.offsetWidth;
  elements.quizCard.classList.add("is-entering");
  startTimer();
}

function handleAnswer(event) {
  if (isTransitioning) return;

  const button = event.currentTarget;
  const selectedIndex = Number(button.dataset.index);
  const correctIndex = questions[currentQuestionIndex].correct;

  if (selectedIndex === correctIndex) {
    handleCorrectAnswer(button);
  } else {
    handleWrongAnswer(button);
  }
}

function handleWrongAnswer(button) {
  playWrongSound();
  wrongAttempts += 1;
  button.disabled = true;
  button.classList.add("is-wrong");
  button.querySelector(".answer-button__status").textContent = "×";
  button.setAttribute("aria-label", `${button.getAttribute("aria-label")} — chưa đúng`);
  elements.feedback.textContent = "Chưa đúng rồi! Thử một đáp án khác nhé ✦";
  elements.feedback.className = "feedback is-error";
}

function handleCorrectAnswer(button) {
  playCorrectSound();
  isTransitioning = true;
  stopTimer();
  button.classList.add("is-correct");
  button.querySelector(".answer-button__status").textContent = "✓";
  button.setAttribute("aria-label", `${button.getAttribute("aria-label")} — chính xác`);

  elements.answers.querySelectorAll(".answer-button").forEach((answerButton) => {
    answerButton.disabled = true;
    if (answerButton !== button && !answerButton.classList.contains("is-wrong")) {
      answerButton.classList.add("is-muted");
    }
  });

  elements.feedback.textContent = "Chính xác! Bạn giỏi quá! ★";
  elements.feedback.className = "feedback is-success";
  createStarBurst(button);

  window.setTimeout(() => {
    currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 700);
}

function startTimer() {
  stopTimer();
  timeLeft = QUIZ_TIME;
  updateTimer();

  timerId = window.setInterval(() => {
    timeLeft -= 1;
    updateTimer();

    if (timeLeft <= 0) {
      stopTimer();
      elements.feedback.textContent = "Hết giờ! Bình tĩnh chọn tiếp cho đến khi đúng nhé.";
      elements.feedback.className = "feedback is-error";
    }
  }, 1000);
}

function stopTimer() {
  if (timerId !== null) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function updateTimer() {
  const safeTime = Math.max(timeLeft, 0);
  const offset = TIMER_CIRCUMFERENCE * (1 - safeTime / QUIZ_TIME);

  elements.timerValue.textContent = safeTime;
  elements.timerProgress.style.strokeDashoffset = offset;
  elements.timer.classList.toggle("is-low", safeTime <= 5);
  elements.timer.setAttribute("aria-label", safeTime > 0 ? `Còn ${safeTime} giây` : "Đã hết giờ");
}

function createStarBurst(target) {
  const rect = target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const colors = ["#ffd75e", "#ffffff", "#67c8ff", "#80e5b4"];

  for (let index = 0; index < 16; index += 1) {
    const angle = (Math.PI * 2 * index) / 16 + Math.random() * 0.25;
    const distance = 55 + Math.random() * 75;
    const star = document.createElement("span");

    star.className = "burst-star";
    star.textContent = index % 3 === 0 ? "★" : "✦";
    star.style.setProperty("--x", `${centerX}px`);
    star.style.setProperty("--y", `${centerY}px`);
    star.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    star.style.setProperty("--dy", `${Math.sin(angle) * distance - 28}px`);
    star.style.setProperty("--rotation", `${Math.round(Math.random() * 220 - 110)}deg`);
    star.style.setProperty("--size", `${12 + Math.random() * 15}px`);
    star.style.setProperty("--color", colors[index % colors.length]);
    elements.celebrationLayer.appendChild(star);
    star.addEventListener("animationend", () => star.remove(), { once: true });
  }
}

function showResult() {
  stopTimer();
  elements.quizCard.hidden = true;
  elements.resultCard.hidden = false;
  elements.completedCount.textContent = `${questions.length}/${questions.length}`;
  elements.wrongCount.textContent = wrongAttempts;
  elements.resultCard.focus?.();
  createFinalCelebration();
}

function createFinalCelebration() {
  const fakeTarget = {
    getBoundingClientRect: () => ({
      left: window.innerWidth / 2 - 50,
      top: window.innerHeight / 2 - 50,
      width: 100,
      height: 100
    })
  };
  createStarBurst(fakeTarget);
}

function startQuiz() {
  hasQuizStarted = true;
  currentQuestionIndex = 0;
  wrongAttempts = 0;
  isTransitioning = false;
  elements.startCard.hidden = true;
  elements.resultCard.hidden = true;
  elements.quizCard.hidden = false;
  ensureAudio();
  renderQuestion();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  wrongAttempts = 0;
  isTransitioning = false;
  elements.resultCard.hidden = true;
  elements.quizCard.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

elements.playButton.addEventListener("click", startQuiz);
elements.restartButton.addEventListener("click", restartQuiz);
elements.soundToggle.addEventListener("click", toggleSound);
elements.volumeControl.addEventListener("input", updateMusicVolume);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopBackgroundMusic();
  } else if (hasQuizStarted && isSoundEnabled && audioContext) {
    startBackgroundMusic();
  }
});
createTwinkles();
