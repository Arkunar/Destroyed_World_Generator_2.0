// data/law_physics.js - Правила физики и время. Определяют масштаб катастрофы (МАКСИМУМ КОНЦЕПЦИОНАЛЬНОСТИ).

export const LAWS_DEVIATIONS = [
    { id: "TIME_FLUX", name: "Реверсивный Цикл Времени", desc: "Энтропия может откатиться вспять. Объекты могут 'омолодиться' до состояния нефункциональной материи.", chaos_weight: 0.95 },
    { id: "GRAVITY_AXIS", name: "Трехмерная Гравитация", desc: "Сила действует по иррациональным осям, делая движение вертикально бессмысленным.", chaos_weight: 1.0 },
    { id: "MASS_COLOR", name: "Масса Цвета", desc: "Эмоциональный заряд окрашивает материю в неестественную плотность.", chaos_weight: 0.9 },
    // --- Законы, связанные с информацией и восприятием ---
    { id: "PSYCHIC_HARMONY", name: "Резонанс Сознания", desc: "Поля аномалий усиливают эмоциональные частоты в небывалые масштабы; близкое столкновение мыслей может быть смертельным.", chaos_weight: 1.3 },
    { id: "INFORMATION_DECAY", name: "Деградация Данных (Data Rot)", desc: "Локальное место, где сами законы физики нестабильны из-за потери информации о первоначальном состоянии мира.", chaos_weight: 1.45 },
    { id: "CHRONO_STASIS", name: "Хроно-Стазис (Temporal Stasis)", desc: "Пространство, где время замерло на микросекундном уровне. Внутри — инертность; снаружи — хаос.", chaos_weight: 1.5 },
    { id: "ZERO_FIELD", name: "Поле Нуля (Zero Field)", desc: "Место абсолютного ничто, где нулевые константы перестают работать; ни электромагнетизм, ни тепло, ни звук.", chaos_weight: 1.6 }
];

export const SEEDS = {
    default: { name: "Стандартный Переход", bias: { WEIGHT: 0.5, HIGH_PRIORITY: [] } },
    archaic_mystery: { name: "Древняя Тайна (Лавкрафт)", bias: { WEIGHT: 1.5, HIGH_PRIORITY: ["VOID", "BONE"] } },
    temporal_decay: { name: "Временной Распад (Эхо Прошлого)", bias: { WEIGHT: 2.5, HIGH_PRIORITY: ["CRYSTAL", "ELUSIVE_FILAMENT"] } },
    energetic_surge: { name: "Энергетический Всплеск (Чистый Хаос)", bias: { WEIGHT: 3.5, HIGH_PRIORITY: ["PLASMA", "TITANIUM"] } },
    // --- Максимально сложные синергии ---
    zone_memory: { name: "Контур Искаженного Воспоминания", bias: { WEIGHT: 4.5, HIGH_PRIORITY: ["VOID_DUST", "MEMORY_GLASS", "INFOMEMORY"] } },
    time_entropy_loop: { name: "Петля Деградации Времени и Данных", bias: { WEIGHT: 5.5, HIGH_PRIORITY: ["AETHERIUM", "INFORMATION_DECAY", "VOIDLY"] } }
};

// --- End of law_physics.js ---