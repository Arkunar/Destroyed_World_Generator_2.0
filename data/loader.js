/**
 * ============================================================
 * DATA LOADER MODULE: loader.js (Финальная версия)
 * Этот скрипт импортирует ВСЕ данные из отдельных модулей 
 * и пакует их в единый, унифицированный KNOWLEDGE_BASE для доступа generator.js.
 * ============================================================
 */

// Импортируем все отдельные блоки данных:
import { MATTER_SOURCES } from './materials.js';
import { ELEMENTS } from './materials.js';
import { ENTITIES, NATURE_PREFIXES } from './lifeforms.js';
import { LAWS_DEVIATIONS, SEEDS } from './law_physics.js';


/** 
 * Создаем единый объект знания (KNOWLEDGE_BASE) из всех импортированных модулей.
 */
const KNOWLEDGE_BASE = {
    ELEMENTS: ELEMENTS,          // Основы пространства и фона
    MATTER_SOURCES: MATTER_SOURCES,// Физические строительные блоки (Металл, Стекло, Сахар)
    NATURE_PREFIXES: NATURE_PREFIXES,// Модификаторы текста (Прилагательные)
    ENTITIES: ENTITIES,          // Сущности и Объекты (Живое и Искусственное)
    LAWS_DEVIATIONS: LAWS_DEVIATIONS,// Физические законы мира
    SEEDS: SEEDS                 // Настройка генератора (Настроение/Байес)
};


/** 
 * Публикация данных в глобальное окно браузера. 
 * Это делает KNOWLEDGE_BASE доступным для generator.js, так как модули не передают переменные напрямую через "import".
 */
window.KNOWLEDGE_BASE = KNOWLEDGE_BASE; 

console.log("=============================================================");
console.log("[DATA LOADER] Система успешно собрала все компоненты данных.");
console.log("КNOWLEDGE_BASE готов к генерации!");
console.log("=============================================================");
