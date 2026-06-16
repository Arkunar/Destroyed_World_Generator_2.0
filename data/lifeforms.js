// data/lifeforms.js - ВСЕ ЕДИНСТВЕННЫЙ КОНТЕЙНЕР ДАННЫХ О ЖИЗНИ И СЛОВАРИКЕ! (МАКСИМУМ ОБЪЕМ)

export const NATURE_PREFIXES = [
    { id: "AGGR", name: "Агрессивный", desc: "Прямая угроза жизни. Требует немедленного устранения.", base_chaos_weight: 0.7 },
    { id: "VOIDLY", name: "Вакуумный", desc: "Распад данных или материи; поглощает энергию и смысл.", base_chaos_weight: 0.9 },
    { id: "NOCT", name: "Полуночный/Ночной", desc: "Существо теней, связанных со сном, памятью или вневременным периодом.", base_chaos_weight: 0.5 },
    { id: "HYPER", name: "Гипер-насыщенный", desc: "Перегрузка сенсорных данных (визуальная/акустическая какофония).", base_chaos_weight: 0.8 },
    // --- Новые префиксы ---
    { id: "CHRONO", name: "Хроно-отклоняющийся", desc: "Сущность, которая нарушает локальное течение времени.", base_chaos_weight: 1.0 },
    { id: "LOGIC_ERROR", name: "Логическая Ошибка", desc: "Объект или явление, противоречащее элементарной логике и физическим константам.", base_chaos_weight: 1.2 }
];

export const ENTITIES = [
    // --- КЛАСС I: АГЕНТЫ (Creatures - Фауна) ---
    { id: "SPIDER", name: "Паук-Конструктор", type: "CREATURE", material_pref: ["GLASS"], general_desc: "Плетёт паттерны воспоминаний из стеклянных осколков.", instability_impact: 0.7 },
    { id: "ARCHIVIST_GAZER", name: "Архивариус-Смотритель", type: "CREATURE", material_pref: ["BONE", "CRYSTAL"], general_desc: "Костяная маска, наблюдающая не за вами, а за паттерном ваших сожалений.", instability_impact: 0.95 },
    { id: "SILENCE_DRIFTER", name: "Шептун Тишины", type: "CREATURE", material_pref: ["VOIDLY"], general_desc: "Поглощает звук, оставляя пустоту в сознании; его близость вызывает потерю ориентиров.", instability_impact: 0.8 },
    { id: "MUTANT_BEAST", name: "Мутантский Хищник Зоны", type: "CREATURE", material_pref: ["BONE", "PLASMA"], general_desc: "Гибрид радиационного и биологического распада. Яркая, но непредсказуемая агрессия.", instability_impact: 0.9 },
    { id: "PHANTOM_TIME", name: "Фантом Утраченных Часов", type: "CREATURE", material_pref: ["MEMORIES_GLASS"], general_desc: "Сущность, которая «теряет» вас во времени, делая воспоминания о встрече размытыми.", instability_impact: 0.95 },
    { id: "VOID_HYDRA", name: "Войлочный Глизан", type: "CREATURE", material_pref: ["VOID_DUST"], general_desc: "Масса, питающаяся чистой пустотой и нигилизмом. Обладает множеством конечностей.", instability_impact: 1.0 },

    // --- КЛАСС II: ФЛОРА И ЛАНДШАФТЫ (Flora - Растительность) ---
    { id: "CHRONO_BLOSSOM", name: "Цветок Временной Задержки", type: "FLORA", material_pref: ["GLASS", "ELUSIVE_FILAMENT"], general_desc: "Расцветает в областях временного замедления. Его лепестки меняют возраст мгновенно.", instability_impact: 0.9 },
    { id: "MNEMOSYNE_VINE", name: "Лиана Утерянных Слов", type: "FLORA", material_pref: ["VOID_DUST"], general_desc: "Поглощает смысл и диалог, обвивая предметы в серой бессмысленности.", instability_impact: 0.85 },
    { id: "GLYPHIC_FUNGUS", name: "Грибок Геоглифов", type: "FLORA", material_pref: ["CRYSTAL"], general_desc: "Плесень, которая «выращивает» на поверхности земли временные или предупреждающие символы.", instability_impact: 0.6 },
    { id: "RESIDUE_ROOTS", name: "Корни Аномальной Массы", type: "FLORA", material_pref: ["ZONE_RESIDUE"], general_desc: "Массивные, кристаллические корни, которые не питаются почвой, а извлечением энергии из аномальных полей.", instability_impact: 0.9 },

    // --- КЛАСС III: ОБЪЕКТЫ И ПАКЕТНЫЕ ФЕНОМЕНЫ (Object/Phenomena) ---
    { id: "TUMBLER", name: "Агрессивная Тумбочка", type: "OBJECT", material_pref: ["TITANIUM"], general_desc: "Мебель, отбрасывающая импульс ярости.", instability_impact: 0.6 },
    { id: "MEMORY_SLAB", name: "Слой Памяти (Memory Slab)", type: "OBJECT", material_pref: ["MEMORIES_GLASS"], general_desc: "Геоглифический кусок, отражающий не реальность, а самые яркие и болезненные воспоминания человека.", instability_impact: 0.7 },
    { id: "TEMPORAL_MIRROR", name: "Хроно-Зеркало", type: "OBJECT", material_pref: ["CRYSTAL"], general_desc: "Не отражает вас, а ваше состояние через минуту в будущем (или прошлое). Очень опасно.", instability_impact: 0.9 },
    { id: "VOID_TERMINUS", name: "Портал в Ничто", type: "OBJECT", material_pref: ["VOID"], general_desc: "Видимое отсутствие пространства; точку, через которую невозможно пройти ни за жизнь, ни мгновение.", instability_impact: 1.5 },
    { id: "CRYSTAL_EMITTER", name: "Кристалл Перегрузки Сигнала", type: "DEVICE", material_pref: ["TITANIUM"], general_desc: "Устройство, которое не передает сигнал, а просто излучает весь накопленный электромагнитный шум зоны.", instability_impact: 0.75 },
    { id: "ELUSIVE_ANCHOR", name: "Якорь Реальности", type: "DEVICE", material_pref: ["CRYSTAL"], general_desc: "Непонятное артефактное устройство, которое временно стабилизирует локальное пространство за счет поглощения избыточной энергии.", instability_impact: 0.3 }
];

// **ВАЖНО:** При использовании этого блока кода, любые другие объявления (export const...) должны быть удалены.
