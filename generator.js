/**
 * ============================================================
 * ARCHIVE CORE LOGIC: generator.js
 * Этот код должен быть в корневой папке проекта, рядом с data/
 * ЭТО ЯДРО СИСТЕМЫ ГЕНЕРАЦИИ.
 * ============================================================
*/


/**
 * Вспомогательная функция: Weighted Random Selection
 */
function weightedRandomSelection(array, baseWeightMultiplier) {
    if (!array || array.length === 0) return null;

    let totalEffectiveWeight = 0;
    let itemsWithWeights = [];

    for (const item of array) {
        // Вычисляем эффективный вес: Базовый weight * Множитель хаоса/сида.
        let effectiveWeight = item.instability_impact || (item.chaos_weight ? Math.max(item.chaos_weight, 0.1) : 0.5);
        effectiveWeight *= baseWeightMultiplier;

        itemsWithWeights.push({ element: item, weight: effectiveWeight });
        totalEffectiveWeight += effectiveWeight;
    }

    let randomPoint = Math.random() * totalEffectiveWeight;
    let runningTotal = 0;

    for (const item of itemsWithWeights) {
        runningTotal += item.weight;
        if (randomPoint <= runningTotal && item.weight > 0.01) {
            return item.element;
        }
    }
    // Fallback: выбираем случайный элемент из первой половины массива, если расчет вышел за рамки погрешности.
    return array[Math.floor(Math.random() * (array.length / 2))]; 
}


/**
 * Генерирует или выбирает оптимальный сид на основе хаоса.
 */
function generateRandomSeed(chaosLevel) {
    let chosenId;
    let baseBias = 1.0;

    if (chaosLevel >= 8) {
        chosenId = 'energetic_surge'; 
        baseBias = 2.5; 
    } else if (chaosLevel <= 3) {
        chosenId = 'default'; 
        baseBias = 0.7; 
    } else {
        const choices = ['archaic_mystery', 'temporal_decay'];
        chosenId = choices[Math.floor(Math.random() * 2)];
        baseBias = Math.pow(1.1, chaosLevel / 5); 
    }

    return { id: chosenId, biasMultiplier: baseBias };
}


/**
 * Основная функция генерации всего осколка реальности (теперь использует динамический Сид).
 */
