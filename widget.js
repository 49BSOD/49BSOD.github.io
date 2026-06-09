// widget.js – динамическое расписание (финальная версия)

const scheduleData = [
  // Четверг
  { day: "Четверг", dayIndex: 4, start: "00:00:00", end: "04:00:00", eventReady: "Исследования", eventConfront: "Герой", actionSpecific: "-", actionAny: "Тратим puzzle.png, book.png, exp.png и hc.png, копим radar emoji на завтра" },
  { day: "Четверг", dayIndex: 4, start: "04:00:00", end: "08:00:00", eventReady: "Самолёт", eventConfront: "Герой", actionSpecific: "Тратим 300 energy.png", actionAny: "Тратим puzzle.png, book.png, exp.png и hc.png, копим radar emoji на завтра" },
  { day: "Четверг", dayIndex: 4, start: "08:00:00", end: "12:00:00", eventReady: "Герой", eventConfront: "Герой", actionSpecific: "Закрываем готовность, усиленно тратим exp.png и hc.png", actionAny: "Тратим puzzle.png, book.png, exp.png и hc.png, копим radar emoji на завтра" },
  { day: "Четверг", dayIndex: 4, start: "12:00:00", end: "16:00:00", eventReady: "Строительство", eventConfront: "Герой", actionSpecific: "-", actionAny: "Тратим puzzle.png, book.png, exp.png и hc.png, копим radar emoji на завтра" },
  { day: "Четверг", dayIndex: 4, start: "16:00:00", end: "20:00:00", eventReady: "Солдаты", eventConfront: "Герой", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "Тратим puzzle.png, book.png, exp.png и hc.png, копим radar emoji на завтра" },
  { day: "Четверг", dayIndex: 4, start: "20:00:00", end: "00:00:00", eventReady: "Исследования", eventConfront: "Герой", actionSpecific: "-", actionAny: "Тратим puzzle.png, book.png, exp.png и hc.png, копим radar emoji на завтра" },
  // Пятница
  { day: "Пятница", dayIndex: 5, start: "00:00:00", end: "04:00:00", eventReady: "Самолёт", eventConfront: "Солдаты", actionSpecific: "Тратим 300 energy.png", actionAny: "Выполняем задания radar emoji, повышаем и обучаем soldier.png, trsp.png тренировки" },
  { day: "Пятница", dayIndex: 5, start: "04:00:00", end: "08:00:00", eventReady: "Герой", eventConfront: "Солдаты", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Выполняем задания radar emoji, повышаем и обучаем soldier.png, trsp.png тренировки" },
  { day: "Пятница", dayIndex: 5, start: "08:00:00", end: "12:00:00", eventReady: "Строительство", eventConfront: "Солдаты", actionSpecific: "-", actionAny: "Выполняем задания radar emoji, повышаем и обучаем soldier.png, trsp.png тренировки" },
  { day: "Пятница", dayIndex: 5, start: "12:00:00", end: "16:00:00", eventReady: "Солдаты", eventConfront: "Солдаты", actionSpecific: "Закрываем готовность - усиленно повышаем и обучаем soldier.png, trsp.png тренировки", actionAny: "Выполняем задания radar emoji, повышаем и обучаем soldier.png, trsp.png тренировки" },
  { day: "Пятница", dayIndex: 5, start: "16:00:00", end: "20:00:00", eventReady: "Исследования", eventConfront: "Солдаты", actionSpecific: "-", actionAny: "Выполняем задания radar emoji, повышаем и обучаем soldier.png, trsp.png тренировки" },
  { day: "Пятница", dayIndex: 5, start: "20:00:00", end: "00:00:00", eventReady: "Самолёт", eventConfront: "Солдаты", actionSpecific: "Тратим 300 energy.png", actionAny: "Выполняем задания radar emoji, повышаем и обучаем soldier.png, trsp.png тренировки" },
  // Суббота
  { day: "Суббота", dayIndex: 6, start: "00:00:00", end: "04:00:00", eventReady: "Герой", eventConfront: "Рейд", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Убиваем и лечим soldier.png, hesp.png лечение. articulated lorry emoji, box emoji только ur.png" },
  { day: "Суббота", dayIndex: 6, start: "04:00:00", end: "08:00:00", eventReady: "Строительство", eventConfront: "Рейд", actionSpecific: "-", actionAny: "Убиваем и лечим soldier.png, hesp.png лечение. articulated lorry emoji, box emoji только ur.png" },
  { day: "Суббота", dayIndex: 6, start: "08:00:00", end: "12:00:00", eventReady: "Солдаты", eventConfront: "Рейд", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "Убиваем и лечим soldier.png, hesp.png лечение. articulated lorry emoji, box emoji только ur.png" },
  { day: "Суббота", dayIndex: 6, start: "12:00:00", end: "16:00:00", eventReady: "Исследования", eventConfront: "Рейд", actionSpecific: "-", actionAny: "Убиваем и лечим soldier.png, hesp.png лечение. articulated lorry emoji, box emoji только ur.png" },
  { day: "Суббота", dayIndex: 6, start: "16:00:00", end: "20:00:00", eventReady: "Самолёт", eventConfront: "Рейд", actionSpecific: "Тратим 300 energy.png", actionAny: "Убиваем и лечим soldier.png, hesp.png лечение. articulated lorry emoji, box emoji только ur.png" },
  { day: "Суббота", dayIndex: 6, start: "20:00:00", end: "00:00:00", eventReady: "Герой", eventConfront: "Рейд", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Убиваем и лечим soldier.png, hesp.png лечение. articulated lorry emoji, box emoji только ur.png" },
  // Воскресенье
  { day: "Воскресенье", dayIndex: 0, start: "00:00:00", end: "04:00:00", eventReady: "Строительство", eventConfront: "Отдыхаем", actionSpecific: "-", actionAny: "Копим radar emoji на завтра" },
  { day: "Воскресенье", dayIndex: 0, start: "04:00:00", end: "08:00:00", eventReady: "Солдаты", eventConfront: "Отдыхаем", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "Копим radar emoji на завтра" },
  { day: "Воскресенье", dayIndex: 0, start: "08:00:00", end: "12:00:00", eventReady: "Исследования", eventConfront: "Отдыхаем", actionSpecific: "-", actionAny: "Копим radar emoji на завтра" },
  { day: "Воскресенье", dayIndex: 0, start: "12:00:00", end: "16:00:00", eventReady: "Самолёт", eventConfront: "Отдыхаем", actionSpecific: "Тратим 300 energy.png", actionAny: "Копим radar emoji на завтра" },
  { day: "Воскресенье", dayIndex: 0, start: "16:00:00", end: "20:00:00", eventReady: "Герой", eventConfront: "Отдыхаем", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Копим radar emoji на завтра" },
  { day: "Воскресенье", dayIndex: 0, start: "20:00:00", end: "00:00:00", eventReady: "Строительство", eventConfront: "Отдыхаем", actionSpecific: "-", actionAny: "Копим radar emoji на завтра" },
  // Понедельник
  { day: "Понедельник", dayIndex: 1, start: "00:00:00", end: "04:00:00", eventReady: "Герой", eventConfront: "Радар", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Выполняем задания radar emoji, добываем resource.png, тратим energy.png, chip.png и gear.png" },
  { day: "Понедельник", dayIndex: 1, start: "04:00:00", end: "08:00:00", eventReady: "Строительство", eventConfront: "Радар", actionSpecific: "-", actionAny: "Выполняем задания radar emoji, добываем resource.png, тратим energy.png, chip.png и gear.png" },
  { day: "Понедельник", dayIndex: 1, start: "08:00:00", end: "12:00:00", eventReady: "Солдаты", eventConfront: "Радар", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "Выполняем задания radar emoji, добываем resource.png, тратим energy.png, chip.png и gear.png" },
  { day: "Понедельник", dayIndex: 1, start: "12:00:00", end: "16:00:00", eventReady: "Исследования", eventConfront: "Радар", actionSpecific: "-", actionAny: "Выполняем задания radar emoji, добываем resource.png, тратим energy.png, chip.png и gear.png" },
  { day: "Понедельник", dayIndex: 1, start: "16:00:00", end: "20:00:00", eventReady: "Самолёт", eventConfront: "Радар", actionSpecific: "Закрываем готовность - усиленно тратим energy.png и chip.png", actionAny: "Выполняем задания radar emoji, добываем resource.png, тратим energy.png, chip.png и gear.png" },
  { day: "Понедельник", dayIndex: 1, start: "20:00:00", end: "00:00:00", eventReady: "Герой", eventConfront: "Радар", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Выполняем задания radar emoji, добываем resource.png, тратим energy.png, chip.png и gear.png" },
  // Вторник
  { day: "Вторник", dayIndex: 2, start: "00:00:00", end: "04:00:00", eventReady: "Строительство", eventConfront: "Строительство", actionSpecific: "Закрываем готовность - усиленно build.png здания, busp.png строительство", actionAny: "build.png здания, busp.png строительство, тратим sc.png, articulated lorry emoji и box emoji ТОЛЬКО trsp.png" },
  { day: "Вторник", dayIndex: 2, start: "04:00:00", end: "08:00:00", eventReady: "Солдаты", eventConfront: "Строительство", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "build.png здания, busp.png строительство, тратим sc.png, articulated lorry emoji и box emoji ТОЛЬКО trsp.png" },
  { day: "Вторник", dayIndex: 2, start: "08:00:00", end: "12:00:00", eventReady: "Исследования", eventConfront: "Строительство", actionSpecific: "-", actionAny: "build.png здания, busp.png строительство, тратим sc.png, articulated lorry emoji и box emoji ТОЛЬКО trsp.png" },
  { day: "Вторник", dayIndex: 2, start: "12:00:00", end: "16:00:00", eventReady: "Самолёт", eventConfront: "Строительство", actionSpecific: "Тратим 300 energy.png", actionAny: "build.png здания, busp.png строительство, тратим sc.png, articulated lorry emoji и box emoji ТОЛЬКО trsp.png" },
  { day: "Вторник", dayIndex: 2, start: "16:00:00", end: "20:00:00", eventReady: "Герой", eventConfront: "Строительство", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "build.png здания, busp.png строительство, тратим sc.png, articulated lorry emoji и box emoji ТОЛЬКО trsp.png" },
  { day: "Вторник", dayIndex: 2, start: "20:00:00", end: "00:00:00", eventReady: "Строительство", eventConfront: "Строительство", actionSpecific: "Закрываем готовность - усиленно build.png здания, busp.png строительство", actionAny: "build.png здания, busp.png строительство, тратим sc.png, articulated lorry emoji и box emoji ТОЛЬКО trsp.png" },
  // Среда
  { day: "Среда", dayIndex: 3, start: "00:00:00", end: "04:00:00", eventReady: "Солдаты", eventConfront: "Исследования", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "Выполняем задания radar emoji, открываем chest.png, исследуем tech.png, тратим data.png, scsp.png исследования" },
  { day: "Среда", dayIndex: 3, start: "04:00:00", end: "08:00:00", eventReady: "Исследования", eventConfront: "Исследования", actionSpecific: "Закрываем готовность, усиленно исследуем tech.png, scsp.png исследования", actionAny: "Выполняем задания radar emoji, открываем chest.png, исследуем tech.png, тратим data.png, scsp.png исследования" },
  { day: "Среда", dayIndex: 3, start: "08:00:00", end: "12:00:00", eventReady: "Самолёт", eventConfront: "Исследования", actionSpecific: "Тратим 300 energy.png", actionAny: "Выполняем задания radar emoji, открываем chest.png, исследуем tech.png, тратим data.png, scsp.png исследования" },
  { day: "Среда", dayIndex: 3, start: "12:00:00", end: "16:00:00", eventReady: "Герой", eventConfront: "Исследования", actionSpecific: "Тратим 24 миллиона exp.png", actionAny: "Выполняем задания radar emoji, открываем chest.png, исследуем tech.png, тратим data.png, scsp.png исследования" },
  { day: "Среда", dayIndex: 3, start: "16:00:00", end: "20:00:00", eventReady: "Строительство", eventConfront: "Исследования", actionSpecific: "-", actionAny: "Выполняем задания radar emoji, открываем chest.png, исследуем tech.png, тратим data.png, scsp.png исследования" },
  { day: "Среда", dayIndex: 3, start: "20:00:00", end: "00:00:00", eventReady: "Солдаты", eventConfront: "Исследования", actionSpecific: "Повышаем и обучаем soldier.png", actionAny: "Выполняем задания radar emoji, открываем chest.png, исследуем tech.png, тратим data.png, scsp.png исследования" }
];

// ----- Вспомогательные функции -----
function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function getCurrentUTCMinus2Minutes() {
  const now = new Date();
  const localOffset = -now.getTimezoneOffset();
  const targetOffset = -120;
  const diffMinutes = targetOffset - localOffset;
  const targetTime = new Date(now.getTime() + diffMinutes * 60000);
  const minutes = targetTime.getHours() * 60 + targetTime.getMinutes();
  return { minutes, targetDate: targetTime };
}

function getWeekDayUTC2() {
  const { targetDate } = getCurrentUTCMinus2Minutes();
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  return { dayName: days[targetDate.getDay()], dayIndex: targetDate.getDay() };
}

function findCurrentEventIndex() {
  const { minutes } = getCurrentUTCMinus2Minutes();
  const { dayIndex } = getWeekDayUTC2();
  for (let i = 0; i < scheduleData.length; i++) {
    const e = scheduleData[i];
    if (e.dayIndex !== dayIndex) continue;
    const startMin = timeToMinutes(e.start);
    let endMin = timeToMinutes(e.end);
    if (e.end === "00:00:00") endMin = 1440;
    if (minutes >= startMin && minutes < endMin) return i;
  }
  let bestIndex = -1, bestDiff = Infinity;
  for (let i = 0; i < scheduleData.length; i++) {
    const e = scheduleData[i];
    const startMin = timeToMinutes(e.start);
    let dayDiff = (e.dayIndex - dayIndex + 7) % 7;
    let totalMinutesDiff = dayDiff * 1440 + (startMin - minutes);
    if (totalMinutesDiff <= 0 && minutes >= startMin) continue;
    if (totalMinutesDiff < bestDiff && totalMinutesDiff > 0) {
      bestDiff = totalMinutesDiff;
      bestIndex = i;
    }
  }
  return bestIndex !== -1 ? bestIndex : 0;
}

function getNextEvents(startIdx, count = 5) {
  const result = [];
  for (let i = 0; i < count; i++) {
    let idx = (startIdx + i) % scheduleData.length;
    result.push(scheduleData[idx]);
  }
  return result;
}

function formatLocalTimeRange(startUTC2, endUTC2) {
  const startMinutes = timeToMinutes(startUTC2);
  let endMinutes = timeToMinutes(endUTC2);
  if (endUTC2 === "00:00:00") endMinutes = 1440;
  const targetOffset = -120;
  const startLocal = new Date(Date.UTC(1970, 0, 1, 0, 0, 0) + (startMinutes - targetOffset) * 60000);
  const endLocal = new Date(Date.UTC(1970, 0, 1, 0, 0, 0) + (endMinutes - targetOffset) * 60000);
  const startStr = startLocal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endStr = endLocal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${startStr} – ${endStr}`;
}

function renderInlineIcons(text) {
  if (!text || text === "-") return "";
  const iconMap = {
    "puzzle.png": '<img src="icons/puzzle.png" class="icon" alt="puzzle">',
    "book.png": '<img src="icons/book.png" class="icon" alt="book">',
    "radar emoji": '<span class="emoji">📡</span>',
    "energy.png": '<img src="icons/energy.png" class="icon" alt="energy">',
    "exp.png": '<img src="icons/exp.png" class="icon" alt="exp">',
    "hc.png": '<img src="icons/hc.png" class="icon" alt="hc">',
    "soldier.png": '<img src="icons/soldier.png" class="icon" alt="soldier">',
    "trsp.png": '<img src="icons/trsp.png" class="icon icon-wide" alt="trsp">',
    "chip.png": '<img src="icons/chip.png" class="icon" alt="chip">',
    "gear.png": '<img src="icons/gear.png" class="icon" alt="gear">',
    "data.png": '<img src="icons/data.png" class="icon" alt="data">',
    "scsp.png": '<img src="icons/scsp.png" class="icon" alt="scsp">',
    "chest.png": '<img src="icons/chest.png" class="icon" alt="chest">',
    "hesp.png": '<img src="icons/hesp.png" class="icon" alt="heal">',
    "resource.png": '<img src="icons/resource.png" class="icon" alt="resource">',
    "build.png": '<img src="icons/build.png" class="icon" alt="build">',
    "tech.png": '<img src="icons/tech.png" class="icon" alt="tech">',
    "sc.png": '<img src="icons/sc.png" class="icon" alt="sc">',
    "busp.png": '<img src="icons/busp.png" class="icon" alt="busp">',
    "articulated lorry emoji": '<span class="emoji">🚛</span>',
    "box emoji": '<span class="emoji">📦</span>',
    "300 energy.png": '<img src="icons/energy.png" class="icon" alt="energy">',
    "24 миллиона exp.png": '<img src="icons/exp.png" class="icon" alt="exp">'
  };
  let result = text;
  for (const [key, value] of Object.entries(iconMap)) {
    result = result.split(key).join(value);
  }
  return result;
}

// ----- Отрисовка виджета -----
function renderWidget() {
  const container = document.getElementById('dailyWidget');
  if (!container) return;

  const currentIdx = findCurrentEventIndex();
  const nextEvents = getNextEvents(currentIdx, 5);
  const nowLocal = new Date();
  const localDateStr = nowLocal.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' });

  // Получаем действия "в любое время" для текущего дня (вставляем вверх)
  const todayIdx = getWeekDayUTC2().dayIndex;
  const firstToday = scheduleData.find(e => e.dayIndex === todayIdx);
  let anyTimeHtml = firstToday ? renderInlineIcons(firstToday.actionAny) : "";
  if (!anyTimeHtml) anyTimeHtml = "Нет данных";

  let eventsHtml = '';
  nextEvents.forEach((ev, idx) => {
    const timeRange = formatLocalTimeRange(ev.start, ev.end);
    const isCurrent = idx === 0;
    const readyIcon = '<img src="icons/RD.png" class="icon icon-rect" alt="RD">';
    const confrontIcon = '<img src="icons/VS.png" class="icon icon-rect" alt="VS">';
    const readyText = ev.eventReady;
    const confrontText = ev.eventConfront;
    let actionHtml = renderInlineIcons(ev.actionSpecific);

    let tagsHtml = '';
    if (confrontText === "Отдыхаем") {
      tagsHtml = '';
    } else if (readyText === confrontText) {
      tagsHtml = `<span class="event-tag">${readyIcon} ${confrontIcon} ${readyText}</span>`;
    } else {
      tagsHtml = `<span class="event-tag">${readyIcon} ${readyText}</span>
                  <span class="event-tag">${confrontIcon} ${confrontText}</span>`;
    }

    const actionBlock = actionHtml ? `<span class="event-action">${actionHtml}</span>` : '';

    eventsHtml += `
      <div class="event-item ${isCurrent ? 'current-event' : ''}">
        <div class="event-row">
          <span class="event-time">🕒 ${timeRange}</span>
          ${tagsHtml}
          ${actionBlock}
        </div>
      </div>
    `;
  });

  // Сворачиваемая структура
  const widgetId = 'widget_' + Date.now();
  const headerHtml = `
    <div class="widget-header" id="header-${widgetId}">
      <span class="widget-toggle" id="toggle-${widgetId}">▶</span>
      <span class="widget-title"><img src="icons/RD.png" class="icon icon-rect" alt="RD"> готовность и <img src="icons/VS.png" class="icon icon-rect" alt="VS"> ${localDateStr}</span>
    </div>
  `;
  const contentHtml = `
    <div class="widget-content" id="content-${widgetId}">
      <div class="widget-anytime">${anyTimeHtml}</div>
      <div class="widget-events">${eventsHtml}</div>
    </div>
  `;

  container.innerHTML = `<div class="widget-card">${headerHtml}${contentHtml}</div>`;

  // Навешиваем обработчик сворачивания
  const header = document.getElementById(`header-${widgetId}`);
  const toggleBtn = document.getElementById(`toggle-${widgetId}`);
  const content = document.getElementById(`content-${widgetId}`);

  // Изначально свёрнут
  content.style.display = 'none';
  toggleBtn.textContent = '▶';

  const toggle = () => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      toggleBtn.textContent = '▼';
    } else {
      content.style.display = 'none';
      toggleBtn.textContent = '▶';
    }
  };
  header.addEventListener('click', toggle);
}

document.addEventListener('DOMContentLoaded', renderWidget);