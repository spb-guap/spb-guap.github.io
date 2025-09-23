export function createInteractiveGrid(elementQuery, horizontalCount = 3, verticalCount = 3) {
    let targetElement = document.querySelector(elementQuery);
    // Создаем контейнер для сетки
    const gridContainer = document.createElement('div');
    gridContainer.style.position = 'absolute';
    gridContainer.style.top = '0';
    gridContainer.style.left = '0';
    gridContainer.style.width = '100%';
    gridContainer.style.height = '100%';
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${horizontalCount}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${verticalCount}, 1fr)`;
    gridContainer.style.pointerEvents = 'none';
    gridContainer.style.gap = '2px';
    gridContainer.style.padding = '2px';
    gridContainer.style.boxSizing = 'border-box';
    gridContainer.style.zIndex = '9999';
    
    // Убедимся, что целевой элемент имеет относительное позиционирование
    if (getComputedStyle(targetElement).position === 'static') {
        targetElement.style.position = 'relative';
    }
    
    // Массив для хранения прямоугольников
    const rectangles = [];
    const totalCells = horizontalCount * verticalCount;
    
    // Создаем прямоугольники
    for (let i = 0; i < totalCells; i++) {
        const rect = document.createElement('div');
        rect.style.border = '3px solid rgba(0, 0, 0, 0.7)';
        rect.style.borderRadius = '8px';
        rect.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        rect.style.transition = 'border-color 0.2s ease, transform 0.1s ease';
        rect.style.pointerEvents = 'auto';
        rect.style.cursor = 'pointer';
        
        // Храним информацию о позиции
        rect.dataset.index = i;
        rect.dataset.row = Math.floor(i / horizontalCount);
        rect.dataset.col = i % horizontalCount;
        
        // Событие при наведении
        rect.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.borderColor = '#FFEB3B';
                this.style.transform = 'scale(1.02)';
            }
        });
        
        // Событие при уходе курсора
        rect.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.borderColor = 'rgba(0, 0, 0, 0.7)';
                this.style.transform = 'scale(1)';
            }
        });
        
        // Событие при клике
        rect.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Сбрасываем активность у всех прямоугольников
            rectangles.forEach(r => {
                r.classList.remove('active');
                r.style.borderColor = 'rgba(0, 0, 0, 0.7)';
                r.style.transform = 'scale(1)';
            });
            
            // Активируем текущий прямоугольник
            this.classList.add('active');
            this.style.borderColor = '#FFEB3B';
        });
        
        rectangles.push(rect);
        gridContainer.appendChild(rect);
    }
    
    // Добавляем сетку поверх целевого элемента
    targetElement.parentNode.appendChild(gridContainer);
    
    // Функция для удаления сетки
    function removeGrid() {
        if (gridContainer.parentNode === targetElement) {
            targetElement.removeChild(gridContainer);
        }
    }
    
    // Функция для получения активного прямоугольника
    function getActiveRectangle() {
        const activeRect = rectangles.find(rect => rect.classList.contains('active'));
        return activeRect ? parseInt(activeRect.dataset.index) : -1;
    }
    
    // Функция для получения позиции активного прямоугольника
    function getActivePosition() {
        const activeRect = rectangles.find(rect => rect.classList.contains('active'));
        if (activeRect) {
            return {
                index: parseInt(activeRect.dataset.index),
                row: parseInt(activeRect.dataset.row),
                col: parseInt(activeRect.dataset.col)
            };
        }
        return null;
    }
    
    // Функция для сброса всех выделений
    function resetSelection() {
        rectangles.forEach(rect => {
            rect.classList.remove('active');
            rect.style.borderColor = 'rgba(0, 0, 0, 0.7)';
            rect.style.transform = 'scale(1)';
        });
    }
    
    return {
        remove: removeGrid,
        getActiveIndex: getActiveRectangle,
        getActivePosition: getActivePosition,
        reset: resetSelection,
        rectangles: rectangles,
        gridSize: {
            horizontal: horizontalCount,
            vertical: verticalCount,
            total: totalCells
        }
    };
}