function generateRealityShard(seedIdFromUI, chaosIntensity) {
    const KB = window.KNOWLEDGE_BASE;
    let totalInstability = 0;

    // --- I. ЛОГИКА СИДА ---
    const { id: calculatedSeedId, biasMultiplier } = generateRandomSeed(chaosIntensity);

    let seedParam = KB.SEEDS[calculatedSeedId]; 
    if (!seedParam) throw new Error("Критическая ошибка сида!");


    // --- II. ОПРЕДЕЛЕНИЕ ДЕВИАЦИИ (Law Deviation) ---
    let lawDeviated = weightedRandomSelection(KB.LAWS_DEVIATIONS, Math.max(biasMultiplier * 0.8, chaosIntensity / 5));
    let settingDescription;

    if (lawDeviated) {
        settingDescription = `Пространство здесь подчиняется ${lawDeviated.name}. Это явление заставляет восприятие искажаться... (${lawDeviated.desc})`;
        totalInstability += lawDeviated.chaos_weight * (chaosIntensity / 10);
    } else {
        settingDescription = "Законы физики пока выглядят устойчивыми, но напряжение в воздухе предполагает неминуемый разрыв.";
    }

    // --- III. ГЕНЕРАЦИЯ КОМПОНЕНТОВ (Слоизация) ---
    const coreElement = weightedRandomSelection(KB.ELEMENTS, Math.max(biasMultiplier * 1.5, chaosIntensity / 3));
    const groundMaterial = weightedRandomSelection(KB.MATTER_SOURCES, Math.max(biasMultiplier, chaosIntensity / 8));

    let settingLog = `**Ландшафт:** Поверхность представляет собой аномальный сплав ${coreElement ? coreElement.name : 'неизвестной субстанции'} и материала **${groundMaterial ? groundMaterial.name : 'мертвой почвы'}**. Аномальное напряжение окрашивает горизонт в цвет, который вы никогда не видели.`;
    settingLog += `<br><b class="shift-alert">[АСИМВА] Законы здесь переписываются: <em>${lawDeviated ? lawDeviated.name : '???'}</em>`;

    // --- IV. ФАУНА/ФЛОРА (Creatures & Flora) ---
    const entity = weightedRandomSelection(KB.ENTITIES, Math.max(biasMultiplier * 1.5, chaosIntensity / 6));
    let creatureLog;

    if (entity) {
        const relatedMaterial = KB.MATTER_SOURCES[Math.floor(Math.random() * KB.MATTER_SOURCES.length)]; 
        const modifier = KB.NATURE_PREFIXES[Math.floor(Math.random() * KB.NATURE_PREFIXES.length)];

        const combinedName = `${modifier.name} ${relatedMaterial.name} ${entity.name}`;

        creatureLog = `**Фауна/Флора:** Доминирует существо **${combinedName}**. Это не просто животное; это *артефакт жизни*. Его структура (из ${relatedMaterial.name}) каким-то образом резонирует с местной девиацией: ${lawDeviated ? lawDeviated.name : 'Непостижимо'}.`;
        totalInstability += entity.instability_impact + relatedMaterial.instability_impact;

    } else {
        creatureLog = "Виды жизни либо отсутствуют, либо слишком чужеродны, чтобы быть классифицированными — они скорее являются частью самого ландшафта.";
    }


    let objectLog = `**Артефакты:** Обнаружены объекты из забытых времен: ${KB.MATTER_SOURCES[Math.floor(Math.random() * KB.MATTER_SOURCES.length)].name}. Они служат прямым физическим доказательством эпохи Великого Сдвига и того, что цивилизация драконов не была вечной.`;

    // --- V. ПОСЛЕДСТВИЯ И ТРИГГЕРЫ (The Dread Factor) ---
    let statusText; 
    let safetyDisclaimer = "";

    if (totalInstability >= 4.0) { 
        statusText = "!!!";
        safetyDisclaimer = `\n\n<div style="padding: 15px; margin-top: 20px; border: 3px solid red; background-color: rgba(255, 0, 0, 0.2); animation: pulse 1s infinite alternate;">
            <strong style="color:red; font-size:1.2em;">[!!! ОПАСНОСТЬ КРАХА !!!]</strong> Уровень нестабильности в этой области критически высок (${Math.round(totalInstability * 10) / 10}). Шагоход передает предупреждающий сигнал: **Напряжение настолько велико, что оно физически давит на экипаж**.
        </div>`;
    } else if (totalInstability >= 3.0) { 
        statusText = "[[!!!]]";
        safetyDisclaimer = `\n\n<div style="padding: 15px; margin-top: 20px; border: 2px solid orange; background-color: rgba(255, 195, 0, 0.1);">
            <strong style="color:#ffc300;">[ПРЕДУПРЕЖДЕНИЕ]</strong> Область нестабильна (Индекс ${Math.round(totalInstability * 10) / 10}). Постоянный фоновый шум — искажения гравитации/звука, требующие постоянной концентрации.
        </div>`;
    } else {
         statusText = "[---]";
         safetyDisclaimer = `\n\n<div style="padding: 15px; margin-top: 20px; border: 1px solid var(--color-primary); background-color: rgba(0, 255, 153, 0.1);">
            <strong style="color:var(--color-primary);">[СТРУКТУРАЛЬНАЯ АНОМАЛИЯ]</strong> Область удивительно "спокойна" (Индекс ${Math.round(totalInstability * 10) / 10}). Это не безопасность, а **вакуумная стабильность**, которая кажется более тревожной, чем любой хаос.
        </div>`;
    }

    // --- VI. Сборка финального нарратива (The Grand Finale) ---
    let finalHTML = `
        <div class="shard-title">${seedParam.name} / ${lawDeviated.name || 'Стандартный Область'} (${statusText})</div>
        
        <h4 style="color: #c4caff">[Слой 1: МЕТАФИЗИЧЕСКОЕ ПОЛЕ]</h4>
        <p>${settingDescription}</p>

        <hr style="border-color: rgba(255, 59, 110, 0.3); margin: 20px 0;">
        
        <h4 style="color: #c4caff">[Слой 2: ЛАНДШАФТ И ПОЧВА]</h4>
        <p>${settingLog}</p>

        <hr style="border-color: rgba(255, 59, 110, 0.3); margin: 20px 0;">
        
        <h4 style="color: #c4caff">[Слой 3: БИОСФЕРА И КОРПУС]</h4>
        <p>${creatureLog}</p>

        <h4 style="margin-top: 20px; color:#c4caff;">[Дополнительные Артефакты и Потери Памяти]</h4>
        <p>${objectLog}</p>
    `;


    return { html: finalHTML + safetyDisclaimer, instabilityScore: totalInstability };
}

// --- Внимание! Это финальный блок для проверки готовности. ---
console.log("✅ Generator Core Loaded and Ready.");